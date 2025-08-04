const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images/fingerprincess');
const outputDir = path.join(__dirname, '../public/images/fingerprincess');

async function convertToWebp() {
  try {
    // 디렉토리가 존재하는지 확인
    if (!fs.existsSync(inputDir)) {
      console.error('입력 디렉토리가 존재하지 않습니다:', inputDir);
      return;
    }

    // 모든 파일 목록 가져오기
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file => 
      /\.(png|gif|jpg|jpeg)$/i.test(file)
    );

    console.log(`총 ${imageFiles.length}개의 이미지 파일을 찾았습니다.`);

    let successCount = 0;
    let errorCount = 0;

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace(/\.(png|gif|jpg|jpeg)$/i, '.webp'));
      
      try {
        console.log(`변환 중: ${file} -> ${path.basename(outputPath)}`);
        
        // GIF 파일인 경우 첫 번째 프레임만 추출하여 변환
        if (file.toLowerCase().endsWith('.gif')) {
          await sharp(inputPath, { pages: -1 })
            .webp({ quality: 80 })
            .toFile(outputPath);
        } else {
          // PNG, JPG 파일 변환
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
        }
        
        successCount++;
        console.log(`✅ 성공: ${file}`);
      } catch (error) {
        errorCount++;
        console.error(`❌ 오류 (${file}):`, error.message);
      }
    }

    console.log('\n=== 변환 완료 ===');
    console.log(`성공: ${successCount}개`);
    console.log(`실패: ${errorCount}개`);
    
    if (errorCount === 0) {
      console.log('\n모든 파일이 성공적으로 변환되었습니다!');
      console.log('원본 파일을 삭제하시겠습니까? (y/n)');
    }

  } catch (error) {
    console.error('스크립트 실행 중 오류 발생:', error);
  }
}

convertToWebp(); 