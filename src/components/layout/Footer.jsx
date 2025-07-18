// 🦶 웹사이트 푸터 컴포넌트
export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center px-4 py-4 sm:py-6 md:py-8 mt-8 sm:mt-12">
      {/* 📝 저작권 정보 */}
      <p className="text-xs sm:text-sm md:text-base text-gray-600">
        &copy; 2025 ZZOLBOOWORLD. All rights reserved.
      </p>
      
      {/* 🔗 추가 링크들 */}
      <div className="mt-2 sm:mt-3 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
        <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
          이용약관
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
          개인정보처리방침
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
          문의하기
        </a>
      </div>
    </footer>
  )
}
