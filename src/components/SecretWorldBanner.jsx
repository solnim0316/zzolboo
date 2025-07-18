// 🔒 잠금 해제형 테스트 (예정)
export default function SecretWorldBanner() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-inner mb-8 relative overflow-hidden">
      
      {/* 🌟 배경 효과 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      {/* 🔒 메인 콘텐츠 */}
      <div className="relative z-10">
        {/* 🔐 아이콘 */}
        <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🔒</div>
        
        {/* 📝 제목 */}
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-2 sm:mb-3">
          비밀의 세계관 테스트
        </div>
        
        {/* 💬 설명 */}
        <div className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          특정 조건을 달성하면 쫄과 부의 숨겨진 세계가 열립니다...
        </div>
        
        {/* 🎯 조건 힌트 */}
        <div className="text-xs sm:text-sm text-gray-500 bg-white/50 inline-block px-3 sm:px-4 py-2 rounded-full">
          💡 힌트: 세계관 테스트 3개 완료 시 해제!
        </div>
      </div>
      
      {/* ✨ 장식 요소 */}
      <div className="absolute top-4 left-4 text-yellow-300 opacity-50">⭐</div>
      <div className="absolute top-6 right-6 text-yellow-300 opacity-50">✨</div>
      <div className="absolute bottom-4 left-6 text-yellow-300 opacity-50">🌟</div>
      <div className="absolute bottom-6 right-4 text-yellow-300 opacity-50">💫</div>
    </section>
  );
}
