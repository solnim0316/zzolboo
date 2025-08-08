// 🔄 동적 Sitemap 생성기 (라우트 기반)
import fs from 'fs';
import path from 'path';

// 사이트 설정
const SITE_CONFIG = {
  url: 'https://www.zzolbooworld.com',
  defaultChangefreq: 'weekly',
  defaultPriority: '0.8'
};

// 특별 페이지 설정 (우선순위 및 빈도 커스터마이징)
const SPECIAL_PAGES = {
  '/': { priority: '1.0', changefreq: 'daily' },
            '/bro': { priority: '0.9', changefreq: 'weekly' },
  '/dinosaur-test': { priority: '0.9', changefreq: 'weekly' },
  '/cat-test': { priority: '0.9', changefreq: 'weekly' },
  '/about': { priority: '0.8', changefreq: 'monthly' },
  '/contact': { priority: '0.7', changefreq: 'monthly' },
  '/terms': { priority: '0.5', changefreq: 'yearly' },
  '/privacy': { priority: '0.5', changefreq: 'yearly' },
  '/cookies': { priority: '0.5', changefreq: 'yearly' },
  '/image-curator': { priority: '0.6', changefreq: 'monthly' },
  '/auto-image-generator': { priority: '0.6', changefreq: 'monthly' },
  '/free-image-generator': { priority: '0.6', changefreq: 'monthly' },
  '/bro/lol-test': { priority: '0.8', changefreq: 'weekly' },
  '/bro/lol-result': { priority: '0.7', changefreq: 'weekly' },
  '/love-habit-test': { priority: '0.8', changefreq: 'weekly' },
  '/love-habit-result': { priority: '0.7', changefreq: 'weekly' },
  '/drama-test': { priority: '0.8', changefreq: 'weekly' },
  '/drama-result': { priority: '0.7', changefreq: 'weekly' }
};

// 제외할 경로들 (관리자 페이지, 임시 페이지 등)
const EXCLUDED_PATHS = [
  '/admin',
  '/test',
  '/debug',
  '/_',
  '/api'
];

// App.jsx에서 라우트 추출하는 함수
function extractRoutesFromApp() {
  try {
    const appPath = path.resolve('./src/App.jsx');
    const appContent = fs.readFileSync(appPath, 'utf8');
    
    // <Route path="..." 패턴 매칭
    const routeMatches = appContent.match(/path="([^"]+)"/g);
    
    if (!routeMatches) {
      console.warn('⚠️ App.jsx에서 라우트를 찾을 수 없습니다.');
      return [];
    }
    
    const routes = routeMatches
      .map(match => match.replace('path="', '').replace('"', ''))
      .filter(route => !route.includes(':')) // 동적 라우트 제외 (/test/:testId 등)
      .filter(route => route !== '*') // 404 와일드카드 제외 (도메인 루트로 잘못 기록 방지)
      .filter(route => route.trim().length > 0)
      .filter(route => !EXCLUDED_PATHS.some(excluded => route.startsWith(excluded)));
    
    console.log('📋 발견된 라우트:', routes);
    return routes;
    
  } catch (error) {
    console.error('❌ App.jsx 파일을 읽을 수 없습니다:', error);
    return Object.keys(SPECIAL_PAGES); // 폴백으로 특별 페이지만 사용
  }
}

// Sitemap 엔트리 생성
function createSitemapEntry(url) {
  const currentDate = new Date().toISOString().split('T')[0];
  const specialConfig = SPECIAL_PAGES[url] || {};
  
  // URL 정규화 (별표 제거)
  const cleanUrl = url.replace(/\*$/, '');
  
  const entry = {
    url: `${SITE_CONFIG.url}${cleanUrl}`,
    lastmod: currentDate,
    changefreq: specialConfig.changefreq || SITE_CONFIG.defaultChangefreq,
    priority: specialConfig.priority || SITE_CONFIG.defaultPriority
  };
  
  return `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;
}

// Sitemap XML 생성
function generateDynamicSitemap() {
  const routes = extractRoutesFromApp();
  
  if (routes.length === 0) {
    console.error('❌ 생성할 라우트가 없습니다.');
    return null;
  }
  
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  // 중복 제거 및 정렬
  const uniqueRoutes = Array.from(new Set(routes));
  const urlEntries = uniqueRoutes
    .sort()
    .map(createSitemapEntry)
    .join('');
  
  const xmlFooter = `
</urlset>`;
  
  return xmlHeader + urlEntries + xmlFooter;
}

// Sitemap 저장
function saveDynamicSitemap() {
  const sitemap = generateDynamicSitemap();
  
  if (!sitemap) {
    console.error('❌ Sitemap 생성에 실패했습니다.');
    return false;
  }
  
  const outputPath = path.resolve('./public/sitemap.xml');
  
  try {
    fs.writeFileSync(outputPath, sitemap, 'utf8');
    console.log('✅ 동적 Sitemap이 성공적으로 생성되었습니다!');
    console.log(`📍 위치: ${outputPath}`);
    console.log(`📊 포함된 페이지 수: ${extractRoutesFromApp().length}개`);
    console.log(`🕒 생성 시간: ${new Date().toLocaleString('ko-KR')}`);
    return true;
  } catch (error) {
    console.error('❌ Sitemap 저장 중 오류:', error);
    return false;
  }
}

// 새 페이지 자동 감지 및 추가
function addNewRoute(routePath, config = {}) {
  console.log(`🆕 새 라우트 감지: ${routePath}`);
  
  if (config.priority || config.changefreq) {
    SPECIAL_PAGES[routePath] = config;
    console.log(`⚙️ 특별 설정 적용: ${JSON.stringify(config)}`);
  }
  
  // 즉시 sitemap 재생성
  saveDynamicSitemap();
}

// 메인 실행 (Windows/Unix 모두 호환)
console.log('🚀 동적 Sitemap 생성기 시작...');
saveDynamicSitemap();

export { saveDynamicSitemap, addNewRoute, SPECIAL_PAGES };
