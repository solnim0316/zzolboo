import React from 'react';
import ShareOption from "./ShareOption";

export default function ShareModal({ isOpen, onClose, title, description, url }) {
  if (!isOpen) return null;

  const handleKakaoShare = () => {
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: description,
          imageUrl: 'https://zzolboo.com/og-image.png', // OG 이미지 URL
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: '결과 보기',
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    } else {
      // 카카오 SDK가 없으면 링크 복사
      handleCopyLink();
    }
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert('링크가 복사되었습니다!');
    }).catch(() => {
      // 폴백: 텍스트 영역 생성
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('링크가 복사되었습니다!');
    });
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title + ' ' + description)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-80 shadow-xl" onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-center flex-1">결과 공유하기</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold ml-4"
          >
            ×
          </button>
        </div>
        
        {/* 공유 옵션들 */}
        <div className="grid grid-cols-2 gap-3">
          <ShareOption 
            label="카카오톡" 
            icon="💬"
            onClick={handleKakaoShare}
            className="bg-yellow-100 hover:bg-yellow-200"
          />
          <ShareOption 
            label="페이스북" 
            icon="📘"
            onClick={handleFacebookShare}
            className="bg-blue-100 hover:bg-blue-200"
          />
          <ShareOption 
            label="트위터" 
            icon="🐦"
            onClick={handleTwitterShare}
            className="bg-sky-100 hover:bg-sky-200"
          />
          <ShareOption 
            label="링크복사" 
            icon="📋"
            onClick={handleCopyLink}
            className="bg-gray-100 hover:bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
