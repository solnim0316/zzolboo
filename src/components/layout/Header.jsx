// 🐱 웹사이트 헤더 컴포넌트
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="text-center py-1 px-4 sm:py-2 md:py-3">
      {/* 🏷️ 메인 타이틀 - 모바일: 작게, 데스크톱: 크게 */}
      <Link 
        to="/" 
        className="inline-block text-xl sm:text-2xl md:text-3xl font-bold text-[#5D4037] hover:text-[#4A2C2A] transition-colors cursor-pointer"
      >
        🐱 쫄부월드 🐱
      </Link>
      {/* 💬 서브 텍스트 */}
      <p className="text-xs sm:text-sm md:text-base text-[#8D6E63] mt-1 sm:mt-2">
       ✦ 매일 업데이트 되는 재미있는 테스트들을 즐겨봐요! ✦
      </p>
    </header>
  );
}
