import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SocialShare from '@/components/common/SocialShare';
import { loveHabitTestData } from '@/data/loveHabitTestData';

export default function LoveHabitTestResult() {
  const { resultKey } = useParams();
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);

  const result = loveHabitTestData.results[resultKey];

  if (!result) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-lg text-subtext">결과를 찾을 수 없습니다.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleGoHome = () => {
    navigate('/');
  };

  const handleRetakeTest = () => {
    navigate('/love-habit-test');
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* 결과 카드 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          {/* 결과 제목 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              {result.title}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* 결과 설명 */}
          <div className="mb-8">
            <p className="text-lg leading-relaxed text-text whitespace-pre-line">
              {result.description}
            </p>
          </div>

          {/* 특징 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-text mb-4">💡 당신의 특징</h3>
            <ul className="space-y-2">
              {result.characteristics.map((characteristic, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-text">{characteristic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 조언 */}
          <div className="bg-highlight rounded-xl p-6">
            <h3 className="text-xl font-semibold text-text mb-3">💌 조언</h3>
            <p className="text-text leading-relaxed">
              {result.advice}
            </p>
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGoHome}
            className="px-8 py-3 bg-primary text-white rounded-xl hover:bg-opacity-90 transition-colors font-medium"
          >
            처음으로
          </button>
          <button
            onClick={handleRetakeTest}
            className="px-8 py-3 bg-secondary text-white rounded-xl hover:bg-opacity-90 transition-colors font-medium"
          >
            테스트 다시하기
          </button>
          <button
            onClick={handleShare}
            className="px-8 py-3 bg-highlight text-text rounded-xl hover:bg-opacity-80 transition-colors font-medium"
          >
            공유하기
          </button>
        </div>
      </main>

      {/* 공유 모달 */}
      {showShareModal && (
        <SocialShare
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          testType="love-habit"
          resultTitle={result.title}
          resultDescription={result.description}
        />
      )}

      <Footer />
    </div>
  );
} 