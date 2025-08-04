import React, { useState } from 'react';
import { shareToKakao, shareToFacebook, shareToTwitter, copyToClipboard } from '../../utils/shareUtils';

export default function UnifiedShareModal({ isOpen, onClose, result, testType = 'general' }) {
  const [copied, setCopied] = useState(false);

  // 공유 데이터 생성
  const getShareData = () => {
    const baseUrl = window.location.origin;
    const currentUrl = window.location.href;
    
    // 테스트 타입별 제목 설정
    const getTestTitle = () => {
      switch (testType) {
        case 'lol':
          return '🎮 롤 라인 추천 테스트';
        case 'dinosaur':
          return '🦕 공룡 MBTI 테스트';
        case 'cat':
          return '🐱 고양이 MBTI 테스트';
        case 'food':
          return '🍽️ 음식 성향 테스트';
        case 'fashion':
          return '👗 패션 스타일 테스트';
        case 'movie':
          return '🎬 영화 취향 테스트';
        case 'color':
          return '🎨 컬러 성향 테스트';
        case 'bitcoin':
          return '₿ 비트코인 투자자 테스트';
        case 'isekai':
          return '🌍 이세계 전이 테스트';
        case 'workout-mate':
          return '💪 운동메이트 테스트';
        case 'fingerprincess':
          return '🎨 나만의 핑프 테스트';
        case 'family':
          return '👨‍👩‍👧‍👦 가족 MBTI 테스트';
        case 'love':
          return '💕 연애 습관 테스트';
        case 'drama':
          return '🎭 드라마 성향 테스트';
        case 'f1-driver':
          return '🏎️ F1 드라이버 테스트';
        case 'stock-investor':
          return '📈 주식 투자자 테스트';

        default:
          return '🎯 성격 테스트';
      }
    };

    return {
      url: currentUrl,
      title: `${getTestTitle()} 결과: ${result.title || result.type || '나의 결과'}`,
      description: result.catchphrase || result.description || result.summary || '테스트 결과를 확인해보세요!',
      imageUrl: testType === 'fingerprincess' && result.imageUrl 
        ? `${baseUrl}${result.imageUrl}` 
        : `${baseUrl}/og-image.png`,
      testType: testType
    };
  };

  const shareData = getShareData();

  // 카카오톡 공유
  const handleKakaoShare = () => {
    shareToKakao(shareData);
  };

  // 페이스북 공유
  const handleFacebookShare = () => {
    shareToFacebook(shareData.url);
  };

  // 트위터 공유
  const handleTwitterShare = () => {
    shareToTwitter(shareData);
  };

  // 링크 복사
  const handleCopyLink = async () => {
    try {
      await copyToClipboard(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('링크 복사 실패:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-80 shadow-xl" onClick={(e) => e.stopPropagation()}>
        {/* 헤더 */}
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
          {/* 카카오톡 */}
          <button
            onClick={handleKakaoShare}
            className="bg-yellow-100 hover:bg-yellow-200 text-sm px-4 py-3 rounded-lg transition-colors duration-200 flex flex-col items-center gap-1"
          >
            <span className="text-lg">💬</span>
            <span className="text-xs font-medium">카카오톡</span>
          </button>

          {/* 페이스북 */}
          <button
            onClick={handleFacebookShare}
            className="bg-blue-100 hover:bg-blue-200 text-sm px-4 py-3 rounded-lg transition-colors duration-200 flex flex-col items-center gap-1"
          >
            <span className="text-lg">📘</span>
            <span className="text-xs font-medium">페이스북</span>
          </button>

          {/* 트위터 */}
          <button
            onClick={handleTwitterShare}
            className="bg-sky-100 hover:bg-sky-200 text-sm px-4 py-3 rounded-lg transition-colors duration-200 flex flex-col items-center gap-1"
          >
            <span className="text-lg">🐦</span>
            <span className="text-xs font-medium">트위터</span>
          </button>

          {/* 링크 복사 */}
          <button
            onClick={handleCopyLink}
            className={`text-sm px-4 py-3 rounded-lg transition-colors duration-200 flex flex-col items-center gap-1 ${
              copied 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <span className="text-lg">{copied ? '✅' : '📋'}</span>
            <span className="text-xs font-medium">
              {copied ? '복사됨!' : '링크복사'}
            </span>
          </button>
        </div>

        {/* 결과 미리보기 */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-500 mb-1">공유될 내용</div>
          <div className="text-sm text-gray-700 font-medium">
            {result.title || result.type || '나의 결과'}
          </div>
          <div className="text-xs text-gray-600 mt-1">
            {result.catchphrase || result.description || result.summary || '테스트 결과를 확인해보세요!'}
          </div>
        </div>
      </div>
    </div>
  );
} 