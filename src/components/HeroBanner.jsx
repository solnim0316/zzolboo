//     <section className="w-full bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg mb-1">& 오늘의 추천 (쫄부) Hero 영역
import { Link } from 'react-router-dom';

export default function HeroBanner({ featuredTest }) {
  return (
    <section className="w-full bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center shadow-lg mb-8">
      
      {/* ✨ 상단 배지 */}
      <div className="text-xs sm:text-sm md:text-base text-[#8D6E63] mb-1 sm:mb-2">
        ✨ 오늘의 쫄부 추천 테스트 ✨
      </div>
      
      {/* 🐱 캐릭터 영역 */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 mb-2 sm:mb-3">
        <div className="text-3xl sm:text-4xl md:text-5xl">🐱</div>
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#5D4037]">
          쫄 & 부
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl">🐱</div>
      </div>
      
      {/* 📝 메인 텍스트 */}
      <div className="mb-2 sm:mb-3">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5D4037] mb-0.5 sm:mb-1">
          {featuredTest ? featuredTest.title : "쫄부월드에 오신 걸 환영해요!"}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#6D4C41] leading-relaxed">
          {featuredTest ? featuredTest.description : "쫄과 부가 함께하는 오늘의 세계관 여행을 시작해보세요!"}
        </p>
      </div>
      
      {/* 🚀 메인 CTA 버튼 */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <button className="bg-[#F48FB1] hover:bg-[#F06292] active:bg-[#E91E63] text-white text-sm sm:text-base md:text-lg font-bold py-3 px-8 sm:py-4 sm:px-12 md:py-5 md:px-16 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
          {featuredTest ? "테스트 시작하기" : "테스트 시작하기"}
        </button>
        
        <Link 
          to="/mbti-guide"
          className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-sm sm:text-base font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          📚 MBTI 가이드
        </Link>
      </div>
      
      {/* 💫 하단 장식 */}
      <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#8D6E63]">
        🌟 쫄과 부와 함께 새로운 자아를 발견해보세요 🌟
      </div>
    </section>
  );
}
