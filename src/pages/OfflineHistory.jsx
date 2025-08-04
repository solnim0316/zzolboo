import { useEffect } from 'react';
import OfflineHistory from '../components/common/OfflineHistory';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

/**
 * 📊 오프라인 히스토리 페이지
 * - 로컬에 저장된 테스트 결과들을 관리
 * - 오프라인 데이터베이스 상태 확인
 */
export default function OfflineHistoryPage() {
  // 페이지 제목 설정
  useEffect(() => {
    document.title = '내 테스트 히스토리 - 쫄부월드';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <OfflineHistory />
      </main>
      <Footer />
    </div>
  );
} 