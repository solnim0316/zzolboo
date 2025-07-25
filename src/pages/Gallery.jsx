// 📸 쫄부 갤러리 페이지 - 인스타그램 스타일
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import InstagramFeed from '../components/InstagramFeed';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 갤러리 이미지 데이터
  const galleryData = [
    {
      id: 1,
      src: '/images/gallery/zzol-1.jpg',
      caption: '🐸 쫄이가 첫 번째 테스트를 만들고 있어요!',
      category: 'zzol',
      likes: 127,
      date: '2025-01-15'
    },
    {
      id: 2,
      src: '/images/gallery/boo-1.jpg',
      caption: '🐰 부가 새로운 아이디어를 생각하고 있네요',
      category: 'boo',
      likes: 89,
      date: '2025-01-12'
    },
    {
      id: 3,
      src: '/images/gallery/together-1.jpg',
      caption: '🫶 쫄과 부가 함께 코딩하는 모습이에요',
      category: 'together',
      likes: 234,
      date: '2025-01-10'
    },
    {
      id: 4,
      src: '/images/gallery/zzol-2.jpg',
      caption: '🐸 쫄이의 일상 - 점심시간!',
      category: 'zzol',
      likes: 156,
      date: '2025-01-08'
    },
    {
      id: 5,
      src: '/images/gallery/boo-2.jpg',
      caption: '🐰 부의 취미는 독서랍니다',
      category: 'boo',
      likes: 98,
      date: '2025-01-05'
    },
    {
      id: 6,
      src: '/images/gallery/workspace.jpg',
      caption: '💻 쫄부월드 개발실 전경',
      category: 'workspace',
      likes: 201,
      date: '2025-01-03'
    },
    {
      id: 7,
      src: '/images/gallery/together-2.jpg',
      caption: '🎉 첫 번째 테스트 출시 기념!',
      category: 'together',
      likes: 312,
      date: '2024-12-28'
    },
    {
      id: 8,
      src: '/images/gallery/zzol-3.jpg',
      caption: '🐸 쫄이가 디자인 작업 중이에요',
      category: 'zzol',
      likes: 145,
      date: '2024-12-25'
    },
    {
      id: 9,
      src: '/images/gallery/boo-3.jpg',
      caption: '🐰 부의 아침 요가 시간',
      category: 'boo',
      likes: 78,
      date: '2024-12-22'
    }
  ];

  // 카테고리 필터
  const categories = [
    { id: 'all', name: '전체', icon: '🌟' },
    { id: 'zzol', name: '쫄이', icon: '🐸' },
    { id: 'boo', name: '부', icon: '🐰' },
    { id: 'together', name: '함께', icon: '🫶' },
    { id: 'workspace', name: '작업실', icon: '💻' }
  ];

  // 필터링된 이미지
  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

  // 모달 열기
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // 스크롤 복원
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-20 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* 헤더 섹션 */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="text-4xl">🐸</div>
              <h1 className="text-4xl font-bold text-[#5D4037]">쫄부 갤러리</h1>
              <div className="text-4xl">🐰</div>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              쫄과 부의 일상과 쫄부월드 개발 과정을 만나보세요!
            </p>
            
            {/* 통계 */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5D4037]">{galleryData.length}</div>
                <div className="text-sm text-gray-600">게시물</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5D4037]">
                  {galleryData.reduce((sum, img) => sum + img.likes, 0)}
                </div>
                <div className="text-sm text-gray-600">좋아요</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5D4037]">2</div>
                <div className="text-sm text-gray-600">캐릭터</div>
              </div>
            </div>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#5D4037] text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* 갤러리 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(image)}
              >
                {/* 이미지 플레이스홀더 */}
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">
                      {image.category === 'zzol' ? '🐸' : 
                       image.category === 'boo' ? '🐰' : 
                       image.category === 'together' ? '🫶' : '💻'}
                    </div>
                    <div className="text-sm text-gray-600 px-4">
                      {image.caption.slice(0, 20)}...
                    </div>
                  </div>
                </div>
                
                {/* 호버 오버레이 */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                    <div className="text-2xl mb-2">👁️</div>
                    <div className="text-sm font-medium">자세히 보기</div>
                  </div>
                </div>

                {/* 좋아요 수 */}
                <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs font-medium">
                  ❤️ {image.likes}
                </div>
              </div>
            ))}
          </div>

          {/* 빈 상태 */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                아직 해당 카테고리의 사진이 없어요
              </h3>
              <p className="text-gray-500">
                곧 멋진 사진들로 채워질 예정이에요!
              </p>
            </div>
          )}

          {/* 📱 인스타그램 실시간 피드 섹션 */}
          <div className="mt-20 border-t border-gray-200 pt-16">
            <InstagramFeed />
          </div>
        </div>
      </main>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full max-h-full overflow-y-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* 모달 헤더 */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {selectedImage.category === 'zzol' ? '🐸' : 
                       selectedImage.category === 'boo' ? '🐰' : '🫶'}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      쫄부월드 공식계정
                    </div>
                    <div className="text-sm text-gray-500">
                      {selectedImage.date}
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* 이미지 영역 */}
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">
                    {selectedImage.category === 'zzol' ? '🐸' : 
                     selectedImage.category === 'boo' ? '🐰' : 
                     selectedImage.category === 'together' ? '🫶' : '💻'}
                  </div>
                  <div className="text-xl text-gray-600 font-medium">
                    {selectedImage.caption}
                  </div>
                </div>
              </div>

              {/* 모달 하단 */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <button className="text-2xl hover:scale-110 transition-transform">
                      ❤️
                    </button>
                    <button className="text-2xl hover:scale-110 transition-transform">
                      💬
                    </button>
                    <button className="text-2xl hover:scale-110 transition-transform">
                      📤
                    </button>
                  </div>
                  <button className="text-2xl hover:scale-110 transition-transform">
                    🔖
                  </button>
                </div>
                
                <div className="font-semibold text-gray-800 mb-2">
                  좋아요 {selectedImage.likes}개
                </div>
                
                <div className="text-gray-700">
                  <span className="font-semibold">쫄부월드</span> {selectedImage.caption}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
