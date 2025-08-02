# 🎨 이미지 큐레이션 시스템 가이드

## 📋 개요

쫄부월드의 이미지 큐레이션 시스템은 각 테스트 결과에 어울리는 이미지를 자동으로 추천해주는 도구입니다. 영화 장면, 아트 스타일, 사진 기법 등을 참고하여 결과 이미지 제작에 도움을 줍니다.

## 🚀 주요 기능

### 1. 🎬 영화/애니메이션 레퍼런스
- **테마별 영화 추천**: 각 테스트 타입에 맞는 영화/애니메이션 추천
- **장면별 분석**: 특정 MBTI 타입에 어울리는 영화 장면 추천
- **캐릭터 분석**: 영화 속 캐릭터의 성격과 MBTI 연결

### 2. 🎨 아트 스타일 가이드
- **MBTI별 스타일**: 각 MBTI 타입에 어울리는 아트 스타일 추천
- **색상 팔레트**: 일관된 색상 조합 제안
- **구도 가이드**: 효과적인 이미지 구성 방법

### 3. 📸 사진 스타일 가이드
- **촬영 앵글**: MBTI별 추천 촬영 각도
- **조명 기법**: 분위기에 맞는 조명 스타일
- **구도 팁**: 전문적인 사진 구도 방법

### 4. ✨ AI 프롬프트 생성
- **자동 프롬프트**: AI 이미지 생성용 프롬프트 자동 생성
- **커스터마이징**: 추가 요소 입력 가능
- **스타일 가이드**: 생성된 프롬프트의 스타일 분석

## 🛠 사용법

### 기본 사용법

```javascript
import { curateImages, generateImageGuide } from '@/utils/imageCurator';

// 기본 이미지 큐레이션
const results = curateImages('dinosaur', 'ENTJ');

// 상세 가이드 생성
const guide = generateImageGuide('dinosaur', 'ENTJ');
```

### 컴포넌트 사용법

```jsx
import ImageCuratorComponent from '@/components/common/ImageCuratorComponent';

<ImageCuratorComponent
  testType="dinosaur"
  mbtiType="ENTJ"
  onPromptGenerated={(prompt) => {
    console.log('생성된 프롬프트:', prompt);
  }}
/>
```

## 📊 지원하는 테스트 타입

### 🦕 공룡 테스트
- **ENTJ**: 쥬라기 공원, 리더십, 전략적 사고
- **ENFP**: 굿 다이노, 모험, 창의성
- **INFJ**: 공룡의 땅, 지혜, 성찰
- **ISTP**: 쥬라기 공원, 실용성, 기술

### 🐱 고양이 테스트
- **ENFJ**: 아리스토캣, 리더십, 보호
- **INFP**: 고양이의 보은, 감성, 창의성
- **ESTJ**: 고양이 관리자, 조직, 질서
- **ISFP**: 고양이와 함께, 자유, 예술

### 🍽️ 음식 테스트
- **ENTP**: 라따뚜이, 혁신, 창의성
- **ISFJ**: 가족 요리, 전통, 따뜻함
- **ENFP**: 요리 모험, 즐거움, 탐험
- **ISTJ**: 정확한 요리, 과학, 체계

## 🎨 아트 스타일 매핑

| MBTI | 스타일 | 색상 | 분위기 |
|------|--------|------|--------|
| ENTJ | 미니멀리즘 | 검정, 회색, 파랑 | 강력하고 전문적 |
| ENFP | 인상주의 | 노랑, 주황, 핑크 | 활기차고 창의적 |
| INFJ | 상징주의 | 보라, 파랑, 연한 핑크 | 신비롭고 깊이 있는 |
| ISTP | 사실주의 | 회색, 검정, 흰색 | 실용적이고 깔끔한 |

## 📸 사진 스타일 매핑

| MBTI | 앵글 | 조명 | 구도 |
|------|------|------|------|
| ENTJ | 로우 앵글 | 강한 대비 | 규칙적, 대칭적 |
| ENFP | 다양한 앵글 | 자연광 | 자유로운, 역동적 |
| INFJ | 클로즈업 | 부드러운 | 원형적, 유기적 |
| ISTP | 직선적 | 자연스러운 | 직선적, 명확한 |

## 🔧 API 함수

### curateImages(testType, mbtiType, options)
기본 이미지 큐레이션을 수행합니다.

**매개변수:**
- `testType`: 테스트 타입 ('dinosaur', 'cat', 'food')
- `mbtiType`: MBTI 타입 ('ENTJ', 'ENFP', 등)
- `options`: 옵션 객체
  - `includeMovies`: 영화 추천 포함 여부 (기본값: true)
  - `includeArt`: 아트 스타일 포함 여부 (기본값: true)
  - `includePhotos`: 사진 스타일 포함 여부 (기본값: true)
  - `maxResults`: 최대 결과 수 (기본값: 5)

### generateImageGuide(testType, mbtiType)
상세한 이미지 가이드를 생성합니다.

### generateImagePrompt(testType, mbtiType, customElements)
AI 이미지 생성용 프롬프트를 생성합니다.

### getMovieSceneRecommendations(testType, mbtiType)
영화 장면 추천을 가져옵니다.

### getArtStyleGuide(mbtiType)
아트 스타일 가이드를 가져옵니다.

### getPhotoStyleGuide(mbtiType)
사진 스타일 가이드를 가져옵니다.

## 🎯 활용 예시

### 1. 결과 이미지 제작
```javascript
// ENTJ 공룡 테스트 결과 이미지 제작
const guide = generateImageGuide('dinosaur', 'ENTJ');
const prompt = generateImagePrompt('dinosaur', 'ENTJ', {
  additionalElements: '티라노사우루스, 쥬라기 공원 배경'
});

// AI 이미지 생성기에 프롬프트 사용
// "강력하고 전문적인 분위기의 미니멀리즘 스타일로, 
//  티라노사우루스 등장 장면을 연상시키는 이미지, 
//  검정, 회색, 파랑 색상 팔레트, 대칭적이고 균형잡힌 구도, 
//  리더십, 전략, 결단력, 권위, 효율성을 표현하는 공룡 테마, 
//  티라노사우루스, 쥬라기 공원 배경"
```

### 2. 색상 팔레트 활용
```javascript
const artGuide = getArtStyleGuide('ENTJ');
// 색상 팔레트: ["검정", "회색", "파랑"]
// 스타일: ["미니멀리즘", "모던 아트", "기하학적"]
```

### 3. 영화 레퍼런스 활용
```javascript
const movieGuide = getMovieSceneRecommendations('dinosaur', 'ENTJ');
// 주요 영화: "쥬라기 공원"
// 주요 장면: "티라노사우루스 등장 장면"
// 키워드: ["리더십", "전략적 사고", "결단력", "권위"]
```

## 🌐 데모 페이지

이미지 큐레이션 시스템을 직접 체험해보세요:
- **URL**: `/image-curator`
- **기능**: 실시간으로 다양한 테스트 타입과 MBTI 조합 테스트
- **결과**: 즉시 이미지 가이드 및 프롬프트 생성

## 🔄 확장 방법

### 새로운 테스트 타입 추가
```javascript
// src/utils/imageCurator.js의 MOVIE_REFERENCES에 추가
const MOVIE_REFERENCES = {
  // 기존 테마들...
  newTestType: {
    "ENTJ": {
      movies: ["관련 영화 1", "관련 영화 2"],
      scenes: ["관련 장면 1", "관련 장면 2"],
      characters: ["관련 캐릭터 1", "관련 캐릭터 2"],
      keywords: ["키워드 1", "키워드 2"]
    }
  }
};
```

### 새로운 MBTI 타입 추가
```javascript
// ART_STYLES와 PHOTO_STYLES에 추가
const ART_STYLES = {
  // 기존 스타일들...
  "NEW_TYPE": {
    styles: ["추천 스타일 1", "추천 스타일 2"],
    colors: ["색상 1", "색상 2"],
    mood: "분위기 설명",
    composition: "구도 설명"
  }
};
```

## 💡 팁과 트릭

1. **다양한 조합 실험**: 모든 테스트 타입과 MBTI 조합을 테스트해보세요
2. **프롬프트 커스터마이징**: 추가 요소를 입력하여 더 구체적인 프롬프트 생성
3. **스타일 일관성**: 같은 MBTI 타입의 색상 팔레트를 일관되게 사용
4. **영화 레퍼런스 활용**: 추천 영화를 시청하여 분위기 파악
5. **AI 이미지 생성**: 생성된 프롬프트를 DALL-E, Midjourney 등에 활용

## 🐛 문제 해결

### 지원하지 않는 조합
특정 테스트 타입과 MBTI 조합이 지원되지 않는 경우:
- 가장 가까운 MBTI 타입 사용
- 일반적인 MBTI 스타일 가이드 활용
- 수동으로 프롬프트 커스터마이징

### 프롬프트 품질 개선
- 추가 요소를 구체적으로 입력
- 여러 번 생성하여 최적의 결과 선택
- 생성된 키워드를 기반으로 수동 조정

---

*이 가이드는 쫄부월드 이미지 큐레이션 시스템 v1.0을 기준으로 작성되었습니다.* 