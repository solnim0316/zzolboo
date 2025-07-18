// 🦕 공룡 MBTI 테스트 데이터
export const dinosaurTestData = {
  // 📝 테스트 기본 정보
  testInfo: {
    id: "dinosaur-mbti",
    title: "성격유형별 공룡 테스트",
    subtitle: "나는 어떤 공룡이였을까?",
    description: "만약 내가 공룡시대에 태어났다면?",
    emoji: "🦕",
    thumbnail: "/images/tests/dinosaur/thumbnail.png"
  },

  // ❓ 테스트 질문들
  questions: [
    {
      question: "📅 공룡 전시회 가기 전날 밤 당신은?",
      options: [
        { text: "오픈 시간부터 루트까지 정리 완료", type: "J" },
        { text: "내일 가긴 할 건데 시간은 그때 봐서", type: "P" },
        { text: "미리 표 예매하고 동선까지 계획", type: "J" },
        { text: "그냥 기분 따라 가보는 것도 재밌잖아", type: "P" }
      ]
    },
    {
      question: "📚 공룡 다이어리를 쓴다면?",
      options: [
        { text: "날짜별로 뭐 했는지 정리", type: "J" },
        { text: "떠오르는 공룡 생각을 자유롭게 기록", type: "P" },
        { text: "형광펜으로 카테고리 정리", type: "J" },
        { text: "끄적끄적 감성 낙서 스타일", type: "P" }
      ]
    },
    {
      question: "🦴 공룡 발굴 현장에서 당신의 행동은?",
      options: [
        { text: "어디서 어떤 화석이 나왔는지 기록한다", type: "S" },
        { text: "이 공룡은 어떤 성격이었을까 상상한다", type: "N" },
        { text: "구체적인 뼈 모양과 크기를 측정한다", type: "S" },
        { text: "과거의 숲과 생태계를 머릿속에 그린다", type: "N" }
      ]
    },
    {
      question: "📦 공룡이 택배를 보내줬다?! 안에 뭐가 들었을까?",
      options: [
        { text: "화석, 뼈 조각 같은 진짜 유물!", type: "S" },
        { text: "공룡이 쓴 미래에서 온 편지", type: "N" },
        { text: "공룡발자국 찍힌 실제 진흙 타일", type: "S" },
        { text: "나랑의 우정을 그린 상상의 그림", type: "N" }
      ]
    },
    {
      question: "🎬 공룡 다큐를 보면서 느끼는 건?",
      options: [
        { text: "지식이 정리되는 느낌이 좋다", type: "T" },
        { text: "이렇게 멸종됐다니 마음이 아프다", type: "F" },
        { text: "생태계 변화의 원인을 분석함", type: "T" },
        { text: "공룡도 외로웠을까 상상하게 된다", type: "F" }
      ]
    },
    {
      question: "🎮 공룡 게임을 시작했을 때 당신은?",
      options: [
        { text: "튜토리얼부터 정석대로 클리어", type: "J" },
        { text: "일단 눌러보다가 감 잡는다", type: "P" },
        { text: "퀘스트 순서대로 진행", type: "J" },
        { text: "하다보면 길이 보이지 뭐~", type: "P" }
      ]
    },
    {
      question: "🎉 공룡 동호회 첫 모임! 당신의 모습은?",
      options: [
        { text: "공룡 얘기 먼저 꺼내면서 분위기 살린다", type: "E" },
        { text: "일단 말 거는 사람 옆에서 리액션만", type: "I" },
        { text: "모두가 보는 앞에서 퀴즈 하나 던져본다", type: "E" },
        { text: "존재감 없이 조용히 시작부터 끝까지 관찰", type: "I" }
      ]
    },
    {
      question: "📢 쥬라기 공원에 처음 입장한 당신, 어떤 공룡부터 보러 갈래?",
      options: [
        { text: "입장하자마자 사람들 많은 티라노 구역!", type: "E" },
        { text: "사람 없는 구석구석 천천히 돌아본다", type: "I" },
        { text: "다 같이 사진 찍으면서 단체 콘텐츠 찍자!", type: "E" },
        { text: "조용히 감상하며 혼자만의 브이로그를 찍는다", type: "I" }
      ]
    },
    {
      question: "🦖 공룡 친구와 여행을 간다면?",
      options: [
        { text: "일정표를 짜고 하루 단위로 계획!", type: "S" },
        { text: "여정 중 어떤 모험이 생길지 기대!", type: "N" },
        { text: "방문 장소와 거리, 식사 시간 체크", type: "S" },
        { text: "즉흥적인 만남과 이벤트에 설렘", type: "N" }
      ]
    },
    {
      question: "🧠 공룡이랑 대화하다 싸움이 났다면?",
      options: [
        { text: "논리적으로 틀린 부분을 설명한다", type: "T" },
        { text: "공룡 기분이 상했을까봐 눈치본다", type: "F" },
        { text: "대화 내용을 다시 정리해서 전달", type: "T" },
        { text: "상대 입장을 먼저 이해하려 한다", type: "F" }
      ]
    },
    {
      question: "📸 친구가 찍은 공룡 짤을 보냈을 때 당신의 반응은?",
      options: [
        { text: "사진 화질과 앵글 분석부터 시작", type: "T" },
        { text: "귀엽다며 하트 이모지 폭탄", type: "F" },
        { text: "배경이 합성 같다고 지적", type: "T" },
        { text: "표정이 너무 사랑스럽다고 말함", type: "F" }
      ]
    },
    {
      question: "☕ 카페에서 공룡 영상 보던 중, 옆자리 사람이 말을 건다면?",
      options: [
        { text: "우와~ 좋아하세요? 대화 바로 시작!", type: "E" },
        { text: "깜짝 놀라며 일단 미소만 짓고 고개 끄덕", type: "I" },
        { text: "공룡 좋아하는 사람끼리 통하죠~!", type: "E" },
        { text: "당황하지만 예의 있게 대답하고 다시 화면으로", type: "I" }
      ]
    }
  ],

  // 🎯 테스트 결과들
  results: {
    INTJ: {
      MBTI: "INTJ",
      title: "INTJ – 스피노사우루스",
      dinosaur: "스피노사우루스",
      desc: "스피노사우루스는 INTJ 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/INTJ.png",
      match: ["ENFP", "ISFP"],
      matchReason: [
        "ENFP와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ISFP는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ESTP",
      mismatchReason: "ESTP와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    INTP: {
      MBTI: "INTP",
      title: "INTP – 데이노니쿠스",
      dinosaur: "데이노니쿠스",
      desc: "데이노니쿠스는 INTP 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/INTP.png",
      match: ["INFJ", "ENTP"],
      matchReason: [
        "INFJ와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ENTP는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ENTJ",
      mismatchReason: "ENTJ와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    ENTJ: {
      MBTI: "ENTJ",
      title: "ENTJ – 티라노사우루스",
      dinosaur: "티라노사우루스",
      desc: "티라노사우루스는 ENTJ 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/ENTJ.png",
      match: ["ENFP", "ESFJ"],
      matchReason: [
        "ENFP와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ESFJ는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ISTJ",
      mismatchReason: "ISTJ와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    ENTP: {
      MBTI: "ENTP",
      title: "ENTP – 알로사우루스",
      dinosaur: "알로사우루스",
      desc: "알로사우루스는 ENTP 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/ENTP.png",
      match: ["ENFJ", "ISFP"],
      matchReason: [
        "ENFJ와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ISFP는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ENFP",
      mismatchReason: "ENFP와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    INFJ: {
      MBTI: "INFJ",
      title: "INFJ – 마이아사우라",
      dinosaur: "마이아사우라",
      desc: "마이아사우라는 INFJ 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/INFJ.png",
      match: ["INFP", "INTP"],
      matchReason: [
        "INFP와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "INTP는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ISFJ",
      mismatchReason: "ISFJ와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    INFP: {
      MBTI: "INFP",
      title: "INFP – 브라키오사우루스",
      dinosaur: "브라키오사우루스",
      desc: "브라키오사우루스는 INFP 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/INFP.png",
      match: ["INFJ", "ENFJ"],
      matchReason: [
        "INFJ와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ENFJ는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "INTJ",
      mismatchReason: "INTJ와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    ENFJ: {
      MBTI: "ENFJ",
      title: "ENFJ – 이구아노돈",
      dinosaur: "이구아노돈",
      desc: "이구아노돈는 ENFJ 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/ENFJ.png",
      match: ["ISTP", "INFJ"],
      matchReason: [
        "ISTP와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "INFJ는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ESTP",
      mismatchReason: "ESTP와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    ENFP: {
      MBTI: "ENFP",
      title: "ENFP – 벨로시랩터",
      dinosaur: "벨로시랩터",
      desc: "벨로시랩터는 ENFP 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/ENFP.png",
      match: ["ENTP", "ISFJ"],
      matchReason: [
        "ENTP와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ISFJ는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ISFP",
      mismatchReason: "ISFP와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    ISTJ: {
      MBTI: "ISTJ",
      title: "ISTJ – 안킬로사우루스",
      dinosaur: "안킬로사우루스",
      desc: "안킬로사우루스는 ISTJ 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/ISTJ.png",
      match: ["ENTJ", "ISFJ"],
      matchReason: [
        "ENTJ와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ISFJ는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ESTJ",
      mismatchReason: "ESTJ와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    ISFJ: {
      MBTI: "ISFJ",
      title: "ISFJ – 트리케라톱스",
      dinosaur: "트리케라톱스",
      desc: "트리케라톱스는 ISFJ 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/ISFJ.png",
      match: ["ENTJ", "ENTP"],
      matchReason: [
        "ENTJ와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ENTP는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ESTP",
      mismatchReason: "ESTP와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    ESTJ: {
      MBTI: "ESTJ",
      title: "ESTJ – 카르노타우루스",
      dinosaur: "카르노타우루스",
      desc: "카르노타우루스는 ESTJ 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/ESTJ.png",
      match: ["INFJ", "ISFP"],
      matchReason: [
        "INFJ와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ISFP는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ESTP",
      mismatchReason: "ESTP와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    ESFJ: {
      MBTI: "ESFJ",
      title: "ESFJ – 스테고사우루스",
      dinosaur: "스테고사우루스",
      desc: "스테고사우루스는 ESFJ 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/ESFJ.png",
      match: ["ENFP", "INTJ"],
      matchReason: [
        "ENFP와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "INTJ는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "INFP",
      mismatchReason: "INFP와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    ISTP: {
      MBTI: "ISTP",
      title: "ISTP – 파키리노사우루스",
      dinosaur: "파키리노사우루스",
      desc: "파키리노사우루스는 ISTP 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/ISTP.png",
      match: ["ISFJ", "ENTJ"],
      matchReason: [
        "ISFJ와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ENTJ는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ESFP",
      mismatchReason: "ESFP와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    ISFP: {
      MBTI: "ISFP",
      title: "ISFP – 파키케팔로사우루스",
      dinosaur: "파키케팔로사우루스",
      desc: "파키케팔로사우루스는 ISFP 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/ISFP.png",
      match: ["ESTJ", "ENTP"],
      matchReason: [
        "ESTJ와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ENTP는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ESFP",
      mismatchReason: "ESFP와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    ESTP: {
      MBTI: "ESTP",
      title: "ESTP – 기가노토사우루스",
      dinosaur: "기가노토사우루스",
      desc: "기가노토사우루스는 ESTP 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/ESTP.png",
      match: ["INFP", "ENTJ"],
      matchReason: [
        "INFP와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ENTJ는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ISTJ",
      mismatchReason: "ISTJ와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    ESFP: {
      MBTI: "ESFP",
      title: "ESFP – 파라사우롤로푸스",
      dinosaur: "파라사우롤로푸스",
      desc: "파라사우롤로푸스는 ESFP 성향을 지닌 공룡으로, 성격이 뚜렷하고 개성 있는 특징을 갖고 있어요.",
      image: "/images/tests/dinosaur/ESFP.png",
      match: ["INTP", "ENTP"],
      matchReason: [
        "INTP와는 공통된 가치관으로 잘 통하고 신뢰를 쌓아갑니다.",
        "ENTP는 보완적인 성격으로 서로를 성장시켜 줍니다."
      ],
      mismatch: "ENFP",
      mismatchReason: "ENFP와는 주요 성향이 반대되어 자주 부딪힐 수 있어요."
    },
    "???": {
      MBTI: "???",
      title: "??? – 부사우루스",
      dinosaur: "부사우루스",
      desc: "부사우루스는 모든 성향을 균형 있게 가진 전설적인 공룡이에요. 감정과 이성, 계획과 즉흥 사이를 자유롭게 오가며, 상황에 따라 어떤 공룡으로도 변할 수 있는 유연한 성격이에요. 실존 여부는 밝혀지지 않았지만, 당신처럼 모든 기질이 완벽히 균형 잡힌 사람에게만 나타난다고 해요.",
      image: "/images/tests/dinosaur/UNKNOWN.png",
      match: ["INFP", "ENTJ"],
      matchReason: [
        "INFP: 감정적인 면을 이끌어내며 깊은 대화를 가능하게 해요.",
        "ENTJ: 추진력 있는 성향과 함께 있을 때, 균형의 힘이 더욱 강력해져요."
      ],
      mismatch: "없음",
      mismatchReason: "당신은 모든 공룡과 어울릴 수 있는 희귀한 존재예요."
    }
  }
};
