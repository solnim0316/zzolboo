# 🗺️ Sitemap 자동 생성 시스템 사용 가이드

## 📋 시스템 개요

이 프로젝트는 **3단계 Sitemap 자동화 시스템**을 제공합니다:

1. **기본 Sitemap 생성기** - 정적 페이지 목록 기반
2. **동적 Sitemap 생성기** - App.jsx 라우트 자동 추출
3. **스마트 모니터링 시스템** - 파일 변경 자동 감지

## 🚀 빠른 시작

### 기본 사용법
```bash
# 기본 sitemap 생성
npm run sitemap

# 동적 sitemap 생성 (권장)
npm run sitemap:dynamic

# 자동 모니터링 시작
npm run sitemap:monitor
```

### 개발 모드
```bash
# 개발 서버 시작 (자동 모니터링 포함)
npm run dev
```

### 빌드 시
```bash
# 빌드 (자동으로 sitemap 생성)
npm run build
```

## 📁 파일 구조

```
scripts/
├── generateSitemap.js     # 기본 sitemap 생성기
├── dynamicSitemap.js      # 동적 sitemap 생성기 (추천)
└── sitemapMonitor.js      # 실시간 모니터링 시스템

plugins/
└── viteSitemapPlugin.js   # Vite 개발 서버 통합

public/
└── sitemap.xml           # 생성된 sitemap 파일
```

## ⚙️ 스크립트 명령어

| 명령어 | 설명 | 사용 시점 |
|--------|------|-----------|
| `npm run sitemap` | 기본 정적 sitemap 생성 | 수동 생성 필요 시 |
| `npm run sitemap:dynamic` | 라우트 기반 동적 생성 | **일반적인 사용** |
| `npm run sitemap:monitor` | 실시간 모니터링 시작 | 개발 중 자동화 |
| `npm run sitemap:update` | 즉시 업데이트 | 변경사항 즉시 반영 |
| `npm run sitemap:status` | 모니터링 상태 확인 | 시스템 상태 점검 |

## 🔧 설정 커스터마이징

### 1. 특별 페이지 우선순위 설정

`scripts/dynamicSitemap.js`에서 페이지별 SEO 설정:

```javascript
const SPECIAL_PAGES = {
  '/': { priority: '1.0', changefreq: 'daily' },
  '/dinosaur-test': { priority: '0.9', changefreq: 'weekly' },
  '/cat-test': { priority: '0.9', changefreq: 'weekly' },
  // 새 페이지 추가 시
  '/new-test': { priority: '0.8', changefreq: 'weekly' }
};
```

### 2. 사이트 기본 정보 수정

```javascript
const SITE_CONFIG = {
  url: 'https://www.zzolbooworld.com', // 실제 도메인으로 변경
  defaultChangefreq: 'weekly',
  defaultPriority: '0.8'
};
```

### 3. 제외할 경로 설정

```javascript
const EXCLUDED_PATHS = [
  '/admin',      // 관리자 페이지
  '/test',       // 테스트 페이지
  '/debug',      // 디버그 페이지
  '/_',          // 시스템 페이지
  '/api'         // API 엔드포인트
];
```

## 🤖 자동화 기능

### 개발 모드 자동화
- 파일 변경 감지 시 자동 sitemap 재생성
- React Router 변경 사항 실시간 반영
- 새 페이지 추가 시 자동 포함

### 빌드 자동화
- `npm run build` 실행 시 자동 sitemap 생성
- 프로덕션 배포 전 최신 sitemap 보장

### 실시간 모니터링
```bash
# 백그라운드 모니터링 시작
npm run sitemap:monitor

# 변경 로그 확인
node scripts/sitemapMonitor.js log

# 모니터링 상태 확인
npm run sitemap:status
```

## 📊 SEO 최적화

### 우선순위 가이드라인
- **홈페이지**: 1.0 (최고 우선순위)
- **주요 테스트**: 0.9 (높은 우선순위)
- **일반 페이지**: 0.8 (기본 우선순위)
- **정보 페이지**: 0.7 (보통 우선순위)
- **법적 페이지**: 0.5 (낮은 우선순위)

### 업데이트 빈도 설정
- **홈페이지**: daily (매일)
- **테스트 페이지**: weekly (주간)
- **정보 페이지**: monthly (월간)
- **법적 페이지**: yearly (연간)

## 🔍 문제 해결

### 상황별 해결책

#### 1. Sitemap이 생성되지 않을 때
```bash
# 수동 생성 시도
npm run sitemap:dynamic

# 권한 확인
ls -la public/

# 로그 확인
npm run sitemap:status
```

#### 2. 새 라우트가 반영되지 않을 때
```bash
# 강제 업데이트
npm run sitemap:update

# App.jsx 라우트 확인
grep -n "path=" src/App.jsx
```

#### 3. 개발 모드에서 모니터링이 작동하지 않을 때
```bash
# Vite 플러그인 확인
cat vite.config.js

# 모니터링 재시작
npm run sitemap:monitor
```

## 🚀 배포 시 체크리스트

### 배포 전 확인사항
- [ ] `SITE_CONFIG.url`을 실제 도메인으로 변경
- [ ] 모든 라우트가 sitemap에 포함되었는지 확인
- [ ] `npm run build` 시 sitemap이 자동 생성되는지 테스트
- [ ] Google Search Console에 sitemap 제출

### 배포 후 검증
```bash
# sitemap 접근성 확인
curl https://www.zzolbooworld.com/sitemap.xml

# 라우트 수 확인
grep -c "<url>" public/sitemap.xml
```

## 📈 고급 기능

### API 엔드포인트 (개발 모드)
```javascript
// 수동 업데이트 API
POST /api/sitemap/update

// 상태 확인 API  
GET /api/sitemap/status
```

### 프로그래밍 방식 사용
```javascript
import { saveDynamicSitemap, addNewRoute } from './scripts/dynamicSitemap.js';

// 새 라우트 추가
addNewRoute('/new-test', { 
  priority: '0.9', 
  changefreq: 'weekly' 
});

// 즉시 sitemap 재생성
saveDynamicSitemap();
```

## 🎯 성능 최적화

### 디바운스 설정
모니터링 시스템은 1초 디바운스를 적용하여 과도한 재생성을 방지합니다.

### 메모리 사용량
변경 로그는 최근 100개 항목만 유지하여 메모리 사용량을 최적화합니다.

### 백그라운드 처리
파일 감시 및 sitemap 생성은 백그라운드에서 실행되어 개발 경험을 방해하지 않습니다.

---

## 📞 지원

문제가 발생하거나 기능 개선이 필요한 경우:

1. **로그 확인**: `npm run sitemap:status`
2. **수동 테스트**: `npm run sitemap:update`
3. **모니터링 재시작**: `npm run sitemap:monitor`

**자동화 완료!** 🎉 이제 새 페이지를 추가할 때마다 sitemap이 자동으로 업데이트됩니다.
