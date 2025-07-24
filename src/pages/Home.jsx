// 🏠 홈 페이지 컴포넌트 - 쫄부월드
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/HeroBanner";
import ThemedTestList from "@/components/ThemedTestList";
import GeneralTestList from "@/components/GeneralTestList";
import SecretWorldBanner from "@/components/SecretWorldBanner";
import { useState } from "react";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState('all');

  // 📊 테스트 데이터 (태그 추가)
  const themedTests = [
    {
      id: "cat-mbti",
      title: "고양이 MBTI 테스트",
      world: "고양이",
      emoji: "🐾",
      theme: "고양이",
      thumbnail: "/images/tests/cat-mbti/ENFJ.png",
      isFeatured: true,
      isThemed: true,
      description: "쫄과 부가 안내하는 고양이 왕국! 너는 어떤 성격의 고양이일까?",
      tags: ["MBTI", "성격", "동물", "재미"]
    },
    {
      id: "dinosaur-mbti",
      title: "성격유형별 공룡 테스트",
      world: "공룡시대",
      emoji: "🦕",
      theme: "쥬라기",
      thumbnail: "/images/tests/dinosaur/ENTJ.png",
      isFeatured: false,
      isThemed: true,
      description: "만약 내가 공룡시대에 태어났다면? 나는 어떤 공룡이였을까?",
      tags: ["MBTI", "성격", "역사", "모험"]
    },
    {
      id: "dream-cafe",
      title: "꿈속 카페 테스트",
      world: "꿈속 카페",
      emoji: "☕",
      theme: "따뜻한 브라운",
      thumbnail: "/images/worlds/dream-cafe.png",
      isFeatured: false,
      isThemed: true,
      description: "쫄과 부가 운영하는 꿈속 카페에서 당신의 취향을 알아보세요",
      tags: ["취향", "일상", "힐링", "재미"]
    },
    {
      id: "magic-forest",
      title: "마법의 숲 테스트",
      world: "마법의 숲",
      emoji: "🌳",
      theme: "신비로운 초록",
      thumbnail: "/images/worlds/magic-forest.png",
      isFeatured: false,
      isThemed: true,
      description: "쫄과 부와 함께 마법의 숲을 탐험하며 진정한 자아를 발견해보세요",
      tags: ["자아", "탐험", "판타지", "성장"]
    },
    {
      id: "family-mbti",
      title: "우리 엄마 MBTI 테스트",
      world: "우리집",
      emoji: "👩‍👧‍👦",
      theme: "따뜻한 가족",
      thumbnail: "/images/tests/family-mbti.png",
      isFeatured: false,
      isThemed: true,
      description: "내가 생각하는 우리 엄마는 어떤 성격일까? 16가지 엄마 유형 중 찾아보세요!",
      tags: ["MBTI", "성격", "재미"]
    }
  ];

  const casualTests = [
    {
      id: "food-test",
      title: "오늘 뭐 먹지? 테스트",
      thumbnail: "/images/tests/food-test.png",
      isThemed: false,
      description: "120가지 음식 중 오늘의 메뉴를 추천받아보세요!",
      tags: ["음식", "일상", "추천", "재미"]
    },
    {
      id: "fashion-test",
      title: "오늘 뭐 입지? 테스트",
      thumbnail: "/images/tests/fashion-test.png",
      isThemed: false,
      description: "지금 기분에 딱 맞는 패션 스타일을 찾아보세요!",
      tags: ["패션", "스타일", "일상", "추천"]
    },
    {
      id: "movie-test",
      title: "넷플릭스로 뭐 볼까?",
      thumbnail: "/images/tests/movie-test.png",
      isThemed: false,
      description: "512개 실제 작품 중에서 지금 기분에 맞는 컨텐츠를 추천받아보세요!",
      tags: ["영화", "엔터테인먼트", "추천", "재미"]
    },
    {
      id: "color-test",
      title: "오늘 기분 색깔 테스트",
      thumbnail: "/images/tests/color-test.png",
      isThemed: false,
      description: "지금 내 마음을 색깔로 표현하면 어떨까요?",
      tags: ["감정", "색깔", "심리", "자아"]
    },
    {
      id: "color-psychology",
      title: "색깔 심리 테스트",
      thumbnail: "/images/tests/color-psychology.png",
      isThemed: false,
      description: "좋아하는 색깔로 알아보는 심리 상태",
      tags: ["심리", "색깔", "성격", "분석"]
    }
  ];

  // 🏷️ 태그 카테고리 정의
  const tagCategories = [
    { id: 'all', name: '전체', icon: '🌟' },
    { id: 'MBTI', name: 'MBTI', icon: '🧠' },
    { id: '성격', name: '성격분석', icon: '🔍' },
    { id: '일상', name: '일상재미', icon: '😊' },
    { id: '추천', name: '맞춤 추천', icon: '💡' },
    { id: '재미', name: '재미요소', icon: '🎉' },
    { id: '심리', name: '심리테스트', icon: '💭' }
  ];

  // 모든 테스트 합치기
  const allTests = [...themedTests, ...casualTests];

  // 태그별 필터링
  const filteredTests = selectedTag === 'all' 
    ? allTests 
    : allTests.filter(test => test.tags && test.tags.includes(selectedTag));

  // 필터링된 테스트를 테마형과 일반형으로 분리
  const filteredThemedTests = filteredTests.filter(test => test.isThemed);
  const filteredCasualTests = filteredTests.filter(test => !test.isThemed);

  // 🌟 Featured 테스트 찾기
  const featuredTest = themedTests.find(test => test.isFeatured);
  
  return (
    <>
      {/* 🎯 상단 헤더 */}
      <Header />
      
      {/* 📱 메인 콘텐츠 */}
      <main className="bg-background text-text min-h-screen px-4 pt-0 pb-6 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* 🌟 Hero 배너 - 오늘의 추천 */}
          <HeroBanner featuredTest={featuredTest} />
          
          {/* �️ 태그 네비게이션 섹션 */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#5D4037]">
                🏷️ 테스트 카테고리별 탐색
              </h2>
              <p className="text-gray-600">
                원하는 스타일의 테스트를 쉽게 찾아보세요!
              </p>
            </div>
            
            {/* 태그 필터 버튼들 */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {tagCategories.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(tag.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedTag === tag.id
                      ? 'bg-[#5D4037] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  <span>{tag.icon}</span>
                  <span>{tag.name}</span>
                </button>
              ))}
            </div>
            
            {/* 필터링 결과 표시 */}
            {selectedTag !== 'all' && (
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                  <span className="text-sm">
                    '{tagCategories.find(t => t.id === selectedTag)?.name}' 태그로 필터링 중
                  </span>
                  <button 
                    onClick={() => setSelectedTag('all')}
                    className="text-blue-500 hover:text-blue-700 text-sm underline"
                  >
                    전체 보기
                  </button>
                </div>
              </div>
            )}
          </section>
          
          {/* �🎭 쫄부 세계관 테스트 */}
          {filteredThemedTests.length > 0 && (
            <ThemedTestList tests={filteredThemedTests} />
          )}
          
          {/* 🔒 비밀 세계관 배너 - 전체 보기일 때만 표시 */}
          {selectedTag === 'all' && <SecretWorldBanner />}
          
          {/* 🎯 일반 테스트 */}
          {filteredCasualTests.length > 0 && (
            <GeneralTestList tests={filteredCasualTests} />
          )}
          
          {/* 결과가 없을 때 */}
          {filteredTests.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                해당 태그의 테스트가 없어요
              </h3>
              <p className="text-gray-600 mb-6">
                다른 태그를 선택해보시거나 전체 보기를 이용해주세요!
              </p>
              <button 
                onClick={() => setSelectedTag('all')}
                className="bg-[#5D4037] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#4A2C2A] transition-colors"
              >
                전체 테스트 보기
              </button>
            </div>
          )}
        </div>
      </main>
      
      {/* 🦶 하단 푸터 */}
      <Footer />
    </>
  );
}
