// 이미지 생성 시스템 테스트 스크립트
import { AutoImageGenerator } from '../src/utils/autoImageGenerator.js';

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
    
    const imageUrl = await generator.generateSingleImage(testFood, 2);
    
    console.log('✅ 이미지 생성 성공!');
    console.log(`📎 이미지 URL: ${imageUrl}`);
    
  } catch (error) {
    console.error('❌ 이미지 생성 실패:', error.message);
  }
}

// 메인 실행
async function main() {
  try {
    await testImageGenerator();
    
    // 실제 생성 테스트는 선택적으로 실행
    const args = process.argv.slice(2);
    if (args.includes('--generate')) {
      await testActualGeneration();
    } else {
      console.log('\n💡 실제 이미지 생성을 테스트하려면:');
      console.log('   node scripts/testImageGenerator.js --generate');
    }
    
  } catch (error) {
    console.error('❌ 테스트 중 오류 발생:', error);
  }
}

// 스크립트가 직접 실행될 때만 실행
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { testImageGenerator, testActualGeneration }; 