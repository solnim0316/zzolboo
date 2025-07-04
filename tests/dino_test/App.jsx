import React, { useState } from 'react';
import ShareCard from './img/share_card.jsx';
import './style.css';
import { questions } from './dino_data.js';
import { DINO_CARD_MAP } from './dino_card_map.js';

function getMBTI(scores) {
  if (
    scores.E === scores.I &&
    scores.S === scores.N &&
    scores.T === scores.F &&
    scores.J === scores.P
  ) {
    return '???';
  }
  return (
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P')
  );
}

function App() {
  const [step, setStep] = useState('start');
  const [userName, setUserName] = useState('');
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 });
  const [mbti, setMbti] = useState('');

  function handleStart() {
    if (!userName.trim()) {
      alert('이름을 입력해주세요!');
      return;
    }
    setStep('question');
  }

  function handleOption(type) {
    setScores(prev => ({ ...prev, [type]: prev[type] + 1 }));
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      // 결과 계산
      const finalScores = { ...scores, [type]: scores[type] + 1 };
      const mbtiResult = getMBTI(finalScores);
      setMbti(mbtiResult);
      setStep('result');
    }
  }

  function handleRestart() {
    setStep('start');
    setUserName('');
    setCurrentQ(0);
    setScores({ E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 });
    setMbti('');
  }

  return (
    <div className="app-container">
      {step === 'start' && (
        <StartScreen userName={userName} setUserName={setUserName} onStart={handleStart} />
      )}
      {step === 'question' && (
        <QuestionScreen
          q={questions[currentQ]}
          qIdx={currentQ}
          total={questions.length}
          onOption={handleOption}
        />
      )}
      {step === 'result' && mbti && (
        <ResultScreen
          userName={userName}
          mbti={mbti}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

function StartScreen({ userName, setUserName, onStart }) {
  return (
    <div className="start">
      <h1>성격유형별 공룡 테스트</h1>
      <p>나는 어떤 공룡이었을까?</p>
      <input value={userName} onChange={e => setUserName(e.target.value)} placeholder="이름을 입력하세요" />
      <button onClick={onStart}>테스트 시작하기</button>
    </div>
  );
}

function QuestionScreen({ q, qIdx, total, onOption }) {
  return (
    <div className="question">
      <div className="progress"><div className="progress-bar" style={{ width: `${((qIdx+1)/total)*100}%` }} /></div>
      <h3>{q.question}</h3>
      <ul>
        {q.options.map((o, i) => (
          <li key={i} onClick={() => onOption(o.type)}>{o.text}</li>
        ))}
      </ul>
    </div>
  );
}

function ResultScreen({ userName, mbti, onRestart }) {
  const card = DINO_CARD_MAP[mbti];
  if (!card) return <div>결과를 찾을 수 없습니다.<br/>MBTI: {mbti}</div>;
  return (
    <div className="result">
      <h2>{userName}님의 결과: {card.mbti} – {card.character}</h2>
      <ShareCard {...card} />
      <button onClick={onRestart}>다시 하기</button>
    </div>
  );
}

export default App;
