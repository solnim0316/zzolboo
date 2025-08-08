// 🔗 소셜 공유 유틸리티 함수들
import { initKakao, isKakaoLoaded } from './kakao.js';

// 현재 도메인 (배포시 실제 도메인으로 변경 필요)
const BASE_URL = window.location.origin || 'https://www.zzolbooworld.com';

/**
 * 🎯 결과 공유 URL 생성
 * @param {string} testType - 테스트 타입 ('cat' 또는 'dinosaur')
 * @param {string} mbti - MBTI 결과 (예: 'ENFP')
 * @param {string} characterName - 캐릭터 이름 (예: '페르시안 고양이')
 * @param {string} userName - 사용자 이름
 * @returns {string} 공유용 URL
 */
export function generateShareUrl(testType, mbti, characterName, userName = '') {
  const params = new URLSearchParams({
    test: testType,
    result: mbti,
    character: characterName,
    ...(userName && { user: userName })
  });
  
  return `${BASE_URL}/share?${params.toString()}`;
}

/**
 * 🎯 테스트별 시작 페이지 URL 생성
 */
function getTestStartUrl(testType) {
  switch(testType) {
    case 'cat':
      return `${BASE_URL}/cat-test`;
    case 'dinosaur':
      return `${BASE_URL}/dinosaur-test`;
    case 'food':
      return `${BASE_URL}/food-test`;
    case 'lol':
      return `${BASE_URL}/bro/lol-test`;
    case 'love-habit':
      return `${BASE_URL}/love-habit-test`;
    case 'drama':
      return `${BASE_URL}/drama-test`;
    default:
      return BASE_URL;
  }
}

/**
 * 📱 카카오톡 공유
 */
export function shareToKakao(shareData) {
  const { url, title, description, imageUrl, testType } = shareData;
  
  // 카카오 SDK 로드 및 초기화 확인
  if (!isKakaoLoaded()) {
    // Toast 알림으로 교체 예정
    console.warn('카카오톡 공유 기능을 준비 중입니다!');
    return;
  }
  
  // 개발 모드에서는 링크 복사로 대체
  if (import.meta.env.DEV) {
    if (import.meta.env.DEV) {
      console.log('🔧 개발 모드: 카카오톡 공유 시뮬레이션');
      console.log('공유할 데이터:', { url, title, description, imageUrl });
    }
    copyToClipboard(url).then(() => {
      // Toast 알림으로 교체 예정
      console.log('🔧 개발 모드: 공유 링크가 복사되었습니다!');
    });
    return;
  }
  
  // 카카오 SDK 초기화
  if (!initKakao()) {
    console.error('카카오톡 공유 기능을 초기화할 수 없습니다.');
    return;
  }

  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: title,
      description: description,
      imageUrl: imageUrl,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    },
    buttons: [
      {
        title: '나도 테스트하기',
        link: {
          mobileWebUrl: getTestStartUrl(testType),
          webUrl: getTestStartUrl(testType),
        },
      },
    ],
  });
}

/**
 * 📘 페이스북 공유
 */
export function shareToFacebook(url) {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookUrl, '_blank', 'width=600,height=400');
}

/**
 * 🐦 트위터 공유
 */
export function shareToTwitter(shareData) {
  const { url, title } = shareData;
  const text = `${title} - 쫄부월드에서 나의 성격을 알아봤어요! 🐱`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(twitterUrl, '_blank', 'width=600,height=400');
}

/**
 * 📋 링크 복사
 */
export async function copyToClipboard(url) {
  try {
    await navigator.clipboard.writeText(url);
    // Toast 알림으로 교체 예정
    console.log('링크가 복사되었습니다!');
  } catch (err) {
    // 폴백: input 엘리먼트를 사용한 복사
    const textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    // Toast 알림으로 교체 예정
    console.log('링크가 복사되었습니다!');
  }
}

/**
 * 📱 네이티브 웹 공유 API (모바일)
 */
export async function shareNative(shareData) {
  const { url, title, text } = shareData;
  
  if (navigator.share) {
    try {
      await navigator.share({
        title: title,
        text: text,
        url: url,
      });
    } catch (err) {
      if (import.meta.env.DEV) {
      console.log('네이티브 공유 취소됨');
    }
    }
  } else {
    // 폴백: 링크 복사
    copyToClipboard(url);
  }
}

/**
 * 🏷️ 동적 메타 태그 설정
 */
export function setMetaTags(metaData) {
  const { title, description, image, url } = metaData;
  
  // 페이지 제목 설정
  document.title = title;
  
  // 기존 메타 태그 제거/업데이트
  const metaTags = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: '쫄부월드' },
    { name: 'description', content: description },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ];
  
  metaTags.forEach(({ property, name, content }) => {
    let selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
    let existingTag = document.querySelector(selector);
    
    if (existingTag) {
      existingTag.setAttribute('content', content);
    } else {
      const metaTag = document.createElement('meta');
      if (property) metaTag.setAttribute('property', property);
      if (name) metaTag.setAttribute('name', name);
      metaTag.setAttribute('content', content);
      document.head.appendChild(metaTag);
    }
  });
}

/**
 * 🎨 테스트별 공유 데이터 생성
 */
export function createShareData(testType, result, userName = '') {
  const baseData = {
    cat: {
      emoji: '🐱',
      testName: '고양이 MBTI 테스트',
      world: '고양이 왕국'
    },
    dinosaur: {
      emoji: '🦕',
      testName: '공룡 MBTI 테스트', 
      world: '공룡시대'
    },
    'family-mbti': {
      emoji: '👩‍👧‍👦',
      testName: '우리 엄마 MBTI 테스트',
      world: '우리 집'
    },
    lol: {
      emoji: '🎮',
      testName: '롤 라인 추천 테스트',
      world: '리그 오브 레전드'
    },
    'love-habit': {
      emoji: '💘',
      testName: '연애 습관 테스트',
      world: '연애 심리'
    },
    'drama': {
      emoji: '📺',
      testName: '드라마 주인공 테스트',
      world: '드라마 연애'
    }
  };
  
  const data = baseData[testType];
  
  // family-mbti의 경우 특별 처리
  if (testType === 'family-mbti') {
    const shareUrl = `${BASE_URL}/family-mbti-result/${result.type}`;
    const title = `${data.emoji} ${userName ? `${userName}님의` : '나의'} ${data.testName} 결과`;
    const description = `${data.world}에서 우리 엄마는 "${result.title}" ${data.emoji}\n\n${result.shareText || '우리 엄마 MBTI 테스트를 해보세요!'}\n\n쫄부월드에서 ${userName ? `${userName}님과` : ''} 함께 테스트해보세요!`;
    
    return {
      url: shareUrl,
      title,
      description,
      text: description,
      imageUrl: `${BASE_URL}/images/family-mbti-og.png`, // 기본 이미지
      testType
    };
  }
  
  // lol 테스트의 경우 특별 처리
  if (testType === 'lol') {
    const shareUrl = window.location.href;
    const title = `${data.emoji} ${userName ? `${userName}님의` : '나의'} ${data.testName} 결과`;
    const description = `${data.world}에서 ${userName ? `${userName}님은` : '나는'} "${result.title}" ${data.emoji}\n\n${result.catchphrase}\n\n쫄부월드에서 ${userName ? `${userName}님과` : ''} 함께 테스트해보세요!`;
    
    return {
      url: shareUrl,
      title,
      description,
      text: description,
      imageUrl: `${BASE_URL}/og-image.png`, // 기본 이미지
      testType
    };
  }
  
  // love-habit 테스트의 경우 특별 처리
  if (testType === 'love-habit') {
    const shareUrl = window.location.href;
    const title = `${data.emoji} ${userName ? `${userName}님의` : '나의'} ${data.testName} 결과`;
    const description = `${data.world}에서 ${userName ? `${userName}님은` : '나는'} "${result.title}" ${data.emoji}\n\n${result.description}\n\n쫄부월드에서 ${userName ? `${userName}님과` : ''} 함께 테스트해보세요!`;
    
    return {
      url: shareUrl,
      title,
      description,
      text: description,
      imageUrl: `${BASE_URL}/og-image.png`, // 기본 이미지
      testType
    };
  }

  if (testType === 'drama') {
    const shareUrl = window.location.href;
    const title = `${data.emoji} ${userName ? `${userName}님의` : '나의'} ${data.testName} 결과`;
    const description = `${data.world}에서 ${userName ? `${userName}님은` : '나는'} "${result.title}" ${data.emoji}\n\n${result.description}\n\n쫄부월드에서 ${userName ? `${userName}님과` : ''} 함께 테스트해보세요!`;
    
    return {
      url: shareUrl,
      title,
      description,
      text: description,
      imageUrl: `${BASE_URL}/og-image.png`, // 기본 이미지
      testType
    };
  }
  
  const shareUrl = generateShareUrl(testType, result.MBTI, result.breed || result.name, userName);
  
  const title = `${data.emoji} ${userName ? `${userName}님의` : '나의'} ${data.testName} 결과`;
  const description = `${data.world}에서 ${userName ? `${userName}님은` : '나는'} "${result.breed || result.name}" ${data.emoji}\n\n쫄부월드에서 ${userName ? `${userName}님과` : ''} 함께 테스트해보세요!`;
  
  // 이미지 URL 생성 (실제 이미지 경로로 수정 필요)
  const imageUrl = `${BASE_URL}${result.image}`;
  
  return {
    url: shareUrl,
    title,
    description,
    text: description,
    imageUrl,
    testType
  };
}
