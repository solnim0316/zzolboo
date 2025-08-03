// 📄 이용약관 페이지
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-[#5D4037]">
              이용약관
            </h1>

            <div className="space-y-8 text-gray-800 text-base leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">제1조 (목적)</h2>
                <p>
                  본 약관은 쫄부월드(이하 "회사")가 제공하는 성격 테스트 및 관련 콘텐츠 서비스(이하 "서비스")의 이용과 관련하여, 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">제2조 (정의)</h2>
                <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li><strong>서비스:</strong> 회사가 제공하는 MBTI 성격 테스트 및 콘텐츠 전반을 말합니다.</li>
                  <li><strong>이용자:</strong> 회사의 웹사이트에 접속하여 본 약관에 따라 서비스를 이용하는 자를 말합니다.</li>
                  <li><strong>콘텐츠:</strong> 테스트 문항, 결과, 이미지 등 회사가 제공하는 모든 자료를 의미합니다.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">제3조 (약관의 게시 및 개정)</h2>
                <p>
                  회사는 본 약관의 내용과 상호, 대표자 정보, 연락처 등을 이용자가 쉽게 확인할 수 있도록 사이트 내 게시합니다.
                </p>
                <p className="mt-3">
                  회사는 관련 법령을 위반하지 않는 범위 내에서 본 약관을 개정할 수 있으며, 변경 사항은 최소 7일 전부터 사전 공지합니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">제4조 (서비스의 제공 및 변경)</h2>
                <p>회사는 다음 각 호의 서비스를 제공합니다:</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>MBTI 성격 테스트 서비스</li>
                  <li>테스트 결과 기반의 콘텐츠 제공</li>
                  <li>유형별 분석 콘텐츠 제공</li>
                  <li>기타 회사가 정하는 부가 서비스</li>
                </ul>
                <p className="mt-3">
                  회사는 서비스의 내용 또는 제공 방식을 변경할 수 있으며, 변경 시 사전에 고지합니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">제5조 (서비스의 중단)</h2>
                <p>
                  회사는 시스템 점검, 장애, 천재지변 등 불가피한 사유가 발생할 경우 서비스 제공을 일시 중단할 수 있습니다.
                </p>
                <p className="mt-3">
                  이용자에게 손해가 발생한 경우, 회사의 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">제6조 (이용자의 의무)</h2>
                <p>이용자는 다음 각 호의 행위를 하여서는 안 됩니다.</p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>타인의 개인정보를 도용하거나 허위 정보 제공</li>
                  <li>콘텐츠 무단 변경, 복제, 배포</li>
                  <li>회사 및 제3자의 권리 침해 또는 명예훼손</li>
                  <li>공공질서 및 미풍양속에 반하는 게시행위</li>
                  <li>서비스 운영을 방해하는 자동화 도구 사용</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">제7조 (저작권 및 지식재산권)</h2>
                <p>
                  회사가 제공하는 콘텐츠 및 시스템의 저작권은 회사에 있으며, 사전 동의 없이 영리적 목적의 사용, 복제, 배포를 금지합니다.
                </p>
                <p className="mt-3">
                  회사는 일부 테스트에서 제3자의 상표나 저작물을 참조할 수 있으며, 이는 해당 권리자의 권리를 존중하는 범위 내에서 사용됩니다. 
                  예를 들어, League of Legends는 Riot Games, Inc.의 등록상표이며, 관련 테스트는 해당 게임의 공식 사이트를 참조합니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">제8조 (면책조항)</h2>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>회사는 천재지변, 시스템 장애 등 불가항력에 의해 발생한 손해에 대해 책임을 지지 않습니다.</li>
                  <li>이용자의 귀책사유로 인한 서비스 장애에 대해서도 책임을 지지 않습니다.</li>
                  <li>회사는 서비스 이용을 통한 기대 수익 또는 결과에 대해 보장하지 않습니다.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">제9조 (분쟁 해결 및 관할)</h2>
                <p>
                  회사는 이용자의 정당한 민원에 성실히 응답하며, 서비스 이용 중 발생한 분쟁은 민사소송법상 관할 법원에서 해결합니다.
                </p>
              </section>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold">부칙</p>
                <p>본 약관은 2025년 7월 21일부터 시행됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
