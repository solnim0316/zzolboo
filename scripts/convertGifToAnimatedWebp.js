const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images/fingerprincess');
const outputDir = path.join(__dirname, '../public/images/fingerprincess');

// 원래 GIF였던 파일 번호들 (변환 로그에서 확인한 번호들)
const originalGifNumbers = [
  11, 29, 30, 49, 51, 68, 69, 98, 99, 100, 120, 121, 122, 142, 143, 144,
  159, 160, 161, 178, 179, 198, 199, 200, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217,
  237, 238, 239, 240, 241, 258, 259, 272, 273, 274, 284, 285, 295, 296, 307, 308, 309, 310, 311,
  316, 317, 321, 322, 323, 330, 331, 332, 333, 334, 344, 345, 353, 354, 355, 365, 375
];

async function convertGifToAnimatedWebp() {
  try {
    console.log('애니메이션 WebP 변환을 시작합니다...');
    console.log('원본 GIF 파일들을 찾아서 변환해주세요.');
    console.log('\n원래 GIF였던 파일 번호들:');
    console.log(originalGifNumbers.join(', '));
    
    // 현재 폴더의 webp 파일들 확인
    const files = fs.readdirSync(inputDir);
    const webpFiles = files.filter(file => file.toLowerCase().endsWith('.webp'));
    
    console.log(`\n현재 webp 파일 수: ${webpFiles.length}개`);
    
    // GIF 번호에 해당하는 webp 파일들 찾기
    const gifWebpFiles = webpFiles.filter(file => {
      const number = parseInt(file.replace('.webp', ''));
      return originalGifNumbers.includes(number);
    });
    
    console.log(`\nGIF에서 변환된 webp 파일들: ${gifWebpFiles.length}개`);
    gifWebpFiles.forEach(file => console.log(`- ${file}`));
    
    console.log('\n=== 사용법 ===');
    console.log('1. 원본 GIF 파일들을 준비하세요');
    console.log('2. 아래 스크립트를 수정하여 원본 GIF 경로를 지정하세요');
    console.log('3. node scripts/convertGifToAnimatedWebp.js 를 실행하세요');
    
  } catch (error) {
    console.error('스크립트 실행 중 오류 발생:', error);
  }
}

// 실제 변환 함수 (원본 GIF 파일이 있을 때 사용)
async function convertGifFiles(gifSourceDir) {
  try {
    if (!fs.existsSync(gifSourceDir)) {
      console.error('GIF 소스 디렉토리가 존재하지 않습니다:', gifSourceDir);
      return;
    }

    const files = fs.readdirSync(gifSourceDir);
    const gifFiles = files.filter(file => 
      file.toLowerCase().endsWith('.gif') && 
      originalGifNumbers.some(num => file.includes(num.toString()))
    );

    console.log(`변환할 GIF 파일 수: ${gifFiles.length}개`);

    for (const file of gifFiles) {
      const inputPath = path.join(gifSourceDir, file);
      const outputPath = path.join(outputDir, file.replace('.gif', '.webp'));
      
      try {
        console.log(`애니메이션 변환 중: ${file}`);
        
        // 애니메이션 WebP로 변환
        await sharp(inputPath)
          .webp({ 
            quality: 80,
            effort: 6,
            loop: 0  // 무한 반복
          })
          .toFile(outputPath);
        
        console.log(`✅ 애니메이션 WebP 생성 완료: ${file}`);
      } catch (error) {
        console.error(`❌ 변환 실패 (${file}):`, error.message);
      }
    }

  } catch (error) {
    console.error('변환 중 오류 발생:', error);
  }
}

convertGifToAnimatedWebp();

// 사용 예시 (원본 GIF 파일이 있을 때):
// convertGifFiles('/path/to/original/gif/files'); 