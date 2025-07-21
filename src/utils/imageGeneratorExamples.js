/**
 * 사용 예시 모음
 * 다양한 테스트 타입에서 이미지 생성 기능을 사용하는 방법
 */

import { generateResultImage, downloadImage, generateDinosaurImage, generateCatImage } from '../utils/imageGenerator';

// === 1. 기본 사용법 ===
export const basicUsage = async () => {
  const imageData = await generateResultImage({
    testType: 'dinosaur',
    result: 'ENFP',
    characterImage: '/images/tests/dinosaur/ENFP.png',
    userName: '김철수',
    description: '활발하고 창의적인 성격의 브라키오사우루스입니다.',
    characterName: '브라키오사우루스'
  });
  
  // 이미지 다운로드
  downloadImage(imageData, '김철수_ENFP_결과.png');
};

// === 2. 공룡 테스트 전용 함수 ===
export const dinosaurTestExample = async () => {
  const imageData = await generateDinosaurImage({
    result: 'INTJ',
    characterImage: '/images/tests/dinosaur/INTJ.png',
    userName: '이영희',
    description: '전략적이고 독립적인 성격의 벨로시랩터입니다.',
    characterName: '벨로시랩터'
  });
  
  return imageData;
};

// === 3. 고양이 테스트 전용 함수 ===
export const catTestExample = async () => {
  const imageData = await generateCatImage({
    result: 'ISFP',
    characterImage: '/images/tests/cat/ISFP.png',
    userName: '박민수',
    description: '예술적이고 감성적인 성격의 페르시안 고양이입니다.',
    characterName: '페르시안 고양이'
  });
  
  return imageData;
};

// === 4. 커스텀 설정 사용 ===
export const customConfigExample = async () => {
  const customConfig = {
    bgColor: '#FF1493',
    bgGradient: ['#FFB6C1', '#FF1493'],
    textColor: '#FFFFFF',
    titleFontSize: 32,
    canvasWidth: 800,
    canvasHeight: 1000
  };
  
  const imageData = await generateResultImage({
    testType: 'custom',
    result: 'ESTP',
    characterImage: '/images/custom/character.png',
    userName: '최지원',
    description: '에너지 넘치는 성격의 특별한 캐릭터입니다.',
    characterName: '특별한 친구',
    customConfig
  });
  
  return imageData;
};

// === 5. React 컴포넌트에서 사용 ===
import React from 'react';
import ImageGeneratorComponent from '../components/common/ImageGeneratorComponent';

export const ReactComponentExample = () => {
  // 테스트 결과 데이터 (실제로는 state나 props에서)
  const testResult = {
    testType: 'dinosaur',
    result: 'ENFJ',
    characterImage: '/images/tests/dinosaur/ENFJ.png',
    userName: '홍길동',
    description: '따뜻하고 배려심 깊은 성격의 트리케라톱스입니다.',
    characterName: '트리케라톱스'
  };
  
  return (
    <div>
      <h2>테스트 결과</h2>
      <p>{testResult.userName}님의 결과: {testResult.result}</p>
      
      {/* 이미지 생성 컴포넌트 */}
      <ImageGeneratorComponent {...testResult} />
    </div>
  );
};

// === 6. 바닐라 JS에서 사용 (HTML 페이지) ===
export const vanillaJSExample = `
<!-- HTML -->
<button id="generateBtn">이미지 생성</button>
<div id="imageContainer"></div>

<script type="module">
import { generateResultImage, downloadImage } from './src/utils/imageGenerator.js';

document.getElementById('generateBtn').addEventListener('click', async () => {
  const imageData = await generateResultImage({
    testType: 'cat',
    result: 'INFP',
    characterImage: '/images/tests/cat/INFP.png',
    userName: '사용자',
    description: '꿈꾸는 예술가 성격의 러시안블루 고양이입니다.',
    characterName: '러시안블루'
  });
  
  // 미리보기 표시
  const img = document.createElement('img');
  img.src = imageData;
  document.getElementById('imageContainer').appendChild(img);
  
  // 자동 다운로드
  downloadImage(imageData, '결과이미지.png');
});
</script>
`;

// === 7. 다른 프레임워크에서 사용 (Vue.js 예시) ===
export const vueExample = `
<!-- Vue.js Template -->
<template>
  <div>
    <button @click="generateImage">이미지 생성</button>
    <img v-if="generatedImage" :src="generatedImage" alt="결과 이미지" />
  </div>
</template>

<script>
import { generateResultImage } from '../utils/imageGenerator.js';

export default {
  data() {
    return {
      generatedImage: null
    };
  },
  methods: {
    async generateImage() {
      this.generatedImage = await generateResultImage({
        testType: 'dinosaur',
        result: this.userResult,
        characterImage: this.characterImagePath,
        userName: this.userName,
        description: this.resultDescription,
        characterName: this.characterName
      });
    }
  }
};
</script>
`;

// === 8. 새로운 테스트 타입 추가 방법 ===
export const addNewTestType = `
// imageGenerator.js의 testConfigs에 새 타입 추가
const testConfigs = {
  // 기존 설정들...
  
  // 새로운 테스트 타입
  robot: {
    bgColor: '#2C3E50',
    bgGradient: ['#34495E', '#2C3E50'],
    textColor: '#ECF0F1',
    titleFontSize: 30,
    subtitleFontSize: 22,
    descriptionFontSize: 18,
    characterSize: 220,
    canvasWidth: 650,
    canvasHeight: 850
  }
};

// 사용법
const robotImage = await generateResultImage({
  testType: 'robot',
  result: 'ISTJ',
  characterImage: '/images/tests/robot/ISTJ.png',
  userName: '사용자',
  description: '체계적이고 신뢰할 수 있는 로봇입니다.',
  characterName: '가디언 로봇'
});
`;

// === 9. 에러 처리 예시 ===
export const errorHandlingExample = async () => {
  try {
    const imageData = await generateResultImage({
      testType: 'dinosaur',
      result: 'MBTI_TYPE',
      characterImage: '/invalid/path.png', // 잘못된 경로
      userName: '테스트',
      description: '테스트 설명'
    });
    
    downloadImage(imageData);
  } catch (error) {
    console.error('이미지 생성 실패:', error);
    
    // 사용자에게 알림
    alert('이미지 생성에 실패했습니다. 잠시 후 다시 시도해주세요.');
    
    // 대체 방안 실행 (예: 기본 이미지 제공)
    // fallbackImageGeneration();
  }
};
