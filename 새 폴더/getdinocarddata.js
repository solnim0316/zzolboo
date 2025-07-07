// src/data/getDinoCardData.js
import { DINO_CARD_MAP } from './dino_card_map';
import { CARD_PALETTE } from './cardPalette';

export function getDinoCardData(mbti) {
  const key = mbti.toUpperCase();
  return {
    ...DINO_CARD_MAP[key],           // 공룡명, 설명, 키워드, 매칭 등
    palette: CARD_PALETTE[key],      // 색상 팔레트
    imageUrl: DINO_CARD_MAP[key]?.imageUrl || `/img/dino_card/${key}.png`
  };
}
