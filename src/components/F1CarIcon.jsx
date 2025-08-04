// 🏎️ F1 머신 SVG 아이콘 컴포넌트
export default function F1CarIcon({ carType, className = "" }) {
  const carIcons = {
    'red-bull-rb19': (
      <svg className={className} viewBox="0 0 100 60" fill="none">
        <rect x="10" y="25" width="80" height="10" rx="5" fill="#1E40AF"/>
        <circle cx="20" cy="35" r="8" fill="#DC2626"/>
        <circle cx="80" cy="35" r="8" fill="#DC2626"/>
        <rect x="15" y="20" width="70" height="5" rx="2" fill="#1E40AF"/>
        <rect x="25" y="15" width="50" height="5" rx="2" fill="#DC2626"/>
      </svg>
    ),
    'mercedes-w15': (
      <svg className={className} viewBox="0 0 100 60" fill="none">
        <rect x="10" y="25" width="80" height="10" rx="5" fill="#6B7280"/>
        <circle cx="20" cy="35" r="8" fill="#10B981"/>
        <circle cx="80" cy="35" r="8" fill="#10B981"/>
        <rect x="15" y="20" width="70" height="5" rx="2" fill="#6B7280"/>
        <rect x="25" y="15" width="50" height="5" rx="2" fill="#10B981"/>
      </svg>
    ),
    'ferrari-sf24': (
      <svg className={className} viewBox="0 0 100 60" fill="none">
        <rect x="10" y="25" width="80" height="10" rx="5" fill="#DC2626"/>
        <circle cx="20" cy="35" r="8" fill="#1F2937"/>
        <circle cx="80" cy="35" r="8" fill="#1F2937"/>
        <rect x="15" y="20" width="70" height="5" rx="2" fill="#DC2626"/>
        <rect x="25" y="15" width="50" height="5" rx="2" fill="#DC2626"/>
      </svg>
    ),
    'mclaren-mcl38': (
      <svg className={className} viewBox="0 0 100 60" fill="none">
        <rect x="10" y="25" width="80" height="10" rx="5" fill="#F59E0B"/>
        <circle cx="20" cy="35" r="8" fill="#1F2937"/>
        <circle cx="80" cy="35" r="8" fill="#1F2937"/>
        <rect x="15" y="20" width="70" height="5" rx="2" fill="#F59E0B"/>
        <rect x="25" y="15" width="50" height="5" rx="2" fill="#F59E0B"/>
      </svg>
    ),
    'renault-r25': (
      <svg className={className} viewBox="0 0 100 60" fill="none">
        <rect x="10" y="25" width="80" height="10" rx="5" fill="#F59E0B"/>
        <circle cx="20" cy="35" r="8" fill="#1F2937"/>
        <circle cx="80" cy="35" r="8" fill="#1F2937"/>
        <rect x="15" y="20" width="70" height="5" rx="2" fill="#F59E0B"/>
        <rect x="25" y="15" width="50" height="5" rx="2" fill="#F59E0B"/>
      </svg>
    ),
    'williams-fw43b': (
      <svg className={className} viewBox="0 0 100 60" fill="none">
        <rect x="10" y="25" width="80" height="10" rx="5" fill="#3B82F6"/>
        <circle cx="20" cy="35" r="8" fill="#1F2937"/>
        <circle cx="80" cy="35" r="8" fill="#1F2937"/>
        <rect x="15" y="20" width="70" height="5" rx="2" fill="#3B82F6"/>
        <rect x="25" y="15" width="50" height="5" rx="2" fill="#3B82F6"/>
      </svg>
    ),
    'mercedes-w11': (
      <svg className={className} viewBox="0 0 100 60" fill="none">
        <rect x="10" y="25" width="80" height="10" rx="5" fill="#6B7280"/>
        <circle cx="20" cy="35" r="8" fill="#10B981"/>
        <circle cx="80" cy="35" r="8" fill="#10B981"/>
        <rect x="15" y="20" width="70" height="5" rx="2" fill="#6B7280"/>
        <rect x="25" y="15" width="50" height="5" rx="2" fill="#10B981"/>
      </svg>
    ),
    'red-bull-rb14': (
      <svg className={className} viewBox="0 0 100 60" fill="none">
        <rect x="10" y="25" width="80" height="10" rx="5" fill="#1E40AF"/>
        <circle cx="20" cy="35" r="8" fill="#DC2626"/>
        <circle cx="80" cy="35" r="8" fill="#DC2626"/>
        <rect x="15" y="20" width="70" height="5" rx="2" fill="#1E40AF"/>
        <rect x="25" y="15" width="50" height="5" rx="2" fill="#DC2626"/>
      </svg>
    ),
    'red-bull-rb9': (
      <svg className={className} viewBox="0 0 100 60" fill="none">
        <rect x="10" y="25" width="80" height="10" rx="5" fill="#1E40AF"/>
        <circle cx="20" cy="35" r="8" fill="#DC2626"/>
        <circle cx="80" cy="35" r="8" fill="#DC2626"/>
        <rect x="15" y="20" width="70" height="5" rx="2" fill="#1E40AF"/>
        <rect x="25" y="15" width="50" height="5" rx="2" fill="#DC2626"/>
      </svg>
    ),
    'ferrari-f2007': (
      <svg className={className} viewBox="0 0 100 60" fill="none">
        <rect x="10" y="25" width="80" height="10" rx="5" fill="#DC2626"/>
        <circle cx="20" cy="35" r="8" fill="#1F2937"/>
        <circle cx="80" cy="35" r="8" fill="#1F2937"/>
        <rect x="15" y="20" width="70" height="5" rx="2" fill="#DC2626"/>
        <rect x="25" y="15" width="50" height="5" rx="2" fill="#DC2626"/>
      </svg>
    )
  };

  return carIcons[carType] || carIcons['red-bull-rb19'];
} 