// 💘 연애 습관 테스트 데이터
// "나를 가장 힘들게 했던 연애 습관은?"

export const loveHabitTestData = {
  title: "나를 가장 힘들게 했던 연애 습관은?",
  description: "연애할 때 나도 모르게 반복되는 습관, 알고 보면 다 이유가 있어요",
  emoji: "💘",
  questions: [
    {
      id: 1,
      question: "썸 타는 사람이 연락이 줄었을 때, 네 반응은?",
      options: [
        { text: "가만히 있어. 나한텐 관심 없나 싶어서.", scores: { ice: 3, clingy: 1, jealous: 1, perfectionist: 1 } },
        { text: "괜히 바쁜 척하면서 더 늦게 답장함.", scores: { ice: 2, clingy: 1, jealous: 2, perfectionist: 2 } },
        { text: "먼저 연락해볼까 고민하다가 참아.", scores: { ice: 1, clingy: 2, jealous: 1, perfectionist: 3 } },
        { text: "\"요즘 바빠?\" 하고 먼저 말 걸어봄.", scores: { ice: 1, clingy: 3, jealous: 1, perfectionist: 1 } }
      ]
    },
    {
      id: 2,
      question: "연인과 데이트 중에 다른 커플을 봤을 때?",
      options: [
        { text: "우리도 저렇게 행복했으면 좋겠다.", scores: { ice: 1, clingy: 2, jealous: 1, perfectionist: 3 } },
        { text: "저 사람들도 우리만큼 잘 될까?", scores: { ice: 2, clingy: 1, jealous: 3, perfectionist: 1 } },
        { text: "그냥 지나가. 우리만의 시간이니까.", scores: { ice: 3, clingy: 1, jealous: 1, perfectionist: 2 } },
        { text: "우리도 저렇게 보이겠지? 기분 좋다.", scores: { ice: 1, clingy: 3, jealous: 1, perfectionist: 1 } }
      ]
    },
    {
      id: 3,
      question: "연인이 늦게 연락했을 때의 기분은?",
      options: [
        { text: "뭐가 그렇게 바쁜 거지? 불안해져.", scores: { ice: 1, clingy: 3, jealous: 2, perfectionist: 1 } },
        { text: "나도 바쁜 척 해야겠다.", scores: { ice: 2, clingy: 1, jealous: 3, perfectionist: 1 } },
        { text: "괜찮아. 각자 할 일이 있으니까.", scores: { ice: 3, clingy: 1, jealous: 1, perfectionist: 2 } },
        { text: "왜 이렇게 늦게 연락하는지 궁금해.", scores: { ice: 1, clingy: 2, jealous: 1, perfectionist: 3 } }
      ]
    },
    {
      id: 4,
      question: "연인이 다른 이성과 대화하는 걸 봤을 때?",
      options: [
        { text: "뭐라고 하는지 귀 기울여 들어.", scores: { ice: 1, clingy: 2, jealous: 3, perfectionist: 1 } },
        { text: "나도 다른 사람과 대화해보자.", scores: { ice: 2, clingy: 1, jealous: 2, perfectionist: 2 } },
        { text: "그냥 지나가. 신뢰하니까.", scores: { ice: 3, clingy: 1, jealous: 1, perfectionist: 2 } },
        { text: "나랑은 왜 저렇게 대화 안 하지?", scores: { ice: 1, clingy: 3, jealous: 1, perfectionist: 2 } }
      ]
    },
    {
      id: 5,
      question: "연인이 실수했을 때의 반응은?",
      options: [
        { text: "괜찮아. 누구나 실수할 수 있어.", scores: { ice: 3, clingy: 1, jealous: 1, perfectionist: 1 } },
        { text: "왜 이렇게 실수를 자주 하지?", scores: { ice: 1, clingy: 1, jealous: 2, perfectionist: 3 } },
        { text: "나도 실수할 수 있으니까 이해해.", scores: { ice: 2, clingy: 2, jealous: 1, perfectionist: 2 } },
        { text: "다음엔 더 조심했으면 좋겠어.", scores: { ice: 1, clingy: 1, jealous: 1, perfectionist: 3 } }
      ]
    },
    {
      id: 6,
      question: "연인이 나를 칭찬했을 때?",
      options: [
        { text: "정말? 진짜로 그렇게 생각해?", scores: { ice: 1, clingy: 2, jealous: 1, perfectionist: 3 } },
        { text: "고마워. 너도 정말 좋아.", scores: { ice: 2, clingy: 3, jealous: 1, perfectionist: 1 } },
        { text: "그래? 나는 별로인데.", scores: { ice: 3, clingy: 1, jealous: 1, perfectionist: 2 } },
        { text: "더 칭찬해줘. 기분 좋아.", scores: { ice: 1, clingy: 3, jealous: 1, perfectionist: 1 } }
      ]
    },
    {
      id: 7,
      question: "연인과 헤어질 때의 기분은?",
      options: [
        { text: "다시 언제 만날까? 벌써 보고 싶어.", scores: { ice: 1, clingy: 3, jealous: 1, perfectionist: 1 } },
        { text: "각자 할 일이 있으니까 괜찮아.", scores: { ice: 3, clingy: 1, jealous: 1, perfectionist: 2 } },
        { text: "다음엔 더 오래 만나자.", scores: { ice: 1, clingy: 2, jealous: 1, perfectionist: 2 } },
        { text: "혹시 다른 사람 만나진 않을까?", scores: { ice: 1, clingy: 1, jealous: 3, perfectionist: 1 } }
      ]
    },
    {
      id: 8,
      question: "연인이 나의 취미에 관심을 보일 때?",
      options: [
        { text: "정말? 같이 해보고 싶어?", scores: { ice: 1, clingy: 3, jealous: 1, perfectionist: 1 } },
        { text: "그냥 관심만 보이는 거겠지.", scores: { ice: 3, clingy: 1, jealous: 1, perfectionist: 2 } },
        { text: "나도 네 취미에 관심 가져.", scores: { ice: 2, clingy: 2, jealous: 1, perfectionist: 2 } },
        { text: "완벽하게 보여주고 싶어.", scores: { ice: 1, clingy: 1, jealous: 1, perfectionist: 3 } }
      ]
    },
    {
      id: 9,
      question: "연인이 나에게 화를 냈을 때?",
      options: [
        { text: "왜 화를 내는지 꼭 알아내야겠어.", scores: { ice: 1, clingy: 2, jealous: 1, perfectionist: 3 } },
        { text: "나도 화내면 되겠지.", scores: { ice: 2, clingy: 1, jealous: 3, perfectionist: 1 } },
        { text: "시간이 지나면 괜찮아질 거야.", scores: { ice: 3, clingy: 1, jealous: 1, perfectionist: 2 } },
        { text: "내가 뭘 잘못했을까? 미안해.", scores: { ice: 1, clingy: 3, jealous: 1, perfectionist: 2 } }
      ]
    },
    {
      id: 10,
      question: "연인이 나를 놀려댈 때?",
      options: [
        { text: "재미있게 받아들여. 장난이니까.", scores: { ice: 3, clingy: 1, jealous: 1, perfectionist: 1 } },
        { text: "나도 너를 놀려봐야겠어.", scores: { ice: 2, clingy: 1, jealous: 2, perfectionist: 2 } },
        { text: "진짜로 그렇게 생각하는 건 아니지?", scores: { ice: 1, clingy: 2, jealous: 1, perfectionist: 3 } },
        { text: "너도 나만큼 귀여워.", scores: { ice: 1, clingy: 3, jealous: 1, perfectionist: 1 } }
      ]
    }
  ],
  results: {
    ice: {
      title: "🧊 감정 얼음 껍질 – '괜찮은 척병'",
      description: `"괜찮아~"가 입버릇처럼 붙어버린 당신. 마음속으론 별일 다 생기는데, 겉으론 멀쩡한 척 잘하네? 사실은 누가 조금만 물어봐줬으면 다 쏟아낼 준비도 돼 있었잖아. 근데 자꾸 참다 보니까, 나도 내가 진짜 괜찮은 줄 알겠더라고. 가끔은 나도 "나 속상해!" 하고 말해도 괜찮아. 다음 연애에선 꼭, 감정도 같이 나누자. 그래야 덜 지쳐💬`,
      characteristics: [
        "감정을 숨기는 전문가",
        "혼자서 모든 걸 해결하려 함",
        "타인의 걱정을 최소화하려 함"
      ],
      advice: "감정을 표현하는 것도 용기예요. 진짜 괜찮지 않을 때는 괜찮지 않다고 말해보세요."
    },
    clingy: {
      title: "🫂 애착 불안형 – '사랑 중독자'",
      description: `연인과 떨어져 있으면 불안해지는 당신. "지금 뭐해?", "언제 만나?", "보고 싶어"가 일상이 되어버렸네. 사실은 너무 사랑해서 그런 거야. 하지만 너무 자주 연락하면 상대방이 부담스러워할 수도 있어. 가끔은 각자의 시간도 필요해. 연인도 당신만의 세계가 아니라 독립적인 사람이니까. 조금씩 거리를 두면서도 서로를 신뢰하는 연애를 해보자. 그래야 더 건강한 사랑이 될 거야💕`,
      characteristics: [
        "연인과의 끊임없는 소통 욕구",
        "떨어져 있을 때 불안감",
        "애착 관계에 대한 강한 의존"
      ],
      advice: "각자의 시간도 소중해요. 독립적인 개인으로서의 시간을 가져보세요."
    },
    jealous: {
      title: "👁️ 질투의 눈 – '소유욕 폭발형'",
      description: `연인이 다른 사람과 대화하는 것만 봐도 속이 타는 당신. "나만 바라봐"라는 마음이 너무 강해서, 상대방의 일상적인 대화도 의심하게 만들어. 사실은 너무 사랑해서 그런 거지만, 과도한 질투는 관계를 망칠 수 있어. 신뢰가 없으면 사랑도 없다는 걸 기억해. 연인을 믿어주고, 각자의 인간관계도 존중해주자. 그래야 더 건강하고 오래가는 사랑이 될 거야💝`,
      characteristics: [
        "연인의 모든 관계를 의심",
        "소유욕이 강함",
        "신뢰 관계 구축에 어려움"
      ],
      advice: "사랑은 소유가 아니라 신뢰예요. 상대방을 믿어주는 연애를 해보세요."
    },
    perfectionist: {
      title: "✨ 완벽주의자 – '이상적 연애병'",
      description: `모든 걸 완벽하게 하고 싶어하는 당신. 연인 관계도 마찬가지로, 실수 하나 없이 완벽한 연애를 꿈꿔. 하지만 완벽한 사람은 없어. 실수하고, 실패하고, 그 과정에서 서로를 더 깊이 이해하게 되는 거야. 완벽함보다는 진실함이 더 소중해. 가끔은 실수해도 괜찮아. 그 실수들이 모여서 더 특별한 추억이 될 거야. 완벽하지 않아도 충분히 아름다운 연애를 해보자🌟`,
      characteristics: [
        "완벽한 관계를 추구",
        "실수에 대한 두려움",
        "이상적인 연애를 꿈꿈"
      ],
      advice: "완벽함보다 진실함이 소중해요. 실수해도 괜찮은 관계를 만들어보세요."
    },
    mixed1: {
      title: "🎭 감정 변덕쟁이 – '기분 날씨형'",
      description: `오늘은 행복한데, 내일은 불안하고, 모레는 질투나고... 감정이 마치 날씨처럼 변덕스러운 당신. 연인도 당신의 감정 변화를 따라가기 힘들어할 거야. 하지만 그게 당신만의 매력이기도 해. 다만, 감정이 너무 극단적일 때는 잠깐 멈춰서 생각해보자. "왜 이렇게 기분이 나쁜 걸까?" 하고 스스로에게 물어보는 시간을 가져보자. 감정을 이해하면 조절할 수도 있어🌈`,
      characteristics: [
        "감정 변화가 심함",
        "상황에 따른 극단적 반응",
        "자신의 감정을 이해하기 어려움"
      ],
      advice: "감정을 관찰하고 이해하는 시간을 가져보세요. 감정의 원인을 찾아보세요."
    },
    mixed2: {
      title: "🔄 순환형 습관 – '패턴 반복형'",
      description: `같은 실수를 계속 반복하는 당신. "다음엔 다르게 해야지"라고 다짐하지만, 또 같은 상황이 오면 예전처럼 행동해버려. 하지만 그게 당신만의 문제는 아니야. 사람은 누구나 익숙한 패턴을 반복하는 경향이 있어. 중요한 건 그 패턴을 인식하고, 조금씩 바꿔나가는 거야. 완전히 바뀌지 않아도 괜찮아. 조금씩, 천천히, 자신을 이해하면서 성장해보자🔄`,
      characteristics: [
        "비슷한 패턴을 반복",
        "변화에 대한 두려움",
        "습관적 행동 패턴"
      ],
      advice: "패턴을 인식하는 것부터 시작해보세요. 조금씩 바꿔나가면 됩니다."
    },
    mixed3: {
      title: "🎪 연극적 연애 – '드라마 중독형'",
      description: `평온한 연애보다는 드라마틱한 상황을 선호하는 당신. "이게 진짜 사랑인가?" 싶을 정도로 감정의 기복이 심해. 하지만 그런 극적인 상황들이 당신을 지치게 만들 수도 있어. 가끔은 조용하고 평온한 사랑도 좋아. 커피 한 잔 마시면서 이야기하는 시간, 손을 잡고 산책하는 시간... 그런 소소한 순간들이 모여서 진짜 사랑이 되는 거야☕`,
      characteristics: [
        "극적인 상황을 선호",
        "감정의 기복이 심함",
        "평온한 관계에 지루함을 느낌"
      ],
      advice: "소소한 일상의 아름다움도 발견해보세요. 평온한 사랑도 소중해요."
    },
    mixed4: {
      title: "🎯 목표 지향형 – '계획적 연애병'",
      description: `연애도 계획적으로 하고 싶어하는 당신. "언제까지 어디까지"라는 목표를 세우고, 그에 맞춰서 관계를 발전시키려고 해. 하지만 사랑은 계획대로 되지 않아. 예상치 못한 상황들이 생기고, 그 과정에서 더 깊은 사랑을 발견하게 되는 거야. 가끔은 계획을 내려놓고, 순간순간을 즐겨보자. 계획보다는 마음이 가는 대로, 자연스럽게 흘러가는 연애를 해보자🎯`,
      characteristics: [
        "연애에도 목표와 계획을 세움",
        "예측 가능한 관계를 선호",
        "통제하고 싶어하는 성향"
      ],
      advice: "계획보다는 마음이 가는 대로 해보세요. 자연스러운 흐름을 즐겨보세요."
    },
    mixed5: {
      title: "🛡️ 방어적 연애 – '상처 회피형'",
      description: `이전 연애에서 상처를 받아서, 이번엔 조심조심하는 당신. "다시 상처받고 싶지 않아"라는 마음이 너무 강해서, 진짜 사랑을 놓칠 수도 있어. 하지만 완전히 안전한 사랑은 없어. 사랑은 늘 위험을 동반해. 그 위험을 감수할 용기가 있어야 진짜 사랑을 만날 수 있어. 조금씩 마음을 열어보자. 상처받을 수도 있지만, 그만큼 깊은 사랑을 경험할 수도 있어🛡️`,
      characteristics: [
        "이전 상처로 인한 방어적 태도",
        "감정 표현에 조심스러움",
        "진짜 사랑에 대한 두려움"
      ],
      advice: "상처받을 용기를 가져보세요. 진짜 사랑은 위험을 감수해야 합니다."
    },
    mixed6: {
      title: "🎨 창조적 연애 – '예술가형'",
      description: `연애를 하나의 예술 작품처럼 생각하는 당신. 매 순간을 특별하게 만들고 싶어하고, 창의적인 방법으로 사랑을 표현해. 하지만 너무 완벽한 연애를 추구하다 보니, 자연스러운 모습을 놓칠 수도 있어. 가끔은 완벽하지 않아도 괜찮아. 실수하고, 어색하고, 그래도 서로를 사랑하는 그런 자연스러운 연애를 해보자. 그게 더 아름다운 예술 작품이 될 거야🎨`,
      characteristics: [
        "연애를 예술로 생각",
        "창의적인 사랑 표현",
        "완벽한 순간을 추구"
      ],
      advice: "자연스러운 모습도 아름다워요. 완벽하지 않아도 괜찮습니다."
    },
    mixed7: {
      title: "🌱 성장 지향형 – '자기계발병'",
      description: `연애를 통해 자신을 성장시키고 싶어하는 당신. "이 연애를 통해 나는 어떤 사람이 될까?"를 항상 생각해. 하지만 너무 성장에만 집중하다 보니, 현재의 행복을 놓칠 수도 있어. 가끔은 성장보다는 행복을, 미래보다는 현재를 생각해보자. 지금 이 순간, 연인과 함께 있는 시간이 얼마나 소중한지 기억해. 그 소중한 순간들이 모여서 더 나은 사람이 되는 거야🌱`,
      characteristics: [
        "연애를 통한 성장 추구",
        "자기계발에 대한 강한 욕구",
        "미래 지향적 사고"
      ],
      advice: "현재의 행복도 소중해요. 성장과 함께 지금의 순간도 즐겨보세요."
    },
    mixed8: {
      title: "🎭 다면적 연애 – '변신 능력자'",
      description: `상황에 따라 다른 모습을 보이는 당신. 연인 앞에서는 한 모습, 친구들 앞에서는 또 다른 모습... 하지만 그게 당신의 진짜 모습일까? 너무 많은 가면을 쓰다 보니, 진짜 자신을 잃어버릴 수도 있어. 가끔은 모든 가면을 벗고, 진짜 모습으로 연인과 마주해보자. 진짜 모습을 보여줘도 사랑받을 수 있다는 걸 기억해. 그게 진짜 사랑이야🎭`,
      characteristics: [
        "상황에 따른 다양한 모습",
        "진짜 자신을 숨기는 경향",
        "적응력이 뛰어남"
      ],
      advice: "진짜 모습을 보여주세요. 가면을 벗어도 사랑받을 수 있어요."
    }
  }
};

// 점수 계산 함수
export const calculateLoveHabitResult = (answers) => {
  const scores = {
    ice: 0,
    clingy: 0,
    jealous: 0,
    perfectionist: 0
  };

  // 각 답변의 점수를 합산
  answers.forEach(answer => {
    Object.keys(answer.scores).forEach(key => {
      scores[key] += answer.scores[key];
    });
  });

  // 최고 점수 찾기
  const maxScore = Math.max(...Object.values(scores));
  const dominantTypes = Object.keys(scores).filter(key => scores[key] === maxScore);

  // 결과 결정 로직
  if (dominantTypes.length === 1) {
    return dominantTypes[0]; // 단일 우세 타입
  } else {
    // 혼합 타입 결정 (점수 조합에 따라)
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    const averageScore = totalScore / 4;
    
    if (scores.ice > averageScore && scores.clingy > averageScore) return 'mixed1';
    if (scores.jealous > averageScore && scores.perfectionist > averageScore) return 'mixed2';
    if (scores.ice > averageScore && scores.jealous > averageScore) return 'mixed3';
    if (scores.clingy > averageScore && scores.perfectionist > averageScore) return 'mixed4';
    if (scores.ice > averageScore && scores.perfectionist > averageScore) return 'mixed5';
    if (scores.clingy > averageScore && scores.jealous > averageScore) return 'mixed6';
    if (scores.ice > averageScore) return 'mixed7';
    if (scores.clingy > averageScore) return 'mixed8';
    
    return 'mixed1'; // 기본값
  }
}; 