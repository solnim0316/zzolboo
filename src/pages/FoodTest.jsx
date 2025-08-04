// 🍽️ 오늘 뭐 먹지? 테스트 페이지
import React, { useState } from 'react';
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
        title: `오늘 뭐 먹지? 추천 메뉴: ${result.name}`,
        description: result.description,
        imageUrl: window.location.origin + '/images/thumbs/foodtest.png',
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
import { useNavigate } from 'react-router-dom';
import { foodTestData } from '../data/foodTestData';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import UnifiedShareModal from '../components/common/UnifiedShareModal';


export default function FoodTest() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [testStarted, setTestStarted] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

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
      
      // Google Analytics 이벤트 추적
      if (typeof gtag !== 'undefined') {
        gtag('event', 'test_result_viewed', {
          test_name: 'food-test'
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
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
              120가지 다양한 음식 중 오늘의 메뉴를 추천받아보세요!
            </p>
            <button
              onClick={startTest}
              className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all duration-200 shadow-md"
            >
              테스트 시작하기
            </button>
            <button
              onClick={() => navigate('/')}
              className="mt-4 text-blue-400 hover:text-purple-500 text-sm font-semibold"
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Header />
        <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-200px)]">
          <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-6xl mb-4">{result.emoji || '🍽️'}</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">추천 메뉴</h1>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-blue-500 mb-2">{result.name}</h2>
              <p className="text-gray-600 leading-relaxed">{result.description}</p>
            </div>
            {/* 공유하기 버튼 */}
            <div className="mb-8 flex justify-center">
              <button
                onClick={() => setShareModalOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-200 shadow-md"
              >
                📤 공유하기
              </button>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={restartTest}
                className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-200 shadow-md"
              >
                다시 테스트하기
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-gray-300 text-blue-700 rounded-xl font-semibold hover:bg-blue-100 transition-all duration-200 shadow-md"
              >
                홈으로 가기
              </button>
            </div>
          </div>
        </div>
        <Footer />
        
        {/* 통일된 공유 모달 */}
        <UnifiedShareModal
          isOpen={shareModalOpen}
          onClose={() => setShareModalOpen(false)}
          result={{
            title: result?.name || '음식',
            catchphrase: result?.description || '나의 음식 취향을 확인해보세요!'
          }}
          testType="food"
        />
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
            <div className="flex justify-between text-sm text-blue-500 mb-2">
              <span>질문 {currentQuestionIndex + 1} / {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-blue-100 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* 질문 */}
          <h2 className="text-xl font-bold text-blue-700 mb-6 text-center">
            {currentQuestion.question}
          </h2>

          {/* 선택지 */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(option)}
                className="w-full p-4 text-left bg-blue-50 hover:bg-purple-50 border border-blue-100 hover:border-purple-300 rounded-xl transition-all duration-200 hover:shadow-md"
              >
                <span className="font-medium text-blue-700">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}