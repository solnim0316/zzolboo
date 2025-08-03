// 🔑 카카오 SDK 초기화
// 실제 배포시에는 환경 변수로 관리하거나 실제 앱 키로 변경 필요

// .env 파일에서 불러오기 (Vite 환경)
const KAKAO_APP_KEY = import.meta.env.VITE_KAKAO_APP_KEY;

export function initKakao() {
  if (typeof window !== 'undefined' && window.Kakao) {
    // 이미 초기화되어 있다면 건너뛰기
    if (window.Kakao.isInitialized()) {
      return true;
    }
    
    try {
      // 개발 환경에서는 테스트용으로 초기화 (실제 키 없이도 동작하도록)
      if (import.meta.env.DEV) {
        if (import.meta.env.DEV) {
      console.log('🔧 개발 모드: 카카오 SDK 모의 초기화');
    }
        // 개발 모드에서는 실제 초기화 없이 지나감
        return false;
      }
      
      // 프로덕션에서는 실제 앱 키로 초기화
      window.Kakao.init(KAKAO_APP_KEY);
      if (import.meta.env.DEV) {
        console.log('✅ 카카오 SDK 초기화 성공');
      }
      return true;
    } catch (error) {
              if (import.meta.env.DEV) {
          console.error('❌ 카카오 SDK 초기화 실패:', error);
        }
      return false;
    }
  }
  
  return false;
}

// 카카오 SDK 로드 상태 확인
export function isKakaoLoaded() {
  return typeof window !== 'undefined' && window.Kakao;
}
