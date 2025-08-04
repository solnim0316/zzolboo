// 📈 주식 투자자 테스트 페이지 (메인 채널)
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { stockInvestorTestData } from '@/data/stockInvestorTestData';

export default function StockInvestorTest() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { questions } = stockInvestorTestData;

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
      panic: 0,
      emotional: 0,
      dramatic: 0,
      calm: 0,
      optimistic: 0,
      chill: 0,
      aggressive: 0,
      bold: 0,
      yolo: 0,
      research: 0,
      careful: 0,
      analytical: 0,
      trust: 0,
      social: 0,
      naive: 0,
      skeptical: 0,
      realistic: 0,
      experimental: 0,
      small: 0,
      curious: 0,
      arrogant: 0,
      confident: 0,
      dismissive: 0,
      overwhelmed: 0,
      artistic: 0,
      positive: 0,
      unique: 0,
      share: 0,
      attention: 0,
      denial: 0,
      hope: 0,
      magical: 0,
      doom: 0,
      pessimistic: 0,
      opportunistic: 0,
      smart: 0,
      contrarian: 0,
      crowd: 0,
      extravagant: 0,
      impulsive: 0,
      dreamy: 0,
      unimpressed: 0,
      cynical: 0,
      boastful: 0,
      proud: 0,
      cautious: 0,
      profit: 0,
      strategic: 0,
      giveup: 0,
      learning: 0,
      growth: 0,
      blame: 0,
      angry: 0,
      external: 0,
      gambling: 0,
      philosophical: 0,
      control: 0,
      disciplined: 0,
      rational: 0,
      luck: 0,
      info: 0,
      fast: 0,
      insider: 0,
      group: 0,
      comfort: 0,
      spend: 0,
      reinvest: 0,
      compound: 0,
      generous: 0,
      safe: 0,
      conservative: 0,
      secure: 0,
      cash: 0,
      expert: 0,
      follow: 0,
      luxury: 0,
      dream: 0,
      material: 0,
      retirement: 0,
      stable: 0,
      future: 0,
      boast: 0,
      ego: 0,
      fun: 0,
      entertainment: 0
    };

    // 점수 계산
    Object.keys(answers).forEach(questionId => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const selectedOption = question.options[answers[questionId]];
      
      Object.keys(selectedOption.score).forEach(trait => {
        scores[trait] += selectedOption.score[trait];
      });
    });

    // 결과 결정
    let resultKey = 'warren_buffett'; // 기본값
    
    // 가장 높은 점수의 특성들 찾기
    const topTraits = Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([trait]) => trait);

    // 결과 매핑
    if (topTraits.includes('panic') || topTraits.includes('emotional')) {
      resultKey = 'panic_seller';
    } else if (topTraits.includes('calm') || topTraits.includes('optimistic')) {
      resultKey = 'long_term_investor';
    } else if (topTraits.includes('aggressive') || topTraits.includes('bold')) {
      resultKey = 'risk_taker';
    } else if (topTraits.includes('research') || topTraits.includes('analytical')) {
      resultKey = 'value_investor';
    } else if (topTraits.includes('trust') || topTraits.includes('social')) {
      resultKey = 'social_investor';
    } else if (topTraits.includes('skeptical') || topTraits.includes('careful')) {
      resultKey = 'conservative_investor';
    } else if (topTraits.includes('experimental') || topTraits.includes('curious')) {
      resultKey = 'trend_follower';
    } else if (topTraits.includes('arrogant') || topTraits.includes('confident')) {
      resultKey = 'day_trader';
    } else if (topTraits.includes('overwhelmed') || topTraits.includes('dramatic')) {
      resultKey = 'emotional_investor';
    } else if (topTraits.includes('artistic') || topTraits.includes('positive')) {
      resultKey = 'optimistic_investor';
    } else if (topTraits.includes('social') || topTraits.includes('share')) {
      resultKey = 'social_media_investor';
    } else if (topTraits.includes('denial') || topTraits.includes('hope')) {
      resultKey = 'hopeful_investor';
    } else if (topTraits.includes('doom') || topTraits.includes('pessimistic')) {
      resultKey = 'doomsday_investor';
    } else if (topTraits.includes('opportunistic') || topTraits.includes('smart')) {
      resultKey = 'contrarian_investor';
    } else if (topTraits.includes('crowd') || topTraits.includes('social')) {
      resultKey = 'herd_follower';
    } else if (topTraits.includes('extravagant') || topTraits.includes('impulsive')) {
      resultKey = 'impulsive_investor';
    } else if (topTraits.includes('realistic') || topTraits.includes('unimpressed')) {
      resultKey = 'realistic_investor';
    } else if (topTraits.includes('boastful') || topTraits.includes('proud')) {
      resultKey = 'boastful_investor';
    } else if (topTraits.includes('cautious') || topTraits.includes('profit')) {
      resultKey = 'profit_taker';
    } else if (topTraits.includes('strategic') || topTraits.includes('careful')) {
      resultKey = 'strategic_investor';
    } else if (topTraits.includes('giveup') || topTraits.includes('emotional')) {
      resultKey = 'quitter_investor';
    } else if (topTraits.includes('learning') || topTraits.includes('growth')) {
      resultKey = 'learning_investor';
    } else if (topTraits.includes('blame') || topTraits.includes('angry')) {
      resultKey = 'blaming_investor';
    } else if (topTraits.includes('gambling') || topTraits.includes('philosophical')) {
      resultKey = 'gambler_investor';
    } else if (topTraits.includes('control') || topTraits.includes('disciplined')) {
      resultKey = 'disciplined_investor';
    } else if (topTraits.includes('rational') || topTraits.includes('analytical')) {
      resultKey = 'rational_investor';
    } else if (topTraits.includes('luck') || topTraits.includes('gambling')) {
      resultKey = 'lucky_investor';
    } else if (topTraits.includes('info') || topTraits.includes('fast')) {
      resultKey = 'information_hunter';
    } else if (topTraits.includes('insider') || topTraits.includes('fast')) {
      resultKey = 'insider_trader';
    } else if (topTraits.includes('group') || topTraits.includes('comfort')) {
      resultKey = 'group_investor';
    } else if (topTraits.includes('spend') || topTraits.includes('extravagant')) {
      resultKey = 'spender_investor';
    } else if (topTraits.includes('reinvest') || topTraits.includes('compound')) {
      resultKey = 'compound_investor';
    } else if (topTraits.includes('generous') || topTraits.includes('social')) {
      resultKey = 'generous_investor';
    } else if (topTraits.includes('safe') || topTraits.includes('conservative')) {
      resultKey = 'safe_investor';
    } else if (topTraits.includes('cash') || topTraits.includes('safe')) {
      resultKey = 'cash_holder';
    } else if (topTraits.includes('aggressive') || topTraits.includes('contrarian')) {
      resultKey = 'aggressive_buyer';
    } else if (topTraits.includes('crowd') || topTraits.includes('follow')) {
      resultKey = 'crowd_follower';
    } else if (topTraits.includes('research') || topTraits.includes('expert')) {
      resultKey = 'expert_follower';
    } else if (topTraits.includes('luxury') || topTraits.includes('dream')) {
      resultKey = 'luxury_dreamer';
    } else if (topTraits.includes('retirement') || topTraits.includes('stable')) {
      resultKey = 'retirement_planner';
    } else if (topTraits.includes('boast') || topTraits.includes('ego')) {
      resultKey = 'ego_investor';
    } else if (topTraits.includes('fun') || topTraits.includes('entertainment')) {
      resultKey = 'fun_investor';
    }

    setTimeout(() => {
      navigate(`/stock-investor-result/${resultKey}`);
    }, 1000);
  };

  const currentQuestionData = questions[currentQuestion];

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">투자 성향 분석 중...</h2>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-200">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">📈</div>
              <h1 className="text-3xl font-bold text-[#059669] mb-4">
                갑자기 주식이 떡락했다. 나의 선택은?
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                주식 투자에서 당신의 성향을 분석해드려요!
              </p>
              
              {/* 진행률 표시 */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                <div 
                  className="bg-green-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {currentQuestion + 1} / {questions.length}
              </p>
            </div>

            {/* 질문 */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-8">
                {currentQuestionData.question}
              </h2>
              
              {/* 선택지 */}
              <div className="space-y-4">
                {currentQuestionData.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQuestionData.id, index)}
                    className="w-full bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-6 text-left hover:from-green-100 hover:to-blue-100 hover:border-green-300 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-lg font-medium text-gray-800">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 