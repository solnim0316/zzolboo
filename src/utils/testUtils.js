// 테스트 관련 유틸리티 함수들
export const calculateTestResult = (answers) => {
  // 답변 배열을 받아서 결과를 계산
  // 예: MBTI 스타일 결과 계산 로직
  return {
    type: 'ENFP',
    score: 85,
    description: '활발하고 창의적인 성격'
  };
};

export const formatTestProgress = (current, total) => {
  return `${current}/${total} (${Math.round((current / total) * 100)}%)`;
};

export const getTestById = (testId, testList) => {
  return testList.find(test => test.id === testId);
};

export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
