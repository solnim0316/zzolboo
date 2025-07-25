// 📸 인스타그램 피드 연동 컴포넌트
import React, { useState, useEffect } from 'react';

export default function InstagramFeed() {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

  // Instagram Basic Display API 설정
  const INSTAGRAM_APP_ID = import.meta.env.VITE_INSTAGRAM_APP_ID;
  const REDIRECT_URI = encodeURIComponent(window.location.origin + '/gallery');
  
  // 인스타그램 로그인 URL 생성
  const getInstagramAuthUrl = () => {
    return `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_APP_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
  };

  // URL에서 인증 코드 추출
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code && !accessToken) {
      exchangeCodeForToken(code);
    }
  }, []);

  // 인증 코드를 액세스 토큰으로 교환
  const exchangeCodeForToken = async (code) => {
    setLoading(true);
    try {
      const response = await fetch('/api/instagram/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      
      const data = await response.json();
      if (data.access_token) {
        setAccessToken(data.access_token);
        localStorage.setItem('instagram_token', data.access_token);
        fetchInstagramPosts(data.access_token);
      }
    } catch (error) {
      setError('인스타그램 연동 중 오류가 발생했습니다.');
      console.error('Instagram auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  // 인스타그램 게시물 가져오기
  const fetchInstagramPosts = async (token) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`
      );
      
      const data = await response.json();
      if (data.data) {
        setInstagramPosts(data.data.slice(0, 9)); // 최근 9개만
      }
    } catch (error) {
      setError('인스타그램 게시물을 불러올 수 없습니다.');
      console.error('Instagram fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  // 저장된 토큰으로 게시물 로드
  useEffect(() => {
    const savedToken = localStorage.getItem('instagram_token');
    if (savedToken && !accessToken) {
      setAccessToken(savedToken);
      fetchInstagramPosts(savedToken);
    }
  }, []);

  // 인스타그램 연결
  const connectInstagram = () => {
    window.location.href = getInstagramAuthUrl();
  };

  // 연결 해제
  const disconnectInstagram = () => {
    setAccessToken(null);
    setInstagramPosts([]);
    localStorage.removeItem('instagram_token');
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin text-4xl mb-4">🔄</div>
        <p className="text-gray-600">인스타그램 게시물을 불러오는 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-red-50 rounded-xl">
        <div className="text-4xl mb-4">⚠️</div>
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => setError(null)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          다시 시도
        </button>
      </div>
    );
  }

  if (!accessToken) {
    return (
      <div className="text-center py-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
        <div className="text-6xl mb-6">📸</div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          실제 인스타그램 연동
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          쫄부월드 공식 인스타그램 계정의 실제 게시물을 갤러리에서 확인하세요!
        </p>
        <button
          onClick={connectInstagram}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
        >
          📱 인스타그램 연결하기
        </button>
        <div className="mt-4 text-sm text-gray-500">
          <p>⚡ 인스타그램 계정 로그인이 필요합니다</p>
          <p>🔒 안전한 공식 API를 사용합니다</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* 연결 상태 표시 */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-green-500 text-xl">✅</div>
            <div>
              <p className="font-semibold text-green-800">인스타그램 연결됨</p>
              <p className="text-sm text-green-600">실시간 게시물을 불러오고 있습니다</p>
            </div>
          </div>
          <button
            onClick={disconnectInstagram}
            className="text-sm text-red-500 hover:text-red-700 underline"
          >
            연결 해제
          </button>
        </div>
      </div>

      {/* 인스타그램 게시물 그리드 */}
      {instagramPosts.length > 0 ? (
        <>
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            📸 쫄부월드 공식 인스타그램
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden group hover:scale-105 transition-transform shadow-lg"
              >
                {/* 이미지/비디오 표시 */}
                {post.media_type === 'IMAGE' ? (
                  <img
                    src={post.media_url}
                    alt={post.caption || '인스타그램 게시물'}
                    className="w-full h-full object-cover"
                  />
                ) : post.media_type === 'VIDEO' ? (
                  <div className="relative">
                    <img
                      src={post.thumbnail_url || post.media_url}
                      alt={post.caption || '인스타그램 비디오'}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-50 rounded-full p-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                    <span className="text-4xl">📷</span>
                  </div>
                )}

                {/* 호버 오버레이 */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center p-4">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="text-sm font-medium mb-2">인스타그램에서 보기</div>
                    {post.caption && (
                      <p className="text-xs line-clamp-2">
                        {post.caption.slice(0, 50)}...
                      </p>
                    )}
                  </div>
                </div>

                {/* 날짜 표시 */}
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                  {new Date(post.timestamp).toLocaleDateString('ko-KR', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </a>
            ))}
          </div>

          {/* 인스타그램 프로필 링크 */}
          <div className="text-center">
            <a
              href="https://instagram.com/zzolboo_world"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <span>📱</span>
              <span>인스타그램에서 더보기</span>
            </a>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">📷</div>
          <p className="text-gray-600">아직 인스타그램 게시물이 없습니다.</p>
        </div>
      )}
    </div>
  );
}
