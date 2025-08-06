// 📄 Sitemap 자동 생성 스크립트
import fs from 'fs';
import path from 'path';

// 사이트 기본 정보
const SITE_URL = 'https://www.zzolbooworld.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// 페이지 정보 정의
const pages = [
  {
    url: '/',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: CURRENT_DATE
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/auto-image-generator',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: CURRENT_DATE
  },
  {
    url: '/blog',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/bro',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: CURRENT_DATE
  },
  {
    url: '/bro/bitcoin-test',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/bro/f1-driver',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/bro/isekai',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/bro/lol-test',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/bro/stock-investor',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/cat-test',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: CURRENT_DATE
  },
  {
    url: '/color-test',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: CURRENT_DATE
  },
  {
    url: '/cookies',
    changefreq: 'yearly',
    priority: '0.5',
    lastmod: CURRENT_DATE
  },
  {
    url: '/dinosaur-test',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: CURRENT_DATE
  },
  {
    url: '/drama-test',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/family-mbti',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/faq',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/fashion-test',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/fingerprincess',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/food-test',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/free-image-generator',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: CURRENT_DATE
  },
  {
    url: '/gallery',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/image-curator',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: CURRENT_DATE
  },
  {
    url: '/isekai',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/love-habit-test',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/mbti-guide',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/movie-test',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/offline-history',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/privacy',
    changefreq: 'yearly',
    priority: '0.5',
    lastmod: CURRENT_DATE
  },
  {
    url: '/share',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/stock-investor',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/terms',
    changefreq: 'yearly',
    priority: '0.5',
    lastmod: CURRENT_DATE
  },
  {
    url: '/tetogen',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  },
  {
    url: '/workout-mate',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: CURRENT_DATE
  }
];

// Sitemap XML 생성 함수
function generateSitemap() {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  const urlEntries = pages.map(page => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');
  
  const xmlFooter = `\n</urlset>`;
  
  return xmlHeader + urlEntries + xmlFooter;
}

// 파일 저장 함수
function saveSitemap() {
  const sitemapContent = generateSitemap();
  const outputPath = path.resolve('./public/sitemap.xml');
  
  try {
    fs.writeFileSync(outputPath, sitemapContent, 'utf8');
    console.log('✅ Sitemap이 성공적으로 생성되었습니다:', outputPath);
    console.log(`📄 총 ${pages.length}개 페이지가 포함되었습니다.`);
    console.log(`🗓️ 생성일: ${CURRENT_DATE}`);
  } catch (error) {
    console.error('❌ Sitemap 생성 중 오류 발생:', error);
  }
}

// 새 페이지 추가 함수
export function addPageToSitemap(url, options = {}) {
  const defaultOptions = {
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  };
  
  const pageOptions = { ...defaultOptions, ...options };
  
  pages.push({
    url,
    ...pageOptions
  });
  
  console.log(`📝 새 페이지 추가됨: ${url}`);
}

// 메인 실행
if (process.argv[1] && process.argv[1].endsWith('generateSitemap.js')) {
  saveSitemap();
}

export { saveSitemap, pages };
