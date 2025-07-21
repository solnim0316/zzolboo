// 🍽️ 오늘 뭐 먹지? 테스트 페이지
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { foodTestData } from '../data/foodTestData';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


export default function FoodTest() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [testStarted, setTestStarted] = useState(false);

  const { questions, getRecommendation } = foodTestData;
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  // 테스트 시작
  const startTest = () => {
    setTestStarted(true);
  };

  // 답변 선택
  const selectAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 테스트 완료 - 결과 계산
      const recommendation = getRecommendation(newAnswers);
      setResult(recommendation);
    }
  };

  // 다시 테스트하기
  const restartTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
    setTestStarted(false);
  };

  // 시작 화면
  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
        <Header />
        <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-200px)]">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-6xl mb-4">🍽️</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              오늘 뭐 먹지?
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              음식 추천 테스트
            </p>
            <p className="text-sm text-gray-500 mb-6">
              80가지 한국 음식 중 오늘의 메뉴를 추천받아보세요!
            </p>
            
            <button
              onClick={startTest}
              className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-lg transition-all duration-200"
            >
              테스트 시작하기
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
            >
              ← 홈으로 돌아가기
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // 결과 화면
  if (result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <Header />
        <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-200px)]">
          <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-6xl mb-4">{result.emoji || '🍽️'}</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">추천 메뉴</h1>
            

            <div className="mb-6">
              <h2 className="text-3xl font-bold text-orange-600 mb-2">{result.name}</h2>
              <p className="text-gray-600 leading-relaxed">{result.description}</p>
            </div>

            {/* 공유하기 버튼 */}
            <div className="mb-8 flex justify-center">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('링크가 복사되었습니다!');
                }}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
              >
                📤 공유하기
              </button>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={restartTest}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
              >
                다시 테스트하기
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all duration-200"
              >
                홈으로 가기
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // 질문 화면
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-200px)]">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8">
          {/* 진행도 바 */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>질문 {currentQuestionIndex + 1} / {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* 질문 */}
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
            {currentQuestion.question}
          </h2>

          {/* 선택지 */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(option)}
                className="w-full p-4 text-left bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg transition-all duration-200 hover:shadow-md"
              >
                <span className="font-medium text-gray-800">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}