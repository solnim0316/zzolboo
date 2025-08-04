import { useEffect, useRef, useCallback } from 'react';

/**
 * 🚀 성능 모니터링 훅
 * - Core Web Vitals 추적
 * - 사용자 상호작용 측정
 * - 메모리 사용량 모니터링
 */
export function usePerformanceMonitoring() {
  const observerRef = useRef(null);
  const performanceData = useRef({
    fcp: null, // First Contentful Paint
    lcp: null, // Largest Contentful Paint
    fid: null, // First Input Delay
    cls: null, // Cumulative Layout Shift
    ttfb: null, // Time to First Byte
    memory: null
  });

  // Core Web Vitals 측정
  const measureCoreWebVitals = useCallback(() => {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        performanceData.current.fcp = fcp.startTime;
        
        // Google Analytics로 전송
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FCP',
            value: Math.round(fcp.startTime)
          });
        }
      });
      
      fcpObserver.observe({ entryTypes: ['paint'] });
    }

    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        performanceData.current.lcp = lcp.startTime;
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(lcp.startTime)
          });
        }
      });
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // First Input Delay
    if ('PerformanceObserver' in window) {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          performanceData.current.fid = entry.processingStart - entry.startTime;
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(entry.processingStart - entry.startTime)
            });
          }
        });
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });
    }

    // Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        performanceData.current.cls = clsValue;
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000) / 1000
          });
        }
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  // 메모리 사용량 측정
  const measureMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = performance.memory;
      performanceData.current.memory = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      };
      
      // 메모리 사용량이 80%를 넘으면 경고
      const usagePercent = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
      if (usagePercent > 80) {
        console.warn('메모리 사용량이 높습니다:', usagePercent.toFixed(2) + '%');
      }
    }
  }, []);

  // 페이지 로드 시간 측정
  const measurePageLoadTime = useCallback(() => {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        performanceData.current.ttfb = navigation.responseStart - navigation.requestStart;
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'timing_complete', {
            name: 'load',
            value: Math.round(navigation.loadEventEnd - navigation.loadEventStart)
          });
        }
      }
    });
  }, []);

  // 사용자 상호작용 측정
  const measureUserInteractions = useCallback(() => {
    let interactionCount = 0;
    let lastInteractionTime = Date.now();

    const trackInteraction = () => {
      interactionCount++;
      lastInteractionTime = Date.now();
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'user_interaction', {
          event_category: 'User Experience',
          event_label: 'Interaction Count',
          value: interactionCount
        });
      }
    };

    // 클릭, 스크롤, 키보드 이벤트 추적
    document.addEventListener('click', trackInteraction, { passive: true });
    document.addEventListener('scroll', trackInteraction, { passive: true });
    document.addEventListener('keydown', trackInteraction, { passive: true });

    return () => {
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('scroll', trackInteraction);
      document.removeEventListener('keydown', trackInteraction);
    };
  }, []);

  useEffect(() => {
    // 성능 측정 시작
    measureCoreWebVitals();
    measurePageLoadTime();
    
    // 메모리 사용량 주기적 측정
    const memoryInterval = setInterval(measureMemoryUsage, 30000); // 30초마다
    
    // 사용자 상호작용 측정
    const cleanupInteractions = measureUserInteractions();

    return () => {
      clearInterval(memoryInterval);
      cleanupInteractions();
    };
  }, [measureCoreWebVitals, measurePageLoadTime, measureMemoryUsage, measureUserInteractions]);

  return {
    getPerformanceData: () => performanceData.current,
    measureMemoryUsage
  };
}

/**
 * 📊 성능 메트릭 수집 훅
 */
export function usePerformanceMetrics() {
  const metrics = useRef({
    pageLoadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0
  });

  useEffect(() => {
    // 페이지 로드 완료 시점 측정
    const handleLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        metrics.current.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart;
        metrics.current.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      }
    };

    // Paint 이벤트 측정
    if ('PerformanceObserver' in window) {
      const paintObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-paint') {
            metrics.current.firstPaint = entry.startTime;
          }
          if (entry.name === 'first-contentful-paint') {
            metrics.current.firstContentfulPaint = entry.startTime;
          }
        });
      });
      
      paintObserver.observe({ entryTypes: ['paint'] });
    }

    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return metrics.current;
} 