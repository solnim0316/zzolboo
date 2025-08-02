//     <section className="w-full bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg mb-1">& 오늘의 추천 (쫄부) Hero 영역
import { Link } from 'react-router-dom';

export default function HeroBanner({ featuredTest }) {
  return (
    <section className="w-full rounded-xl sm:rounded-2xl shadow-lg mb-8 overflow-hidden">
      {/* 🖼️ 쫄부월드 메인 OG 이미지 */}
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem]">
        <img 
          src="/images/banner/1.png" 
          alt="쫄부월드 메인 이미지" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
