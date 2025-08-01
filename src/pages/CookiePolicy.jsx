// 📄 쿠키 정책 페이지
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-[#5D4037]">
              쿠키 정책
            </h1>

            <div className="space-y-8 text-gray-800 text-base leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">1. 쿠키란 무엇인가요?</h2>
                <p>
                  쿠키는 웹사이트가 사용자의 디바이스에 저장하는 작은 텍스트 파일입니다. 쿠키는 웹사이트가 사용자를 기억하고, 사용자의 선호도를 이해하며, 사용자 경험을 개선하는 데 도움을 줍니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">2. 쫄부월드에서 사용하는 쿠키의 종류</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3 text-green-800">🍪 필수 쿠키 (Essential Cookies)</h3>
                    <p className="text-green-700 mb-3">웹사이트의 기본 기능을 위해 반드시 필요한 쿠키입니다.</p>
                    <ul className="list-disc list-inside space-y-1 text-green-700">
                      <li>테스트 결과 임시 저장</li>
                      <li>사용자 세션 관리</li>
                      <li>보안 기능</li>
                    </ul>
                    <p className="text-sm text-green-600 mt-3">이 쿠키들은 거부할 수 없으며, 거부 시 서비스 이용이 제한될 수 있습니다.</p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-800">📊 분석 쿠키 (Analytics Cookies)</h3>
                    <p className="text-blue-700 mb-3">서비스 개선을 위해 사용자 행동을 분석하는 쿠키입니다.</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-700">
                      <li>Google Analytics: 웹사이트 방문 통계</li>
                      <li>페이지 조회수 및 사용자 행동 분석</li>
                      <li>서비스 성능 모니터링</li>
                    </ul>
                    <p className="text-sm text-blue-600 mt-3">이 쿠키들은 익명화된 정보만 수집합니다.</p>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3 text-purple-800">🎯 광고 쿠키 (Advertising Cookies)</h3>
                    <p className="text-purple-700 mb-3">맞춤형 광고 제공을 위한 쿠키입니다.</p>
                    <ul className="list-disc list-inside space-y-1 text-purple-700">
                      <li>Google AdSense: 맞춤형 광고 제공</li>
                      <li>광고 효과 측정 및 최적화</li>
                      <li>중복 광고 방지</li>
                    </ul>
                    <p className="text-sm text-purple-600 mt-3">이 쿠키들은 사용자 선호도에 따른 광고를 제공합니다.</p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3 text-orange-800">⚙️ 기능 쿠키 (Functional Cookies)</h3>
                    <p className="text-orange-700 mb-3">사용자 편의를 위한 추가 기능을 제공하는 쿠키입니다.</p>
                    <ul className="list-disc list-inside space-y-1 text-orange-700">
                      <li>언어 설정 기억</li>
                      <li>테마 설정 저장</li>
                      <li>사용자 선호도 기억</li>
                    </ul>
                    <p className="text-sm text-orange-600 mt-3">이 쿠키들은 사용자 경험을 향상시킵니다.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">3. Google AdSense 쿠키 상세 정보</h2>
                <p>
                  쫄부월드는 Google AdSense를 통해 광고 서비스를 제공합니다. Google AdSense는 다음과 같은 쿠키를 사용합니다:
                </p>
                <div className="mt-4 bg-gray-50 rounded-xl p-4 space-y-3">
                  <div>
                    <p className="font-semibold">__gads</p>
                    <p className="text-sm">광고 효과 측정 및 중복 광고 방지</p>
                  </div>
                  <div>
                    <p className="font-semibold">_gac_*</p>
                    <p className="text-sm">Google Analytics와 AdSense 연동</p>
                  </div>
                  <div>
                    <p className="font-semibold">DoubleClick 쿠키</p>
                    <p className="text-sm">Google의 광고 네트워크 관련 쿠키</p>
                  </div>
                </div>
                <p className="mt-3">
                  Google AdSense의 쿠키 사용에 대한 자세한 내용은 <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google의 광고 정책</a>을 참조하세요.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">4. 쿠키 관리 방법</h2>
                <p>사용자는 다음과 같은 방법으로 쿠키를 관리할 수 있습니다:</p>
                
                <div className="mt-4 space-y-4">
                  <div className="bg-yellow-50 rounded-xl p-4">
                    <h3 className="font-semibold mb-2">🌐 브라우저 설정을 통한 관리</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Chrome: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
                      <li>Safari: 환경설정 → 개인정보 보호 → 쿠키 및 웹사이트 데이터</li>
                      <li>Firefox: 옵션 → 개인정보 및 보안 → 쿠키 및 사이트 데이터</li>
                      <li>Edge: 설정 → 쿠키 및 사이트 권한 → 쿠키</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4">
                    <h3 className="font-semibold mb-2">🎯 광고 개인화 설정</h3>
                    <p className="text-sm mb-2">Google 광고 개인화를 관리하려면:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><a href="https://adssettings.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google 광고 설정</a>에서 광고 개인화를 끄거나 조정</li>
                      <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics 옵트아웃</a>을 통해 분석 데이터 수집 거부</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <h3 className="font-semibold mb-2">🔄 쿠키 삭제</h3>
                    <p className="text-sm">브라우저의 쿠키를 삭제하면 저장된 설정이 초기화됩니다. 단, 필수 쿠키는 다시 생성됩니다.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">5. 쿠키 사용의 영향</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-xl p-4">
                    <h3 className="font-semibold mb-2 text-red-800">❌ 쿠키 거부 시</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                      <li>맞춤형 광고 대신 일반 광고 표시</li>
                      <li>일부 기능 제한 (테마 저장 등)</li>
                      <li>사용자 경험 저하</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <h3 className="font-semibold mb-2 text-green-800">✅ 쿠키 허용 시</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
                      <li>맞춤형 광고 및 콘텐츠 제공</li>
                      <li>개인화된 사용자 경험</li>
                      <li>서비스 개선을 위한 데이터 수집</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">6. 쿠키 정책 변경</h2>
                <p>
                  본 쿠키 정책은 2025년 7월 30일부터 시행됩니다. 정책 변경 시 최소 7일 전에 공지사항을 통해 고지합니다.
                </p>
                <div className="mt-4 bg-blue-50 rounded-lg p-4">
                  <p><strong>공고일자:</strong> 2025년 7월 30일</p>
                  <p><strong>시행일자:</strong> 2025년 7월 30일</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">7. 문의하기</h2>
                <p>
                  쿠키 사용에 대한 질문이나 우려사항이 있으시면 언제든지 연락주세요.
                </p>
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>연락처</strong></p>
                  <p>이메일: 016sol@gmail.com</p>
                  <p>문의: 사이트 내 문의 페이지를 통해 접수</p>
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