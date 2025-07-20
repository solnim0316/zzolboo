// 📄 개인정보처리방침 페이지
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-[#5D4037]">
              개인정보처리방침
            </h1>

            <div className="space-y-8 text-gray-800 text-base leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">1. 개인정보의 처리 목적</h2>
                <p>
                  쫄부월드(ZZOLBOOWORLD)는 다음의 목적을 위해 최소한의 개인정보를 수집하고 이용합니다. 수집된 개인정보는 아래 목적 외에는 사용되지 않으며, 목적이 변경될 경우 관련 법에 따라 별도 동의를 받습니다.
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>MBTI 성격 테스트 서비스 제공</li>
                  <li>결과 기반 맞춤형 콘텐츠 제공</li>
                  <li>서비스 개선을 위한 통계 분석</li>
                  <li>고객 문의 및 민원 응대</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">2. 개인정보의 수집 항목 및 보유 기간</h2>
                <p>쫄부월드는 아래 항목을 수집하며, 목적 달성 후 지체 없이 파기합니다.</p>
                <div className="mt-4 bg-gray-50 rounded-xl p-4 space-y-2">
                  <p><strong>테스트 결과 데이터:</strong> 브라우저 로컬 저장소에 임시 보관 (사용자 직접 삭제 가능)</p>
                  <p><strong>입력된 이름:</strong> 테스트 종료 시 자동 삭제</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">3. 개인정보의 제3자 제공</h2>
                <p>
                  회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않으며, 다음의 경우에만 예외적으로 제공할 수 있습니다.
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>이용자의 사전 동의를 받은 경우</li>
                  <li>법령에 따라 제출 의무가 있는 경우</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">4. 개인정보 처리 위탁</h2>
                <p>
                  현재 쫄부월드는 개인정보 처리 업무를 외부에 위탁하고 있지 않습니다. 향후 위탁이 발생할 경우, 법에 따라 계약서에 안전조치를 명시하고 이를 고지하겠습니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">5. 정보주체의 권리 및 행사방법</h2>
                <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>개인정보 열람, 정정, 삭제 요구</li>
                  <li>개인정보 처리 정지 요청</li>
                  <li>개인정보 수집·이용 동의 철회</li>
                  <li>손해배상 청구</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">6. 개인정보의 안전성 확보조치</h2>
                <p>쫄부월드는 다음과 같은 보호조치를 시행하고 있습니다.</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>접근 권한 최소화</li>
                  <li>담당자 보안 교육</li>
                  <li>로컬 데이터 암호화</li>
                  <li>보안 위협 방지를 위한 기술적 조치</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">7. 쿠키(Cookie)의 사용 안내</h2>
                <p>
                  쫄부월드는 맞춤형 서비스를 위해 쿠키를 사용합니다. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">8. 개인정보 보호책임자</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>개인정보보호책임자</strong></p>
                  <p>이메일: 016sol@gmail.com</p>
                  <p>문의: 사이트 내 문의 페이지를 통해 접수</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">9. 개인정보처리방침의 변경</h2>
                <p>
                  본 방침은 2025년 7월 21일부터 시행되며, 법령 또는 서비스 변경에 따라 수정될 수 있습니다. 변경 시 최소 7일 전 공지사항을 통해 고지합니다.
                </p>
                <div className="mt-4 bg-blue-50 rounded-lg p-4">
                  <p><strong>공고일자:</strong> 2025년 7월 21일</p>
                  <p><strong>시행일자:</strong> 2025년 7월 21일</p>
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
