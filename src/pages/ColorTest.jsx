// 🎨 오늘 기분 색깔 테스트 페이지
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colorTestData } from '../data/colorTestData';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// 카카오톡 공유를 위한 스크립트 로드 및 함수
const loadKakaoScript = () => {
  const kakaoKey = import.meta.env.VITE_KAKAO_APP_KEY;
  if (!window.Kakao) {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js';
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(kakaoKey);
      }
    };
    document.body.appendChild(script);
  } else if (!window.Kakao.isInitialized()) {
    window.Kakao.init(kakaoKey);
  }
};

const shareKakao = (result) => {
  loadKakaoScript();
  if (window.Kakao && window.Kakao.Share) {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `오늘 기분 색깔: ${result.name}`,
        description: result.description,
        imageUrl: window.location.origin + '/images/thumbs/colortest.png',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '테스트 하러 가기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  } else {
    alert('카카오톡 공유를 불러올 수 없습니다.');
  }
};

export default function ColorTest() {
  const navigate = useNavigate();
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const { testInfo, questions, results } = colorTestData;

  // 기분 색깔 추천 알고리즘
  const getRecommendation = (userAnswers) => {
    const moodScores = {};
    
    userAnswers.forEach(answer => {
      if (!moodScores[answer]) {
        moodScores[answer] = 0;
      }
      moodScores[answer]++;
    });

    // 가장 많이 선택된 기분 타입 찾기
    const topMoodType = Object.keys(moodScores).reduce((a, b) => 
      moodScores[a] > moodScores[b] ? a : b
    );

    // 해당 기분과 매칭되는 결과 찾기
    let matchedResult = results.find(result => 
      result.tags.includes(topMoodType)
    );

    // 매칭되는 결과가 없으면 랜덤하게 선택
    if (!matchedResult) {
      matchedResult = results[Math.floor(Math.random() * results.length)];
    }

    return matchedResult;
  };

  const selectAnswer = (answerType) => {
    const newAnswers = [...answers, answerType];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 테스트 완료 - 결과 계산
      const recommendation = getRecommendation(newAnswers);
      setResult(recommendation);
      
      // Google Analytics 이벤트 추적
      if (typeof gtag !== 'undefined') {
        gtag('event', 'test_result_viewed', {
          test_name: 'color-test'
        });
      }
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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Header />
        <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-200px)]">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-6xl mb-4">{testInfo.emoji}</div>
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              {testInfo.title}
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {testInfo.subtitle}
            </p>
            <button
              onClick={() => setTestStarted(true)}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              테스트 시작하기
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
      <div className={`min-h-screen bg-gradient-to-br ${result.gradient}`}>
        <Header />
        <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-200px)]">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{result.emoji}</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {result.name}
              </h2>
              
              {/* 색상 샘플 */}
              <div className="flex justify-center mb-6">
                <div 
                  className="w-20 h-20 rounded-full shadow-lg border-4 border-white"
                  style={{ backgroundColor: result.color }}
                ></div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {result.description}
              </p>
              
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  💭 지금의 기분
                </h3>
                <p className="text-gray-700 font-medium mb-4">
                  {result.mood}
                </p>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 mb-2">🌟 오늘의 추천:</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {result.advice}
                  </p>
                  <h4 className="font-semibold text-gray-800 mb-2">👤 성격 특성:</h4>
                  <p className="text-sm text-gray-600">
                    {result.personality}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {result.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white bg-opacity-70 text-gray-700 rounded-full text-sm font-medium border"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex-1 bg-gray-500 text-white py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
              >
                🏠 홈으로
              </button>
              <button
                onClick={restartTest}
                className="flex-1 bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition-colors"
              >
                🔄 다시 테스트
              </button>
              <button
                onClick={() => setShareModalOpen(true)}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                📤 공유하기
              </button>
            </div>
          </div>
        </div>

        {/* 공유 모달 */}
        {shareModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
              <h3 className="text-lg font-bold mb-4">공유 방법 선택</h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('링크가 복사되었습니다!');
                    setShareModalOpen(false);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-blue-700 transition-all duration-200"
                >
                  🔗 링크 복사하기
                </button>
                <button
                  onClick={() => {
                    shareKakao(result);
                    setShareModalOpen(false);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200"
                >
                  💬 카카오톡 공유
                </button>
                <button
                  onClick={() => setShareModalOpen(false)}
                  className="w-full py-3 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition-colors"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
  }

  // 질문 화면
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-200px)]">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                {currentQuestionIndex + 1} / {questions.length}
              </span>
              <span className="text-sm text-gray-600">
                {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h2 className="text-xl font-bold mb-8 text-center text-gray-800">
            {questions[currentQuestionIndex].question}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(option.type)}
                className="w-full p-4 text-left bg-gray-50 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 rounded-xl transition-all border border-gray-200 hover:border-purple-300 hover:shadow-md"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
