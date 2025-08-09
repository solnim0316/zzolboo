/**
 * 🎨 Hugging Face 무료 API 이미지 생성 시스템
 * 고퀄리티 이미지를 무료로 생성
 */

// Hugging Face API 설정
const HUGGINGFACE_CONFIG = {
  // 무료 모델들 (월 30,000회 무료 API 호출)
  models: {
    // 🔧 가장 기본적이고 확실한 모델들로 변경!
    stableDiffusion: "stabilityai/stable-diffusion-2-1",
    stableDiffusionXL: "stabilityai/stable-diffusion-xl-base-1.0",
    animeStyle: "stabilityai/stable-diffusion-2-1", // ✅ 가장 기본적인 모델!
    realistic: "stabilityai/stable-diffusion-2-1",
    anime: "stabilityai/stable-diffusion-2-1"
  },
  
  // 기본 설정
  defaultParams: {
    num_inference_steps: 30, // 더 빠른 생성
    guidance_scale: 7.5,
    width: 512,
    height: 512,
    num_images_per_prompt: 1
  }
};

/**
 * Hugging Face API 키 가져오기
 */
const getHuggingFaceAPIKey = () => {
  // 브라우저 환경에서는 import.meta.env 사용
  return import.meta.env?.VITE_HUGGINGFACE_API_KEY || 
         localStorage.getItem('huggingface_api_key');
};

/**
 * 고퀄리티 프롬프트 생성
 */
const generateOptimizedPrompt = (characterData) => {
  const { character_name, title, world, hook, characteristics } = characterData;
  
  // 기본 프롬프트 - 이세계 캐릭터에 특화
  let prompt = `masterpiece, best quality, highly detailed anime character portrait, `;
  prompt += `${character_name}, ${title}, `;
  prompt += `isekai fantasy world character, ${world}, `;
  prompt += `beautiful lighting, vibrant colors, professional illustration, `;
  prompt += `detailed face, appealing design, soft shadows, atmospheric, `;
  prompt += `4k resolution, ultra detailed, perfect anatomy, `;
  prompt += `anime style, fantasy art, character portrait, `;
  prompt += `magical aura, fantasy costume, detailed clothing, `;
  prompt += `expressive eyes, beautiful hair, fantasy background`;
  
  // 특성 추가
  if (characteristics && characteristics.length > 0) {
    prompt += `, ${characteristics.join(', ')}`;
  }
  
  // 캐릭터별 특화 프롬프트
  if (title.includes('마법사')) {
    prompt += `, wizard robes, magical staff, spell effects, mystical aura`;
  } else if (title.includes('용사')) {
    prompt += `, knight armor, sword, heroic pose, noble expression`;
  } else if (title.includes('마왕')) {
    prompt += `, dark lord, demonic features, evil aura, dark magic`;
  } else if (title.includes('기사')) {
    prompt += `, holy knight, sacred armor, divine light, righteous pose`;
  } else if (title.includes('펫')) {
    prompt += `, cute companion, magical pet, adorable features`;
  } else if (title.includes('힐러')) {
    prompt += `, healer robes, gentle expression, healing light, peaceful aura`;
  }
  
  return prompt;
};

/**
 * 네거티브 프롬프트 생성
 */
const generateNegativePrompt = () => {
  return `blurry, low quality, distorted, ugly, bad anatomy, ` +
         `extra limbs, missing limbs, poorly drawn hands, ` +
         `poorly drawn face, mutation, mutated, extra fingers, ` +
         `fewer digits, fused fingers, long neck, cross-eyed, ` +
         `watermark, signature, text, logo, multiple heads, ` +
         `deformed, disfigured, bad proportions, gross proportions`;
};

/**
 * Hugging Face API로 이미지 생성
 */
export const generateImageWithHuggingFace = async (characterType, modelType = 'animeStyle') => {
  try {
    const apiKey = getHuggingFaceAPIKey();
    
    if (!apiKey) {
      throw new Error('Hugging Face API 키가 필요합니다. https://huggingface.co/settings/tokens 에서 발급받으세요.');
    }
    
    // 캐릭터 데이터 가져오기
    const { isekaiTestData } = await import('../data/isekaiTestData.js');
    const characterData = isekaiTestData.results[characterType];
    
    if (!characterData) {
      throw new Error(`캐릭터 타입 "${characterType}"을 찾을 수 없습니다.`);
    }
    
    // 프롬프트 생성
    const positivePrompt = generateOptimizedPrompt(characterData);
    const negativePrompt = generateNegativePrompt();
    
    // 모델 선택
    const model = HUGGINGFACE_CONFIG.models[modelType] || HUGGINGFACE_CONFIG.models.animeStyle;
    
    // API 요청
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${model}`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: positivePrompt,
          parameters: {
            ...HUGGINGFACE_CONFIG.defaultParams,
            negative_prompt: negativePrompt,
            // 고품질을 위한 추가 설정
            num_inference_steps: 50,
            guidance_scale: 7.5,
            width: 512,
            height: 512,
            seed: Math.floor(Math.random() * 1000000) // 랜덤 시드
          }
        }),
      }
    );
    
    if (!response.ok) {
      let errorMessage = `Hugging Face API 오류: ${response.status} ${response.statusText}`;
      
      try {
        const errorData = await response.json();
        if (errorData.error) {
          errorMessage = `Hugging Face API 오류: ${errorData.error}`;
        }
      } catch (parseError) {
        // JSON 파싱 실패 시 텍스트로 읽기 시도
        try {
          const errorText = await response.text();
          errorMessage = `Hugging Face API 오류: ${response.status} - ${errorText.substring(0, 100)}`;
        } catch (textError) {
          errorMessage = `Hugging Face API 오류: ${response.status} ${response.statusText}`;
        }
      }
      
      throw new Error(errorMessage);
    }
    
    // 이미지 데이터 반환
    const imageBlob = await response.blob();
    const imageUrl = URL.createObjectURL(imageBlob);
    
    return {
      url: imageUrl,
      blob: imageBlob,
      prompt: positivePrompt,
      negativePrompt: negativePrompt,
      model: model
    };
    
  } catch (error) {
    console.error('Hugging Face 이미지 생성 실패:', error);
    throw error;
  }
};

/**
 * 여러 모델로 이미지 생성 (비교용)
 */
export const generateMultipleImages = async (characterType) => {
  const models = Object.keys(HUGGINGFACE_CONFIG.models);
  const results = {};
  
  for (const model of models) {
    try {
      const result = await generateImageWithHuggingFace(characterType, model);
      results[model] = result;
    } catch (error) {
      console.warn(`${model} 모델로 이미지 생성 실패:`, error);
      results[model] = { error: error.message };
    }
  }
  
  return results;
};

/**
 * 이미지 품질 향상 (후처리)
 */
export const enhanceImage = async (imageUrl) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      // 이미지 품질 향상 필터 적용
      ctx.filter = 'brightness(1.05) contrast(1.1) saturate(1.1)';
      ctx.drawImage(img, 0, 0);
      
      // 추가 개선
      ctx.globalCompositeOperation = 'overlay';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const enhancedUrl = canvas.toDataURL('image/png', 0.95);
      resolve(enhancedUrl);
    };
    
    img.src = imageUrl;
  });
};

/**
 * API 키 저장
 */
export const saveHuggingFaceAPIKey = (apiKey) => {
  localStorage.setItem('huggingface_api_key', apiKey);
};

/**
 * API 키 확인
 */
export const checkAPIKey = () => {
  const apiKey = getHuggingFaceAPIKey();
  return !!apiKey;
};

/**
 * 사용 가능한 모델 목록
 */
export const getAvailableModels = () => {
  return Object.entries(HUGGINGFACE_CONFIG.models).map(([key, value]) => ({
    key,
    name: getModelDisplayName(key),
    url: value
  }));
};

const getModelDisplayName = (key) => {
  const names = {
    stableDiffusion: 'Stable Diffusion v1.5',
    stableDiffusionXL: 'Stable Diffusion XL',
    animeStyle: 'Anime Style (Animagine XL)',
    realistic: 'Realistic (SD 2.1)',
    anime: 'Anime (Anything v3.0)'
  };
  return names[key] || key;
};

export default {
  generateImageWithHuggingFace,
  generateMultipleImages,
  enhanceImage,
  saveHuggingFaceAPIKey,
  checkAPIKey,
  getAvailableModels,
  HUGGINGFACE_CONFIG
}; 