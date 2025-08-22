// 🌟 Hero 배너 - 깔끔한 버전
import { Link } from 'react-router-dom';

export default function HeroBanner({ featuredTest }) {
  return (
    <section className="w-full rounded-xl sm:rounded-2xl shadow-lg mb-0 overflow-hidden">
      {/* 🖼️ 쫄부월드 메인 OG 이미지 */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1]">
        <img 
          src="/images/banner/1.webp" 
          alt="쫄부월드 메인 이미지" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>
    </section>
  );
}
