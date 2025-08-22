// 🐱 고양이 MBTI 테스트 결과 페이지
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { catResults } from '../data/catTestData';
import { catImages } from '../data/catImages';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SocialShare from '../components/common/SocialShare';
import ImageGeneratorComponent from '../components/common/ImageGeneratorComponent';
import AdSenseAd, { AdUnits } from '../components/common/AdSenseAd';

export default function CatTestResult() {
  const { resultType, userName } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // 결과 데이터 가져오기
  const result = catResults[resultType];
  
  if (!result) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
          <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-6xl mb-4">😿</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              결과를 찾을 수 없습니다
            </h2>
            <p className="text-gray-600 mb-6">
              올바르지 않은 결과 타입입니다.
            </p>
            <button 
              onClick={() => navigate('/cat-test')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              테스트 다시하기
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // 🎨 MBTI별 부드러운 고양이 팔레트 시스템
  const getCardPalette = (mbtiType) => {
    const paletteMap = {
      'ENFJ': {
        background: 'from-orange-50 to-amber-100',
        imageArea: 'from-orange-100 to-amber-200',
        textMain: 'text-orange-800',
        textSecondary: 'text-orange-600',
        tagBg: 'from-orange-400 to-amber-500',
        mbtiButton: 'from-orange-500 to-amber-600',
        catName: 'from-orange-200 to-amber-300',
        matchBg: 'bg-orange-50',
        mismatchBg: 'bg-amber-100'
      },
      'INFP': {
        background: 'from-purple-50 to-violet-100',
        imageArea: 'from-purple-100 to-violet-200',
        textMain: 'text-purple-800',
        textSecondary: 'text-purple-600',
        tagBg: 'from-purple-400 to-violet-500',
        mbtiButton: 'from-purple-500 to-violet-600',
        catName: 'from-purple-200 to-violet-300',
        matchBg: 'bg-purple-50',
        mismatchBg: 'bg-violet-100'
      },
      'ISFJ': {
        background: 'from-green-50 to-emerald-100',
        imageArea: 'from-green-100 to-emerald-200',
        textMain: 'text-green-800',
        textSecondary: 'text-green-600',
        tagBg: 'from-green-400 to-emerald-500',
        mbtiButton: 'from-green-500 to-emerald-600',
        catName: 'from-green-200 to-emerald-300',
        matchBg: 'bg-green-50',
        mismatchBg: 'bg-emerald-100'
      },
      'ESFP': {
        background: 'from-pink-50 to-rose-100',
        imageArea: 'from-pink-100 to-rose-200',
        textMain: 'text-pink-800',
        textSecondary: 'text-pink-600',
        tagBg: 'from-pink-400 to-rose-500',
        mbtiButton: 'from-pink-500 to-rose-600',
        catName: 'from-pink-200 to-rose-300',
        matchBg: 'bg-pink-50',
        mismatchBg: 'bg-rose-100'
      }
    };
    
    return paletteMap[mbtiType] || paletteMap['INFP'];
  };

  const palette = getCardPalette(result.MBTI);

  return (
    <>
      <Header />
      
      <main className={`bg-gradient-to-br ${palette.background} min-h-screen py-8`}>
        <div className="max-w-4xl mx-auto px-4">
          
          {/* 🎨 메인 결과 카드 */}
          <div className={`relative bg-gradient-to-br ${palette.background} rounded-3xl p-8 shadow-2xl border-4 border-white overflow-hidden mb-8 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
            
            {/* 배경 장식 패턴 */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <div className="text-8xl">🐱</div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
              
              {/* 📸 이미지 영역 */}
              <div className={`flex-shrink-0 w-80 h-80 rounded-2xl bg-gradient-to-br ${palette.imageArea} p-4 shadow-xl`}>
                <img 
                  src={catImages[result.MBTI] || '/images/cats/default.png'}
                  alt={result.name}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = '/images/cats/default.png';
                  }}
                />
              </div>
              
              {/* 📝 텍스트 영역 */}
              <div className="flex-1 text-center lg:text-left">
                
                {/* 👤 사용자 이름 */}
                {userName && (
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${palette.catName} rounded-full text-white font-medium mb-4`}>
                    {decodeURIComponent(userName)}님의 결과
                  </div>
                )}
                
                {/* 🏷️ MBTI 태그 */}
                <div className={`inline-block px-6 py-3 bg-gradient-to-r ${palette.tagBg} text-white text-xl font-bold rounded-full mb-4 shadow-lg`}>
                  {result.MBTI}
                </div>
                
                {/* 🐱 고양이 이름 */}
                <h1 className={`text-4xl lg:text-5xl font-bold ${palette.textMain} mb-4 leading-tight`}>
                  {result.name}
                </h1>
                
                {/* 📝 한줄 설명 */}
                <p className={`text-xl ${palette.textSecondary} mb-6 leading-relaxed`}>
                  {result.description}
                </p>
                
                {/* 🎯 특징 태그들 */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {result.characteristics?.map((trait, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 ${palette.matchBg} ${palette.textMain} rounded-full text-sm font-medium border border-white/50`}
                    >
                      #{trait}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
          
          {/* 📱 공유 섹션 */}
          <div className={`bg-white rounded-2xl p-6 shadow-xl mb-8 ${isLoaded ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              결과 공유하기 🐾
            </h3>
            <SocialShare 
              testType="cat"
              result={{ ...result, MBTI: resultType }}
              userName={decodeURIComponent(userName || '익명')}
            />
          </div>
          
          {/* 🎨 이미지 생성 컴포넌트 */}
          <div className={`bg-white rounded-2xl p-6 shadow-xl mb-8 ${isLoaded ? 'animate-fadeInUp animation-delay-400' : 'opacity-0'}`}>
            <ImageGeneratorComponent 
              testType="cat"
              result={result}
              userName={userName}
            />
          </div>
          
          {/* 🔄 다시하기 버튼 */}
          <div className={`text-center ${isLoaded ? 'animate-fadeInUp animation-delay-600' : 'opacity-0'}`}>
            <button
              onClick={() => navigate('/cat-test')}
              className={`bg-gradient-to-r ${palette.mbtiButton} text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg`}
            >
              🔄 다른 고양이로 다시 테스트하기
            </button>
          </div>
          
          {/* 📊 결과 페이지 하단 광고 */}
          <div className={`mt-8 ${isLoaded ? 'animate-fadeInUp animation-delay-800' : 'opacity-0'}`}>
            {/* 데스크톱 광고 */}
            <AdSenseAd 
              adSlot={AdUnits.RESULT_BOTTOM}
              adFormat="banner"
              className="mb-6 hidden md:block"
            />
            
            {/* 모바일 광고 */}
            <AdSenseAd 
              adSlot={AdUnits.MOBILE_BANNER}
              adFormat="mobile"
              className="mb-6 md:hidden"
            />
          </div>
          
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </>
  );
}
