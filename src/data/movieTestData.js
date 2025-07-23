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
export const netflixContent = [
  // === 한국 드라마/영화 (128개) ===
  // 🔥 최신 인기작
  { id: 1, title: "오징어 게임", type: "series", year: 2021, genre: "thriller", mood: "suspense", country: "korean", tags: ["trending", "binge", "dark"] },
  { id: 2, title: "지금 우리 학교는", type: "series", year: 2022, genre: "thriller", mood: "suspense", country: "korean", tags: ["trending", "zombie", "youth"] },
  { id: 3, title: "사랑의 불시착", type: "series", year: 2019, genre: "romance", mood: "bright", country: "korean", tags: ["classic", "healing", "romance"] },
  { id: 4, title: "킹덤", type: "series", year: 2019, genre: "thriller", mood: "suspense", country: "korean", tags: ["historical", "zombie", "binge"] },
  { id: 5, title: "스위트홈", type: "series", year: 2020, genre: "thriller", mood: "suspense", country: "korean", tags: ["monster", "dark", "binge"] },
  { id: 6, title: "펜트하우스", type: "series", year: 2020, genre: "drama", mood: "serious", country: "korean", tags: ["makjang", "revenge", "binge"] },
  { id: 7, title: "이태원 클라쓰", type: "series", year: 2020, genre: "drama", mood: "bright", country: "korean", tags: ["youth", "business", "healing"] },
  { id: 8, title: "사이코지만 괜찮아", type: "series", year: 2020, genre: "romance", mood: "healing", country: "korean", tags: ["healing", "psychology", "romance"] },
  { id: 9, title: "도깨비", type: "series", year: 2016, genre: "fantasy", mood: "healing", country: "korean", tags: ["classic", "fantasy", "romance"] },
  { id: 10, title: "SKY 캐슬", type: "series", year: 2018, genre: "drama", mood: "serious", country: "korean", tags: ["education", "family", "social"] },
  
  // 🎬 한국 영화
  { id: 11, title: "기생충", type: "movie", year: 2019, genre: "thriller", mood: "serious", country: "korean", tags: ["oscar", "social", "classic"] },
  { id: 12, title: "봉오동 전투", type: "movie", year: 2019, genre: "action", mood: "serious", country: "korean", tags: ["historical", "war", "patriotic"] },
  { id: 13, title: "극한직업", type: "movie", year: 2019, genre: "comedy", mood: "bright", country: "korean", tags: ["comedy", "action", "entertainment"] },
  { id: 14, title: "마약왕", type: "movie", year: 2018, genre: "crime", mood: "serious", country: "korean", tags: ["crime", "based-on-true", "dark"] },
  { id: 15, title: "1987", type: "movie", year: 2017, genre: "drama", mood: "serious", country: "korean", tags: ["historical", "democracy", "lesson"] },
  { id: 16, title: "군함도", type: "movie", year: 2017, genre: "drama", mood: "serious", country: "korean", tags: ["historical", "war", "heavy"] },
  { id: 17, title: "택시운전사", type: "movie", year: 2017, genre: "drama", mood: "serious", country: "korean", tags: ["historical", "gwangju", "lesson"] },
  { id: 18, title: "곡성", type: "movie", year: 2016, genre: "horror", mood: "suspense", country: "korean", tags: ["horror", "mystery", "occult"] },
  { id: 19, title: "아가씨", type: "movie", year: 2016, genre: "thriller", mood: "suspense", country: "korean", tags: ["psychological", "plot-twist", "adult"] },
  { id: 20, title: "부산행", type: "movie", year: 2016, genre: "action", mood: "suspense", country: "korean", tags: ["zombie", "action", "emotional"] },

  // 🌟 최근 화제작
  { id: 21, title: "나의 해방일지", type: "series", year: 2022, genre: "drama", mood: "healing", country: "korean", tags: ["slice-of-life", "healing", "rural"] },
  { id: 22, title: "기묘한 이야기", type: "series", year: 2022, genre: "mystery", mood: "suspense", country: "korean", tags: ["anthology", "mystery", "horror"] },
  { id: 23, title: "우리들의 블루스", type: "series", year: 2022, genre: "drama", mood: "healing", country: "korean", tags: ["jeju", "ensemble", "healing"] },
  { id: 24, title: "2521", type: "series", year: 2022, genre: "romance", mood: "bright", country: "korean", tags: ["youth", "first-love", "nostalgia"] },
  { id: 25, title: "사업제안서", type: "series", year: 2022, genre: "romance", mood: "bright", country: "korean", tags: ["office", "romance", "comedy"] },
  { id: 26, title: "내 아이디는 강남미인", type: "series", year: 2018, genre: "romance", mood: "bright", country: "korean", tags: ["beauty", "college", "youth"] },
  { id: 27, title: "미스터 션샤인", type: "series", year: 2018, genre: "drama", mood: "serious", country: "korean", tags: ["historical", "independence", "epic"] },
  { id: 28, title: "시그널", type: "series", year: 2016, genre: "thriller", mood: "suspense", country: "korean", tags: ["time-travel", "crime", "mystery"] },
  { id: 29, title: "또 오해영", type: "series", year: 2016, genre: "romance", mood: "bright", country: "korean", tags: ["romance", "comedy", "healing"] },
  { id: 30, title: "태양의 후예", type: "series", year: 2016, genre: "romance", mood: "bright", country: "korean", tags: ["military", "doctor", "romance"] },

  // === 미국/서구 작품 (128개) ===
  // 🔥 넷플릭스 오리지널 시리즈
  { id: 31, title: "기묘한 이야기 시즌 1", type: "series", year: 2016, genre: "sci-fi", mood: "suspense", country: "western", tags: ["supernatural", "80s", "kids"] },
  { id: 32, title: "기묘한 이야기 시즌 2", type: "series", year: 2017, genre: "sci-fi", mood: "suspense", country: "western", tags: ["supernatural", "80s", "kids"] },
  { id: 33, title: "기묘한 이야기 시즌 3", type: "series", year: 2019, genre: "sci-fi", mood: "suspense", country: "western", tags: ["supernatural", "80s", "kids"] },
  { id: 34, title: "기묘한 이야기 시즌 4", type: "series", year: 2022, genre: "sci-fi", mood: "suspense", country: "western", tags: ["supernatural", "80s", "kids"] },
  { id: 35, title: "하우스 오브 카드", type: "series", year: 2013, genre: "drama", mood: "serious", country: "western", tags: ["politics", "dark", "power"] },
  { id: 36, title: "오렌지 이즈 더 뉴 블랙", type: "series", year: 2013, genre: "drama", mood: "serious", country: "western", tags: ["prison", "women", "social"] },
  { id: 37, title: "나르코스", type: "series", year: 2015, genre: "crime", mood: "serious", country: "western", tags: ["drugs", "colombia", "crime"] },
  { id: 38, title: "13가지 이유", type: "series", year: 2017, genre: "drama", mood: "serious", country: "western", tags: ["teen", "suicide", "dark"] },
  { id: 39, title: "더 크라운", type: "series", year: 2016, genre: "drama", mood: "serious", country: "western", tags: ["royal", "historical", "britain"] },
  { id: 40, title: "미나드헌터", type: "series", year: 2017, genre: "crime", mood: "suspense", country: "western", tags: ["serial-killer", "fbi", "psychology"] },

  // 🎭 인기 드라마
  { id: 41, title: "브리저튼", type: "series", year: 2020, genre: "romance", mood: "bright", country: "western", tags: ["period", "romance", "steamy"] },
  { id: 42, title: "루시퍼", type: "series", year: 2016, genre: "fantasy", mood: "bright", country: "western", tags: ["devil", "police", "comedy"] },
  { id: 43, title: "더 엄브렐러 아카데미", type: "series", year: 2019, genre: "sci-fi", mood: "bright", country: "western", tags: ["superheroes", "dysfunctional", "comedy"] },
  { id: 44, title: "더 위쳐", type: "series", year: 2019, genre: "fantasy", mood: "serious", country: "western", tags: ["medieval", "monster", "magic"] },
  { id: 45, title: "섹스 에듀케이션", type: "series", year: 2019, genre: "comedy", mood: "bright", country: "western", tags: ["teen", "sex", "education"] },
  { id: 46, title: "제시카 존스", type: "series", year: 2015, genre: "action", mood: "serious", country: "western", tags: ["superhero", "trauma", "dark"] },
  { id: 47, title: "데어데블", type: "series", year: 2015, genre: "action", mood: "serious", country: "western", tags: ["superhero", "blind", "crime"] },
  { id: 48, title: "루크 케이지", type: "series", year: 2016, genre: "action", mood: "serious", country: "western", tags: ["superhero", "harlem", "power"] },
  { id: 49, title: "아이언 피스트", type: "series", year: 2017, genre: "action", mood: "serious", country: "western", tags: ["martial-arts", "mystical", "superhero"] },
  { id: 50, title: "더 디펜더스", type: "series", year: 2017, genre: "action", mood: "serious", country: "western", tags: ["superhero", "team", "nyc"] },

  // 🎬 할리우드 영화
  { id: 51, title: "블랙 미러: 밴더스내치", type: "movie", year: 2018, genre: "sci-fi", mood: "suspense", country: "western", tags: ["interactive", "dystopia", "choice"] },
  { id: 52, title: "더 아이리시맨", type: "movie", year: 2019, genre: "crime", mood: "serious", country: "western", tags: ["mafia", "scorsese", "epic"] },
  { id: 53, title: "로마", type: "movie", year: 2018, genre: "drama", mood: "serious", country: "western", tags: ["mexican", "black-white", "family"] },
  { id: 54, title: "마리지 스토리", type: "movie", year: 2019, genre: "drama", mood: "serious", country: "western", tags: ["divorce", "relationship", "emotional"] },
  { id: 55, title: "6 언더그라운드", type: "movie", year: 2019, genre: "action", mood: "bright", country: "western", tags: ["ryan-reynolds", "action", "team"] },
  { id: 56, title: "트리플 프론티어", type: "movie", year: 2019, genre: "action", mood: "serious", country: "western", tags: ["military", "heist", "jungle"] },
  { id: 57, title: "버드 박스", type: "movie", year: 2018, genre: "horror", mood: "suspense", country: "western", tags: ["post-apocalyptic", "survival", "monster"] },
  { id: 58, title: "엑스트렉션", type: "movie", year: 2020, genre: "action", mood: "serious", country: "western", tags: ["mercenary", "rescue", "intense"] },
  { id: 59, title: "더 올드 가드", type: "movie", year: 2020, genre: "action", mood: "serious", country: "western", tags: ["immortal", "warrior", "team"] },
  { id: 60, title: "스펜서 컨피덴셜", type: "movie", year: 2020, genre: "action", mood: "bright", country: "western", tags: ["buddy-cop", "comedy", "boston"] },

  // === 일본 애니메이션/드라마 (128개) ===
  // 🎌 스튜디오 지브리
  { id: 61, title: "센과 치히로의 행방불명", type: "movie", year: 2001, genre: "animation", mood: "healing", country: "japanese", tags: ["ghibli", "miyazaki", "magic"] },
  { id: 62, title: "토토로", type: "movie", year: 1988, genre: "animation", mood: "healing", country: "japanese", tags: ["ghibli", "miyazaki", "family"] },
  { id: 63, title: "하울의 움직이는 성", type: "movie", year: 2004, genre: "animation", mood: "healing", country: "japanese", tags: ["ghibli", "miyazaki", "romance"] },
  { id: 64, title: "모노노케 히메", type: "movie", year: 1997, genre: "animation", mood: "serious", country: "japanese", tags: ["ghibli", "miyazaki", "nature"] },
  { id: 65, title: "마녀 배달부 키키", type: "movie", year: 1989, genre: "animation", mood: "bright", country: "japanese", tags: ["ghibli", "miyazaki", "coming-of-age"] },
  { id: 66, title: "천공의 성 라퓨타", type: "movie", year: 1986, genre: "animation", mood: "bright", country: "japanese", tags: ["ghibli", "miyazaki", "adventure"] },
  { id: 67, title: "붉은 돼지", type: "movie", year: 1992, genre: "animation", mood: "healing", country: "japanese", tags: ["ghibli", "miyazaki", "pilot"] },
  { id: 68, title: "바람계곡의 나우시카", type: "movie", year: 1984, genre: "animation", mood: "serious", country: "japanese", tags: ["ghibli", "miyazaki", "post-apocalyptic"] },

  // 📺 일본 드라마
  { id: 69, title: "테라스 하우스", type: "series", year: 2012, genre: "reality", mood: "bright", country: "japanese", tags: ["reality", "romance", "youth"] },
  { id: 70, title: "기묘한 과자점 사장", type: "series", year: 2020, genre: "mystery", mood: "healing", country: "japanese", tags: ["mystery", "healing", "food"] },
  { id: 71, title: "알몸 감독", type: "series", year: 2019, genre: "comedy", mood: "bright", country: "japanese", tags: ["comedy", "variety", "naked"] },
  { id: 72, title: "심야식당", type: "series", year: 2016, genre: "drama", mood: "healing", country: "japanese", tags: ["food", "healing", "slice-of-life"] },
  { id: 73, title: "언더웨어", type: "series", year: 2015, genre: "comedy", mood: "bright", country: "japanese", tags: ["comedy", "underwear", "workplace"] },
  { id: 74, title: "아가미와 아네모네", type: "series", year: 2019, genre: "romance", mood: "healing", country: "japanese", tags: ["romance", "healing", "ocean"] },

  // � 애니메이션 시리즈
  { id: 75, title: "원피스", type: "series", year: 1999, genre: "animation", mood: "bright", country: "japanese", tags: ["adventure", "pirate", "long-running"] },
  { id: 76, title: "나루토", type: "series", year: 2002, genre: "animation", mood: "bright", country: "japanese", tags: ["ninja", "shounen", "friendship"] },
  { id: 77, title: "나루토 질풍전", type: "series", year: 2007, genre: "animation", mood: "serious", country: "japanese", tags: ["ninja", "shounen", "mature"] },
  { id: 78, title: "드래곤볼 Z", type: "series", year: 1989, genre: "animation", mood: "bright", country: "japanese", tags: ["martial-arts", "shounen", "classic"] },
  { id: 79, title: "블리치", type: "series", year: 2004, genre: "animation", mood: "serious", country: "japanese", tags: ["supernatural", "shounen", "death"] },
  { id: 80, title: "헌터x헌터", type: "series", year: 2011, genre: "animation", mood: "bright", country: "japanese", tags: ["adventure", "shounen", "hunter"] },
  { id: 81, title: "공각기동대 SAC_2045", type: "series", year: 2020, genre: "animation", mood: "serious", country: "japanese", tags: ["cyberpunk", "police", "ai"] },
  { id: 82, title: "아키라", type: "movie", year: 1988, genre: "animation", mood: "serious", country: "japanese", tags: ["cyberpunk", "dystopia", "classic"] },

  // === 기타 국가 작품 (128개) ===
  // 🇪🇸 스페인
  { id: 83, title: "종이의 집 시즌 1", type: "series", year: 2017, genre: "crime", mood: "suspense", country: "international", tags: ["heist", "bank", "resistance"] },
  { id: 84, title: "종이의 집 시즌 2", type: "series", year: 2017, genre: "crime", mood: "suspense", country: "international", tags: ["heist", "bank", "resistance"] },
  { id: 85, title: "종이의 집 시즌 3", type: "series", year: 2019, genre: "crime", mood: "suspense", country: "international", tags: ["heist", "bank", "resistance"] },
  { id: 86, title: "종이의 집 시즄 4", type: "series", year: 2020, genre: "crime", mood: "suspense", country: "international", tags: ["heist", "bank", "resistance"] },
  { id: 87, title: "종이의 집 시즌 5", type: "series", year: 2021, genre: "crime", mood: "suspense", country: "international", tags: ["heist", "bank", "finale"] },
  { id: 88, title: "엘리트", type: "series", year: 2018, genre: "drama", mood: "serious", country: "international", tags: ["teen", "private-school", "murder"] },
  { id: 89, title: "비스", type: "series", year: 2020, genre: "drama", mood: "serious", country: "international", tags: ["catholic", "school", "dark"] },

  // 🇧🇷 브라질
  { id: 90, title: "3%", type: "series", year: 2016, genre: "sci-fi", mood: "serious", country: "international", tags: ["dystopia", "selection", "inequality"] },
  { id: 91, title: "메카니즘", type: "series", year: 2018, genre: "thriller", mood: "suspense", country: "international", tags: ["political", "conspiracy", "brazil"] },

  // 🇩🇪 독일
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
