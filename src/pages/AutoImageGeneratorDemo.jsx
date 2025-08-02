import React from 'react';
import AutoImageGeneratorComponent from '../components/common/AutoImageGeneratorComponent.jsx';

const AutoImageGeneratorDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎨 자동화된 이미지 생성 시스템
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            수박 스테이크 스타일로 100개+ 음식 이미지를 자동 생성
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">
              💡 시스템 특징
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
              <div>
                <h3 className="font-medium mb-1">🎯 스타일 일관성</h3>
                <p>수박 스테이크 이미지와 동일한 귀여운 일러스트 스타일</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">⚡ 배치 처리</h3>
                <p>100개+ 음식을 한 번에 선택하여 자동 생성</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">🔄 자동 재시도</h3>
                <p>실패한 요청에 대한 자동 재시도 및 에러 처리</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">📊 진행 상황 추적</h3>
                <p>실시간 진행 상황 및 성공/실패 통계</p>
              </div>
            </div>
          </div>
        </div>

        <AutoImageGeneratorComponent />

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📋 사용 가이드
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                1. API 키 설정
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  환경 변수 파일 (.env)에 OpenAI API 키를 설정하세요:
                </p>
                <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm">
                  VITE_OPENAI_API_KEY=your_openai_api_key_here
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                2. 음식 선택
              </h3>
              <p className="text-gray-600">
                생성하고 싶은 음식들을 선택하세요. 전체 선택 버튼으로 모든 음식을 한 번에 선택할 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                3. 설정 조정
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li><strong>API 호출 간격:</strong> OpenAI API 제한을 고려하여 1-5초 간격 설정</li>
                <li><strong>최대 재시도 횟수:</strong> 실패 시 재시도할 횟수 (1-5회)</li>
                <li><strong>배치 크기:</strong> 한 번에 처리할 음식 개수</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                4. 생성 시작
              </h3>
              <p className="text-gray-600">
                "이미지 생성 시작" 버튼을 클릭하면 선택된 음식들의 이미지가 순차적으로 생성됩니다.
                진행 상황을 실시간으로 확인할 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                5. 결과 관리
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>생성된 이미지는 개별 다운로드 가능</li>
                <li>결과를 JSON 파일로 내보내기 가능</li>
                <li>실패한 항목들은 별도로 표시되어 재시도 가능</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">
            ⚠️ 주의사항
          </h3>
          <ul className="list-disc list-inside text-yellow-700 space-y-1">
            <li>OpenAI API 사용량에 따라 비용이 발생할 수 있습니다</li>
            <li>API 호출 제한을 고려하여 적절한 간격을 설정하세요</li>
            <li>생성된 이미지는 OpenAI의 서버에 임시 저장되므로 즉시 다운로드하세요</li>
            <li>대량 생성 시 시간이 오래 걸릴 수 있으니 참고하세요</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AutoImageGeneratorDemo; 