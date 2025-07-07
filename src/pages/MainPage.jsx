import React, { useEffect, useState } from 'react';
import styles from '../styles/mainPage.module.css';

function MainPage() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const loadTests = async () => {
      try {
        console.log('🔄 tests.json fetch 시작');
        const res = await fetch(process.env.PUBLIC_URL + '/tests.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setTests(data);
        console.log('✅ tests.json fetch 성공:', data);
      } catch (err) {
        setFetchError(err);
        console.error('❌ Failed to fetch tests.json:', err);
      } finally {
        setLoading(false);
        console.log('⏹️ loading 상태 false로 변경');
      }
    };
    loadTests();
  }, []);

  const handleCardClick = (url) => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  };

  return (
    <div>
      {/* loadingScreen이 화면 전체를 덮지 않도록 zIndex, position 등 CSS를 점검하세요 */}
      {loading && (
        <div className={styles.loadingScreen} style={{ position: 'fixed', inset: 0, background: 'rgba(255,255,255,0.8)', zIndex: 1000 }}>
          <div>날 알아 가는 중...</div>
        </div>
      )}

      {/* fetch 에러 발생 시 명확하게 표시 */}
      {fetchError && (
        <div style={{ color: 'red', padding: 20, background: '#fff', zIndex: 2000, position: 'relative' }}>
          tests.json을 불러오는 중 오류가 발생했습니다.<br />
          {String(fetchError)}
        </div>
      )}

      <header className={styles.siteHeader}>
        <img src="/img/logo_naragaja.png" alt="날아가자 로고" className={styles.siteLogo} />
        <p className={styles.siteSubtitle}>오늘도 테스트로 날 알아가자 ✦</p>
      </header>

      <section className={styles.mainBanner}>
        <div className={styles.bannerTitle}>
          <img src="/img/logo_naragaja.png" alt="메인로고" className={styles.bannerLogo} />
          <span className={styles.bannerTitleText}>쫄부월드</span>
        </div>
        <h2 className={styles.bannerDesc}>감성 테스트 시작해볼까요?</h2>
        <button className={styles.viewAllBtn} onClick={() => handleCardClick('index.html')}>
          전체보기
        </button>
      </section>

      <section className={styles.recommendSection}>
        <div className={styles.recommendTitle}>이주의 추천 테스트</div>
        <div className={styles.recommendCard}>
          <img src="/img/testo_vs_egen_thumb.png" alt="테토 vs 에겐 썸네일" className={styles.recommendThumb} />
          <div className={styles.recommendInfo}>
            <div className={styles.recommendDesc}>테토 vs 에겐 테스트</div>
            <button
              className={styles.recommendBtn}
              onClick={() => handleCardClick('tests/testo-egen/index.html')}
            >
              테스트하기
            </button>
          </div>
        </div>
      </section>

      <section className={styles.popularSection}>
        <div className={styles.popularTitle}>인기 테스트 TOP 3</div>
        <ol className={styles.popularList}>
          {tests.slice(0, 3).map((test, idx) => (
            <li key={test.title + idx}>{test.title}</li>
          ))}
        </ol>
      </section>

      <section className={styles.hashtagSection}>
        {['#고양이', '#산리오', '#연애', '#MBTI'].map((tag, idx) => (
          <span key={idx} className={styles.hashtag}>
            {tag}
          </span>
        ))}
      </section>

      <main className={styles.cardContainer}>
        {tests.map((test, idx) => (
          <a
            key={test.title + idx}
            href={test.url}
            className={styles.testCard}
            onClick={(e) => {
              e.preventDefault();
              handleCardClick(test.url);
            }}
          >
            <img src={`/${test.img}`} alt={test.title} className={styles.testCardImg} />
            <div>
              <h3 className={styles.testCardTitle}>{test.title}</h3>
              <p className={styles.testCardDesc}>{test.desc}</p>
            </div>
          </a>
        ))}
      </main>
    </div>
  );
}

export default MainPage;
