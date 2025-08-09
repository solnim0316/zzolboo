// 📢 AdSense 광고 컴포넌트
import { useEffect } from 'react';

const AdSenseAd = ({ 
  adSlot, 
  adFormat = 'auto', 
  style = {}, 
  className = '',
  responsive = true 
}) => {
  useEffect(() => {
    // AdSense 광고 로드
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log('AdSense 광고 로드 중 오류:', error);
    }
  }, []);

  const getAdStyle = () => {
    const baseStyle = {
      display: 'block',
      textAlign: 'center',
      margin: '20px auto',
      ...style
    };

    if (responsive) {
      baseStyle.overflow = 'hidden';
    }

    return baseStyle;
  };

  return (
    <div className={`adsense-container ${className}`} style={getAdStyle()}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2842847878240169"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdSenseAd; 