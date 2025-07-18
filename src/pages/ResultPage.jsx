import ResultActions from "../components/result/ResultActions";
import ShareModal from "../components/result/ShareModal";

export default function ResultPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* 결과 카드 이미지 영역 */}
      <div className="mb-6">
        <img src="/images/result-card.png" alt="결과 카드" />
      </div>

      {/* 텍스트 결과 */}
      <p className="text-center font-bold text-xl">d님의 결과: ESTJ - 카르노타우루스</p>
      <p className="text-sm text-center mt-2">설명 텍스트 여기에 들어감</p>

      {/* 액션 버튼 그룹 */}
      <ResultActions />

      {/* 공유 팝업 */}
      <ShareModal />
    </div>
  );
}
