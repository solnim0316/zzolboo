// 👩‍👧‍👦 우리 엄마 MBTI 테스트 플레이어
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { familyMbtiTestData, calculateMBTIResult } from '../data/familyMbtiTestData';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function FamilyMbtiTest() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const { questions } = familyMbtiTestData;
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (selectedType) => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newAnswers = [...answers, selectedType];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setIsAnimating(false);
      } else {
        // 테스트 완료 - 결과 계산
        const mbtiResult = calculateMBTIResult(newAnswers);
        navigate(`/family-mbti-result/${mbtiResult}`);
      }
    }, 500);
  };

  const currentQ = questions[currentQuestion];

  return (
    <>
      <Header />
      
      <main className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          
          {/* 🎯 헤더 섹션 */}
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-pulse">👩‍👧‍👦</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              우리 엄마 MBTI 테스트
            </h1>
            <p className="text-gray-600 text-lg mb-2">
              내가 생각하는 우리 엄마는 어떤 성격일까요?
            </p>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 inline-block">
              <p className="text-yellow-800 font-medium text-sm">
                💡 평소 엄마의 모습을 떠올리며 답해주세요!
              </p>
            </div>
          </div>

          {/* 📊 진행도 바 */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-700">
                  질문 {currentQuestion + 1}
                </span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-500">{questions.length}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">진행률</span>
                <span className="text-lg font-bold text-pink-600">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
              <div className="relative">
                <div 
                  className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 h-4 rounded-full transition-all duration-700 ease-out shadow-lg"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
                <div className="absolute inset-0 bg-white opacity-30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* ❓ 질문 카드 */}
          <div className={`bg-white rounded-3xl shadow-2xl border-4 border-pink-200 overflow-hidden mb-8 transition-all duration-500 ${
            isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}>
            
            {/* 질문 헤더 */}
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 border-b-2 border-pink-200">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-3xl">🤔</span>
                <h2 className="text-xl font-bold text-gray-800">
                  엄마에 대해 생각해보세요
                </h2>
              </div>
            </div>

            {/* 질문 내용 */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
                {currentQ.question}
              </h3>

              <div className="grid gap-4">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.type)}
                    disabled={isAnimating}
                    className="group w-full p-6 text-left bg-gradient-to-r from-gray-50 to-blue-50 hover:from-pink-50 hover:to-purple-50 rounded-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-300 disabled:opacity-50 transform hover:scale-102 hover:shadow-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-gray-700 font-medium text-lg leading-relaxed">
                        {option.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 🔙 이전 버튼 및 도움말 */}
          <div className="flex flex-col items-center space-y-6">
            {currentQuestion > 0 && (
              <button
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1);
                  setAnswers(answers.slice(0, -1));
                }}
                disabled={isAnimating}
                className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 bg-white rounded-xl shadow-md hover:shadow-lg"
              >
                <span className="text-xl">←</span>
                <span className="font-medium">이전 질문으로</span>
              </button>
            )}

            {/* 💡 도움말 카드 */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6 max-w-2xl">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">테스트 팁!</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• 너무 깊게 생각하지 마시고 첫 번째 떠오르는 답을 선택해주세요</li>
                    <li>• 평소 엄마의 모습과 가장 비슷한 것을 골라주세요</li>
                    <li>• 완벽하게 맞지 않아도 가장 가까운 것을 선택하면 됩니다</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
