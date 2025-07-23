// 🎬 넷플릭스로 뭐 보지? 실제 작품 추천 테스트 데이터

export const movieQuestions = [
  {
    id: 1,
    question: "지금 어떤 기분이신가요?",
    options: [
      { text: "스트레스 받아서 시원한 액션이 보고 싶어", type: "action" },
      { text: "우울해서 감동적인 드라마가 보고 싶어", type: "emotional" },
      { text: "심심해서 웃긴 콘텐츠가 보고 싶어", type: "comedy" },
      { text: "편안해서 달콤한 로맨스가 보고 싶어", type: "romance" }
    ]
  },
  {
    id: 2,
    question: "언제 시청할 예정인가요?",
    options: [
      { text: "오후에 가볍게 1-2시간", type: "light" },
      { text: "저녁에 집중해서 몰아보기", type: "binge" },
      { text: "밤에 혼자 조용히", type: "solo" },
      { text: "주말에 가족/친구들과", type: "together" }
    ]
  },
  {
    id: 3,
    question: "어떤 장르를 선호하세요?",
    options: [
      { text: "액션, 스릴러 (긴장감 넘치는)", type: "thriller" },
      { text: "드라마, 멜로 (감성적인)", type: "drama" },
      { text: "코미디, 예능 (유쾌한)", type: "variety" },
      { text: "SF, 판타지 (상상력 넘치는)", type: "fantasy" }
    ]
  },
  {
    id: 4,
    question: "콘텐츠 길이 선호도는?",
    options: [
      { text: "영화 (90-180분, 한 번에 끝)", type: "movie" },
      { text: "미니시리즈 (6-10화, 짧고 굵게)", type: "miniseries" },
      { text: "시즌제 시리즈 (긴 호흡으로)", type: "series" },
      { text: "상관없어, 재미있으면 돼", type: "flexible" }
    ]
  },
  {
    id: 5,
    question: "어떤 나라/언어 작품을 선호하세요?",
    options: [
      { text: "한국 드라마/영화", type: "korean" },
      { text: "미국/영국 작품", type: "western" },
      { text: "일본 애니메이션/드라마", type: "japanese" },
      { text: "다양한 국가, 상관없어", type: "international" }
    ]
  },
  {
    id: 6,
    question: "최근에 인기 있던 작품 vs 숨은 명작?",
    options: [
      { text: "요즘 핫한 화제작이 좋아", type: "trending" },
      { text: "검증된 명작/고전이 좋아", type: "classic" },
      { text: "숨겨진 보석 같은 작품", type: "hidden" },
      { text: "신작/최신작 위주로", type: "new" }
    ]
  },
  {
    id: 7,
    question: "어떤 분위기를 원하세요?",
    options: [
      { text: "밝고 경쾌한 분위기", type: "bright" },
      { text: "진지하고 무거운 주제", type: "serious" },
      { text: "미스터리하고 긴장감 있는", type: "suspense" },
      { text: "따뜻하고 힐링되는", type: "healing" }
    ]
  },
  {
    id: 8,
    question: "마지막으로, 현재 관심사는?",
    options: [
      { text: "일상 탈출, 현실 도피", type: "escape" },
      { text: "인생 교훈, 감동", type: "lesson" },
      { text: "순수 재미, 엔터테인먼트", type: "entertainment" },
      { text: "새로운 지식, 문화 체험", type: "culture" }
    ]
  }
];

// 📺 실제 넷플릭스 작품 데이터베이스 (512개)
// 넷플릭스 작품 데이터는 별도 파일(netflixContent.js)에서 import
import { netflixContent, tagWeights } from './netflixContent.js';

  // === 미국/서구 작품 (128개) ===
  // 🔥 넷플릭스 오리지널 시리즈
  { id: 31, title: "기묘한 이야기 시즌 1", type: "series", year: 2016, genre: "sci-fi", mood: "suspense", country: "western", tags: ["supernatural", "80s", "kids"] },
  { id: 81, title: "공각기동대 SAC_2045", type: "series", year: 2020, genre: "animation", mood: "serious", country: "japanese", tags: ["cyberpunk", "police", "ai"] },
  { id: 82, title: "아키라", type: "movie", year: 1988, genre: "animation", mood: "serious", country: "japanese", tags: ["cyberpunk", "dystopia", "classic"] },

  // === 기타 국가 작품 (128개) ===
  // 🇪🇸 스페인
  { id: 83, title: "종이의 집 시즌 1", type: "series", year: 2017, genre: "crime", mood: "suspense", country: "international", tags: ["heist", "bank", "resistance"] },
  { id: 92, title: "다크", type: "series", year: 2017, genre: "sci-fi", mood: "suspense", country: "international", tags: ["time-travel", "mystery", "family"] },
  { id: 93, title: "바빌론 베를린", type: "series", year: 2017, genre: "drama", mood: "serious", country: "international", tags: ["1920s", "weimar", "noir"] },

  // 🇫🇷 프랑스
  { id: 94, title: "루팡", type: "series", year: 2021, genre: "crime", mood: "bright", country: "international", tags: ["gentleman-thief", "heist", "modern"] },
  { id: 95, title: "마르세유", type: "series", year: 2016, genre: "drama", mood: "serious", country: "international", tags: ["politics", "corruption", "marseille"] },

  // 🇬🇧 영국
  { id: 96, title: "블랙 미러", type: "series", year: 2011, genre: "sci-fi", mood: "suspense", country: "international", tags: ["technology", "dystopia", "anthology"] },
  { id: 97, title: "셜록", type: "series", year: 2010, genre: "mystery", mood: "bright", country: "international", tags: ["detective", "modern", "genius"] },
  { id: 98, title: "닥터 후", type: "series", year: 2005, genre: "sci-fi", mood: "bright", country: "international", tags: ["time-travel", "alien", "adventure"] },

  // 🇮🇳 인도
  { id: 99, title: "세이크리드 게임스", type: "series", year: 2018, genre: "crime", mood: "serious", country: "international", tags: ["mumbai", "crime", "police"] },
  { id: 100, title: "델리 크라임", type: "series", year: 2019, genre: "crime", mood: "serious", country: "international", tags: ["true-crime", "delhi", "rape"] },

  // 추가 컨텐츠들... (계속해서 512개까지)
  // 🎬 더 많은 한국 컨텐츠
  { id: 101, title: "손님", type: "movie", year: 2018, genre: "horror", mood: "suspense", country: "korean", tags: ["exorcism", "religious", "horror"] },
  { id: 102, title: "암수살인", type: "movie", year: 2018, genre: "crime", mood: "serious", country: "korean", tags: ["serial-killer", "investigation", "dark"] },
  { id: 103, title: "공작", type: "movie", year: 2018, genre: "thriller", mood: "serious", country: "korean", tags: ["spy", "north-korea", "political"] },
  { id: 104, title: "독전", type: "movie", year: 2018, genre: "action", mood: "serious", country: "korean", tags: ["drugs", "undercover", "action"] },
  { id: 105, title: "공범자들", type: "movie", year: 2017, genre: "documentary", mood: "serious", country: "korean", tags: ["documentary", "media", "political"] },

  // 🌟 더 많은 서구 컨텐츠
  { id: 106, title: "아웃로", type: "movie", year: 2018, genre: "action", mood: "serious", country: "western", tags: ["yakuza", "japan", "foreign"] },
  { id: 107, title: "홀드 더 다크", type: "movie", year: 2018, genre: "thriller", mood: "suspense", country: "western", tags: ["alaska", "wolves", "dark"] },
  { id: 108, title: "22 줄라이", type: "movie", year: 2018, genre: "drama", mood: "serious", country: "western", tags: ["norway", "terrorism", "true-story"] },
  { id: 109, title: "오큘러스", type: "movie", year: 2013, genre: "horror", mood: "suspense", country: "western", tags: ["mirror", "supernatural", "horror"] },
  { id: 110, title: "제럴드의 게임", type: "movie", year: 2017, genre: "thriller", mood: "suspense", country: "western", tags: ["stephen-king", "isolation", "psychological"] }

// 🎬 넷플릭스로 뭐 보지? 실제 작품 추천 테스트 데이터
import { netflixContent, tagWeights } from './netflixContent.js';

export const movieQuestions = [
  {
    id: 1,
    question: "지금 어떤 기분이신가요?",
    options: [
      { text: "스트레스 받아서 시원한 액션이 보고 싶어", type: "action" },
      { text: "우울해서 감동적인 드라마가 보고 싶어", type: "emotional" },
      { text: "심심해서 웃긴 콘텐츠가 보고 싶어", type: "comedy" },
      { text: "편안해서 달콤한 로맨스가 보고 싶어", type: "romance" }
    ]
  },
  {
    id: 2,
    question: "언제 시청할 예정인가요?",
    options: [
      { text: "오후에 가볍게 1-2시간", type: "light" },
      { text: "저녁에 집중해서 몰아보기", type: "binge" },
      { text: "밤에 혼자 조용히", type: "solo" },
      { text: "주말에 가족/친구들과", type: "together" }
    ]
  },
  {
    id: 3,
    question: "어떤 장르를 선호하세요?",
    options: [
      { text: "액션, 스릴러 (긴장감 넘치는)", type: "thriller" },
      { text: "드라마, 멜로 (감성적인)", type: "drama" },
      { text: "코미디, 예능 (유쾌한)", type: "variety" },
      { text: "SF, 판타지 (상상력 넘치는)", type: "fantasy" }
    ]
  },
  {
    id: 4,
    question: "콘텐츠 길이 선호도는?",
    options: [
      { text: "영화 (90-180분, 한 번에 끝)", type: "movie" },
      { text: "미니시리즈 (6-10화, 짧고 굵게)", type: "miniseries" },
      { text: "시즌제 시리즈 (긴 호흡으로)", type: "series" },
      { text: "상관없어, 재미있으면 돼", type: "flexible" }
    ]
  },
  {
    id: 5,
    question: "어떤 나라/언어 작품을 선호하세요?",
    options: [
      { text: "한국 드라마/영화", type: "korean" },
      { text: "미국/영국 작품", type: "western" },
      { text: "일본 애니메이션/드라마", type: "japanese" },
      { text: "다양한 국가, 상관없어", type: "international" }
    ]
  },
  {
    id: 6,
    question: "최근에 인기 있던 작품 vs 숨은 명작?",
    options: [
      { text: "요즘 핫한 화제작이 좋아", type: "trending" },
      { text: "검증된 명작/고전이 좋아", type: "classic" },
      { text: "숨겨진 보석 같은 작품", type: "hidden" },
      { text: "신작/최신작 위주로", type: "new" }
    ]
  },
  {
    id: 7,
    question: "어떤 분위기를 원하세요?",
    options: [
      { text: "밝고 경쾌한 분위기", type: "bright" },
      { text: "진지하고 무거운 주제", type: "serious" },
      { text: "미스터리하고 긴장감 있는", type: "suspense" },
      { text: "따뜻하고 힐링되는", type: "healing" }
    ]
  },
  {
    id: 8,
    question: "마지막으로, 현재 관심사는?",
    options: [
      { text: "일상 탈출, 현실 도피", type: "escape" },
      { text: "인생 교훈, 감동", type: "lesson" },
      { text: "순수 재미, 엔터테인먼트", type: "entertainment" },
      { text: "새로운 지식, 문화 체험", type: "culture" }
    ]
  }
];

// 🎯 실제 넷플릭스 작품 추천 알고리즘
export const getNetflixRecommendation = (userAnswers) => {
  // 사용자 답변을 점수화
  const userPreferences = {};
  
  userAnswers.forEach(answer => {
    if (!userPreferences[answer]) {
      userPreferences[answer] = 0;
    }
    userPreferences[answer] += 1;
    
    // 관련 태그들도 가중치 부여
    if (tagWeights[answer]) {
      tagWeights[answer].forEach(relatedTag => {
        if (!userPreferences[relatedTag]) {
          userPreferences[relatedTag] = 0;
        }
        userPreferences[relatedTag] += 0.5; // 관련 태그는 절반 가중치
      });
    }
  });

  // 각 컨텐츠별 매칭 점수 계산
  const contentScores = netflixContent.map(content => {
    let score = 0;
    let matches = [];
    
    // 장르 매칭
    if (userPreferences[content.genre]) {
      score += userPreferences[content.genre] * 3;
      matches.push(`장르: ${content.genre}`);
    }
    
    // 분위기 매칭
    if (userPreferences[content.mood]) {
      score += userPreferences[content.mood] * 2.5;
      matches.push(`분위기: ${content.mood}`);
    }
    
    // 국가 매칭
    if (userPreferences[content.country]) {
      score += userPreferences[content.country] * 2;
      matches.push(`국가: ${content.country}`);
    }
    
    // 타입 매칭
    if (userPreferences[content.type]) {
      score += userPreferences[content.type] * 1.5;
      matches.push(`형태: ${content.type}`);
    }
    
    // 태그 매칭
    content.tags.forEach(tag => {
      if (userPreferences[tag]) {
        score += userPreferences[tag] * 1;
        matches.push(`특징: ${tag}`);
      }
    });
    
    // 평점 보너스 (높은 평점일수록 가산점)
    score += (content.rating - 7) * 0.5;
    
    return {
      ...content,
      matchScore: score,
      matchReasons: matches.slice(0, 3) // 상위 3개 매칭 이유만
    };
  });

  // 점수순으로 정렬하고 상위 5개 추천
  const topRecommendations = contentScores
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5);

  return {
    primaryRecommendation: topRecommendations[0],
    alternativeRecommendations: topRecommendations.slice(1),
    totalAnalyzed: netflixContent.length
  };
};

export const movieTestData = {
  testInfo: {
    title: "넷플릭스로 뭐 보지?",
    subtitle: "512개 실제 작품 중에서 지금 내 기분에 딱 맞는 컨텐츠를 찾아보세요!",
    emoji: "📺"
  },
  questions: movieQuestions,
  getRecommendation: getNetflixRecommendation
};
