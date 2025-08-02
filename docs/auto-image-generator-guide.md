# 🎨 자동화된 이미지 생성 시스템 가이드

## 개요

수박 스테이크 스타일을 기반으로 한 자동화된 이미지 생성 시스템입니다. 100개+ 음식 이미지를 일괄 생성하여 효율적으로 테스트 결과 이미지를 제작할 수 있습니다.

## 주요 기능

### 🎯 스타일 일관성
- 수박 스테이크 이미지와 동일한 귀여운 일러스트 스타일
- 두꺼운 검은색 윤곽선과 부드러운 파스텔 색상
- 손으로 그린 듯한 따뜻한 아날로그 느낌

### ⚡ 배치 처리
- 100개+ 음식을 한 번에 선택하여 자동 생성
- 진행 상황 실시간 모니터링
- 성공/실패 통계 제공

### 🔄 자동 재시도
- API 호출 실패 시 자동 재시도
- 설정 가능한 최대 재시도 횟수
- 에러 로깅 및 관리

### 📊 진행 상황 추적
- 실시간 진행률 표시
- 예상 완료 시간 계산
- 개별 이미지 다운로드 기능

## 시스템 구조

```
src/
├── utils/
│   └── autoImageGenerator.js          # 핵심 생성 로직
├── components/
│   └── common/
│       └── AutoImageGeneratorComponent.jsx  # UI 컴포넌트
└── pages/
    └── AutoImageGeneratorDemo.jsx     # 데모 페이지
```

## 사용 방법

### 1. API 키 설정

`.env` 파일에 OpenAI API 키를 설정하세요:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

### 2. 데모 페이지 접속

```
http://localhost:5173/auto-image-generator
```

### 3. 음식 선택

- 생성하고 싶은 음식들을 선택
- 전체 선택/해제 버튼으로 일괄 관리
- 선택된 음식 수 실시간 표시

### 4. 설정 조정

- **API 호출 간격**: 1-5초 (OpenAI API 제한 고려)
- **최대 재시도 횟수**: 1-5회
- **배치 크기**: 한 번에 처리할 음식 개수

### 5. 생성 시작

"이미지 생성 시작" 버튼을 클릭하면 선택된 음식들의 이미지가 순차적으로 생성됩니다.

## 기술적 구현

### AutoImageGenerator 클래스

```javascript
const generator = new AutoImageGenerator();

// 배치 이미지 생성
await generator.generateBatchImages(foodList, {
  delay: 1000,           // API 호출 간격
  maxRetries: 3,         // 최대 재시도 횟수
  onProgress: callback,  // 진행 상황 콜백
  onComplete: callback,  // 완료 콜백
  onError: callback      // 에러 콜백
});
```

### 스타일 템플릿

```javascript
const styleTemplate = {
  artStyle: "cute cartoon illustration, thick black outline, flat design",
  colorPalette: "soft pastel colors, peach/salmon background",
  composition: "centered on plate, white background, simple composition",
  texture: "subtle noise texture, hand-drawn feel, warm analog feeling",
  quality: "high quality, detailed, professional food illustration"
};
```

### 음식별 스타일 조정

```javascript
const foodStyles = {
  '불고기': { additionalStyle: 'Korean BBQ style, grilled meat with sauce' },
  '초밥': { additionalStyle: 'Japanese sushi style, fresh fish on rice' },
  '수박스테이크': { additionalStyle: 'watermelon cut like steak, grill marks' }
};
```

## 프롬프트 생성 예시

### 기본 프롬프트 구조

```
Create a beautiful food illustration of [음식명] in cute cartoon illustration, thick black outline, flat design.
[음식별 추가 스타일]
Style: soft pastel colors, peach/salmon background, centered on plate
Texture: subtle noise texture, hand-drawn feel, warm analog feeling
Quality: high quality, detailed, professional food illustration
Must include: [이모지] style elements, cute and appealing presentation
Background: soft pastel colors
No text, no logos, pure illustration only
```

### 실제 프롬프트 예시

**수박 스테이크:**
```
Create a beautiful food illustration of 수박스테이크 in cute cartoon illustration, thick black outline, flat design.
watermelon cut like steak, grill marks, creative food art
Style: soft pastel colors, peach/salmon background, centered on plate
Texture: subtle noise texture, hand-drawn feel, warm analog feeling
Quality: high quality, detailed, professional food illustration
Must include: 🍉🥩 style elements, cute and appealing presentation
Background: soft pastel colors
No text, no logos, pure illustration only
```

## 결과 관리

### 생성된 이미지
- 개별 다운로드 기능
- PNG 형식으로 저장
- 파일명: `[음식명].png`

### 결과 내보내기
- JSON 형식으로 전체 결과 내보내기
- 생성 시간, 성공/실패 상태 포함
- 재사용 가능한 데이터 구조

### 에러 처리
- 실패한 항목 별도 표시
- 에러 메시지 상세 제공
- 재시도 가능한 구조

## 비용 및 제한사항

### OpenAI API 비용
- DALL-E 3: $0.040 per image (1024x1024)
- 100개 이미지 생성 시 약 $4.00

### API 제한
- 분당 요청 수 제한
- 적절한 호출 간격 설정 필요
- 재시도 로직으로 안정성 확보

### 이미지 저장
- OpenAI 서버에 임시 저장
- 즉시 다운로드 권장
- 24시간 후 자동 삭제

## 확장 가능성

### 새로운 음식 추가
1. `foodTestResults.js`에 음식 데이터 추가
2. `getFoodStyle()` 함수에 스타일 정의
3. 자동으로 프롬프트 생성

### 스타일 커스터마이징
- `getStyleTemplate()` 함수 수정
- 음식별 개별 스타일 적용
- 다양한 아트 스타일 지원

### API 확장
- 다른 AI 이미지 생성 서비스 연동
- 병렬 처리로 속도 향상
- 캐싱 시스템 구현

## 문제 해결

### 일반적인 문제들

**API 키 오류**
- `.env` 파일 확인
- API 키 유효성 검증
- 환경 변수 재시작

**이미지 생성 실패**
- 프롬프트 길이 확인
- API 할당량 확인
- 재시도 횟수 증가

**진행 상황 멈춤**
- 네트워크 연결 확인
- 브라우저 새로고침
- 로그 확인

### 디버깅 팁

```javascript
// 상세 로그 활성화
console.log('Generated prompt:', prompt);
console.log('API response:', data);

// 진행 상황 추적
const tracker = generator.createProgressTracker();
tracker.update(completed, failed, total);
console.log('Progress:', tracker.getProgress());
```

## 성능 최적화

### 배치 크기 조정
- API 제한에 맞춰 적절한 배치 크기 설정
- 메모리 사용량 고려

### 호출 간격 최적화
- API 응답 시간에 따른 동적 조정
- 에러율에 따른 자동 조정

### 캐싱 전략
- 동일한 프롬프트 재사용
- 생성된 이미지 로컬 저장
- 중복 생성 방지

## 보안 고려사항

### API 키 보안
- 환경 변수 사용
- 클라이언트 사이드 노출 방지
- 정기적인 키 로테이션

### 사용량 모니터링
- API 호출 횟수 추적
- 비용 알림 설정
- 사용량 제한 구현

## 결론

이 자동화된 이미지 생성 시스템을 통해 100개+ 음식 이미지를 효율적으로 생성할 수 있습니다. 수박 스테이크 스타일의 일관된 디자인으로 브랜드 아이덴티티를 유지하면서도 대량 생산이 가능한 강력한 도구입니다.

### 다음 단계
1. 실제 API 키로 테스트
2. 음식별 스타일 세밀 조정
3. 생성된 이미지 품질 검증
4. 워크플로우 최적화 