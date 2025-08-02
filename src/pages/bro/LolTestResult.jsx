import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { lolTestData } from '../../data/lolTestData';
import BroHeader from '../../components/layout/BroHeader';
import Footer from '../../components/layout/Footer';
import LolShareModal from '../../components/common/LolShareModal';

const LolTestResult = () => {
  const { resultKey } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 결과 데이터 로드
    const resultData = lolTestData.results[resultKey];
    if (resultData) {
      setResult(resultData);
    }
    setIsLoading(false);
  }, [resultKey]);

  const handleGoHome = () => {
    navigate('/bro');
  };

  const handleRetakeTest = () => {
    navigate('/bro/lol-test');
  };



  const getLineColor = (line) => {
    const colors = {
      top: 'from-red-500 to-red-600',
      jungle: 'from-green-500 to-green-600',
      mid: 'from-blue-500 to-blue-600',
      adc: 'from-yellow-500 to-yellow-600',
      support: 'from-purple-500 to-purple-600'
    };
    return colors[line] || 'from-gray-500 to-gray-600';
  };

  const getLineIcon = (line) => {
    const icons = {
      top: '🗡️',
      jungle: '🌲',
      mid: '🎪',
      adc: '🎯',
      support: '🛡️'
    };
    return icons[line] || '🎮';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <BroHeader />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>결과를 불러오는 중...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <BroHeader />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">결과를 찾을 수 없습니다</h2>
            <button 
              onClick={handleRetakeTest} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              테스트 다시하기
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <BroHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* 결과 헤더 */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className={`inline-block bg-gradient-to-r ${getLineColor(result.line)} text-white px-6 py-3 rounded-full text-lg font-bold mb-4`}>
              {getLineIcon(result.line)} {result.line} / {result.role}
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">{result.title}</h1>
            <p className="text-xl text-blue-200 mb-6">{result.catchphrase}</p>
          </div>

          {/* 결과 카드 */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            {/* 캐릭터 이미지 및 기본 정보 */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-8">
              <div className="flex-shrink-0">
                {result.image ? (
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={result.image} 
                      alt={`${result.line} ${result.role} 캐릭터`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // 이미지 로드 실패시 이모지로 대체
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-6xl" style={{display: 'none'}}>
                      {getLineIcon(result.line)}
                    </div>
                  </div>
                ) : (
                  <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-6xl">
                    {getLineIcon(result.line)}
                  </div>
                )}
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {result.characterName}
                </h2>
                <div className="space-y-4">
                  {result.description.map((desc, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* 추천 챔피언 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                🏆 추천 챔피언
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {result.champions.map((champion, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      {champion.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {champion.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 시너지 정보 */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* 좋은 시너지 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <span className="mr-2">✅</span>
                  좋은 시너지
                </h4>
                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-bold text-green-700 mb-2">
                    {result.goodSynergy.type}
                  </h5>
                  <p className="text-green-600 text-sm">
                    {result.goodSynergy.reason}
                  </p>
                </div>
              </div>

              {/* 나쁜 시너지 */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <span className="mr-2">❌</span>
                  주의할 시너지
                </h4>
                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-bold text-red-700 mb-2">
                    {result.badSynergy.type}
                  </h5>
                  <p className="text-red-600 text-sm">
                    {result.badSynergy.reason}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 액션 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleGoHome}
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
            >
              🏠 처음으로
            </button>
            <button
              onClick={handleRetakeTest}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
            >
              🎮 테스트 다시하기
            </button>
            <button
              onClick={() => setShowShareModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
            >
              📤 공유하기
            </button>
          </div>

          {/* 추가 정보 */}
          <div className="bg-black bg-opacity-20 rounded-xl p-6 text-center text-white">
            <h3 className="text-xl font-bold mb-4">💡 플레이 팁</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bold text-blue-200 mb-2">라인별 특징</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• {result.line} 라인은 {result.role} 플레이어에게 최적화</li>
                  <li>• 팀과의 협력이 승리의 핵심</li>
                  <li>• 꾸준한 연습으로 실력을 향상시켜보세요</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-200 mb-2">성장 방향</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 추천 챔피언부터 연습해보세요</li>
                  <li>• 시너지 좋은 라인과 함께 플레이</li>
                  <li>• 긍정적인 마인드로 게임을 즐기세요</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 공유 모달 */}
      <LolShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        result={{
          title: result.title,
          line: result.line,
          role: result.role,
          characterName: result.characterName,
          catchphrase: result.catchphrase
        }}
      />

      <Footer />
    </div>
  );
};

export default LolTestResult; 