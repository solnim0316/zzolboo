// 🎨 이미지 큐레이션 데모 페이지
import React, { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ImageCuratorComponent from "@/components/common/ImageCuratorComponent";

export default function ImageCuratorDemo() {
  const [selectedTestType, setSelectedTestType] = useState('dinosaur');
  const [selectedMbtiType, setSelectedMbtiType] = useState('ENTJ');

  const testTypes = [
    { id: 'dinosaur', name: '공룡 테스트', emoji: '🦕' },
    { id: 'cat', name: '고양이 테스트', emoji: '🐱' },
    { id: 'food', name: '음식 테스트', emoji: '🍽️' }
  ];

  const mbtiTypes = [
    'ENTJ', 'ENFP', 'INFJ', 'ISTP', 'ENFJ', 'INFP', 'ESTJ', 'ISFP',
    'ESTP', 'ESFP', 'ENTP', 'ISFJ', 'ENFP', 'ISTJ', 'INTJ', 'INTP'
  ];

  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* 헤더 섹션 */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#5D4037] mb-4">
              🎨 이미지 큐레이션 시스템 데모
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              각 테스트 결과에 어울리는 이미지 레퍼런스를 자동으로 큐레이션해보세요
            </p>
            
            {/* 설정 패널 */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-[#5D4037] mb-4">
                ⚙️ 설정
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* 테스트 타입 선택 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    🧪 테스트 타입 선택
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {testTypes.map(testType => (
                      <button
                        key={testType.id}
                        onClick={() => setSelectedTestType(testType.id)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          selectedTestType === testType.id
                            ? 'border-[#5D4037] bg-[#5D4037] text-white'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="text-2xl mb-2">{testType.emoji}</div>
                        <div className="text-sm font-medium">{testType.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* MBTI 타입 선택 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    🧠 MBTI 타입 선택
                  </label>
                  <select
                    value={selectedMbtiType}
                    onChange={(e) => setSelectedMbtiType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4037] focus:border-transparent"
                  >
                    {mbtiTypes.map(mbtiType => (
                      <option key={mbtiType} value={mbtiType}>
                        {mbtiType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 현재 선택 표시 */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-center gap-4 text-blue-800">
                  <span className="text-lg">
                    {testTypes.find(t => t.id === selectedTestType)?.emoji}
                  </span>
                  <span className="font-semibold">
                    {testTypes.find(t => t.id === selectedTestType)?.name}
                  </span>
                  <span className="text-2xl">×</span>
                  <span className="font-semibold text-xl">{selectedMbtiType}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 이미지 큐레이션 컴포넌트 */}
          <ImageCuratorComponent
            testType={selectedTestType}
            mbtiType={selectedMbtiType}
            onPromptGenerated={(prompt) => {
              console.log('생성된 프롬프트:', prompt);
            }}
          />

          {/* 사용법 가이드 */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-[#5D4037] mb-4">
              📖 사용법 가이드
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">🎯 이미지 큐레이션</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>개요:</strong> 전체적인 이미지 가이드 요약</li>
                  <li>• <strong>영화:</strong> 관련 영화/애니메이션 장면 추천</li>
                  <li>• <strong>아트:</strong> 아트 스타일 및 색상 팔레트</li>
                  <li>• <strong>사진:</strong> 사진 촬영 기법 및 구도</li>
                  <li>• <strong>프롬프트:</strong> AI 이미지 생성용 프롬프트</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">💡 활용 팁</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 다양한 MBTI 타입으로 실험해보세요</li>
                  <li>• 생성된 프롬프트를 AI 이미지 생성기에 활용하세요</li>
                  <li>• 영화 장면을 참고하여 이미지 구도를 계획하세요</li>
                  <li>• 색상 팔레트를 활용하여 일관된 디자인을 만드세요</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 예시 결과 */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#5D4037] mb-4">
              🎨 예시 결과
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">🦕 공룡 테스트 - ENTJ</h3>
                <p className="text-sm text-gray-600 mb-3">
                  강력하고 전문적인 분위기의 미니멀리즘 스타일
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">리더십</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">전략</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">권위</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">🐱 고양이 테스트 - ENFP</h3>
                <p className="text-sm text-gray-600 mb-3">
                  활기차고 창의적인 분위기의 인상주의 스타일
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">창의성</span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">열정</span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">자유</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">🍽️ 음식 테스트 - INFJ</h3>
                <p className="text-sm text-gray-600 mb-3">
                  신비롭고 깊이 있는 분위기의 상징주의 스타일
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">지혜</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">직관</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">성찰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 