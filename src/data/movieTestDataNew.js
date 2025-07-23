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
