// 📚 MBTI 가이드 페이지
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MBTIGuide() {
  const mbtiTypes = [
    {
      type: "INTJ",
      name: "건축가",
      description: "독립적이고 전략적인 사고를 가진 완벽주의자",
      traits: ["분석적", "독립적", "결단력", "창의적"],
      careers: ["연구원", "전략 기획자", "건축가", "시스템 분석가"]
    },
    {
      type: "INTP", 
      name: "논리술사",
      description: "혁신적인 발명가로 지식에 목마른 유형",
      traits: ["논리적", "객관적", "호기심", "유연함"],
      careers: ["연구원", "프로그래머", "수학자", "철학자"]
    },
    {
      type: "ENTJ",
      name: "통솔자", 
      description: "대담하고 상상력이 풍부한 지도자",
      traits: ["결단력", "효율성", "리더십", "전략적"],
      careers: ["경영진", "변호사", "기업가", "정치인"]
    },
    {
      type: "ENTP",
      name: "변론가",
      description: "영리하고 호기심이 많은 사상가",
      traits: ["창의적", "열정적", "독립적", "카리스마"],
      careers: ["마케터", "발명가", "컨설턴트", "언론인"]
    },
    {
      type: "INFJ",
      name: "옹호자",
      description: "선의의 옹호자이며 창의적이고 통찰력 있는 이상주의자",
      traits: ["직관적", "이상주의", "조직적", "독립적"],
      careers: ["상담사", "작가", "교사", "예술가"]
    },
    {
      type: "INFP", 
      name: "중재자",
      description: "열정적이고 독창적인 자유로운 영혼",
      traits: ["이상주의", "충성심", "호기심", "적응력"],
      careers: ["작가", "심리학자", "예술가", "상담사"]
    },
    {
      type: "ENFJ",
      name: "선도자",
      description: "카리스마 있고 영감을 주는 지도자",
      traits: ["카리스마", "이타적", "관용적", "신뢰성"],
      careers: ["교사", "상담사", "정치인", "종교인"]
    },
    {
      type: "ENFP",
      name: "활동가", 
      description: "열정적이고 창의적인 자유로운 정신",
      traits: ["열정적", "창의적", "사교적", "자유로움"],
      careers: ["마케터", "배우", "상담사", "기자"]
    },
    {
      type: "ISTJ",
      name: "논리주의자",
      description: "사실과 신뢰성을 중시하는 실용주의자",
      traits: ["책임감", "체계적", "신뢰성", "실용적"],
      careers: ["회계사", "의사", "변호사", "관리자"]
    },
    {
      type: "ISFJ",
      name: "수호자",
      description: "온화하고 헌신적인 수호자",
      traits: ["이타적", "충성심", "인내심", "관찰력"],
      careers: ["간호사", "교사", "상담사", "사서"]
    },
    {
      type: "ESTJ",
      name: "경영자",
      description: "뛰어난 관리자이며 전통과 질서를 중시",
      traits: ["조직적", "현실적", "논리적", "결단력"],
      careers: ["관리자", "판사", "교사", "경영진"]
    },
    {
      type: "ESFJ",
      name: "집정관",
      description: "배려심 많고 사교적인 협력자",
      traits: ["사교적", "친화적", "협력적", "책임감"],
      careers: ["간호사", "교사", "상담사", "이벤트 기획자"]
    },
    {
      type: "ISTP",
      name: "만능재주꾼",
      description: "대담하고 실용적인 실험정신의 소유자",
      traits: ["논리적", "적응력", "관찰력", "실용적"],
      careers: ["엔지니어", "기계공", "프로그래머", "경찰"]
    },
    {
      type: "ISFP",
      name: "모험가",
      description: "유연하고 매력적인 예술가 기질",
      traits: ["예술적", "자유로움", "민감함", "겸손함"],
      careers: ["예술가", "디자이너", "음악가", "상담사"]
    },
    {
      type: "ESTP",
      name: "사업가",
      description: "관대하고 활동적인 현실주의자",
      traits: ["활동적", "현실적", "관찰력", "적응력"],
      careers: ["영업", "연예인", "기업가", "응급실 의사"]
    },
    {
      type: "ESFP",
      name: "연예인",
      description: "자발적이고 열정적인 자유로운 영혼",
      traits: ["열정적", "친화적", "협력적", "실용적"],
      careers: ["연예인", "교사", "상담사", "이벤트 기획자"]
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* 헤더 섹션 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 text-[#5D4037]">
              📚 MBTI 16가지 성격 유형 완전 가이드
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              MBTI(Myers-Briggs Type Indicator)는 개인의 성격을 16가지 유형으로 분류하는 
              심리학적 도구입니다. 각 유형의 특징과 강점을 알아보고, 
              자신과 타인을 더 깊이 이해해보세요.
            </p>
          </div>

          {/* MBTI 기초 이론 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#5D4037]">
              🧠 MBTI의 4가지 선호 지표
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  에너지 방향성 (E/I)
                </h3>
                <div className="space-y-2 text-sm">
                  <p><strong>외향형 (E):</strong> 외부 세계에서 에너지를 얻음</p>
                  <p><strong>내향형 (I):</strong> 내부 세계에서 에너지를 얻음</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  인식 기능 (S/N)
                </h3>
                <div className="space-y-2 text-sm">
                  <p><strong>감각형 (S):</strong> 구체적이고 현실적인 정보 선호</p>
                  <p><strong>직관형 (N):</strong> 추상적이고 미래지향적 정보 선호</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">
                  판단 기능 (T/F)
                </h3>
                <div className="space-y-2 text-sm">
                  <p><strong>사고형 (T):</strong> 논리와 객관적 분석 중시</p>
                  <p><strong>감정형 (F):</strong> 가치와 인간관계 중시</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  생활 양식 (J/P)
                </h3>
                <div className="space-y-2 text-sm">
                  <p><strong>판단형 (J):</strong> 계획적이고 체계적인 생활</p>
                  <p><strong>인식형 (P):</strong> 유연하고 적응적인 생활</p>
                </div>
              </div>
            </div>
          </div>

          {/* 16가지 성격 유형 */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-center text-[#5D4037]">
              🎭 16가지 성격 유형 상세 분석
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {mbtiTypes.map((type, index) => (
                <div key={type.type} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#5D4037]">
                        {type.type} - {type.name}
                      </h3>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{type.type}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">주요 특성:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.traits.map((trait, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">적합한 직업:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.careers.map((career, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-700">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA 섹션 */}
          <div className="text-center mt-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#5D4037]">
              🎯 나의 MBTI 유형을 찾아보세요!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              쫄부월드의 재미있는 테스트로 자신의 성격 유형을 발견해보세요
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/cat-test" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
                🐱 고양이 MBTI 테스트
              </a>
              <a href="/dinosaur-test" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all">
                🦕 공룡 MBTI 테스트
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
