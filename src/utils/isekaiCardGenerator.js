/**
 * 🌍 이세계 카드 생성 시스템
 * Canvas API를 활용한 동적 카드 제작
 * 기존 이세계 테스트 데이터 활용 + Hugging Face 고품질 이미지
 */

import { isekaiTestData } from '../data/isekaiTestData.js';
import { generateImageWithHuggingFace, enhanceImage, checkAPIKey } from './huggingFaceImageGenerator.js';

// 카드 설정
const CARD_CONFIG = {
  width: 600,
  height: 800,
  sections: {
    header: { y: 0, height: 80 },           // 10%
    character: { y: 80, height: 280 },      // 35%
    tagline: { y: 360, height: 64 },        // 8%
    story: { y: 424, height: 200 },         // 25%
    details: { y: 624, height: 96 },        // 12%
    footer: { y: 720, height: 80 }          // 10%
  },
  colors: {
    primary: '#2C3E50',
    secondary: '#E74C3C',
    accent: '#8E44AD',
    background: '#ECF0F1',
    text: '#2C3E50',
    highlight: '#F39C12'
  },
  fonts: {
    header: 'bold 18px "Noto Sans KR"',
    title: 'bold 24px "Noto Sans KR"',
    tagline: 'italic 16px "Noto Sans KR"',
    body: '14px "Noto Sans KR"',
    small: '12px "Noto Sans KR"'
  }
};

/**
 * 이세계 카드 데이터 구조 (기존 테스트 데이터 활용)
 */
export const createIsekaiCardData = (characterType, userName = '', useAIImage = false) => {
  // 기존 이세계 테스트 데이터에서 캐릭터 정보 가져오기
  const characterData = isekaiTestData.results[characterType];
  
  if (!characterData) {
    throw new Error(`캐릭터 타입 "${characterType}"을 찾을 수 없습니다.`);
  }

  // 세계관 정보 가져오기
  const worldData = isekaiTestData.worlds[characterData.world];

  const cardData = {
    header: {
      title: '🌍 이세계 전이 완료! 당신의 운명은?',
      subtitle: '당신의 새로운 정체를 확인하세요'
    },
    character: {
      title: characterData.title,
      character_name: characterData.character_name,
      image: useAIImage ? null : (characterData.recommendation?.image || '/images/banner/1.webp'), // 🔧 AI 이미지 사용 시 null로 설정
      type: characterType,
      color: characterData.color
    },
    tagline: characterData.hook,
    story: characterData.story,
    details: {
      setting: worldData?.name || '미지의 세계',
      routine: characterData.routine
    },
    footer: {
      world: worldData?.name || '이세계',
      keywords: characterData.characteristics || ['새로운 세계', '모험', '성장']
    }
  };

  return cardData;
};

/**
 * 메인 카드 생성 함수 (Hugging Face 이미지 포함)
 */
export const generateIsekaiCard = async (characterType, userName = '', useAIImage = false) => {
  try {
    console.log('🎨 카드 생성 시작:', { characterType, userName, useAIImage });
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // 캔버스 크기 설정
    canvas.width = CARD_CONFIG.width;
    canvas.height = CARD_CONFIG.height;
    
    // 카드 데이터 생성
    const cardData = createIsekaiCardData(characterType, userName, useAIImage);
    console.log('📋 카드 데이터 생성 완료:', cardData.character);
    
    // AI 이미지 생성 (선택사항)
    if (useAIImage) {
      console.log('🤖 AI 이미지 생성 시도...');
      const hasAPIKey = checkAPIKey();
      console.log('🔑 API 키 상태:', hasAPIKey ? '있음' : '없음');
      
      if (hasAPIKey) {
        try {
          console.log('🤖 Hugging Face로 고품질 이미지 생성 중...');
          const aiImageResult = await generateImageWithHuggingFace(characterType, 'animeStyle');
          
          // 이미지 품질 향상
          const enhancedImageUrl = await enhanceImage(aiImageResult.url);
          cardData.character.image = enhancedImageUrl;
          
          console.log('✅ AI 이미지 생성 완료!');
        } catch (aiError) {
          console.warn('⚠️ AI 이미지 생성 실패, 기본 이미지 사용:', aiError);
          // AI 이미지 생성 실패 시 기본 이미지 사용
        }
      } else {
        console.warn('⚠️ API 키가 없어서 기본 이미지 사용');
      }
    } else {
      console.log('📷 기본 이미지 사용');
    }
    
    // 배경 그리기
    drawBackground(ctx);
    
    // 섹션별 렌더링
    drawHeader(ctx, cardData.header);
    await drawCharacter(ctx, cardData.character);
    drawTagline(ctx, cardData.tagline);
    drawStory(ctx, cardData.story);
    drawDetails(ctx, cardData.details);
    drawFooter(ctx, cardData.footer);
    
    // 최종 이미지 반환
    return canvas.toDataURL('image/png', 0.9);
    
  } catch (error) {
    console.error('이세계 카드 생성 실패:', error);
    throw error;
  }
};

/**
 * 배경 그리기
 */
const drawBackground = (ctx) => {
  // 그라디언트 배경
  const gradient = ctx.createLinearGradient(0, 0, 0, CARD_CONFIG.height);
  gradient.addColorStop(0, '#667eea');
  gradient.addColorStop(1, '#764ba2');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, CARD_CONFIG.width, CARD_CONFIG.height);
  
  // 장식 요소
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.fillRect(20, 20, CARD_CONFIG.width - 40, CARD_CONFIG.height - 40);
};

/**
 * 상단 헤더 그리기 (10%)
 */
const drawHeader = (ctx, headerData) => {
  const { y, height } = CARD_CONFIG.sections.header;
  
  // 제목
  ctx.fillStyle = CARD_CONFIG.colors.primary;
  ctx.font = CARD_CONFIG.fonts.header;
  ctx.textAlign = 'center';
  ctx.fillText(headerData.title, CARD_CONFIG.width / 2, y + 40);
  
  // 부제목
  ctx.fillStyle = CARD_CONFIG.colors.text;
  ctx.font = CARD_CONFIG.fonts.small;
  ctx.fillText(headerData.subtitle, CARD_CONFIG.width / 2, y + 60);
};

/**
 * 캐릭터 영역 그리기 (35%)
 */
const drawCharacter = async (ctx, characterData) => {
  const { y, height } = CARD_CONFIG.sections.character;
  
  try {
    // 캐릭터 이미지 로드 및 그리기
    if (characterData.image) {
      console.log('🖼️ 이미지 로딩 시도:', characterData.image);
      const img = await loadImage(characterData.image);
      console.log('✅ 이미지 로딩 성공:', characterData.image);
      
      const imgSize = 200;
      const imgX = (CARD_CONFIG.width - imgSize) / 2;
      const imgY = y + 20;
      
      // 원형 마스크
      ctx.save();
      ctx.beginPath();
      ctx.arc(imgX + imgSize/2, imgY + imgSize/2, imgSize/2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
      ctx.restore();
      
      // 이미지 테두리 효과
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(imgX + imgSize/2, imgY + imgSize/2, imgSize/2, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      console.warn('⚠️ 이미지 경로가 없음:', characterData);
    }
    
    // 캐릭터 제목 (기존 테스트 데이터의 title 사용)
    ctx.fillStyle = characterData.color || CARD_CONFIG.colors.secondary;
    ctx.font = CARD_CONFIG.fonts.title;
    ctx.textAlign = 'center';
    ctx.fillText(characterData.title, CARD_CONFIG.width / 2, y + height - 20);
    
  } catch (error) {
    console.error('❌ 캐릭터 이미지 로드 실패:', error);
    console.error('🖼️ 시도한 이미지 경로:', characterData.image);
    // 폴백: 텍스트만 표시
    ctx.fillStyle = characterData.color || CARD_CONFIG.colors.secondary;
    ctx.font = CARD_CONFIG.fonts.title;
    ctx.textAlign = 'center';
    ctx.fillText(characterData.title, CARD_CONFIG.width / 2, y + height / 2);
  }
};

/**
 * 태그라인 그리기 (8%)
 */
const drawTagline = (ctx, tagline) => {
  const { y, height } = CARD_CONFIG.sections.tagline;
  
  ctx.fillStyle = CARD_CONFIG.colors.accent;
  ctx.font = CARD_CONFIG.fonts.tagline;
  ctx.textAlign = 'center';
  ctx.fillText(`"${tagline}"`, CARD_CONFIG.width / 2, y + height / 2);
};

/**
 * 스토리 영역 그리기 (25%)
 */
const drawStory = (ctx, story) => {
  const { y, height } = CARD_CONFIG.sections.story;
  
  // 배경 박스 - 더 어울리는 색상으로 변경
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.fillRect(30, y + 10, CARD_CONFIG.width - 60, height - 20);
  
  // 제목
  ctx.fillStyle = CARD_CONFIG.colors.primary;
  ctx.font = CARD_CONFIG.fonts.header;
  ctx.textAlign = 'center';
  ctx.fillText('📘 당신의 이야기', CARD_CONFIG.width / 2, y + 35);
  
  // 스토리 텍스트 - 박스 안에 맞추기
  ctx.fillStyle = CARD_CONFIG.colors.text;
  ctx.font = CARD_CONFIG.fonts.body;
  ctx.textAlign = 'left';
  
  // 텍스트 줄바꿈 개선 - 박스 너비에 맞춤
  const maxWidth = CARD_CONFIG.width - 100; // 여백 확보
  const lines = wrapText(ctx, story, maxWidth);
  
  // 텍스트가 박스를 벗어나지 않도록 제한
  const maxLines = Math.floor((height - 60) / 18); // 줄 간격 18px
  const displayLines = lines.slice(0, maxLines);
  
  displayLines.forEach((line, index) => {
    ctx.fillText(line, 50, y + 60 + (index * 18));
  });
  
  // 텍스트가 잘린 경우 표시
  if (lines.length > maxLines) {
    ctx.fillStyle = CARD_CONFIG.colors.accent;
    ctx.font = CARD_CONFIG.fonts.small;
    ctx.fillText('...', 50, y + 60 + (maxLines * 18));
  }
};

/**
 * 상세 정보 그리기 (12%)
 */
const drawDetails = (ctx, details) => {
  const { y, height } = CARD_CONFIG.sections.details;
  
  // 설정 박스 (왼쪽)
  ctx.fillStyle = 'rgba(52, 152, 219, 0.8)';
  ctx.fillRect(30, y + 10, (CARD_CONFIG.width - 80) / 2, height - 20);
  
  ctx.fillStyle = 'white';
  ctx.font = CARD_CONFIG.fonts.small;
  ctx.textAlign = 'center';
  ctx.fillText('📖 설정', 30 + (CARD_CONFIG.width - 80) / 4, y + 30);
  
  // 설정 텍스트 줄바꿈
  const settingLines = wrapText(ctx, details.setting, (CARD_CONFIG.width - 80) / 2 - 20);
  settingLines.slice(0, 2).forEach((line, index) => {
    ctx.fillText(line, 30 + (CARD_CONFIG.width - 80) / 4, y + 50 + (index * 14));
  });
  
  // 루틴 박스 (오른쪽)
  ctx.fillStyle = 'rgba(155, 89, 182, 0.8)';
  ctx.fillRect(30 + (CARD_CONFIG.width - 80) / 2 + 20, y + 10, (CARD_CONFIG.width - 80) / 2, height - 20);
  
  ctx.fillStyle = 'white';
  ctx.font = CARD_CONFIG.fonts.small;
  ctx.textAlign = 'center';
  ctx.fillText('🧘‍♀️ 일상 루틴', 30 + (CARD_CONFIG.width - 80) / 2 + 20 + (CARD_CONFIG.width - 80) / 4, y + 30);
  
  // 루틴 텍스트 줄바꿈
  const routineLines = wrapText(ctx, details.routine, (CARD_CONFIG.width - 80) / 2 - 20);
  routineLines.slice(0, 2).forEach((line, index) => {
    ctx.fillText(line, 30 + (CARD_CONFIG.width - 80) / 2 + 20 + (CARD_CONFIG.width - 80) / 4, y + 50 + (index * 14));
  });
};

/**
 * 하단 영역 그리기 (10%)
 */
const drawFooter = (ctx, footer) => {
  const { y, height } = CARD_CONFIG.sections.footer;
  
  // 세계관 - 간결하게 표시
  ctx.fillStyle = CARD_CONFIG.colors.highlight;
  ctx.font = CARD_CONFIG.fonts.body;
  ctx.textAlign = 'center';
  ctx.fillText('🌍 아르카나 대륙 소속', CARD_CONFIG.width / 2, y + 25);
  
  // 키워드 - 줄바꿈 개선
  ctx.fillStyle = CARD_CONFIG.colors.text;
  ctx.font = CARD_CONFIG.fonts.small;
  
  const keywords = footer.keywords.slice(0, 3); // 최대 3개만 표시
  ctx.fillText(keywords.join(' • '), CARD_CONFIG.width / 2, y + 50);
};

/**
 * 유틸리티 함수들
 */
const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

const wrapText = (ctx, text, maxWidth) => {
  if (!text) return [];
  
  // 한글과 영어가 혼합된 텍스트 처리 개선
  const words = text.split(/(\s+)/);
  const lines = [];
  let currentLine = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine + word;
    const width = ctx.measureText(testLine).width;
    
    if (width <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) {
        lines.push(currentLine.trim());
      }
      currentLine = word;
    }
  }
  
  if (currentLine) {
    lines.push(currentLine.trim());
  }
  
  return lines.filter(line => line.length > 0);
};

/**
 * 사용 가능한 캐릭터 타입 목록 반환
 */
export const getAvailableCharacterTypes = () => {
  return Object.keys(isekaiTestData.results);
};

/**
 * 캐릭터 타입별 정보 반환
 */
export const getCharacterTypeInfo = (characterType) => {
  const characterData = isekaiTestData.results[characterType];
  if (!characterData) return null;
  
  return {
    title: characterData.title,
    character_name: characterData.character_name,
    world: isekaiTestData.worlds[characterData.world]?.name || '미지의 세계',
    color: characterData.color
  };
};

export default {
  generateIsekaiCard,
  createIsekaiCardData,
  getAvailableCharacterTypes,
  getCharacterTypeInfo,
  CARD_CONFIG
}; 