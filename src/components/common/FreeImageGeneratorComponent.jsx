import React, { useState, useEffect } from 'react';
import { FreeImageGenerator, FreeImageGeneratorConfig } from '../../utils/freeImageGenerator';

const FreeImageGeneratorComponent = () => {
  const [generator, setGenerator] = useState(null);
  const [config, setConfig] = useState(FreeImageGeneratorConfig.getConfig());
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0, message: '' });
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [settings, setSettings] = useState({
    delay: 3000,
    maxRetries: 2,
    style: 'food'
  });

  // 설정 변경 핸들러
  const handleConfigChange = (section, key, value) => {
    setConfig(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  // 설정 적용
  const applyConfig = () => {
    const newGenerator = new FreeImageGenerator(config);
    setGenerator(newGenerator);
    alert('설정이 적용되었습니다!');
  };

  // 음식 선택 토글
  const toggleFoodSelection = (foodId) => {
    setSelectedFoods(prev => 
      prev.includes(foodId) 
        ? prev.filter(id => id !== foodId)
        : [...prev, foodId]
    );
  };

  // 전체 선택/해제
  const toggleAllFoods = () => {
    if (selectedFoods.length === foodTestResults.length) {
      setSelectedFoods([]);
    } else {
      setSelectedFoods(foodTestResults.map(food => food.id));
    }
  };

  // 배치 생성 시작
  const startBatchGeneration = async () => {
    if (!generator) {
      alert('먼저 설정을 적용해주세요!');
      return;
    }

    if (selectedFoods.length === 0) {
      alert('생성할 음식을 선택해주세요!');
      return;
    }

    setIsGenerating(true);
    setResults([]);
    setErrors([]);

    const selectedFoodList = foodTestResults.filter(food => 
      selectedFoods.includes(food.id)
    );

    try {
      const { results: generatedResults, errors: generationErrors } = 
        await generator.generateBatch(selectedFoodList, (current, total, message) => {
          setProgress({ current, total, message });
        });

      setResults(generatedResults);
      setErrors(generationErrors);
      
      alert(`생성 완료! 성공: ${generatedResults.length}개, 실패: ${generationErrors.length}개`);
    } catch (error) {
      console.error('배치 생성 실패:', error);
      alert('배치 생성 중 오류가 발생했습니다: ' + error.message);
    } finally {
      setIsGenerating(false);
      setProgress({ current: 0, total: 0, message: '' });
    }
  };

  // 이미지 다운로드
  const downloadImage = async (imageUrl, fileName) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('다운로드 실패:', error);
      alert('다운로드에 실패했습니다.');
    }
  };

  // 결과 내보내기
  const exportResults = () => {
    const exportData = {
      timestamp: new Date().toISOString(),
      results: results.map(r => ({
        id: r.id,
        name: r.name,
        imageUrl: r.imageUrl,
        prompt: r.prompt
      })),
      errors: errors.map(e => ({
        item: e.item,
        error: e.error
      }))
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json'
    });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `free-image-generation-results-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // 음식 테스트 데이터 (임시)
  const foodTestResults = [
    { id: 1, name: '수박스테이크', description: 'watermelon cut like steak, grill marks', emoji: '🍉' },
    { id: 2, name: '불고기', description: 'Korean BBQ style beef', emoji: '🥩' },
    { id: 3, name: '김치찌개', description: 'spicy Korean kimchi stew', emoji: '🍲' },
    { id: 4, name: '비빔밥', description: 'Korean mixed rice bowl', emoji: '🍚' },
    { id: 5, name: '떡볶이', description: 'spicy rice cake', emoji: '🍡' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">🆓 무료 이미지 생성기</h1>
        <p className="text-lg opacity-90">
          OpenAI API 비용 없이 이미지를 생성할 수 있는 다양한 대안들을 제공합니다.
        </p>
      </div>

      {/* 설정 패널 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">⚙️ 생성기 설정</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 로컬 Stable Diffusion */}
          <div className="space-y-3">
            <h3 className="font-medium">🖥️ 로컬 Stable Diffusion</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.localSD.enabled}
                onChange={(e) => handleConfigChange('localSD', 'enabled', e.target.checked)}
                className="mr-2"
              />
              활성화
            </label>
            <input
              type="text"
              placeholder="http://localhost:7860"
              value={config.localSD.baseUrl}
              onChange={(e) => handleConfigChange('localSD', 'baseUrl', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <p className="text-sm text-gray-600">
              Stable Diffusion WebUI가 로컬에서 실행 중이어야 합니다.
            </p>
          </div>

          {/* Hugging Face */}
          <div className="space-y-3">
            <h3 className="font-medium">🤗 Hugging Face</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.huggingFace.enabled}
                onChange={(e) => handleConfigChange('huggingFace', 'enabled', e.target.checked)}
                className="mr-2"
              />
              활성화
            </label>
            <input
              type="text"
              placeholder="API Key (선택사항)"
              value={config.huggingFace.apiKey || ''}
              onChange={(e) => handleConfigChange('huggingFace', 'apiKey', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <p className="text-sm text-gray-600">
              API Key 없이도 사용 가능 (rate limit 있음)
            </p>
          </div>

          {/* Replicate */}
          <div className="space-y-3">
            <h3 className="font-medium">🔄 Replicate</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.replicate.enabled}
                onChange={(e) => handleConfigChange('replicate', 'enabled', e.target.checked)}
                className="mr-2"
              />
              활성화
            </label>
            <input
              type="text"
              placeholder="API Key"
              value={config.replicate.apiKey || ''}
              onChange={(e) => handleConfigChange('replicate', 'apiKey', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <p className="text-sm text-gray-600">
              무료 티어 제공 (월 500회)
            </p>
          </div>
        </div>

        <button
          onClick={applyConfig}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          설정 적용
        </button>
      </div>

      {/* 배치 처리 설정 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">⚡ 배치 처리 설정</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">딜레이 (ms)</label>
            <input
              type="number"
              value={settings.delay}
              onChange={(e) => setSettings(prev => ({ ...prev, delay: parseInt(e.target.value) }))}
              className="w-full p-2 border rounded"
              min="1000"
              max="10000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">최대 재시도</label>
            <input
              type="number"
              value={settings.maxRetries}
              onChange={(e) => setSettings(prev => ({ ...prev, maxRetries: parseInt(e.target.value) }))}
              className="w-full p-2 border rounded"
              min="0"
              max="5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">스타일</label>
            <select
              value={settings.style}
              onChange={(e) => setSettings(prev => ({ ...prev, style: e.target.value }))}
              className="w-full p-2 border rounded"
            >
              <option value="food">음식</option>
              <option value="character">캐릭터</option>
            </select>
          </div>
        </div>
      </div>

      {/* 음식 선택 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">🍽️ 음식 선택</h2>
          <button
            onClick={toggleAllFoods}
            className="text-blue-500 hover:text-blue-700"
          >
            {selectedFoods.length === foodTestResults.length ? '전체 해제' : '전체 선택'}
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {foodTestResults.map(food => (
            <label key={food.id} className="flex items-center p-3 border rounded hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFoods.includes(food.id)}
                onChange={() => toggleFoodSelection(food.id)}
                className="mr-2"
              />
              <span className="text-2xl mr-2">{food.emoji}</span>
              <span className="text-sm">{food.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 생성 시작 버튼 */}
      <div className="text-center">
        <button
          onClick={startBatchGeneration}
          disabled={isGenerating || !generator}
          className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isGenerating ? '생성 중...' : '배치 생성 시작'}
        </button>
      </div>

      {/* 진행 상황 */}
      {isGenerating && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-3">📊 진행 상황</h3>
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{progress.current} / {progress.total}</span>
              <span>{Math.round((progress.current / progress.total) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(progress.current / progress.total) * 100}%` }}
              ></div>
            </div>
          </div>
          <p className="text-sm text-gray-600">{progress.message}</p>
        </div>
      )}

      {/* 결과 */}
      {results.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">✅ 생성된 이미지 ({results.length}개)</h3>
            <button
              onClick={exportResults}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              결과 내보내기
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map((result, index) => (
              <div key={index} className="border rounded-lg p-3">
                <img 
                  src={result.imageUrl} 
                  alt={result.name}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <p className="text-sm font-medium mb-1">{result.name}</p>
                <p className="text-xs text-gray-600 mb-2 truncate">{result.prompt}</p>
                <button
                  onClick={() => downloadImage(result.imageUrl, `${result.name}.png`)}
                  className="w-full bg-green-500 text-white text-xs py-1 rounded hover:bg-green-600 transition-colors"
                >
                  다운로드
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 오류 */}
      {errors.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-red-600">❌ 생성 실패 ({errors.length}개)</h3>
          <div className="space-y-2">
            {errors.map((error, index) => (
              <div key={index} className="p-3 bg-red-50 border border-red-200 rounded">
                <p className="font-medium text-red-800">{error.item.name}</p>
                <p className="text-sm text-red-600">{error.error}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 사용 가이드 */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">📖 사용 가이드</h3>
        <div className="space-y-2 text-sm">
          <p><strong>1. 로컬 Stable Diffusion:</strong> Stable Diffusion WebUI를 설치하고 실행한 후 활성화</p>
          <p><strong>2. Hugging Face:</strong> API Key 없이도 사용 가능 (시간당 제한 있음)</p>
          <p><strong>3. Replicate:</strong> 무료 계정 생성 후 API Key 발급 (월 500회 무료)</p>
          <p><strong>4. Rate Limit:</strong> 무료 서비스는 요청 제한이 있으므로 딜레이를 충분히 설정</p>
        </div>
      </div>
    </div>
  );
};

export default FreeImageGeneratorComponent; 