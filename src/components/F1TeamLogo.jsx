// 🏎️ F1 팀 로고 컴포넌트 (안정적인 방식)
export default function F1TeamLogo({ teamType, className = "" }) {
  const teamLogos = {
    'red-bull': {
      color: "#DC2626",
      bgColor: "#1E40AF",
      text: "RB"
    },
    'mercedes': {
      color: "#10B981",
      bgColor: "#6B7280",
      text: "M"
    },
    'ferrari': {
      color: "#DC2626",
      bgColor: "#1F2937",
      text: "F"
    },
    'mclaren': {
      color: "#F59E0B",
      bgColor: "#1F2937",
      text: "M"
    },
    'renault': {
      color: "#F59E0B",
      bgColor: "#1F2937",
      text: "R"
    },
    'williams': {
      color: "#3B82F6",
      bgColor: "#1F2937",
      text: "W"
    }
  };

  const logo = teamLogos[teamType] || teamLogos['red-bull'];

  return (
    <svg className={className} viewBox="0 0 100 60" fill="none">
      {/* 팀 로고 배경 */}
      <circle cx="50" cy="30" r="25" fill={logo.color}/>
      <circle cx="50" cy="30" r="20" fill={logo.bgColor}/>
      
      {/* 팀 텍스트 */}
      <text 
        x="50" 
        y="35" 
        textAnchor="middle" 
        fill="white" 
        fontSize="12" 
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        {logo.text}
      </text>
      
      {/* 추가 디테일 (팀별 특색) */}
      {teamType === 'red-bull' && (
        <>
          <circle cx="35" cy="20" r="3" fill="white" opacity="0.8"/>
          <circle cx="65" cy="20" r="3" fill="white" opacity="0.8"/>
        </>
      )}
      {teamType === 'ferrari' && (
        <>
          <rect x="40" y="15" width="20" height="2" fill="white" opacity="0.6"/>
          <rect x="40" y="43" width="20" height="2" fill="white" opacity="0.6"/>
        </>
      )}
      {teamType === 'mercedes' && (
        <>
          <polygon points="50,15 45,25 55,25" fill="white" opacity="0.7"/>
          <polygon points="50,45 45,35 55,35" fill="white" opacity="0.7"/>
        </>
      )}
    </svg>
  );
} 