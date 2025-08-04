// 🎨 나만의 fingerprincess(핑프)는? 테스트 결과 페이지
import { useParams, useNavigate } from 'react-router-dom';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from 'react';
import { fingerprincessTestData } from '@/data/fingerprincessTestData';
import UnifiedShareModal from '@/components/common/UnifiedShareModal';

export default function FingerprincessTestResult() {
  const { resultKey } = useParams();
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);

  const { results } = fingerprincessTestData;
  const result = results[resultKey] || results.pastel_dreamer;

  // 결과에 따른 이미지 선택 (1-375 사이의 랜덤 이미지, GIF였던 이미지들도 포함)
  const getRandomImage = () => {
    const imageNumber = Math.floor(Math.random() * 375) + 1;
    return `/images/fingerprincess/${imageNumber}.webp`;
  };

  const [fingerprincessImage] = useState(getRandomImage());

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-pink-200">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎨</div>
              <h1 className="text-3xl font-bold text-[#5D4037] mb-4">
                당신만의 fingerprincess(핑프)는?
              </h1>
              <p className="text-lg text-gray-600">
                boyboyboy(소년소년소년)의 픽셀아트로 완성된 당신만의 핑프 스타일!
              </p>
            </div>

            {/* boyboyboy 픽셀아트 이미지 */}
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
                <img 
                  src={fingerprincessImage} 
                  alt="Fingerprincess by boyboyboy" 
                  className="mx-auto max-w-full h-auto rounded-xl shadow-lg"
                  style={{ maxHeight: '400px' }}
                />
                <p className="text-sm text-gray-600 mt-4">
                  🎨 Art by boyboyboy(소년소년소년)
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8 border border-pink-200">
              <h2 className="text-2xl font-bold text-center mb-4 text-[#5D4037]">
                {result.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {result.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#5D4037] mb-3">🎨 핑프 특징</h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {result.characteristics}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#5D4037] mb-3">💡 핑프 라이프스타일</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {result.lifestyle}
                  </p>
                </div>
              </div>
            </div>

            {/* 공유 버튼들 */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setShowShareModal(true)}
                className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
              >
                📤 결과 공유하기
              </button>
              <button
                onClick={() => navigate('/fingerprincess')}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                🔄 다시 테스트하기
              </button>
              <button
                onClick={() => navigate('/')}
                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                🏠 홈으로 돌아가기
              </button>
            </div>

            {/* boyboyboy 소개 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-[#5D4037] mb-4 text-center">
                🎨 boyboyboy(소년소년소년) 소개
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">🎵 아티스트</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 픽셀아트 전문 아티스트</li>
                    <li>• 래퍼이자 음악 프로듀서</li>
                    <li>• 독특한 시각적 감각</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">🎨 작품 스타일</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 픽셀아트 기반 디지털 아트</li>
                    <li>• 독특한 색감과 구성</li>
                    <li>• 감성적이고 몽환적인 분위기</li>
                  </ul>
                </div>
              </div>

              {/* 콜라보 안내 */}
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800 text-center">
                  🎨 <strong>콜라보 컨텐츠!</strong> boyboyboy의 픽셀아트로 완성된 당신만의 핑프를 확인해보세요! ✨
                </p>
              </div>

              {/* 추가 정보 */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  💡 더 많은 boyboyboy의 작품을 보고 싶다면 SNS를 팔로우해보세요!
                </p>
                                 <div className="text-center mt-2">
                   <div className="inline-flex items-center gap-3">
                     {/* Instagram SVG */}
                     <a 
                       href="https://www.instagram.com/imboyboyboy/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center justify-center w-12 h-12 hover:scale-110 transition-all duration-200"
                       title="Instagram"
                     >
                       <img 
                         src="/SVG/instagram.svg" 
                         alt="Instagram" 
                         className="w-12 h-12"
                       />
                     </a>
                     
                     {/* BOYBOYBOY 텍스트 */}
                     <a 
                       href="https://www.instagram.com/imboyboyboy/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-lg font-bold text-gray-800 hover:text-pink-600 transition-colors cursor-pointer"
                     >
                       BOYBOYBOY
                     </a>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 통일된 공유 모달 */}
      <UnifiedShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        result={{
          title: result?.title || '나만의 핑프',
          catchphrase: result?.description || 'boyboyboy의 픽셀아트로 완성된 나만의 핑프를 확인해보세요!'
        }}
        testType="fingerprincess"
      />

      <Footer />
    </>
  );
} 