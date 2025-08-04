// 🎭 테토에겐 테스트 데이터
export const tetogenTestData = {
  // 📝 기본 정보
  title: "테토에겐 테스트",
  description: "당신은 테토인가요, 에겐인가요? 🎭",
  emoji: "🎭",
  
  // 👤 사용자 정보 입력
  userInfo: {
    name: "",
    gender: ""
  },
  
  // 🎯 결과 유형들
  results: {
    "tetogen-male": {
      title: "테토남 🎭",
      emoji: "🎭",
      description: `안녕하세요! 당신은 테토남입니다! 🎭
      
당신은 낮에는 차분하고 이성적인 모습을 보이지만, 밤이 되면 완전히 다른 사람이 되는 매력적인 이중성을 가지고 있어요. 

주변 사람들은 당신의 이런 변화에 매료되어 끊임없이 관심을 보일 거예요. 특히 낮의 차분함과 밤의 열정적인 모습 사이의 극적인 대비가 당신만의 특별한 매력이죠!

하지만 때로는 이런 이중성이 스트레스가 될 수도 있어요. 자신의 감정을 더 솔직하게 표현하는 연습을 해보는 건 어떨까요?`,
      
      compatibleTypes: ["에겐녀", "테토녀"],
      improvement: "감정 표현을 더 솔직하게 하기, 스트레스 관리법 익히기",
      mbti: "INTJ, ENTP일 확률이 높아요!",
      probability: 25
    },
    
    "eggen-male": {
      title: "에겐남 🌙",
      emoji: "🌙", 
      description: `와! 당신은 에겐남이네요! 🌙
      
당신은 밤의 에너지를 타고 태어난 사람! 낮에는 조용하고 신중하지만, 해가 지면 완전히 각성하는 밤의 지배자예요.

밤이 되면 당신의 창의력과 직감이 폭발적으로 증가하고, 깊이 있는 대화와 철학적 사고를 즐기는 진정한 지성인이 돼요. 

주변 사람들은 당신의 이런 밤의 매력에 완전히 빠져들 거예요. 특히 당신의 깊이 있는 통찰력과 밤의 로맨틱한 분위기가 조화를 이룰 때는 그야말로 완벽한 순간이죠!`,
      
      compatibleTypes: ["테토녀", "에겐녀"],
      improvement: "낮 시간대 활동량 늘리기, 규칙적인 생활 리듬 만들기",
      mbti: "INFJ, INFP일 확률이 높아요!",
      probability: 20
    },
    
    "tetogen-female": {
      title: "테토녀 🎭",
      emoji: "🎭",
      description: `오마이갓! 당신은 테토녀예요! 🎭
      
당신은 낮과 밤의 극적인 변화를 자랑하는 진정한 배우! 낮에는 활발하고 사교적이지만, 밤이 되면 깊이 있는 사색과 감성적인 모습을 보여주는 매력적인 여성이에요.

이런 극적인 변화는 당신만의 특별한 매력이자 무기예요. 주변 사람들은 당신의 이런 다면성을 보며 끊임없이 호기심을 느낄 거예요.

특히 당신의 낮의 에너지 넘치는 모습과 밤의 감성적인 모습 사이의 대비는 정말 매력적이죠!`,
      
      compatibleTypes: ["테토남", "에겐남"],
      improvement: "감정의 균형 잡기, 자기 표현의 일관성 찾기",
      mbti: "ENFP, ESFP일 확률이 높아요!",
      probability: 25
    },
    
    "eggen-female": {
      title: "에겐녀 🌙",
      emoji: "🌙",
      description: `와우! 당신은 에겐녀네요! 🌙
      
당신은 밤의 여신! 낮에는 조용하고 신중하지만, 밤이 되면 완전히 각성하는 밤의 여왕이에요.

밤이 되면 당신의 감성과 직감이 극대화되고, 깊이 있는 대화와 로맨틱한 분위기를 만들어내는 진정한 여성이 돼요.

주변 사람들은 당신의 이런 밤의 매력에 완전히 매료될 거예요. 특히 당신의 밤의 감성적인 모습과 깊이 있는 통찰력이 조화를 이룰 때는 그야말로 완벽한 순간이죠!`,
      
      compatibleTypes: ["에겐남", "테토남"],
      improvement: "낮 시간대 사회적 활동 늘리기, 자신감 키우기",
      mbti: "INFJ, INFP일 확률이 높아요!",
      probability: 20
    },
    
    "day-tetogen-night-eggen-male": {
      title: "낮테밤에남 🌅🌙",
      emoji: "🌅🌙",
      description: `특별해! 당신은 낮테밤에남이에요! 🌅🌙
      
당신은 정말 독특한 패턴을 가지고 있어요! 낮에는 테토처럼 활발하고 사교적이지만, 밤이 되면 에겐처럼 깊이 있는 사색을 즐기는 진정한 하이브리드 타입이에요.

이런 특별한 조합은 당신만의 독특한 매력이자 장점이에요. 낮에는 사람들과 잘 어울리고, 밤에는 깊이 있는 대화를 나눌 수 있는 완벽한 밸런스를 가지고 있죠.

주변 사람들은 당신의 이런 다재다능함에 감탄할 거예요!`,
      
      compatibleTypes: ["에겐녀", "테토녀"],
      improvement: "감정 변화 패턴 이해하기, 균형잡힌 생활 리듬 유지하기",
      mbti: "ENFJ, ENTP일 확률이 높아요!",
      probability: 8
    },
    
    "night-tetogen-day-eggen-male": {
      title: "밤테낮에남 🌙🌅",
      emoji: "🌙🌅",
      description: `와! 당신은 밤테낮에남이네요! 🌙🌅
      
당신은 정말 흥미로운 패턴을 가지고 있어요! 낮에는 에겐처럼 조용하고 신중하지만, 밤이 되면 테토처럼 활발하고 에너지 넘치는 모습을 보여주는 특별한 타입이에요.

이런 반전 매력은 정말 독특해요! 낮에는 깊이 있는 사색을 즐기고, 밤에는 사람들과 활발하게 어울릴 수 있는 완벽한 조합이죠.

주변 사람들은 당신의 이런 예상 밖의 매력에 놀라면서도 매료될 거예요!`,
      
      compatibleTypes: ["테토녀", "에겐녀"],
      improvement: "낮 시간대 에너지 관리하기, 밤의 활발함 조절하기",
      mbti: "INTJ, INTP일 확률이 높아요!",
      probability: 7
    },
    
    "day-tetogen-night-eggen-female": {
      title: "낮테밤에녀 🌅🌙",
      emoji: "🌅🌙",
      description: `오마이갓! 당신은 낮테밤에녀예요! 🌅🌙
      
당신은 정말 특별한 패턴을 가지고 있어요! 낮에는 테토처럼 활발하고 사교적이지만, 밤이 되면 에겐처럼 깊이 있는 감성과 직감을 보여주는 진정한 하이브리드 여성이에요.

이런 극적인 변화는 당신만의 특별한 매력이자 무기예요. 낮에는 에너지 넘치는 모습으로 사람들을 이끌고, 밤에는 깊이 있는 대화로 마음을 사로잡는 완벽한 조합이죠.

주변 사람들은 당신의 이런 다재다능함에 완전히 매료될 거예요!`,
      
      compatibleTypes: ["에겐남", "테토남"],
      improvement: "감정 변화 패턴 이해하기, 균형잡힌 생활 리듬 유지하기",
      mbti: "ENFJ, ENFP일 확률이 높아요!",
      probability: 8
    },
    
    "night-tetogen-day-eggen-female": {
      title: "밤테낮에녀 🌙🌅",
      emoji: "🌙🌅",
      description: `와우! 당신은 밤테낮에녀네요! 🌙🌅
      
당신은 정말 흥미로운 패턴을 가지고 있어요! 낮에는 에겐처럼 조용하고 신중하지만, 밤이 되면 테토처럼 활발하고 매력적인 모습을 보여주는 특별한 여성이에요.

이런 반전 매력은 정말 독특해요! 낮에는 깊이 있는 사색과 감성을 즐기고, 밤에는 사람들과 활발하게 어울릴 수 있는 완벽한 조합이죠.

주변 사람들은 당신의 이런 예상 밖의 매력에 놀라면서도 완전히 빠져들 거예요!`,
      
      compatibleTypes: ["테토남", "에겐남"],
      improvement: "낮 시간대 자신감 키우기, 밤의 활발함 조절하기",
      mbti: "INFJ, INFP일 확률이 높아요!",
      probability: 7
    }
  },
  
  // ❓ 질문들
  questions: [
    {
      id: 1,
      question: "새벽 3시, 갑자기 잠이 깼다면 당신은?",
      options: [
        { text: "다시 잠들기 위해 노력한다", score: { "tetogen-male": 2, "eggen-male": 3, "tetogen-female": 2, "eggen-female": 3 } },
        { text: "폰을 들고 SNS를 한다", score: { "tetogen-male": 3, "eggen-male": 1, "tetogen-female": 3, "eggen-female": 1 } },
        { text: "깊이 있는 생각에 빠진다", score: { "tetogen-male": 1, "eggen-male": 4, "tetogen-female": 1, "eggen-female": 4 } },
        { text: "새로운 아이디어가 떠올라서 메모한다", score: { "tetogen-male": 4, "eggen-male": 2, "tetogen-female": 4, "eggen-female": 2 } }
      ]
    },
    {
      id: 2,
      question: "친구들과 만나기로 한 날, 당신은?",
      options: [
        { text: "시간보다 일찍 도착해서 기다린다", score: { "tetogen-male": 2, "eggen-male": 3, "tetogen-female": 2, "eggen-female": 3 } },
        { text: "정확히 시간에 맞춰 도착한다", score: { "tetogen-male": 3, "eggen-male": 2, "tetogen-female": 3, "eggen-female": 2 } },
        { text: "5-10분 정도 늦게 도착한다", score: { "tetogen-male": 4, "eggen-male": 1, "tetogen-female": 4, "eggen-female": 1 } },
        { text: "늦을 것 같으면 미리 연락한다", score: { "tetogen-male": 1, "eggen-male": 4, "tetogen-female": 1, "eggen-female": 4 } }
      ]
    },
    {
      id: 3,
      question: "스트레스가 쌓였을 때 당신이 하는 일은?",
      options: [
        { text: "혼자만의 시간을 가진다", score: { "tetogen-male": 1, "eggen-male": 4, "tetogen-female": 1, "eggen-female": 4 } },
        { text: "친구들과 만나서 이야기한다", score: { "tetogen-male": 4, "eggen-male": 1, "tetogen-female": 4, "eggen-female": 1 } },
        { text: "운동이나 취미 활동을 한다", score: { "tetogen-male": 3, "eggen-male": 2, "tetogen-female": 3, "eggen-female": 2 } },
        { text: "음악을 들으며 깊이 있는 사색을 한다", score: { "tetogen-male": 2, "eggen-male": 3, "tetogen-female": 2, "eggen-female": 3 } }
      ]
    },
    {
      id: 4,
      question: "새로운 사람을 만났을 때 당신은?",
      options: [
        { text: "먼저 대화를 시작한다", score: { "tetogen-male": 4, "eggen-male": 1, "tetogen-female": 4, "eggen-female": 1 } },
        { text: "상대방이 먼저 말을 걸기를 기다린다", score: { "tetogen-male": 1, "eggen-male": 4, "tetogen-female": 1, "eggen-female": 4 } },
        { text: "상대방의 분위기를 파악한 후 적절히 대응한다", score: { "tetogen-male": 3, "eggen-male": 2, "tetogen-female": 3, "eggen-female": 2 } },
        { text: "공통 관심사를 찾아서 대화를 이끈다", score: { "tetogen-male": 2, "eggen-male": 3, "tetogen-female": 2, "eggen-female": 3 } }
      ]
    },
    {
      id: 5,
      question: "주말에 갑자기 시간이 생겼다면?",
      options: [
        { text: "집에서 혼자만의 시간을 즐긴다", score: { "tetogen-male": 1, "eggen-male": 4, "tetogen-female": 1, "eggen-female": 4 } },
        { text: "친구들과 만나기로 계획을 세운다", score: { "tetogen-male": 4, "eggen-male": 1, "tetogen-female": 4, "eggen-female": 1 } },
        { text: "새로운 장소나 활동을 시도해본다", score: { "tetogen-male": 3, "eggen-male": 2, "tetogen-female": 3, "eggen-female": 2 } },
        { text: "책을 읽거나 영화를 본다", score: { "tetogen-male": 2, "eggen-male": 3, "tetogen-female": 2, "eggen-female": 3 } }
      ]
    },
    {
      id: 6,
      question: "감정이 복잡할 때 당신은?",
      options: [
        { text: "혼자만의 시간을 가져서 정리한다", score: { "tetogen-male": 1, "eggen-male": 4, "tetogen-female": 1, "eggen-female": 4 } },
        { text: "친구에게 이야기해서 조언을 받는다", score: { "tetogen-male": 4, "eggen-male": 1, "tetogen-female": 4, "eggen-female": 1 } },
        { text: "다른 일에 집중해서 잊으려고 한다", score: { "tetogen-male": 3, "eggen-male": 2, "tetogen-female": 3, "eggen-female": 2 } },
        { text: "깊이 있는 사색을 통해 해결책을 찾는다", score: { "tetogen-male": 2, "eggen-male": 3, "tetogen-female": 2, "eggen-female": 3 } }
      ]
    },
    {
      id: 7,
      question: "새로운 도전을 할 때 당신은?",
      options: [
        { text: "신중하게 계획을 세운 후 시작한다", score: { "tetogen-male": 2, "eggen-male": 4, "tetogen-female": 2, "eggen-female": 4 } },
        { text: "일단 시작해보고 문제가 생기면 해결한다", score: { "tetogen-male": 4, "eggen-male": 1, "tetogen-female": 4, "eggen-female": 1 } },
        { text: "다른 사람의 조언을 구한 후 결정한다", score: { "tetogen-male": 3, "eggen-male": 2, "tetogen-female": 3, "eggen-female": 2 } },
        { text: "직감을 믿고 결정한다", score: { "tetogen-male": 1, "eggen-male": 3, "tetogen-female": 1, "eggen-female": 3 } }
      ]
    },
    {
      id: 8,
      question: "밤에 혼자 있을 때 당신은?",
      options: [
        { text: "폰을 들고 SNS나 게임을 한다", score: { "tetogen-male": 3, "eggen-male": 1, "tetogen-female": 3, "eggen-female": 1 } },
        { text: "책을 읽거나 음악을 듣는다", score: { "tetogen-male": 1, "eggen-male": 4, "tetogen-female": 1, "eggen-female": 4 } },
        { text: "내일 할 일을 계획한다", score: { "tetogen-male": 2, "eggen-male": 3, "tetogen-female": 2, "eggen-female": 3 } },
        { text: "친구들과 연락하거나 만날 계획을 세운다", score: { "tetogen-male": 4, "eggen-male": 2, "tetogen-female": 4, "eggen-female": 2 } }
      ]
    },
    {
      id: 9,
      question: "스트레스 상황에서 당신의 반응은?",
      options: [
        { text: "차분하게 상황을 분석한다", score: { "tetogen-male": 2, "eggen-male": 4, "tetogen-female": 2, "eggen-female": 4 } },
        { text: "즉시 행동으로 옮긴다", score: { "tetogen-male": 4, "eggen-male": 1, "tetogen-female": 4, "eggen-female": 1 } },
        { text: "다른 사람의 도움을 요청한다", score: { "tetogen-male": 3, "eggen-male": 2, "tetogen-female": 3, "eggen-female": 2 } },
        { text: "잠시 시간을 두고 생각한다", score: { "tetogen-male": 1, "eggen-male": 3, "tetogen-female": 1, "eggen-female": 3 } }
      ]
    },
    {
      id: 10,
      question: "새로운 환경에 적응할 때 당신은?",
      options: [
        { text: "천천히 주변을 관찰하며 적응한다", score: { "tetogen-male": 1, "eggen-male": 4, "tetogen-female": 1, "eggen-female": 4 } },
        { text: "적극적으로 사람들과 어울리며 적응한다", score: { "tetogen-male": 4, "eggen-male": 1, "tetogen-female": 4, "eggen-female": 1 } },
        { text: "기존 친구나 동료의 도움을 받는다", score: { "tetogen-male": 3, "eggen-male": 2, "tetogen-female": 3, "eggen-female": 2 } },
        { text: "새로운 환경의 장점을 찾아서 활용한다", score: { "tetogen-male": 2, "eggen-male": 3, "tetogen-female": 2, "eggen-female": 3 } }
      ]
    },
    {
      id: 11,
      question: "감정 표현에 대해 당신은?",
      options: [
        { text: "솔직하게 표현하는 편이다", score: { "tetogen-male": 4, "eggen-male": 1, "tetogen-female": 4, "eggen-female": 1 } },
        { text: "조심스럽게 표현한다", score: { "tetogen-male": 1, "eggen-male": 4, "tetogen-female": 1, "eggen-female": 4 } },
        { text: "상대방에 따라 다르게 표현한다", score: { "tetogen-male": 3, "eggen-male": 2, "tetogen-female": 3, "eggen-female": 2 } },
        { text: "행동으로 표현하는 편이다", score: { "tetogen-male": 2, "eggen-male": 3, "tetogen-female": 2, "eggen-female": 3 } }
      ]
    },
    {
      id: 12,
      question: "미래에 대해 생각할 때 당신은?",
      options: [
        { text: "구체적인 계획을 세운다", score: { "tetogen-male": 2, "eggen-male": 4, "tetogen-female": 2, "eggen-female": 4 } },
        { text: "일단 현재에 집중한다", score: { "tetogen-male": 4, "eggen-male": 1, "tetogen-female": 4, "eggen-female": 1 } },
        { text: "여러 가능성을 생각해본다", score: { "tetogen-male": 3, "eggen-male": 2, "tetogen-female": 3, "eggen-female": 2 } },
        { text: "직감을 믿고 흘러가는 대로 따른다", score: { "tetogen-male": 1, "eggen-male": 3, "tetogen-female": 1, "eggen-female": 3 } }
      ]
    }
  ]
};

// 🎯 결과 계산 함수
export const calculateTetogenResult = (answers, userInfo) => {
  const scores = {
    "tetogen-male": 0,
    "eggen-male": 0,
    "tetogen-female": 0,
    "eggen-female": 0,
    "day-tetogen-night-eggen-male": 0,
    "night-tetogen-day-eggen-male": 0,
    "day-tetogen-night-eggen-female": 0,
    "night-tetogen-day-eggen-female": 0
  };

  // 기본 점수 계산
  answers.forEach(answer => {
    const question = tetogenTestData.questions.find(q => q.id === answer.questionId);
    const selectedOption = question.options[answer.selectedOption];
    
    Object.keys(selectedOption.score).forEach(type => {
      scores[type] += selectedOption.score[type];
    });
  });

  // 성별에 따른 가중치 적용
  const gender = userInfo.gender;
  const genderMultiplier = 1.5; // 성별에 맞는 유형에 가중치
  
  if (gender === 'male') {
    scores["tetogen-male"] *= genderMultiplier;
    scores["eggen-male"] *= genderMultiplier;
    scores["day-tetogen-night-eggen-male"] *= genderMultiplier;
    scores["night-tetogen-day-eggen-male"] *= genderMultiplier;
  } else if (gender === 'female') {
    scores["tetogen-female"] *= genderMultiplier;
    scores["eggen-female"] *= genderMultiplier;
    scores["day-tetogen-night-eggen-female"] *= genderMultiplier;
    scores["night-tetogen-day-eggen-female"] *= genderMultiplier;
  }

  // 최고 점수 찾기
  let maxScore = 0;
  let resultType = "";
  
  Object.keys(scores).forEach(type => {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      resultType = type;
    }
  });

  return resultType;
}; 