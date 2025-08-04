import { useState, useEffect } from 'react';
import { useTestResults } from '../../hooks/useOfflineDatabase';

/**
 * 📊 오프라인 테스트 결과 히스토리 컴포넌트
 * - 로컬에 저장된 테스트 결과들을 표시
 * - 결과 필터링 및 정렬 기능
 * - 결과 삭제 기능
 */
export default function OfflineHistory() {
  const { results, loading, error, loadRecentResults, deleteResult } = useTestResults();
  const [filter, setFilter] = useState('all'); // all, recent, completed
  const [sortBy, setSortBy] = useState('timestamp'); // timestamp, testName, score
  const [searchTerm, setSearchTerm] = useState('');

  // 컴포넌트 마운트 시 최근 결과 로드
  useEffect(() => {
    loadRecentResults(50); // 최근 50개 결과 로드
  }, [loadRecentResults]);

  // 결과 필터링 및 정렬
  const filteredAndSortedResults = results
    .filter(result => {
      // 검색어 필터링
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          result.testName?.toLowerCase().includes(searchLower) ||
          result.result?.title?.toLowerCase().includes(searchLower) ||
          result.result?.description?.toLowerCase().includes(searchLower)
        );
      }
      return true;
    })
    .filter(result => {
      // 상태별 필터링
      switch (filter) {
        case 'recent':
          const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
          return result.timestamp > oneWeekAgo;
        case 'completed':
          return result.isCompleted !== false;
        default:
          return true;
      }
    })
    .sort((a, b) => {
      // 정렬
      switch (sortBy) {
        case 'testName':
          return (a.testName || '').localeCompare(b.testName || '');
        case 'score':
          return (b.score || 0) - (a.score || 0);
        case 'timestamp':
        default:
          return b.timestamp - a.timestamp;
      }
    });

  // 결과 삭제 핸들러
  const handleDeleteResult = async (resultId) => {
    if (window.confirm('이 테스트 결과를 삭제하시겠습니까?')) {
      try {
        await deleteResult(resultId);
      } catch (error) {
        console.error('결과 삭제 실패:', error);
        alert('결과 삭제에 실패했습니다.');
      }
    }
  };

  // 날짜 포맷팅
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}시간 전`;
    } else if (diffInHours < 24 * 7) {
      return `${Math.floor(diffInHours / 24)}일 전`;
    } else {
      return date.toLocaleDateString('ko-KR');
    }
  };

  // 테스트 이름 매핑
  const getTestDisplayName = (testId) => {
    const testNameMap = {
      'dinosaur-test': '공룡 MBTI 테스트',
      'cat-test': '고양이 MBTI 테스트',
      'food-test': '음식 테스트',
      'fashion-test': '패션 테스트',
      'movie-test': '영화 테스트',
      'color-test': '컬러 테스트',
      'family-mbti': '가족 MBTI 테스트',
      'isekai': '이세계 테스트',
      'workout-mate': '운동메이트 테스트',
      'fingerprincess': '핑거프린세스 테스트',
      'love-habit-test': '연애습관 테스트',
      'drama-test': '드라마 테스트'
    };
    return testNameMap[testId] || testId;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5D4037] mx-auto mb-4"></div>
          <p className="text-[#8D6E63]">결과를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">❌</div>
          <h2 className="text-xl font-bold text-[#5D4037] mb-2">오류가 발생했습니다</h2>
          <p className="text-[#8D6E63] mb-4">{error.message}</p>
          <button
            onClick={() => loadRecentResults(50)}
            className="bg-[#5D4037] text-white px-4 py-2 rounded-lg hover:bg-[#8D6E63] transition-colors"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-[#5D4037] mb-2">
                📊 내 테스트 히스토리
              </h1>
              <p className="text-[#8D6E63]">
                총 {results.length}개의 테스트 결과가 저장되어 있습니다
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-[#8D6E63]">오프라인 저장</div>
              <div className="text-lg font-bold text-[#5D4037]">
                {filteredAndSortedResults.length}개
              </div>
            </div>
          </div>

          {/* 필터 및 검색 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 검색 */}
            <div>
              <label className="block text-sm font-medium text-[#5D4037] mb-2">
                🔍 검색
              </label>
              <input
                type="text"
                placeholder="테스트 이름 또는 결과로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4037] focus:border-transparent"
              />
            </div>

            {/* 필터 */}
            <div>
              <label className="block text-sm font-medium text-[#5D4037] mb-2">
                📂 필터
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4037] focus:border-transparent"
              >
                <option value="all">전체 결과</option>
                <option value="recent">최근 1주일</option>
                <option value="completed">완료된 테스트</option>
              </select>
            </div>

            {/* 정렬 */}
            <div>
              <label className="block text-sm font-medium text-[#5D4037] mb-2">
                🔄 정렬
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D4037] focus:border-transparent"
              >
                <option value="timestamp">최신순</option>
                <option value="testName">테스트명순</option>
                <option value="score">점수순</option>
              </select>
            </div>
          </div>
        </div>

        {/* 결과 목록 */}
        {filteredAndSortedResults.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-xl font-bold text-[#5D4037] mb-2">저장된 결과가 없습니다</h2>
            <p className="text-[#8D6E63] mb-4">
              {searchTerm ? '검색 결과가 없습니다.' : '아직 테스트를 완료하지 않았습니다.'}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="bg-[#5D4037] text-white px-4 py-2 rounded-lg hover:bg-[#8D6E63] transition-colors"
              >
                검색 초기화
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAndSortedResults.map((result) => (
              <div
                key={result.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* 테스트 정보 */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-[#FFF8E1] text-[#5D4037] px-3 py-1 rounded-full text-sm font-medium">
                        {getTestDisplayName(result.testId)}
                      </div>
                      <div className="text-sm text-[#8D6E63]">
                        {formatDate(result.timestamp)}
                      </div>
                      {result.score && (
                        <div className="bg-[#E8F5E8] text-[#2E7D32] px-2 py-1 rounded text-xs font-medium">
                          점수: {result.score}
                        </div>
                      )}
                    </div>

                    {/* 결과 정보 */}
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-[#5D4037] mb-1">
                        {result.result?.title || '결과 없음'}
                      </h3>
                      <p className="text-[#8D6E63] text-sm line-clamp-2">
                        {result.result?.description || '설명이 없습니다.'}
                      </p>
                    </div>

                    {/* 추가 정보 */}
                    <div className="flex items-center gap-4 text-xs text-[#8D6E63]">
                      <span>답변 수: {result.answers?.length || 0}개</span>
                      {result.deviceInfo && (
                        <span>기기: {result.deviceInfo.platform}</span>
                      )}
                      {!result.isSynced && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          동기화 대기
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 액션 버튼 */}
                  <div className="flex flex-col gap-2 ml-4">
                    <button
                      onClick={() => {
                        // 결과 상세 보기 (새 탭에서 열기)
                        const shareUrl = `/share?test=${result.testId}&result=${encodeURIComponent(JSON.stringify(result.result))}`;
                        window.open(shareUrl, '_blank');
                      }}
                      className="bg-[#5D4037] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#8D6E63] transition-colors"
                    >
                      📊 상세보기
                    </button>
                    <button
                      onClick={() => handleDeleteResult(result.id)}
                      className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm hover:bg-red-200 transition-colors"
                    >
                      🗑️ 삭제
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 통계 정보 */}
        {results.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
            <h3 className="text-lg font-bold text-[#5D4037] mb-4">📈 통계 정보</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5D4037]">
                  {results.length}
                </div>
                <div className="text-sm text-[#8D6E63]">총 테스트</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5D4037]">
                  {results.filter(r => r.isSynced).length}
                </div>
                <div className="text-sm text-[#8D6E63]">동기화됨</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5D4037]">
                  {new Set(results.map(r => r.testId)).size}
                </div>
                <div className="text-sm text-[#8D6E63]">테스트 종류</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#5D4037]">
                  {formatDate(Math.min(...results.map(r => r.timestamp)))}
                </div>
                <div className="text-sm text-[#8D6E63]">첫 테스트</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 