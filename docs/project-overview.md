# 🐱 쫄부월드 (ZzolBoo World) - 프로젝트 개요

## 📋 목차
- [프로젝트 소개](#-프로젝트-소개)
- [핵심 콘셉트](#-핵심-콘셉트)
- [테스트 분류](#-테스트-분류)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [컴포넌트 아키텍처](#-컴포넌트-아키텍처)
- [데이터 구조](#-데이터-구조)
- [디자인 시스템](#-디자인-시스템)
- [배포 정보](#-배포-정보)

---

## 🌟 프로젝트 소개

**쫄부월드**는 고양이 캐릭터 '쫄'과 '부'가 다양한 세계관을 여행하며 성격 유형 테스트를 진행하는 인터랙티브 웹 플랫폼입니다.

### 주요 특징
- 🎭 **다중 세계관**: 각 테스트마다 독립된 세계관과 스토리
- 🐱 **일관된 캐릭터**: 쫄과 부가 모든 세계에서 본질을 유지
- 🎨 **다양한 그림체**: 세계관별 고유한 비주얼 스타일
- 📱 **반응형 디자인**: 모바일/데스크톱 최적화
- 🔄 **실시간 결과**: 즉시 확인 가능한 테스트 결과

---

## 🌐 핵심 콘셉트

### 캐릭터 설정
| 캐릭터 | 종류 | 성격 | 말투 |
|--------|------|------|------|
| 🐱 **쫄** | 노르웨이숲 | 시크하고 냉정 | 비판적이고 직설적 |
| 🐰 **부** | 랙돌 | 애교많고 다정 | 친근하고 따뜻함 |

### 세계관 여행 컨셉
- 각 테스트 = 하나의 독립된 세계
- 쫄과 부는 차원문을 통해 다양한 세계를 탐험
- 세계마다 다른 그림체와 분위기
- 캐릭터의 본질적 특성은 변하지 않음

---

## ✨ 테스트 분류

### 1. 🎭 쫄부 테마 테스트 (세계관 기반)
```
특징:
- 풍부한 스토리텔링과 세계관
- 캐릭터 대사와 감정선 포함
- AI 이미지 + 손그림 조합 결과
- Hero/Featured 영역 우선 배치
```

**현재 구현된 테마 테스트:**
- 🦕 공룡시대 MBTI
- 🐱 고양이 성격 테스트
- 🍖 음식 취향 분석
- 👗 패션 스타일 진단
- 🎬 영화 추천 테스트
- 🎨 기분 색깔 테스트

### 2. 🎯 일반 테스트 (캐주얼)
```
특징:
- 간단한 성격/밸런스 테스트
- 세계관 없는 단순 UI
- 통일된 카드 디자인
- Recommended 영역 배치
```

### 3. 🔮 특별 결과 시스템
```
"균형형/분류불가형" 결과 시:
- 항상 쫄 또는 부 손그림 캐릭터 등장
- 메타적이고 감성적인 결과 메시지
- 고정된 핸드드로잉 일러스트 사용
```

---

## 🛠 기술 스택

### Frontend
- **Framework**: React 18 + Vite
- **Styling**: TailwindCSS
- **Routing**: React Router v6
- **State Management**: React Hooks
- **Build Tool**: Vite

### Backend/Services
- **API Integration**: Instagram Basic Display API
- **Analytics**: Google Analytics 4
- **Advertising**: Google AdSense
- **Social**: Kakao Talk Share API

### Development Tools
- **Package Manager**: npm
- **Code Quality**: ESLint + Prettier
- **Version Control**: Git + GitHub
- **Deployment**: Vite 빌드 → 정적 호스팅 (Netlify 비사용)

### External APIs
- **Instagram**: 갤러리 연동 (예정)
- **Google Analytics**: 사용자 행동 분석
- **Kakao**: 소셜 공유 기능

---

## 📁 프로젝트 구조

```
my-tailwind-app/
├── 📄 public/
│   ├── images/
│   │   ├── tests/          # 테스트 썸네일
│   │   ├── gallery/        # 갤러리 이미지
│   │   └── thumbs/         # 공유용 썸네일
│   ├── sitemap.xml         # 자동 생성 사이트맵
│   └── robots.txt
│
├── 📂 src/
│   ├── 🧩 components/
│   │   ├── layout/         # 헤더, 푸터
│   │   ├── common/         # 재사용 컴포넌트
│   │   └── result/         # 결과 관련 컴포넌트
│   │
│   ├── 📄 pages/
│   │   ├── Home.jsx        # 메인 페이지
│   │   ├── TestPlayer.jsx  # 테스트 진행
│   │   ├── ResultPage.jsx  # 결과 페이지
│   │   ├── Gallery.jsx     # 갤러리 (예정)
│   │   └── ...
│   │
│   ├── 📊 data/
│   │   ├── testConfigs.js  # 테스트 설정
│   │   ├── *TestData.js    # 개별 테스트 데이터
│   │   └── tags/           # 태그 시스템
│   │
│   ├── 🎣 hooks/
│   │   ├── useTestProgress.js
│   │   └── useBranchingTest.js
│   │
│   ├── 🛠 utils/
│   │   ├── shareUtils.js   # 공유 기능
│   │   ├── kakao.js        # 카카오 연동
│   │   └── imageGenerator.js
│   │
│   └── 🎨 styles/
│       └── index.css       # 전역 스타일
│
├── 📚 docs/
│   ├── project-overview.md     # 이 문서
│   ├── instagram-integration-guide.md
│   ├── gallery-guide.md
│   └── template-architecture-guide.md
│
├── 🔧 scripts/
│   ├── dynamicSitemap.js   # 사이트맵 자동 생성
│   └── generateSitemap.js
│
└── ⚙️ config files
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── .env.example
```

---

## 🧩 컴포넌트 아키텍처

### 🏠 메인 페이지 구조
```
Home.jsx
├── Header.jsx              # 상단 네비게이션
├── HeroBanner.jsx          # 오늘의 추천 (쫄부)
├── ThemedTestList.jsx      # 세계관 기반 테스트
├── SecretWorldBanner.jsx   # 잠금 해제형 테스트
├── GeneralTestList.jsx     # 일반 테스트
└── Footer.jsx              # 하단 푸터
```

### 🎮 테스트 시스템
```
TestPlayer.jsx              # 테스트 로직 컨트롤러
├── 질문 렌더링
├── 답변 수집
├── 진행률 표시
└── 결과 계산

ResultPage.jsx              # 결과 페이지
├── 세계관별 결과 렌더링
├── 캐릭터 일러스트
├── 공유 기능
└── 다시하기 버튼
```

### 🎨 공통 컴포넌트
| 컴포넌트 | 역할 | 위치 |
|----------|------|------|
| `Button.jsx` | 재사용 버튼 | `components/common/` |
| `SocialShare.jsx` | 소셜 공유 | `components/common/` |
| `TagButton.jsx` | 태그 필터 | `components/common/` |
| `ShareModal.jsx` | 공유 모달 | `components/result/` |

---

## 📊 데이터 구조

### 테스트 설정 (testConfigs.js)
```javascript
{
  id: "dinosaur-test",           // 고유 식별자
  title: "성격유형별 공룡 테스트",    // 테스트 제목
  world: "공룡시대",              // 세계관 이름
  emoji: "🦕",                   // 대표 이모지
  theme: "쥬라기",               // 테마 키워드
  thumbnail: "/images/tests/dinosaur.png",
  isFeatured: true,              // 추천 여부
  isThemed: true,                // 세계관 여부
  tags: ["MBTI", "성격", "동물"]  // 분류 태그
}
```

### 테스트 데이터 (*TestData.js)
```javascript
{
  testInfo: {
    title: "테스트 이름",
    subtitle: "설명",
    emoji: "🦕"
  },
  questions: [
    {
      question: "질문 내용",
      options: [
        { text: "선택지 1", type: "E" },
        { text: "선택지 2", type: "I" }
      ]
    }
  ],
  results: [
    {
      type: "ENFP",
      title: "결과 제목",
      description: "결과 설명",
      image: "/images/results/enfp.png",
      character: "쫄", // 또는 "부"
      personality: ["활발함", "창의적"],
      compatibility: ["INFJ", "INTJ"]
    }
  ]
}
```

### 태그 시스템
```javascript
// tagColorMap.js - 태그별 색상
// tagEmojiMap.js - 태그별 이모지
```

---

## 🎨 디자인 시스템

### 색상 팔레트
```css
/* 브랜드 컬러 */
--primary: #5D4037      /* 브라운 */
--secondary: #8D6E63    /* 라이트 브라운 */

/* 그라데이션 */
--gradient-purple: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--gradient-warm: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
```

### 디자인 규칙

#### 🎭 세계관 테스트
- 각 세계마다 고유한 그림체 허용
- 배경색/테마색 세계관별 분기
- AI 이미지 + 손그림 조합 결과

#### 🎯 일반 테스트
- 통일된 카드 레이아웃
- 그리드 시스템 기반
- 일관된 색상 스키마

#### 🔮 예외 결과
- 항상 동일한 손그림 스타일
- 쫄/부 캐릭터 고정 디자인
- 감성적 메시지 톤앤매너

### 반응형 브레이크포인트
```css
/* Mobile First */
sm: 640px     /* 모바일 */
md: 768px     /* 태블릿 */
lg: 1024px    /* 데스크톱 */
xl: 1280px    /* 와이드 */
```

---

## 🚀 배포 정보

### 환경변수
```bash
# Google Analytics
VITE_GA_MEASUREMENT_ID=G-QYLBRX8SN1

# 카카오 API
VITE_KAKAO_APP_KEY=your_kakao_key

# Instagram API (예정)
VITE_INSTAGRAM_APP_ID=your_instagram_id
INSTAGRAM_APP_SECRET=your_instagram_secret

# 사이트 URL
VITE_SITE_URL=https://www.zzolbooworld.com
```

### 빌드 & 배포
```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 사이트맵 생성
npm run sitemap:dynamic
```

### SEO 최적화
- ✅ 자동 사이트맵 생성 (18개 페이지)
- ✅ 메타 태그 최적화
- ✅ Open Graph 이미지
- ✅ Google Analytics 연동
- ✅ 모바일 친화적 디자인

---

## 📈 향후 계획

### Phase 1 (현재)
- ✅ 기본 테스트 시스템 구축
- ✅ 6개 테마 테스트 구현
- ✅ 반응형 UI/UX 완성
- 🔄 갤러리 인스타그램 연동

### Phase 2 (예정)
- 🔮 SecretWorld 잠금 해제 시스템
- 📊 사용자 통계 대시보드
- 🎨 테스트 결과 커스터마이징
- 📱 PWA 지원

### Phase 3 (장기)
- 🤖 AI 기반 개인화 추천
- 🏆 사용자 랭킹 시스템
- 💬 커뮤니티 기능
- 🌍 다국어 지원

---

## 📞 연락처

- **Repository**: [github.com/solnim0316/zzolboo](https://github.com/solnim0316/zzolboo)
- **Website**: [www.zzolbooworld.com](https://www.zzolbooworld.com)
- **Support**: 프로젝트 Issues 탭 활용

---

*마지막 업데이트: 2025년 7월 26일*
