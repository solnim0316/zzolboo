import React, { useState, useRef } from 'react';
import { AutoImageGenerator } from '../../utils/autoImageGenerator.js';
import { foodTestResults } from '../../data/foodTestResults.js';

const AutoImageGeneratorComponent = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(null);
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [generator] = useState(() => new AutoImageGenerator());
  const [settings, setSettings] = useState({
    delay: 1000,
    maxRetries: 3,
    batchSize: 10
  });

  // 진행 상황 업데이트 핸들러
  const handleProgress = (progressData) => {
    setProgress(progressData);
  };

  // 완료 핸들러
  const handleComplete = (summary) => {
    setIsGenerating(false);
    setProgress(null);
    setResults(summary.results);
    setErrors(summary.errors);
    
    console.log('Image generation completed:', summary);
  };

  // 에러 핸들러
  const handleError = (error, food) => {
    console.error(`Error generating image for ${food.name}:`, error);
  };

  // 배치 이미지 생성 시작
  const startBatchGeneration = async () => {
    if (!selectedFoods.length) {
      alert('생성할 음식을 선택해주세요!');
      return;
    }

    setIsGenerating(true);
    setResults([]);
    setErrors([]);

    try {
      await generator.generateBatchImages(selectedFoods, {
        delay: settings.delay,
        maxRetries: settings.maxRetries,
        onProgress: handleProgress,
        onComplete: handleComplete,
        onError: handleError
      });
    } catch (error) {
      console.error('Batch generation failed:', error);
      setIsGenerating(false);
      setProgress(null);
    }
  };

  // 음식 선택 토글
  const toggleFoodSelection = (food) => {
    setSelectedFoods(prev => {
      const isSelected = prev.find(f => f.id === food.id);
      if (isSelected) {
        return prev.filter(f => f.id !== food.id);
      } else {
        return [...prev, food];
      }
    });
  };

  // 전체 선택/해제
  const toggleAllFoods = () => {
    if (selectedFoods.length === foodTestResults.length) {
      setSelectedFoods([]);
    } else {
      setSelectedFoods([...foodTestResults]);
    }
  };

  // 생성된 이미지 다운로드
  const downloadImage = async (imageUrl, fileName) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  // 결과를 JSON으로 내보내기
  const exportResults = () => {
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = window.URL.createObjectURL(dataBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-images.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          🎨 자동화된 이미지 생성 시스템
        </h2>
        <p className="text-gray-600 mb-6">
          수박 스테이크 스타일로 음식 이미지를 자동 생성합니다.
        </p>

        {/* 설정 패널 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold mb-3">⚙️ 생성 설정</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                API 호출 간격 (ms)
              </label>
              <input
                type="number"
                value={settings.delay}
                onChange={(e) => setSettings(prev => ({ ...prev, delay: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="500"
                max="5000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                최대 재시도 횟수
              </label>
              <input
                type="number"
                value={settings.maxRetries}
                onChange={(e) => setSettings(prev => ({ ...prev, maxRetries: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                max="5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                배치 크기
              </label>
              <input
                type="number"
                value={settings.batchSize}
                onChange={(e) => setSettings(prev => ({ ...prev, batchSize: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                max="50"
              />
            </div>
          </div>
        </div>

        {/* 음식 선택 */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              🍽️ 음식 선택 ({selectedFoods.length}/{foodTestResults.length})
            </h3>
            <button
              onClick={toggleAllFoods}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              {selectedFoods.length === foodTestResults.length ? '전체 해제' : '전체 선택'}
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-96 overflow-y-auto">
            {foodTestResults.map((food) => (
              <div
                key={food.id}
                onClick={() => toggleFoodSelection(food)}
                className={`p-3 border rounded-lg cursor-pointer transition-all ${
                  selectedFoods.find(f => f.id === food.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-1">{food.emoji}</div>
                <div className="text-sm font-medium text-gray-800 truncate">
                  {food.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 생성 버튼 */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={startBatchGeneration}
            disabled={isGenerating || selectedFoods.length === 0}
            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? '🔄 생성 중...' : '🚀 이미지 생성 시작'}
          </button>
          
          {results.length > 0 && (
            <button
              onClick={exportResults}
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              📥 결과 내보내기
            </button>
          )}
        </div>

        {/* 진행 상황 */}
        {progress && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-blue-800">
                진행 중: {progress.food}
              </span>
              <span className="text-blue-600">
                {progress.current}/{progress.total} ({progress.percentage}%)
              </span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress.percentage}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* 결과 표시 */}
        {results.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              ✅ 생성 완료 ({results.length}개)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {results.map((result) => (
                <div key={result.id} className="border rounded-lg p-3">
                  <img
                    src={result.imageUrl}
                    alt={result.name}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <div className="text-sm font-medium text-gray-800 mb-2">
                    {result.name}
                  </div>
                  <button
                    onClick={() => downloadImage(result.imageUrl, result.name)}
                    className="w-full px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 transition-colors"
                  >
                    다운로드
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 에러 표시 */}
        {errors.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-red-600 mb-3">
              ❌ 생성 실패 ({errors.length}개)
            </h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              {errors.map((error) => (
                <div key={error.id} className="text-sm text-red-700 mb-1">
                  {error.name}: {error.error}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoImageGeneratorComponent; 