import { useState, useRef, useEffect } from 'react';

/**
 * 🖼️ 최적화된 이미지 컴포넌트
 * - 지연 로딩 (Lazy Loading)
 * - 에러 처리
 * - 로딩 상태 표시
 * - WebP 포맷 지원
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  placeholder = '/images/placeholder.webp',
  fallback = '/images/fallback.webp',
  loading = 'lazy',
  ...props
}) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const loadImage = () => {
      setIsLoading(true);
      setHasError(false);
      
      // 실제 이미지 로드
      const actualImg = new Image();
      
      actualImg.onload = () => {
        setImageSrc(src);
        setIsLoading(false);
      };
      
      actualImg.onerror = () => {
        setImageSrc(fallback);
        setIsLoading(false);
        setHasError(true);
      };
      
      actualImg.src = src;
    };

    // Intersection Observer를 사용한 지연 로딩
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    observer.observe(img);

    return () => {
      observer.unobserve(img);
    };
  }, [src, fallback]);

  return (
    <div className={`relative ${className}`}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        loading={loading}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        {...props}
      />
      
      {/* 로딩 스피너 */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5D4037]"></div>
        </div>
      )}
      
      {/* 에러 상태 */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="text-sm">이미지를 불러올 수 없습니다</div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * 🎯 WebP 지원 확인 및 폴백 처리
 */
export function useWebPSupport() {
  const [supportsWebP, setSupportsWebP] = useState(false);

  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return false;
      
      const dataURL = canvas.toDataURL('image/webp');
      return dataURL.indexOf('data:image/webp') === 0;
    };

    setSupportsWebP(checkWebPSupport());
  }, []);

  return supportsWebP;
}

/**
 * 🖼️ 이미지 URL 최적화 (WebP 지원 시)
 */
export function getOptimizedImageUrl(originalUrl, supportsWebP = false) {
  if (!originalUrl) return originalUrl;
  
  // WebP 지원 시 .webp 확장자로 변경
  if (supportsWebP && !originalUrl.includes('.webp')) {
    return originalUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  
  return originalUrl;
}

// 🎯 테스트 결과 이미지용 특화 컴포넌트
export function ResultImage({ 
  mbtiType, 
  testType = 'cat', 
  className = '',
  ...props 
}) {
  const getImagePath = () => {
    const basePath = `/images/tests/${testType}`;
    return `${basePath}/${mbtiType}.png`;
  };

  const getFallbackPath = () => {
    return `/images/tests/${testType}/UNKNOWN.png`;
  };

  return (
    <OptimizedImage
      src={getImagePath()}
      fallbackSrc={getFallbackPath()}
      alt={`${mbtiType} ${testType} 결과 이미지`}
      className={`rounded-2xl shadow-lg ${className}`}
      {...props}
    />
  );
}

// 🏷️ 썸네일 이미지용 특화 컴포넌트
export function ThumbnailImage({ 
  src, 
  alt, 
  className = '',
  aspectRatio = '16/9',
  ...props 
}) {
  return (
    <div 
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ aspectRatio }}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        className="absolute inset-0"
        {...props}
      />
    </div>
  );
} 