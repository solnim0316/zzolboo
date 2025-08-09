import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 현재 라우트에 맞춰 <link rel="canonical">을 동적으로 설정
export default function Canonical() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const { origin } = window.location;
    // 쿼리는 중복 페이지 이슈를 만들 수 있어 기본은 pathname만 사용
    const canonicalHref = origin + location.pathname;

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalHref);
  }, [location.pathname]);

  return null;
}


