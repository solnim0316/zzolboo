//     <section className="w-full bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg mb-1">& 오늘의 추천 (쫄부) Hero 영역
import { Link } from 'react-router-dom';

export default function HeroBanner({ featuredTest }) {
  return (
    <section className="w-full rounded-xl sm:rounded-2xl shadow-lg mb-8 overflow-hidden">
      {/* 🖼️ 쫄부월드 메인 OG 이미지 */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1]">
        <picture>
          <source type="image/avif" srcSet="/images/banner/1.avif 640w, /images/banner/3.avif 960w, /images/banner/5.avif 1280w" />
          <source type="image/webp" srcSet="/images/banner/1.webp 640w, /images/banner/3.webp 960w, /images/banner/5.webp 1280w" />
          <img 
            src="/images/banner/1.webp" 
            alt="쫄부월드 메인 이미지" 
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
            width="1280"
            height="427"
          />
        </picture>
      </div>
    </section>
  );
}
