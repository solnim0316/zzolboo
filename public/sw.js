// 🚀 쫄부월드 서비스 워커
// 오프라인 지원, 캐싱, 푸시 알림 기능 제공

const CACHE_NAME = 'zzolboo-v1.0.3';
const STATIC_CACHE = 'zzolboo-static-v1.0.3';
const DYNAMIC_CACHE = 'zzolboo-dynamic-v1.0.3';

// 캐시할 정적 리소스들
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico',
  '/og-image.png',
  '/social-image.png',
  '/apple-touch-icon.png',
  '/images/logo/logo.webp',
  '/images/banner/1.webp',
  '/images/banner/bro/bro1.webp',
  '/SVG/instagram.svg'
];

// 캐시할 API 엔드포인트들
const API_CACHE = [
  '/api/instagram/feed',
  '/api/analytics'
];

// 설치 이벤트 - 정적 리소스 캐싱
self.addEventListener('install', (event) => {
  console.log('🚀 서비스 워커 설치 중...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('📦 정적 리소스 캐싱 중...');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('✅ 정적 리소스 캐싱 완료');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('❌ 캐싱 실패:', error);
      })
  );
});

// 활성화 이벤트 - 이전 캐시 정리
self.addEventListener('activate', (event) => {
  console.log('🔄 서비스 워커 활성화 중...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // 현재 버전이 아닌 캐시 삭제
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('🗑️ 이전 캐시 삭제:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ 서비스 워커 활성화 완료');
        return self.clients.claim();
      })
  );
});

// 요청 가로채기 - 네트워크 우선, 캐시 폴백
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // AdSense 및 외부 리소스는 캐시하지 않고 네트워크 우선
  if (url.hostname.includes('googleads') || 
      url.hostname.includes('googlesyndication') || 
      url.hostname.includes('doubleclick') ||
      url.hostname.includes('google.com') ||
      url.hostname.includes('gstatic.com') ||
      url.hostname.includes('fundingchoicesmessages.google.com') ||
      url.hostname.includes('adtrafficquality.google') ||
      url.hostname.includes('kakaocdn.net') ||
      url.hostname.includes('cloudflareinsights.com') ||
      url.hostname.includes('jsdelivr.net')) {
    event.respondWith(fetch(request));
    return;
  }

  // HTML 페이지 요청: 30x(리디렉션) 응답은 캐시하지 않음
  if (request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const isRedirectLike = response.redirected || (response.status >= 300 && response.status < 400);
          if (isRedirectLike) {
            return response; // 리디렉션 응답은 캐시 금지
          }
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE)
            .then((cache) => {
              cache.put(request, responseClone);
            });
          return response;
        })
        .catch(() => {
          // 네트워크 실패 시 캐시에서 반환
          return caches.match(request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // 캐시에도 없으면 오프라인 페이지
              return caches.match('/offline.html');
            });
        })
    );
    return;
  }

  // 이미지 요청
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            // 캐시에 있으면 즉시 반환
            return cachedResponse;
          }
          
          // 캐시에 없으면 네트워크에서 가져와서 캐시
          return fetch(request)
            .then((response) => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(DYNAMIC_CACHE)
                  .then((cache) => {
                    cache.put(request, responseClone);
                  });
              }
              return response;
            })
            .catch(() => {
              // 이미지 로드 실패 시 플레이스홀더 반환 (존재하는 자산으로 안전하게 대체)
              return caches.match('/images/logo/logo.webp');
            });
        })
    );
    return;
  }

  // API 요청
  if (API_CACHE.some(api => url.pathname.startsWith(api))) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }

  // 기타 요청은 네트워크 우선
  event.respondWith(
    fetch(request)
      .catch(() => {
        return caches.match(request);
      })
  );
});

// 백그라운드 동기화 (오프라인 데이터 동기화)
self.addEventListener('sync', (event) => {
  console.log('🔄 백그라운드 동기화:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // 오프라인에서 수집된 데이터를 서버에 전송
      syncOfflineData()
    );
  }
});

// 푸시 알림 처리
self.addEventListener('push', (event) => {
  console.log('📱 푸시 알림 수신');
  
  const options = {
    body: event.data ? event.data.text() : '새로운 테스트가 추가되었습니다!',
    icon: '/images/logo/logo.webp',
    badge: '/images/logo/logo.webp',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: '테스트 보기',
        icon: '/images/logo/logo.webp'
      },
      {
        action: 'close',
        title: '닫기',
        icon: '/images/logo/logo.webp'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('쫄부월드', options)
  );
});

// 알림 클릭 처리
self.addEventListener('notificationclick', (event) => {
  console.log('👆 알림 클릭:', event.action);
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// 오프라인 데이터 동기화 함수
async function syncOfflineData() {
  try {
    // IndexedDB에서 오프라인 데이터 가져오기
    const offlineData = await getOfflineData();
    
    if (offlineData.length > 0) {
      // 서버에 데이터 전송
      const response = await fetch('/api/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(offlineData)
      });

      if (response.ok) {
        // 동기화 성공 시 오프라인 데이터 삭제
        await clearOfflineData();
        console.log('✅ 오프라인 데이터 동기화 완료');
      }
    }
  } catch (error) {
    console.error('❌ 오프라인 데이터 동기화 실패:', error);
  }
}

// IndexedDB에서 오프라인 데이터 가져오기
async function getOfflineData() {
  // 실제 구현에서는 IndexedDB 사용
  return [];
}

// 오프라인 데이터 삭제
async function clearOfflineData() {
  // 실제 구현에서는 IndexedDB 데이터 삭제
  console.log('🗑️ 오프라인 데이터 삭제');
}

// 캐시 상태 확인
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'GET_CACHE_STATUS') {
    event.ports[0].postMessage({
      type: 'CACHE_STATUS',
      staticCache: STATIC_CACHE,
      dynamicCache: DYNAMIC_CACHE
    });
  }
});

console.log('🚀 쫄부월드 서비스 워커 로드 완료'); 