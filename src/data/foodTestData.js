// 오늘 뭐 먹지? 테스트 데이터
import { foodTestResults } from './foodTestResults.js';

export const foodQuestions = [
  {
    id: 1,
    question: "오늘 날씨는 어떤가요?",
    options: [
      { text: "날씨가 추워서 따뜻한 게 먹고 싶어", type: "warm" },
      { text: "날씨가 더워서 시원한 게 먹고 싶어", type: "cool" },
      { text: "날씨가 좋아서 야외에서 먹고 싶어", type: "outdoor" },
      { text: "날씨는 상관없어, 맛있으면 돼", type: "neutral" }
    ]
  },
  {
    id: 2,
    question: "지금 기분은 어떠세요?",
    options: [
      { text: "스트레스 받아서 매운 게 땡겨", type: "spicy" },
      { text: "우울해서 달콤한 게 먹고 싶어", type: "sweet" },
      { text: "피곤해서 든든한 게 필요해", type: "hearty" },
      { text: "기분 좋아서 특별한 걸 먹고 싶어", type: "special" }
    ]
  },
  {
    id: 3,
    question: "누구와 함께 드실 건가요?",
    options: [
      { text: "혼자 조용히 먹을 거야", type: "alone" },
      { text: "가족들과 함께 먹을 거야", type: "family" },
      { text: "친구들과 왁자지껄하게", type: "friends" },
      { text: "연인과 로맨틱하게", type: "romantic" }
    ]
  },
  {
    id: 4,
    question: "어떤 맛을 원하세요?",
    options: [
      { text: "매콤하고 자극적인 맛", type: "spicy" },
      { text: "담백하고 깔끔한 맛", type: "light" },
      { text: "진하고 깊은 맛", type: "rich" },
      { text: "달콤하고 부드러운 맛", type: "sweet" }
    ]
  },
  {
    id: 5,
    question: "요리 스타일은 어떤 걸 선호하세요?",
    options: [
      { text: "우리나라 전통 한식", type: "korean" },
      { text: "세련된 서양 요리", type: "western" },
      { text: "이색적인 아시아 요리", type: "asian" },
      { text: "간편한 패스트푸드", type: "fast" }
    ]
  },
  {
    id: 6,
    question: "식사 시간은 언제인가요?",
    options: [
      { text: "아침 - 가볍게 시작하고 싶어", type: "breakfast" },
      { text: "점심 - 든든하게 배를 채우고 싶어", type: "lunch" },
      { text: "저녁 - 여유롭게 즐기고 싶어", type: "dinner" },
      { text: "야식 - 늦은 시간 간단하게", type: "late" }
    ]
  },
  {
    id: 7,
    question: "예산은 어느 정도 생각하고 계세요?",
    options: [
      { text: "가성비 좋은 저렴한 음식", type: "budget" },
      { text: "적당한 가격의 평범한 음식", type: "moderate" },
      { text: "좀 비싸도 맛있는 음식", type: "premium" },
      { text: "돈은 상관없어, 최고급으로!", type: "luxury" }
    ]
  },
  {
    id: 8,
    question: "어떤 식사 분위기를 원하세요?",
    options: [
      { text: "집에서 편안하게", type: "home" },
      { text: "캐주얼한 식당에서", type: "casual" },
      { text: "분위기 좋은 레스토랑에서", type: "fancy" },
      { text: "활기찬 곳에서 사람들과", type: "lively" }
    ]
  }
];

// 결과 매핑 함수
export const getFoodRecommendation = (answers) => {
  // 각 타입별 점수 계산
  const scores = {};
  
  answers.forEach(answer => {
    const type = answer.type;
    scores[type] = (scores[type] || 0) + 1;
  });

  // 최고 점수 타입들 찾기
  const maxScore = Math.max(...Object.values(scores));
  const topTypes = Object.keys(scores).filter(type => scores[type] === maxScore);

  // 타입 조합에 따른 음식 추천 로직
  let recommendedFood;

  // 매운맛 선호
  if (topTypes.includes('spicy')) {
    const spicyFoods = [1, 4, 5, 6, 7, 10, 29, 43, 46, 75, 86, 97, 100, 105, 118]; // 기존+웃긴 매운 메뉴
    recommendedFood = foodTestResults[spicyFoods[Math.floor(Math.random() * spicyFoods.length)] - 1];
  }
  // 로맨틱/고급 선호
  else if (topTypes.includes('romantic') || topTypes.includes('luxury') || topTypes.includes('fancy')) {
    const fancyFoods = [34, 35, 36, 55, 58, 59, 60, 63, 84, 85, 91, 95, 99, 109, 114, 117]; // 기존+웃긴 고급/로맨틱 메뉴
    recommendedFood = foodTestResults[fancyFoods[Math.floor(Math.random() * fancyFoods.length)] - 1];
  }
  // 아시아 요리 선호
  else if (topTypes.includes('asian')) {
    const asianFoods = [20, 21, 22, 23, 24, 25, 41, 42, 43, 44, 45, 46, 47, 48, 87, 98, 101, 108, 111]; // 기존+웃긴 아시아 메뉴
    recommendedFood = foodTestResults[asianFoods[Math.floor(Math.random() * asianFoods.length)] - 1];
  }
  // 서양 요리 선호
  else if (topTypes.includes('western')) {
    const westernFoods = [34, 35, 36, 37, 38, 39, 40, 70, 71, 72, 73, 74, 82, 91, 95, 103, 112, 114, 117]; // 기존+웃긴 서양 메뉴
    recommendedFood = foodTestResults[westernFoods[Math.floor(Math.random() * westernFoods.length)] - 1];
  }
  // 한식 선호
  else if (topTypes.includes('korean')) {
    const koreanFoods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 92, 93, 100, 105, 106, 115]; // 기존+웃긴 한식 메뉴
    recommendedFood = foodTestResults[koreanFoods[Math.floor(Math.random() * koreanFoods.length)] - 1];
  }
  // 패스트푸드/간편식 선호
  else if (topTypes.includes('fast') || topTypes.includes('budget')) {
    const fastFoods = [9, 10, 11, 12, 79, 80, 88, 94, 95, 99, 108, 115]; // 기존+웃긴 패스트푸드 메뉴
    recommendedFood = foodTestResults[fastFoods[Math.floor(Math.random() * fastFoods.length)] - 1];
  }
  // 달콤한 것 선호
  else if (topTypes.includes('sweet')) {
    const sweetFoods = [64, 65, 66, 89, 96, 102, 104, 107, 116, 120]; // 기존+웃긴 달콤 메뉴
    recommendedFood = foodTestResults[sweetFoods[Math.floor(Math.random() * sweetFoods.length)] - 1];
  }
  // 기본값 - 랜덤 추천
  else {
    recommendedFood = foodTestResults[Math.floor(Math.random() * foodTestResults.length)];
  }

  return recommendedFood;
};

// 통합 export
export const foodTestData = {
  questions: foodQuestions,
  getRecommendation: getFoodRecommendation,
  results: foodTestResults
};
