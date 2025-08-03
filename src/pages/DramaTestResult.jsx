import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SocialShare from '@/components/common/SocialShare';
import { dramaTestData } from '@/data/dramaTestData';

export default function DramaTestResult() {
  const { resultKey } = useParams();
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);

  const result = dramaTestData.results[resultKey];

  if (!result) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">결과를 찾을 수 없습니다</h1>
            <button 
              onClick={() => navigate('/drama-test')}
              className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
            >
              테스트 다시하기
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* 결과 카드 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            {/* 결과 헤더 */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{result.title.split(' ')[0]}</div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{result.title}</h1>
              <p className="text-xl text-pink-600 font-semibold mb-2">{result.subtitle}</p>
              <p className="text-lg text-gray-600 italic">"{result.description}"</p>
            </div>

            {/* 상세 설명 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">📺 당신의 드라마 스토리</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{result.detail}</p>
            </div>

            {/* 특징 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">🎭 주요 특징</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.characteristics.map((characteristic, index) => (
                  <div key={index} className="flex items-center p-3 bg-pink-50 rounded-lg">
                    <span className="text-pink-500 mr-3">✨</span>
                    <span className="text-gray-700">{characteristic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 조언 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">💡 조언</h2>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border-l-4 border-pink-500">
                <p className="text-gray-700 text-lg">{result.advice}</p>
              </div>
            </div>

            {/* 라이벌 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">⚔️ 내 사랑의 라이벌</h2>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{result.rival.split(' ')[0]}</span>
                  <span className="text-lg font-semibold text-gray-800">{result.rival}</span>
                </div>
                <p className="text-gray-700">{result.rivalReason}</p>
              </div>
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => navigate('/')}
              className="bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
            >
              🏠 처음으로
            </button>
            <button
              onClick={() => navigate('/drama-test')}
              className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors font-semibold"
            >
              🔄 테스트 다시하기
            </button>
            <button
              onClick={() => setShowShareModal(true)}
              className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
            >
              📤 공유하기
            </button>
          </div>

          {/* 다른 테스트 추천 */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🎬 다른 드라마 주인공들도 확인해보세요!
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(dramaTestData.results).map(([key, resultData]) => (
                <div
                  key={key}
                  className={`text-center p-4 rounded-lg cursor-pointer transition-all ${
                    key === resultKey
                      ? 'bg-pink-100 border-2 border-pink-500'
                      : 'bg-gray-50 hover:bg-pink-50 border-2 border-transparent hover:border-pink-300'
                  }`}
                  onClick={() => navigate(`/drama-result/${key}`)}
                >
                  <div className="text-2xl mb-2">{resultData.title.split(' ')[0]}</div>
                  <div className="text-sm font-medium text-gray-700">{resultData.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* 공유 모달 */}
      {showShareModal && (
        <SocialShare
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          shareData={{
            title: `${result.title} - ${result.subtitle}`,
            description: result.description,
            url: window.location.href,
            testType: 'drama'
          }}
        />
      )}
      <Footer />
    </>
  );
} 