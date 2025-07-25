// 🚫 404 에러 페이지
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="mb-8">
            <div className="text-8xl mb-4">🫨</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">페이지를 찾을 수 없어요</h1>
            <p className="text-lg text-gray-600 mb-8">
              요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            </p>
          </div>

          <div className="space-y-4">
            <Link 
              to="/" 
              className="block w-full py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-200 shadow-md"
            >
              🏠 홈으로 돌아가기
            </Link>
            
            <div className="flex gap-3">
              <Link 
                to="/dinosaur-test" 
                className="flex-1 py-2 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow border"
              >
                🦕 공룡 테스트
              </Link>
              <Link 
                to="/cat-test" 
                className="flex-1 py-2 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-200 shadow border"
              >
                🐱 고양이 테스트
              </Link>
            </div>
          </div>

          <div className="mt-8 p-4 bg-white/70 rounded-xl">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-blue-600">💡 TIP:</span> 
              브라우저의 뒤로가기 버튼을 사용하거나 위 버튼을 선택해보세요!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
