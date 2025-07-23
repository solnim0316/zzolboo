// 👗 오늘 뭐 입지? 패션 스타일 추천 테스트 데이터

export const fashionQuestions = [
  {
    id: 1,
    question: "오늘 날씨와 기분은 어떤가요?",
    options: [
      { text: "화창하고 기분 좋은 날이야!", type: "bright" },
      { text: "흐리고 차분한 느낌이야", type: "calm" },
      { text: "추위에 포근함이 필요해", type: "cozy" },
      { text: "더위에 시원함이 필요해", type: "cool" }
    ]
  },
  {
    id: 2,
    question: "오늘 어디에 갈 예정인가요?",
    options: [
      { text: "집에서 편안히 쉴 거야", type: "home" },
      { text: "친구들과 카페에 갈 거야", type: "casual" },
      { text: "중요한 약속이 있어", type: "formal" },
      { text: "데이트를 할 거야", type: "date" }
    ]
  },
  {
    id: 3,
    question: "어떤 느낌으로 보이고 싶나요?",
    options: [
      { text: "편안하고 자연스럽게", type: "natural" },
      { text: "세련되고 트렌디하게", type: "trendy" },
      { text: "우아하고 단정하게", type: "elegant" },
      { text: "개성 있고 특별하게", type: "unique" }
    ]
  },
  {
    id: 4,
    question: "선호하는 색상은?",
    options: [
      { text: "화이트, 베이지 같은 뉴트럴", type: "neutral" },
      { text: "블랙, 그레이 같은 모노톤", type: "mono" },
      { text: "핑크, 블루 같은 파스텔", type: "pastel" },
      { text: "레드, 네이비 같은 비비드", type: "vivid" }
    ]
  },
  {
    id: 5,
    question: "어떤 스타일을 좋아하세요?",
    options: [
      { text: "미니멀하고 깔끔한 스타일", type: "minimal" },
      { text: "로맨틱하고 페미닌한 스타일", type: "romantic" },
      { text: "캐주얼하고 편안한 스타일", type: "casual" },
      { text: "시크하고 도시적인 스타일", type: "chic" }
    ]
  }
];

export const fashionResults = [
  {
    id: 1,
    name: "미니멀 캐주얼",
    description: "심플하고 깔끔한 스타일로 편안하면서도 세련된 느낌을 연출해보세요. 베이직한 아이템들로 완성하는 스타일이에요.",
    outfit: "화이트 티셔츠 + 데님 팬츠 + 스니커즈",
    tip: "액세서리는 최소한으로! 깔끔한 라인이 포인트예요.",
    tags: ["minimal", "casual", "neutral", "natural"],
    emoji: "👕"
  },
  {
    id: 2,
    name: "로맨틱 데이트룩",
    description: "사랑스럽고 여성스러운 매력을 뽐낼 수 있는 스타일이에요. 부드러운 소재와 파스텔 컬러가 포인트!",
    outfit: "플라워 프린트 원피스 + 카디건 + 플랫슈즈",
    tip: "꽃무늬나 도트 패턴으로 포인트를 주면 더욱 사랑스러워요!",
    tags: ["romantic", "date", "pastel", "elegant"],
    emoji: "🌸"
  },
  {
    id: 3,
    name: "시크 오피스룩",
    description: "전문적이면서도 스타일리시한 느낌의 업무용 스타일이에요. 자신감 있고 당당한 모습을 연출해보세요.",
    outfit: "블레이저 + 슬랙스 + 펌프스",
    tip: "모노톤 컬러로 통일감을 주고, 포인트 액세서리로 마무리하세요!",
    tags: ["formal", "chic", "mono", "elegant"],
    emoji: "💼"
  },
  {
    id: 4,
    name: "홈웨어 릴렉스",
    description: "집에서 편안하게 입을 수 있는 스타일이에요. 편안함이 최우선이지만 그래도 예쁘게!",
    outfit: "루즈핏 니트 + 레깅스 + 슬리퍼",
    tip: "부드러운 소재와 여유로운 핏으로 최고의 편안함을 느껴보세요!",
    tags: ["home", "cozy", "casual", "natural"],
    emoji: "🏠"
  },
  {
    id: 5,
    name: "트렌디 스트릿",
    description: "최신 트렌드를 반영한 개성 넘치는 스타일이에요. 남들과는 다른 특별한 매력을 보여주세요!",
    outfit: "오버사이즈 후디 + 와이드 팬츠 + 머스트해브 스니커즈",
    tip: "대담한 색상 매칭과 독특한 액세서리로 개성을 표현하세요!",
    tags: ["trendy", "unique", "vivid", "casual"],
    emoji: "🌈"
  },
  {
    id: 6,
    name: "우아한 포멀",
    description: "특별한 자리에 어울리는 고급스러운 스타일이에요. 품격 있는 아름다움을 연출해보세요.",
    outfit: "실크 블라우스 + A라인 스커트 + 하이힐",
    tip: "상급 소재와 클래식한 디자인으로 우아함을 완성하세요!",
    tags: ["formal", "elegant", "mono", "unique"],
    emoji: "👗"
  },
  {
    id: 7,
    name: "페스티벌 룩",
    description: "밝고 경쾌한 페스티벌이나 야외 활동에 perfect한 스타일이에요. 활동적이면서도 스타일리시하게!",
    outfit: "크롭탑 + 하이웨스트 반바지 + 컨버스",
    tip: "밝은 컬러와 재미있는 패턴으로 에너지 넘치는 룩을 완성하세요!",
    tags: ["bright", "casual", "vivid", "trendy"],
    emoji: "🎪"
  },
  {
    id: 8,
    name: "빈티지 시크",
    description: "고풍스러우면서도 모던한 매력이 있는 레트로 스타일이에요. 특별한 개성을 보여주고 싶을 때!",
    outfit: "체크 셔츠 + 하이웨스트 스커트 + 로퍼",
    tip: "빈티지 액세서리와 클래식한 헤어스타일로 완성도를 높여보세요!",
    tags: ["unique", "elegant", "calm", "chic"],
    emoji: "📷"
  }
];

export const fashionTestData = {
  testInfo: {
    title: "오늘 뭐 입지?",
    subtitle: "나에게 딱 맞는 스타일을 찾아보세요!",
    emoji: "👗"
  },
  questions: fashionQuestions,
  results: fashionResults
};
