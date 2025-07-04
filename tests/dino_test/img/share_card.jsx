import React from 'react';
import { DINO_CARD_MAP } from '../dino_card_map.js';;

// 🎨 고정 팔레트 — 여기만 수정하면 전체 카드 색이 바뀜!
const MBTI_PALETTE = {
  INTJ: { bg: '#FFE6FB', pill: '#F46565', keyword: '#D35C4B', nameColor: '#A259FF', mbtiColor: '#F46565' },
  ENFP: { bg: '#E4F9FF', pill: '#45C1F4', keyword: '#3681C4', nameColor: '#FFD600', mbtiColor: '#45C1F4' },
  INFJ: { bg: '#EAFCEF', pill: '#4CAF94', keyword: '#3F7F6B', nameColor: '#6FCF97', mbtiColor: '#4CAF94' },
  ISTP: { bg: '#FFF5E0', pill: '#F2B05E', keyword: '#B57F3A', nameColor: '#B57F3A', mbtiColor: '#F2B05E' },
  INFP: { bg: '#E9E7FD', pill: '#A259FF', keyword: '#6C63FF', nameColor: '#6C63FF', mbtiColor: '#A259FF' },
  ENFJ: { bg: '#FFF3E6', pill: '#FFB86C', keyword: '#FF7F50', nameColor: '#FF7F50', mbtiColor: '#FFB86C' },
  ISFP: { bg: '#E6F9F2', pill: '#4AD991', keyword: '#2E8B57', nameColor: '#2E8B57', mbtiColor: '#4AD991' },
  ESTJ: { bg: '#F6F6F6', pill: '#6C757D', keyword: '#495057', nameColor: '#495057', mbtiColor: '#6C757D' },
  ESFP: { bg: '#FFF0F6', pill: '#FF6F91', keyword: '#FF3E55', nameColor: '#FF3E55', mbtiColor: '#FF6F91' },
  ISTJ: { bg: '#E6F0FF', pill: '#4A90E2', keyword: '#003366', nameColor: '#003366', mbtiColor: '#4A90E2' },
  ISFJ: { bg: '#F0F8FF', pill: '#7EC8E3', keyword: '#4682B4', nameColor: '#4682B4', mbtiColor: '#7EC8E3' },
  ESTP: { bg: '#FFF9E6', pill: '#FFD600', keyword: '#FFA000', nameColor: '#FFA000', mbtiColor: '#FFD600' },
  ESFJ: { bg: '#F6E6FF', pill: '#B983FF', keyword: '#7F3FBF', nameColor: '#7F3FBF', mbtiColor: '#B983FF' },
  ENTJ: { bg: '#FFE6E6', pill: '#FF5C5C', keyword: '#C0392B', nameColor: '#C0392B', mbtiColor: '#FF5C5C' },
  INTP: { bg: '#E6F7FF', pill: '#00B8D9', keyword: '#005F73', nameColor: '#005F73', mbtiColor: '#00B8D9' },
  ENTP: { bg: '#FFFDE6', pill: '#FFD600', keyword: '#FFB300', nameColor: '#FFB300', mbtiColor: '#FFD600' },
};

const FALLBACK = { bg: '#FFDDFF', pill: '#F46565', keyword: '#D35C4B', nameColor: '#A259FF', mbtiColor: '#F46565' };

export default function ShareCard({
  keywords,
  mbti,
  character,
  description,
  domain = 'ZZOLBOOWORLD.COM',
  imageUrl,
  goodMatches,
  badMatches,
  overrideColors = {},
}) {
  // MBTI별 카드 데이터 자동 매핑 (props 우선, 없으면 맵에서)
  const card = DINO_CARD_MAP[mbti] || {};
  const palette = MBTI_PALETTE[mbti] || FALLBACK;
  const bgColor = overrideColors.bg || palette.bg;
  const pillColor = overrideColors.pill || palette.pill;
  const keywordColor = overrideColors.keyword || palette.keyword;
  const nameColor = palette.nameColor;
  const mbtiColor = palette.mbtiColor;

  return (
    <div
      className="w-[358px] h-[627px] rounded-2xl shadow-md flex flex-col items-center px-4 pt-6 pb-4 select-none relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* 도메인 (상단) */}
      <span className="self-start text-[10px] tracking-wide font-semibold text-gray-800">
        {domain}
      </span>

      {/* 메인 캐릭터 이미지 (이미지 없으면 완전히 숨김) */}
      {(imageUrl || card.imageUrl) ? (
        <div
          className="w-full max-w-[280px] aspect-square rounded-lg mt-2 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: keywordColor + '66' }}
        >
          <img src={imageUrl || card.imageUrl} alt={character || card.character} className="object-cover w-full h-full" />
        </div>
      ) : null}

      {/* 키워드 라벨 */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {(keywords || card.keywords || []).map((kw) => (
          <span
            key={kw}
            className="px-3 py-1 rounded-full text-xs font-bold leading-none text-white"
            style={{ backgroundColor: keywordColor }}
          >
            {kw}
          </span>
        ))}
      </div>

      {/* 설명 */}
      <p className="text-sm font-semibold text-center mt-2">{description || card.description}</p>

      {/* MBTI Pill */}
      <div
        className="text-white font-extrabold text-2xl rounded-full px-6 py-2 mt-4"
        style={{ backgroundColor: mbtiColor }}
      >
        {mbti}
      </div>

      {/* 캐릭터 한글명 */}
      <div
        className="text-white font-extrabold text-xl rounded-lg px-6 py-3 mt-3"
        style={{ backgroundColor: nameColor }}
      >
        {character || card.character}
      </div>

      {/* 매칭 섹션 */}
      <div className="flex justify-between w-full mt-auto">
        <MatchColumn title="좋은 궁합 공룡💗" matches={goodMatches || card.goodMatches || []} />
        <MatchColumn title="안맞는 사촌 공룡🥕" matches={badMatches || card.badMatches || []} />
      </div>

      {/* 도메인 (하단) */}
      <span className="absolute bottom-2 text-[10px] tracking-wide font-semibold text-gray-800">
        {domain}
      </span>
    </div>
  );
}

/** 매칭 정보 컬럼 */
function MatchColumn(props) {
  const { title, matches } = props;

  return (
    <div className="flex flex-col items-center gap-1 w-1/2">
      <span className="text-[11px] font-semibold">{title}</span>
      <div className="flex gap-0.5">
        {matches.slice(0, 2).map((m) => (
          <div
            key={m.mbti}
            className="aspect-square w-14 flex flex-col items-center justify-end text-[9px] font-medium text-white relative overflow-hidden"
            style={{ backgroundColor: m.bgColor || '#D18A8B' }}
          >
            <span className="mb-1 leading-none">
              {m.mbti}
              <br />
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
