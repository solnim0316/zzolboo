# 🔍 쫄부월드 프로젝트 이슈 체크리스트

> **업데이트**: 2025년 7월 28일  
> **프로젝트**: 쫄부월드 (ZzolBoo World)  
> **상태**: 개발 진행 중

---

## 🚨 **긴급 수정 필요사항**

### ✅ **1. testConfigs.js 파일 생성** 
- **파일**: `src/data/testConfigs.js`
- **해결**: 중앙 집중화된 테스트 설정 파일 생성 완료
- **개선사항**: 
  - ✅ 테마 테스트와 일반 테스트 분리
  - ✅ 태그 시스템 통합
  - ✅ 유틸리티 함수 제공
  - ✅ 세계관별 스타일 설정
  - ✅ 숨겨진 테스트 관리
- **우선순위**: 🔴 **HIGH**
- **상태**: ✅ **해결됨**

### 🔄 **2. 필수 이미지 파일 - OpenAI 수준 생성기 준비됨**
- **상태**: 🚀 **OpenAI 수준 이미지 제너레이터 완성!**
- **위치**: `tools/image-generators/` 폴더로 정리 완료
- **생성기들**:
  - ✅ `generate_openai_quality.py` - DALL-E 3 수준 고품질 생성
  - ✅ `generate_og_images.py` - 소셜 미디어 OG 이미지 (1200x630)
  - ✅ `generate_app_icons.py` - iOS/PWA/Favicon 아이콘들
  - ✅ `generate_all_images.py` - 완전 자동화 통합 실행기
- **품질 개선**:
  - 🎨 60 inference steps (vs 일반 20-30)
  - 🎨 9.5 guidance scale (vs 일반 7.5)  
  - 🎨 DALL-E 3 스타일 프롬프트 엔지니어링
  - 🎨 후처리 강화 (선명도, 색상, 대비)
  - 🎨 자동 OG/아이콘 생성
- **실행 방법**: 
  ```bash
  cd tools/image-generators
  python generate_all_images.py
  ```
- **우선순위**: 🔴 **HIGH**
- **상태**: 🔄 **실행 준비 완료** (퀄리티 향상 후 생성)

---

## ⚠️ **중요 개선사항**

### ✅ **3. 환경변수 설정**
- **파일**: `.env` 파일 존재함
- **설정된 값**: 
  - ✅ `VITE_KAKAO_APP_KEY` (설정됨)
  - ✅ `VITE_GA_MEASUREMENT_ID` (템플릿 추가됨)
  - ✅ `VITE_ADSENSE_CLIENT` (템플릿 추가됨)
  - ✅ `VITE_INSTAGRAM_APP_ID` (템플릿 추가됨)
- **우선순위**: 🟡 **MEDIUM**
- **상태**: ✅ **해결됨** (실제 값 입력 필요)

### ✅ **4. 빌드 시스템**
- **빌드 테스트**: ✅ **성공** (466KB, 정상 빌드됨)
- **사이트맵**: ✅ **자동 생성됨** (18개 페이지)
- **성능**: ✅ **양호** (gzip 168KB)
- **개발 서버**: ✅ **정상 실행** (http://localhost:5173/)
- **ES 모듈**: ✅ **변환 완료** (CommonJS → ES 모듈)
- **상태**: ✅ **해결됨**

### ✅ **5. Google Analytics 설정 오류**
- **파일**: `src/components/GoogleAnalytics.jsx`
- **문제**: ~~`process.env.REACT_APP_GA_MEASUREMENT_ID` 사용~~ → **수정됨**
- **해결**: `import.meta.env.VITE_GA_MEASUREMENT_ID` 사용으로 변경
- **영향**: Google Analytics 정상 동작 (환경변수 입력 시)
- **우선순위**: 🟡 **MEDIUM**
- **상태**: ✅ **해결됨**

---

## 📋 **개선 권장사항**

### ✅ **6. 코드 품질**
- **중복 스크립트**: ~~`index.html`에 카카오톡 SDK 중복 로딩~~ → **수정됨**
- **SEO 최적화**: 메타 태그는 잘 설정됨
- **접근성**: 추가 개선 필요
- **우선순위**: 🟢 **LOW**
- **상태**: ✅ **해결됨**

### 📱 **7. 기능 완성도**
- **Instagram 연동**: 준비 중 (API 키 필요)
- **AdSense**: 클라이언트 ID만 설정됨 (승인 후 광고 단위 추가 필요)
- **PWA 지원**: 미구현
- **우선순위**: 🟢 **LOW**
- **상태**: 🔄 **개발 진행 중**

---

## 📊 **체크리스트 요약**

| 항목 | 상태 | 우선순위 | 담당자 | 예상 소요시간 |
|------|------|----------|---------|--------------|
| testConfigs.js 파일 생성 | ✅ | 🔴 HIGH | Dev | ~~1-2시간~~ **완료** |
| OG 이미지 생성 | 🔄 | 🔴 HIGH | Design | ~~30분~~ **OpenAI 수준 실행 중** |
| Apple Touch Icon 생성 | 🔄 | 🔴 HIGH | Design | ~~15분~~ **자동화 완료** |
| 환경변수 완성 | ✅ | 🟡 MEDIUM | Dev | ~~30분~~ **완료** |
| Google Analytics 수정 | ✅ | 🟡 MEDIUM | Dev | ~~15분~~ **완료** |
| package.json 수정 | ✅ | 🟢 LOW | Dev | ~~5분~~ **완료** |
| 중복 스크립트 정리 | ✅ | 🟢 LOW | Dev | ~~10분~~ **완료** |

---

## 🎯 **다음 액션 아이템**

### 즉시 수행 (오늘 내)
1. ~~**testConfigs.js 파일 생성 및 테스트 설정 추가**~~ ✅ **완료**
2. **OpenAI 수준 이미지 생성 실행** 🔄 **진행 중**
   ```bash
   cd tools/image-generators
   python generate_openai_quality.py
   ```
3. **이미지 생성 후 HTML 링크 확인**

### 이번 주 내
4. ~~**환경변수 완성** (.env 파일)~~ ✅ **완료**
5. ~~**Google Analytics 수정**~~ ✅ **완료**
6. ~~**빌드 경고 해결** (package.json)~~ ✅ **완료**
7. ~~**중복 스크립트 정리**~~ ✅ **완료**

### 장기 계획
7. **Instagram API 연동 완성**
8. **Google AdSense 승인 및 광고 추가**
9. **PWA 기능 추가**

---

## 📞 **이슈 리포트**

문제 발견 시:
1. GitHub Issues에 등록
2. 우선순위 태그 추가
3. 담당자 배정
4. 이 체크리스트 업데이트

---

*마지막 체크: 2025년 7월 28일 16:58*  
*다음 체크 예정: 2025년 7월 29일*
