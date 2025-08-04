const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/fingerprincess');

async function cleanupOriginalFiles() {
  try {
    // 디렉토리가 존재하는지 확인
    if (!fs.existsSync(targetDir)) {
      console.error('대상 디렉토리가 존재하지 않습니다:', targetDir);
      return;
    }

    // 모든 파일 목록 가져오기
    const files = fs.readdirSync(targetDir);
    const originalFiles = files.filter(file => 
      /\.(png|gif|jpg|jpeg)$/i.test(file)
    );

    console.log(`총 ${originalFiles.length}개의 원본 파일을 찾았습니다.`);

    let deletedCount = 0;
    let errorCount = 0;

    for (const file of originalFiles) {
      const filePath = path.join(targetDir, file);
      
      try {
        fs.unlinkSync(filePath);
        deletedCount++;
        console.log(`🗑️ 삭제됨: ${file}`);
      } catch (error) {
        errorCount++;
        console.error(`❌ 삭제 실패 (${file}):`, error.message);
      }
    }

    console.log('\n=== 삭제 완료 ===');
    console.log(`성공: ${deletedCount}개`);
    console.log(`실패: ${errorCount}개`);

    // 남은 파일들 확인
    const remainingFiles = fs.readdirSync(targetDir);
    const webpFiles = remainingFiles.filter(file => file.toLowerCase().endsWith('.webp'));
    
    console.log(`\n남은 webp 파일: ${webpFiles.length}개`);

  } catch (error) {
    console.error('스크립트 실행 중 오류 발생:', error);
  }
}

cleanupOriginalFiles(); 