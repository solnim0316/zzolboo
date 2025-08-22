// 🦶 웹사이트 푸터 컴포넌트
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center px-4 py-4 sm:py-6 md:py-8 mt-8 sm:mt-12">
      {/* 📝 저작권 정보 */}
      <p className="text-xs sm:text-sm md:text-base text-gray-600">
        &copy; 2025 ZZOLBOOWORLD. All rights reserved.
      </p>
      
      {/* 🔗 필수 법적 링크들 */}
      <div className="mt-2 sm:mt-3 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
        <Link to="/about" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
          쫄부 소개
        </Link>
        <Link to="/terms" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
          이용약관
        </Link>
        <Link to="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
          개인정보처리방침
        </Link>
        <Link to="/cookies" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
          쿠키 정책
        </Link>
        <Link to="/contact" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
          쫄부에게 말하기
        </Link>
      </div>
      
      {/* 📧 연락처 정보 */}
      <div className="mt-3 sm:mt-4 text-xs text-gray-500">
        <p>💌 쫄부에게 연락하기: 016sol@gmail.com</p>
        <p className="mt-1">🐱 쫄과 부가 당신을 기다리고 있어요! 🐰</p>
      </div>
    </footer>
  )
}
