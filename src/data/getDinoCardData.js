import { DINO_CARD_MAP } from './dino_card_map';
import { CARD_PALETTE } from './cardPalette';
import { DINO_IMAGE_MAP } from './dinoImageMap';

export function getDinoCardData(mbti) {
  const key = mbti.toUpperCase();
  const character = DINO_CARD_MAP[key]?.character;
  return {
    ...DINO_CARD_MAP[key],
    palette: CARD_PALETTE[key],
    imageUrl: character ? `/img/dino_card/${DINO_IMAGE_MAP[character]}` : undefined
  };
}
