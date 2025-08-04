import { useEffect, useState, useCallback } from 'react';

/**
 * 🚀 서비스 워커 관리 훅
 * - 서비스 워커 등록 및 업데이트
 * - 오프라인 상태 관리
 * - 푸시 알림 권한 요청
 */
export function useServiceWorker() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [swRegistration, setSwRegistration] = useState(null);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState('default');

  // 서비스 워커 등록
  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        console.log('🚀 서비스 워커 등록 중...');
        
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none'
        });

        setSwRegistration(registration);
        console.log('✅ 서비스 워커 등록 완료:', registration);

        // 업데이트 확인
        registration.addEventListener('updatefound', () => {
          console.log('🔄 서비스 워커 업데이트 발견');
          const newWorker = registration.installing;
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('🆕 새로운 서비스 워커 설치됨');
              setUpdateAvailable(true);
            }
          });
        });

        // 서비스 워커 메시지 처리
        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data && event.data.type === 'CACHE_STATUS') {
            console.log('📦 캐시 상태:', event.data);
          }
        });

        return registration;
      } catch (error) {
        console.error('❌ 서비스 워커 등록 실패:', error);
        return null;
      }
    }
    return null;
  }, []);

  // 서비스 워커 업데이트
  const updateServiceWorker = useCallback(async () => {
    if (swRegistration) {
      try {
        await swRegistration.update();
        console.log('🔄 서비스 워커 업데이트 요청됨');
      } catch (error) {
        console.error('❌ 서비스 워커 업데이트 실패:', error);
      }
    }
  }, [swRegistration]);

  // 푸시 알림 권한 요청
  const requestNotificationPermission = useCallback(async () => {
    if ('Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        setNotificationPermission(permission);
        
        if (permission === 'granted') {
          console.log('✅ 푸시 알림 권한 허용됨');
          return true;
        } else {
          console.log('❌ 푸시 알림 권한 거부됨');
          return false;
        }
      } catch (error) {
        console.error('❌ 푸시 알림 권한 요청 실패:', error);
        return false;
      }
    }
    return false;
  }, []);

  // 푸시 알림 구독
  const subscribeToPushNotifications = useCallback(async () => {
    if (!swRegistration || notificationPermission !== 'granted') {
      console.log('❌ 푸시 알림 구독 불가');
      return null;
    }

    try {
      const subscription = await swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.VITE_VAPID_PUBLIC_KEY
      });

      console.log('✅ 푸시 알림 구독 완료:', subscription);
      return subscription;
    } catch (error) {
      console.error('❌ 푸시 알림 구독 실패:', error);
      return null;
    }
  }, [swRegistration, notificationPermission]);

  // 캐시 상태 확인
  const getCacheStatus = useCallback(() => {
    if (swRegistration && swRegistration.active) {
      swRegistration.active.postMessage({
        type: 'GET_CACHE_STATUS'
      });
    }
  }, [swRegistration]);

  // 캐시 삭제
  const clearCache = useCallback(async () => {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
        console.log('🗑️ 모든 캐시 삭제 완료');
        return true;
      } catch (error) {
        console.error('❌ 캐시 삭제 실패:', error);
        return false;
      }
    }
    return false;
  }, []);

  // 오프라인 데이터 저장
  const saveOfflineData = useCallback(async (data) => {
    if ('indexedDB' in window) {
      try {
        // IndexedDB에 데이터 저장
        const db = await openDB('zzolboo-offline', 1, {
          upgrade(db) {
            if (!db.objectStoreNames.contains('offline-data')) {
              db.createObjectStore('offline-data', { keyPath: 'id', autoIncrement: true });
            }
          }
        });

        await db.add('offline-data', {
          ...data,
          timestamp: Date.now()
        });

        console.log('💾 오프라인 데이터 저장 완료');
        return true;
      } catch (error) {
        console.error('❌ 오프라인 데이터 저장 실패:', error);
        return false;
      }
    }
    return false;
  }, []);

  // 오프라인 데이터 동기화
  const syncOfflineData = useCallback(async () => {
    if (swRegistration && 'sync' in swRegistration) {
      try {
        await swRegistration.sync.register('background-sync');
        console.log('🔄 백그라운드 동기화 등록됨');
        return true;
      } catch (error) {
        console.error('❌ 백그라운드 동기화 등록 실패:', error);
        return false;
      }
    }
    return false;
  }, [swRegistration]);

  useEffect(() => {
    // 서비스 워커 등록
    registerServiceWorker();

    // 온라인/오프라인 상태 감지
    const handleOnline = () => {
      console.log('🌐 온라인 상태로 변경');
      setIsOnline(true);
    };

    const handleOffline = () => {
      console.log('🔌 오프라인 상태로 변경');
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // 푸시 알림 권한 상태 확인
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [registerServiceWorker]);

  return {
    isOnline,
    swRegistration,
    updateAvailable,
    notificationPermission,
    registerServiceWorker,
    updateServiceWorker,
    requestNotificationPermission,
    subscribeToPushNotifications,
    getCacheStatus,
    clearCache,
    saveOfflineData,
    syncOfflineData
  };
}

/**
 * 📱 PWA 설치 프롬프트 관리 훅
 */
export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      // 기본 설치 프롬프트 방지
      event.preventDefault();
      
      // 설치 프롬프트 저장
      setDeferredPrompt(event);
      setIsInstallable(true);
      
      console.log('📱 PWA 설치 가능');
    };

    const handleAppInstalled = () => {
      console.log('✅ PWA 설치 완료');
      setDeferredPrompt(null);
      setIsInstallable(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const installPWA = useCallback(async () => {
    if (deferredPrompt) {
      try {
        // 설치 프롬프트 표시
        const result = await deferredPrompt.prompt();
        
        if (result.outcome === 'accepted') {
          console.log('✅ 사용자가 PWA 설치를 수락함');
        } else {
          console.log('❌ 사용자가 PWA 설치를 거부함');
        }
        
        setDeferredPrompt(null);
        setIsInstallable(false);
      } catch (error) {
        console.error('❌ PWA 설치 실패:', error);
      }
    }
  }, [deferredPrompt]);

  return {
    isInstallable,
    installPWA
  };
}

// IndexedDB 헬퍼 함수
async function openDB(name, version, upgradeCallback) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => upgradeCallback(request.result);
  });
} 