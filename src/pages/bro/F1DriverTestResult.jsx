// 🏎️ F1 드라이버 테스트 결과 페이지
import { useParams, useNavigate } from 'react-router-dom';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from 'react';
import { f1DriverTestData } from '@/data/f1DriverTestData';
import UnifiedShareModal from '@/components/common/UnifiedShareModal';
import F1CarIcon from '@/components/F1CarIcon';
import F1TeamLogo from '@/components/F1TeamLogo';

export default function F1DriverTestResult() {
  const { resultKey } = useParams();
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);

  const { results } = f1DriverTestData;
  const result = results[resultKey] || results.max_verstappen;

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-red-200">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🏎️</div>
              <h1 className="text-3xl font-bold text-[#DC2626] mb-4">
                F1 선수가 되어버렸다!
              </h1>
              <p className="text-lg text-gray-600">
                당신의 F1 드라이버 스타일을 확인해보세요!
              </p>
            </div>

                         {/* F1 팀 로고 */}
             <div className="text-center mb-8">
               <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
                 <div className="mb-4">
                   <F1TeamLogo 
                     teamType={result.teamType} 
                     className="w-24 h-24 mx-auto"
                   />
                 </div>
                 <p className="text-sm text-gray-600 mt-4">
                   🏎️ F1 World Championship
                 </p>
               </div>
             </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-8 border border-red-200">
              <h2 className="text-2xl font-bold text-center mb-4 text-[#DC2626]">
                {result.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {result.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#DC2626] mb-3">🏎️ 드라이버 특징</h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {result.characteristics}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#DC2626] mb-3">💡 드라이버 라이프스타일</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {result.lifestyle}
                  </p>
                </div>
              </div>
              {/* 어울리는 차 정보 */}
              <div className="mt-8 text-center">
                <h3 className="text-lg font-semibold text-[#DC2626] mb-4">🚗 나에게 어울리는 F1 머신</h3>
                <div className="mb-4">
                  <div className="w-full max-w-md mx-auto bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 border-2 border-red-200 shadow-lg">
                    <F1CarIcon 
                      carType={result.carType} 
                      className="w-full h-32 mx-auto"
                    />
                  </div>
                </div>
                <div className="text-xl text-gray-800 font-bold">{result.car}</div>
              </div>
            </div>

            {/* 공유 버튼들 */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setShowShareModal(true)}
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                📤 결과 공유하기
              </button>
              <button
                onClick={() => navigate('/bro/f1-driver')}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                🔄 다시 테스트하기
              </button>
              <button
                onClick={() => navigate('/bro')}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                🏠 홈으로 돌아가기
              </button>
            </div>

            {/* F1 소개 */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-[#DC2626] mb-4 text-center">
                🏎️ F1 월드 챔피언십 소개
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">🏁 최고의 레이싱</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 세계 최고의 자동차 경주</li>
                    <li>• 최첨단 기술과 엔지니어링</li>
                    <li>• 전 세계 팬들의 열정</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">🏆 챔피언십</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 드라이버 챔피언십</li>
                    <li>• 컨스트럭터 챔피언십</li>
                    <li>• 매년 새로운 도전</li>
                  </ul>
                </div>
              </div>

              {/* F1 안내 */}
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800 text-center">
                  🏎️ <strong>F1의 세계!</strong> 당신만의 드라이버 스타일을 확인해보세요! 🏁
                </p>
              </div>

              {/* 추가 정보 */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  💡 F1에 대해 더 알고 싶다면 공식 사이트를 방문해보세요!
                </p>
                <div className="text-center mt-2">
                  <a 
                    href="https://www.formula1.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-600 font-medium text-sm inline-block"
                  >
                    🌐 F1 공식 웹사이트
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 통일된 공유 모달 */}
      <UnifiedShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        result={{
          title: result?.title || 'F1 드라이버',
          catchphrase: result?.description || '당신의 F1 드라이버 스타일을 확인해보세요!'
        }}
        testType="f1-driver"
      />

      <Footer />
    </>
  );
} 