// 📤 소셜 공유 컴포넌트
import { useState } from 'react';
import { 
  shareToKakao, 
  shareToFacebook, 
  shareToTwitter, 
  copyToClipboard, 
  shareNative,
  createShareData,
  setMetaTags
} from '@/utils/shareUtils';

export default function SocialShare({ testType, result, userName, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // 🎯 공유 데이터 생성
  const shareData = createShareData(testType, result, userName);
  
  // 📱 공유 옵션들
  const shareOptions = [
    {
      id: 'kakao',
      label: '카카오톡',
      icon: '💬',
      color: 'bg-yellow-400 hover:bg-yellow-500',
      action: () => shareToKakao(shareData)
    },
    {
      id: 'facebook',
      label: '페이스북',
      icon: '📘',
      color: 'bg-blue-600 hover:bg-blue-700',
      action: () => shareToFacebook(shareData.url)
    },
    {
      id: 'twitter',
      label: '트위터',
      icon: '🐦',
      color: 'bg-sky-500 hover:bg-sky-600',
      action: () => shareToTwitter(shareData)
    },
    {
      id: 'copy',
      label: '링크복사',
      icon: '📋',
      color: 'bg-gray-600 hover:bg-gray-700',
      action: () => copyToClipboard(shareData.url)
    }
  ];
  
  // 🎯 공유 모달 열기/닫기
  const toggleModal = () => {
    if (!isOpen) {
      // 메타 태그 설정
      setMetaTags({
        title: shareData.title,
        description: shareData.description,
        image: shareData.imageUrl,
        url: shareData.url
      });
    }
    setIsOpen(!isOpen);
  };
  
  // 📱 네이티브 공유 (모바일)
  const handleNativeShare = () => {
    shareNative(shareData);
  };
  
  return (
    <>
      {/* 🚀 공유 버튼 */}
      <button
        onClick={toggleModal}
        className={`flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-2xl font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 text-lg shadow-lg transform hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden ${className}`}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 hover:opacity-20 transition-opacity"></span>
        <span className="relative text-xl">📤</span>
        <span className="relative">공유하기</span>
      </button>
      
      {/* 🎯 공유 모달 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
            {/* 📋 헤더 */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                🎉 결과 공유하기
              </h2>
              <p className="text-sm text-gray-600">
                친구들에게 나의 결과를 자랑해보세요!
              </p>
            </div>
            
            {/* 🔗 공유 링크 미리보기 */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              <div className="text-xs text-gray-500 mb-1">공유 링크</div>
              <div className="text-sm text-gray-700 break-all">
                {shareData.url}
              </div>
            </div>
            
            {/* 📱 네이티브 공유 (모바일) */}
            {'share' in navigator && (
              <button
                onClick={handleNativeShare}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-2xl font-semibold mb-4 hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                📱 모바일 공유
              </button>
            )}
            
            {/* 🎯 공유 옵션들 */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {shareOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={option.action}
                  className={`${option.color} text-white py-3 px-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105`}
                >
                  <span className="text-lg">{option.icon}</span>
                  <span className="text-sm">{option.label}</span>
                </button>
              ))}
            </div>
            
            {/* ❌ 닫기 버튼 */}
            <button
              onClick={toggleModal}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-2xl font-semibold hover:bg-gray-300 transition-all"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
