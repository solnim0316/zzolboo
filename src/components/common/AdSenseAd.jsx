// 📊 Google AdSense 광고 컴포넌트 - 수익 최적화 버전
import { useEffect, useRef } from 'react';

const AdSenseAd = ({ 
  adSlot, 
  adFormat = 'auto', 
  style = {}, 
  className = '',
  responsive = true,
  fullWidthResponsive = false,
  // 콘텐츠 인피드용 새로운 옵션들
  isContentInfeed = false,
  cardStyle = false,
  youtubeThumbnailStyle = false,
  // 🚀 BRO 전용 광고 옵션
  isBroAd = false,
  broCategory = 'investment', // 'investment', 'finance', 'car', 'crypto'
  // 🐱 테스트별 맞춤 광고 옵션
  isTestSpecific = false,
  testCategory = 'general' // 'cat', 'mbti', 'love', 'food', 'movie', 'color'
}) => {
  const adRef = useRef(null);

  useEffect(() => {
    // AdSense 스크립트가 로드되었는지 확인
    if (window.adsbygoogle && adRef.current) {
      try {
        console.log('🚀 AdSense 광고 로딩 시도:', adSlot);
        window.adsbygoogle.push({});
        console.log('✅ AdSense 광고 로딩 성공:', adSlot);
      } catch (error) {
        console.warn('❌ AdSense 광고 로드 실패:', error);
      }
    } else {
      console.warn('⚠️ AdSense 스크립트 또는 ref가 없음:', {
        hasAdsByGoogle: !!window.adsbygoogle,
        hasRef: !!adRef.current,
        adSlot
      });
    }
  }, [adSlot]);

  // 광고 단위별 스타일 설정
  const getAdStyle = () => {
    const baseStyle = {
      display: 'block',
      textAlign: 'center',
      margin: '0 auto', // 20px auto에서 0 auto로 변경
      ...style
    };

    // 🐱 테스트별 맞춤 광고 스타일
    if (isTestSpecific) {
      const testBaseStyle = {
        ...baseStyle,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '2px solid',
        transition: 'all 0.3s ease'
      };

      switch (testCategory) {
        case 'cat':
          return {
            ...testBaseStyle,
            background: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
            borderColor: '#fdcb6e'
          };
        case 'mbti':
          return {
            ...testBaseStyle,
            background: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
            borderColor: '#6c5ce7'
          };
        case 'love':
          return {
            ...testBaseStyle,
            background: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
            borderColor: '#e84393'
          };
        case 'food':
          return {
            ...testBaseStyle,
            background: 'linear-gradient(135deg, #55a3ff 0%, #0984e3 100%)',
            borderColor: '#0984e3'
          };
        case 'movie':
          return {
            ...testBaseStyle,
            background: 'linear-gradient(135deg, #81ecec 0%, #00b894 100%)',
            borderColor: '#00b894'
          };
        case 'color':
          return {
            ...testBaseStyle,
            background: 'linear-gradient(135deg, #fab1a0 0%, #e17055 100%)',
            borderColor: '#e17055'
          };
        default:
          return testBaseStyle;
      }
    }

    // 🚀 BRO 전용 광고 스타일
    if (isBroAd) {
      const broBaseStyle = {
        ...baseStyle,
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        transition: 'all 0.3s ease'
      };

      switch (broCategory) {
        case 'investment':
          return {
            ...broBaseStyle,
            background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)',
            border: '1px solid rgba(46, 125, 50, 0.3)'
          };
        case 'finance':
          return {
            ...broBaseStyle,
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            border: '1px solid rgba(25, 118, 210, 0.3)'
          };
        case 'car':
          return {
            ...broBaseStyle,
            background: 'linear-gradient(135deg, #d32f2f 0%, #c62828 100%)',
            border: '1px solid rgba(211, 47, 47, 0.3)'
          };
        case 'crypto':
          return {
            ...broBaseStyle,
            background: 'linear-gradient(135deg, #ff8f00 0%, #f57c00 100%)',
            border: '1px solid rgba(255, 143, 0, 0.3)'
          };
        default:
          return broBaseStyle;
      }
    }

    // 콘텐츠 인피드용 특별 스타일
    if (isContentInfeed) {
      return {
        ...baseStyle,
        margin: '0',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out',
        cursor: 'pointer'
      };
    }

    // 카드 스타일 (테스트 카드와 동일)
    if (cardStyle) {
      return {
        ...baseStyle,
        margin: '0',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      };
    }

    // 유튜브 썸네일 스타일
    if (youtubeThumbnailStyle) {
      return {
        ...baseStyle,
        margin: '0',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative'
      };
    }

    switch (adFormat) {
      case 'banner':
        return {
          ...baseStyle,
          width: '728px',
          height: '90px',
          '@media (max-width: 768px)': {
            width: '320px',
            height: '50px'
          }
        };
      case 'skyscraper':
        return {
          ...baseStyle,
          width: '160px',
          height: '600px'
        };
      case 'rectangle':
        return {
          ...baseStyle,
          width: '300px',
          height: '250px'
        };
      case 'mobile':
        return {
          ...baseStyle,
          width: '320px',
          height: '50px'
        };
      case 'content-infeed':
        return {
          ...baseStyle,
          width: '100%',
          height: 'auto',
          minHeight: '200px'
        };
      case 'content-infeed-card':
        return {
          ...baseStyle,
          width: '100%',
          height: 'auto',
          aspectRatio: '1 / 1', // 정사각형으로 변경
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        };
      case 'content-infeed-thumbnail':
        return {
          ...baseStyle,
          width: '100%',
          height: 'auto',
          aspectRatio: '1 / 1', // 정사각형으로 변경
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          position: 'relative'
        };
      default:
        return baseStyle;
    }
  };

  // 콘텐츠 인피드 광고 래퍼
  if (isContentInfeed) {
    return (
      <div 
        className={`content-infeed-ad ${className}`} 
        style={getAdStyle()}
        onMouseEnter={(e) => {
          if (youtubeThumbnailStyle) {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
          }
        }}
        onMouseLeave={(e) => {
          if (youtubeThumbnailStyle) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
          }
        }}
      >
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2842847878240169"
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
          data-adtest="off"
          data-ad-region="test"
          data-ad-layout="in-article"
          data-ad-layout-key="-fb+5w+4e-db+86"
        />
      </div>
    );
  }

  // 반응형 광고 단위
  if (responsive) {
    return (
      <div className={`adsense-responsive ${className}`} style={getAdStyle()}>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2842847878240169"
          data-ad-slot={adSlot}
          data-ad-format={fullWidthResponsive ? 'auto' : adFormat}
          data-full-width-responsive={fullWidthResponsive}
        />
      </div>
    );
  }

  // 고정 크기 광고 단위
  return (
    <div className={`adsense-fixed ${className}`} style={getAdStyle()}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2842847878240169"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
      />
    </div>
  );
};

// 사전 정의된 광고 단위들
export const AdUnits = {
  // 헤더 배너 (728x90) - 실제 생성된 ID
  HEADER_BANNER: '9815887987',
  
  // 사이드바 스카이스크래퍼 (160x600) - 실제 생성된 ID
  SIDEBAR_SKYSCRAPER: '4938965822',
  
  // 콘텐츠 중간 인피드 (728x90)
  CONTENT_INFEED: 'content-infeed-728x90',
  
  // 결과 페이지 하단 (728x90)
  RESULT_BOTTOM: 'result-bottom-728x90',
  
  // 모바일 전용 (320x50) - 실제 생성된 ID
  MOBILE_BANNER: '3250479630',
  
  // 반응형 광고
  RESPONSIVE: 'responsive-auto',
  
  // 콘텐츠 인피드용 새로운 광고 단위들 - 실제 생성된 ID들
  CONTENT_INFEED_CARD: '4371989611',
  CONTENT_INFEED_THUMBNAIL: '3933005915',
  TEST_LIST_MIDDLE: 'test-list-middle-728x90',
  INFEED_AD: 'infeed-ad-responsive',
  
  // 추가 광고 단위들
  RECTANGLE_INFEED: '7872250929',
  
  // 🚀 BRO 전용 광고 단위들 (투자/금융/자동차 관련)
  BRO_HEADER_BANNER: 'bro-header-banner-728x90',
  BRO_SIDEBAR_SKYSCRAPER: 'bro-sidebar-skyscraper-160x600',
  BRO_CONTENT_INFEED: 'bro-content-infeed-728x90',
  BRO_MOBILE_BANNER: 'bro-mobile-banner-320x50',
  BRO_INVESTMENT_CARD: 'bro-investment-card-300x250',
  BRO_FINANCE_BANNER: 'bro-finance-banner-728x90',
  BRO_CAR_ADVERTISEMENT: 'bro-car-ad-300x600',
  BRO_CRYPTO_INFEED: 'bro-crypto-infeed-728x90',
  
  // 🐱 테스트별 맞춤 광고 단위들
  CAT_TEST_BANNER: 'cat-test-banner-728x90',
  CAT_TEST_RECTANGLE: 'cat-test-rectangle-300x250',
  MBTI_TEST_BANNER: 'mbti-test-banner-728x90', 
  MBTI_TEST_RECTANGLE: 'mbti-test-rectangle-300x250',
  LOVE_TEST_BANNER: 'love-test-banner-728x90',
  LOVE_TEST_RECTANGLE: 'love-test-rectangle-300x250',
  FOOD_TEST_BANNER: 'food-test-banner-728x90',
  FOOD_TEST_RECTANGLE: 'food-test-rectangle-300x250',
  MOVIE_TEST_BANNER: 'movie-test-banner-728x90',
  MOVIE_TEST_RECTANGLE: 'movie-test-rectangle-300x250',
  COLOR_TEST_BANNER: 'color-test-banner-728x90',
  COLOR_TEST_RECTANGLE: 'color-test-rectangle-300x250',
  
  // 📺 결과 전 광고 단위들 (전면 광고 스타일)
  INTERSTITIAL_CAT: 'interstitial-cat-ad',
  INTERSTITIAL_MBTI: 'interstitial-mbti-ad',
  INTERSTITIAL_LOVE: 'interstitial-love-ad',
  INTERSTITIAL_FOOD: 'interstitial-food-ad',
  INTERSTITIAL_MOVIE: 'interstitial-movie-ad',
  INTERSTITIAL_COLOR: 'interstitial-color-ad'
};

export default AdSenseAd; 