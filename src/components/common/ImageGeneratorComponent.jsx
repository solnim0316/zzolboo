import React, { useState } from 'react';
import { generateResultImage, downloadImage, copyImageToClipboard } from '../../utils/imageGenerator';

const ImageGeneratorComponent = ({ 
  testType = 'default',
  result = 'MBTI',
  characterImage = '',
  userName = '사용자',
  description = '결과 설명',
  characterName = '캐릭터'
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleGenerateImage = async () => {
    setIsGenerating(true);
    try {
      const imageData = await generateResultImage({
        testType,
        result,
        characterImage,
        userName,
        description,
        characterName
      });
      setGeneratedImage(imageData);
      setShowPreview(true);
    } catch (error) {
      console.error('이미지 생성 실패:', error);
      alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const filename = `${userName}_${result}_result.png`;
      downloadImage(generatedImage, filename);
    }
  };

  const handleCopyToClipboard = async () => {
    if (generatedImage) {
      const success = await copyImageToClipboard(generatedImage);
      if (success) {
        alert('이미지가 클립보드에 복사되었습니다!');
      } else {
        alert('클립보드 복사에 실패했습니다.');
      }
    }
  };

  const handleShare = async () => {
    if (navigator.share && generatedImage) {
      try {
        const response = await fetch(generatedImage);
        const blob = await response.blob();
        const file = new File([blob], `${userName}_${result}_result.png`, { type: 'image/png' });
        
        await navigator.share({
          title: `${userName}님의 ${result} 결과`,
          text: `쫄부월드에서 ${testType} 테스트 결과를 확인해보세요!`,
          files: [file]
        });
      } catch (error) {
        console.error('공유 실패:', error);
        // 공유 실패시 다운로드로 대체
        handleDownload();
      }
    } else {
      // Web Share API 미지원시 다운로드
      handleDownload();
    }
  };

  return (
    <div className="image-generator">
      {/* 이미지 생성 버튼 */}
      <button
        onClick={handleGenerateImage}
        disabled={isGenerating}
        className={`
          w-full px-6 py-3 rounded-lg font-semibold text-white
          ${isGenerating 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
          }
          transition-colors duration-200
        `}
      >
        {isGenerating ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            이미지 생성 중...
          </span>
        ) : (
          '📷 결과 이미지 생성'
        )}
      </button>

      {/* 이미지 미리보기 모달 */}
      {showPreview && generatedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPreview(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 */}
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">생성된 이미지</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* 이미지 미리보기 */}
            <div className="p-4">
              <img 
                src={generatedImage} 
                alt="생성된 결과 이미지"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* 액션 버튼들 */}
            <div className="p-4 border-t space-y-2">
              <button
                onClick={handleDownload}
                className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                💾 다운로드
              </button>
              
              <button
                onClick={handleCopyToClipboard}
                className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                📋 클립보드에 복사
              </button>
              
              <button
                onClick={handleShare}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                📤 공유하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGeneratorComponent;
