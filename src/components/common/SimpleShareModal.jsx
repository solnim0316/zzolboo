import React, { useState } from 'react';

const shareOptions = [
  {
    id: 'kakao',
    label: '카카오톡',
    icon: '💬',
    color: 'bg-yellow-400 hover:bg-yellow-500',
    action: (shareUrl) => {
      // 카카오톡 공유 (SDK 연동 필요, 현재는 링크 복사)
      navigator.clipboard.writeText(shareUrl);
      alert('카카오톡 공유는 준비 중입니다! 링크가 복사되었습니다.');
    }
  },
  {
    id: 'x',
    label: 'X(트위터)',
    icon: '🐦',
    color: 'bg-black hover:bg-gray-800',
    action: (shareUrl) => {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,'_blank');
    }
  },
  {
    id: 'insta',
    label: '인스타 링크복사',
    icon: '📸',
    color: 'bg-pink-500 hover:bg-pink-600',
    action: (shareUrl) => {
      navigator.clipboard.writeText(shareUrl);
      alert('인스타그램은 직접 공유가 불가하여 링크가 복사되었습니다!');
    }
  },
];

export default function SimpleShareModal({ open, onClose, shareUrl }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-6 w-full max-w-xs shadow-2xl text-center">
        <h2 className="text-lg font-bold mb-4">공유하기</h2>
        <div className="grid grid-cols-1 gap-3 mb-4">
          {shareOptions.map(option => (
            <button
              key={option.id}
              onClick={() => option.action(shareUrl)}
              className={`${option.color} text-white py-3 px-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all`}
            >
              <span className="text-lg">{option.icon}</span>
              <span>{option.label}</span>
            </button>
          ))}
          {'share' in navigator && (
            <button
              onClick={() => {
                navigator.share({ title: '오늘 뭐 먹지?', url: shareUrl });
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              <span className="text-lg">📱</span>
              <span>모바일 공유</span>
            </button>
          )}
        </div>
        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-700 py-3 rounded-2xl font-semibold hover:bg-gray-300 transition-all"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
