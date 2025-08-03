// 🌍 이세계 전이 테스트 결과 페이지
import { useParams, useNavigate } from 'react-router-dom';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from 'react';
import { isekaiTestData } from '@/data/isekaiTestData';

export default function IsekaiTestResult() {
  const { resultKey } = useParams();
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);

  const { results } = isekaiTestData;
  const result = results[resultKey] || results.magic_master;

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = result.shareText;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'kakao':
        if (window.Kakao) {
          window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title: '이세계로 전이했을 때 나는?',
              description: result.title,
              imageUrl: result.image,
              link: {
                mobileWebUrl: url,
                webUrl: url,
              },
            },
            buttons: [
              {
                title: '테스트 해보기',
                link: {
                  mobileWebUrl: url,
                  webUrl: url,
                },
              },
            ],
          });
        }
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(`${text}\n${url}`);
        alert('링크가 복사되었습니다!');
        break;
      default:
        break;
    }
    
    setShowShareModal(false);
  };

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-200">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🌍</div>
              <h1 className="text-3xl font-bold text-[#5D4037] mb-4">
                이세계 전이 완료! 당신의 운명은?
              </h1>
              <p className="text-lg text-gray-600">
                짜잔! 당신의 이세계 캐릭터 분석 결과가 나왔어요! ✨
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border border-purple-200">
              <h2 className="text-2xl font-bold text-center mb-4" style={{ color: result.color }}>
                {result.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {result.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#5D4037] mb-3">🎯 주요 특징</h3>
                  <ul className="space-y-2">
                    {result.characteristics.map((char, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-purple-500">•</span>
                        <span className="text-gray-700">{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#5D4037] mb-3">💡 이세계 생존 전략</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {result.strategy}
                  </p>
                </div>
              </div>
            </div>

            {/* 공유 버튼들 */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setShowShareModal(true)}
                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                📤 결과 공유하기
              </button>
              <button
                onClick={() => navigate('/isekai-test')}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                🔄 다시 테스트하기
              </button>
              <button
                onClick={() => navigate('/')}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                🏠 홈으로 돌아가기
              </button>
            </div>

            {/* 이세계 팁 */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-[#5D4037] mb-4 text-center">
                💡 이세계 생존 팁
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">🌍 기본 생존법</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 🗺️ 지도와 나침반은 필수!</li>
                    <li>• 💰 초기 자금 확보가 중요</li>
                    <li>• 🤝 현지인들과 친해지기</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">⚔️ 전투 팁</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 🛡️ 방어구는 꼭 착용하세요</li>
                    <li>• 🧪 포션은 항상 준비</li>
                    <li>• 🏃‍♂️ 도망칠 때는 망설이지 마세요</li>
                  </ul>
                </div>
              </div>

              {/* 광고 배치 가능한 공간 */}
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800 text-center">
                  ⚠️ <strong>주의!</strong> 이세계는 위험할 수 있습니다. 신중하게 행동하세요! 😅
                </p>
              </div>

              {/* 추가 광고 공간 */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  💡 더 자세한 이세계 정보가 필요하시다면 전문가와 상담해보세요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 공유 모달 */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold text-[#5D4037] mb-4 text-center">
              결과 공유하기
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleShare('kakao')}
                className="bg-yellow-400 text-white p-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                카카오톡
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="bg-blue-400 text-white p-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
              >
                트위터
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                페이스북
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="bg-gray-500 text-white p-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                링크 복사
              </button>
            </div>
            <button
              onClick={() => setShowShareModal(false)}
              className="w-full mt-4 bg-gray-200 text-gray-700 p-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
} 