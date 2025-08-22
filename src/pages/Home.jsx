// 🏠 홈 페이지 컴포넌트 - 쫄부월드
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/HeroBanner";
import ThemedTestList from "@/components/ThemedTestList";
import GeneralTestList from "@/components/GeneralTestList";
import SecretWorldBanner from "@/components/SecretWorldBanner";
import { useState } from "react";
import { TAG_CATEGORIES, testUtils } from "@/data/testConfigs";
import AdSenseAd, { AdUnits } from "@/components/common/AdSenseAd";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState('all');

  // 🏷️ 태그 카테고리 (testConfigs에서 가져옴)
  const tagCategories = TAG_CATEGORIES;

  // 📊 테스트 데이터 (testConfigs에서 가져옴)
  const themedTests = testUtils.getThemedTests();
  const casualTests = testUtils.getCasualTests();

  // 모든 테스트 합치기 (testConfigs 활용, bro 테스트 제외)
  const allTests = testUtils.getMainChannelTests();

  // 태그별 필터링 (testConfigs 활용, bro 테스트 제외)
  const filteredTests = selectedTag === 'all' 
    ? testUtils.getMainChannelTests()
    : testUtils.getMainChannelTests().filter(test => test.tags && test.tags.includes(selectedTag));

  // 필터링된 테스트를 테마형과 일반형으로 분리
  const filteredThemedTests = filteredTests.filter(test => test.isThemed);
  const filteredCasualTests = filteredTests.filter(test => !test.isThemed);

  // 🌟 Featured 테스트 찾기 (메인 채널용)
  const featuredTest = testUtils.getMainChannelTests().find(test => test.isFeatured);
  
  return (
    <>
      {/* 🎯 상단 헤더 */}
      <Header />
      
      {/* 📱 메인 콘텐츠 */}
      <main className="bg-background text-text min-h-screen px-4 pt-0 pb-6 sm:px-6 md:px-8 lg:px-12">
        <h1 className="sr-only">쫄부월드 | 재미있는 MBTI 성격 테스트 모음</h1>
        <div className="max-w-7xl mx-auto">
          
          {/* 🌟 Hero 배너 - 오늘의 추천 */}
          <HeroBanner featuredTest={featuredTest} />
          
          {/* 🏷️ 태그 네비게이션 섹션 */}
          <section className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#5D4037]">
                🎭 어떤 모험을 떠날까요?
              </h2>
              <p className="text-gray-600 mt-2">
                쫄과 부가 당신만의 특별한 이야기를 기다리고 있어요! 💕
              </p>
            </div>
            
            {/* 태그 필터 버튼들 - 진짜 한 줄로 표시 */}
            <div className="overflow-x-auto mb-6">
              <div className="flex gap-2 px-4 min-w-max">
                {tagCategories.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => setSelectedTag(tag.id)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-all text-sm whitespace-nowrap ${
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
            </div>
            
            {/* 필터링 결과 표시 */}
            {selectedTag !== 'all' && (
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                  <span className="text-sm">
                    🎯 '{tagCategories.find(t => t.id === selectedTag)?.name}' 테마로 찾아보는 중이에요!
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
          
          {/* 🎭 쫄부 세계관 테스트 */}
          {filteredThemedTests.length > 0 && (
            <section className="mb-8">
              {/* 📊 상단 광고 배너 - 데스크톱 */}
              <AdSenseAd 
                adSlot={AdUnits.HEADER_BANNER}
                adFormat="banner"
                className="mb-6 hidden md:block"
              />
              
              {/* 📱 모바일 전용 광고 - 상단 */}
              <AdSenseAd 
                adSlot={AdUnits.MOBILE_BANNER}
                adFormat="mobile"
                className="mb-6 md:hidden"
              />
              
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#5D4037] mb-2">
                  🎭 쫄과 부의 특별한 세계관
                </h2>
                <p className="text-gray-600 text-sm">
                  쫄이 준비한 신기한 모험들을 체험해보세요! ✨
                </p>
              </div>
              <ThemedTestList tests={filteredThemedTests} />
              
              {/* 🎯 콘텐츠 인피드 광고 - 테스트 카드와 자연스럽게 섞임 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                <AdSenseAd 
                  adSlot={AdUnits.CONTENT_INFEED_CARD}
                  isContentInfeed={true}
                  cardStyle={true}
                  className="aspect-square"
                />
              </div>
              
              {/* 📊 테스트 목록 중간 광고 - 데스크톱 */}
              <AdSenseAd 
                adSlot={AdUnits.TEST_LIST_MIDDLE}
                adFormat="banner"
                className="my-8 hidden md:block"
              />
              
              {/* 📱 모바일 전용 광고 - 중간 */}
              <AdSenseAd 
                adSlot={AdUnits.MOBILE_BANNER}
                adFormat="mobile"
                className="my-8 md:hidden"
              />
              
              {/* 🎯 인피드 광고 - 콘텐츠 중간 */}
              <AdSenseAd 
                adSlot={AdUnits.INFEED_AD}
                adFormat="infeed"
                fullWidthResponsive={true}
                className="my-8"
              />
            </section>
          )}
          
          {/* 🎯 일반 테스트 */}
          {filteredCasualTests.length > 0 && (
            <section className="mb-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#5D4037] mb-2">
                  🎯 부가 추천하는 재미있는 테스트들
                </h2>
                <p className="text-gray-600 text-sm">
                  부가 엄선한 다양한 주제의 테스트를 즐겨보세요! 😊
                </p>
              </div>
              <GeneralTestList tests={filteredCasualTests} />
              
              {/* 🎯 콘텐츠 인피드 광고 - 유튜브 썸네일 스타일 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                <AdSenseAd 
                  adSlot={AdUnits.CONTENT_INFEED_THUMBNAIL}
                  isContentInfeed={true}
                  youtubeThumbnailStyle={true}
                  className="aspect-video"
                />
              </div>
              
              {/* 📊 일반 테스트 하단 광고 - 데스크톱 */}
              <AdSenseAd 
                adSlot={AdUnits.CONTENT_INFEED}
                adFormat="banner"
                className="mt-8 hidden md:block"
              />
              
              {/* 📱 모바일 전용 광고 - 하단 */}
              <AdSenseAd 
                adSlot={AdUnits.MOBILE_BANNER}
                adFormat="mobile"
                className="mt-8 md:hidden"
              />
            </section>
          )}

          {/* 📸 갤러리 미리보기 섹션 - 전체 보기일 때만 표시 */}
          {selectedTag === 'all' && (
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#5D4037] mb-4">
                  📸 쫄과 부의 일상 갤러리
                </h2>
                <p className="text-gray-600 text-lg">
                  쫄과 부의 귀여운 일상과 개발 과정을 구경해보세요! 🥰
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {/* 갤러리 미리보기 이미지들 */}
                {[
                  { emoji: '🐱', title: '쫄이의 일상', category: 'zzol' },
                  { emoji: '🐰', title: '부의 하루', category: 'boo' },
                  { emoji: '🫶', title: '함께하는 시간', category: 'together' },
                  { emoji: '💻', title: '개발 현장', category: 'workspace' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-4xl hover:scale-105 transition-transform cursor-pointer shadow-md"
                  >
                    {item.emoji}
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  <span>📸</span>
                  <span>갤러리 구경하기</span>
                </Link>
              </div>
            </section>
          )}
          
          {/* 결과가 없을 때 */}
          {filteredTests.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                앗! 아직 준비 중인 테스트예요 😅
              </h3>
              <p className="text-gray-600 mb-6">
                쫄과 부가 열심히 준비하고 있어요! 다른 테스트를 먼저 해보세요! 💪
              </p>
              <button 
                onClick={() => setSelectedTag('all')}
                className="bg-[#5D4037] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#4A2C2A] transition-colors"
              >
                🎭 모든 테스트 보기
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
