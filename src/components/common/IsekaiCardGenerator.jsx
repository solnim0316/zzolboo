import React, { useState } from 'react';
import { generateIsekaiCard, createIsekaiCardData, getAvailableCharacterTypes, getCharacterTypeInfo } from '../../utils/isekaiCardGenerator';
import { saveHuggingFaceAPIKey, checkAPIKey, getAvailableModels } from '../../utils/huggingFaceImageGenerator';

const IsekaiCardGenerator = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('magic_master');
  const [userName, setUserName] = useState('');
  const [generatedCard, setGeneratedCard] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [cardData, setCardData] = useState(null);
  const [useAIImage, setUseAIImage] = useState(true); // 🔧 AI 이미지 생성 기본 활성화!
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!checkAPIKey());
  const [selectedModel, setSelectedModel] = useState('animeStyle');
  const [allCards, setAllCards] = useState([]);
  const [isGeneratingAll, setIsGeneratingAll] = useState(false);
  const [generationProgress, setGenerationProgress] = useState({ current: 0, total: 0 });

  // 기존 이세계 테스트의 모든 캐릭터 타입 가져오기
  const characterTypes = getAvailableCharacterTypes();
  const availableModels = getAvailableModels();

  // 카드 데이터 미리보기
  const previewCardData = () => {
    const data = createIsekaiCardData(selectedCharacter, userName);
    setCardData(data);
  };

  // API 키 저장
  const handleSaveAPIKey = () => {
    if (apiKey.trim()) {
      console.log('💾 API 키 저장 중...');
      saveHuggingFaceAPIKey(apiKey.trim());
      setShowApiKeyInput(false);
      setApiKey('');
      console.log('✅ API 키 저장 완료!');
      
      // 저장된 API 키 확인
      const savedKey = localStorage.getItem('huggingface_api_key');
      console.log('🔍 저장된 API 키 확인:', savedKey ? '있음' : '없음');
    }
  };

  // 카드 생성
  const handleGenerateCard = async () => {
    setIsGenerating(true);
    try {
      const cardImage = await generateIsekaiCard(selectedCharacter, userName, useAIImage);
      setGeneratedCard(cardImage);
      previewCardData();
    } catch (error) {
      console.error('카드 생성 실패:', error);
      alert(`카드 생성에 실패했습니다: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // 모든 캐릭터 카드 생성
  const handleGenerateAllCards = async () => {
    console.log('🚀 모든 캐릭터 카드 생성 시작!');
    console.log('🔧 설정 상태:', { useAIImage, apiKey: apiKey ? '있음' : '없음' });
    console.log('🎯 버튼 클릭 이벤트 실행됨!');
    
    setIsGeneratingAll(true);
    setAllCards([]);
    setGenerationProgress({ current: 0, total: characterTypes.length });

    const generatedCards = [];

    for (let i = 0; i < characterTypes.length; i++) {
      const characterType = characterTypes[i];
      setGenerationProgress({ current: i + 1, total: characterTypes.length });

      try {
        console.log(`🎨 ${i + 1}/${characterTypes.length} - ${characterType} 생성 중...`);
        console.log(`🤖 AI 이미지 사용 여부: ${useAIImage}`);
        
        const cardImage = await generateIsekaiCard(characterType, userName, useAIImage);
        
        const characterInfo = getCharacterTypeInfo(characterType);
        generatedCards.push({
          characterType,
          characterInfo,
          image: cardImage,
          fileName: characterInfo ? 
            `isekai-card-${characterInfo.title.replace(/[^a-zA-Z0-9가-힣]/g, '')}.png` :
            `isekai-card-${characterType}.png`
        });

        // 진행상황 업데이트
        setAllCards([...generatedCards]);
        
        // AI 이미지 사용 시 약간의 딜레이
        if (useAIImage) {
          console.log('⏳ AI 이미지 생성 후 대기 중...');
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      } catch (error) {
        console.error(`${characterType} 카드 생성 실패:`, error);
        // 실패한 카드도 기록
        const characterInfo = getCharacterTypeInfo(characterType);
        generatedCards.push({
          characterType,
          characterInfo,
          error: error.message,
          fileName: characterInfo ? 
            `isekai-card-${characterInfo.title.replace(/[^a-zA-Z0-9가-힣]/g, '')}.png` :
            `isekai-card-${characterType}.png`
        });
      }
    }

    setAllCards(generatedCards);
    setIsGeneratingAll(false);
    setGenerationProgress({ current: 0, total: 0 });
    
    console.log('✅ 모든 캐릭터 카드 생성 완료!');
  };

  // 개별 카드 다운로드
  const downloadCard = () => {
    if (!generatedCard) return;
    
    const characterInfo = getCharacterTypeInfo(selectedCharacter);
    const fileName = characterInfo ? 
      `isekai-card-${characterInfo.title.replace(/[^a-zA-Z0-9가-힣]/g, '')}.png` :
      `isekai-card-${selectedCharacter}.png`;
    
    const link = document.createElement('a');
    link.download = fileName;
    link.href = generatedCard;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 특정 카드 다운로드
  const downloadSpecificCard = (card) => {
    if (card.error) {
      alert(`이 카드는 생성에 실패했습니다: ${card.error}`);
      return;
    }

    const link = document.createElement('a');
    link.download = card.fileName;
    link.href = card.image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 모든 카드 ZIP 다운로드 (개별 다운로드로 대체)
  const downloadAllCards = () => {
    allCards.forEach((card, index) => {
      if (!card.error) {
        setTimeout(() => {
          downloadSpecificCard(card);
        }, index * 100);
      }
    });
  };

  // 캐릭터 타입별 그룹화
  const groupedCharacters = characterTypes.reduce((groups, type) => {
    const info = getCharacterTypeInfo(type);
    if (!info) return groups;
    
    const world = info.world;
    if (!groups[world]) {
      groups[world] = [];
    }
    groups[world].push({ type, info });
    return groups;
  }, {});

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          🌍 이세계 카드 생성기
        </h2>
        <p className="text-gray-600 mb-6">
          기존 이세계 테스트의 15가지 캐릭터로 카드 제작 + 🤖 Hugging Face 고품질 이미지
        </p>

        {/* Hugging Face API 키 설정 */}
        {showApiKeyInput && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">
              🔑 Hugging Face API 키 설정
            </h3>
            <p className="text-yellow-700 mb-3">
              무료 고품질 이미지 생성을 위해 Hugging Face API 키가 필요합니다.
              <br />
              <a 
                href="https://huggingface.co/settings/tokens" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                🔗 https://huggingface.co/settings/tokens 에서 발급받기
              </a>
            </p>
            <div className="flex gap-2">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSaveAPIKey}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                저장
              </button>
            </div>
          </div>
        )}

        {/* 설정 패널 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold mb-3">⚙️ 카드 설정</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                캐릭터 타입
              </label>
              <select
                value={selectedCharacter}
                onChange={(e) => setSelectedCharacter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.entries(groupedCharacters).map(([world, characters]) => (
                  <optgroup key={world} label={`🌍 ${world}`}>
                    {characters.map(({ type, info }) => (
                      <option key={type} value={type}>
                        {info.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                사용자 이름 (선택사항)
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="이름을 입력하세요"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* AI 이미지 생성 옵션 */}
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-blue-800">
                🤖 AI 이미지 생성 (Hugging Face)
              </h4>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="useAIImage"
                  checked={useAIImage}
                  onChange={(e) => setUseAIImage(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="useAIImage" className="text-sm text-blue-700">
                  고품질 AI 이미지 사용
                </label>
              </div>
            </div>
            
            {useAIImage && !checkAPIKey() && (
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md mb-3">
                <p className="text-sm text-yellow-800">
                  ⚠️ <strong>API 키가 필요합니다!</strong> AI 이미지 생성을 위해 Hugging Face API 키를 입력해주세요.
                </p>
              </div>
            )}
            
            {useAIImage && checkAPIKey() && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-blue-700 mb-1">
                    AI 모델 선택
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-2 py-1 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    {availableModels.map(model => (
                      <option key={model.key} value={model.key}>
                        {model.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-xs text-blue-600">
                  <p>✅ API 키 확인됨</p>
                  <p>🎨 AI가 캐릭터를 직접 그려줍니다!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 생성 버튼들 */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <button
            onClick={handleGenerateCard}
            disabled={isGenerating || isGeneratingAll}
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? '🔄 생성 중...' : '🎨 단일 카드 생성'}
          </button>
          
                     <button
             onClick={(e) => {
               console.log('🎯 버튼 클릭됨!');
               e.preventDefault();
               handleGenerateAllCards();
             }}
             disabled={isGenerating || isGeneratingAll}
             className="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
           >
             {isGeneratingAll ? `🔄 전체 생성 중... (${generationProgress.current}/${generationProgress.total})` : '🚀 15개 캐릭터 모두 생성'}
           </button>
          
          {generatedCard && (
            <button
              onClick={downloadCard}
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              📥 단일 카드 다운로드
            </button>
          )}

          {allCards.length > 0 && (
            <button
              onClick={downloadAllCards}
              className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              📦 모든 카드 다운로드
            </button>
          )}
        </div>

        {/* 전체 생성 진행상황 */}
        {isGeneratingAll && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">
              🚀 전체 캐릭터 카드 생성 중...
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div 
                className="bg-purple-600 h-4 rounded-full transition-all duration-300"
                style={{ width: `${(generationProgress.current / generationProgress.total) * 100}%` }}
              ></div>
            </div>
            <p className="text-purple-700 text-sm">
              {generationProgress.current} / {generationProgress.total} 완료 
              ({Math.round((generationProgress.current / generationProgress.total) * 100)}%)
            </p>
          </div>
        )}

        {/* 생성된 모든 카드 표시 */}
        {allCards.length > 0 && (
          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-semibold">
              🎨 생성된 모든 캐릭터 카드 ({allCards.length}/15)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allCards.map((card, index) => (
                <div key={card.characterType} className="bg-white border rounded-lg p-4 shadow-sm">
                  <div className="text-center mb-3">
                    <h4 className="font-medium text-gray-800 mb-1">
                      {card.characterInfo?.title || card.characterType}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {card.characterInfo?.character_name}
                    </p>
                  </div>
                  
                  {card.error ? (
                    <div className="text-center py-8">
                      <div className="text-red-500 text-4xl mb-2">❌</div>
                      <p className="text-red-600 text-sm">생성 실패</p>
                      <p className="text-red-500 text-xs mt-1">{card.error}</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <img
                        src={card.image}
                        alt={card.characterInfo?.title}
                        className="w-full h-auto border rounded"
                      />
                      <button
                        onClick={() => downloadSpecificCard(card)}
                        className="w-full px-3 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
                      >
                        📥 다운로드
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 카드 데이터 미리보기 */}
        {cardData && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              📋 카드 데이터 미리보기
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-blue-700 mb-2">헤더</h4>
                <p className="text-blue-600">{cardData.header.title}</p>
                <p className="text-blue-600">{cardData.header.subtitle}</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">캐릭터</h4>
                <p className="text-blue-600">{cardData.character.title}</p>
                <p className="text-blue-600">캐릭터명: {cardData.character.character_name}</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">태그라인</h4>
                <p className="text-blue-600">{cardData.tagline}</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">스토리</h4>
                <p className="text-blue-600 text-xs">{cardData.story}</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">설정</h4>
                <p className="text-blue-600">{cardData.details.setting}</p>
                <p className="text-blue-600">{cardData.details.routine}</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">세계관</h4>
                <p className="text-blue-600">{cardData.footer.world}</p>
                <p className="text-blue-600">{cardData.footer.keywords.join(' • ')}</p>
              </div>
            </div>
          </div>
        )}

        {/* 생성된 카드 표시 */}
        {generatedCard && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              🎨 생성된 카드
            </h3>
            <div className="flex justify-center">
              <img
                src={generatedCard}
                alt="이세계 카드"
                className="max-w-full h-auto border rounded-lg shadow-lg"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>
        )}

        {/* 캐릭터 목록 */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            🎭 사용 가능한 캐릭터 목록 (15개)
          </h3>
          <div className="space-y-4">
            {Object.entries(groupedCharacters).map(([world, characters]) => (
              <div key={world} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 mb-2">🌍 {world}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {characters.map(({ type, info }) => (
                    <div 
                      key={type} 
                      className={`p-2 rounded text-sm cursor-pointer transition-colors ${
                        selectedCharacter === type 
                          ? 'bg-blue-100 text-blue-800 border border-blue-300' 
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedCharacter(type)}
                    >
                      <div className="font-medium">{info.title}</div>
                      <div className="text-xs text-gray-500">{info.character_name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI 모델 정보 */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-4">
            🤖 사용 가능한 AI 모델
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {availableModels.map(model => (
              <div key={model.key} className="bg-white p-3 rounded border">
                <h4 className="font-medium text-green-700 mb-1">{model.name}</h4>
                <p className="text-green-600 text-xs">{model.url}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 카드 레이아웃 설명 */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            📐 카드 레이아웃 구조
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">섹션별 구성</h4>
              <ul className="space-y-2 text-gray-600">
                <li><strong>상단 (10%)</strong>: 🌍 타이틀 헤더</li>
                <li><strong>메인 캐릭터 (35%)</strong>: 🎨 캐릭터 이미지 + 결과 제목</li>
                <li><strong>태그라인 (8%)</strong>: ✨ 캐릭터 대사/태그라인</li>
                <li><strong>스토리 (25%)</strong>: 📘 '당신의 이야기' 요약 박스</li>
                <li><strong>상세 정보 (12%)</strong>: 📖 '설정', 🧘‍♀️ '일상 루틴'</li>
                <li><strong>하단 (10%)</strong>: 🌍 '당신의 세계관' + 키워드</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">기술적 특징</h4>
              <ul className="space-y-2 text-gray-600">
                <li>✅ <strong>기존 테스트 데이터 활용</strong>: 15가지 캐릭터 지원</li>
                <li>✅ <strong>Hugging Face AI</strong>: 무료 고품질 이미지 생성</li>
                <li>✅ <strong>Canvas API</strong>: 동적 이미지 생성</li>
                <li>✅ <strong>반응형 레이아웃</strong>: 600x800px 최적화</li>
                <li>✅ <strong>그라디언트 배경</strong>: 시각적 매력</li>
                <li>✅ <strong>PNG 다운로드</strong>: 고품질 출력</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsekaiCardGenerator; 