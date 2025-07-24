// 🏢 회사 소개 페이지 - 대폭 보강된 버전
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function About() {
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
                  재미있고 친근한 성격 테스트의 세계
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  쫄부월드는 2024년에 시작된 MBTI 기반의 성격 테스트 전문 플랫폼입니다. 
                  기존의 딱딱하고 지루한 성격 테스트와 달리, 재미있는 스토리텔링과 귀여운 캐릭터들이 함께하는 
                  특별한 세계관에서 여러분의 진정한 모습을 발견할 수 있도록 도와드립니다. 
                  쫄과 부라는 개성 넘치는 캐릭터들과 함께 공룡시대부터 고양이 왕국까지, 
                  다양한 세계를 여행하며 즐거운 테스트를 경험해보세요!
                </p>
              </section>

              {/* 서비스 통계 */}
              <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h2 className="text-xl font-bold mb-6 text-center text-[#5D4037]">
                  📊 쫄부월드 현황
                </h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">6+</div>
                    <p className="text-gray-600">다양한 테마 테스트</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">16</div>
                    <p className="text-gray-600">MBTI 성격 유형</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">100+</div>
                    <p className="text-gray-600">캐릭터 & 결과</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">0원</div>
                    <p className="text-gray-600">완전 무료 서비스</p>
                  </div>
                </div>
              </section>

              {/* 서비스 특징 */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#5D4037]">
                  🎯 쫄부월드만의 특별함
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                    <div className="text-3xl mb-3">🎨</div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-2">독창적인 테마 세계관</h3>
                    <p className="text-gray-700">
                      공룡시대의 생존 본능부터 고양이 왕국의 일상까지, 
                      각기 다른 매력적인 세계관을 배경으로 한 독특하고 창의적인 성격 테스트를 제공합니다. 
                      단순한 질문이 아닌 스토리 속에서 자연스럽게 자신의 모습을 발견할 수 있어요.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
                    <div className="text-3xl mb-3">🔬</div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-2">MBTI 이론 기반의 재미있는 분석</h3>
                    <p className="text-gray-700">
                      Myers-Briggs Type Indicator의 이론을 기반으로 하여 흥미로운 결과를 제공합니다. 
                      심리학 이론을 친근하고 재미있게 각색하여 제작된 테스트로 
                      자신을 더 깊이 이해할 수 있는 맞춤형 결과를 받아보세요.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                    <div className="text-3xl mb-3">🎮</div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-2">게이미피케이션 요소</h3>
                    <p className="text-gray-700">
                      지루한 설문조사가 아닌 게임처럼 재미있는 테스트 경험을 선사합니다. 
                      퀘스트를 완료하듯 질문에 답하고, RPG 캐릭터를 얻듯 결과를 확인하며, 
                      친구들과 경쟁하듯 결과를 공유할 수 있어요.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl">
                    <div className="text-3xl mb-3">📱</div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-2">완벽한 모바일 최적화</h3>
                    <p className="text-gray-700">
                      언제 어디서나 편리하게 이용할 수 있는 반응형 디자인과 직관적인 사용자 인터페이스를 제공합니다. 
                      PC, 태블릿, 스마트폰 등 모든 기기에서 동일한 품질의 서비스를 경험하실 수 있어요.
                    </p>
                  </div>
                </div>
              </section>

              {/* 제공 서비스 */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#5D4037]">
                  🌈 제공하는 서비스
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border-2 border-purple-200 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4 text-center">🦕</div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-3 text-center">테마 기반 MBTI 테스트</h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• 공룡 MBTI 테스트 (생존 본능 중심)</li>
                      <li>• 고양이 MBTI 테스트 (일상 선호도 중심)</li>
                      <li>• 음식 성향 테스트 (개발 예정)</li>
                      <li>• 패션 스타일 테스트 (개발 예정)</li>
                      <li>• 영화 추천 테스트 (개발 예정)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border-2 border-blue-200 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4 text-center">📊</div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-3 text-center">상세한 결과 분석</h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• 16가지 MBTI 유형 완전 분석</li>
                      <li>• 개인별 맞춤 캐릭터 매칭</li>
                      <li>• 강점과 약점 상세 설명</li>
                      <li>• 연애 스타일 및 궁합 정보</li>
                      <li>• 적합한 직업 및 진로 추천</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border-2 border-green-200 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4 text-center">🚀</div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-3 text-center">편리한 부가 기능</h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• 소셜미디어 간편 공유</li>
                      <li>• 고품질 결과 이미지 생성</li>
                      <li>• 결과 이미지 다운로드</li>
                      <li>• MBTI 가이드 및 교육 자료</li>
                      <li>• 24시간 무료 이용</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 캐릭터 소개 */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#5D4037]">
                  👫 쫄과 부를 소개합니다
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl text-center">
                    <div className="text-6xl mb-4">🐱</div>
                    <h3 className="text-xl font-bold text-[#5D4037] mb-3">쫄 (Zzol)</h3>
                    <div className="bg-white p-4 rounded-xl mb-4">
                      <p className="text-sm text-gray-600 mb-2">MBTI: ENFP</p>
                      <p className="text-sm text-gray-600 mb-2">특징: 활발하고 호기심 많은 모험가</p>
                      <p className="text-sm text-gray-600">좋아하는 것: 새로운 도전, 친구들과의 시간</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      호기심 많고 활발한 성격의 쫄이에요! 
                      새로운 모험을 좋아하고 여러분과 함께 
                      재미있는 테스트 여행을 떠나고 싶어해요. 
                      항상 긍정적이고 에너지가 넘치며, 
                      친구들을 웃게 만드는 재주가 있어요. 
                      때로는 충동적이지만 그 덕분에 
                      예상치 못한 재미있는 결과를 만들어내곤 해요!
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl text-center">
                    <div className="text-6xl mb-4">🐰</div>
                    <h3 className="text-xl font-bold text-[#5D4037] mb-3">부 (Boo)</h3>
                    <div className="bg-white p-4 rounded-xl mb-4">
                      <p className="text-sm text-gray-600 mb-2">MBTI: INFJ</p>
                      <p className="text-sm text-gray-600 mb-2">특징: 차분하고 통찰력 있는 조언자</p>
                      <p className="text-sm text-gray-600">좋아하는 것: 깊은 대화, 혼자만의 시간</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      차분하고 신중한 성격의 부예요! 
                      깊이 있는 분석을 좋아하고 여러분의 
                      진정한 모습을 찾아드리는 것을 도와줘요. 
                      따뜻한 공감능력을 가지고 있으며, 
                      다른 사람의 감정을 잘 이해해요. 
                      때로는 완벽주의적이지만 그 덕분에 
                      정확하고 의미 있는 결과를 제공할 수 있어요!
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl text-center">
                  <h4 className="text-lg font-semibold text-[#5D4037] mb-3">🌟 쫄과 부의 특별한 역할</h4>
                  <p className="text-gray-700 leading-relaxed">
                    쫄과 부는 단순한 마스코트가 아니에요! 
                    여러분의 테스트 결과가 경계선에 있거나 균형잡힌 성격을 보일 때 등장하는 특별한 캐릭터들입니다. 
                    이들은 기존 MBTI 16가지 유형으로 분류하기 어려운, 
                    독특하고 균형잡힌 성격의 소유자들을 위한 맞춤형 결과를 제공합니다. 
                    때로는 가장 특별한 사람들이 가장 일반적인 카테고리에 맞지 않을 수 있거든요!
                  </p>
                </div>
              </section>

              {/* 미션과 비전 */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#5D4037]">
                  🎯 쫄부월드의 미션과 비전
                </h2>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-[#5D4037] mb-4">우리의 미션</h3>
                    <p className="text-lg text-gray-800 leading-relaxed mb-6">
                      "모든 사람이 자신만의 고유한 성격과 특성을 이해하고, 
                      그것을 바탕으로 더 행복하고 의미 있는 삶을 살 수 있도록 돕는 것"
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center bg-white p-6 rounded-xl">
                      <div className="text-3xl mb-3">🌱</div>
                      <h4 className="font-semibold text-[#5D4037] mb-2">자아 발견</h4>
                      <p className="text-sm text-gray-600">
                        진정한 나를 찾아가는 여정을 지원하며, 
                        자신의 강점과 가능성을 발견할 수 있도록 도와드립니다.
                      </p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-xl">
                      <div className="text-3xl mb-3">🤝</div>
                      <h4 className="font-semibold text-[#5D4037] mb-2">관계 개선</h4>
                      <p className="text-sm text-gray-600">
                        타인과의 더 나은 소통과 이해를 통해 
                        건강하고 긍정적인 인간관계를 구축할 수 있도록 지원합니다.
                      </p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-xl">
                      <div className="text-3xl mb-3">✨</div>
                      <h4 className="font-semibold text-[#5D4037] mb-2">성장 지원</h4>
                      <p className="text-sm text-gray-600">
                        개인의 지속적인 발전과 성장을 위한 
                        인사이트와 동기를 제공합니다.
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-[#5D4037] mb-4">우리의 비전</h3>
                    <p className="text-gray-700 leading-relaxed">
                      성격 테스트를 통해 자신을 이해하는 것이 즐겁고 의미있는 경험이 되는 세상을 만들어가고 있습니다. 
                      앞으로도 더 다양하고 재미있는 테스트를 개발하여 
                      전 세계 사람들이 자신만의 특별함을 발견할 수 있도록 노력하겠습니다.
                    </p>
                  </div>
                </div>
              </section>

              {/* 개발자 소개 */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-center text-[#5D4037]">
                  �‍💻 개발자 소개
                </h2>
                <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">�‍♂️</div>
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-2">안녕하세요, 쫄부월드 개발자입니다!</h3>
                    <p className="text-gray-600">
                      개인 개발자가 정성스럽게 만들어가는 작은 세상입니다
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-[#5D4037] mb-3">💡 개발 동기</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        기존의 딱딱한 MBTI 테스트들이 아쉬워서 시작했습니다. 
                        더 재미있고 친근한 방식으로 자신을 알아갈 수 있는 공간을 만들고 싶었어요. 
                        혼자서 천천히 만들어가고 있지만, 사용자 여러분의 피드백을 받으며 계속 발전시켜 나가고 있습니다.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#5D4037] mb-3">🛠️ 기술 스택</h4>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• React + Vite (프론트엔드)</li>
                          <li>• Tailwind CSS (스타일링)</li>
                          <li>• JavaScript (개발 언어)</li>
                          <li>• GitHub Pages (배포)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#5D4037] mb-3">📚 학습과 개발</h4>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• MBTI 이론 독학 및 연구</li>
                          <li>• 사용자 경험(UX) 개선 노력</li>
                          <li>• 웹 개발 기술 지속 학습</li>
                          <li>• 커뮤니티 피드백 적극 반영</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-[#5D4037] mb-3">🎯 개발 철학</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        "완벽하지 않아도 괜찮다. 사용자가 즐거워한다면 그것으로 충분하다." 
                        큰 팀이 아닌 개인이 만드는 서비스이기에 부족한 점이 있을 수 있지만, 
                        그 대신 더 세심하고 따뜻한 마음으로 서비스를 가꾸어 나가고 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 연락처 정보 및 CTA */}
              <section className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#5D4037]">
                  📞 함께 소통해요!
                </h2>
                <div className="text-center space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    쫄부월드에 대한 의견, 제안사항, 또는 새로운 테스트 아이디어가 있으시다면 언제든 연락해주세요! 
                    여러분의 소중한 피드백이 더 나은 서비스를 만드는 원동력이 됩니다.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                      <span className="text-blue-500 text-lg">📧</span>
                      <span className="text-gray-700 font-medium">016sol@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                      <span className="text-green-500 text-lg">🌐</span>
                      <span className="text-gray-700 font-medium">www.zzolbooworld.com</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-4">🎯 지금 바로 테스트해보세요!</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a 
                        href="/dinosaur-test" 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105"
                      >
                        🦕 공룡 MBTI 테스트
                      </a>
                      <a 
                        href="/cat-test" 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
                      >
                        🐱 고양이 MBTI 테스트
                      </a>
                      <a 
                        href="/contact" 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105"
                      >
                        💌 문의하기
                      </a>
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

export default About;
