// 📊 스마트 Sitemap 모니터링 시스템
import fs from 'fs';
import path from 'path';
import { saveDynamicSitemap, addNewRoute } from './dynamicSitemap.js';

// 파일 감시 대상
const WATCH_TARGETS = {
  routes: './src/App.jsx',
  pages: './src/pages/',
  components: './src/components/'
};

// 변경 감지 설정
const MONITOR_CONFIG = {
  debounceMs: 1000, // 1초 디바운스
  autoRebuild: true,
  logChanges: true
};

class SitemapMonitor {
  constructor() {
    this.lastUpdate = Date.now();
    this.pendingUpdate = null;
    this.changeLog = [];
  }

  // 파일 변경 감지 시작
  startMonitoring() {
    console.log('👀 Sitemap 자동 모니터링 시작...');
    
    Object.entries(WATCH_TARGETS).forEach(([type, targetPath]) => {
      const fullPath = path.resolve(targetPath);
      
      if (fs.existsSync(fullPath)) {
        this.watchTarget(type, fullPath);
        console.log(`📁 감시 시작: ${type} (${targetPath})`);
      } else {
        console.warn(`⚠️ 경로가 존재하지 않습니다: ${targetPath}`);
      }
    });
  }

  // 개별 파일/폴더 감시
  watchTarget(type, targetPath) {
    const stats = fs.statSync(targetPath);
    
    if (stats.isDirectory()) {
      this.watchDirectory(type, targetPath);
    } else {
      this.watchFile(type, targetPath);
    }
  }

  // 폴더 감시
  watchDirectory(type, dirPath) {
    fs.watch(dirPath, { recursive: true }, (eventType, filename) => {
      if (filename && this.isRelevantFile(filename)) {
        this.handleChange(type, path.join(dirPath, filename), eventType);
      }
    });
  }

  // 파일 감시
  watchFile(type, filePath) {
    fs.watchFile(filePath, (curr, prev) => {
      if (curr.mtime > prev.mtime) {
        this.handleChange(type, filePath, 'change');
      }
    });
  }

  // 관련 파일인지 확인
  isRelevantFile(filename) {
    const relevantExtensions = ['.jsx', '.js', '.tsx', '.ts'];
    const excludePatterns = ['node_modules', '.git', 'dist', 'build'];
    
    return relevantExtensions.some(ext => filename.endsWith(ext)) &&
           !excludePatterns.some(pattern => filename.includes(pattern));
  }

  // 변경 처리
  handleChange(type, filePath, eventType) {
    const changeInfo = {
      type,
      file: path.basename(filePath),
      path: filePath,
      event: eventType,
      timestamp: new Date().toISOString()
    };

    this.changeLog.push(changeInfo);

    if (MONITOR_CONFIG.logChanges) {
      console.log(`📝 변경 감지: ${changeInfo.file} (${eventType})`);
    }

    // 디바운스된 업데이트 실행
    this.scheduleUpdate(changeInfo);
  }

  // 업데이트 스케줄링 (디바운스)
  scheduleUpdate(changeInfo) {
    if (this.pendingUpdate) {
      clearTimeout(this.pendingUpdate);
    }

    this.pendingUpdate = setTimeout(() => {
      this.executeUpdate(changeInfo);
    }, MONITOR_CONFIG.debounceMs);
  }

  // 실제 업데이트 실행
  executeUpdate(changeInfo) {
    if (!MONITOR_CONFIG.autoRebuild) {
      console.log('⏸️ 자동 재생성이 비활성화되어 있습니다.');
      return;
    }

    console.log('🔄 Sitemap 재생성 중...');
    
    const success = saveDynamicSitemap();
    
    if (success) {
      this.lastUpdate = Date.now();
      console.log(`✅ Sitemap 업데이트 완료 (${changeInfo.file} 변경으로 인해)`);
    } else {
      console.error('❌ Sitemap 업데이트 실패');
    }

    this.pendingUpdate = null;
  }

  // 수동 업데이트 트리거
  forceUpdate() {
    console.log('🚀 수동 Sitemap 업데이트 실행...');
    const success = saveDynamicSitemap();
    
    if (success) {
      this.lastUpdate = Date.now();
      console.log('✅ 수동 업데이트 완료');
    }
    
    return success;
  }

  // 변경 로그 출력
  showChangeLog() {
    console.log('\n📊 변경 로그:');
    this.changeLog.slice(-10).forEach((change, index) => {
      console.log(`${index + 1}. ${change.file} (${change.event}) - ${change.timestamp}`);
    });
  }

  // 모니터링 상태 확인
  getStatus() {
    return {
      isMonitoring: true,
      lastUpdate: new Date(this.lastUpdate).toLocaleString('ko-KR'),
      changeCount: this.changeLog.length,
      autoRebuild: MONITOR_CONFIG.autoRebuild
    };
  }
}

// 글로벌 모니터 인스턴스
const monitor = new SitemapMonitor();

// CLI 명령어 처리
function handleCLI() {
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      monitor.startMonitoring();
      break;
      
    case 'update':
      monitor.forceUpdate();
      break;
      
    case 'log':
      monitor.showChangeLog();
      break;
      
    case 'status':
      console.log('📊 모니터링 상태:', monitor.getStatus());
      break;
      
    default:
      console.log(`
🛠️ Sitemap 모니터링 시스템

사용법:
  node scripts/sitemapMonitor.js start   - 모니터링 시작
  node scripts/sitemapMonitor.js update  - 수동 업데이트
  node scripts/sitemapMonitor.js log     - 변경 로그 확인
  node scripts/sitemapMonitor.js status  - 상태 확인
      `);
      break;
  }
}

// 개발 모드에서 자동 시작
if (process.env.NODE_ENV === 'development') {
  monitor.startMonitoring();
}

// 메인 실행
if (import.meta.url === `file://${process.argv[1]}`) {
  handleCLI();
}

export { monitor, SitemapMonitor };
