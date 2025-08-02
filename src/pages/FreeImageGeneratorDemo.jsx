import React from 'react';
import FreeImageGeneratorComponent from '../components/common/FreeImageGeneratorComponent';

const FreeImageGeneratorDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🆓 무료 이미지 생성 시스템
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            OpenAI API 비용 없이 다양한 무료 대안들을 사용하여 이미지를 생성할 수 있습니다.
            로컬 Stable Diffusion, Hugging Face, Replicate 등 여러 옵션을 제공합니다.
          </p>
        </div>

        <FreeImageGeneratorComponent />

        {/* 상세 가이드 */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">📚 상세 설정 가이드</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 로컬 Stable Diffusion */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">🖥️ 로컬 Stable Diffusion</h3>
              <div className="space-y-3 text-sm">
                <p><strong>장점:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>완전 무료 (전기료 제외)</li>
                  <li>무제한 사용</li>
                  <li>커스텀 모델 사용 가능</li>
                  <li>개인정보 보호</li>
                </ul>
                <p><strong>설치 방법:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>GitHub에서 Stable Diffusion WebUI 다운로드</li>
                  <li>Python 환경 설정</li>
                  <li>모델 파일 다운로드</li>
                  <li>WebUI 실행 (python launch.py)</li>
                  <li>API 활성화 설정</li>
                </ol>
                <p><strong>시스템 요구사항:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>GPU: 4GB+ VRAM 권장</li>
                  <li>RAM: 8GB+</li>
                  <li>저장공간: 10GB+</li>
                </ul>
              </div>
            </div>

            {/* Hugging Face */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600">🤗 Hugging Face</h3>
              <div className="space-y-3 text-sm">
                <p><strong>장점:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>API Key 없이 사용 가능</li>
                  <li>설치 불필요</li>
                  <li>다양한 모델 선택</li>
                  <li>웹 인터페이스 제공</li>
                </ul>
                <p><strong>제한사항:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>시간당 요청 제한</li>
                  <li>대기 시간 있음</li>
                  <li>API Key 없으면 느림</li>
                </ul>
                <p><strong>사용 방법:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Hugging Face 계정 생성</li>
                  <li>API Key 발급 (선택사항)</li>
                  <li>원하는 모델 선택</li>
                  <li>API 호출</li>
                </ol>
              </div>
            </div>

            {/* Replicate */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-600">🔄 Replicate</h3>
              <div className="space-y-3 text-sm">
                <p><strong>장점:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>월 500회 무료</li>
                  <li>고품질 모델</li>
                  <li>안정적인 API</li>
                  <li>빠른 응답</li>
                </ul>
                <p><strong>제한사항:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>월 사용량 제한</li>
                  <li>API Key 필요</li>
                  <li>유료 서비스</li>
                </ul>
                <p><strong>가입 방법:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Replicate 웹사이트 방문</li>
                  <li>GitHub 계정으로 로그인</li>
                  <li>API Key 발급</li>
                  <li>무료 크레딧 확인</li>
                </ol>
              </div>
            </div>

            {/* 비용 비교 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-600">💰 비용 비교</h3>
              <div className="space-y-3 text-sm">
                <div className="border rounded-lg p-3">
                  <p className="font-semibold">🖥️ 로컬 Stable Diffusion</p>
                  <p className="text-green-600">비용: ₩0 (전기료 제외)</p>
                  <p className="text-gray-600">제한: 없음</p>
                </div>
                <div className="border rounded-lg p-3">
                  <p className="font-semibold">🤗 Hugging Face</p>
                  <p className="text-green-600">비용: ₩0</p>
                  <p className="text-gray-600">제한: 시간당 요청 수</p>
                </div>
                <div className="border rounded-lg p-3">
                  <p className="font-semibold">🔄 Replicate</p>
                  <p className="text-green-600">비용: ₩0 (월 500회)</p>
                  <p className="text-gray-600">제한: 월 사용량</p>
                </div>
                <div className="border rounded-lg p-3">
                  <p className="font-semibold">🤖 OpenAI DALL-E</p>
                  <p className="text-red-600">비용: $0.04/이미지</p>
                  <p className="text-gray-600">제한: 없음 (유료)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 팁과 주의사항 */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-yellow-800 mb-4">⚠️ 주의사항</h3>
          <div className="space-y-2 text-sm text-yellow-700">
            <p><strong>• Rate Limit:</strong> 무료 서비스는 요청 제한이 있으므로 적절한 딜레이를 설정하세요.</p>
            <p><strong>• 이미지 품질:</strong> 무료 서비스는 유료 서비스보다 품질이 낮을 수 있습니다.</p>
            <p><strong>• 안정성:</strong> 무료 서비스는 서버 상태에 따라 불안정할 수 있습니다.</p>
            <p><strong>• 저작권:</strong> 생성된 이미지의 상업적 사용 시 저작권을 확인하세요.</p>
            <p><strong>• 백업:</strong> 중요한 이미지는 반드시 다운로드하여 백업하세요.</p>
          </div>
        </div>

        {/* 대안 방법들 */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">💡 추가 무료 대안들</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold">🎨 Leonardo.ai</p>
              <p className="text-gray-600">무료 크레딧 제공, 고품질 이미지</p>
            </div>
            <div>
              <p className="font-semibold">🎭 Midjourney</p>
              <p className="text-gray-600">Discord 봇으로 무료 사용 가능</p>
            </div>
            <div>
              <p className="font-semibold">🌟 Canva AI</p>
              <p className="text-gray-600">Canva Pro 구독 시 무료</p>
            </div>
            <div>
              <p className="font-semibold">🎯 Bing Image Creator</p>
              <p className="text-gray-600">Microsoft 계정으로 무료 사용</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeImageGeneratorDemo; 