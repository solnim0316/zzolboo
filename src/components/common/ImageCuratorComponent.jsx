// 🎨 이미지 큐레이션 컴포넌트
import React, { useState } from 'react';
import { 
  curateImages, 
  generateImageGuide, 
  generateImagePrompt,
  getMovieSceneRecommendations,
  getArtStyleGuide,
  getPhotoStyleGuide
} from '../../utils/imageCurator';

const ImageCuratorComponent = ({ 
  testType = 'dinosaur',
  mbtiType = 'ENTJ',
  onPromptGenerated = null
}) => {
  const [curationResults, setCurationResults] = useState(null);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [customElements, setCustomElements] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  // 이미지 큐레이션 실행
  const handleCurateImages = () => {
    const results = curateImages(testType, mbtiType, {
      includeMovies: true,
      includeArt: true,
      includePhotos: true,
      maxResults: 10
    });
    setCurationResults(results);
  };

  // 이미지 가이드 생성
  const handleGenerateGuide = () => {
    const guide = generateImageGuide(testType, mbtiType);
    setCurationResults(guide);
  };

  // 이미지 프롬프트 생성
  const handleGeneratePrompt = () => {
    const prompt = generateImagePrompt(testType, mbtiType, {
      additionalElements: customElements
    });
    setGeneratedPrompt(prompt);
    
    if (onPromptGenerated) {
      onPromptGenerated(prompt);
    }
  };

  // 탭 렌더링
  const renderTab = () => {
    switch (selectedTab) {
      case 'overview':
        return <OverviewTab curationResults={curationResults} />;
      case 'movies':
        return <MoviesTab testType={testType} mbtiType={mbtiType} />;
      case 'art':
        return <ArtTab mbtiType={mbtiType} />;
      case 'photo':
        return <PhotoTab mbtiType={mbtiType} />;
      case 'prompt':
        return <PromptTab 
          testType={testType} 
          mbtiType={mbtiType} 
          customElements={customElements}
          setCustomElements={setCustomElements}
          generatedPrompt={generatedPrompt}
          onGenerate={handleGeneratePrompt}
        />;
      default:
        return <OverviewTab curationResults={curationResults} />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#5D4037] mb-2">
          🎨 이미지 큐레이션 시스템
        </h2>
        <p className="text-gray-600">
          {testType} 테스트의 {mbtiType} 결과에 어울리는 이미지 레퍼런스를 찾아보세요
        </p>
      </div>

      {/* 액션 버튼들 */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={handleCurateImages}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          🎯 이미지 큐레이션 시작
        </button>
        <button
          onClick={handleGenerateGuide}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          📋 상세 가이드 생성
        </button>
      </div>

      {/* 탭 네비게이션 */}
      <div className="flex flex-wrap gap-2 mb-6 border-b">
        {[
          { id: 'overview', label: '📊 개요', icon: '📊' },
          { id: 'movies', label: '🎬 영화', icon: '🎬' },
          { id: 'art', label: '🎨 아트', icon: '🎨' },
          { id: 'photo', label: '📸 사진', icon: '📸' },
          { id: 'prompt', label: '✨ 프롬프트', icon: '✨' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
              selectedTab === tab.id
                ? 'bg-[#5D4037] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 탭 콘텐츠 */}
      <div className="min-h-[400px]">
        {renderTab()}
      </div>
    </div>
  );
};

// 개요 탭
const OverviewTab = ({ curationResults }) => {
  if (!curationResults) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎨</div>
        <p className="text-gray-600">이미지 큐레이션을 시작해보세요!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">📋 요약</h3>
        <p className="text-blue-700">{curationResults.summary}</p>
      </div>

      {curationResults.quickTips && (
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">💡 빠른 팁</h3>
          <ul className="space-y-1 text-green-700">
            {curationResults.quickTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span>•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {curationResults.recommendations && (
        <div className="grid md:grid-cols-2 gap-4">
          {curationResults.recommendations.map((rec, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">{rec.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
              <div className="flex flex-wrap gap-1">
                {rec.keywords?.map((keyword, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 영화 탭
const MoviesTab = ({ testType, mbtiType }) => {
  const movieGuide = getMovieSceneRecommendations(testType, mbtiType);

  if (movieGuide.message) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎬</div>
        <p className="text-gray-600">{movieGuide.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 rounded-lg p-4">
        <h3 className="font-semibold text-purple-800 mb-2">🎬 주요 추천</h3>
        <p className="text-purple-700 mb-2">
          <strong>{movieGuide.primaryMovie}</strong> - {movieGuide.primaryScene}
        </p>
        <p className="text-sm text-purple-600">{movieGuide.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">🎭 영화 목록</h4>
          <ul className="space-y-1 text-sm">
            {movieGuide.allMovies.map((movie, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>🎬</span>
                <span>{movie}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">🎪 장면 목록</h4>
          <ul className="space-y-1 text-sm">
            {movieGuide.allScenes.map((scene, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>🎪</span>
                <span>{scene}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">🔑 키워드</h4>
        <div className="flex flex-wrap gap-2">
          {movieGuide.keywords.map((keyword, index) => (
            <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// 아트 탭
const ArtTab = ({ mbtiType }) => {
  const artGuide = getArtStyleGuide(mbtiType);

  if (artGuide.message) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎨</div>
        <p className="text-gray-600">{artGuide.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-pink-50 rounded-lg p-4">
        <h3 className="font-semibold text-pink-800 mb-2">🎨 아트 스타일 가이드</h3>
        <p className="text-pink-700">{artGuide.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">🎭 추천 스타일</h4>
          <ul className="space-y-1 text-sm">
            {artGuide.recommendedStyles.map((style, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>🎨</span>
                <span>{style}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">🎨 색상 팔레트</h4>
          <div className="flex flex-wrap gap-2">
            {artGuide.colorPalette.map((color, index) => (
              <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">
                {color}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">📐 구도</h4>
          <p className="text-sm">{artGuide.composition}</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">💡 색상 가이드</h4>
        <p className="text-blue-700">{artGuide.colorGuide}</p>
      </div>
    </div>
  );
};

// 사진 탭
const PhotoTab = ({ mbtiType }) => {
  const photoGuide = getPhotoStyleGuide(mbtiType);

  if (photoGuide.message) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📸</div>
        <p className="text-gray-600">{photoGuide.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-green-50 rounded-lg p-4">
        <h3 className="font-semibold text-green-800 mb-2">📸 사진 스타일 가이드</h3>
        <p className="text-green-700">{photoGuide.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">📐 추천 앵글</h4>
          <ul className="space-y-1 text-sm">
            {photoGuide.recommendedAngles.map((angle, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>📐</span>
                <span>{angle}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">💡 조명 스타일</h4>
          <ul className="space-y-1 text-sm">
            {photoGuide.lightingStyle.map((lighting, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>💡</span>
                <span>{lighting}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">📐 구도 스타일</h4>
          <ul className="space-y-1 text-sm">
            {photoGuide.compositionStyle.map((composition, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>📐</span>
                <span>{composition}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">🔧 기술적 팁</h4>
        <ul className="space-y-1 text-sm text-yellow-700">
          {photoGuide.technicalTips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <span>•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// 프롬프트 탭
const PromptTab = ({ testType, mbtiType, customElements, setCustomElements, generatedPrompt, onGenerate }) => {
  return (
    <div className="space-y-6">
      <div className="bg-purple-50 rounded-lg p-4">
        <h3 className="font-semibold text-purple-800 mb-2">✨ AI 이미지 생성 프롬프트</h3>
        <p className="text-purple-700">
          {testType} 테스트의 {mbtiType} 결과에 어울리는 이미지 생성을 위한 프롬프트를 생성합니다.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            추가 요소 (선택사항)
          </label>
          <textarea
            value={customElements}
            onChange={(e) => setCustomElements(e.target.value)}
            placeholder="예: 특별한 배경, 추가 캐릭터, 특정 분위기 등"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4037] focus:border-transparent"
            rows="3"
          />
        </div>

        <button
          onClick={onGenerate}
          className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
        >
          ✨ 프롬프트 생성
        </button>
      </div>

      {generatedPrompt && (
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">🎨 생성된 프롬프트</h4>
            <div className="bg-white p-3 rounded border">
              <p className="text-sm font-mono">{generatedPrompt.fullPrompt}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">🎨 스타일 가이드</h4>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• 스타일: {generatedPrompt.styleGuide.recommendedStyles[0]}</li>
                <li>• 색상: {generatedPrompt.colorPalette.join(', ')}</li>
                <li>• 구도: {generatedPrompt.composition}</li>
                <li>• 분위기: {generatedPrompt.mood}</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">🔑 키워드</h4>
              <div className="flex flex-wrap gap-2">
                {generatedPrompt.keywords.map((keyword, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCuratorComponent; 