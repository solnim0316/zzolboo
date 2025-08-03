// 🖼️ 이미지 최적화 스크립트
// 모든 PNG/JPG 이미지를 WebP로 변환하고 압축

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 이미지 최적화 스크립트 시작...');

// 이미지 최적화 설정
const OPTIMIZATION_CONFIG = {
  quality: 80, // WebP 품질 (0-100)
  effort: 6,   // 압축 노력 (0-6)
  lossless: false, // 무손실 압축 여부
  nearLossless: true, // 거의 무손실 압축
  smartSubsample: true, // 스마트 서브샘플링
  strip: true, // 메타데이터 제거
  progressive: true // 프로그레시브 JPEG
};

/**
 * 이미지 파일을 WebP로 변환하고 최적화
 */
async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    console.log(`🔄 최적화 중: ${path.basename(inputPath)}`);
    
    let sharpInstance = sharp(inputPath);
    
    // WebP 변환 및 최적화
    const webpBuffer = await sharpInstance
      .webp({
        quality: OPTIMIZATION_CONFIG.quality,
        effort: OPTIMIZATION_CONFIG.effort,
        lossless: OPTIMIZATION_CONFIG.lossless,
        nearLossless: OPTIMIZATION_CONFIG.nearLossless,
        smartSubsample: OPTIMIZATION_CONFIG.smartSubsample
      })
      .toBuffer();
    
    // 최적화된 파일 저장
    fs.writeFileSync(outputPath, webpBuffer);
    
    const optimizedStats = fs.statSync(outputPath);
    const optimizedSize = optimizedStats.size;
    const compressionRatio = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ 완료: ${path.basename(inputPath)}`);
    console.log(`   📊 크기: ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB`);
    console.log(`   📉 압축률: ${compressionRatio}%`);
    
    return {
      originalSize,
      optimizedSize,
      compressionRatio: parseFloat(compressionRatio)
    };
    
  } catch (error) {
    console.error(`❌ 오류: ${path.basename(inputPath)} - ${error.message}`);
    return null;
  }
}

/**
 * 디렉토리 내의 모든 이미지 파일 찾기
 */
function findImageFiles(dirPath) {
  console.log(`📁 스캔 중: ${dirPath}`);
  
  const imageFiles = [];
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'];
  
  function scanDirectory(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (imageExtensions.includes(ext)) {
            imageFiles.push(fullPath);
            console.log(`📄 발견: ${item}`);
          }
        }
      }
    } catch (error) {
      console.error(`디렉토리 스캔 오류: ${currentPath} - ${error.message}`);
    }
  }
  
  scanDirectory(dirPath);
  return imageFiles;
}

/**
 * 메인 최적화 함수
 */
async function optimizeAllImages() {
  console.log('🚀 이미지 최적화 시작...\n');
  
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  console.log(`📁 이미지 디렉토리: ${imagesDir}`);
  
  if (!fs.existsSync(imagesDir)) {
    console.error(`❌ 이미지 디렉토리가 존재하지 않습니다: ${imagesDir}`);
    return;
  }
  
  const imageFiles = findImageFiles(imagesDir);
  
  if (imageFiles.length === 0) {
    console.log('📁 최적화할 이미지 파일을 찾을 수 없습니다.');
    return;
  }
  
  console.log(`\n📋 발견된 이미지 파일: ${imageFiles.length}개\n`);
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let successCount = 0;
  let failCount = 0;
  
  // 백업 디렉토리 생성
  const backupDir = path.join(__dirname, '..', 'public', 'images_backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
    console.log(`📁 백업 디렉토리 생성: ${backupDir}`);
  }
  
  for (const imagePath of imageFiles) {
    try {
      // 백업 생성
      const relativePath = path.relative(imagesDir, imagePath);
      const backupPath = path.join(backupDir, relativePath);
      const backupDirPath = path.dirname(backupPath);
      
      if (!fs.existsSync(backupDirPath)) {
        fs.mkdirSync(backupDirPath, { recursive: true });
      }
      
      fs.copyFileSync(imagePath, backupPath);
      
      // WebP 파일 경로 생성
      const webpPath = imagePath.replace(/\.[^.]+$/, '.webp');
      
      const result = await optimizeImage(imagePath, webpPath);
      
      if (result) {
        totalOriginalSize += result.originalSize;
        totalOptimizedSize += result.optimizedSize;
        successCount++;
      } else {
        failCount++;
      }
      
      console.log(''); // 빈 줄 추가
      
    } catch (error) {
      console.error(`❌ 처리 실패: ${path.basename(imagePath)} - ${error.message}`);
      failCount++;
    }
  }
  
  // 결과 요약
  console.log('📊 최적화 결과 요약:');
  console.log(`✅ 성공: ${successCount}개`);
  console.log(`❌ 실패: ${failCount}개`);
  console.log(`📁 총 원본 크기: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📁 총 최적화 크기: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📉 전체 압축률: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log(`💾 절약된 용량: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)}MB`);
  
  console.log('\n💡 다음 단계:');
  console.log('1. 최적화된 WebP 이미지들이 생성되었습니다.');
  console.log('2. 원본 이미지들은 images_backup 폴더에 백업되었습니다.');
  console.log('3. 코드에서 이미지 경로를 .webp로 변경하세요.');
  console.log('4. 테스트 후 원본 이미지들을 삭제할 수 있습니다.');
}

// 스크립트 실행
console.log('스크립트 시작...');
optimizeAllImages().catch(console.error); 