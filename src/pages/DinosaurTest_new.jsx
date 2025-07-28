// 🦕 공룡 MBTI 테스트 페이지
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dinosaurTestData } from '@/data/dinosaurTestData';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ImageGeneratorComponent from '@/components/common/ImageGeneratorComponent';
import SocialShare from '@/components/common/SocialShare';

export default function DinosaurTest() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState('intro'); // 'intro', 'test', 'result'
  const [userName, setUserName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [result, setResult] = useState(null);

  const { testInfo, questions, results } = dinosaurTestData;

  // 🎯 테스트 시작
  const startTest = () => {
    if (!userName.trim()) {
      alert('이름을 입력해주세요!');
      return;
    }
    setCurrentStep('test');
  };

  // 📝 답변 선택
  const selectAnswer = (optionType) => {
    const newScores = { ...scores };
    newScores[optionType]++;
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newScores);
    }
  };

  // 🧮 MBTI 계산
  const calculateMBTI = (finalScores) => {
    // 완벽한 균형 체크
    if (
      finalScores.E === finalScores.I &&
      finalScores.S === finalScores.N &&
      finalScores.T === finalScores.F &&
      finalScores.J === finalScores.P
    ) {
      return "???";
    }

    return (
      (finalScores.E >= finalScores.I ? "E" : "I") +
      (finalScores.S >= finalScores.N ? "S" : "N") +
      (finalScores.T >= finalScores.F ? "T" : "F") +
      (finalScores.J >= finalScores.P ? "J" : "P")
    );
  };

  // 🎯 결과 계산
  const calculateResult = (finalScores) => {
    const mbtiType = calculateMBTI(finalScores);
    const resultData = results[mbtiType];
    
    setResult({ ...resultData, MBTI: mbtiType });
    setCurrentStep('result');
    
    // Google Analytics 이벤트 추적
    if (typeof gtag !== 'undefined') {
      gtag('event', 'test_result_viewed', {
        test_name: 'dinosaur-test'
      });
    }
  };

  // 🔄 테스트 재시작
  const restartTest = () => {
    setCurrentStep('intro');
    setUserName('');
    setCurrentQuestion(0);
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setResult(null);
  };

  // 🏠 홈으로 가기
  const goHome = () => {
    navigate('/');
  };

  // 📊 진행률 계산
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen">
        
        {/* 🎯 시작 화면 */}
        {currentStep === 'intro' && (
          <div className="flex flex-col items-center pt-8 px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
              <div className="text-6xl mb-6">{testInfo.emoji}</div>
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                {testInfo.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {testInfo.subtitle}
              </p>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="이름을 입력하세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-6 text-center focus:outline-none focus:ring-2 focus:ring-primary"
                onKeyPress={(e) => e.key === 'Enter' && startTest()}
              />
              <button
                onClick={startTest}
                className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
              >
                테스트 시작하기
              </button>
            </div>
          </div>
        )}

        {/* ❓ 테스트 진행 화면 */}
        {currentStep === 'test' && (
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
              
              {/* 📊 진행률 표시 */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">
                    {currentQuestion + 1} / {questions.length}
                  </span>
                  <span className="text-sm text-gray-600">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* 💭 질문 */}
              <h3 className="text-xl font-bold mb-8 text-center text-gray-800">
                {questions[currentQuestion].question}
              </h3>

              {/* 📝 선택지 */}
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(option.type)}
                    className="w-full p-4 text-left bg-gray-50 hover:bg-primary/10 rounded-xl transition-colors border border-gray-200 hover:border-primary"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 🎊 결과 화면 */}
        {currentStep === 'result' && result && (
          <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
            <div className="max-w-2xl w-full space-y-8">
              
              {/* 결과 카드 */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
                <div className="text-6xl mb-6">🦕</div>
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                  {result.dinosaur}
                </h1>
                <div className="bg-primary text-white px-4 py-2 rounded-lg inline-block mb-6 font-bold">
                  {result.MBTI}
                </div>
                <div className="space-y-4 text-left">
                  {result.desc.map((desc, index) => (
                    <p key={index} className="text-gray-700">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

              {/* 버튼 영역 */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={restartTest}
                  className="bg-gray-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-600 transition-colors"
                >
                  다시 테스트
                </button>
                <button
                  onClick={goHome}
                  className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
                >
                  홈으로 가기
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}
