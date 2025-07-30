import { useMemo, useCallback, useEffect, useRef, useState } from 'react';

/**
 * 🚀 메모이제이션된 값 생성 훅
 * @param {Function} factory - 값을 생성하는 함수
 * @param {Array} deps - 의존성 배열
 * @returns {any} 메모이제이션된 값
 */
export function useMemoizedValue(factory, deps) {
  return useMemo(factory, deps);
}

/**
 * 🎯 메모이제이션된 콜백 생성 훅
 * @param {Function} callback - 콜백 함수
 * @param {Array} deps - 의존성 배열
 * @returns {Function} 메모이제이션된 콜백
 */
export function useMemoizedCallback(callback, deps) {
  return useCallback(callback, deps);
}

/**
 * 📊 디바운스 훅
 * @param {Function} callback - 디바운스할 콜백
 * @param {number} delay - 지연 시간 (ms)
 * @returns {Function} 디바운스된 콜백
 */
export function useDebounce(callback, delay) {
  const timeoutRef = useRef(null);

  const debouncedCallback = useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
}

/**
 * 🎮 스로틀 훅
 * @param {Function} callback - 스로틀할 콜백
 * @param {number} delay - 지연 시간 (ms)
 * @returns {Function} 스로틀된 콜백
 */
export function useThrottle(callback, delay) {
  const lastCallRef = useRef(0);
  const timeoutRef = useRef(null);

  const throttledCallback = useCallback((...args) => {
    const now = Date.now();
    
    if (now - lastCallRef.current >= delay) {
      callback(...args);
      lastCallRef.current = now;
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        callback(...args);
        lastCallRef.current = Date.now();
      }, delay - (now - lastCallRef.current));
    }
  }, [callback, delay]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return throttledCallback;
}

/**
 * 🔍 인터섹션 옵저버 훅
 * @param {Object} options - IntersectionObserver 옵션
 * @returns {[React.RefObject, boolean]} ref와 isIntersecting 상태
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return [ref, isIntersecting];
}

/**
 * 📱 뷰포트 크기 훅
 * @returns {Object} 뷰포트 크기 정보
 */
export function useViewportSize() {
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = useThrottle(() => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewportSize;
}

/**
 * 🎯 로컬 스토리지 훅
 * @param {string} key - 스토리지 키
 * @param {any} initialValue - 초기값
 * @returns {[any, Function]} 값과 설정 함수
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('로컬 스토리지 읽기 오류:', error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('로컬 스토리지 쓰기 오류:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

/**
 * 🎮 테스트 진행 상태 저장 훅
 * @param {string} testId - 테스트 ID
 * @returns {Object} 테스트 상태 관리 객체
 */
export function useTestProgress(testId) {
  const storageKey = `test_progress_${testId}`;
  const [progress, setProgress] = useLocalStorage(storageKey, {
    currentQuestion: 0,
    scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
    completed: false,
    result: null,
    timestamp: null
  });

  const updateProgress = useCallback((updates) => {
    setProgress(prev => ({
      ...prev,
      ...updates,
      timestamp: Date.now()
    }));
  }, [setProgress]);

  const resetProgress = useCallback(() => {
    setProgress({
      currentQuestion: 0,
      scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
      completed: false,
      result: null,
      timestamp: null
    });
  }, [setProgress]);

  const isExpired = useMemo(() => {
    if (!progress.timestamp) return false;
    const EXPIRY_TIME = 24 * 60 * 60 * 1000; // 24시간
    return Date.now() - progress.timestamp > EXPIRY_TIME;
  }, [progress.timestamp]);

  return {
    progress,
    updateProgress,
    resetProgress,
    isExpired
  };
} 