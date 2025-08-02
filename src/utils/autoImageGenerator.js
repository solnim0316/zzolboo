// 자동화된 이미지 생성 시스템
// 수박 스테이크 스타일 기반

export class AutoImageGenerator {
  constructor() {
    this.apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    this.baseUrl = 'https://api.openai.com/v1/images/generations';
    this.styleTemplate = this.getStyleTemplate();
  }

  // 수박 스테이크 스타일 템플릿
  getStyleTemplate() {
    return {
      artStyle: "cute cartoon illustration, thick black outline, flat design",
      colorPalette: "soft pastel colors, peach/salmon background",
      composition: "centered on plate, white background, simple composition",
      texture: "subtle noise texture, hand-drawn feel, warm analog feeling",
      quality: "high quality, detailed, professional food illustration"
    };
  }

  // 음식별 프롬프트 생성
  generateFoodPrompt(foodData) {
    const { name, description, emoji } = foodData;
    
    // 음식 타입별 스타일 조정
    const foodStyle = this.getFoodStyle(name);
    
    const prompt = `Create a beautiful food illustration of ${name} in ${this.styleTemplate.artStyle}. 
    ${foodStyle.additionalStyle}
    Style: ${this.styleTemplate.colorPalette}, ${this.styleTemplate.composition}
    Texture: ${this.styleTemplate.texture}
    Quality: ${this.styleTemplate.quality}
    Must include: ${emoji} style elements, cute and appealing presentation
    Background: ${this.styleTemplate.colorPalette}
    No text, no logos, pure illustration only`;

    return prompt;
  }

  // 음식별 스타일 조정
  getFoodStyle(foodName) {
    const styleMap = {
      // 한식
      '불고기': { additionalStyle: 'Korean BBQ style, grilled meat with sauce, traditional Korean plate' },
      '비빔밥': { additionalStyle: 'colorful vegetables arranged beautifully, stone bowl style' },
      '삼겹살': { additionalStyle: 'grilled pork belly, Korean BBQ style, lettuce wrap elements' },
      '김치찌개': { additionalStyle: 'spicy Korean stew, bubbling hot pot, red color theme' },
      '떡볶이': { additionalStyle: 'chewy rice cakes in spicy sauce, street food style' },
      
      // 일식
      '초밥': { additionalStyle: 'Japanese sushi style, fresh fish on rice, elegant presentation' },
      '라멘': { additionalStyle: 'Japanese ramen bowl, steaming hot soup, noodles and toppings' },
      '우동': { additionalStyle: 'thick Japanese noodles, hot soup, traditional bowl' },
      
      // 중식
      '짜장면': { additionalStyle: 'Chinese black bean sauce noodles, traditional Chinese bowl' },
      '탕수육': { additionalStyle: 'sweet and sour pork, crispy fried meat, Chinese style' },
      
      // 양식
      '스테이크': { additionalStyle: 'grilled steak, meat texture, western plate style' },
      '파스타': { additionalStyle: 'Italian pasta, creamy or tomato sauce, fork and plate' },
      '피자': { additionalStyle: 'Italian pizza, melted cheese, wood-fired oven style' },
      
      // 특별한 메뉴들
      '수박스테이크': { additionalStyle: 'watermelon cut like steak, grill marks, creative food art' },
      '초코치킨': { additionalStyle: 'chocolate covered chicken, unusual food combination' },
      '김치피자': { additionalStyle: 'kimchi on pizza, Korean-Italian fusion' },
      
      // 기본 스타일
      'default': { additionalStyle: 'delicious food presentation, appetizing appearance' }
    };

    return styleMap[foodName] || styleMap['default'];
  }

  // 배치 이미지 생성
  async generateBatchImages(foodList, options = {}) {
    const {
      delay = 1000, // API 호출 간격 (ms)
      maxRetries = 3,
      onProgress = null,
      onComplete = null,
      onError = null
    } = options;

    const results = [];
    const errors = [];

    for (let i = 0; i < foodList.length; i++) {
      const food = foodList[i];
      
      try {
        // 진행 상황 업데이트
        if (onProgress) {
          onProgress({
            current: i + 1,
            total: foodList.length,
            food: food.name,
            percentage: Math.round(((i + 1) / foodList.length) * 100)
          });
        }

        // 이미지 생성
        const imageUrl = await this.generateSingleImage(food, maxRetries);
        
        results.push({
          id: food.id,
          name: food.name,
          imageUrl,
          success: true,
          timestamp: new Date().toISOString()
        });

        // API 호출 간격 대기
        if (i < foodList.length - 1) {
          await this.sleep(delay);
        }

      } catch (error) {
        console.error(`Failed to generate image for ${food.name}:`, error);
        
        errors.push({
          id: food.id,
          name: food.name,
          error: error.message,
          success: false,
          timestamp: new Date().toISOString()
        });

        if (onError) {
          onError(error, food);
        }
      }
    }

    // 완료 콜백
    if (onComplete) {
      onComplete({
        total: foodList.length,
        successful: results.length,
        failed: errors.length,
        results,
        errors
      });
    }

    return { results, errors };
  }

  // 단일 이미지 생성
  async generateSingleImage(foodData, maxRetries = 3) {
    const prompt = this.generateFoodPrompt(foodData);
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(this.baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`
          },
          body: JSON.stringify({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
            quality: "standard",
            style: "natural"
          })
        });

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        if (data.data && data.data[0] && data.data[0].url) {
          return data.data[0].url;
        } else {
          throw new Error('No image URL in response');
        }

      } catch (error) {
        console.error(`Attempt ${attempt} failed for ${foodData.name}:`, error);
        
        if (attempt === maxRetries) {
          throw error;
        }
        
        // 재시도 전 대기
        await this.sleep(2000 * attempt);
      }
    }
  }

  // 이미지 다운로드 및 저장
  async downloadAndSaveImage(imageUrl, fileName) {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      // Blob을 File 객체로 변환
      const file = new File([blob], fileName, { type: blob.type });
      
      return file;
    } catch (error) {
      console.error('Failed to download image:', error);
      throw error;
    }
  }

  // 유틸리티 함수
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // 진행 상황 추적
  createProgressTracker() {
    return {
      startTime: Date.now(),
      completed: 0,
      failed: 0,
      total: 0,
      
      update(completed, failed, total) {
        this.completed = completed;
        this.failed = failed;
        this.total = total;
      },
      
      getProgress() {
        const elapsed = Date.now() - this.startTime;
        const successRate = this.total > 0 ? (this.completed / this.total) * 100 : 0;
        const estimatedTotal = this.total > 0 ? elapsed / (this.completed / this.total) : 0;
        const remaining = Math.max(0, estimatedTotal - elapsed);
        
        return {
          completed: this.completed,
          failed: this.failed,
          total: this.total,
          successRate: Math.round(successRate),
          elapsed: Math.round(elapsed / 1000),
          remaining: Math.round(remaining / 1000),
          percentage: Math.round((this.completed / this.total) * 100)
        };
      }
    };
  }
}

// 사용 예시
export const createImageGenerator = () => {
  return new AutoImageGenerator();
}; 