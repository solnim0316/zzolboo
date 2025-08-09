import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import IsekaiCardGenerator from '../components/common/IsekaiCardGenerator';

const IsekaiCardDemo = () => {
  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen">
        <div className="container mx-auto py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#5D4037] mb-4">
              🌍 이세계 카드 생성 시스템
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Canvas API를 활용한 동적 이세계 카드 제작 데모
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                💡 시스템 특징
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
                <div>
                  <h3 className="font-medium mb-1">🎨 완전 커스터마이징</h3>
                  <p>Canvas API로 자유로운 디자인 구현</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">⚡ 실시간 생성</h3>
                  <p>브라우저에서 즉시 카드 생성</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">📱 반응형 레이아웃</h3>
                  <p>600x800px 최적화된 카드 크기</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">💾 PNG 다운로드</h3>
                  <p>고품질 이미지로 자동 저장</p>
                </div>
              </div>
            </div>
          </div>

          <IsekaiCardGenerator />

          <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              📋 사용 가이드
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  1. 캐릭터 타입 선택
                </h3>
                <p className="text-gray-600">
                  마왕, 힐러, 검사, 마법사, 상인, 농부 중에서 원하는 캐릭터 타입을 선택하세요.
                  각 타입마다 고유한 스토리와 설정이 적용됩니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  2. 사용자 이름 입력 (선택사항)
                </h3>
                <p className="text-gray-600">
                  개인화된 카드를 원한다면 이름을 입력하세요. 
                  입력하지 않아도 기본 카드가 생성됩니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  3. 카드 생성
                </h3>
                <p className="text-gray-600">
                  "카드 생성하기" 버튼을 클릭하면 Canvas API를 사용하여 
                  동적으로 카드가 생성됩니다. 생성 시간은 약 1-2초 소요됩니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  4. 카드 다운로드
                </h3>
                <p className="text-gray-600">
                  생성된 카드를 PNG 파일로 다운로드할 수 있습니다. 
                  고품질 이미지로 소셜 미디어 공유나 인쇄에 적합합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">
              ⚠️ 주의사항
            </h3>
            <ul className="list-disc list-inside text-yellow-700 space-y-1">
              <li>캐릭터 이미지는 현재 플레이스홀더로 설정되어 있습니다</li>
              <li>실제 사용 시 AI 생성 이미지나 일러스트로 교체 필요합니다</li>
              <li>브라우저 호환성: Chrome, Firefox, Safari, Edge 지원</li>
              <li>모바일에서도 정상 작동하지만 데스크톱에서 최적화되어 있습니다</li>
            </ul>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              🚀 향후 개선 계획
            </h3>
            <ul className="list-disc list-inside text-green-700 space-y-1">
              <li>AI 이미지 생성 연동 (DALL-E 3, Stable Diffusion)</li>
              <li>더 다양한 캐릭터 타입과 스토리 추가</li>
              <li>카드 템플릿 커스터마이징 기능</li>
              <li>배치 처리로 여러 카드 동시 생성</li>
              <li>소셜 미디어 공유 최적화</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default IsekaiCardDemo; 