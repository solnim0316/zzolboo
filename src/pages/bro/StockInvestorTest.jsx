// 📈 주식 투자자 테스트 페이지
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
      follow: 0,
      expert: 0,
      luxury: 0,
      dream: 0,
      material: 0,
      retirement: 0,
      stable: 0,
      future: 0,
      ego: 0,
      fun: 0,
      entertainment: 0
    };

    Object.entries(answers).forEach(([questionId, optionIndex]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const option = question.options[optionIndex];
      
      Object.entries(option.score).forEach(([category, score]) => {
        scores[category] += score;
      });
    });

    // 결과 결정 (12개 결과지)
    let resultKey = 'panic_seller'; // 기본값

    // 점수 기반으로 결과 결정
    if (scores.panic >= 8 || scores.emotional >= 8) {
      resultKey = 'panic_seller';
    } else if (scores.yolo >= 8 || scores.aggressive >= 8) {
      resultKey = 'yolo_investor';
    } else if (scores.social >= 8 || scores.trust >= 8) {
      resultKey = 'social_trader';
    } else if (scores.dramatic >= 8 || scores.overwhelmed >= 8) {
      resultKey = 'drama_queen';
    } else if (scores.calm >= 8 || scores.chill >= 8) {
      resultKey = 'chill_investor';
    } else if (scores.boastful >= 8 || scores.proud >= 8) {
      resultKey = 'boastful_winner';
    } else if (scores.research >= 8 || scores.analytical >= 8) {
      resultKey = 'research_nerd';
    } else if (scores.gambling >= 8 || scores.luck >= 8) {
      resultKey = 'gambling_addict';
    } else if (scores.safe >= 8 || scores.conservative >= 8) {
      resultKey = 'conservative_granny';
    } else if (scores.arrogant >= 8 || scores.confident >= 8) {
      resultKey = 'arrogant_expert';
    } else if (scores.opportunistic >= 8 || scores.smart >= 8) {
      resultKey = 'lucky_fool';
    } else if (scores.attention >= 8 || scores.share >= 8) {
      resultKey = 'attention_seeker';
    }

    setTimeout(() => {
      navigate(`/bro/stock-investor-result/${resultKey}`);
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
              <div className="text-6xl mb-4">📈</div>
              <h1 className="text-3xl font-bold text-[#059669] mb-4">
                갑자기 주식이 떡락했다. 나의 선택은?
              </h1>
              <p className="text-lg text-gray-600">
                당신은 어떤 스타일의 투자자일까요?
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
                <div className="text-4xl mb-4">📈</div>
                <h2 className="text-xl font-semibold text-[#059669] mb-2">
                  당신의 투자 스타일 분석 중...
                </h2>
                <p className="text-gray-600">
                  최고의 투자자와 매칭하고 있어요!
                </p>
              </div>
            )}

            {/* 질문 */}
            {!isLoading && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#059669] mb-6 text-center">
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
                      <span className="text-lg text-[#059669] font-medium">
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