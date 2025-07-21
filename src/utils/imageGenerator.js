/**
 * 결과 이미지 생성 유틸리티
 * 텍스트 + 캐릭터 이미지를 조합하여 공유용 이미지 생성
 */

// 테스트별 설정
const testConfigs = {
  dinosaur: {
    bgColor: '#8B4513',
    bgGradient: ['#D2B48C', '#8B4513'],
    textColor: '#FFFFFF',
    titleFontSize: 28,
    subtitleFontSize: 20,
    descriptionFontSize: 16,
    characterSize: 200,
    canvasWidth: 600,
    canvasHeight: 800
  },
  cat: {
    bgColor: '#FF69B4',
    bgGradient: ['#FFB6C1', '#FF69B4'],
    textColor: '#FFFFFF',
    titleFontSize: 28,
    subtitleFontSize: 20,
    descriptionFontSize: 16,
    characterSize: 200,
    canvasWidth: 600,
    canvasHeight: 800
  },
  default: {
    bgColor: '#4169E1',
    bgGradient: ['#87CEEB', '#4169E1'],
    textColor: '#FFFFFF',
    titleFontSize: 28,
    subtitleFontSize: 20,
    descriptionFontSize: 16,
    characterSize: 200,
    canvasWidth: 600,
    canvasHeight: 800
  }
};

/**
 * 이미지 로드 유틸리티
 */
const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // CORS 문제 해결
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * 텍스트를 여러 줄로 분할
 */
const wrapText = (ctx, text, maxWidth) => {
  const words = text.split(' ');
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(currentLine + ' ' + word).width;
    if (width < maxWidth) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
};

/**
 * 그라디언트 배경 그리기
 */
const drawGradientBackground = (ctx, config) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, config.canvasHeight);
  gradient.addColorStop(0, config.bgGradient[0]);
  gradient.addColorStop(1, config.bgGradient[1]);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, config.canvasWidth, config.canvasHeight);
};

/**
 * 메인 이미지 생성 함수
 */
export const generateResultImage = async (options) => {
  const {
    testType = 'default',
    result = 'MBTI',
    characterImage = '',
    userName = '사용자',
    description = '결과 설명',
    characterName = '캐릭터',
    customConfig = {}
  } = options;

  try {
    // 설정 가져오기
    const config = { ...testConfigs[testType] || testConfigs.default, ...customConfig };

    // Canvas 생성
    const canvas = document.createElement('canvas');
    canvas.width = config.canvasWidth;
    canvas.height = config.canvasHeight;
    const ctx = canvas.getContext('2d');

    // 1. 배경 그리기
    drawGradientBackground(ctx, config);

    // 2. 캐릭터 이미지 로드 및 그리기
    if (characterImage) {
      try {
        const img = await loadImage(characterImage);
        const imgSize = config.characterSize;
        const imgX = (config.canvasWidth - imgSize) / 2;
        const imgY = 120;
        
        // 원형 마스크 (선택사항)
        ctx.save();
        ctx.beginPath();
        ctx.arc(imgX + imgSize/2, imgY + imgSize/2, imgSize/2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
        ctx.restore();
      } catch (error) {
        console.warn('캐릭터 이미지 로드 실패:', error);
      }
    }

    // 3. 텍스트 설정
    ctx.fillStyle = config.textColor;
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    let currentY = 50;

    // 4. 제목 (사용자명)
    ctx.font = `bold ${config.titleFontSize}px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillText(`${userName}님의 결과`, config.canvasWidth / 2, currentY);
    currentY += 50;

    // 5. MBTI 결과
    ctx.font = `bold ${config.subtitleFontSize + 8}px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillText(`${result}`, config.canvasWidth / 2, currentY);
    currentY += 40;

    // 6. 캐릭터명
    if (characterName && characterName !== '캐릭터') {
      ctx.font = `${config.subtitleFontSize}px 'Noto Sans KR', Arial, sans-serif`;
      ctx.fillText(characterName, config.canvasWidth / 2, currentY);
    }

    // 7. 설명 텍스트 (캐릭터 이미지 아래)
    currentY = 120 + config.characterSize + 40;
    ctx.font = `${config.descriptionFontSize}px 'Noto Sans KR', Arial, sans-serif`;
    
    // 텍스트 줄바꿈 처리
    const lines = wrapText(ctx, description, config.canvasWidth - 60);
    lines.forEach((line, index) => {
      ctx.fillText(line, config.canvasWidth / 2, currentY + (index * 25));
    });

    // 8. 로고/워터마크 (하단)
    currentY = config.canvasHeight - 80;
    ctx.font = `bold ${config.descriptionFontSize}px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillText('🫶 쫄부월드 ZZOLBOOWORLD', config.canvasWidth / 2, currentY);
    
    ctx.font = `${config.descriptionFontSize - 2}px 'Noto Sans KR', Arial, sans-serif`;
    ctx.fillText('www.zzolbooworld.com', config.canvasWidth / 2, currentY + 25);

    // 이미지 데이터 반환
    return canvas.toDataURL('image/png', 0.9);

  } catch (error) {
    console.error('이미지 생성 실패:', error);
    throw error;
  }
};

/**
 * 이미지 다운로드 함수
 */
export const downloadImage = (dataUrl, filename = 'result-image.png') => {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * 클립보드에 이미지 복사
 */
export const copyImageToClipboard = async (dataUrl) => {
  try {
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob })
    ]);
    return true;
  } catch (error) {
    console.error('클립보드 복사 실패:', error);
    return false;
  }
};

/**
 * 편의 함수들
 */
export const generateDinosaurImage = (options) => {
  return generateResultImage({ ...options, testType: 'dinosaur' });
};

export const generateCatImage = (options) => {
  return generateResultImage({ ...options, testType: 'cat' });
};
