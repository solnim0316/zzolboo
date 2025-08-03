// ₿ 비트코인 투자 성향 테스트 페이지
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BroHeader from "@/components/layout/BroHeader";
import Footer from "@/components/layout/Footer";

export default function BitcoinTest() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "비트코인이 50% 떨어졌다면 당신의 반응은?",
      options: [
        { text: "😱 아아아아! 팔아야겠다!", value: "panic_seller" },
        { text: "😏 좋아! 더 싸게 사자!", value: "dca_buyer" },
        { text: "📊 차트 한번 봐야겠는데...", value: "technical_analyst" },
        { text: "😴 뭐? 그냥 자고 있을게", value: "hodler" }
      ]
    },
    {
      id: 2,
      question: "비트코인에 투자하는 진짜 이유는?",
      options: [
        { text: "🚀 람보르기니 타고 싶어서", value: "short_term" },
        { text: "💰 은행이랑 놀기 싫어서", value: "inflation_hedge" },
        { text: "🤖 블록체인 기술이 멋져서", value: "technology" },
        { text: "🌍 월드컵이 될 것 같아서", value: "alternative" }
      ]
    },
    {
      id: 3,
      question: "비트코인 뉴스 체크 빈도는?",
      options: [
        { text: "📱 5분마다 폰 확인", value: "frequent" },
        { text: "📰 일주일에 2-3번", value: "moderate" },
        { text: "🎯 큰일 날 때만", value: "occasional" },
        { text: "😴 뉴스? 그게 뭐야?", value: "rare" }
      ]
    },
    {
      id: 4,
      question: "포트폴리오에서 비트코인 비중은?",
      options: [
        { text: "🍃 바람만 불어도 흔들림 (10% 이하)", value: "conservative" },
        { text: "⚖️ 균형잡힌 미식가 (10-30%)", value: "balanced" },
        { text: "🔥 불타는 열정 (30-50%)", value: "aggressive" },
        { text: "💎 올인! 다 비트코인! (50% 이상)", value: "very_aggressive" }
      ]
    },
    {
      id: 5,
      question: "언제 비트코인을 팔 생각?",
      options: [
        { text: "🎯 목표 달성하면 바로 팔아!", value: "target_profit" },
        { text: "📰 뉴스 나오면 바로 팔아!", value: "news_driven" },
        { text: "📈 차트 보면서 타이밍 잡아!", value: "technical_signal" },
        { text: "🤝 팔 생각 없어! HODL!", value: "never_sell" }
      ]
    },
    {
      id: 6,
      question: "비트코인 정보는 어디서?",
      options: [
        { text: "🐦 트위터에서 밈으로", value: "social_media" },
        { text: "📰 전문 뉴스에서 진지하게", value: "news_sites" },
        { text: "📚 백서 읽으면서 공부", value: "technical" },
        { text: "👥 친구가 추천해줘서", value: "word_of_mouth" }
      ]
    },
    {
      id: 7,
      question: "비트코인 최대 위험은?",
      options: [
        { text: "📉 롤러코스터 같은 가격", value: "volatility" },
        { text: "👮‍♂️ 정부가 막을 수도", value: "regulation" },
        { text: "💻 해킹당할 수도", value: "technical_risk" },
        { text: "🎭 큰손들이 조작할 수도", value: "manipulation" }
      ]
    },
    {
      id: 8,
      question: "비트코인 미래는?",
      options: [
        { text: "🥇 골드 대신 비트코인!", value: "gold_replacement" },
        { text: "💳 카드 대신 비트코인!", value: "payment_system" },
        { text: "🎰 도박처럼 재미있을 거야", value: "speculative" },
        { text: "🌍 세계 통화가 될 거야!", value: "global_currency" }
      ]
    }
  ];



  const handleAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateResult = () => {
    const answerCounts = {};
    
    Object.values(answers).forEach(answer => {
      answerCounts[answer] = (answerCounts[answer] || 0) + 1;
    });

    // 가장 많이 선택된 답변 유형을 결과로 반환
    const maxCount = Math.max(...Object.values(answerCounts));
    const dominantType = Object.keys(answerCounts).find(key => answerCounts[key] === maxCount);
    
    return dominantType || 'hodler';
  };



  const currentQuestionData = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (isCompleted) {
    const resultKey = calculateResult();
    navigate(`/bro/bitcoin-result/${resultKey}`);
    return null;
  }

  return (
    <>
      <BroHeader />
      <main className="bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-200">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">₿</div>
              <h1 className="text-3xl font-bold text-[#5D4037] mb-4">
                야 너두 비트코인 투자자 될 수 있어! 🚀
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                궁금하지 않아? 네 비트코인 투자 성향, 내가 다 알려줄게! 💎
              </p>
              
              {/* 진행률 바 */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-orange-400 to-yellow-400 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">
                {currentQuestion + 1} / {questions.length}
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-8 border border-orange-200">
              <h2 className="text-xl font-bold text-[#5D4037] mb-6 text-center">
                {currentQuestionData.question}
              </h2>

              <div className="space-y-4">
                {currentQuestionData.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full bg-white hover:bg-orange-50 border border-orange-200 rounded-xl p-4 text-left transition-all duration-200 hover:shadow-md"
                  >
                    <span className="text-gray-700 font-medium">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => navigate('/bro')}
                className="text-gray-500 hover:text-gray-700 underline"
              >
                ← 테스트 중단하고 돌아가기
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 