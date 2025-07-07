import { getDinoCardData } from '../data/getDinoCardData';
import ShareCard from '../components/ShareCard';

export default function ResultPage({ mbti }) {
  const card = getDinoCardData(mbti);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <ShareCard {...card} />
      {/* 추가 결과 텍스트/버튼/공유 기능 등 배치 가능 */}
    </div>
  );
}
