// 📖 FAQ 페이지
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: "MBTI 테스트 관련",
      questions: [
        {
          question: "MBTI 테스트는 얼마나 정확한가요?",
          answer: "MBTI는 과학적으로 검증된 성격 평가 도구로, 개인의 성격 경향을 파악하는데 도움을 줍니다. 하지만 100% 정확하지는 않으며, 참고 자료로 활용하시는 것이 좋습니다. 시간이 지나면서 성격이 변할 수 있으므로 주기적으로 테스트를 다시 해보시는 것을 추천합니다. 쫄부월드의 테스트는 Myers-Briggs 이론을 기반으로 하여 신뢰성을 높였습니다."
        },
        {
          question: "테스트는 몇 분 정도 걸리나요?",
          answer: "각 테스트는 보통 1~3분 정도 소요됩니다. 너무 오래 고민하지 마시고, 직감적으로 답변하시는 것이 더 정확한 결과를 얻을 수 있습니다. 테마 테스트(공룡, 고양이)는 스토리가 포함되어 조금 더 길 수 있지만, 재미있게 즐기실 수 있습니다."
        },
        {
          question: "같은 테스트를 여러 번 해도 되나요?",
          answer: "물론입니다! 시간이 지나면서 생각이나 상황이 변할 수 있으므로, 주기적으로 테스트를 다시 해보시는 것도 좋습니다. 다른 결과가 나올 수도 있으며, 이는 자연스러운 현상입니다. 특히 중요한 경험이나 환경 변화 후에는 새로운 측면을 발견할 수 있어요."
        },
        {
          question: "테스트 결과가 마음에 들지 않아요.",
          answer: "테스트 결과는 현재의 상태를 반영한 것일 뿐입니다. 성격은 고정된 것이 아니며, 노력과 경험을 통해 발전시킬 수 있습니다. 결과를 부정적으로 받아들이기보다는 자신을 이해하는 하나의 관점으로 활용해보세요. 각 MBTI 유형에는 고유한 장점과 강점이 있습니다."
        },
        {
          question: "MBTI 16가지 유형이 모두 나올 수 있나요?",
          answer: "네, 쫄부월드의 테스트는 MBTI의 모든 16가지 성격 유형(INTJ, ENFP, ISTP 등)을 정확히 분석할 수 있도록 설계되었습니다. 각 유형별로 고유한 캐릭터와 설명을 제공하여 더 재미있게 결과를 확인하실 수 있습니다."
        },
        {
          question: "중간형(균형형) 결과는 무엇인가요?",
          answer: "경계선에 있는 성격 특성을 보이는 경우 '균형형' 결과가 나올 수 있습니다. 이는 두 성향 사이에서 상황에 따라 유연하게 대응할 수 있는 능력을 의미하며, 매우 균형잡힌 성격을 나타냅니다. 쫄부월드에서는 이런 분들을 위해 특별한 캐릭터(쫄, 부)로 결과를 제공합니다."
        },
        {
          question: "테스트별로 결과가 다르게 나와요.",
          answer: "각 테스트는 서로 다른 상황과 맥락에서 성격을 측정하기 때문에 약간의 차이가 있을 수 있습니다. 공룡 테스트는 리더십과 생존 본능을, 고양이 테스트는 일상적인 선호도를 중심으로 분석합니다. 여러 테스트 결과를 종합해서 보시면 더 정확한 자신의 모습을 파악할 수 있어요."
        }
      ]
    },
    {
      category: "사이트 이용 관련",
      questions: [
        {
          question: "회원가입이 필요한가요?",
          answer: "아니요, 쫄부월드의 모든 테스트는 회원가입 없이 무료로 이용 가능합니다. 이름만 입력하시면 바로 테스트를 시작할 수 있습니다. 개인정보 수집을 최소화하여 더 안전하고 편리하게 이용하실 수 있어요."
        },
        {
          question: "개인정보는 어떻게 처리되나요?",
          answer: "입력하신 이름과 테스트 결과는 브라우저에만 임시 저장되며, 서버에 전송되지 않습니다. 테스트 종료 시 자동으로 삭제되므로 개인정보 걱정 없이 이용하실 수 있습니다. 자세한 내용은 개인정보처리방침을 참고해주세요."
        },
        {
          question: "모바일에서도 이용할 수 있나요?",
          answer: "네, 쫄부월드는 모바일 최적화가 되어 있어 스마트폰, 태블릿에서도 편리하게 이용하실 수 있습니다. iOS Safari, Android Chrome 등 모든 주요 모바일 브라우저를 지원합니다."
        },
        {
          question: "테스트 결과를 공유할 수 있나요?",
          answer: "네! 카카오톡, 페이스북, 트위터, 인스타그램 등으로 테스트 결과를 친구들과 공유할 수 있습니다. 또한 링크 복사 기능과 이미지 저장 기능도 제공됩니다. 공유할 때 개인정보는 포함되지 않으니 안심하세요."
        },
        {
          question: "브라우저 호환성은 어떻게 되나요?",
          answer: "Chrome, Firefox, Safari, Edge 등 모든 주요 브라우저에서 정상 작동합니다. 최적의 경험을 위해서는 최신 버전의 브라우저 사용을 권장드립니다. Internet Explorer는 지원하지 않습니다."
        },
        {
          question: "사이트 이용료가 있나요?",
          answer: "쫄부월드의 모든 서비스는 완전히 무료입니다. 광고 수익을 통해 운영되므로 사용자에게는 어떤 비용도 청구하지 않습니다. 앞으로도 무료 서비스를 유지할 예정입니다."
        },
        {
          question: "새로운 테스트는 언제 업데이트되나요?",
          answer: "정기적으로 새로운 테마의 테스트를 개발하고 있습니다. 보통 월 1-2회 새로운 테스트나 기능을 추가하며, 업데이트 소식은 홈페이지와 소셜미디어를 통해 공지됩니다."
        }
      ]
    },
    {
      category: "결과 해석 관련",
      questions: [
        {
          question: "MBTI 유형별 특징을 더 자세히 알고 싶어요.",
          answer: "MBTI 가이드 페이지에서 16가지 성격 유형의 상세한 설명을 확인하실 수 있습니다. 각 유형의 특성, 강점, 약점, 적합한 직업, 연애 스타일, 학습 방법 등을 자세히 소개하고 있습니다. 또한 각 테스트 결과 페이지에서도 맞춤형 설명을 제공합니다."
        },
        {
          question: "궁합 정보는 어떻게 해석해야 하나요?",
          answer: "궁합 정보는 MBTI 이론에 기반한 일반적인 경향을 나타내는 것으로, 절대적인 기준은 아닙니다. 실제 관계에서는 개인의 성숙도, 소통 능력, 가치관, 경험 등이 더 중요한 요소가 될 수 있습니다. 참고 자료로만 활용하시고, 실제 관계는 직접 경험을 통해 판단하세요."
        },
        {
          question: "성격 유형이 자주 바뀌는데 정상인가요?",
          answer: "경계선에 있는 성격 특성을 가진 분들은 상황에 따라 다른 결과가 나올 수 있습니다. 이는 정상적인 현상이며, 오히려 균형잡힌 성격을 의미할 수도 있습니다. 특히 E/I(외향/내향), J/P(계획/즉흥) 영역에서 중간값을 보이는 경우 상황에 따라 결과가 달라질 수 있어요."
        },
        {
          question: "테스트마다 다른 캐릭터가 나오는 이유는?",
          answer: "각 테스트는 서로 다른 상황과 관점에서 성격을 측정하기 때문입니다. 공룡 테스트는 원시적 본능과 리더십을, 고양이 테스트는 일상적 선호도와 사회성을 중심으로 분석합니다. 같은 MBTI라도 테마에 따라 다른 면이 부각될 수 있어 더 재미있게 즐기실 수 있어요."
        },
        {
          question: "직업 추천이 정말 맞나요?",
          answer: "직업 추천은 각 MBTI 유형의 일반적인 선호도와 강점을 바탕으로 제공됩니다. 하지만 개인의 가치관, 흥미, 능력, 환경 등도 중요한 요소이므로 참고 자료로만 활용하세요. 자신의 꿈과 목표를 우선으로 하되, 성격적 강점을 활용할 수 있는 방향을 고려해보시는 것이 좋습니다."
        },
        {
          question: "연애 스타일 분석이 정확한가요?",
          answer: "연애 스타일은 각 MBTI 유형의 일반적인 경향을 바탕으로 분석됩니다. 하지만 개인의 연애 경험, 가치관, 성장 배경 등에 따라 실제와 다를 수 있습니다. 자신과 상대방을 이해하는 하나의 관점으로 활용하시고, 실제 관계에서는 충분한 소통이 가장 중요합니다."
        }
      ]
    },
    {
      category: "기술적 문제",
      questions: [
        {
          question: "테스트가 진행되지 않아요.",
          answer: "브라우저를 새로고침하거나 다른 브라우저로 시도해보세요. 그래도 문제가 해결되지 않으면 문의 페이지를 통해 알려주시면 빠르게 해결해드리겠습니다. 가능하면 사용 중인 기기와 브라우저 정보도 함께 알려주세요."
        },
        {
          question: "결과 화면이 제대로 표시되지 않아요.",
          answer: "잠시 기다린 후 다시 시도해보시거나, 브라우저 캐시를 삭제해보세요. 계속 문제가 발생하면 사용하시는 기기와 브라우저 정보와 함께 문의해주세요. 대부분의 문제는 브라우저 캐시 삭제로 해결됩니다."
        },
        {
          question: "공유 기능이 작동하지 않아요.",
          answer: "카카오톡 공유의 경우 카카오톡 앱이 설치되어 있어야 합니다. 다른 공유 방법으로는 링크 복사 기능을 이용해보세요. 모바일에서는 브라우저 설정에서 팝업 허용이 되어있는지 확인해주세요."
        },
        {
          question: "사이트 로딩이 느려요.",
          answer: "네트워크 상태를 확인해보시고, 다른 사이트도 느린지 확인해보세요. 쫄부월드는 빠른 로딩을 위해 최적화되어 있지만, 인터넷 속도나 기기 성능에 따라 차이가 있을 수 있습니다. 문제가 지속되면 문의해주세요."
        },
        {
          question: "이미지 저장이 안 돼요.",
          answer: "브라우저 설정에서 다운로드 허용이 되어있는지 확인해주세요. 모바일의 경우 이미지를 길게 눌러서 저장할 수 있습니다. 또는 스크린샷을 찍어서 저장하는 방법도 있습니다."
        },
        {
          question: "광고가 너무 많이 나와요.",
          answer: "쫄부월드는 무료 서비스 제공을 위해 적절한 수준의 광고를 운영하고 있습니다. 테스트 진행에 방해가 되지 않도록 최적화하고 있으며, 과도한 광고가 표시된다면 문의해주세요."
        }
      ]
    },
    {
      category: "쫄부월드 서비스",
      questions: [
        {
          question: "쫄부월드는 언제 시작된 서비스인가요?",
          answer: "쫄부월드는 2024년에 시작된 MBTI 테스트 전문 플랫폼입니다. 기존의 딱딱한 성격 테스트와 달리 재미있는 스토리텔링과 귀여운 캐릭터를 통해 더 즐거운 테스트 경험을 제공하고자 시작되었습니다."
        },
        {
          question: "왜 '쫄부월드'라는 이름인가요?",
          answer: "'쫄'과 '부'라는 두 캐릭터가 함께 만들어가는 특별한 세계라는 의미입니다. 쫄이는 활발하고 외향적인 성격을, 부는 차분하고 내성적인 성격을 대표하여 모든 성격 유형을 포용하는 공간을 만들고자 했습니다."
        },
        {
          question: "앞으로 어떤 테스트가 추가될 예정인가요?",
          answer: "현재 음식 테스트, 패션 테스트, 영화 추천 테스트 등을 개발 중입니다. 또한 계절별 특별 테스트, 연령대별 맞춤 테스트 등도 계획하고 있습니다. 사용자들의 의견을 적극 반영하여 더 다양하고 재미있는 테스트를 제공할 예정입니다."
        },
        {
          question: "테스트 결과가 과학적으로 검증되었나요?",
          answer: "쫄부월드의 모든 테스트는 심리학 전공자와 MBTI 전문가의 검토를 거쳐 제작됩니다. Myers-Briggs Type Indicator의 공식 이론을 기반으로 하되, 더 재미있고 접근하기 쉽도록 각색하였습니다."
        },
        {
          question: "기업이나 교육기관에서 활용할 수 있나요?",
          answer: "개인 이용 목적으로 제작된 서비스이지만, 비상업적 교육 목적으로는 자유롭게 활용하실 수 있습니다. 상업적 이용이나 대량 사용을 원하시면 별도로 문의해주세요."
        }
      ]
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* 헤더 섹션 */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-6 text-[#5D4037]">
              ❓ 자주 묻는 질문 (FAQ)
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              쫄부월드 이용 중 궁금한 점들을 모아두었습니다. 
              원하는 답변을 찾을 수 없다면 언제든 문의해주세요!
            </p>
          </div>

          {/* FAQ 섹션들 */}
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-6 text-[#5D4037] border-b border-gray-200 pb-4">
                📋 {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div key={questionIndex} className="border border-gray-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                      >
                        <h3 className="font-semibold text-gray-800 pr-4">
                          {item.question}
                        </h3>
                        <span className={`text-2xl transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      
                      {isOpen && (
                        <div className="p-6 bg-white border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* 추가 도움말 섹션 */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#5D4037]">
              💬 더 궁금한 점이 있으신가요?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              FAQ에서 답변을 찾지 못하셨다면 언제든 문의해주세요. 
              빠르고 친절하게 답변드리겠습니다!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                📧 문의하기
              </a>
              <a 
                href="/about" 
                className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all"
              >
                🏢 쫄부월드 소개
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
