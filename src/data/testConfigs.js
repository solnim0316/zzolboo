// 🌟 쫄부월드 테스트 설정 파일
// 모든 테스트의 메타데이터와 설정을 중앙 관리

// 🏷️ 태그 시스템
export const TAG_CATEGORIES = [
  { id: 'all', name: '전체', icon: '🌟' },
  { id: 'MBTI', name: 'MBTI', icon: '🧠' },
  { id: '성격', name: '성격분석', icon: '🔍' },
  { id: '일상', name: '일상재미', icon: '😊' },
  { id: '추천', name: '맞춤 추천', icon: '💡' },
  { id: '재미', name: '재미요소', icon: '🎉' },
  { id: '심리', name: '심리테스트', icon: '💭' },
  { id: '동물', name: '동물', icon: '🐾' },
  { id: '음식', name: '음식', icon: '🍽️' },
  { id: '패션', name: '패션', icon: '👗' },
  { id: '영화', name: '영화', icon: '🎬' },
  { id: '색깔', name: '색깔', icon: '🎨' },
  { id: '게임', name: '게임', icon: '🎮' }
];

// 🎭 쫄부 테마 테스트 (세계관 기반)
export const THEMED_TESTS = [
  {
    id: "cat-mbti",
    title: "고양이 MBTI 테스트",
    world: "고양이 왕국",
    emoji: "🐾",
    theme: "고양이",
    thumbnail: "/images/tests/cat-mbti/ENFJ.png",
    isFeatured: true,
    isThemed: true,
    description: "고양이가 되어버린 나. 나는 어떤 성격의 고양이일까?",
    tags: ["MBTI", "성격", "동물", "재미"],
    route: "/cat-test",
    difficulty: "easy",
    estimatedTime: "3분",
    questionCount: 12,
    // 세계관 설정
    worldConfig: {
      backgroundColor: "#FFF8E1",
      primaryColor: "#FF7043",
      characterStyle: "cute",
      backgroundMusic: null
    }
  },
  {
    id: "dinosaur-mbti",
    title: "성격유형별 공룡 테스트",
    world: "공룡시대",
    emoji: "🦕",
    theme: "쥬라기",
    thumbnail: "/images/tests/dinosaur/ENTJ.png",
    isFeatured: false,
    isThemed: true,
    description: "만약 내가 공룡시대에 태어났다면? 나는 어떤 공룡이였을까?",
    tags: ["MBTI", "성격", "역사", "모험"],
    route: "/dinosaur-test",
    difficulty: "medium",
    estimatedTime: "4분",
    questionCount: 16,
    // 세계관 설정
    worldConfig: {
      backgroundColor: "#E8F5E8",
      primaryColor: "#4CAF50",
      characterStyle: "prehistoric",
      backgroundMusic: null
    }
  },
  {
    id: "family-mbti",
    title: "내가 해주는 엄마의 MBTI 테스트",
    world: "우리집",
    emoji: "👩‍👧‍👦",
    theme: "따뜻한 가족",
    thumbnail: "/images/tests/family-mbti.png",
    isFeatured: false,
    isThemed: true,
    description: "우리 엄마의 MBTI가 궁금하다면?",
    tags: ["MBTI", "성격", "가족", "재미"],
    route: "/family-mbti",
    difficulty: "easy",
    estimatedTime: "5분",
    questionCount: 20,
    // 세계관 설정
    worldConfig: {
      backgroundColor: "#FFF3E0",
      primaryColor: "#FF9800",
      characterStyle: "warm",
      backgroundMusic: null
    }
  },
  {
    id: "lol-line-recommendation",
    title: "롤 라인 추천 테스트",
    world: "리그 오브 레전드",
    emoji: "🎮",
    theme: "게임",
    thumbnail: "/images/tests/lol/thumbnail.png",
    isFeatured: true,
    isThemed: true,
    description: "성향 기반으로 추천하는 롤 라인 & 역할군",
    tags: ["추천", "게임", "성격", "재미"],
    route: "/lol-test",
    difficulty: "medium",
    estimatedTime: "4분",
    questionCount: 11,
    // 세계관 설정
    worldConfig: {
      backgroundColor: "#1a1a2e",
      primaryColor: "#16213e",
      characterStyle: "gaming",
      backgroundMusic: null
    }
  },
  // 🔒 숨겨진 테스트들 (미래 구현 예정)
  {
    id: "dream-cafe",
    title: "꿈속 카페 테스트",
    world: "꿈속 카페",
    emoji: "☕",
    theme: "따뜻한 브라운",
    thumbnail: "/images/worlds/dream-cafe.png",
    isFeatured: false,
    isThemed: true,
    description: "쫄과 부가 운영하는 꿈속 카페에서 당신의 취향을 알아보세요",
    tags: ["취향", "일상", "힐링", "재미"],
    route: "/dream-cafe-test",
    difficulty: "easy",
    estimatedTime: "3분",
    questionCount: 10,
    isHidden: true, // 🔒 숨겨진 테스트
    worldConfig: {
      backgroundColor: "#5D4037",
      primaryColor: "#8D6E63",
      characterStyle: "cozy",
      backgroundMusic: null
    }
  },
  {
    id: "magic-forest",
    title: "마법의 숲 테스트",
    world: "마법의 숲",
    emoji: "🌳",
    theme: "신비로운 초록",
    thumbnail: "/images/worlds/magic-forest.png",
    isFeatured: false,
    isThemed: true,
    description: "쫄과 부와 함께 마법의 숲을 탐험하며 진정한 자아를 발견해보세요",
    tags: ["자아", "탐험", "판타지", "성장"],
    route: "/magic-forest-test",
    difficulty: "hard",
    estimatedTime: "7분",
    questionCount: 25,
    isHidden: true, // 🔒 숨겨진 테스트
    worldConfig: {
      backgroundColor: "#E8F5E8",
      primaryColor: "#4CAF50",
      characterStyle: "magical",
      backgroundMusic: null
    }
  }
];

// 🎯 일반 테스트 (캐주얼)
export const CASUAL_TESTS = [
  {
    id: "food-test",
    title: "오늘 뭐 먹지? 테스트",
    emoji: "🍽️",
    thumbnail: "/images/tests/food-test.png",
    isThemed: false,
    description: "120가지 음식 중 오늘의 메뉴를 추천받아보세요!",
    tags: ["음식", "일상", "추천", "재미"],
    route: "/food-test",
    difficulty: "easy",
    estimatedTime: "2분",
    questionCount: 8
  },
  {
    id: "fashion-test",
    title: "오늘 뭐 입지? 테스트",
    emoji: "👗",
    thumbnail: "/images/tests/fashion-test.png",
    isThemed: false,
    description: "지금 기분에 딱 맞는 패션 스타일을 찾아보세요!",
    tags: ["패션", "스타일", "일상", "추천"],
    route: "/fashion-test",
    difficulty: "easy",
    estimatedTime: "3분",
    questionCount: 10
  },
  {
    id: "movie-test",
    title: "넷플릭스로 뭐 볼까?",
    emoji: "🎬",
    thumbnail: "/images/tests/movie-test.png",
    isThemed: false,
    description: "512개 실제 작품 중에서 지금 기분에 맞는 컨텐츠를 추천받아보세요!",
    tags: ["영화", "엔터테인먼트", "추천", "재미"],
    route: "/movie-test",
    difficulty: "easy",
    estimatedTime: "2분",
    questionCount: 6
  },
  {
    id: "color-test",
    title: "오늘 기분 색깔 테스트",
    emoji: "🎨",
    thumbnail: "/images/tests/color-test.png",
    isThemed: false,
    description: "지금 내 마음을 색깔로 표현하면 어떨까요?",
    tags: ["감정", "색깔", "심리", "자아"],
    route: "/color-test",
    difficulty: "easy",
    estimatedTime: "2분",
    questionCount: 7
  },
  // 🔒 미래 구현 예정
  {
    id: "color-psychology",
    title: "색깔 심리 테스트",
    emoji: "🌈",
    thumbnail: "/images/tests/color-psychology.png",
    isThemed: false,
    description: "좋아하는 색깔로 알아보는 심리 상태",
    tags: ["심리", "색깔", "성격", "분석"],
    route: "/color-psychology-test",
    difficulty: "medium",
    estimatedTime: "4분",
    questionCount: 12,
    isHidden: true // 🔒 숨겨진 테스트
  }
];

// 🎯 유틸리티 함수들
export const testUtils = {
  // 모든 테스트 가져오기
  getAllTests: () => [...THEMED_TESTS, ...CASUAL_TESTS],
  
  // 공개된 테스트만 가져오기 (숨겨진 테스트 제외)
  getPublicTests: () => [...THEMED_TESTS, ...CASUAL_TESTS].filter(test => !test.isHidden),
  
  // Featured 테스트 찾기
  getFeaturedTest: () => THEMED_TESTS.find(test => test.isFeatured),
  
  // ID로 테스트 찾기
  getTestById: (id) => [...THEMED_TESTS, ...CASUAL_TESTS].find(test => test.id === id),
  
  // 태그로 테스트 필터링
  getTestsByTag: (tag) => {
    if (tag === 'all') return testUtils.getPublicTests();
    return testUtils.getPublicTests().filter(test => test.tags && test.tags.includes(tag));
  },
  
  // 세계관 테스트만 가져오기
  getThemedTests: (includeHidden = false) => {
    return includeHidden ? THEMED_TESTS : THEMED_TESTS.filter(test => !test.isHidden);
  },
  
  // 일반 테스트만 가져오기
  getCasualTests: (includeHidden = false) => {
    return includeHidden ? CASUAL_TESTS : CASUAL_TESTS.filter(test => !test.isHidden);
  },
  
  // 난이도별 테스트 가져오기
  getTestsByDifficulty: (difficulty) => {
    return testUtils.getPublicTests().filter(test => test.difficulty === difficulty);
  },
  
  // 테스트 통계
  getTestStats: () => {
    const publicTests = testUtils.getPublicTests();
    return {
      total: publicTests.length,
      themed: publicTests.filter(test => test.isThemed).length,
      casual: publicTests.filter(test => !test.isThemed).length,
      featured: publicTests.filter(test => test.isFeatured).length,
      hidden: [...THEMED_TESTS, ...CASUAL_TESTS].filter(test => test.isHidden).length
    };
  }
};

// 🎨 테마별 스타일 설정
export const THEME_STYLES = {
  "고양이": {
    gradient: "from-orange-100 to-pink-100",
    accent: "text-orange-500",
    border: "border-orange-200"
  },
  "쥬라기": {
    gradient: "from-green-100 to-emerald-100", 
    accent: "text-green-600",
    border: "border-green-200"
  },
  "따뜻한 가족": {
    gradient: "from-amber-50 to-orange-100",
    accent: "text-orange-600", 
    border: "border-orange-200"
  },
  "따뜻한 브라운": {
    gradient: "from-amber-100 to-yellow-100",
    accent: "text-amber-700",
    border: "border-amber-200"
  },
  "신비로운 초록": {
    gradient: "from-emerald-100 to-teal-100",
    accent: "text-emerald-600",
    border: "border-emerald-200"
  }
};

// 📊 기본 내보내기
export default {
  TAG_CATEGORIES,
  THEMED_TESTS,
  CASUAL_TESTS,
  testUtils,
  THEME_STYLES
};
