# 📸 인스타그램 연동 설정 가이드

## 🎯 개요
쫄부월드 갤러리에 실제 인스타그램 게시물을 연동하여 실시간 피드를 표시하는 방법입니다.

## 🔧 설정 단계

### 1단계: Facebook 개발자 계정 생성
1. [Facebook for Developers](https://developers.facebook.com/) 접속
2. 계정 생성 또는 로그인
3. "내 앱" → "앱 만들기" 클릭
4. "소비자" 선택 후 앱 정보 입력

### 2단계: Instagram Basic Display 제품 추가
1. 앱 대시보드에서 "제품 추가" 클릭
2. "Instagram Basic Display" 선택
3. 설정 완료

### 3단계: Instagram 앱 설정
```
앱 ID: 복사하여 환경변수에 저장
앱 시크릿: 복사하여 환경변수에 저장
리디렉션 URI: https://www.zzolbooworld.com/gallery
```

### 4단계: Instagram 테스터 계정 추가
1. Instagram Basic Display → 역할 → 테스터
2. 인스타그램 계정명 입력
3. 해당 계정에서 초대 수락

### 5단계: 환경변수 설정
```bash
# .env 파일에 추가
VITE_INSTAGRAM_APP_ID=your_app_id_here
INSTAGRAM_APP_SECRET=your_app_secret_here
VITE_INSTAGRAM_REDIRECT_URI=https://www.zzolbooworld.com/gallery
```

## 📱 사용 방법

### 사용자 관점에서:
1. 갤러리 페이지 방문
2. "인스타그램 연결하기" 버튼 클릭
3. 인스타그램 로그인 및 권한 승인
4. 자동으로 최신 게시물 9개 표시

### 관리자 관점에서:
1. 인스타그램에 새 게시물 업로드
2. 갤러리 페이지에서 실시간 반영 확인
3. 필요시 연결 해제/재연결 가능

## 🔒 보안 고려사항

### API 키 보안
- 클라이언트 사이드에는 App ID만 노출
- App Secret은 서버 사이드에서만 사용
- 환경변수로 민감 정보 관리

### 토큰 관리
- 단기 토큰 → 장기 토큰 자동 교환
- 로컬 스토리지에 임시 저장
- 토큰 만료시 자동 재인증

## 🚀 배포 설정

### Netlify Functions 사용시:
```javascript
// netlify/functions/instagram-token.js
exports.handler = async (event, context) => {
  // 토큰 교환 로직
};
```

### Vercel API Routes 사용시:
```javascript
// pages/api/instagram/token.js
export default function handler(req, res) {
  // 토큰 교환 로직
}
```

### 환경변수 설정:
- Netlify: Site settings → Environment variables
- Vercel: Project settings → Environment Variables

## 📊 지원되는 기능

### 가져올 수 있는 데이터:
- ✅ 이미지/비디오 URL
- ✅ 캡션 텍스트
- ✅ 게시물 링크
- ✅ 게시 날짜
- ✅ 미디어 타입

### 제한사항:
- ❌ 댓글 가져오기 (Graph API 필요)
- ❌ 좋아요 수 (Graph API 필요)  
- ❌ 해시태그 분석 (Graph API 필요)
- ❌ 스토리 가져오기

## 🎨 UI/UX 특징

### 인스타그램 느낌:
- 정사각형 그리드 레이아웃
- 호버 효과와 오버레이
- 모바일 반응형 디자인
- 부드러운 애니메이션

### 추가 기능:
- 비디오 썸네일 지원
- 날짜 표시
- 인스타그램 링크 연결
- 연결 상태 표시

## 🔄 대안 방법들

### 1. Instagram Graph API (비즈니스)
- 더 많은 기능 제공
- 비즈니스 계정 필요
- Facebook 페이지 연결 필요

### 2. 타사 서비스
- **Zapier**: 자동화 플랫폼
- **IFTTT**: 간단한 연동
- **InstagramAPI.com**: 전용 서비스

### 3. 수동 업로드
- 인스타그램 이미지 다운로드
- 갤러리에 수동 업로드
- 완전한 제어 가능

## 📈 향후 개선사항

### 추가 가능한 기능:
- 📊 인스타그램 인사이트 연동
- 🔄 자동 동기화 스케줄링
- 🎨 이미지 필터 적용
- 📱 스토리 하이라이트 표시
- 💬 댓글 표시 (Graph API)

### 성능 최적화:
- 이미지 lazy loading
- 캐싱 구현
- CDN 활용
- 압축 최적화

## ⚠️ 주의사항

1. **API 제한**: Instagram API는 요청 제한이 있습니다
2. **앱 검토**: 실제 배포시 Facebook 앱 검토 필요할 수 있음
3. **정책 준수**: Instagram API 정책 준수 필수
4. **테스터 제한**: 개발 모드에서는 테스터만 접근 가능

## 💡 팁

- 개발 중에는 테스터 계정으로 테스트
- 정기적인 토큰 갱신 확인
- 에러 처리 로직 강화
- 사용자 피드백 수집
