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
          answer: "MBTI는 과학적으로 검증된 성격 평가 도구로, 개인의 성격 경향을 파악하는데 도움을 줍니다. 하지만 100% 정확하지는 않으며, 참고 자료로 활용하시는 것이 좋습니다. 시간이 지나면서 성격이 변할 수 있으므로 주기적으로 테스트를 다시 해보시는 것을 추천합니다."
        },
        {
          question: "테스트는 몇 분 정도 걸리나요?",
          answer: "각 테스트는 보통 5-10분 정도 소요됩니다. 너무 오래 고민하지 마시고, 직감적으로 답변하시는 것이 더 정확한 결과를 얻을 수 있습니다."
        },
        {
          question: "같은 테스트를 여러 번 해도 되나요?",
          answer: "물론입니다! 시간이 지나면서 생각이나 상황이 변할 수 있으므로, 주기적으로 테스트를 다시 해보시는 것도 좋습니다. 다른 결과가 나올 수도 있으며, 이는 자연스러운 현상입니다."
        },
        {
          question: "테스트 결과가 마음에 들지 않아요.",
          answer: "테스트 결과는 현재의 상태를 반영한 것일 뿐입니다. 성격은 고정된 것이 아니며, 노력과 경험을 통해 발전시킬 수 있습니다. 결과를 부정적으로 받아들이기보다는 자신을 이해하는 하나의 관점으로 활용해보세요."
        }
      ]
    },
    {
      category: "사이트 이용 관련",
      questions: [
        {
          question: "회원가입이 필요한가요?",
          answer: "아니요, 쫄부월드의 모든 테스트는 회원가입 없이 무료로 이용 가능합니다. 이름만 입력하시면 바로 테스트를 시작할 수 있습니다."
        },
        {
          question: "개인정보는 어떻게 처리되나요?",
          answer: "입력하신 이름과 테스트 결과는 브라우저에만 임시 저장되며, 서버에 전송되지 않습니다. 테스트 종료 시 자동으로 삭제되므로 개인정보 걱정 없이 이용하실 수 있습니다."
        },
        {
          question: "모바일에서도 이용할 수 있나요?",
          answer: "네, 쫄부월드는 모바일 최적화가 되어 있어 스마트폰, 태블릿에서도 편리하게 이용하실 수 있습니다."
        },
        {
          question: "테스트 결과를 공유할 수 있나요?",
          answer: "네! 카카오톡, 페이스북, 트위터 등으로 테스트 결과를 친구들과 공유할 수 있습니다. 또한 링크 복사 기능도 제공됩니다."
        }
      ]
    },
    {
      category: "결과 해석 관련",
      questions: [
        {
          question: "MBTI 유형별 특징을 더 자세히 알고 싶어요.",
          answer: "MBTI 가이드 페이지에서 16가지 성격 유형의 상세한 설명을 확인하실 수 있습니다. 각 유형의 특성, 강점, 적합한 직업 등을 자세히 소개하고 있습니다."
        },
        {
          question: "궁합 정보는 어떻게 해석해야 하나요?",
          answer: "궁합 정보는 일반적인 경향을 나타내는 것으로, 절대적인 기준은 아닙니다. 실제 관계에서는 개인의 성숙도, 소통 능력, 가치관 등이 더 중요한 요소가 될 수 있습니다."
        },
        {
          question: "성격 유형이 자주 바뀌는데 정상인가요?",
          answer: "경계선에 있는 성격 특성을 가진 분들은 상황에 따라 다른 결과가 나올 수 있습니다. 이는 정상적인 현상이며, 오히려 균형잡힌 성격을 의미할 수도 있습니다."
        }
      ]
    },
    {
      category: "기술적 문제",
      questions: [
        {
          question: "테스트가 진행되지 않아요.",
          answer: "브라우저를 새로고침하거나 다른 브라우저로 시도해보세요. 그래도 문제가 해결되지 않으면 문의 페이지를 통해 알려주시면 빠르게 해결해드리겠습니다."
        },
        {
          question: "결과 화면이 제대로 표시되지 않아요.",
          answer: "잠시 기다린 후 다시 시도해보시거나, 브라우저 캐시를 삭제해보세요. 계속 문제가 발생하면 사용하시는 기기와 브라우저 정보와 함께 문의해주세요."
        },
        {
          question: "공유 기능이 작동하지 않아요.",
          answer: "카카오톡 공유의 경우 카카오톡 앱이 설치되어 있어야 합니다. 다른 공유 방법으로는 링크 복사 기능을 이용해보세요."
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
