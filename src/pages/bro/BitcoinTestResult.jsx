// ₿ 비트코인 테스트 결과 페이지
import { useParams, useNavigate } from 'react-router-dom';
import BroHeader from "@/components/layout/BroHeader";
import Footer from "@/components/layout/Footer";
import BitcoinGuide from "@/components/common/BitcoinGuide";
import { useState } from 'react';

export default function BitcoinTestResult() {
  const { resultKey } = useParams();
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);

     const results = {
          hodler: {
        title: "💎 다이아몬드 핸드 HODLER",
        description: "와! 당신은 진짜 비트코인계의 '다이아몬드 손'이네요! 💎 가격이 떡락해도 눈 하나 깜짝 안 하고, '존버' 정신으로 무장한 당신은 진정한 비트코인 고수! 어떤 폭풍우가 와도 끄떡없어요!",
        characteristics: [
          "😴 가격 떨어져도 잠만 자고 있음",
          "💎 다이아몬드처럼 단단한 의지",
          "🤝 팔 생각 1도 없음",
          "📈 10년 후를 보고 있음"
        ],
              strategy: "매달 월급 받으면 비트코인 조금씩 사 모으는 '적립식' 투자를 추천해요! 그리고 최소 4년은 묻어둔다고 생각하면 마음이 편할 거예요. 잊고 지내다 보면 어느새 부자가 되어 있을지도? 😉",
        color: "#f7931a",
        image: "/images/tests/bitcoin/hodler.webp",
        shareText: "나는 💎 다이아몬드 핸드 HODLER! 비트코인 투자 성향 테스트 결과를 확인해보세요! 🚀"
      },
          dca_buyer: {
        title: "📈 스마트 DCA 투자자",
        description: "오! 당신은 현명한 DCA 마스터네요! 😎 감정에 휘둘리지 않고 매월 꾸준히 사는 스마트한 투자자! 가격이 떨어지면 오히려 좋아하는 당신, 정말 똑똑해요! 🧠",
        characteristics: [
          "📅 매월 정기적으로 구매",
          "😌 감정에 흔들리지 않음",
          "💰 평단가 낮추는 전문가",
          "🎯 장기적 관점 보유"
        ],
              strategy: "매월 같은 금액으로 사고, 가격 떨어지면 더 많이 사세요! 평단가가 계속 낮아질 거예요! 이게 바로 '달러 코스트 애버리징'의 마법이에요! 📉➡️📈",
        color: "#ff9500",
        image: "/images/tests/bitcoin/dca.webp",
        shareText: "나는 📈 스마트 DCA 투자자! 비트코인 투자 성향 테스트 결과를 확인해보세요! 💡"
      },
          technical_analyst: {
        title: "📊 차트 마스터",
        description: "와! 당신은 차트를 읽는 마법사네요! 🔮 RSI, MACD, 이동평균선... 차트만 보면 다 알겠다는 당신! 감정보다는 데이터를 믿는 냉정한 분석가! 📊",
        characteristics: [
          "📈 차트만 보면 행복함",
          "🎯 타이밍 잡는 전문가",
          "📊 기술적 지표 마스터",
          "💡 감정보다 데이터 선호"
        ],
              strategy: "차트 보면서 매수/매도 타이밍을 잡고, 손절매도 확실히 하세요! 하지만 너무 과신하지 마세요! 차트는 참고용이지, 절대 신이 아니에요! 😅",
        color: "#00d4aa",
        image: "/images/tests/bitcoin/technical.webp",
        shareText: "나는 📊 차트 마스터! 비트코인 투자 성향 테스트 결과를 확인해보세요! 📈"
      },
     panic_seller: {
       title: "😱 FOMO/FUD 마스터",
       description: "아! 당신은 아직 비트코인에 익숙하지 않은 초보자네요! 😅 가격이 조금만 떨어져도 '아아아아!' 하면서 팔아버리는 당신, 정말 귀여워요! 하지만 걱정 마세요, 다들 처음엔 그랬어요! 🤗",
       characteristics: [
         "😱 가격 떨어지면 바로 팔아버림",
         "🤯 FOMO에 쉽게 휘둘림",
         "😰 FUD에 겁먹음",
         "📱 5분마다 가격 체크"
       ],
              strategy: "처음엔 조금만 사서 익숙해지고, 매월 조금씩 사는 습관을 들이세요! 금방 프로가 될 거예요! 그리고 FOMO에 휘둘리지 마세요! 💪",
       color: "#ff6b6b",
               image: "/images/tests/bitcoin/panic.webp",
       shareText: "나는 😱 FOMO/FUD 마스터! 비트코인 투자 성향 테스트 결과를 확인해보세요! 📚"
     },
     // 🚀 새로운 재미있는 결과지들 추가!
     short_term: {
       title: "🚀 한탕주의 50배롱쟁이",
       description: "와! 당신은 진짜 한탕주의 50배롱쟁이네요! 🚀 '한번에 크게!' 하는 당신은 비트코인계의 도박사! 람보르기니 타고 싶어서 투자한다는 당신, 정말 멋져요! 하지만 조심하세요, 한번에 크게 잃을 수도 있어요! 😅",
       characteristics: [
         "🎰 한번에 크게 베팅하는 스타일",
         "🚗 람보르기니 꿈꾸는 로맨티스트",
         "🔥 높은 리스크 선호도",
         "⚡ 빠른 수익 추구"
       ],
       strategy: "한탕주의 마음은 이해하지만, 처음엔 조금씩 시작하세요! 그리고 절대 빚내서 하지 마세요! 한번에 크게 잃으면 람보르기니どころか 자전거도 못 탈 수도 있어요! 😱",
       color: "#ff4757",
               image: "/images/tests/bitcoin/short_term.webp",
       shareText: "나는 🚀 한탕주의 50배롱쟁이! 비트코인 투자 성향 테스트 결과를 확인해보세요! 🎰"
     },
     inflation_hedge: {
       title: "💰 은행 싫어하는 인플레이션 헷지러",
       description: "오! 당신은 은행을 싫어하는 현명한 투자자네요! 💰 '은행이랑 놀기 싫어서' 비트코인에 투자한다는 당신, 정말 똑똑해요! 인플레이션에 대비해서 자산을 보호하려는 당신은 진정한 금융 지혜의 소유자! 🧠",
       characteristics: [
         "🏦 은행 시스템에 대한 불신",
         "📈 인플레이션 대비 자산 보호",
         "💡 금융 시스템 이해도 높음",
         "🛡️ 안전한 자산 보호 선호"
       ],
       strategy: "인플레이션 헷지 전략으로 비트코인을 포트폴리오의 5-10% 정도로 보유하세요! 은행에만 맡기지 말고 다양한 자산에 분산 투자하는 게 현명해요! 💪",
       color: "#2ed573",
               image: "/images/tests/bitcoin/inflation_hedge.webp",
       shareText: "나는 💰 은행 싫어하는 인플레이션 헷지러! 비트코인 투자 성향 테스트 결과를 확인해보세요! 🏦"
     },
     technology: {
       title: "🤖 블록체인 기술 덕후",
       description: "와! 당신은 진짜 블록체인 기술 덕후네요! 🤖 '블록체인 기술이 멋져서' 투자한다는 당신, 정말 멋져요! 기술의 가치를 이해하는 당신은 비트코인의 진정한 의미를 아는 사람! 하지만 기술만 믿고 감정적 투자는 조심하세요! 🔬",
       characteristics: [
         "🔬 기술적 이해도 높음",
         "📚 백서 읽는 것을 즐김",
         "💻 블록체인 기술에 대한 열정",
         "🎯 장기적 기술 발전 믿음"
       ],
       strategy: "기술적 이해를 바탕으로 한 투자는 좋지만, 감정에 휘둘리지 마세요! 기술이 좋다고 해서 무조건 올라가는 건 아니에요! 차분하게 분석하고 투자하세요! 📊",
       color: "#3742fa",
               image: "/images/tests/bitcoin/technology.webp",
       shareText: "나는 🤖 블록체인 기술 덕후! 비트코인 투자 성향 테스트 결과를 확인해보세요! 🔬"
     },
     alternative: {
       title: "🌍 월드컵 꿈꾸는 대안 투자자",
       description: "오! 당신은 월드컵을 꿈꾸는 대안 투자자네요! 🌍 '월드컵이 될 것 같아서' 비트코인에 투자한다는 당신, 정말 로맨틱해요! 기존 금융 시스템의 대안을 찾는 당신은 미래를 보는 사람! 하지만 너무 큰 기대는 조심하세요! 🌟",
       characteristics: [
         "🌍 글로벌 시스템 변화 기대",
         "🎯 대안 금융 시스템 선호",
         "💫 미래 지향적 사고",
         "🔄 시스템 변화에 대한 열망"
       ],
       strategy: "대안 투자로서 비트코인을 포트폴리오에 포함하는 건 좋지만, 너무 큰 기대는 조심하세요! 월드컵이 되든 안 되든, 분산 투자가 중요해요! 그리고 기존 자산도 함께 보유하세요! ⚖️",
       color: "#ffa502",
               image: "/images/tests/bitcoin/alternative.webp",
       shareText: "나는 🌍 월드컵 꿈꾸는 대안 투자자! 비트코인 투자 성향 테스트 결과를 확인해보세요! 🌟"
     }
   };

  const result = results[resultKey] || results.hodler;

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = result.shareText;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'kakao':
        if (window.Kakao) {
          window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title: '내가 비트코인 투자자라면?',
              description: result.title,
              imageUrl: result.image,
              link: {
                mobileWebUrl: url,
                webUrl: url,
              },
            },
            buttons: [
              {
                title: '테스트 해보기',
                link: {
                  mobileWebUrl: url,
                  webUrl: url,
                },
              },
            ],
          });
        }
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(`${text}\n${url}`);
        alert('링크가 복사되었습니다!');
        break;
      default:
        break;
    }
    
    setShowShareModal(false);
  };

  return (
    <>
      <BroHeader />
      <main className="bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-200">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">₿</div>
              <h1 className="text-3xl font-bold text-[#5D4037] mb-4">
                두구두구... 네 비트코인 투자 성향은?! 🚀
              </h1>
              <p className="text-lg text-gray-600">
                짜잔! 당신의 비트코인 투자 성향 분석 결과가 나왔어! 💎
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-8 border border-orange-200">
              <h2 className="text-2xl font-bold text-center mb-4" style={{ color: result.color }}>
                {result.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {result.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#5D4037] mb-3">🎯 주요 특징</h3>
                  <ul className="space-y-2">
                    {result.characteristics.map((char, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-orange-500">•</span>
                        <span className="text-gray-700">{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#5D4037] mb-3">💡 투자 전략</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {result.strategy}
                  </p>
                </div>
              </div>
            </div>

            {/* 공유 버튼들 */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setShowShareModal(true)}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                📤 결과 공유하기
              </button>
              <button
                onClick={() => navigate('/bro/bitcoin-test')}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                🔄 다시 테스트하기
              </button>
              <button
                onClick={() => navigate('/bro')}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                🏠 홈으로 돌아가기
              </button>
            </div>

                         {/* 비트코인 투자 가이드 */}
             <BitcoinGuide />
          </div>
        </div>
      </main>

      {/* 공유 모달 */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold text-[#5D4037] mb-4 text-center">
              결과 공유하기
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleShare('kakao')}
                className="bg-yellow-400 text-white p-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                카카오톡
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="bg-blue-400 text-white p-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
              >
                트위터
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                페이스북
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="bg-gray-500 text-white p-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                링크 복사
              </button>
            </div>
            <button
              onClick={() => setShowShareModal(false)}
              className="w-full mt-4 bg-gray-200 text-gray-700 p-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
} 