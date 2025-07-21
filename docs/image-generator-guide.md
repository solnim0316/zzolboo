# 이미지 생성 시스템 사용 가이드

## 📋 개요
텍스트와 캐릭터 이미지를 조합하여 MBTI 테스트 결과 이미지를 동적으로 생성하는 시스템입니다.

## 🚀 주요 특징
- **완전 독립적**: 어떤 테스트 타입이나 UI 변경과도 무관하게 동작
- **프레임워크 무관**: React, Vue, 바닐라 JS 등 어디서든 사용 가능
- **커스터마이징 가능**: 색상, 폰트, 레이아웃 등 자유롭게 설정
- **고품질 출력**: PNG 형식의 고해상도 이미지 생성

## 📁 파일 구조
```
src/
├── utils/
│   ├── imageGenerator.js          # 메인 이미지 생성 로직
│   └── imageGeneratorExamples.js  # 사용 예시 모음
└── components/
    └── common/
        └── ImageGeneratorComponent.jsx  # React 컴포넌트
```

## 🎯 기본 사용법

### 1. 간단한 이미지 생성
```javascript
import { generateResultImage, downloadImage } from '../utils/imageGenerator';

const createImage = async () => {
  const imageData = await generateResultImage({
    testType: 'dinosaur',
    result: 'ENFP',
    characterImage: '/images/tests/dinosaur/ENFP.png',
    userName: '홍길동',
    description: '활발하고 창의적인 브라키오사우루스입니다.',
    characterName: '브라키오사우루스'
  });
  
  // 이미지 다운로드
  downloadImage(imageData, '홍길동_ENFP_결과.png');
};
```

### 2. React 컴포넌트에서 사용
```jsx
import ImageGeneratorComponent from '../components/common/ImageGeneratorComponent';

const ResultPage = () => {
  const resultData = {
    testType: 'cat',
    result: 'ISFP',
    characterImage: '/images/tests/cat/ISFP.png',
    userName: '김영희',
    description: '예술적이고 감성적인 페르시안 고양이입니다.',
    characterName: '페르시안 고양이'
  };
  
  return (
    <div>
      <h2>테스트 결과</h2>
      <ImageGeneratorComponent {...resultData} />
    </div>
  );
};
```

## ⚙️ 설정 옵션

### testType별 기본 설정
- `dinosaur`: 갈색 계열, 공룡 테스트용
- `cat`: 핑크 계열, 고양이 테스트용  
- `default`: 파란색 계열, 기본값

### 커스텀 설정 예시
```javascript
const customConfig = {
  bgColor: '#FF1493',           // 배경 단색
  bgGradient: ['#FFB6C1', '#FF1493'], // 그라디언트 배경
  textColor: '#FFFFFF',         // 텍스트 색상
  titleFontSize: 32,           // 제목 폰트 크기
  subtitleFontSize: 24,        // 부제목 폰트 크기
  descriptionFontSize: 18,     // 설명 폰트 크기
  characterSize: 220,          // 캐릭터 이미지 크기
  canvasWidth: 800,            // 캔버스 너비
  canvasHeight: 1000           // 캔버스 높이
};

const imageData = await generateResultImage({
  testType: 'custom',
  result: 'ESTP',
  characterImage: '/images/custom/character.png',
  userName: '사용자',
  description: '설명 텍스트',
  characterName: '캐릭터명',
  customConfig  // 커스텀 설정 적용
});
```

## 🔧 API 참조

### generateResultImage(options)
메인 이미지 생성 함수

**Parameters:**
- `testType` (string): 테스트 타입 ('dinosaur', 'cat', 'default')
- `result` (string): MBTI 결과 (예: 'ENFP')
- `characterImage` (string): 캐릭터 이미지 경로
- `userName` (string): 사용자 이름
- `description` (string): 결과 설명
- `characterName` (string): 캐릭터 이름
- `customConfig` (object): 커스텀 설정 (선택사항)

**Returns:** Promise<string> - Base64 인코딩된 이미지 데이터

### downloadImage(dataUrl, filename)
이미지 다운로드 함수

**Parameters:**
- `dataUrl` (string): 이미지 데이터 URL
- `filename` (string): 저장할 파일명 (기본값: 'result-image.png')

### copyImageToClipboard(dataUrl)
클립보드에 이미지 복사

**Parameters:**
- `dataUrl` (string): 이미지 데이터 URL

**Returns:** Promise<boolean> - 성공 여부

## 🎨 새로운 테스트 타입 추가

1. `imageGenerator.js`의 `testConfigs`에 새 설정 추가:
```javascript
const testConfigs = {
  // 기존 설정들...
  
  newTestType: {
    bgColor: '#YOUR_COLOR',
    bgGradient: ['#COLOR1', '#COLOR2'],
    textColor: '#TEXT_COLOR',
    titleFontSize: 28,
    subtitleFontSize: 20,
    descriptionFontSize: 16,
    characterSize: 200,
    canvasWidth: 600,
    canvasHeight: 800
  }
};
```

2. 사용법:
```javascript
const imageData = await generateResultImage({
  testType: 'newTestType',
  // 나머지 옵션들...
});
```

## 🔍 문제 해결

### 이미지 로드 실패
- 캐릭터 이미지 경로가 올바른지 확인
- CORS 정책 확인 (외부 이미지 사용시)
- 이미지 파일 존재 여부 확인

### 텍스트가 잘림
- `customConfig`에서 `canvasWidth`, `canvasHeight` 조정
- 폰트 크기 조정
- 설명 텍스트 길이 확인

### 모바일에서 이미지 품질 저하
- `canvas.toDataURL('image/png', 0.9)` 품질 조정
- 캔버스 크기 조정

## 🔄 버전 업데이트
새로운 기능이나 설정을 추가할 때는 `imageGenerator.js`만 수정하면 되며, 기존 사용 코드는 그대로 유지됩니다.

## 📞 지원
문제가 발생하거나 새로운 기능이 필요한 경우, `imageGeneratorExamples.js` 파일의 예시들을 참고하시거나 개발팀에 문의해주세요.
