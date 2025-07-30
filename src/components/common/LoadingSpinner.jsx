import React from 'react';

export default function LoadingSpinner({ 
  size = 'medium', 
  color = 'primary', 
  text = '로딩 중...',
  showText = true 
}) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xlarge: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-[#5D4037]',
    pink: 'text-[#F48FB1]',
    white: 'text-white',
    gray: 'text-gray-500'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      {/* 🌀 스피너 애니메이션 */}
      <div className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}>
        <svg 
          className="w-full h-full" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      
      {/* 📝 로딩 텍스트 */}
      {showText && (
        <div className="text-center">
          <p className="text-sm text-gray-600 font-medium">{text}</p>
          <div className="flex justify-center space-x-1 mt-2">
            <div className="w-2 h-2 bg-[#F48FB1] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-[#F48FB1] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-[#F48FB1] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      )}
    </div>
  );
}

// 🎯 전체 화면 로딩 컴포넌트
export function FullScreenLoader({ text = '쫄부월드를 준비하고 있어요...' }) {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4 animate-pulse">🐱</div>
          <h1 className="text-2xl font-bold text-[#5D4037] mb-2">쫄부월드</h1>
        </div>
        <LoadingSpinner size="large" text={text} />
      </div>
    </div>
  );
}

// 🎮 테스트 진행 로딩 컴포넌트
export function TestProgressLoader({ currentQuestion, totalQuestions, testName }) {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">🎯</div>
        <h2 className="text-lg font-bold text-[#5D4037] mb-1">{testName}</h2>
        <p className="text-sm text-gray-600">질문 {currentQuestion} / {totalQuestions}</p>
      </div>
      
      {/* 📊 진행률 바 */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-[#F48FB1] to-[#F06292] h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <LoadingSpinner size="medium" text="다음 질문을 준비하고 있어요..." />
    </div>
  );
} 