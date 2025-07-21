// 🎯 일반 테스트 리스트 (캐주얼)
import { Link } from 'react-router-dom';

export default function GeneralTestList({ tests }) {
  return (
    <section className="mb-8">
      {/* 📋 섹션 제목 */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#5D4037]">
        🎯 일반 테스트
      </h2>
      
      {/* 🎴 테스트 카드 그리드 - 통일된 레이아웃 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {tests && tests.map(test => (
          <Link 
            key={test.id} 
            to={`/${test.id}`}
            className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer overflow-hidden block"
          >
            
            {/* 🎨 카드 내용 */}
            <div className="p-4 sm:p-5">
              {/* 📝 제목 */}
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#5D4037] mb-2">
                {test.title}
              </h3>
              
              {/* 💬 설명 */}
              <p className="text-xs sm:text-sm text-[#6D4C41] mb-4 leading-relaxed">
                {test.description}
              </p>
              
              {/* 🚀 테스트 시작 버튼 */}
              <button className="w-full bg-[#A1887F] hover:bg-[#8D6E63] text-white text-xs sm:text-sm font-semibold py-2 sm:py-3 rounded-lg transition-colors duration-200">
                테스트 시작하기
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
