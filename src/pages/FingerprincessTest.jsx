// 🎨 나만의 fingerprincess(핑프)는? 테스트 페이지
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { fingerprincessTestData } from '@/data/fingerprincessTestData';

export default function FingerprincessTest() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { questions, results } = fingerprincessTestData;

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
    const scores = {
      pastel: 0,
      soft: 0,
      dreamy: 0,
      neon: 0,
      vibrant: 0,
      bold: 0,
      monochrome: 0,
      minimal: 0,
      elegant: 0,
      natural: 0,
      warm: 0,
      cozy: 0,
      artistic: 0,
      creative: 0,
      expressive: 0,
      urban: 0,
      rhythm: 0,
      trendy: 0,
      mysterious: 0,
      deep: 0,
      night: 0,
      energetic: 0,
      dynamic: 0,
      active: 0,
      caring: 0,
      peaceful: 0,
      free: 0,
      social: 0,
      fun: 0,
      entertaining: 0,
      sophisticated: 0,
      fashionable: 0,
      morning: 0,
      early: 0,
      fresh: 0,
      afternoon: 0,
      evening: 0,
      calm: 0,
      direct: 0,
      honest: 0,
      straightforward: 0,
      humorous: 0,
      stable: 0,
      balanced: 0,
      adventurous: 0,
      exciting: 0,
      quiet: 0,
      zen: 0,
      cooperative: 0,
      innovative: 0,
      logical: 0,
      flexible: 0,
      adaptable: 0,
      intimate: 0,
      cultural: 0,
      empathetic: 0,
      inspiring: 0,
      thoughtful: 0,
      progressive: 0,
      unique: 0,
      individual: 0
    };

    Object.entries(answers).forEach(([questionId, optionIndex]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const option = question.options[optionIndex];
      
      Object.entries(option.score).forEach(([category, score]) => {
        scores[category] += score;
      });
    });

    // 결과 결정 (23개 결과지)
    let resultKey = 'pastel_dreamer'; // 기본값

    // 🌟 RARE 결과지 (매우 희귀한 결과 - 낮은 확률)
    const rareChance = Math.random();
    if (rareChance < 0.05) { // 5% 확률로 rare 결과
      if (scores.mysterious >= 8 && scores.deep >= 8) {
        resultKey = 'cosmic_legend';
      } else if (scores.artistic >= 10 && scores.creative >= 10) {
        resultKey = 'pixel_goddess';
      } else if (scores.energetic >= 10 && scores.dynamic >= 10) {
        resultKey = 'digital_phoenix';
      }
    } else {
      // 🌸 일반 결과지 (20개) - 점수 기반으로 더 정확한 분류
      const maxScores = [];
      
      // 각 카테고리별 최고 점수 찾기
      const categories = {
        pastel: scores.pastel + scores.soft + scores.dreamy,
        neon: scores.neon + scores.vibrant + scores.bold,
        minimal: scores.monochrome + scores.minimal + scores.elegant,
        natural: scores.natural + scores.warm + scores.cozy,
        artistic: scores.artistic + scores.creative + scores.expressive,
        urban: scores.urban + scores.rhythm + scores.trendy,
        mystical: scores.mysterious + scores.deep + scores.night,
        energetic: scores.energetic + scores.dynamic + scores.active,
        caring: scores.warm + scores.caring + scores.peaceful,
        adventurous: scores.adventurous + scores.free + scores.creative,
        social: scores.social + scores.fun + scores.entertaining,
        tech: scores.sophisticated + scores.fashionable + scores.urban,
        nature: scores.natural + scores.peaceful + scores.balanced,
        night: scores.night + scores.quiet + scores.calm,
        optimistic: scores.fun + scores.entertaining + scores.energetic,
        vintage: scores.unique + scores.individual + scores.artistic,
        nomad: scores.adventurous + scores.exciting + scores.free,
        zen: scores.calm + scores.peaceful + scores.balanced
      };

      // 점수별로 정렬
      const sortedCategories = Object.entries(categories)
        .sort(([,a], [,b]) => b - a);

      // 상위 3개 카테고리 기반으로 결과 결정
      const topCategories = sortedCategories.slice(0, 3).map(([cat]) => cat);

      if (topCategories.includes('pastel')) {
        resultKey = 'pastel_dreamer';
      } else if (topCategories.includes('neon')) {
        resultKey = 'neon_vibes';
      } else if (topCategories.includes('minimal')) {
        resultKey = 'minimal_elegance';
      } else if (topCategories.includes('natural')) {
        resultKey = 'cozy_warmth';
      } else if (topCategories.includes('artistic')) {
        resultKey = 'artistic_soul';
      } else if (topCategories.includes('urban')) {
        resultKey = 'urban_rhythm';
      } else if (topCategories.includes('mystical')) {
        resultKey = 'mystical_dream';
      } else if (topCategories.includes('energetic')) {
        resultKey = 'vibrant_energy';
      } else if (topCategories.includes('caring')) {
        resultKey = 'gentle_healer';
      } else if (topCategories.includes('adventurous')) {
        resultKey = 'cosmic_wanderer';
      } else if (topCategories.includes('social')) {
        resultKey = 'social_butterfly';
      } else if (topCategories.includes('tech')) {
        resultKey = 'tech_savvy';
      } else if (topCategories.includes('nature')) {
        resultKey = 'nature_spirit';
      } else if (topCategories.includes('night')) {
        resultKey = 'midnight_owl';
      } else if (topCategories.includes('optimistic')) {
        resultKey = 'sunshine_optimist';
      } else if (topCategories.includes('vintage')) {
        resultKey = 'vintage_collector';
      } else if (topCategories.includes('nomad')) {
        resultKey = 'urban_nomad';
      } else if (topCategories.includes('zen')) {
        resultKey = 'zen_master';
      } else {
        // 기본값들
        if (scores.humorous >= 6) {
          resultKey = 'retro_charm';
        } else if (scores.sophisticated >= 6) {
          resultKey = 'tech_savvy';
        } else if (scores.peaceful >= 6) {
          resultKey = 'nature_spirit';
        } else if (scores.social >= 6) {
          resultKey = 'social_butterfly';
        } else if (scores.night >= 6) {
          resultKey = 'midnight_owl';
        } else if (scores.fun >= 6) {
          resultKey = 'sunshine_optimist';
        } else if (scores.unique >= 6) {
          resultKey = 'vintage_collector';
        } else if (scores.adventurous >= 6) {
          resultKey = 'urban_nomad';
        } else if (scores.calm >= 6) {
          resultKey = 'zen_master';
        } else {
          resultKey = 'pastel_dreamer';
        }
      }
    }

    setTimeout(() => {
      navigate(`/fingerprincess-result/${resultKey}`);
    }, 1500);
  };

  const currentQ = questions[currentQuestion];

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-pink-200">
            {/* 헤더 */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎨</div>
              <h1 className="text-3xl font-bold text-[#5D4037] mb-4">
                {fingerprincessTestData.title}
              </h1>
              <p className="text-lg text-gray-600">
                {fingerprincessTestData.description}
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
                  className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* 로딩 화면 */}
            {isLoading && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🎨</div>
                <h2 className="text-xl font-semibold text-[#5D4037] mb-2">
                  당신만의 핑프 분석 중...
                </h2>
                <p className="text-gray-600">
                  boyboyboy의 픽셀아트로 당신의 스타일을 찾고 있어요!
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
                      className="w-full p-4 text-left bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 border border-pink-200 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105"
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