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

export default function Home() {
  const [selectedTag, setSelectedTag] = useState('all');

  // 🏷️ 태그 카테고리 (testConfigs에서 가져옴)
  const tagCategories = TAG_CATEGORIES;

  // 📊 테스트 데이터 (testConfigs에서 가져옴)
  const themedTests = testUtils.getThemedTests();
  const casualTests = testUtils.getCasualTests();

  // 모든 테스트 합치기 (testConfigs 활용)
  const allTests = testUtils.getPublicTests();

  // 태그별 필터링 (testConfigs 활용)
  const filteredTests = testUtils.getTestsByTag(selectedTag);

  // 필터링된 테스트를 테마형과 일반형으로 분리
  const filteredThemedTests = filteredTests.filter(test => test.isThemed);
  const filteredCasualTests = filteredTests.filter(test => !test.isThemed);

  // 🌟 Featured 테스트 찾기 (testConfigs 활용)
  const featuredTest = testUtils.getFeaturedTest();
  
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

          {/* 📸 갤러리 미리보기 섹션 - 전체 보기일 때만 표시 */}
          {selectedTag === 'all' && (
            <section className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#5D4037] mb-4">
                  📸 쫄부 갤러리
                </h2>
                <p className="text-gray-600 text-lg">
                  쫄과 부의 일상과 개발 과정을 만나보세요!
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {/* 갤러리 미리보기 이미지들 */}
                {[
                  { emoji: '🐸', title: '쫄이의 일상', category: 'zzol' },
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
                  <span>갤러리 전체보기</span>
                </Link>
              </div>
            </section>
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
