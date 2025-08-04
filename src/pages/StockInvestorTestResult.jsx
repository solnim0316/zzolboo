// 📈 주식 투자자 테스트 결과 페이지 (메인 채널)
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
                onClick={() => navigate('/stock-investor')}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                🔄 다시 테스트하기
              </button>
              <button
                onClick={() => navigate('/')}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                🏠 처음으로
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
                    <li>• 감정 컨트롤의 필요성</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">📊 투자자 유형</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 보수적 투자자</li>
                    <li>• 공격적 투자자</li>
                    <li>• 가치 투자자</li>
                    <li>• 성장 투자자</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 추가 정보 */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                💡 이 테스트는 재미를 위한 것이며, 실제 투자 결정에는 전문가의 조언을 구하세요.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* 공유 모달 */}
      {showShareModal && (
        <UnifiedShareModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          shareData={{
            title: `주식 투자자 테스트: ${result.title}`,
            description: result.description,
            url: window.location.href,
            imageUrl: window.location.origin + '/images/thumbs/stocktest.png'
          }}
        />
      )}
    </>
  );
} 