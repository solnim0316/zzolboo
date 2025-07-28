// 🦕 공룡 MBTI 테스트 결과 페이지
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dinosaurTestData } from '../data/dinosaurTestData';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SocialShare from '../components/common/SocialShare';
import ImageGeneratorComponent from '../components/common/ImageGeneratorComponent';

export default function DinosaurTestResult() {
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
  const result = dinosaurTestData.results[resultType];
      </>
  );
}
  
  if (!result) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
          <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-6xl mb-4">🦴</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              결과를 찾을 수 없습니다
            </h2>
            <p className="text-gray-600 mb-6">
              올바르지 않은 결과 타입입니다.
            </p>
            <button 
              onClick={() => navigate('/dinosaur-test')}
              className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
            >
              테스트 다시하기
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // 🎨 MBTI별 부드러운 공룡 팔레트 시스템
  const getCardPalette = (mbtiType) => {
    const paletteMap = {
      'INTJ': {
        background: 'from-slate-100 to-slate-200',
        imageArea: 'from-slate-200 to-slate-300',
        textMain: 'text-slate-800',
        textSecondary: 'text-slate-600',
        tagBg: 'from-slate-400 to-slate-500',
        mbtiButton: 'from-slate-600 to-slate-700',
        dinosaurName: 'from-slate-300 to-slate-400',
        matchBg: 'bg-slate-50',
        mismatchBg: 'bg-slate-100'
      },
      'INTP': {
        background: 'from-blue-50 to-blue-100',
        imageArea: 'from-blue-100 to-blue-200',
        textMain: 'text-blue-800',
        textSecondary: 'text-blue-600',
        tagBg: 'from-blue-400 to-blue-500',
        mbtiButton: 'from-blue-500 to-blue-600',
        dinosaurName: 'from-blue-200 to-blue-300',
        matchBg: 'bg-blue-50',
        mismatchBg: 'bg-blue-100'
      },
      'ENTJ': {
        background: 'from-amber-50 to-orange-100',
        imageArea: 'from-amber-100 to-orange-200',
        textMain: 'text-amber-800',
        textSecondary: 'text-amber-700',
        tagBg: 'from-amber-400 to-orange-500',
        mbtiButton: 'from-amber-600 to-orange-700',
        dinosaurName: 'from-amber-300 to-orange-400',
        matchBg: 'bg-amber-50',
        mismatchBg: 'bg-orange-100'
      },
      'ENTP': {
        background: 'from-emerald-50 to-green-100',
        imageArea: 'from-emerald-100 to-green-200',
        textMain: 'text-emerald-800',
        textSecondary: 'text-emerald-600',
        tagBg: 'from-emerald-400 to-green-500',
        mbtiButton: 'from-emerald-500 to-green-600',
        dinosaurName: 'from-emerald-200 to-green-300',
        matchBg: 'bg-emerald-50',
        mismatchBg: 'bg-green-100'
      }
    };
    
    return paletteMap[mbtiType] || paletteMap['INTJ'];
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
              <div className="text-8xl">🦕</div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
              
              {/* 📸 이미지 영역 */}
              <div className={`flex-shrink-0 w-80 h-80 rounded-2xl bg-gradient-to-br ${palette.imageArea} p-4 shadow-xl`}>
                <img 
                  src={result.image || '/images/dinosaurs/default.png'}
                  alt={result.name}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = '/images/dinosaurs/default.png';
                  }}
                />
              </div>
              
              {/* 📝 텍스트 영역 */}
              <div className="flex-1 text-center lg:text-left">
                
                {/* 👤 사용자 이름 */}
                {userName && (
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${palette.dinosaurName} rounded-full text-white font-medium mb-4`}>
                    {decodeURIComponent(userName)}님의 결과
                  </div>
                )}
                
                {/* 🏷️ MBTI 태그 */}
                <div className={`inline-block px-6 py-3 bg-gradient-to-r ${palette.tagBg} text-white text-xl font-bold rounded-full mb-4 shadow-lg`}>
                  {result.MBTI}
                </div>
                
                {/* 🦕 공룡 이름 */}
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
              결과 공유하기 🦕
            </h3>
            <SocialShare 
              testType="dinosaur"
              result={{ ...result, MBTI: resultType, name: result.dinosaur }}
              userName={decodeURIComponent(userName || '익명')}
            />
          </div>
          
          {/* 🎨 이미지 생성 컴포넌트 */}
          <div className={`bg-white rounded-2xl p-6 shadow-xl mb-8 ${isLoaded ? 'animate-fadeInUp animation-delay-400' : 'opacity-0'}`}>
            <ImageGeneratorComponent 
              testType="dinosaur"
              result={result}
              userName={userName}
            />
          </div>
          
          {/* 🔄 다시하기 버튼 */}
          <div className={`text-center ${isLoaded ? 'animate-fadeInUp animation-delay-600' : 'opacity-0'}`}>
            <button
              onClick={() => navigate('/dinosaur-test')}
              className={`bg-gradient-to-r ${palette.mbtiButton} text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg`}
            >
              🔄 다른 공룡으로 다시 테스트하기
            </button>
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
c o n s o l e . l o g ( ' D i n o s a u r T e s t R e s u l t : ' ,   d i n o s a u r T e s t D a t a ) ; 
 
 