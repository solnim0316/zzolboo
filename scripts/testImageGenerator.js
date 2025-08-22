// 이미지 생성 시스템 테스트 스크립트
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// AutoImageGenerator 클래스 정의 (인라인으로 포함)
class AutoImageGenerator {
  constructor() {
    this.apiKey = process.env.VITE_OPENAI_API_KEY;
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

// 테스트용 음식 데이터
const testFoods = [
  {
    id: 1,
    name: "수박스테이크",
    description: "수박을 스테이크처럼 썰어먹는 신개념 요리!",
    emoji: "🍉🥩"
  },
  {
    id: 2,
    name: "초코치킨",
    description: "달콤한 초콜릿과 치킨의 충격적 만남!",
    emoji: "🍫🍗"
  },
  {
    id: 3,
    name: "김치피자",
    description: "매콤한 김치와 치즈의 이색 조화!",
    emoji: "🍕🌶️"
  }
];

async function testImageGenerator() {
  console.log('🎨 이미지 생성 시스템 테스트 시작...\n');

  const generator = new AutoImageGenerator();

  // 1. 프롬프트 생성 테스트
  console.log('📝 프롬프트 생성 테스트:');
  testFoods.forEach(food => {
    const prompt = generator.generateFoodPrompt(food);
    console.log(`\n${food.name}:`);
    console.log(prompt.substring(0, 200) + '...');
  });

  // 2. 스타일 템플릿 테스트
  console.log('\n🎨 스타일 템플릿 테스트:');
  const template = generator.getStyleTemplate();
  console.log(JSON.stringify(template, null, 2));

  // 3. 음식별 스타일 테스트
  console.log('\n🍽️ 음식별 스타일 테스트:');
  testFoods.forEach(food => {
    const style = generator.getFoodStyle(food.name);
    console.log(`${food.name}: ${style.additionalStyle}`);
  });

  // 4. 진행 상황 추적 테스트
  console.log('\n📊 진행 상황 추적 테스트:');
  const tracker = generator.createProgressTracker();
  tracker.update(5, 1, 10);
  const progress = tracker.getProgress();
  console.log(JSON.stringify(progress, null, 2));

  console.log('\n✅ 테스트 완료!');
}

// API 키 확인
function checkApiKey() {
  const apiKey = process.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    console.log('⚠️  API 키가 설정되지 않았습니다.');
    console.log('   .env 파일에 VITE_OPENAI_API_KEY를 설정하세요.');
    return false;
  }
  console.log('✅ API 키가 설정되어 있습니다.');
  return true;
}

// 실제 이미지 생성 테스트 (API 키가 있을 때만)
async function testActualGeneration() {
  if (!checkApiKey()) {
    return;
  }

  console.log('\n🚀 실제 이미지 생성 테스트 시작...');
  
  const generator = new AutoImageGenerator();
  
  try {
    // 첫 번째 음식만 테스트
    const testFood = testFoods[0];
    
    console.log(`\n📸 ${testFood.name} 이미지 생성 중...`);
    
    // 단일 이미지 생성 메서드 추가
    const imageUrl = await generator.generateSingleImage(testFood, 2);
    
    console.log('✅ 이미지 생성 성공!');
    console.log(`📎 이미지 URL: ${imageUrl}`);
    
  } catch (error) {
    console.error('❌ 이미지 생성 실패:', error.message);
  }
}

// 단일 이미지 생성 메서드 추가
AutoImageGenerator.prototype.generateSingleImage = async function(foodData, maxRetries = 3) {
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
      await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
    }
  }
};

// 메인 실행
async function main() {
  try {
    await testImageGenerator();
    
    // API 키 확인
    const hasApiKey = checkApiKey();
    
    // 실제 생성 테스트는 선택적으로 실행
    const args = process.argv.slice(2);
    if (args.includes('--generate') && hasApiKey) {
      await testActualGeneration();
    } else if (args.includes('--generate') && !hasApiKey) {
      console.log('\n❌ API 키가 없어서 실제 이미지 생성을 건너뜁니다.');
    } else {
      console.log('\n💡 실제 이미지 생성을 테스트하려면:');
      console.log('   npm run test:image-generator:generate');
    }
    
  } catch (error) {
    console.error('❌ 테스트 중 오류 발생:', error);
  }
}

// 스크립트 실행
main(); 