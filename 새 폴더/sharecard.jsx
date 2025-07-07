// src/components/ShareCard.jsx

export default function ShareCard({
  keywords,
  mbti,
  character,
  description,
  imageUrl,
  goodMatches,
  badMatches,
  palette // { bg, char, pill, name, chip }
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
      {/* 도메인 */}
      <div style={{ fontSize: 12, fontWeight: 600, color: "#A88895" }}>ZZOLBOOWORLD.COM</div>

      {/* 공룡 이미지 */}
      <div
        style={{
          width: "100%", maxWidth: 280, aspectRatio: 1,
          background: "#EBC2C2",
          borderRadius: 24,
          margin: "12px auto 8px auto",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}
      >
        {imageUrl && (
          <img src={imageUrl} alt={character} style={{ maxWidth: "90%", maxHeight: "90%" }} />
        )}
      </div>

      {/* 키워드 라벨 */}
      <div style={{ display: "flex", gap: 8, justifyContent: "center", margin: "16px 0 0 0" }}>
        {keywords.map((kw, idx) => (
          <span
            key={kw}
            style={{
              backgroundColor: palette.char,
              color: "#222", fontWeight: 700, fontSize: 18, borderRadius: 99,
              padding: "5px 16px"
            }}
          >{kw}</span>
        ))}
      </div>

      {/* 설명 */}
      <div style={{ textAlign: "center", margin: "18px 0 0 0", fontWeight: 700 }}>
        {description}
      </div>

      {/* MBTI Pill */}
      <div
        style={{
          backgroundColor: palette.pill,
          color: "#fff",
          fontWeight: 900, fontSize: 36, borderRadius: 40,
          padding: "12px 0", margin: "24px 0 0 0", textAlign: "center"
        }}
      >{mbti}</div>

      {/* 캐릭터명 */}
      <div
        style={{
          backgroundColor: palette.name,
          color: "#fff",
          fontWeight: 900, fontSize: 28, borderRadius: 18,
          padding: "14px 0", margin: "18px 0 0 0", textAlign: "center"
        }}
      >{character}</div>

      {/* 매칭 섹션 */}
      <div style={{ display: "flex", width: "100%", margin: "32px 0 0 0", gap: 16 }}>
        {/* 좋은 궁합 */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>좋은 궁합 공룡들❤️</div>
          <div style={{ display: "flex", gap: 8 }}>
            {goodMatches.map((m) => (
              <div
                key={m.mbti}
                style={{
                  backgroundColor: palette.chip,
                  borderRadius: 12, width: 110, height: 80,
                  display: "flex", flexDirection: "column", justifyContent: "flex-end",
                  fontSize: 14, fontWeight: 600, color: "#47383C"
                }}
              >
                <div style={{
                  background: "#fff7", borderBottomLeftRadius: 12, borderBottomRightRadius: 12,
                  fontSize: 12, fontWeight: 500, padding: "5px 0"
                }}>{m.mbti}/{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* 상극 공룡 */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>만나면 싸우는 공룡⚡</div>
          <div style={{ display: "flex", gap: 8 }}>
            {badMatches.map((m) => (
              <div
                key={m.mbti}
                style={{
                  backgroundColor: palette.chip,
                  borderRadius: 12, width: 110, height: 80,
                  display: "flex", flexDirection: "column", justifyContent: "flex-end",
                  fontSize: 14, fontWeight: 600, color: "#47383C"
                }}
              >
                <div style={{
                  background: "#fff7", borderBottomLeftRadius: 12, borderBottomRightRadius: 12,
                  fontSize: 12, fontWeight: 500, padding: "5px 0"
                }}>{m.mbti}/{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 도메인(하단) */}
      <div style={{
        position: "absolute", bottom: 14, left: 0, width: "100%",
        textAlign: "center", fontSize: 12, fontWeight: 600, color: "#A88895"
      }}>
        ZZOLBOOWORLD.COM
      </div>
    </div>
  );
}
