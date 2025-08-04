// 💪 운동메이트 테스트 페이지
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { workoutMateTestData } from '@/data/workoutMateTestData';

export default function WorkoutMateTest() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { questions, results } = workoutMateTestData;

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
      // 결과 계산
      calculateResult();
    }
  };

  const calculateResult = () => {
    setIsLoading(true);
    
    // 점수 계산
    const scores = {
      introvert: 0,
      extrovert: 0,
      competitive: 0,
      organized: 0,
      weight_loss: 0,
      muscle: 0,
      fitness: 0,
      stress_relief: 0,
      yoga: 0,
      cardio: 0,
      strength: 0,
      dance: 0,
      morning: 0,
      lunch: 0,
      evening: 0,
      flexible: 0,
      quiet: 0,
      energetic: 0,
      intense: 0,
      comfortable: 0,
      similar: 0,
      mentor: 0,
      cheerleader: 0,
      partner: 0,
      determined: 0,
      calm: 0,
      social: 0,
      fun: 0,
      self_reflection: 0,
      systematic: 0,
      together: 0,
      meditation: 0,
      upbeat: 0,
      aggressive: 0,
      solo: 0,
      focused: 0,
      motivated: 0,
      challenge: 0,
      planned: 0,
      health: 0,
      diet: 0,
      endurance: 0,
      aerobic: 0,
      power: 0,
      rhythm: 0,
      early_bird: 0,
      disciplined: 0,
      efficient: 0,
      busy: 0,
      relaxed: 0,
      spontaneous: 0,
      casual: 0,
      peaceful: 0,
      lively: 0,
      dynamic: 0,
      challenging: 0,
      enjoyable: 0,
      friendly: 0,
      balanced: 0,
      matched: 0,
      guide: 0,
      leader: 0,
      support: 0,
      encouragement: 0,
      growth: 0,
      persistent: 0
    };

    Object.entries(answers).forEach(([questionId, optionIndex]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const option = question.options[optionIndex];
      
      Object.entries(option.score).forEach(([category, score]) => {
        scores[category] += score;
      });
    });

    // 가장 높은 점수의 카테고리 찾기
    const maxScore = Math.max(...Object.values(scores));
    const topCategories = Object.entries(scores)
      .filter(([_, score]) => score === maxScore)
      .map(([category, _]) => category);

    // 결과 결정
    let resultKey = 'zen_master'; // 기본값

    // 새로운 결과들도 포함한 결정 로직
    if (scores.calm >= 8 || scores.yoga >= 6 || scores.meditation >= 6) {
      resultKey = 'zen_master';
    } else if (scores.energetic >= 8 || scores.dance >= 6 || scores.upbeat >= 6) {
      resultKey = 'energy_bunny';
    } else if (scores.intense >= 8 || scores.strength >= 6 || scores.determined >= 6) {
      resultKey = 'iron_will';
    } else if (scores.social >= 8 || scores.partner >= 6 || scores.together >= 6) {
      resultKey = 'social_butterfly';
    } else if (scores.morning >= 8 || scores.organized >= 6 || scores.early_bird >= 6) {
      resultKey = 'morning_lark';
    } else if (scores.fun >= 8 || scores.cheerleader >= 6 || scores.enjoyable >= 6) {
      resultKey = 'fun_trainer';
    } else if (scores.comfortable >= 8 || scores.relaxed >= 6 || scores.casual >= 6) {
      resultKey = 'lazy_but_consistent';
    } else if (scores.dance >= 6 || scores.rhythm >= 6 || scores.fun >= 6) {
      resultKey = 'gym_selfie_queen';
    } else if (scores.flexible >= 8 || scores.spontaneous >= 6 || scores.casual >= 6) {
      resultKey = 'snack_break_lover';
    } else if (scores.evening >= 8 || scores.relaxed >= 6 || scores.quiet >= 6) {
      resultKey = 'late_night_warrior';
    } else if (scores.flexible >= 6 || scores.casual >= 6 || scores.spontaneous >= 6) {
      resultKey = 'weekend_warrior';
    } else if (scores.self_reflection >= 6 || scores.quiet >= 6 || scores.casual >= 6) {
      resultKey = 'excuse_master';
    }

    setTimeout(() => {
      navigate(`/workout-mate-result/${resultKey}`);
    }, 1500);
  };

  const currentQ = questions[currentQuestion];

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-200">
            {/* 헤더 */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">💪</div>
              <h1 className="text-3xl font-bold text-[#5D4037] mb-4">
                {workoutMateTestData.title}
              </h1>
              <p className="text-lg text-gray-600">
                {workoutMateTestData.description}
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
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* 로딩 화면 */}
            {isLoading && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">💪</div>
                <h2 className="text-xl font-semibold text-[#5D4037] mb-2">
                  운동메이트 분석 중...
                </h2>
                <p className="text-gray-600">
                  당신에게 가장 잘 맞는 파트너를 찾고 있어요!
                </p>
              </div>
            )}

            {/* 질문 */}
            {!isLoading && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#5D4037] mb-6 text-center">
                  {currentQ.question}
                </h2>

                {/* 선택지 */}
                <div className="space-y-4">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(currentQ.id, index)}
                      className="w-full p-4 text-left bg-gradient-to-r from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 border border-green-200 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105"
                    >
                      <span className="text-lg text-[#5D4037] font-medium">
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