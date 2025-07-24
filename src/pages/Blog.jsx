// 📝 블로그 메인 페이지
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 'mbti-dating-guide',
      title: 'MBTI별 연애 스타일 완전 분석',
      excerpt: '16가지 성격 유형별로 알아보는 연애 패턴과 궁합. 내 MBTI에 맞는 이상형은 누구일까요?',
      category: 'relationship',
      date: '2024-12-15',
      readTime: '8분',
      tags: ['연애', '궁합', 'MBTI', '관계'],
      image: '/images/blog/dating-guide.jpg',
      featured: true
    },
    {
      id: 'mbti-career-guide',
      title: 'MBTI로 찾는 나에게 맞는 직업',
      excerpt: '성격 유형에 따른 적성과 강점을 분석해서 진로를 선택하는 방법을 알아보세요.',
      category: 'career',
      date: '2024-12-10',
      readTime: '10분',
      tags: ['직업', '진로', '적성', '커리어'],
      image: '/images/blog/career-guide.jpg',
      featured: true
    },
    {
      id: 'mbti-friendship',
      title: 'MBTI별 우정 관리법',
      excerpt: '성격이 다른 친구들과 더 깊은 관계를 만들어가는 MBTI별 소통 전략을 소개합니다.',
      category: 'relationship',
      date: '2024-12-05',
      readTime: '6분',
      tags: ['우정', '친구', '소통', '관계'],
      image: '/images/blog/friendship.jpg',
      featured: false
    },
    {
      id: 'mbti-study-methods',
      title: 'MBTI별 최적의 공부법',
      excerpt: '내 성격에 맞는 학습 방법을 찾아서 효율적으로 공부하는 법을 알아보세요.',
      category: 'lifestyle',
      date: '2024-12-01',
      readTime: '7분',
      tags: ['공부법', '학습', '효율', '성장'],
      image: '/images/blog/study-methods.jpg',
      featured: false
    },
    {
      id: 'mbti-stress-management',
      title: 'MBTI별 스트레스 해소법',
      excerpt: '각 성격 유형별로 효과적인 스트레스 관리 방법과 멘탈 케어 팁을 제공합니다.',
      category: 'lifestyle',
      date: '2024-11-28',
      readTime: '5분',
      tags: ['스트레스', '힐링', '멘탈케어', '건강'],
      image: '/images/blog/stress-management.jpg',
      featured: false
    },
    {
      id: 'mbti-communication',
      title: 'MBTI별 효과적인 소통법',
      excerpt: '직장과 일상에서 성격 유형별로 다른 소통 방식을 이해하고 활용하는 방법.',
      category: 'work',
      date: '2024-11-25',
      readTime: '9분',
      tags: ['소통', '커뮤니케이션', '직장', '관계'],
      image: '/images/blog/communication.jpg',
      featured: false
    },
    {
      id: 'mbti-parenting',
      title: 'MBTI를 활용한 자녀 교육법',
      excerpt: '아이의 성격을 이해하고 맞춤형 교육과 양육 방법을 찾는 MBTI 활용 가이드.',
      category: 'family',
      date: '2024-11-20',
      readTime: '12분',
      tags: ['육아', '교육', '자녀', '양육'],
      image: '/images/blog/parenting.jpg',
      featured: false
    },
    {
      id: 'mbti-teamwork',
      title: '팀워크를 위한 MBTI 활용법',
      excerpt: '다양한 성격의 팀원들과 효과적으로 협업하는 방법과 팀 빌딩 전략을 소개합니다.',
      category: 'work',
      date: '2024-11-15',
      readTime: '8분',
      tags: ['팀워크', '협업', '리더십', '직장'],
      image: '/images/blog/teamwork.jpg',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: '전체', icon: '📚' },
    { id: 'relationship', name: '연애·관계', icon: '💕' },
    { id: 'career', name: '직업·진로', icon: '💼' },
    { id: 'lifestyle', name: '라이프스타일', icon: '🌟' },
    { id: 'work', name: '직장·업무', icon: '🏢' },
    { id: 'family', name: '가족·육아', icon: '👨‍👩‍👧‍👦' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* 헤더 섹션 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 text-[#5D4037]">
              📝 쫄부월드 블로그
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              MBTI와 성격 심리학에 대한 깊이 있는 인사이트와 
              일상에서 바로 활용할 수 있는 실용적인 팁들을 만나보세요.
            </p>
          </div>

          {/* 추천 글 섹션 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#5D4037] flex items-center">
              🌟 추천 글
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <span className="text-4xl">📖</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-500 text-xs">{post.readTime} 읽기</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#5D4037] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {new Date(post.date).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 카테고리 필터 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#5D4037]">
              📚 카테고리별 글 보기
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-[#5D4037] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 블로그 글 목록 */}
          <section>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-3xl">
                      {post.category === 'relationship' ? '💕' :
                       post.category === 'career' ? '💼' :
                       post.category === 'lifestyle' ? '🌟' :
                       post.category === 'work' ? '🏢' :
                       post.category === 'family' ? '👨‍👩‍👧‍👦' : '📖'}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#5D4037] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {new Date(post.date).toLocaleDateString('ko-KR')}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA 섹션 */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 text-center mt-12">
            <h2 className="text-2xl font-bold mb-4 text-[#5D4037]">
              📖 더 많은 MBTI 인사이트가 궁금하다면?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              쫄부월드의 재미있는 테스트로 나의 성격을 더 깊이 알아보세요!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/mbti-guide" 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all transform hover:scale-105"
              >
                📚 MBTI 가이드
              </Link>
              <Link 
                to="/dinosaur-test" 
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105"
              >
                🦕 공룡 테스트
              </Link>
              <Link 
                to="/cat-test" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                🐱 고양이 테스트
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
