import { dinosaurImages, dinosaurThemes } from '@/data/dinosaurImages';

// 🦕 공룡 결과 카드 컴포넌트
export default function DinosaurResultCard({ mbtiType, userName, description }) {
  const theme = dinosaurThemes[mbtiType] || dinosaurThemes['???'];
  const imageSrc = dinosaurImages[mbtiType] || dinosaurImages['???'];
  
  return (
    <div 
      className="relative max-w-md mx-auto rounded-2xl shadow-xl overflow-hidden"
      style={{ backgroundColor: theme.secondary }}
    >
      {/* 🎨 그라데이션 배경 */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`
        }}
      />
      
      {/* 📝 결과 내용 */}
      <div className="relative z-10 p-6 text-center">
        {/* 🦕 공룡 이미지 */}
        <div className="mb-6">
          <img
            src={imageSrc}
            alt={`${mbtiType} 공룡`}
            className="w-32 h-32 mx-auto rounded-full shadow-lg object-cover"
            style={{ 
              borderColor: theme.primary,
              borderWidth: '4px',
              borderStyle: 'solid'
            }}
          />
        </div>
        
        {/* 👤 사용자 이름 */}
        <h2 className="text-2xl font-bold mb-2" style={{ color: theme.primary }}>
          {userName}님의 결과
        </h2>
        
        {/* 🦕 MBTI 타입 */}
        <div 
          className="inline-block px-4 py-2 rounded-full text-white font-bold text-lg mb-4"
          style={{ backgroundColor: theme.primary }}
        >
          {mbtiType}
        </div>
        
        {/* 📄 설명 */}
        <p className="text-gray-700 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
