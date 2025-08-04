// 🔗 공유된 결과 페이지
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { catResults } from '@/data/catTestData';
import { dinosaurTestData } from '@/data/dinosaurTestData';
import { catImages } from '@/data/catImages';
import SocialShare from '@/components/common/SocialShare';
import { setMetaTags } from '@/utils/shareUtils';
import { useOfflineDatabase } from '@/hooks/useOfflineDatabase';

export default function SharedResult() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { saveTestResult } = useOfflineDatabase();
  
  // 🎯 URL 파라미터에서 데이터 추출
  const testType = searchParams.get('test');
  const mbtiResult = searchParams.get('result');
  const characterName = searchParams.get('character');
  const userName = searchParams.get('user') || '';
  
  useEffect(() => {
    // 📊 결과 데이터 로드
    const loadResultData = () => {
      if (!testType || !mbtiResult) {
        navigate('/');
        return;
      }
      
      let result = null;
      let testData = null;
      
      if (testType === 'cat') {
        result = catResults[mbtiResult];
        if (result) {
          result.image = catImages[mbtiResult];
          result.breed = characterName;
        }
        testData = {
          emoji: '🐱',
          title: '고양이 MBTI 테스트',
          world: '고양이 왕국'
        };
      } else if (testType === 'dinosaur') {
        result = dinosaurTestData.results[mbtiResult];
        if (result) {
          result.name = characterName;
        }
        testData = {
          emoji: '🦕',
          title: '공룡 MBTI 테스트',
          world: '공룡시대'
        };
      }
      
      if (!result) {
        navigate('/');
        return;
      }
      
      setResultData({ ...result, MBTI: mbtiResult, testData });
      
      // 💾 오프라인 데이터베이스에 결과 저장
      try {
        await saveTestResult({
          testId: testType,
          testName: testData.title,
          result: { ...result, MBTI: mbtiResult, testData },
          answers: [],
          score: 0,
          userId: userName || 'anonymous'
        });
        console.log('✅ 테스트 결과가 오프라인에 저장되었습니다.');
      } catch (error) {
        console.error('❌ 오프라인 저장 실패:', error);
      }
      
      // 🏷️ 메타 태그 설정
      const title = `${testData.emoji} ${userName ? `${userName}님의` : ''} ${testData.title} 결과`;
      const description = `${testData.world}에서 ${userName ? `${userName}님은` : '결과는'} "${characterName}" ${testData.emoji}\\n\\n쫄부월드에서 함께 테스트해보세요!`;
      const imageUrl = `${window.location.origin}${result.image}`;
      
      setMetaTags({
        title,
        description,
        image: imageUrl,
        url: window.location.href
      });
      
      setLoading(false);
    };
    
    loadResultData();
  }, [testType, mbtiResult, characterName, userName, navigate]);
  
  // 🎨 MBTI별 카드 색상 (고양이 테스트와 동일)
  const getCardPalette = (mbtiType) => {
    const paletteMap = {
      'INTJ': { background: 'from-slate-100 to-slate-200', imageArea: 'from-slate-200 to-slate-300' },
      'INTP': { background: 'from-violet-100 to-violet-200', imageArea: 'from-violet-200 to-violet-300' },
      'ENTJ': { background: 'from-red-100 to-red-200', imageArea: 'from-red-200 to-red-300' },
      'ENTP': { background: 'from-orange-100 to-orange-200', imageArea: 'from-orange-200 to-orange-300' },
      'INFJ': { background: 'from-teal-100 to-teal-200', imageArea: 'from-teal-200 to-teal-300' },
      'INFP': { background: 'from-pink-100 to-pink-200', imageArea: 'from-pink-200 to-pink-300' },
      'ENFJ': { background: 'from-green-100 to-green-200', imageArea: 'from-green-200 to-green-300' },
      'ENFP': { background: 'from-yellow-100 to-yellow-200', imageArea: 'from-yellow-200 to-yellow-300' },
      'ISTJ': { background: 'from-blue-100 to-blue-200', imageArea: 'from-blue-200 to-blue-300' },
      'ISFJ': { background: 'from-rose-100 to-rose-200', imageArea: 'from-rose-200 to-rose-300' },
      'ESTJ': { background: 'from-amber-100 to-amber-200', imageArea: 'from-amber-200 to-amber-300' },
      'ESFJ': { background: 'from-emerald-100 to-emerald-200', imageArea: 'from-emerald-200 to-emerald-300' },
      'ISTP': { background: 'from-gray-100 to-gray-200', imageArea: 'from-gray-200 to-gray-300' },
      'ISFP': { background: 'from-purple-100 to-purple-200', imageArea: 'from-purple-200 to-purple-300' },
      'ESTP': { background: 'from-cyan-100 to-cyan-200', imageArea: 'from-cyan-200 to-cyan-300' },
      'ESFP': { background: 'from-lime-100 to-lime-200', imageArea: 'from-lime-200 to-lime-300' }
    };
    
    return paletteMap[mbtiType] || { background: 'from-gray-100 to-gray-200', imageArea: 'from-gray-200 to-gray-300' };
  };
  
  // 🏠 테스트 시작하기
  const startTest = () => {
    if (testType === 'cat') {
      navigate('/cat-test');
    } else if (testType === 'dinosaur') {
      navigate('/dinosaur-test');
    } else {
      navigate('/');
    }
  };
  
  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-background text-text min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🔄</div>
            <p className="text-lg text-gray-600">결과를 불러오는 중...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  if (!resultData) {
    return (
      <>
        <Header />
        <main className="bg-background text-text min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">❌</div>
            <p className="text-lg text-gray-600 mb-4">결과를 찾을 수 없습니다.</p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              홈으로 가기
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  const palette = getCardPalette(resultData.MBTI);
  
  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* 🎯 타이틀 */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#5D4037] mb-2">
              {resultData.testData.emoji} {userName ? `${userName}님의` : ''} {resultData.testData.title} 결과
            </h1>
            <p className="text-gray-600">
              {resultData.testData.world}에서의 성격을 확인해보세요!
            </p>
          </div>
          
          {/* 🎨 결과 카드 */}
          <div className={`bg-gradient-to-br ${palette.background} rounded-3xl shadow-2xl p-6 mb-8`}>
            {/* ZZOLBOOWORLD.COM 텍스트 */}
            <div className="text-center mb-4">
              <p className="text-gray-600 text-sm font-medium tracking-wider">
                ZZOLBOOWORLD.COM
              </p>
            </div>
            
            {/* 이미지 영역 */}
            <div className={`bg-gradient-to-br ${palette.imageArea} rounded-2xl p-6 mb-6 relative`}>
              <img 
                src={resultData.image} 
                alt={characterName}
                className="w-full max-w-xs mx-auto h-auto object-contain"
              />
              
              {/* MBTI 배지 */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                <span className="text-lg font-bold text-gray-800">
                  {resultData.MBTI}
                </span>
              </div>
            </div>
            
            {/* 캐릭터 이름 */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              {characterName}
            </h2>
            
            {/* 설명 */}
            <div className="space-y-4">
              <div className="bg-white/70 rounded-2xl p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  ✨ 특징
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {resultData.traits?.join(', ') || resultData.description}
                </p>
              </div>
              
              {resultData.compatibility && (
                <div className="bg-white/70 rounded-2xl p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    💕 궁합
                  </h3>
                  <p className="text-gray-700">
                    {resultData.compatibility}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* 🎯 액션 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white py-4 rounded-2xl font-bold hover:from-gray-600 hover:to-gray-700 transition-all duration-200 text-lg shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="text-xl">🏠</span>
              홈으로
            </button>
            
            <button
              onClick={startTest}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-lg shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="text-xl">🎯</span>
              나도 테스트하기
            </button>
            
            {/* 소셜 공유 버튼 */}
            <SocialShare 
              testType={testType}
              result={{
                MBTI: resultData.MBTI,
                breed: testType === 'cat' ? characterName : undefined,
                name: testType === 'dinosaur' ? characterName : undefined,
                image: resultData.image
              }}
              userName={userName}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
