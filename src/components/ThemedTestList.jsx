// 🌟 세계관 기반 테스트 리스트 (쫄부 테마)
import { useNavigate } from 'react-router-dom';

export default function ThemedTestList({ tests }) {
  const navigate = useNavigate();

  // 🎨 테마별 배경색 매핑
  const getThemeColors = (theme) => {
    switch (theme) {
      case '파스텔': return 'bg-gradient-to-br from-pink-100 to-purple-100';
      case '따뜻한 브라운': return 'bg-gradient-to-br from-amber-100 to-orange-100';
      case '신비로운 초록': return 'bg-gradient-to-br from-emerald-100 to-teal-100';
      case '쥬라기': return 'bg-gradient-to-br from-green-100 to-emerald-100';
      case '따뜻한 가족': return 'bg-gradient-to-br from-pink-100 to-rose-100';
      default: return 'bg-gradient-to-br from-pink-100 to-purple-100';
    }
  };

  // 🚀 테스트 시작 핸들러
  const handleTestStart = (testId) => {
    if (testId === 'dinosaur-mbti') {
      navigate('/dinosaur-test');
    } else if (testId === 'cat-mbti') {
      navigate('/cat-test');
    } else if (testId === 'family-mbti') {
      navigate('/family-mbti');
    } else {
      navigate(`/test/${testId}`);
    }
  };

  return (
    <section className="mb-6">
      {/* 📋 섹션 제목 */}
      <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[#5D4037]">
        🐱 쫄부 세계관 테스트
      </h2>
      
      {/* 🎴 테스트 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {tests && tests.map(test => (
          <div key={test.id} 
               className={`${getThemeColors(test.theme)} rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer overflow-hidden`}>
            
            {/* 🎨 카드 내용 */}
            <div className="p-4 sm:p-5">
              {/* 🌍 세계관 정보 */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg sm:text-xl">{test.emoji}</span>
                <span className="text-xs sm:text-sm bg-white/80 px-2 py-1 rounded-full text-gray-700">
                  {test.world}
                </span>
              </div>
              
              {/* 📝 제목 */}
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#5D4037] mb-2">
                {test.title}
              </h3>
              
              {/* 💬 설명 */}
              <p className="text-xs sm:text-sm text-[#6D4C41] mb-3 leading-relaxed">
                {test.description}
              </p>
              
              {/* 🏷️ 테마 태그 */}
              <div className="flex justify-between items-center">
                <span className="inline-block px-2 sm:px-3 py-1 text-xs rounded-full bg-white/60 text-gray-700">
                  {test.theme}
                </span>
                
                {/* ⭐ Featured 표시 */}
                {test.isFeatured && (
                  <span className="text-xs text-yellow-600">⭐ 추천</span>
                )}
              </div>
            </div>
            
            {/* 🚀 테스트 시작 버튼 */}
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              <button 
                onClick={() => handleTestStart(test.id)}
                className="w-full bg-[#5D4037] hover:bg-[#4E342E] text-white text-xs sm:text-sm font-semibold py-2 sm:py-3 rounded-lg transition-colors duration-200"
              >
                테스트 시작하기
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
