// 📈 주식 투자자 테스트 결과 페이지
import { useParams, useNavigate } from 'react-router-dom';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from 'react';
import { stockInvestorTestData } from '@/data/stockInvestorTestData';
import UnifiedShareModal from '@/components/common/UnifiedShareModal';

export default function StockInvestorTestResult() {
  const { resultKey } = useParams();
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);

  const { results } = stockInvestorTestData;
  const result = results[resultKey] || results.warren_buffett;

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-200">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">📈</div>
              <h1 className="text-3xl font-bold text-[#059669] mb-4">
                갑자기 주식이 떡락했다. 나의 선택은?
              </h1>
              <p className="text-lg text-gray-600">
                당신의 투자 스타일을 확인해보세요!
              </p>
            </div>

            {/* 주식 차트 이미지 */}
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
                <div className="text-8xl mb-4">📊</div>
                <p className="text-sm text-gray-600 mt-4">
                  📈 Stock Market Analysis
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8 border border-green-200">
              <h2 className="text-2xl font-bold text-center mb-4 text-[#059669]">
                {result.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {result.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#059669] mb-3">📈 투자자 특징</h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {result.characteristics}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#059669] mb-3">💡 투자 라이프스타일</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {result.lifestyle}
                  </p>
                </div>
              </div>
            </div>

            {/* 공유 버튼들 */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setShowShareModal(true)}
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                📤 결과 공유하기
              </button>
              <button
                onClick={() => navigate('/bro/stock-investor')}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                🔄 다시 테스트하기
              </button>
              <button
                onClick={() => navigate('/bro')}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                🏠 홈으로 돌아가기
              </button>
            </div>

            {/* 투자 소개 */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-[#059669] mb-4 text-center">
                📈 투자 세계 소개
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">💰 투자의 세계</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 다양한 투자 전략</li>
                    <li>• 리스크 관리의 중요성</li>
                    <li>• 장기적 관점의 중요성</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">📊 시장 분석</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 기술적 분석</li>
                    <li>• 기본적 분석</li>
                    <li>• 심리적 분석</li>
                  </ul>
                </div>
              </div>

              {/* 투자 안내 */}
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800 text-center">
                  📈 <strong>투자의 세계!</strong> 당신만의 투자 스타일을 확인해보세요! 💰
                </p>
              </div>

              {/* 추가 정보 */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  💡 투자에 대해 더 알고 싶다면 전문가의 조언을 받아보세요!
                </p>
                <div className="text-center mt-2">
                  <a 
                    href="https://www.krx.co.kr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600 font-medium text-sm inline-block"
                  >
                    🌐 한국거래소
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
          title: result?.title || '투자자',
          catchphrase: result?.description || '당신의 투자 스타일을 확인해보세요!'
        }}
        testType="stock-investor"
      />

      <Footer />
    </>
  );
} 