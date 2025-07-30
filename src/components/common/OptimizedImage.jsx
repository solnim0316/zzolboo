import React, { useState, useEffect } from 'react';

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/images/placeholder.png',
  className = '',
  loading = 'lazy',
  onLoad,
  onError,
  ...props
}) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(false);

  // WebP 지원 확인
  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };
    setSupportsWebP(checkWebPSupport());
  }, []);

  // WebP 이미지 URL 생성
  const getWebPUrl = (originalSrc) => {
    if (!supportsWebP) return originalSrc;
    
    // 이미 WebP인 경우 그대로 반환
    if (originalSrc.includes('.webp')) return originalSrc;
    
    // 확장자 변경
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    
    // 대체 이미지로 시도
    if (imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
    } else {
      // 최종 대체 이미지도 실패한 경우
      console.warn('이미지 로딩 실패:', src);
      onError?.();
    }
  };

  // 이미지 소스 변경 시 상태 리셋
  useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {/* 🖼️ 메인 이미지 */}
      <img
        src={getWebPUrl(imageSrc)}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        {...props}
      />
      
      {/* 🌀 로딩 스피너 */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-[#F48FB1] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* ❌ 에러 상태 */}
      {hasError && imageSrc === fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">🖼️</div>
            <p className="text-sm">이미지를 불러올 수 없습니다</p>
          </div>
        </div>
      )}
    </div>
  );
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