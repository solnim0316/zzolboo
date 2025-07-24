// 👩‍👧‍👦 우리 엄마 MBTI 테스트 결과 페이지
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { familyMbtiTestData } from '../data/familyMbtiTestData';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SocialShare from '../components/common/SocialShare';

export default function FamilyMbtiResult() {
  const { resultType } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // 결과 데이터 가져오기
  const result = familyMbtiTestData.results[resultType];
  
  if (!result) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
          <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-6xl mb-4">😅</div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              잘못된 결과 타입입니다
            </h2>
            <button 
              onClick={() => navigate('/family-mbti')}
              className="bg-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-600 transition-colors"
            >
              테스트 다시하기
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const shareData = {
    title: `우리 엄마 MBTI 테스트 결과: ${result.title}`,
    description: result.description[0],
    hashtags: ['MBTI', '가족테스트', '엄마MBTI', '성격테스트']
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-4">
        <div className="max-w-lg mx-auto px-2 flex flex-col gap-4">
          {/* MBTI 이미지 영역 */}
          <div className="flex flex-col items-center mb-2">
            {/* 이미지 파일 경로: public/images/dinosaur/{result.type}.png 등으로 교체 */}
            <div className="w-28 h-28 rounded-full bg-white shadow flex items-center justify-center overflow-hidden mb-2">
              <img
                src={`/images/dinosaur/${result.type}.png`}
                alt={`${result.type} 캐릭터`}
                className="w-full h-full object-contain"
                onError={e => { e.target.style.display='none'; }}
              />
            </div>
            <div className="text-2xl font-bold text-gray-700">{result.type}</div>
          </div>

          {/* 결과 카드 */}
          <div className="rounded-xl bg-pink-50 border border-pink-200 shadow-sm p-4 text-center">
            <div className="text-xl font-bold text-pink-600 mb-1">{result.title}</div>
            <div className="text-sm text-gray-600">{result.role}</div>
          </div>

          {/* 성격 요약 */}
          <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-4">
            <h3 className="text-base font-bold text-gray-800 mb-2 flex items-center">
              <span className="mr-2 text-lg">🎯</span> 이런 분이에요
            </h3>
            <ul className="space-y-2">
              {result.description.map((desc, idx) => (
                <li key={idx} className="bg-orange-50 border border-orange-100 rounded px-3 py-2 text-sm text-gray-700 flex items-center">
                  <span className="text-orange-400 font-bold mr-2">✓</span>{desc}
                </li>
              ))}
            </ul>
          </div>

          {/* 명언 */}
          <div className="rounded-xl bg-white border border-blue-100 shadow-sm p-4">
            <h3 className="text-base font-bold text-gray-800 mb-2 flex items-center">
              <span className="mr-2 text-lg">💬</span> 자주 하시는 말
            </h3>
            <ul className="space-y-2">
              {result.quotes.map((quote, idx) => (
                <li key={idx} className="bg-blue-50 border border-blue-100 rounded px-3 py-2 text-sm text-blue-700 italic">
                  "{quote}"
                </li>
              ))}
            </ul>
          </div>

          {/* 특별한 능력 */}
          <div className="rounded-xl bg-white border border-purple-100 shadow-sm p-4">
            <h3 className="text-base font-bold text-gray-800 mb-2 flex items-center">
              <span className="mr-2 text-lg">⚡</span> 특별한 능력
            </h3>
            <div className="bg-purple-50 border border-purple-100 rounded px-3 py-2 text-sm text-purple-700 text-center">
              {result.hiddenAbility}
            </div>
          </div>

          {/* 역할 */}
          <div className="rounded-xl bg-white border border-green-100 shadow-sm p-4">
            <h3 className="text-base font-bold text-gray-800 mb-2 flex items-center">
              <span className="mr-2 text-lg">🏠</span> 우리 집에서의 역할
            </h3>
            <div className="bg-green-50 border border-green-100 rounded px-3 py-2 text-sm text-green-700 text-center">
              {result.role}
            </div>
          </div>

          {/* 공유 섹션 */}
          {/* 공유 및 액션 버튼 섹션 */}
          <div className="rounded-xl bg-white border border-pink-100 shadow-sm p-4 mb-2 flex flex-col items-center">
            <h3 className="text-base font-bold text-gray-800 mb-2 flex items-center justify-center">
              <span className="mr-2 text-lg">📱</span> 공유하기
            </h3>
            <div className="bg-gray-50 border border-gray-200 rounded px-3 py-2 mb-4 text-sm text-gray-700 text-center w-full">
              "{result.shareText}"
            </div>
            <div className="flex gap-2 w-full justify-center">
              <SocialShare 
                testType="family-mbti" 
                result={result} 
                userName={null}
                buttonClassName="min-w-[110px] h-12 px-4 rounded-xl font-bold text-base shadow flex items-center justify-center transition-colors bg-green-500 hover:bg-green-600 text-white"
                iconClassName="mr-2 text-xl"
                textClassName="flex items-center justify-center w-full"
              />
              <button
                onClick={() => navigate('/family-mbti')}
                className="min-w-[110px] h-12 px-4 rounded-xl font-bold text-base shadow flex items-center justify-center transition-colors bg-pink-500 hover:bg-pink-600 text-white"
              >
                <span className="mr-2 text-xl">🔄</span>
                다시 테스트
              </button>
              <button
                onClick={() => navigate('/')}
                className="min-w-[110px] h-12 px-4 rounded-xl font-bold text-base shadow flex items-center justify-center transition-colors bg-blue-500 hover:bg-blue-600 text-white"
              >
                <span className="mr-2 text-xl">🏠</span>
                홈으로
              </button>
            </div>
          </div>

          {/* 추천 테스트 */}
          <div className="rounded-xl bg-yellow-50 border border-yellow-200 shadow-sm p-4 mb-2">
            <h3 className="text-base font-bold text-yellow-800 mb-2 flex items-center justify-center">
              <span className="mr-2 text-lg">💡</span> 이런 테스트도 있어요
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => navigate('/cat-test')}
                className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded hover:bg-yellow-300 text-sm font-medium"
              >
                🐾 고양이 MBTI
              </button>
              <button
                onClick={() => navigate('/dinosaur-test')}
                className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded hover:bg-yellow-300 text-sm font-medium"
              >
                🦕 공룡 MBTI
              </button>
              <button
                onClick={() => navigate('/food-test')}
                className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded hover:bg-yellow-300 text-sm font-medium"
              >
                🍽️ 오늘 뭐 먹지?
              </button>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
