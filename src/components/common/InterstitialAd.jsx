// 📺 결과 전 전면 광고 컴포넌트
import { useState, useEffect } from 'react';
import AdSenseAd, { AdUnits } from './AdSenseAd';

const InterstitialAd = ({ 
  testCategory = 'general',
  onAdClose,
  onSkip,
  autoCloseDelay = 5000 // 5초 후 자동 닫기
}) => {
  const [timeLeft, setTimeLeft] = useState(Math.floor(autoCloseDelay / 1000));
  const [canClose, setCanClose] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setCanClose(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onAdClose?.();
    }, 300);
  };

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => {
      onSkip?.();
    }, 300);
  };

  // 테스트 카테고리별 광고 슬롯 매핑
  const getAdSlot = () => {
    switch (testCategory) {
      case 'cat': return AdUnits.INTERSTITIAL_CAT;
      case 'mbti': return AdUnits.INTERSTITIAL_MBTI;
      case 'love': return AdUnits.INTERSTITIAL_LOVE;
      case 'food': return AdUnits.INTERSTITIAL_FOOD;
      case 'movie': return AdUnits.INTERSTITIAL_MOVIE;
      case 'color': return AdUnits.INTERSTITIAL_COLOR;
      default: return AdUnits.HEADER_BANNER;
    }
  };

  // 테스트 카테고리별 메시지
  const getAdMessage = () => {
    switch (testCategory) {
      case 'cat':
        return {
          title: '🐱 고양이와 관련된 추천 상품',
          subtitle: '고양이 용품, 펫샵, 애완동물 관련 상품을 확인해보세요!'
        };
      case 'mbti':
        return {
          title: '🧠 성격 분석 관련 추천',
          subtitle: 'MBTI, 심리학 도서, 자기계발서를 만나보세요!'
        };
      case 'love':
        return {
          title: '💕 연애와 관련된 추천',
          subtitle: '데이트 코스, 선물, 연애 상담 서비스를 확인해보세요!'
        };
      case 'food':
        return {
          title: '🍽️ 음식 관련 추천',
          subtitle: '맛집, 레시피, 요리 도구를 만나보세요!'
        };
      case 'movie':
        return {
          title: '🎬 영화 관련 추천',
          subtitle: 'OTT 서비스, 영화 굿즈, 엔터테인먼트를 확인해보세요!'
        };
      case 'color':
        return {
          title: '🎨 컬러 관련 추천',
          subtitle: '미술 용품, 인테리어, 패션 아이템을 만나보세요!'
        };
      default:
        return {
          title: '📢 추천 상품',
          subtitle: '테스트 결과와 관련된 상품을 확인해보세요!'
        };
    }
  };

  const message = getAdMessage();

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* 헤더 */}
        <div className="bg-gradient-to-r from-[#F48FB1] to-[#F06292] text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">{message.title}</h2>
              <p className="text-white/90 mt-1">{message.subtitle}</p>
            </div>
            <div className="text-right">
              {canClose ? (
                <button 
                  onClick={handleClose}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  ✕ 닫기
                </button>
              ) : (
                <div className="bg-white/20 text-white px-4 py-2 rounded-lg">
                  {timeLeft}초 후 닫기
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 광고 영역 */}
        <div className="p-6">
          <AdSenseAd 
            adSlot={getAdSlot()}
            adFormat="rectangle"
            isTestSpecific={true}
            testCategory={testCategory}
            className="mx-auto"
            style={{ minHeight: '250px' }}
          />
        </div>

        {/* 푸터 */}
        <div className="border-t border-gray-200 p-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            🎯 관련성 높은 광고를 통해 더 나은 서비스를 제공합니다
          </p>
          <button 
            onClick={handleSkip}
            className="text-gray-500 hover:text-gray-700 text-sm underline"
          >
            광고 건너뛰기
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterstitialAd;
