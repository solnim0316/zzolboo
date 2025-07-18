import { useState, useEffect } from 'react';

// 테스트 진행 상태를 관리하는 훅
export const useTestProgress = (totalQuestions) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const nextQuestion = (answer) => {
    setAnswers(prev => [...prev, answer]);
    
    if (currentQuestion + 1 >= totalQuestions) {
      setIsCompleted(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setAnswers(prev => prev.slice(0, -1));
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  return {
    currentQuestion,
    answers,
    isCompleted,
    progress: Math.round((currentQuestion / totalQuestions) * 100),
    nextQuestion,
    prevQuestion,
    resetTest
  };
};
