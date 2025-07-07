// 결과 카드 컴포넌트
export default function ShareCard({
  keywords,
  mbti,
  character,
  description,
  imageUrl,
  goodMatches,
  badMatches,
  palette
}) {
  return (
    <div
      style={{
        backgroundColor: palette.bg,
        width: 358, height: 627,
        borderRadius: 24,
        boxShadow: "0 2px 16px #0001",
        padding: 24,
        fontFamily: "Pretendard, sans-serif",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ fontSize: 12, fontWeight: 600, color: "#A88895" }}>ZZOLBOOWORLD.COM</div>
      <div style={{ width: "100%", maxWidth: 280, aspectRatio: 1, background: "#EBC2C2", borderRadius: 24, margin: "12px auto 8px auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {imageUrl && (
          <img src={imageUrl} alt={character} style={{ maxWidth: "90%", maxHeight: "90%" }} />
        )}
      </div>
      <h2 style={{ color: palette.char }}>{character} <span style={{ color: palette.name }}>({mbti})</span></h2>
      <p style={{ color: palette.char, fontWeight: 500 }}>{description}</p>
      <div style={{ margin: "12px 0" }}>
        <strong>키워드:</strong> {keywords && keywords.join(', ')}
      </div>
      <div style={{ margin: "12px 0" }}>
        <strong>나의 절친 공룡:</strong>
        {goodMatches && goodMatches.map(match => (
          <div key={match.mbti}>{match.label} ({match.mbti})</div>
        ))}
      </div>
      <div style={{ margin: "12px 0" }}>
        <strong>상극 공룡:</strong>
        {badMatches && badMatches.map(match => (
          <div key={match.mbti}>{match.label} ({match.mbti})</div>
        ))}
      </div>
    </div>
  );
}
