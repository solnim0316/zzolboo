// src/data/dino_card_map.js

export const DINO_CARD_MAP = {
  INTJ: {
    mbti: 'INTJ',
    character: '스피노사우루스',
    description: '나는 세상을 설계하는 스피노사우루스야! 🦖',
    keywords: ['호기심', '분석가', '통찰력', '계획성'],
    goodMatches: [
      { mbti: 'ENFP', label: '벨로시랩터' },
      { mbti: 'ESFJ', label: '스테고사우루스' }
    ],
    badMatches: [
      { mbti: 'ISTJ', label: '안킬로사우루스' }
    ],
    imageUrl: '/img/dino_card/INTJ.png'
  },
  INTP: {
    mbti: 'INTP',
    character: '데이노니쿠스',
    description: '호기심 많은 데이노니쿠스, 논리와 창의성의 달인!',
    keywords: ['호기심', '논리', '창의성', '독립적'],
    goodMatches: [
      { mbti: 'ENTP', label: '알로사우루스' },
      { mbti: 'INFJ', label: '마이아사우라' }
    ],
    badMatches: [
      { mbti: 'ESFJ', label: '스테고사우루스' }
    ],
    imageUrl: '/img/dino_card/INTP.png'
  },
  INFJ: {
    mbti: 'INFJ',
    character: '마이아사우라',
    description: '이해심 많은 마이아사우라, 모두를 따뜻하게 감싸요!',
    keywords: ['이해심', '직관', '계획성', '책임감'],
    goodMatches: [
      { mbti: 'ENFP', label: '벨로시랩터' },
      { mbti: 'INTJ', label: '스피노사우루스' }
    ],
    badMatches: [
      { mbti: 'ESTP', label: '기가노토사우루스' }
    ],
    imageUrl: '/img/dino_card/INFJ.png'
  },
  INFP: {
    mbti: 'INFP',
    character: '브라키오사우루스',
    description: '자유로운 브라키오사우루스, 상상력이 풍부해요!',
    keywords: ['상상력', '자유로움', '감성', '친절함'],
    goodMatches: [
      { mbti: 'ENFJ', label: '파라사우롤로푸스' },
      { mbti: 'ENTJ', label: '티라노사우루스' }
    ],
    badMatches: [
      { mbti: 'ESTJ', label: '카르노타우루스' }
    ],
    imageUrl: '/img/dino_card/INFP.png'
  },
  ISTJ: {
    mbti: 'ISTJ',
    character: '안킬로사우루스',
    description: '성실한 안킬로사우루스, 책임감이 강해요!',
    keywords: ['성실함', '책임감', '현실적', '질서'],
    goodMatches: [
      { mbti: 'ESFP', label: '파키케팔로사우루스' },
      { mbti: 'ISFJ', label: '트리케라톱스' }
    ],
    badMatches: [
      { mbti: 'ENFP', label: '벨로시랩터' }
    ],
    imageUrl: '/img/dino_card/ISTJ.png'
  },
  ISTP: {
    mbti: 'ISTP',
    character: '파키리노사우루스',
    description: '냉철한 파키리노사우루스, 문제 해결력이 뛰어나요!',
    keywords: ['냉철함', '문제해결', '유연함', '관찰력'],
    goodMatches: [
      { mbti: 'ESTP', label: '기가노토사우루스' },
      { mbti: 'ISFP', label: '파키케팔로사우루스' }
    ],
    badMatches: [
      { mbti: 'INFJ', label: '마이아사우라' }
    ],
    imageUrl: '/img/dino_card/ISTP.png'
  },
  ISFJ: {
    mbti: 'ISFJ',
    character: '트리케라톱스',
    description: '따뜻한 트리케라톱스, 모두에게 친절해요!',
    keywords: ['친절함', '보호자', '책임감', '세심함'],
    goodMatches: [
      { mbti: 'ESTJ', label: '카르노타우루스' },
      { mbti: 'ESFJ', label: '스테고사우루스' }
    ],
    badMatches: [
      { mbti: 'ENTP', label: '알로사우루스' }
    ],
    imageUrl: '/img/dino_card/ISFJ.png'
  },
  ISFP: {
    mbti: 'ISFP',
    character: '파키케팔로사우루스',
    description: '감성적인 파키케팔로사우루스, 자유를 사랑해요!',
    keywords: ['감성', '자유', '유연함', '순수함'],
    goodMatches: [
      { mbti: 'ESFP', label: '파라사우롤로푸스' },
      { mbti: 'ISFJ', label: '트리케라톱스' }
    ],
    badMatches: [
      { mbti: 'ESTJ', label: '카르노타우루스' }
    ],
    imageUrl: '/img/dino_card/ISFP.png'
  },
  ENTJ: {
    mbti: 'ENTJ',
    character: '티라노사우루스',
    description: '강력한 티라노사우루스, 리더십이 뛰어나요!',
    keywords: ['리더십', '계획력', '추진력', '결단력'],
    goodMatches: [
      { mbti: 'INFP', label: '브라키오사우루스' },
      { mbti: 'INTP', label: '데이노니쿠스' }
    ],
    badMatches: [
      { mbti: 'ISFP', label: '파키케팔로사우루스' }
    ],
    imageUrl: '/img/dino_card/ENTJ.png'
  },
  ENTP: {
    mbti: 'ENTP',
    character: '알로사우루스',
    description: '아이디어 뱅크 알로사우루스, 토론을 즐겨요!',
    keywords: ['창의력', '토론', '융통성', '아이디어'],
    goodMatches: [
      { mbti: 'INFJ', label: '마이아사우라' },
      { mbti: 'INTP', label: '데이노니쿠스' }
    ],
    badMatches: [
      { mbti: 'ISFJ', label: '트리케라톱스' }
    ],
    imageUrl: '/img/dino_card/ENTP.png'
  },
  ENFJ: {
    mbti: 'ENFJ',
    character: '파라사우롤로푸스',
    description: '사교적 파라사우롤로푸스, 모두를 아우릅니다!',
    keywords: ['사교성', '이해심', '조정자', '공감력'],
    goodMatches: [
      { mbti: 'INFP', label: '브라키오사우루스' },
      { mbti: 'ISFP', label: '파키케팔로사우루스' }
    ],
    badMatches: [
      { mbti: 'ISTP', label: '딜로포사우루스' }
    ],
    imageUrl: '/img/dino_card/ENFJ.png'
  },
  ENFP: {
    mbti: 'ENFP',
    character: '벨로시랩터',
    description: '세상을 누비는 벨로시랩터, 호기심이 넘쳐요!',
    keywords: ['모험심', '즉흥성', '창의성', '소통'],
    goodMatches: [
      { mbti: 'INFJ', label: '마이아사우라' },
      { mbti: 'INTJ', label: '스피노사우루스' }
    ],
    badMatches: [
      { mbti: 'ISTJ', label: '안킬로사우루스' }
    ],
    imageUrl: '/img/dino_card/ENFP.png'
  },
  ESTJ: {
    mbti: 'ESTJ',
    character: '카르노타우루스',
    description: '똑부러진 카르노타우루스, 체계와 질서를 중시해요!',
    keywords: ['체계', '질서', '실용적', '통제력'],
    goodMatches: [
      { mbti: 'ISFJ', label: '트리케라톱스' },
      { mbti: 'ISTJ', label: '안킬로사우루스' }
    ],
    badMatches: [
      { mbti: 'INFP', label: '브라키오사우루스' }
    ],
    imageUrl: '/img/dino_card/ESTJ.png'
  },
  ESTP: {
    mbti: 'ESTP',
    character: '기가노토사우루스',
    description: '에너지 넘치는 기가노토사우루스, 도전을 즐겨요!',
    keywords: ['도전', '실행력', '에너지', '사교성'],
    goodMatches: [
      { mbti: 'ISTP', label: '딜로포사우루스' },
      { mbti: 'ESFP', label: '파라사우롤로푸스' }
    ],
    badMatches: [
      { mbti: 'INFJ', label: '마이아사우라' }
    ],
    imageUrl: '/img/dino_card/ESTP.png'
  },
  ESFJ: {
    mbti: 'ESFJ',
    character: '스테고사우루스',
    description: '따뜻한 스테고사우루스, 모두를 챙깁니다!',
    keywords: ['따뜻함', '책임감', '공감', '배려'],
    goodMatches: [
      { mbti: 'INTJ', label: '스피노사우루스' },
      { mbti: 'ISFJ', label: '트리케라톱스' }
    ],
    badMatches: [
      { mbti: 'INTP', label: '데이노니쿠스' }
    ],
    imageUrl: '/img/dino_card/ESFJ.png'
  },
  ESFP: {
    mbti: 'ESFP',
    character: '파라사우롤로푸스',
    description: '자유로운 파라사우롤로푸스, 모두와 잘 어울려요!',
    keywords: ['자유', '명랑', '적응력', '사교성'],
    goodMatches: [
      { mbti: 'ISFP', label: '파키케팔로사우루스' },
      { mbti: 'ESTP', label: '기가노토사우루스' }
    ],
    badMatches: [
      { mbti: 'INTJ', label: '스피노사우루스' }
    ],
    imageUrl: '/img/dino_card/ESFP.png'
  },
  BUSAURUS: {
    mbti: 'BUSAURUS',
    character: '부사우루스',
    description: '균형잡힌 부사우루스! 모두와 잘 어울려요.',
    keywords: ['균형감', '따뜻함', '여유', '이해심'],
    goodMatches: [
      { mbti: 'ENFP', label: '벨로시랩터' },
      { mbti: 'INTJ', label: '스피노사우루스' }
    ],
    badMatches: [],
    imageUrl: '/img/dino_card/BUSAURUS.png'
  }
};
