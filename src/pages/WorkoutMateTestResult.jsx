// 💪 운동메이트 테스트 결과 페이지
import { useParams, useNavigate } from 'react-router-dom';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from 'react';
import { workoutMateTestData } from '@/data/workoutMateTestData';
import UnifiedShareModal from '@/components/common/UnifiedShareModal';

export default function WorkoutMateTestResult() {
  const { resultKey } = useParams();
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);

  const { results } = workoutMateTestData;
  const result = results[resultKey] || results.zen_master;

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-200">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">💪</div>
              <h1 className="text-3xl font-bold text-[#5D4037] mb-4">
                운동메이트 매칭 완료! 당신의 파트너는?
              </h1>
              <p className="text-lg text-gray-600">
                짜잔! 당신에게 가장 잘 맞는 운동메이트를 찾았어요! ✨
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8 border border-green-200">
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
                        <span className="text-green-500">•</span>
                        <span className="text-gray-700">{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#5D4037] mb-3">💡 운동 전략</h3>
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
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                📤 결과 공유하기
              </button>
              <button
                onClick={() => navigate('/workout-mate')}
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

            {/* 운동 팁 */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-[#5D4037] mb-4 text-center">
                💡 운동메이트와 함께하는 팁
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">🤝 파트너십</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 서로의 목표를 공유하세요</li>
                    <li>• 정기적인 운동 일정을 세우세요</li>
                    <li>• 서로를 응원하고 격려하세요</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">💪 동기부여</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 함께 성취감을 나누세요</li>
                    <li>• 새로운 운동에 도전해보세요</li>
                    <li>• 건강한 경쟁을 즐기세요</li>
                  </ul>
                </div>
              </div>

              {/* 광고 배치 가능한 공간 */}
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800 text-center">
                  💪 <strong>함께하면 더 강해집니다!</strong> 운동메이트와 함께 건강한 라이프스타일을 만들어보세요! 🏃‍♀️
                </p>
              </div>

              {/* 추가 광고 공간 */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  💡 더 자세한 운동 정보가 필요하시다면 전문 트레이너와 상담해보세요!
                </p>
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
          title: result?.title || '운동메이트',
          catchphrase: result?.description || '나의 운동메이트를 확인해보세요!'
        }}
        testType="workout-mate"
      />

      <Footer />
    </>
  );
} 