// 📺 넷플릭스로 뭐 보지? 실제 작품 추천 테스트 페이지
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { movieTestData } from '../data/movieTestDataNew';
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
        title: `넷플릭스 추천: ${result.title} (${result.year})`,
        description: `평점 ${result.rating}/10 ⭐ ${result.genre} | ${result.type}`,
        imageUrl: window.location.origin + '/images/thumbs/movietest.png',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하기',
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

export default function MovieTest() {
  const navigate = useNavigate();
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const { testInfo, questions, getRecommendation } = movieTestData;

  // 넷플릭스 작품 추천 알고리즘
  const getMovieRecommendation = (userAnswers) => {
    return getRecommendation(userAnswers);
  };

  const selectAnswer = (answerType) => {
    const newAnswers = [...answers, answerType];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 테스트 완료 - 결과 계산
      const recommendation = getMovieRecommendation(newAnswers);
      setResult(recommendation.primaryRecommendation);
      
      // Google Analytics 이벤트 추적
      if (typeof gtag !== 'undefined') {
        gtag('event', 'test_result_viewed', {
          test_name: 'netflix-test',
          recommended_title: recommendation.primaryRecommendation.title
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
      <div className="min-h-screen bg-[#141414]">
        <Header />
        <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-200px)]">
          <div className="max-w-md w-full bg-[#181818] rounded-2xl shadow-xl p-8 text-center">
            <div className="text-6xl mb-4">{testInfo.emoji}</div>
            <h1 className="text-2xl font-bold mb-4 text-white">
              {testInfo.title}
            </h1>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {testInfo.subtitle}
            </p>
            <button
              onClick={() => setTestStarted(true)}
              className="w-full bg-[#E50914] text-white py-4 rounded-xl font-bold hover:bg-[#B0060F] transition-all transform hover:scale-105 shadow-lg text-lg"
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
      <div className="min-h-screen bg-[#141414]">
        <Header />
        <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-200px)]">
          <div className="max-w-2xl w-full bg-[#181818] rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">📺</div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {result.title}
              </h2>
              <p className="text-lg text-[#E50914] mb-2">
                {result.year} • {result.type === 'series' ? '시리즈' : '영화'} • {result.genre}
              </p>
              <div className="flex items-center justify-center mb-4">
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="text-lg font-semibold ml-1 text-white">{result.rating}/10</span>
              </div>

              <div className="bg-[#232323] rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  🎬 왜 이 작품인가요?
                </h3>
                <div className="text-sm text-gray-300">
                  {result.matchReasons && result.matchReasons.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1">
                      {result.matchReasons.map((reason, index) => (
                        <li key={index}>{reason}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>당신의 취향에 맞춰 선별된 작품입니다!</p>
                  )}
                </div>
              </div>

              {result.synopsis && (
                <div className="bg-[#222] rounded-xl p-4 mb-6">
                  <h3 className="text-md font-semibold text-white mb-2">
                    📖 줄거리
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {result.synopsis}
                  </p>
                </div>
              )}

              {result.funnyReview && (
                <div className="bg-[#222] rounded-xl p-4 mb-6">
                  <h3 className="text-md font-semibold text-white mb-2">
                    😄 한줄평
                  </h3>
                  <p className="text-sm text-gray-300 italic">
                    "{result.funnyReview}"
                  </p>
                </div>
              )}

              <div className="bg-[#232323] rounded-xl p-4 mb-6">
                <h3 className="text-md font-semibold text-white mb-2">
                  🏷️ 작품 특징
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {result.tags && result.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#E50914] text-white rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex-1 bg-[#232323] text-white py-3 rounded-xl font-semibold hover:bg-[#333] transition-colors"
              >
                🏠 홈으로
              </button>
              <button
                onClick={restartTest}
                className="flex-1 bg-[#E50914] text-white py-3 rounded-xl font-semibold hover:bg-[#B0060F] transition-colors"
              >
                🔄 다시 테스트
              </button>
              <button
                onClick={() => setShareModalOpen(true)}
                className="flex-1 bg-white text-[#E50914] py-3 rounded-xl font-semibold border border-[#E50914] hover:bg-[#E50914] hover:text-white transition-all"
              >
                📤 공유하기
              </button>
            </div>
          </div>
        </div>

        {/* 공유 모달 */}
        {shareModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#181818] rounded-2xl p-6 max-w-sm w-full">
              <h3 className="text-lg font-bold mb-4 text-white">공유 방법 선택</h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('링크가 복사되었습니다!');
                    setShareModalOpen(false);
                  }}
                  className="w-full py-3 bg-[#E50914] text-white rounded-lg font-semibold hover:bg-[#B0060F] transition-all duration-200"
                >
                  🔗 링크 복사하기
                </button>
                <button
                  onClick={() => {
                    shareKakao(result);
                    setShareModalOpen(false);
                  }}
                  className="w-full py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-200"
                >
                  💬 카카오톡 공유
                </button>
                <button
                  onClick={() => setShareModalOpen(false)}
                  className="w-full py-3 bg-[#232323] text-white rounded-lg font-semibold hover:bg-[#333] transition-colors"
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
    <div className="min-h-screen bg-[#141414]">
      <Header />
      <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-200px)]">
        <div className="max-w-2xl w-full bg-[#181818] rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">
                {currentQuestionIndex + 1} / {questions.length}
              </span>
              <span className="text-sm text-gray-400">
                {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-[#232323] rounded-full h-2">
              <div 
                className="bg-[#E50914] h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h2 className="text-xl font-bold mb-8 text-center text-white">
            {questions[currentQuestionIndex].question}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(option.type)}
                className="w-full p-4 text-left bg-[#232323] hover:bg-[#E50914] hover:text-white rounded-xl transition-all border border-[#232323] hover:border-[#E50914] hover:shadow-md text-gray-200 font-semibold"
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
