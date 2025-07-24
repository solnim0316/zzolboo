// 🐱 웹사이트 헤더 컴포넌트
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: '홈', path: '/', icon: '🏠', clickable: true },
    { name: 'MBTI 가이드', path: '/mbti-guide', icon: '📚', clickable: true },
    { name: '블로그', path: '/blog', icon: '📝', clickable: true },
    { name: 'MBTI 테스트', path: '#', icon: '🐾', clickable: false },
    { name: '일반 테스트', path: '#', icon: '🎯', clickable: false },
    { name: 'FAQ', path: '/faq', icon: '❓', clickable: true },
    { name: '소개', path: '/about', icon: '💫', clickable: true }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🏷️ 로고/브랜드 */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-lg sm:text-xl font-bold text-[#5D4037] hover:text-[#4A2C2A] transition-colors"
          >
            <span>🐱</span>
            <span>쫄부월드</span>
          </Link>

          {/* 🖥️ 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              item.clickable ? (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#5D4037] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ) : (
                <span
                  key={item.path}
                  className="flex items-center space-x-1 text-gray-400 cursor-not-allowed px-3 py-2 rounded-md text-sm font-medium"
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </span>
              )
            ))}
          </nav>

          {/* � 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#5D4037] focus:outline-none focus:text-[#5D4037] p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 📱 모바일 네비게이션 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
              {menuItems.map((item) => (
                item.clickable ? (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-[#5D4037] hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <span
                    key={item.path}
                    className="flex items-center space-x-2 text-gray-400 cursor-not-allowed px-3 py-2 rounded-md text-base font-medium"
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
