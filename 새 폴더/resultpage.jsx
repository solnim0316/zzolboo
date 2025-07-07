// src/pages/ResultPage.jsx
import { getDinoCardData } from '../data/getDinoCardData';
import ShareCard from '../components/ShareCard';

export default function ResultPage({ mbti }) {
  const card = getDinoCardData(mbti);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* 공유용 카드 상단 자동 노출 */}
      <ShareCard
        keywords={card.keywords}
        mbti={card.mbti}
        character={card.character}
        description={card.description}
        imageUrl={card.imageUrl}
        goodMatches={card.goodMatches}
        badMatches={card.badMatches}
        palette={card.palette}
      />
      {/* 추가 결과 텍스트/버튼/공유 기능 등 여기에 배치 */}
    </div>
  );
}
