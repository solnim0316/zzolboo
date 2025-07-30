import React from 'react';

export default function AccessibleButton({
  children,
  onClick,
  className = '',
  disabled = false,
  ariaLabel,
  ariaDescribedBy,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  icon,
  loading = false,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-[#F48FB1] hover:bg-[#F06292] active:bg-[#E91E63] text-white focus:ring-[#F48FB1]',
    secondary: 'bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-700 focus:ring-gray-400',
    outline: 'border-2 border-[#F48FB1] text-[#F48FB1] hover:bg-[#F48FB1] hover:text-white focus:ring-[#F48FB1]',
    ghost: 'text-[#F48FB1] hover:bg-[#F48FB1] hover:text-white focus:ring-[#F48FB1]'
  };

  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-3 text-base',
    large: 'px-6 py-4 text-lg'
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!disabled && !loading && onClick) {
        onClick(e);
      }
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}

// 🎯 테스트 선택지용 접근 가능한 버튼
export function AccessibleOptionButton({
  children,
  onClick,
  selected = false,
  correct = null, // null, true, false
  disabled = false,
  className = '',
  ...props
}) {
  const getVariantClasses = () => {
    if (disabled) return 'bg-gray-100 text-gray-400 cursor-not-allowed';
    if (selected) {
      if (correct === true) return 'bg-green-100 border-green-500 text-green-700';
      if (correct === false) return 'bg-red-100 border-red-500 text-red-700';
      return 'bg-[#F48FB1] text-white border-[#F48FB1]';
    }
    return 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-[#F48FB1]';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!disabled && onClick) {
        onClick(e);
      }
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F48FB1] focus:ring-offset-2 ${getVariantClasses()} ${className}`}
      aria-pressed={selected}
      aria-disabled={disabled}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm sm:text-base">{children}</span>
        {selected && (
          <span className="text-lg" aria-hidden="true">
            {correct === true ? '✅' : correct === false ? '❌' : '✓'}
          </span>
        )}
      </div>
    </button>
  );
}

// 🎮 네비게이션용 접근 가능한 링크 버튼
export function AccessibleNavButton({ to, children, icon, current = false, ...props }) {
  return (
    <button
      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#F48FB1] focus:ring-offset-2 ${
        current 
          ? 'bg-[#F48FB1] text-white' 
          : 'text-gray-700 hover:text-[#5D4037] hover:bg-gray-100'
      }`}
      aria-current={current ? 'page' : undefined}
      {...props}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </button>
  );
} 