// 🏢 회사 소개 페이지
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-[#5D4037]">
              🐱 쫄부월드 소개
            </h1>
            
            <div className="space-y-8">
              {/* 메인 소개 */}
              <section className="text-center">
                <div className="text-6xl mb-4">🌟</div>
                <h2 className="text-2xl font-bold text-[#5D4037] mb-4">
                  재미있고 정확한 성격 테스트의 세계
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  쫄부월드는 MBTI 기반의 다양한 성격 테스트를 통해 
                  여러분의 진정한 모습을 발견할 수 있도록 도와드리는 플랫폼입니다. 
                  쫄과 부라는 귀여운 캐릭터들과 함께 특별한 세계관에서 
                  즐거운 테스트를 경험해보세요!
                </p>
              </section>

              {/* 서비스 특징 */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#5D4037]">
                  🎯 우리의 특별함
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                    <div className="text-3xl mb-3">🎨</div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-2">독창적인 테마</h3>
                    <p className="text-gray-700">
                      공룡시대, 고양이 왕국 등 재미있는 세계관을 배경으로 한 
                      독특하고 창의적인 성격 테스트를 제공합니다.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
                    <div className="text-3xl mb-3">🔬</div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-2">과학적 분석</h3>
                    <p className="text-gray-700">
                      MBTI 이론을 기반으로 한 정확한 성격 분석과 
                      맞춤형 결과를 제공하여 자신을 더 깊이 이해할 수 있습니다.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                    <div className="text-3xl mb-3">🎮</div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-2">재미있는 경험</h3>
                    <p className="text-gray-700">
                      지루한 설문이 아닌 스토리텔링과 게임적 요소가 
                      포함된 재미있는 테스트 경험을 선사합니다.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl">
                    <div className="text-3xl mb-3">📱</div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-2">모바일 최적화</h3>
                    <p className="text-gray-700">
                      언제 어디서나 편리하게 이용할 수 있는 
                      반응형 디자인과 직관적인 사용자 인터페이스를 제공합니다.
                    </p>
                  </div>
                </div>
              </section>

              {/* 캐릭터 소개 */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#5D4037]">
                  👫 쫄과 부를 만나보세요
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🐱</div>
                    <h3 className="text-xl font-bold text-[#5D4037] mb-3">쫄 (Zzol)</h3>
                    <p className="text-gray-700 leading-relaxed">
                      호기심 많고 활발한 성격의 쫄이에요! 
                      새로운 모험을 좋아하고 여러분과 함께 
                      재미있는 테스트 여행을 떠나고 싶어해요. 
                      ENFP 성향으로 항상 긍정적이고 에너지가 넘쳐요!
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-6xl mb-4">🐰</div>
                    <h3 className="text-xl font-bold text-[#5D4037] mb-3">부 (Boo)</h3>
                    <p className="text-gray-700 leading-relaxed">
                      차분하고 신중한 성격의 부예요! 
                      깊이 있는 분석을 좋아하고 여러분의 
                      진정한 모습을 찾아드리는 것을 도와줘요. 
                      INFJ 성향으로 따뜻한 공감능력을 가지고 있어요!
                    </p>
                  </div>
                </div>
              </section>

              {/* 미션과 비전 */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#5D4037]">
                  🎯 우리의 미션
                </h2>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
                  <div className="text-center">
                    <p className="text-lg text-gray-800 leading-relaxed mb-6">
                      "모든 사람이 자신만의 고유한 성격과 특성을 이해하고, 
                      그것을 바탕으로 더 행복하고 의미 있는 삶을 살 수 있도록 돕는 것"
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl mb-2">🌱</div>
                        <h4 className="font-semibold text-[#5D4037]">자아 발견</h4>
                        <p className="text-sm text-gray-600">진정한 나를 찾아가는 여정</p>
                      </div>
                      <div>
                        <div className="text-2xl mb-2">🤝</div>
                        <h4 className="font-semibold text-[#5D4037]">관계 개선</h4>
                        <p className="text-sm text-gray-600">타인과의 더 나은 소통</p>
                      </div>
                      <div>
                        <div className="text-2xl mb-2">✨</div>
                        <h4 className="font-semibold text-[#5D4037]">성장 지원</h4>
                        <p className="text-sm text-gray-600">개인의 발전과 성장</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 연락처 정보 */}
              <section className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#5D4037]">
                  📞 함께해요!
                </h2>
                <div className="text-center space-y-4">
                  <p className="text-gray-700">
                    쫄부월드에 대한 의견이나 제안사항이 있으시다면 언제든 연락해주세요!
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">📧</span>
                      <span className="text-gray-700">016sol@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">🌐</span>
                      <span className="text-gray-700">www.zzolbooworld.com</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
