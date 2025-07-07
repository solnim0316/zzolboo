import React, { useState } from 'react';
import styles from '../../styles/dinoTest.module.css';
import dinoTestQuestions from '../../data/dinoTestQuestions';
import dinoTestResults from '../../data/dinoTestResults';
import { getDinoCardData } from '../../data/getDinoCardData';
import ResultPage from '../../pages/ResultPage';

const 초기점수 = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

const DinoTest = () => {
  const [단계, 단계변경] = useState('start'); // start, question, result
  const [이름, 이름변경] = useState('');
  const [문항번호, 문항번호변경] = useState(0);
  const [점수, 점수변경] = useState({ ...초기점수 });
  const [결과MBTI, 결과MBTI변경] = useState('');

  const 시작하기 = () => {
    if (!이름.trim()) {
      alert('이름을 입력해주세요!');
      return;
    }
    단계변경('question');
  };

  const 선택하기 = (type) => {
    점수변경(prev => ({ ...prev, [type]: prev[type] + 1 }));
    if (문항번호 + 1 < dinoTestQuestions.length) {
      문항번호변경(문항번호 + 1);
    } else {
      // 결과 계산
      const mbti = getMBTI();
      결과MBTI변경(mbti);
      단계변경('result');
    }
  };

  const getMBTI = () => {
    // 완벽히 균형일 때는 ???
    if (
      점수.E === 점수.I &&
      점수.S === 점수.N &&
      점수.T === 점수.F &&
      점수.J === 점수.P
    ) {
      return '???';
    }
    return (
      (점수.E >= 점수.I ? 'E' : 'I') +
      (점수.S >= 점수.N ? 'S' : 'N') +
      (점수.T >= 점수.F ? 'T' : 'F') +
      (점수.J >= 점수.P ? 'J' : 'P')
    );
  };

  const 다시하기 = () => {
    단계변경('start');
    이름변경('');
    문항번호변경(0);
    점수변경({ ...초기점수 });
    결과MBTI변경('');
  };

  // 시작 화면
  if (단계 === 'start') {
    return (
      <div className={styles.dinoTestWrapper}>
        <h1>성격유형별 공룡 테스트</h1>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={이름}
          onChange={e => 이름변경(e.target.value)}
          style={{ margin: '10px auto', display: 'block', width: '80%', maxWidth: 300, textAlign: 'center' }}
        />
        <button onClick={시작하기}>테스트 시작하기</button>
      </div>
    );
  }

  // 질문 화면
  if (단계 === 'question') {
    const q = dinoTestQuestions[문항번호];
    const 진행률 = ((문항번호 + 1) / dinoTestQuestions.length) * 100;
    return (
      <div className={styles.dinoTestWrapper}>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: `${진행률}%` }} />
        </div>
        <h3>{q.question}</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {q.options.map((opt, idx) => (
            <li
              key={idx}
              className={styles.option}
              onClick={() => 선택하기(opt.type)}
              style={{ margin: '0.5rem 0', padding: '0.8rem', background: '#fce4ec', borderRadius: 10, cursor: 'pointer' }}
            >
              {opt.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // 결과 화면
  if (단계 === 'result') {
    return (
      <div className={styles.dinoTestWrapper}>
        <ResultPage mbti={결과MBTI} />
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <div style={{ marginBottom: 8 }}><b>{이름}</b>님의 결과입니다.</div>
          <button onClick={다시하기}>다시 하기</button>
        </div>
      </div>
    );
  }

  return null;
};

export default DinoTest;
