// dino_card_map.js
// 시트 기반 카드 데이터 맵 (MBTI별)

export const DINO_CARD_MAP = {
  INTJ: {
    mbti: 'INTJ',
    character: '스피노사우루스',
    description: '나는 세상을 설계하는 스피노사우루스야! 🦖',
    keywords: ['전략가', '분석가', '통찰력', '계획성'],
    goodMatches: [
      { mbti: 'ENFP', label: '벨로시랩터' },
      { mbti: 'ISFP', label: '파키케팔로사우루스' }
    ],
    badMatches: [
      { mbti: 'ESTP', label: '기가노토사우루스' }
    ],
    imageUrl: undefined // 필요시 이미지 경로 추가
  },
  INTP: {
    mbti: 'INTP',
    character: '데이노니쿠스',
    description: '호기심 가득한 데이노니쿠스, 궁금한 건 못 참아! 🦕',
    keywords: ['호기심', '탐구심', '창의성', '논리력'],
    goodMatches: [
      { mbti: 'INFJ', label: '마이아사우라' },
      { mbti: 'ENTP', label: '알로사우루스' }
    ],
    badMatches: [
      { mbti: 'ENTJ', label: '티라노사우루스' }
    ],
    imageUrl: undefined
  },
  // ... 이하 모든 MBTI 행 반복 ...
  '???': {
    mbti: '???',
    character: '크립토사우루스',
    description: '전설의 크립토사우루스, 나는 어디든 변신할 수 있어! 🌟',
    keywords: ['균형감', '변신가', '만능형', '신비함'],
    goodMatches: [
      { mbti: 'INFP', label: '브라키오사우루스' },
      { mbti: 'ENTJ', label: '티라노사우루스' }
    ],
    badMatches: [],
    imageUrl: undefined
  }
};
