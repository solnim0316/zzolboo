// 🏎️ F1 드라이버 테스트 페이지
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { f1DriverTestData } from '@/data/f1DriverTestData';

export default function F1DriverTest() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { questions } = f1DriverTestData;

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    setIsLoading(true);
    
    const scores = {
      aggressive: 0,
      bold: 0,
      risky: 0,
      safe: 0,
      patient: 0,
      careful: 0,
      team: 0,
      cooperative: 0,
      analytical: 0,
      experimental: 0,
      innovative: 0,
      creative: 0,
      strategic: 0,
      opportunistic: 0,
      obedient: 0,
      smart: 0,
      tactical: 0,
      ambitious: 0,
      emotional: 0,
      passionate: 0,
      calm: 0,
      focused: 0,
      professional: 0,
      supportive: 0,
      positive: 0,
      adventurous: 0,
      social: 0,
      grateful: 0,
      friendly: 0,
      technical: 0,
      competitive: 0,
      family: 0,
      relaxed: 0,
      disciplined: 0,
      consistent: 0,
      reliable: 0
    };

    Object.entries(answers).forEach(([questionId, optionIndex]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const option = question.options[optionIndex];
      
      Object.entries(option.score).forEach(([category, score]) => {
        scores[category] += score;
      });
    });

    // 결과 결정 (12개 결과지)
    let resultKey = 'max_verstappen'; // 기본값

    // 점수 기반으로 결과 결정
    const categories = {
      aggressive: scores.aggressive + scores.bold + scores.risky + scores.competitive,
      strategic: scores.strategic + scores.analytical + scores.careful + scores.patient,
      team: scores.team + scores.cooperative + scores.social + scores.friendly,
      technical: scores.technical + scores.focused + scores.professional + scores.disciplined,
      experimental: scores.experimental + scores.innovative + scores.creative + scores.adventurous,
      emotional: scores.emotional + scores.passionate + scores.positive + scores.grateful
    };

    // 점수별로 정렬
    const sortedCategories = Object.entries(categories)
      .sort(([,a], [,b]) => b - a);

    // 상위 카테고리 기반으로 결과 결정
    const topCategory = sortedCategories[0][0];

    if (topCategory === 'aggressive') {
      if (scores.aggressive >= 8) {
        resultKey = 'max_verstappen';
      } else if (scores.bold >= 8) {
        resultKey = 'charles_leclerc';
      } else {
        resultKey = 'george_russell';
      }
    } else if (topCategory === 'strategic') {
      if (scores.analytical >= 8) {
        resultKey = 'lewis_hamilton';
      } else if (scores.careful >= 8) {
        resultKey = 'carlos_sainz';
      } else {
        resultKey = 'fernando_alonso';
      }
    } else if (topCategory === 'team') {
      if (scores.cooperative >= 8) {
        resultKey = 'valtteri_bottas';
      } else if (scores.social >= 8) {
        resultKey = 'lando_norris';
      } else {
        resultKey = 'daniel_ricciardo';
      }
    } else if (topCategory === 'technical') {
      if (scores.technical >= 8) {
        resultKey = 'sebastian_vettel';
      } else if (scores.focused >= 8) {
        resultKey = 'kimi_raikkonen';
      } else {
        resultKey = 'oscar_piastri';
      }
    } else if (topCategory === 'experimental') {
      if (scores.experimental >= 8) {
        resultKey = 'oscar_piastri';
      } else if (scores.creative >= 8) {
        resultKey = 'charles_leclerc';
      } else {
        resultKey = 'george_russell';
      }
    } else if (topCategory === 'emotional') {
      if (scores.passionate >= 8) {
        resultKey = 'max_verstappen';
      } else if (scores.positive >= 8) {
        resultKey = 'daniel_ricciardo';
      } else {
        resultKey = 'lando_norris';
      }
    }

    setTimeout(() => {
      navigate(`/bro/f1-driver-result/${resultKey}`);
    }, 1500);
  };

  const currentQ = questions[currentQuestion];

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-red-200">
            {/* 헤더 */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🏎️</div>
              <h1 className="text-3xl font-bold text-[#DC2626] mb-4">
                F1 선수가 되어버렸다!
              </h1>
              <p className="text-lg text-gray-600">
                당신은 어떤 스타일의 F1 드라이버일까요?
              </p>
            </div>

            {/* 진행률 */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>진행률</span>
                <span>{currentQuestion + 1} / {questions.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* 로딩 화면 */}
            {isLoading && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🏎️</div>
                <h2 className="text-xl font-semibold text-[#DC2626] mb-2">
                  당신의 F1 드라이버 스타일 분석 중...
                </h2>
                <p className="text-gray-600">
                  최고의 드라이버와 매칭하고 있어요!
                </p>
              </div>
            )}

            {/* 질문 */}
            {!isLoading && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#DC2626] mb-6 text-center">
                  {currentQ.question}
                </h2>

                {/* 선택지 */}
                <div className="space-y-4">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(currentQ.id, index)}
                      className="w-full p-4 text-left bg-gradient-to-r from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 border border-red-200 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105"
                    >
                      <span className="text-lg text-[#DC2626] font-medium">
                        {option.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 하단 안내 */}
            {!isLoading && (
              <div className="text-center text-sm text-gray-500">
                <p>마음에 드는 답을 선택해주세요!</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 