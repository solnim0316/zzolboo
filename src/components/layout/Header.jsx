// 🐱 웹사이트 헤더 컴포넌트
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AccessibleNavButton } from '@/components/common/AccessibleButton';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState(new Set());

  const menuItems = [
    { 
      name: '홈', 
      icon: '🏠', 
      type: 'dropdown',
      items: [
        { name: '메인 홈', path: '/', icon: '🏠' },
        { name: 'BRO', path: '/bro', icon: '🕶️' }
      ]
    },
    { name: '갤러리', path: '/gallery', icon: '📸', clickable: false }, // 임시 비활성화 (인스타그램 API 설정 중)
    { 
      name: '가이드', 
      icon: '📚', 
      type: 'dropdown',
      items: [
        { name: 'MBTI 가이드', path: '/mbti-guide', icon: '📖' },
        { name: '블로그', path: '/blog', icon: '📝' }
      ]
    },
    { 
      name: '소개', 
      icon: '❓', 
      type: 'dropdown',
      items: [
        { name: 'FAQ', path: '/faq', icon: '❓' },
        { name: '소개', path: '/about', icon: '💫' }
      ]
    }
  ];

  const handleDropdownToggle = (menuName) => {
    setActiveDropdowns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(menuName)) {
        newSet.delete(menuName);
      } else {
        newSet.add(menuName);
      }
      return newSet;
    });
  };

  const handleDropdownClose = () => {
    setActiveDropdowns(new Set());
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🏷️ 로고/브랜드 */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-lg sm:text-xl font-bold text-[#5D4037] hover:text-[#4A2C2A] transition-colors"
          >
                         <img 
                               src="/images/logo/logo.webp" 
               alt="쫄부월드 로고" 
               className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
               onError={(e) => {
                 if (import.meta.env.DEV) {
          console.log('로고 이미지 로드 실패:', e.target.src);
        }
                 e.target.style.display = 'none';
                 e.target.nextSibling.style.display = 'inline';
               }}
               onLoad={(e) => {
                 if (import.meta.env.DEV) {
          console.log('로고 이미지 로드 성공:', e.target.src);
        }
               }}
             />
            <span style={{ display: 'none' }}>🐱</span>
            <span>쫄부월드</span>
          </Link>

          {/* 🖥️ 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="메인 네비게이션">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.type === 'dropdown' ? (
                  // 드롭다운 메뉴
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      onBlur={() => setTimeout(handleDropdownClose, 150)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-[#5D4037] px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#F48FB1] focus:ring-offset-2"
                      aria-expanded={activeDropdowns.has(item.name)}
                      aria-haspopup="true"
                    >
                      <span aria-hidden="true">{item.icon}</span>
                      <span>{item.name}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform ${activeDropdowns.has(item.name) ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* 드롭다운 메뉴 내용 */}
                    {activeDropdowns.has(item.name) && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={handleDropdownClose}
                            className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:text-[#5D4037] hover:bg-gray-50 transition-colors"
                          >
                            <span>{subItem.icon}</span>
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // 일반 메뉴 아이템
                  item.clickable ? (
                    <Link
                      to={item.path}
                      className="flex items-center space-x-1 text-gray-700 hover:text-[#5D4037] px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#F48FB1] focus:ring-offset-2"
                      aria-label={`${item.name} 페이지로 이동`}
                    >
                      <span aria-hidden="true">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <span
                      className="flex items-center space-x-1 text-gray-400 cursor-not-allowed px-3 py-2 rounded-md text-sm font-medium"
                      aria-label={`${item.name} (준비 중)`}
                    >
                      <span aria-hidden="true">{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                  )
                )}
              </div>
            ))}
          </nav>

          {/* 📱 모바일 메뉴 버튼 */}
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
                <div key={item.name}>
                  {item.type === 'dropdown' ? (
                    // 모바일 드롭다운 메뉴
                    <div>
                      <div className="flex items-center space-x-2 text-gray-700 px-3 py-2 rounded-md text-base font-medium">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                      <div className="ml-6 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center space-x-2 text-gray-600 hover:text-[#5D4037] hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                          >
                            <span>{subItem.icon}</span>
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // 모바일 일반 메뉴 아이템
                    item.clickable ? (
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-2 text-gray-700 hover:text-[#5D4037] hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors"
                      >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    ) : (
                      <span
                        className="flex items-center space-x-2 text-gray-400 cursor-not-allowed px-3 py-2 rounded-md text-base font-medium"
                      >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
