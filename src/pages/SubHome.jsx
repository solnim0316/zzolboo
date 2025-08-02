// 🎮 서브 홈 페이지 컴포넌트 - 203040 세대를 위한 컨텐츠
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { TAG_CATEGORIES, testUtils } from "@/data/testConfigs";

export default function SubHome() {
  const [selectedTag, setSelectedTag] = useState('all');

  // 🏷️ BRO 태그 카테고리
  const broTagCategories = [
    { id: 'all', name: '전체', icon: '🔥' },
    { id: '게임', name: '게임', icon: '🎮' },
    { id: '골프', name: '골프', icon: '⛳' },
    { id: '운동', name: '운동', icon: '💪' },
    { id: '투자', name: '투자', icon: '📈' },
    { id: '여행', name: '여행', icon: '✈️' },
    { id: '음식', name: '음식', icon: '🍷' },
    { id: '취미', name: '취미', icon: '🎯' }
  ];

  // 📊 BRO 테스트 데이터 (임시)
  const broTests = [
    {
      id: "lol-line-recommendation",
      title: "롤 라인 추천 테스트",
      world: "리그 오브 레전드",
      emoji: "🎮",
      theme: "게임",
      thumbnail: "/images/tests/lol/thumbnail.png",
      isFeatured: true,
      isThemed: true,
      description: "성향 기반으로 추천하는 롤 라인 & 역할군",
      tags: ["추천", "게임", "성격", "재미"],
      route: "/lol-test",
      difficulty: "medium",
      estimatedTime: "4분",
      questionCount: 11,
      worldConfig: {
        backgroundColor: "#1a1a2e",
        primaryColor: "#16213e",
        characterStyle: "gaming",
        backgroundMusic: null
      }
    }
    // 추후 더 많은 성인 취향 테스트 추가 예정
  ];

  // 태그별 필터링
  const filteredTests = selectedTag === 'all' 
    ? broTests 
    : broTests.filter(test => test.tags.includes(selectedTag));

  return (
    <>
      {/* 🎯 상단 헤더 */}
      <Header />
      
             {/* 📱 메인 콘텐츠 */}
               <main className="bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 min-h-screen px-4 pt-0 pb-6 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* 🌟 Hero 배너 - BRO 전용 */}
          <section className="w-full rounded-xl sm:rounded-2xl shadow-lg mb-8 overflow-hidden">
            {/* 🖼️ BRO 전용 배너 이미지 */}
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem]">
                             <img 
                 src="/images/banner/bro/bro1.png" 
                 alt="BRO 전용 배너 이미지" 
                 className="w-full h-full object-cover"
               />
            </div>
          </section>
          
          {/* 🏷️ 태그 네비게이션 섹션 */}
          <section className="mb-12">
                         <div className="text-center mb-8">
                               <h2 className="text-2xl font-bold mb-4 text-[#5D4037]">
                  🏷️ 관심 분야별 탐색
                </h2>
                <p className="text-[#6D4C41]">
                  본인의 관심사에 맞는 테스트를 선택해보세요!
                </p>
             </div>
            
                         {/* 태그 필터 버튼들 */}
             <div className="flex flex-wrap justify-center gap-3 mb-8">
                               {broTagCategories.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(tag.id)}
                                                                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedTag === tag.id
                        ? 'bg-[#F48FB1] text-white shadow-lg border border-[#F06292]'
                        : 'bg-white text-[#5D4037] hover:bg-[#FCE4EC] shadow-md border border-[#F8BBD9]'
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
                                   <div className="inline-flex items-center gap-2 bg-[#F48FB1] text-white px-4 py-2 rounded-full border border-[#F06292]">
                    <span className="text-sm">
                      '{broTagCategories.find(t => t.id === selectedTag)?.name}' 분야로 필터링 중
                    </span>
                    <button 
                      onClick={() => setSelectedTag('all')}
                      className="text-white hover:text-[#FCE4EC] text-sm underline"
                    >
                      전체 보기
                    </button>
                  </div>
               </div>
            )}
          </section>
          
                     {/* 🎮 BRO 테스트 리스트 */}
          {filteredTests.length > 0 && (
            <section className="mb-12">
              <div className="text-center mb-8">
                                                         <h2 className="text-3xl font-bold text-[#5D4037] mb-4">
                          🔥 BRO 테스트
                        </h2>
                        <p className="text-[#6D4C41]">
                          남자들의 도파민을 자극하는 강렬한 테스트들을 경험해보세요
                        </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTests.map((test) => (
                                     <div
                     key={test.id}
                                           className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-[#F8BBD9]"
                   >
                     {/* 썸네일 */}
                                           <div className="h-48 bg-gradient-to-br from-[#FCE4EC] to-[#F8BBD9] flex items-center justify-center text-6xl">
                       {test.emoji}
                     </div>
                    
                    {/* 내용 */}
                    <div className="p-6">
                                             <div className="flex items-center gap-2 mb-3">
                                                   <span className="text-sm bg-[#F48FB1] text-white px-2 py-1 rounded-full border border-[#F06292]">
                            {test.theme}
                          </span>
                          <span className="text-sm text-[#5D4037]">
                            {test.estimatedTime}
                          </span>
                       </div>
                       
                                               <h3 className="text-xl font-bold text-[#5D4037] mb-2">
                          {test.title}
                        </h3>
                        
                        <p className="text-[#6D4C41] mb-4 line-clamp-2">
                          {test.description}
                        </p>
                      
                                             {/* 태그 */}
                       <div className="flex flex-wrap gap-1 mb-4">
                         {test.tags.slice(0, 3).map((tag, index) => (
                                                       <span
                              key={index}
                              className="text-xs bg-[#FCE4EC] text-[#5D4037] px-2 py-1 rounded border border-[#F8BBD9]"
                            >
                              #{tag}
                            </span>
                         ))}
                       </div>
                      
                                             {/* 시작 버튼 */}
                       <Link
                         to={test.route}
                                                   className="block w-full bg-[#F48FB1] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#F06292] transition-colors border border-[#F06292]"
                       >
                         테스트 시작하기
                       </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

                     {/* 📊 통계 섹션 */}
           <section className="mb-12">
                           <div className="bg-white rounded-xl shadow-lg p-8 border border-[#F8BBD9]">
               <div className="text-center mb-8">
                                                           <h2 className="text-2xl font-bold text-[#5D4037] mb-4">
                    📊 BRO 테스트 현황
                  </h2>
                  <p className="text-[#6D4C41]">
                    현재 준비된 BRO 테스트들을 확인해보세요
                  </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                 <div className="text-center">
                                       <div className="text-3xl font-bold text-[#F48FB1] mb-2">1</div>
                    <div className="text-[#5D4037]">게임 테스트</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F06292] mb-2">0</div>
                    <div className="text-[#5D4037]">골프 테스트</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#E91E63] mb-2">0</div>
                    <div className="text-[#5D4037]">취미 테스트</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#C2185B] mb-2">0</div>
                    <div className="text-[#5D4037]">투자 테스트</div>
                 </div>
              </div>
            </div>
          </section>

                     {/* 🚀 새로운 테스트 제안 */}
           <section className="mb-12">
                           <div className="bg-gradient-to-r from-[#F48FB1] to-[#F06292] rounded-xl p-8 border border-[#E91E63]">
               <div className="text-center">
                                                           <h2 className="text-2xl font-bold text-white mb-4">
                    🚀 새로운 BRO 테스트 제안
                  </h2>
                  <p className="text-white mb-6">
                    어떤 강렬한 테스트를 더 추가하면 좋을까요? 여러분의 의견을 들려주세요!
                  </p>
                
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                       <div className="bg-white rounded-lg p-4 shadow-sm border border-[#F8BBD9]">
                      <h3 className="font-semibold text-[#5D4037] mb-2">⛳ 골프 스타일 테스트</h3>
                      <p className="text-sm text-[#6D4C41]">골프 플레이 스타일과 어울리는 클럽 추천</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-[#F8BBD9]">
                      <h3 className="font-semibold text-[#5D4037] mb-2">📈 투자 성향 테스트</h3>
                      <p className="text-sm text-[#6D4C41]">본인의 투자 성향과 적합한 투자 전략</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-[#F8BBD9]">
                      <h3 className="font-semibold text-[#5D4037] mb-2">💪 헬스 루틴 테스트</h3>
                      <p className="text-sm text-[#6D4C41]">본인의 체질에 맞는 운동 프로그램</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-[#F8BBD9]">
                      <h3 className="font-semibold text-[#5D4037] mb-2">🏎️ 자동차 성향 테스트</h3>
                      <p className="text-sm text-[#6D4C41]">성격에 맞는 자동차 브랜드와 모델</p>
                    </div>
                 </div>
                
                                                         <button className="bg-white text-[#5D4037] px-6 py-3 rounded-lg font-semibold hover:bg-[#FCE4EC] transition-colors border border-[#F8BBD9]">
                          💡 BRO 테스트 아이디어 제안하기
                        </button>
              </div>
            </div>
          </section>
          
          {/* 결과가 없을 때 */}
          {filteredTests.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
                                                       <h3 className="text-xl font-bold text-[#5D4037] mb-2">
                          해당 분야의 BRO 테스트가 아직 준비되지 않았어요
                        </h3>
                        <p className="text-[#6D4C41] mb-6">
                          다른 분야를 선택해보시거나 전체 보기를 이용해주세요!
                        </p>
                        <button 
                          onClick={() => setSelectedTag('all')}
                          className="bg-[#F48FB1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#F06292] transition-colors border border-[#F06292]"
                        >
                          전체 BRO 테스트 보기
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