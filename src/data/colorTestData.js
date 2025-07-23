// 🎨 오늘 기분 색깔 테스트 데이터

export const colorQuestions = [
  {
    id: 1,
    question: "오늘 아침에 눈을 떴을 때 기분은?",
    options: [
      { text: "상쾌하고 활기찬 기분!", type: "energetic" },
      { text: "평온하고 차분한 기분", type: "calm" },
      { text: "몽환적이고 꿈꾸는 듯한 기분", type: "dreamy" },
      { text: "약간 우울하고 무기력한 기분", type: "melancholy" }
    ]
  },
  {
    id: 2,
    question: "지금 가장 하고 싶은 일은?",
    options: [
      { text: "친구들과 신나게 놀고 싶어", type: "social" },
      { text: "혼자 조용히 휴식하고 싶어", type: "peaceful" },
      { text: "새로운 도전을 해보고 싶어", type: "adventurous" },
      { text: "따뜻한 누군가와 함께 있고 싶어", type: "warm" }
    ]
  },
  {
    id: 3,
    question: "요즘 생각이 많을 때 어떤 것들이 떠오르나요?",
    options: [
      { text: "미래에 대한 설렘과 계획들", type: "hopeful" },
      { text: "현재에 집중하며 감사한 마음", type: "grateful" },
      { text: "과거의 추억들과 그리움", type: "nostalgic" },
      { text: "복잡한 감정들이 뒤섞여 있어", type: "complex" }
    ]
  },
  {
    id: 4,
    question: "좋아하는 시간대는 언제인가요?",
    options: [
      { text: "활기찬 오전 시간", type: "morning" },
      { text: "따뜻한 오후 햇살", type: "afternoon" },
      { text: "로맨틱한 저녁 노을", type: "sunset" },
      { text: "고요한 밤 시간", type: "night" }
    ]
  },
  {
    id: 5,
    question: "지금 가장 필요한 것은?",
    options: [
      { text: "에너지와 활력", type: "energy" },
      { text: "평화로운 안정감", type: "stability" },
      { text: "새로운 영감과 자극", type: "inspiration" },
      { text: "따뜻한 위로와 공감", type: "comfort" }
    ]
  }
];

export const colorResults = [
  {
    id: 1,
    name: "활기찬 오렌지",
    color: "#FF6B35",
    description: "당신의 오늘은 에너지 넘치는 오렌지 빛이에요! 열정적이고 활동적인 기운이 가득한 하루입니다.",
    mood: "🔥 에너지 100%",
    advice: "이 활력을 활용해서 새로운 일에 도전해보세요! 운동하거나 친구들과 활동적인 시간을 보내면 좋을 거예요.",
    personality: "외향적이고 모험을 좋아하는 성격",
    tags: ["energetic", "social", "adventurous", "energy"],
    emoji: "🧡",
    gradient: "from-orange-400 to-red-400"
  },
  {
    id: 2,
    name: "평온한 파란색",
    color: "#4A90E2",
    description: "오늘의 당신은 고요한 바다 같은 파란색이에요. 차분하고 안정된 마음 상태를 보여줍니다.",
    mood: "😌 마음의 평화",
    advice: "이런 날엔 명상하거나 독서, 또는 좋아하는 음악을 들으며 내면의 평화를 즐겨보세요.",
    personality: "차분하고 신중한 성격",
    tags: ["calm", "peaceful", "stability", "night"],
    emoji: "💙",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    id: 3,
    name: "꿈꾸는 보라색",
    color: "#8E44AD",
    description: "신비롭고 창의적인 보라색이 당신의 오늘을 대표해요. 상상력이 풍부하고 감성적인 하루입니다.",
    mood: "✨ 몽환적인 감성",
    advice: "예술 활동이나 창작 활동을 해보세요. 그림 그리기, 글쓰기, 음악 감상 등이 좋을 거예요.",
    personality: "창의적이고 감성적인 성격",
    tags: ["dreamy", "complex", "inspiration", "sunset"],
    emoji: "💜",
    gradient: "from-purple-400 to-indigo-500"
  },
  {
    id: 4,
    name: "따뜻한 핑크색",
    color: "#E91E63",
    description: "사랑스럽고 따뜻한 핑크색이 오늘의 당신이에요. 애정이 넘치고 다정한 마음을 가지고 있습니다.",
    mood: "💕 사랑 가득",
    advice: "사랑하는 사람들과 시간을 보내거나, 작은 선물이나 편지로 마음을 표현해보세요.",
    personality: "다정하고 배려심 많은 성격",
    tags: ["warm", "comfort", "grateful", "afternoon"],
    emoji: "💗",
    gradient: "from-pink-400 to-rose-400"
  },
  {
    id: 5,
    name: "신선한 초록색",
    color: "#27AE60",
    description: "생기 넘치는 초록색이 당신의 오늘을 나타내요. 자연스럽고 건강한 에너지를 가지고 있습니다.",
    mood: "🌱 신선한 활력",
    advice: "자연과 가까운 곳에서 시간을 보내거나, 산책하며 신선한 공기를 마셔보세요.",
    personality: "자연스럽고 건강한 성격",
    tags: ["hopeful", "morning", "energy", "peaceful"],
    emoji: "💚",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    id: 6,
    name: "우아한 연보라색",
    color: "#D1C4E9",
    description: "부드럽고 우아한 라벤더 색이 오늘의 당신이에요. 섬세하고 감수성이 풍부한 상태입니다.",
    mood: "🦋 우아한 감성",
    advice: "조용한 카페에서 차를 마시거나, 향기로운 꽃을 감상하며 여유로운 시간을 가져보세요.",
    personality: "섬세하고 우아한 성격",
    tags: ["dreamy", "nostalgic", "comfort", "sunset"],
    emoji: "🤍",
    gradient: "from-purple-200 to-purple-300"
  },
  {
    id: 7,
    name: "열정적인 빨간색",
    color: "#E74C3C",
    description: "뜨겁고 역동적인 빨간색이 당신의 오늘을 보여줍니다. 강한 의지와 열정이 넘치는 하루예요.",
    mood: "🔥 불타는 열정",
    advice: "목표를 향해 과감하게 도전해보세요! 중요한 결정을 내리기에 좋은 날입니다.",
    personality: "적극적이고 리더십 있는 성격",
    tags: ["energetic", "adventurous", "hopeful", "energy"],
    emoji: "❤️",
    gradient: "from-red-500 to-red-600"
  },
  {
    id: 8,
    name: "고요한 회색",
    color: "#95A5A6",
    description: "차분하고 중성적인 회색이 오늘의 당신을 나타내요. 균형 잡힌 마음 상태를 보여줍니다.",
    mood: "⚪ 균형과 조화",
    advice: "무리하지 말고 현재에 집중하세요. 간단한 정리나 계획을 세우는 것도 좋을 거예요.",
    personality: "균형감 있고 현실적인 성격",
    tags: ["melancholy", "complex", "stability", "night"],
    emoji: "🤍",
    gradient: "from-gray-400 to-gray-500"
  }
];

export const colorTestData = {
  testInfo: {
    title: "오늘 기분 색깔",
    subtitle: "지금 내 마음을 색깔로 표현하면?",
    emoji: "🎨"
  },
  questions: colorQuestions,
  results: colorResults
};
