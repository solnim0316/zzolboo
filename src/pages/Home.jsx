// 🏠 홈 페이지 컴포넌트 - 쫄부월드
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/HeroBanner";
import ThemedTestList from "@/components/ThemedTestList";
import GeneralTestList from "@/components/GeneralTestList";
import SecretWorldBanner from "@/components/SecretWorldBanner";

export default function Home() {
  // 📊 테스트 데이터 (임시 더미 데이터)
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
      description: "쫄과 부가 안내하는 고양이 왕국! 너는 어떤 성격의 고양이일까?"
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
      description: "만약 내가 공룡시대에 태어났다면? 나는 어떤 공룡이였을까?"
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
      description: "쫄과 부가 운영하는 꿈속 카페에서 당신의 취향을 알아보세요"
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
      description: "쫄과 부와 함께 마법의 숲을 탐험하며 진정한 자아를 발견해보세요"
    }
  ];

  const casualTests = [
    {
      id: "color-psychology",
      title: "색깔 심리 테스트",
      thumbnail: "/images/tests/color-psychology.png",
      isThemed: false,
      description: "좋아하는 색깔로 알아보는 심리 상태"
    },
    {
      id: "food-test",
      title: "오늘 뭐 먹지? 테스트",
      thumbnail: "/images/tests/food-test.png",
      isThemed: false,
      description: "80가지 한국 음식 중 오늘의 메뉴를 추천받아보세요!"
    }
  ];

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
          
          {/* 🎭 쫄부 세계관 테스트 */}
          <ThemedTestList tests={themedTests} />
          
          {/* 🔒 비밀 세계관 배너 */}
          <SecretWorldBanner />
          
          {/* 🎯 일반 테스트 */}
          <GeneralTestList tests={casualTests} />
        </div>
      </main>
      
      {/* 🦶 하단 푸터 */}
      <Footer />
    </>
  );
}
