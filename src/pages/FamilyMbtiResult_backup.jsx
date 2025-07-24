// 👩‍👧‍👦 우리 엄마 MBTI 테스트 결과 페이지
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { familyMbtiTestData } from '../data/familyMbtiTestData';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SocialShare from '../components/common/SocialShare';

export default function FamilyMbtiResult() {
  const { resultType } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  // 디버깅용 console.log 추가
  console.log('FamilyMbtiResult 컴포넌트 렌더링');
  console.log('resultType:', resultType);
  console.log('familyMbtiTestData:', familyMbtiTestData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // 결과 데이터 가져오기
  const result = familyMbtiTestData.results[resultType];
  
  // 디버깅용 console.log 추가
  console.log('result:', result);
  console.log('familyMbtiTestData.results:', familyMbtiTestData.results);
  console.log('Available result types:', Object.keys(familyMbtiTestData.results || {}));
  
  if (!result) {
    console.log('결과를 찾을 수 없습니다. resultType:', resultType);
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
          <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-6xl mb-4">😅</div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              잘못된 결과 타입입니다
            </h2>
            <button 
              onClick={() => navigate('/family-mbti')}
              className="bg-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-600 transition-colors"
            >
              테스트 다시하기
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const shareData = {
    title: `우리 엄마 MBTI 테스트 결과: ${result.title}`,
    description: result.description[0],
    hashtags: ['MBTI', '가족테스트', '엄마MBTI', '성격테스트']
  };

  return (
    <div style={{ 
      backgroundColor: 'red', 
      color: 'white', 
      padding: '20px', 
      minHeight: '100vh',
      fontSize: '20px'
    }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>
        우리 엄마 MBTI 결과!
      </h1>
      <p>resultType: {resultType}</p>
      <p>결과: {result ? result.title : '결과 없음'}</p>
      <button 
        onClick={() => navigate('/family-mbti')}
        style={{ 
          backgroundColor: 'blue', 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        테스트로 돌아가기
      </button>
    </div>
  );
        <div className="max-w-4xl mx-auto px-4">
          
          {/* 🎉 결과 발표 헤더 */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-8xl mb-6 animate-bounce">🎉</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              우리 엄마 MBTI 결과!
            </h1>
            <p className="text-gray-600 text-lg">
              당신이 생각하는 우리 엄마의 성격유형을 확인해보세요
            </p>
          </div>

          {/* 🏆 메인 결과 카드 */}
          <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 border-4 border-pink-200 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            
            {/* 💖 MBTI 타입 헤더 */}
            <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white relative overflow-hidden">
              {/* 배경 패턴 */}
              <div className="absolute inset-0 bg-white opacity-10">
                <div className="absolute top-4 left-4 text-6xl opacity-30">👩‍👧‍👦</div>
                <div className="absolute top-8 right-8 text-4xl opacity-20">💕</div>
                <div className="absolute bottom-4 left-1/3 text-5xl opacity-25">🌸</div>
              </div>
              
              <div className="relative z-10 text-center py-12">
                <div className="text-8xl font-bold mb-4 tracking-wider drop-shadow-lg">
                  {result.type}
                </div>
                <h2 className="text-3xl font-bold mb-2">{result.title}</h2>
                <div className="text-xl opacity-90">우리 집의 {result.role}</div>
              </div>
            </div>

            {/* 📸 이미지 영역 */}
            <div className="p-8 bg-gradient-to-r from-pink-50 to-purple-50">
              <div className="bg-white rounded-2xl p-6 border-2 border-dashed border-pink-300 text-center">
                <div className="text-6xl mb-4">📸</div>
                <div className="text-gray-600 mb-2">
                  <strong>우리 엄마 사진을 여기에!</strong>
                </div>
                <p className="text-sm text-gray-500">
                  결과를 캡처해서 SNS에 공유할 때<br/>
                  엄마 사진과 함께 올려보세요 💕
                </p>
              </div>
            </div>

            {/* 📋 결과 내용 */}
            <div className="p-8 space-y-8">
              
              {/* 🎯 성격 특징 */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-orange-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-3 text-3xl">🎯</span>
                  우리 엄마는 이런 분이에요
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {result.description.map((desc, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-orange-200">
                      <p className="text-gray-700 leading-relaxed font-medium">
                        <span className="text-orange-500 font-bold mr-2">✓</span>
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 💬 엄마의 명언 */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-3 text-3xl">💬</span>
                  엄마가 자주 하시는 말
                </h3>
                <div className="space-y-4">
                  {result.quotes.map((quote, index) => (
                    <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-blue-200 relative">
                      <div className="absolute -left-2 top-4 w-4 h-4 bg-blue-400 transform rotate-45"></div>
                      <p className="text-lg text-blue-800 font-semibold italic pl-4">
                        "{quote}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ⚡ 엄마의 초능력 */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-3 text-3xl">⚡</span>
                  엄마만의 특별한 능력
                </h3>
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200 text-center">
                  <div className="text-4xl mb-3">🔮</div>
                  <p className="text-xl text-purple-800 font-bold leading-relaxed">
                    {result.hiddenAbility}
                  </p>
                </div>
              </div>

              {/* 🏠 우리 집에서의 역할 */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-3 text-3xl">🏠</span>
                  우리 집에서의 역할
                </h3>
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200 text-center">
                  <div className="text-4xl mb-3">👑</div>
                  <p className="text-2xl text-green-800 font-bold">
                    {result.role}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* � SNS 공유 섹션 */}
          <div className={`bg-white rounded-2xl shadow-xl p-6 mb-8 border-2 border-pink-200 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                <span className="mr-2 text-3xl">📱</span>
                친구들에게도 공유해보세요!
              </h3>
              <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400 mb-4">
                <p className="text-gray-700 italic font-medium">
                  "{result.shareText}"
                </p>
              </div>
            </div>
            <SocialShare data={shareData} />
          </div>

          {/* 🔄 액션 버튼들 */}
          <div className={`text-center space-y-6 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* 메인 액션 버튼들 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/family-mbti')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <span className="mr-2 text-xl">🔄</span>
                테스트 다시하기
              </button>
              
              <button
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <span className="mr-2 text-xl">🏠</span>
                다른 테스트 해보기
              </button>
            </div>

            {/* 추천 테스트 */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-4 flex items-center justify-center">
                <span className="mr-2 text-xl">💡</span>
                이런 테스트는 어때요?
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => navigate('/cat-test')}
                  className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors font-medium"
                >
                  🐾 고양이 MBTI 테스트
                </button>
                <button
                  onClick={() => navigate('/dinosaur-test')}
                  className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors font-medium"
                >
                  🦕 공룡 MBTI 테스트
                </button>
                <button
                  onClick={() => navigate('/food-test')}
                  className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors font-medium"
                >
                  🍽️ 오늘 뭐 먹지? 테스트
                </button>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
