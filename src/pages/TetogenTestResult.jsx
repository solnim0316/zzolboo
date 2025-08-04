// 🎭 테토에겐 테스트 결과 페이지
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { tetogenTestData } from '@/data/tetogenTestData';
import UnifiedShareModal from '@/components/common/UnifiedShareModal';

export default function TetogenTestResult() {
  const { resultKey } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    // 결과 키에서 유형과 이름 추출
    const parts = resultKey.split('-');
    const resultType = parts.slice(0, -1).join('-'); // 마지막 부분(이름) 제외
    const userName = parts[parts.length - 1]; // 마지막 부분이 이름
    
    const resultData = tetogenTestData.results[resultType];
    if (resultData) {
      // 설명에 사용자 이름 추가
      const descriptionWithName = resultData.description.replace(/당신은/, `${userName}님은`);
      setResult({
        ...resultData,
        description: descriptionWithName,
        userName: userName
      });
    }
  }, [resultKey]);

  if (!result) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">🎭</div>
            <p className="text-gray-600">결과를 불러오는 중...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* 🎭 결과 헤더 */}
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{result.emoji}</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {result.title}
            </h1>
            <p className="text-gray-600 text-lg">
              {result.userName}님의 테토에겐 분석 결과예요! 🎭
            </p>
          </div>

          {/* 📝 상세 결과 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            {/* 📖 설명 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📖 상세 분석
              </h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {result.description}
              </div>
            </div>

            {/* 💕 잘 맞는 이성 유형 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                💕 잘 맞는 이성 유형
              </h2>
              <div className="flex flex-wrap gap-2">
                {result.compatibleTypes.map((type, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700 rounded-full font-medium border border-pink-200"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* 🔧 개선하면 좋은 점 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🔧 개선하면 좋은 점
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-gray-700">
                  {result.improvement}
                </p>
              </div>
            </div>

            {/* 🧠 MBTI 추정 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🧠 MBTI 추정
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  {result.mbti}
                </p>
              </div>
            </div>

            {/* 📊 확률 정보 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📊 이 유형의 확률
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-gray-700">
                  전체 테스트 응시자 중 약 <span className="font-bold text-green-600">{result.probability}%</span>가 이 유형으로 나왔어요!
                </p>
              </div>
            </div>
          </div>

          {/* 🎯 액션 버튼들 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => navigate('/tetogen')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              🔄 다시 테스트하기
            </button>
            
            <button
              onClick={() => setShowShareModal(true)}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all"
            >
              📤 결과 공유하기
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all"
            >
              🏠 처음으로
            </button>
          </div>

          {/* 💡 호르몬 정보 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              💡 호르몬 정보
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-700 mb-3">
                  🎭 테스토스테론 (Testosterone)
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  남성 호르몬으로, 자신감, 경쟁심, 리더십을 증가시키고 근육 발달과 에너지 수준을 높이는 역할을 해요. 공격성과 도전 정신도 관련이 있어요.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-pink-700 mb-3">
                  🌙 에스트로겐 (Estrogen)
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  여성 호르몬으로, 감정적 안정성, 소통 능력, 공감 능력을 향상시키고 창의력과 직감을 발달시키는 역할을 해요. 협력과 보호 본능도 관련이 있어요.
                </p>
              </div>
            </div>
          </div>

          {/* 🎨 다른 테스트 추천 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              🎨 다른 재미있는 테스트들
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => navigate('/cat-test')}
                className="p-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg hover:from-orange-200 hover:to-yellow-200 transition-all"
              >
                <div className="text-2xl mb-2">🐱</div>
                <div className="font-medium">고양이 MBTI</div>
              </button>
              <button
                onClick={() => navigate('/dinosaur-test')}
                className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg hover:from-green-200 hover:to-emerald-200 transition-all"
              >
                <div className="text-2xl mb-2">🦕</div>
                <div className="font-medium">공룡 MBTI</div>
              </button>
              <button
                onClick={() => navigate('/isekai')}
                className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg hover:from-purple-200 hover:to-pink-200 transition-all"
              >
                <div className="text-2xl mb-2">🌍</div>
                <div className="font-medium">이세계 테스트</div>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* 📤 공유 모달 */}
      {showShareModal && (
        <UnifiedShareModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          title={`${result.title} - 테토에겐 테스트 결과`}
          description={`${result.userName}님의 테토에겐 테스트 결과: ${result.title}`}
          url={window.location.href}
          testType="tetogen"
        />
      )}
      
      <Footer />
    </>
  );
} 