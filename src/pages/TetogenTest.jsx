// 🎭 테토에겐 테스트 페이지
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { tetogenTestData, calculateTetogenResult } from '@/data/tetogenTestData';

export default function TetogenTest() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState('info'); // 'info', 'test', 'result'
  const [userInfo, setUserInfo] = useState({ name: '', gender: '' });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 📝 사용자 정보 입력 처리
  const handleInfoSubmit = (e) => {
    e.preventDefault();
    if (userInfo.name.trim() && userInfo.gender) {
      setCurrentStep('test');
    }
  };

  // ❓ 답변 선택 처리
  const handleAnswerSelect = (selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = {
      questionId: tetogenTestData.questions[currentQuestion].id,
      selectedOption: selectedOption
    };
    setAnswers(newAnswers);

    // 다음 질문으로 이동
    if (currentQuestion < tetogenTestData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 테스트 완료
      setIsLoading(true);
      setTimeout(() => {
        const resultType = calculateTetogenResult(newAnswers, userInfo);
        const resultKey = `${resultType}-${userInfo.name}`;
        navigate(`/tetogen-result/${resultKey}`);
      }, 1000);
    }
  };

  // 🔄 이전 질문으로 돌아가기
  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // 📊 진행률 계산
  const progress = ((currentQuestion + 1) / tetogenTestData.questions.length) * 100;

  return (
    <>
      <Header />
      
      <main className="bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* 🎭 헤더 섹션 */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎭</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              테토에겐 테스트
            </h1>
            <p className="text-gray-600 text-lg">
              당신은 테토인가요, 에겐인가요? 🎭
            </p>
          </div>



          {/* 📝 사용자 정보 입력 */}
          {currentStep === 'info' && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  테스트를 시작하기 전에 🎯
                </h2>
                <p className="text-gray-600">
                  정확한 결과를 위해 이름과 성별을 알려주세요!
                </p>
              </div>
              
              <form onSubmit={handleInfoSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름을 입력해주세요 ✨
                  </label>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="이름을 입력하세요"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    성별을 선택해주세요 🎭
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setUserInfo({...userInfo, gender: 'male'})}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        userInfo.gender === 'male'
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">👨</div>
                      <div className="font-medium">남성</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserInfo({...userInfo, gender: 'female'})}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        userInfo.gender === 'female'
                          ? 'border-pink-500 bg-pink-50 text-pink-700'
                          : 'border-gray-300 hover:border-pink-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">👩</div>
                      <div className="font-medium">여성</div>
                    </button>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={!userInfo.name.trim() || !userInfo.gender}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  테스트 시작하기 🚀
                </button>
              </form>
            </div>
          )}

          {/* ❓ 테스트 질문 */}
          {currentStep === 'test' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* 📊 진행률 바 */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>진행률</span>
                  <span>{currentQuestion + 1} / {tetogenTestData.questions.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* ❓ 질문 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {tetogenTestData.questions[currentQuestion].question}
                </h2>
                
                {/* 📝 선택지 */}
                <div className="space-y-4">
                  {tetogenTestData.questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all"
                    >
                      <span className="text-lg">{option.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 🔄 이전 버튼 */}
              {currentQuestion > 0 && (
                <button
                  onClick={goToPreviousQuestion}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  ← 이전 질문
                </button>
              )}
            </div>
          )}

          {/* ⏳ 로딩 */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                결과를 분석하고 있어요...
              </h3>
              <p className="text-gray-600">
                잠시만 기다려주세요! ✨
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
} 