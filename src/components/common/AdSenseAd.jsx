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
  youtubeThumbnailStyle = false
}) => {
  const adRef = useRef(null);

  useEffect(() => {
    // AdSense 스크립트가 로드되었는지 확인
    if (window.adsbygoogle && adRef.current) {
      try {
        window.adsbygoogle.push({});
      } catch (error) {
        console.warn('AdSense 광고 로드 실패:', error);
      }
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
  RECTANGLE_INFEED: '7872250929'
};

export default AdSenseAd; 