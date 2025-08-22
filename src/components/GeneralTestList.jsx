// 🎯 일반 테스트 리스트 (캐주얼)
import { Link } from 'react-router-dom';

export default function GeneralTestList({ tests }) {
  // 🎨 테마별 배경색 매핑
  const getThemeColors = (tags) => {
    if (tags.includes('연애')) return 'bg-gradient-to-br from-pink-100 to-rose-100';
    if (tags.includes('심리')) return 'bg-gradient-to-br from-purple-100 to-indigo-100';
    if (tags.includes('성격')) return 'bg-gradient-to-br from-blue-100 to-cyan-100';
    if (tags.includes('취미')) return 'bg-gradient-to-br from-green-100 to-emerald-100';
    if (tags.includes('음식')) return 'bg-gradient-to-br from-orange-100 to-amber-100';
    if (tags.includes('패션')) return 'bg-gradient-to-br from-fuchsia-100 to-pink-100';
    if (tags.includes('영화')) return 'bg-gradient-to-br from-violet-100 to-purple-100';
    if (tags.includes('색상')) return 'bg-gradient-to-br from-yellow-100 to-orange-100';
    return 'bg-gradient-to-br from-gray-100 to-slate-100';
  };

  // 🚀 테스트 시작 핸들러
  const handleTestStart = (testId) => {
    if (testId === 'love-habit-test') {
      window.location.href = '/love-habit-test';
    } else {
      window.location.href = `/${testId}`;
    }
  };

  return (
    <section className="mb-8" style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px' }}>
      {/* 🎴 테스트 카드 그리드 - 매력적인 레이아웃 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tests && tests.map(test => (
          <div 
            key={test.id} 
            className={`${getThemeColors(test.tags || [])} rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden border border-white/20`}
            onClick={() => handleTestStart(test.id)}
          >
            
            {/* 🎨 카드 내용 */}
            <div className="p-4">
              {/* 🌟 테스트 정보 헤더 */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{test.emoji}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-white/80 px-2 py-1 rounded-full text-gray-700 font-medium">
                    {test.estimatedTime}
                  </span>
                </div>
              </div>
              
              {/* 📝 제목 */}
              <h3 className="text-base font-bold text-[#5D4037] mb-2 leading-tight">
                {test.title}
              </h3>
              
              {/* 💬 설명 */}
              <p className="text-sm text-[#6D4C41] mb-4 leading-relaxed">
                {test.description}
              </p>
              
              {/* 🏷️ 태그들 */}
              <div className="flex flex-wrap gap-1 mb-4">
                {test.tags && test.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-block px-2 py-1 text-xs rounded-full bg-white/60 text-gray-700 font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {test.tags && test.tags.length > 3 && (
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-white/60 text-gray-500">
                    +{test.tags.length - 3}
                  </span>
                )}
              </div>
              
              {/* ⭐ Featured 표시 */}
              {test.isFeatured && (
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-xs text-yellow-600 font-medium">추천 테스트</span>
                </div>
              )}
            </div>
            
            {/* 🚀 테스트 시작 버튼 */}
            <div className="px-4 pb-4">
              <button className="w-full bg-[#5D4037] hover:bg-[#4E342E] text-white text-sm font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md">
                🎯 재미있게 시작하기
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
