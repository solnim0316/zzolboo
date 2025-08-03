import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { dramaTestData, calculateDramaResult } from '@/data/dramaTestData';

export default function DramaTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < dramaTestData.questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      // 테스트 완료
      setLoading(true);
      setTimeout(() => {
        const resultKey = calculateDramaResult(newAnswers);
        setLoading(false);
        navigate(`/drama-result/${resultKey}`);
      }, 1500);
    }
  };

  const navigate = useNavigate();

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 flex items-center justify-center">
          <div className="text-center">
            <LoadingSpinner />
            <p className="mt-4 text-lg text-gray-700">드라마 주인공 분석 중...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const question = dramaTestData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / dramaTestData.questions.length) * 100;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* 진행률 바 */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">진행률</span>
              <span className="text-sm text-gray-600">{currentQuestion + 1} / {dramaTestData.questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* 질문 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {dramaTestData.emoji} {dramaTestData.title}
              </h1>
              <p className="text-gray-600">{dramaTestData.description}</p>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Q{question.id}. {question.question}
              </h2>
            </div>

            {/* 답변 선택지 */}
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className="w-full p-4 text-left bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 border-2 border-transparent hover:border-pink-300 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {String.fromCharCode(65 + index)}. {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 하단 안내 */}
          <div className="text-center text-gray-600">
            <p>마음에 드는 답을 선택해주세요!</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 