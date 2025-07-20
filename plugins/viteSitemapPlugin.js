// 🔌 Vite Sitemap 자동화 플러그인
import { monitor } from '../scripts/sitemapMonitor.js';

export function viteSitemapPlugin(options = {}) {
  const config = {
    enableInDev: true,
    autoRebuild: true,
    logLevel: 'info',
    ...options
  };

  return {
    name: 'vite-sitemap-automation',
    
    // 개발 서버 시작 시
    configureServer(server) {
      if (config.enableInDev) {
        console.log('🚀 Sitemap 자동화 플러그인 활성화');
        
        // 개발 모드에서 모니터링 시작
        monitor.startMonitoring();
        
        // 개발 서버 미들웨어에 sitemap 관련 라우트 추가
        server.middlewares.use('/api/sitemap', (req, res, next) => {
          if (req.method === 'POST' && req.url === '/api/sitemap/update') {
            const success = monitor.forceUpdate();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
              success, 
              timestamp: new Date().toISOString() 
            }));
          } else if (req.method === 'GET' && req.url === '/api/sitemap/status') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(monitor.getStatus()));
          } else {
            next();
          }
        });
      }
    },

    // 빌드 시작 전
    buildStart() {
      if (config.logLevel !== 'silent') {
        console.log('📦 빌드 시작 - Sitemap 업데이트 중...');
      }
      
      // 빌드 전 sitemap 생성
      monitor.forceUpdate();
    },

    // 파일 변경 감지
    handleHotUpdate({ file, server }) {
      if (file.includes('src/') && (file.endsWith('.jsx') || file.endsWith('.js'))) {
        if (config.logLevel === 'verbose') {
          console.log(`🔥 HMR 감지: ${file}`);
        }
        
        // 라우트 관련 파일 변경 시 sitemap 재생성
        if (file.includes('App.jsx') || file.includes('pages/')) {
          setTimeout(() => {
            monitor.forceUpdate();
          }, 500); // 파일 변경 완료 대기
        }
      }
    }
  };
}

// 사용 예제를 위한 기본 설정
export const defaultSitemapConfig = {
  enableInDev: true,
  autoRebuild: true,
  logLevel: 'info'
};
