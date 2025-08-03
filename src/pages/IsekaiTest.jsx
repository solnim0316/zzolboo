// 🌍 이세계 전이 테스트 페이지
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { isekaiTestData } from '@/data/isekaiTestData';

export default function IsekaiTest() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { questions, results } = isekaiTestData;

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
      magic: 0,
      hero: 0,
      demon: 0,
      knight: 0,
      pet: 0,
      healer: 0,
      school: 0
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
    let resultKey = 'magic_master'; // 기본값

    if (topCategories.includes('magic')) {
      if (scores.magic >= 8) resultKey = 'magic_master';
      else if (scores.magic >= 6) resultKey = 'slime_master';
      else resultKey = 'magic_dropout';
    } else if (topCategories.includes('hero')) {
      if (scores.hero >= 8) resultKey = 'hero_accident';
      else if (scores.hero >= 6) resultKey = 'dungeon_chef';
      else resultKey = 'npc_legend';
    } else if (topCategories.includes('demon')) {
      if (scores.demon >= 4) resultKey = 'yandere_contractor';
      else resultKey = 'demon_lover';
    } else if (topCategories.includes('knight')) {
      if (scores.knight >= 6) resultKey = 'knight_chef';
      else resultKey = 'knight_failure';
    } else if (topCategories.includes('pet')) {
      if (scores.pet >= 6) resultKey = 'cute_pet';
      else resultKey = 'demon_pet';
    } else if (topCategories.includes('healer')) {
      if (scores.healer >= 8) resultKey = 'tree_healer';
      else resultKey = 'onsen_manager';
    } else if (topCategories.includes('school')) {
      resultKey = 'school_lover';
    }

    setTimeout(() => {
      navigate(`/isekai-result/${resultKey}`);
    }, 1500);
  };

  const currentQ = questions[currentQuestion];

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-200">
            {/* 헤더 */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🌍</div>
              <h1 className="text-3xl font-bold text-[#5D4037] mb-4">
                {isekaiTestData.title}
              </h1>
              <p className="text-lg text-gray-600">
                {isekaiTestData.description}
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
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* 로딩 화면 */}
            {isLoading && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🌍</div>
                <h2 className="text-xl font-semibold text-[#5D4037] mb-2">
                  이세계로 전이 중...
                </h2>
                <p className="text-gray-600">
                  당신의 운명을 분석하고 있어요!
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
                      className="w-full p-4 text-left bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border border-purple-200 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105"
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