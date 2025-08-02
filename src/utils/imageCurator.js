// 🎨 자동 이미지 큐레이션 시스템
// 각 테스트 결과에 어울리는 영화, 사진, 애니메이션 등을 자동 추천

// 🎬 영화/애니메이션 레퍼런스 데이터베이스
const MOVIE_REFERENCES = {
  // 공룡 테마
  dinosaur: {
    "ENTJ": {
      movies: ["쥬라기 공원", "쥬라기 월드", "킹콩"],
      scenes: ["티라노사우루스 등장 장면", "공원 관리자 역할", "리더십 발휘 장면"],
      characters: ["앨런 그랜트", "오웬 그라디", "클레어 디어링"],
      keywords: ["리더십", "전략적 사고", "결단력", "권위"]
    },
    "ENFP": {
      movies: ["굿 다이노", "아기 공룡 버디", "공룡시대"],
      scenes: ["모험을 떠나는 장면", "새로운 발견", "친구들과의 우정"],
      characters: ["버디", "아기 공룡들", "모험가"],
      keywords: ["모험", "창의성", "열정", "우정"]
    },
    "INFJ": {
      movies: ["공룡의 땅", "마이티 조", "공룡시대"],
      scenes: ["깊은 사색", "자연과의 교감", "내적 성찰"],
      characters: ["현명한 멘토", "깊이 있는 사색가"],
      keywords: ["지혜", "직관", "성찰", "영성"]
    },
    "ISTP": {
      movies: ["쥬라기 공원", "벨로시랩터", "공룡 사냥꾼"],
      scenes: ["기술적 문제 해결", "위기 상황 대처", "실용적 행동"],
      characters: ["기술자", "사냥꾼", "문제 해결사"],
      keywords: ["실용성", "기술", "위기 대처", "독립성"]
    }
  },
  
  // 고양이 테마
  cat: {
    "ENFJ": {
      movies: ["아리스토캣", "고양이의 보은", "고양이와 함께"],
      scenes: ["고양이들이 모여있는 장면", "리더십 발휘", "보호와 돌봄"],
      characters: ["고양이 리더", "보호자", "멘토"],
      keywords: ["리더십", "보호", "돌봄", "영감"]
    },
    "INFP": {
      movies: ["고양이의 보은", "고양이와 함께", "고양이 이야기"],
      scenes: ["고양이와의 교감", "자연 속 고양이", "감성적 순간"],
      characters: ["예술가 고양이", "꿈꾸는 고양이"],
      keywords: ["감성", "창의성", "꿈", "자유"]
    },
    "ESTJ": {
      movies: ["고양이 관리자", "고양이 왕국", "고양이 사회"],
      scenes: ["조직 관리", "규칙과 질서", "효율적 운영"],
      characters: ["관리자 고양이", "조직의 리더"],
      keywords: ["조직", "질서", "효율성", "책임"]
    },
    "ISFP": {
      movies: ["고양이와 함께", "고양이의 일상", "고양이 예술가"],
      scenes: ["고양이의 자유로운 모습", "예술적 표현", "자연과의 조화"],
      characters: ["예술가 고양이", "자유로운 영혼"],
      keywords: ["자유", "예술", "자연", "감성"]
    }
  },
  
  // 음식 테마
  food: {
    "ENTP": {
      movies: ["라따뚜이", "주방의 비밀", "요리 대결"],
      scenes: ["창의적 요리", "새로운 레시피 개발", "도전적 요리"],
      characters: ["혁신적 셰프", "창의적 요리사"],
      keywords: ["혁신", "창의성", "도전", "지적 자극"]
    },
    "ISFJ": {
      movies: ["가족 요리", "전통 요리", "마음의 요리"],
      scenes: ["가족을 위한 요리", "전통 레시피", "따뜻한 식사"],
      characters: ["가족 셰프", "전통 요리사"],
      keywords: ["가족", "전통", "따뜻함", "배려"]
    },
    "ENFP": {
      movies: ["요리 모험", "세계 음식 여행", "즐거운 요리"],
      scenes: ["세계 음식 탐험", "즐거운 요리 시간", "새로운 맛 발견"],
      characters: ["모험가 셰프", "세계 음식 전문가"],
      keywords: ["모험", "즐거움", "탐험", "열정"]
    },
    "ISTJ": {
      movies: ["정확한 요리", "레시피의 과학", "완벽한 요리"],
      scenes: ["정확한 계량", "과학적 요리", "완벽한 결과"],
      characters: ["과학적 셰프", "정확한 요리사"],
      keywords: ["정확성", "과학", "완벽함", "체계"]
    }
  }
};

// 🎨 아트 스타일 레퍼런스
const ART_STYLES = {
  "ENTJ": {
    styles: ["미니멀리즘", "모던 아트", "기하학적"],
    colors: ["검정", "회색", "파랑"],
    mood: "강력하고 전문적",
    composition: "대칭적이고 균형잡힌"
  },
  "ENFP": {
    styles: ["인상주의", "팝아트", "컬러풀"],
    colors: ["노랑", "주황", "핑크"],
    mood: "활기차고 창의적",
    composition: "자유롭고 역동적"
  },
  "INFJ": {
    styles: ["상징주의", "로맨틱", "몽환적"],
    colors: ["보라", "파랑", "연한 핑크"],
    mood: "신비롭고 깊이 있는",
    composition: "원형적이고 유기적"
  },
  "ISTP": {
    styles: ["사실주의", "기능적", "클린"],
    colors: ["회색", "검정", "흰색"],
    mood: "실용적이고 깔끔한",
    composition: "직선적이고 명확한"
  }
};

// 📸 사진 스타일 레퍼런스
const PHOTO_STYLES = {
  "ENTJ": {
    angles: ["로우 앵글", "정면", "권위있는"],
    lighting: ["강한 대비", "드라마틱", "전문적"],
    composition: ["규칙적", "대칭적", "균형잡힌"]
  },
  "ENFP": {
    angles: ["다양한 앵글", "동적", "즉흥적"],
    lighting: ["자연광", "따뜻한", "활기찬"],
    composition: ["자유로운", "비대칭적", "역동적"]
  },
  "INFJ": {
    angles: ["클로즈업", "감성적", "깊이 있는"],
    lighting: ["부드러운", "몽환적", "신비로운"],
    composition: ["원형적", "유기적", "감성적"]
  },
  "ISTP": {
    angles: ["직선적", "기능적", "명확한"],
    lighting: ["자연스러운", "깔끔한", "실용적"],
    composition: ["직선적", "명확한", "기능적"]
  }
};

// 🎯 이미지 큐레이션 메인 함수
export function curateImages(testType, mbtiType, options = {}) {
  const {
    includeMovies = true,
    includeArt = true,
    includePhotos = true,
    maxResults = 5
  } = options;

  const results = {
    testType,
    mbtiType,
    recommendations: [],
    artStyle: null,
    photoStyle: null
  };

  // 영화/애니메이션 추천
  if (includeMovies && MOVIE_REFERENCES[testType]?.[mbtiType]) {
    const movieRef = MOVIE_REFERENCES[testType][mbtiType];
    results.recommendations.push({
      type: 'movie',
      title: `${movieRef.movies[0]} - ${movieRef.scenes[0]}`,
      description: `${movieRef.characters[0]} 캐릭터의 ${movieRef.keywords[0]}을 보여주는 장면`,
      keywords: movieRef.keywords,
      reference: {
        movies: movieRef.movies,
        scenes: movieRef.scenes,
        characters: movieRef.characters
      }
    });
  }

  // 아트 스타일 추천
  if (includeArt && ART_STYLES[mbtiType]) {
    const artStyle = ART_STYLES[mbtiType];
    results.artStyle = artStyle;
    results.recommendations.push({
      type: 'art',
      title: `${artStyle.styles[0]} 스타일`,
      description: `${artStyle.mood}한 분위기의 ${artStyle.composition} 구성`,
      keywords: artStyle.colors,
      reference: artStyle
    });
  }

  // 사진 스타일 추천
  if (includePhotos && PHOTO_STYLES[mbtiType]) {
    const photoStyle = PHOTO_STYLES[mbtiType];
    results.photoStyle = photoStyle;
    results.recommendations.push({
      type: 'photo',
      title: `${photoStyle.angles[0]} 사진 스타일`,
      description: `${photoStyle.lighting[0]} 조명과 ${photoStyle.composition[0]} 구도`,
      keywords: [photoStyle.angles[0], photoStyle.lighting[0]],
      reference: photoStyle
    });
  }

  // 결과 제한
  results.recommendations = results.recommendations.slice(0, maxResults);

  return results;
}

// 🎨 특정 MBTI 타입에 대한 상세 추천
export function getDetailedRecommendations(mbtiType) {
  const recommendations = {
    mbtiType,
    visualStyle: ART_STYLES[mbtiType] || {},
    photoStyle: PHOTO_STYLES[mbtiType] || {},
    generalKeywords: []
  };

  // MBTI별 일반적인 키워드 추가
  const mbtiKeywords = {
    "ENTJ": ["리더십", "전략", "결단력", "권위", "효율성"],
    "ENFP": ["창의성", "열정", "모험", "즐거움", "자유"],
    "INFJ": ["지혜", "직관", "성찰", "영성", "깊이"],
    "ISTP": ["실용성", "기술", "독립성", "위기대처", "명확성"]
  };

  recommendations.generalKeywords = mbtiKeywords[mbtiType] || [];

  return recommendations;
}

// 🎬 영화 장면 구체적 추천
export function getMovieSceneRecommendations(testType, mbtiType) {
  const movieRef = MOVIE_REFERENCES[testType]?.[mbtiType];
  
  if (!movieRef) {
    return {
      message: "해당 테스트 타입과 MBTI 조합에 대한 영화 추천이 없습니다.",
      suggestions: ["일반적인 MBTI 영화 추천을 확인해보세요."]
    };
  }

  return {
    primaryMovie: movieRef.movies[0],
    primaryScene: movieRef.scenes[0],
    primaryCharacter: movieRef.characters[0],
    allMovies: movieRef.movies,
    allScenes: movieRef.scenes,
    allCharacters: movieRef.characters,
    keywords: movieRef.keywords,
    description: `${movieRef.movies[0]}의 ${movieRef.scenes[0]}에서 ${movieRef.characters[0]}의 ${movieRef.keywords[0]}을 참고하세요.`
  };
}

// 🎨 아트 스타일 상세 가이드
export function getArtStyleGuide(mbtiType) {
  const artStyle = ART_STYLES[mbtiType];
  
  if (!artStyle) {
    return {
      message: "해당 MBTI 타입에 대한 아트 스타일 가이드가 없습니다."
    };
  }

  return {
    recommendedStyles: artStyle.styles,
    colorPalette: artStyle.colors,
    mood: artStyle.mood,
    composition: artStyle.composition,
    description: `${artStyle.mood}한 분위기의 ${artStyle.styles[0]} 스타일을 사용하여 ${artStyle.composition} 구도로 표현하세요.`,
    colorGuide: `${artStyle.colors.join(', ')} 색상을 주요 색상으로 사용하세요.`
  };
}

// 📸 사진 스타일 상세 가이드
export function getPhotoStyleGuide(mbtiType) {
  const photoStyle = PHOTO_STYLES[mbtiType];
  
  if (!photoStyle) {
    return {
      message: "해당 MBTI 타입에 대한 사진 스타일 가이드가 없습니다."
    };
  }

  return {
    recommendedAngles: photoStyle.angles,
    lightingStyle: photoStyle.lighting,
    compositionStyle: photoStyle.composition,
    description: `${photoStyle.angles[0]} 앵글로 ${photoStyle.lighting[0]} 조명을 사용하여 ${photoStyle.composition[0]} 구도로 촬영하세요.`,
    technicalTips: [
      `앵글: ${photoStyle.angles.join(', ')}`,
      `조명: ${photoStyle.lighting.join(', ')}`,
      `구도: ${photoStyle.composition.join(', ')}`
    ]
  };
}

// 🎯 통합 이미지 가이드 생성
export function generateImageGuide(testType, mbtiType) {
  const movieGuide = getMovieSceneRecommendations(testType, mbtiType);
  const artGuide = getArtStyleGuide(mbtiType);
  const photoGuide = getPhotoStyleGuide(mbtiType);
  const detailedRecs = getDetailedRecommendations(mbtiType);

  return {
    testType,
    mbtiType,
    summary: `${testType} 테스트의 ${mbtiType} 결과에 어울리는 이미지 가이드`,
    movieGuide,
    artGuide,
    photoGuide,
    detailedRecommendations: detailedRecs,
    quickTips: [
      `영화: ${movieGuide.primaryMovie}의 ${movieGuide.primaryScene} 참고`,
      `아트: ${artGuide.recommendedStyles[0]} 스타일, ${artGuide.colorPalette[0]} 색상`,
      `사진: ${photoGuide.recommendedAngles[0]} 앵글, ${photoGuide.lightingStyle[0]} 조명`
    ]
  };
}

// 🎨 이미지 생성 프롬프트 생성
export function generateImagePrompt(testType, mbtiType, customElements = {}) {
  const guide = generateImageGuide(testType, mbtiType);
  
  const basePrompt = `${guide.artGuide.mood}한 분위기의 ${guide.artGuide.recommendedStyles[0]} 스타일로, ${guide.movieGuide.primaryScene}을 연상시키는 이미지`;
  
  const stylePrompt = `${guide.artGuide.colorPalette.join(', ')} 색상 팔레트, ${guide.artGuide.composition} 구도`;
  
  const moodPrompt = `${guide.detailedRecommendations.generalKeywords.join(', ')}을 표현하는 ${testType} 테마`;
  
  const customPrompt = customElements.additionalElements ? `, ${customElements.additionalElements}` : '';
  
  return {
    fullPrompt: `${basePrompt}, ${stylePrompt}, ${moodPrompt}${customPrompt}`,
    styleGuide: guide.artGuide,
    colorPalette: guide.artGuide.colorPalette,
    composition: guide.artGuide.composition,
    mood: guide.artGuide.mood,
    keywords: guide.detailedRecommendations.generalKeywords
  };
} 