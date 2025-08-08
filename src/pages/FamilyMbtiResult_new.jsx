// 👩‍👧‍👦 우리 엄마 MBTI 테스트 결과 페이지
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { familyMbtiTestData } from '../data/familyMbtiTestData';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SocialShare from '../components/common/SocialShare';

export default function FamilyMbtiResult() {
  const { resultType } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  // 결과 데이터 준비

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // 결과 데이터 가져오기
  const result = familyMbtiTestData.results[resultType];
  
  if (!result) {
    return (
      <div style={{ 
        backgroundColor: 'yellow', 
        color: 'black', 
        padding: '20px', 
        minHeight: '100vh',
        fontSize: '20px'
      }}>
        <h1>결과를 찾을 수 없습니다</h1>
        <p>resultType: {resultType}</p>
        <button onClick={() => navigate('/family-mbti')}>테스트 다시하기</button>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: 'red', 
      color: 'white', 
      padding: '20px', 
      minHeight: '100vh',
      fontSize: '20px'
    }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>
        우리 엄마 MBTI 결과!
      </h1>
      <p>resultType: {resultType}</p>
      <p>MBTI 타입: {result.type}</p>
      <p>제목: {result.title}</p>
      <p>역할: {result.role}</p>
      <button 
        onClick={() => navigate('/family-mbti')}
        style={{ 
          backgroundColor: 'blue', 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        테스트로 돌아가기
      </button>
    </div>
  );
}
