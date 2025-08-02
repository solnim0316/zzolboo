# 🎮 쫄부월드 (ZzolBoo World)

성향 기반 맞춤형 테스트 플랫폼입니다.

## 🌟 주요 테스트

### 🎭 세계관 테스트
- **고양이 MBTI 테스트**: 고양이가 되어버린 나의 성격은?
- **공룡 MBTI 테스트**: 공룡시대에 태어난 나는 어떤 공룡?
- **가족 MBTI 테스트**: 우리 엄마의 MBTI는?

### 🎮 게임 테스트
- **롤 라인 추천 테스트**: 나에게 어울리는 롤 라인은?
- **음식 테스트**: 내가 좋아하는 음식으로 알아보는 성격
- **패션 테스트**: 패션 스타일로 보는 나의 성향
- **영화 테스트**: 영화 취향으로 알아보는 MBTI
- **색깔 테스트**: 색깔 선호도로 보는 성격 분석

## 🛠 개발 도구

## 🛠 개발 도구

- **React 18**: 최신 React 기능 활용
- **Vite**: 빠른 개발 서버와 빌드 도구
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크
- **React Router v6**: 클라이언트 사이드 라우팅

### 🎨 AI 이미지 생성 도구

#### 유료 버전 (OpenAI DALL-E)
```bash
cd tools/image-generators
python generate_all_images.py  # 모든 이미지 자동 생성
```

#### 무료 버전 (다양한 대안)
- **로컬 Stable Diffusion**: 완전 무료, GPU 필요
- **Hugging Face**: API Key 없이 사용 가능
- **Replicate**: 월 500회 무료
- **웹 데모**: http://localhost:3000/free-image-generator

자세한 내용은 [tools/image-generators/README.md](tools/image-generators/README.md)를 참고하세요.

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 사이트맵 생성
npm run sitemap:dynamic
```

## 📚 문서

- [프로젝트 개요](docs/project-overview.md)
- [롤 테스트 가이드](docs/lol-test-guide.md)
- [이미지 생성 가이드](docs/auto-image-generator-guide.md)
- [무료 이미지 생성 가이드](docs/free-image-generator-guide.md)