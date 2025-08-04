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
  { id: '게임', name: '게임', icon: '🎮' },
  { id: '연애', name: '연애', icon: '💘' },
  { id: '투자', name: '투자', icon: '📈' }
];

// 🎭 쫄부 테마 테스트 (세계관 기반)
export const THEMED_TESTS = [
  {
    id: "cat-mbti",
    title: "고양이 MBTI 테스트",
    world: "고양이 왕국",
    emoji: "🐾",
    theme: "고양이",
    thumbnail: "/images/tests/cat-mbti/ENFJ.webp",
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
    thumbnail: "/images/tests/dinosaur/ENTJ.webp",
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
  },
  // 🌍 이세계 테스트
  {
    id: "isekai",
    title: "이세계로 전이했을 때 나는?",
    world: "이세계 판타지",
    emoji: "🌍",
    theme: "판타지",
    thumbnail: "/og-image.png",
    isFeatured: true,
    isThemed: true,
    description: "갑자기 빛에 휩싸여 이세계로 전이했다면, 당신은 어떤 캐릭터가 될까요?",
    tags: ["이세계", "판타지", "캐릭터", "모험"],
    route: "/isekai",
    difficulty: "easy",
    estimatedTime: "3분",
    questionCount: 11,
    worldConfig: {
      backgroundColor: "#8b5cf6",
      primaryColor: "#7c3aed",
      characterStyle: "fantasy",
      backgroundMusic: null
    }
  },
  {
    id: "workout-mate",
    title: "나에게 어울리는 운동메이트는 누구!",
    world: "피트니스 월드",
    emoji: "💪",
    theme: "운동",
    thumbnail: "/og-image.png",
    isFeatured: true,
    isThemed: true,
    description: "운동할 때 나와 가장 잘 맞는 파트너를 찾아보세요!",
    tags: ["운동", "피트니스", "파트너", "건강"],
    route: "/workout-mate",
    difficulty: "easy",
    estimatedTime: "3분",
    questionCount: 8,
    worldConfig: {
      backgroundColor: "#10b981",
      primaryColor: "#059669",
      characterStyle: "fitness",
      backgroundMusic: null
    }
  },
  {
                    id: "fingerprincess",
       title: "나만의 fingerprincess(핑프)는?",
       world: "아트 월드",
       emoji: "🎨",
       theme: "아트",
       thumbnail: "/og-image.png",
       isFeatured: true,
       isThemed: true,
       description: "픽셀 아티스트이자 래퍼인 소년소년소년이 말아주는 나만의 픽셀 아트는? @boyboyboy x zzolbooworld Colab",
       tags: ["아트", "픽셀아트", "콜라보", "스타일"],
       route: "/fingerprincess",
       difficulty: "easy",
       estimatedTime: "3분",
       questionCount: 12,
    worldConfig: {
      backgroundColor: "#EC4899",
      primaryColor: "#DB2777",
      characterStyle: "artistic",
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
  {
    id: "love-habit-test",
    title: "나를 가장 힘들게 했던 연애 습관은?",
    emoji: "💘",
    thumbnail: "/images/tests/love-habit-test.png",
    isThemed: false,
    description: "연애할 때 나도 모르게 반복되는 습관, 알고 보면 다 이유가 있어요",
    tags: ["연애", "심리", "성격", "자아"],
    route: "/love-habit-test",
    difficulty: "easy",
    estimatedTime: "3분",
    questionCount: 10
  },
  {
    id: "drama-test",
    title: "나는 어떤 드라마의 주인공일까?",
    emoji: "📺",
    thumbnail: "/images/tests/drama-test.png",
    isThemed: false,
    description: "당신의 연애 스타일을 드라마 주인공으로 분석해드려요",
    tags: ["연애", "드라마", "성격", "재미"],
    route: "/drama-test",
    difficulty: "easy",
    estimatedTime: "4분",
    questionCount: 10
    },
  {
    id: "stock-investor",
    title: "갑자기 주식이 떡락했다. 나의 선택은?",
    emoji: "📈",
    thumbnail: "/images/tests/stock-test.png",
    isThemed: false,
    description: "주식 투자에서 당신의 성향을 분석해드려요!",
    tags: ["투자", "금융", "성격", "재미"],
    route: "/stock-investor",
    difficulty: "easy",
    estimatedTime: "3분",
    questionCount: 10
  },
  {
    id: "tetogen",
    title: "테토에겐 테스트",
    emoji: "🎭",
    thumbnail: "/og-image.png",
    isThemed: false,
    description: "당신은 테토인가요, 에겐인가요? 🎭",
    tags: ["성격", "연애", "재미", "분석"],
    route: "/tetogen",
    difficulty: "easy",
    estimatedTime: "4분",
    questionCount: 12
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
  },
  // 🏎️ BRO 테스트들
  {
    id: "f1-driver",
    title: "F1 선수가 되어버렸다!",
    emoji: "🏎️",
    thumbnail: "/og-image.png",
    isThemed: false,
    description: "갑자기 F1 레이서가 되었다면? 당신의 레이싱 스타일을 분석해드려요!",
    tags: ["스포츠", "레이싱", "성격", "재미"],
    route: "/bro/f1-driver",
    difficulty: "easy",
    estimatedTime: "3분",
    questionCount: 10,
    isBroTest: true
  },
  {
    id: "stock-investor-bro",
    title: "갑자기 주식이 떡락했다. 나의 선택은?",
    emoji: "📈",
    thumbnail: "/og-image.png",
    isThemed: false,
    description: "주식 투자에서 당신의 성향을 분석해드려요!",
    tags: ["투자", "금융", "성격", "재미"],
    route: "/bro/stock-investor",
    difficulty: "easy",
    estimatedTime: "3분",
    questionCount: 10,
    isBroTest: true
  },


];

// 🎯 유틸리티 함수들
export const testUtils = {
  // 모든 테스트 가져오기
  getAllTests: () => [...THEMED_TESTS, ...CASUAL_TESTS],
  
  // 공개된 테스트만 가져오기 (숨겨진 테스트 제외)
  getPublicTests: () => [...THEMED_TESTS, ...CASUAL_TESTS].filter(test => !test.isHidden),
  
  // 메인 채널용 공개 테스트만 가져오기 (bro 테스트 제외)
  getMainChannelTests: () => [...THEMED_TESTS, ...CASUAL_TESTS].filter(test => !test.isHidden && !test.isBroTest),
  
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
