import ResultActions from "../components/result/ResultActions";
import ShareModal from "../components/result/ShareModal";
import ImageGeneratorComponent from "../components/common/ImageGeneratorComponent";

export default function ResultPage() {
  // 예시 데이터 - 실제로는 props나 state에서 가져올 것
  const resultData = {
    testType: 'dinosaur',
    result: 'ESTJ',
    characterImage: '/images/tests/dinosaur/ESTJ.png',
    userName: 'd',
    description: '당신은 강력한 리더십을 가진 카르노타우루스입니다. 목표 지향적이고 체계적인 성격으로 팀을 이끄는 능력이 뛰어납니다.',
    characterName: '카르노타우루스'
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* 결과 카드 이미지 영역 */}
      <div className="mb-6">
        <img src="/images/result-card.png" alt="결과 카드" />
      </div>

      {/* 텍스트 결과 */}
      <p className="text-center font-bold text-xl">{resultData.userName}님의 결과: {resultData.result} - {resultData.characterName}</p>
      <p className="text-sm text-center mt-2">{resultData.description}</p>

      {/* 이미지 생성 컴포넌트 */}
      <div className="mt-6 mb-6">
        <ImageGeneratorComponent {...resultData} />
      </div>

      {/* 액션 버튼 그룹 */}
      <ResultActions />

      {/* 공유 팝업 */}
      <ShareModal />
    </div>
  );
}
