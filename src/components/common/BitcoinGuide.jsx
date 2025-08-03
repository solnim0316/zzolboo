// 💡 비트코인 투자 가이드 컴포넌트
import React from 'react';

export default function BitcoinGuide({ className = "" }) {
  return (
    <div className={`bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200 ${className}`}>
      <h3 className="text-lg font-semibold text-[#5D4037] mb-4 text-center">
        💡 비트코인 투자자 생존 가이드
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="font-semibold text-green-700 mb-2">🔒 보안 (돈 지키기)</h4>
          <ul className="space-y-1 text-gray-700">
            <li>• 💾 하드웨어 지갑 쓰세요 (핫지갑은 위험!)</li>
            <li>• 🔐 2단계 인증 필수!</li>
            <li>• 📝 백업 키는 안전한 곳에 (잃어버리면 끝!)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-blue-700 mb-2">📚 공부하기</h4>
          <ul className="space-y-1 text-gray-700">
            <li>• 📖 백서 읽기 (어려워도 읽으세요!)</li>
            <li>• 👥 커뮤니티 참여 (혼자 하지 마세요!)</li>
            <li>• 📊 차트 보기 연습 (눈에 익혀야 해요!)</li>
          </ul>
        </div>
      </div>
      
      {/* 광고 배치 가능한 공간 */}
      <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-sm text-yellow-800 text-center">
          ⚠️ <strong>중요!</strong> 투자는 본인의 책임입니다. 절대 빚내서 하지 마세요! 😅
        </p>
      </div>
      
      {/* 추가 광고 공간 */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600 text-center">
          💡 더 자세한 투자 정보가 필요하시다면 전문가와 상담해보세요!
        </p>
      </div>
    </div>
  );
} 