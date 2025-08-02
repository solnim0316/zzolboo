/**
 * 무료 이미지 생성 대안들
 * OpenAI API 비용 없이 이미지를 생성할 수 있는 방법들
 */

// 1. Stable Diffusion WebUI API (로컬)
class LocalStableDiffusionGenerator {
  constructor(baseUrl = 'http://localhost:7860') {
    this.baseUrl = baseUrl;
  }

  async generateImage(prompt, options = {}) {
    const payload = {
      prompt: prompt,
      negative_prompt: options.negativePrompt || "blurry, low quality, distorted",
      steps: options.steps || 20,
      cfg_scale: options.cfgScale || 7.5,
      width: options.width || 512,
      height: options.height || 512,
      sampler_name: options.sampler || "DPM++ 2M Karras"
    };

    try {
      const response = await fetch(`${this.baseUrl}/sdapi/v1/txt2img`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Stable Diffusion API 호출 실패');
      
      const result = await response.json();
      return result.images[0]; // base64 encoded image
    } catch (error) {
      console.error('로컬 Stable Diffusion 오류:', error);
      throw error;
    }
  }
}

// 2. Hugging Face 무료 API
class HuggingFaceGenerator {
  constructor(apiKey = null) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api-inference.huggingface.co/models';
  }

  async generateImage(prompt, model = 'stabilityai/stable-diffusion-2-1') {
    const headers = {
      'Content-Type': 'application/json'
    };
    
    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    try {
      const response = await fetch(`${this.baseUrl}/${model}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ inputs: prompt })
      });

      if (!response.ok) throw new Error('Hugging Face API 호출 실패');
      
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Hugging Face API 오류:', error);
      throw error;
    }
  }
}

// 3. Replicate 무료 티어
class ReplicateGenerator {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.replicate.com/v1/predictions';
  }

  async generateImage(prompt, model = 'stability-ai/stable-diffusion') {
    const headers = {
      'Authorization': `Token ${this.apiKey}`,
      'Content-Type': 'application/json'
    };

    try {
      // 예측 시작
      const startResponse = await fetch(this.baseUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          version: 'db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf',
          input: {
            prompt: prompt,
            width: 512,
            height: 512
          }
        })
      });

      if (!startResponse.ok) throw new Error('Replicate API 호출 실패');
      
      const prediction = await startResponse.json();
      
      // 결과 대기
      return await this.waitForResult(prediction.id);
    } catch (error) {
      console.error('Replicate API 오류:', error);
      throw error;
    }
  }

  async waitForResult(predictionId, maxAttempts = 30) {
    for (let i = 0; i < maxAttempts; i++) {
      const response = await fetch(`${this.baseUrl}/${predictionId}`, {
        headers: { 'Authorization': `Token ${this.apiKey}` }
      });
      
      const prediction = await response.json();
      
      if (prediction.status === 'succeeded') {
        return prediction.output[0];
      } else if (prediction.status === 'failed') {
        throw new Error('이미지 생성 실패');
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    throw new Error('시간 초과');
  }
}

// 4. 무료 이미지 생성 서비스들
class FreeImageServices {
  static async generateWithLeonardo(prompt) {
    // Leonardo.ai 무료 크레딧 사용
    // 실제 구현은 Leonardo API 필요
    console.log('Leonardo.ai 무료 크레딧으로 생성:', prompt);
  }

  static async generateWithMidjourney(prompt) {
    // Midjourney Discord 봇 사용
    // 실제 구현은 Discord API 필요
    console.log('Midjourney Discord 봇으로 생성:', prompt);
  }
}

// 5. 프롬프트 최적화 (무료)
class PromptOptimizer {
  static optimizeForFreeServices(prompt, style = 'food') {
    const basePrompts = {
      food: {
        prefix: 'cute cartoon illustration, thick black outline, flat design, soft pastel colors',
        suffix: 'centered on plate, white background, simple composition, high quality'
      },
      character: {
        prefix: 'kawaii style, chibi character, cute anime style',
        suffix: 'clean background, high quality, detailed'
      }
    };

    const styleConfig = basePrompts[style] || basePrompts.food;
    return `${styleConfig.prefix}, ${prompt}, ${styleConfig.suffix}`;
  }

  static createNegativePrompt() {
    return 'blurry, low quality, distorted, ugly, deformed, watermark, text, signature';
  }
}

// 6. 배치 처리 유틸리티 (무료 서비스용)
class FreeBatchProcessor {
  constructor(generator, options = {}) {
    this.generator = generator;
    this.delay = options.delay || 2000; // 무료 API는 rate limit이 있음
    this.maxRetries = options.maxRetries || 3;
  }

  async processBatch(items, onProgress) {
    const results = [];
    const errors = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      
      try {
        onProgress?.(i + 1, items.length, `생성 중: ${item.name}`);
        
        const optimizedPrompt = PromptOptimizer.optimizeForFreeServices(
          item.description || item.name
        );
        
        const imageUrl = await this.generator.generateImage(optimizedPrompt);
        
        results.push({
          id: item.id,
          name: item.name,
          imageUrl,
          prompt: optimizedPrompt
        });

        // Rate limit 방지
        if (i < items.length - 1) {
          await new Promise(resolve => setTimeout(resolve, this.delay));
        }
      } catch (error) {
        console.error(`${item.name} 생성 실패:`, error);
        errors.push({ item, error: error.message });
      }
    }

    return { results, errors };
  }
}

// 7. 설정 관리
class FreeImageGeneratorConfig {
  static getConfig() {
    return {
      // 로컬 Stable Diffusion 설정
      localSD: {
        enabled: false,
        baseUrl: 'http://localhost:7860',
        model: 'stable-diffusion-v1-5'
      },
      
      // Hugging Face 설정
      huggingFace: {
        enabled: true,
        apiKey: null, // 무료로 사용 가능 (rate limit 있음)
        model: 'stabilityai/stable-diffusion-2-1'
      },
      
      // Replicate 설정
      replicate: {
        enabled: false,
        apiKey: null, // 무료 티어 있음
        model: 'stability-ai/stable-diffusion'
      },
      
      // 배치 처리 설정
      batch: {
        delay: 3000, // 무료 API는 더 긴 딜레이 필요
        maxRetries: 2,
        maxConcurrent: 1 // 무료 API는 동시 요청 제한
      }
    };
  }
}

// 메인 클래스
class FreeImageGenerator {
  constructor(config = {}) {
    this.config = { ...FreeImageGeneratorConfig.getConfig(), ...config };
    this.generators = this.initializeGenerators();
  }

  initializeGenerators() {
    const generators = {};

    if (this.config.localSD.enabled) {
      generators.localSD = new LocalStableDiffusionGenerator(this.config.localSD.baseUrl);
    }

    if (this.config.huggingFace.enabled) {
      generators.huggingFace = new HuggingFaceGenerator(this.config.huggingFace.apiKey);
    }

    if (this.config.replicate.enabled && this.config.replicate.apiKey) {
      generators.replicate = new ReplicateGenerator(this.config.replicate.apiKey);
    }

    return generators;
  }

  async generateImage(prompt, options = {}) {
    const optimizedPrompt = PromptOptimizer.optimizeForFreeServices(prompt, options.style);
    
    // 사용 가능한 생성기 순서대로 시도
    for (const [name, generator] of Object.entries(this.generators)) {
      try {
        console.log(`${name}로 이미지 생성 시도:`, optimizedPrompt);
        const result = await generator.generateImage(optimizedPrompt, options);
        return { success: true, generator: name, result };
      } catch (error) {
        console.warn(`${name} 생성 실패:`, error.message);
        continue;
      }
    }

    throw new Error('모든 이미지 생성기 실패');
  }

  async generateBatch(foodList, onProgress) {
    const generator = Object.values(this.generators)[0];
    if (!generator) {
      throw new Error('사용 가능한 이미지 생성기가 없습니다');
    }

    const processor = new FreeBatchProcessor(generator, this.config.batch);
    return await processor.processBatch(foodList, onProgress);
  }
}

export {
  FreeImageGenerator,
  LocalStableDiffusionGenerator,
  HuggingFaceGenerator,
  ReplicateGenerator,
  PromptOptimizer,
  FreeBatchProcessor,
  FreeImageGeneratorConfig
}; 