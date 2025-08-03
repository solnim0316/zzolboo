import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { loveHabitTestData, calculateLoveHabitResult } from '@/data/loveHabitTestData';

export default function LoveHabitTest() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (currentQuestion < loveHabitTestData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 테스트 완료
      setIsLoading(true);
      
      // 결과 계산
      const resultKey = calculateLoveHabitResult(newAnswers);
      
      // 잠시 후 결과 페이지로 이동
      setTimeout(() => {
        navigate(`/love-habit-result/${resultKey}`);
      }, 1500);
    }
  };

  const currentQuestionData = loveHabitTestData.questions[currentQuestion];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <LoadingSpinner />
            <p className="mt-4 text-lg text-subtext">결과를 분석하고 있어요...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* 진행률 표시 */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-subtext">
              {currentQuestion + 1} / {loveHabitTestData.questions.length}
            </span>
            <span className="text-sm text-subtext">
              {Math.round(((currentQuestion + 1) / loveHabitTestData.questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / loveHabitTestData.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* 질문 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-text mb-4">
            {loveHabitTestData.emoji} {loveHabitTestData.title}
          </h1>
          <p className="text-lg text-subtext mb-8">
            {loveHabitTestData.description}
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-text mb-8">
              {currentQuestionData.question}
            </h2>
            
            {/* 선택지 */}
            <div className="space-y-4">
              {currentQuestionData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left bg-highlight hover:bg-primary hover:text-white rounded-xl transition-all duration-200 border-2 border-transparent hover:border-primary"
                >
                  <span className="text-lg font-medium">{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 이전 질문으로 돌아가기 */}
        {currentQuestion > 0 && (
          <div className="text-center">
            <Button
              onClick={() => {
                setCurrentQuestion(currentQuestion - 1);
                setAnswers(answers.slice(0, -1));
              }}
              variant="secondary"
              className="px-6 py-2"
            >
              이전 질문
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
} 