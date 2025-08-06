// 🌍 이세계 전이 테스트 데이터
export const isekaiTestData = {
  title: "이세계로 전이했을 때 나는?",
  description: "갑자기 빛에 휩싸여 이세계로 전이했다면, 당신은 어떤 캐릭터가 될까요? 🧩",
  
  // 🌍 5개 세계관 시놉시스
  worlds: {
    // 1. 아르카나 대륙 (1-6번 결과: 마법사, 용사, NPC 공통 세계관)
    arcana_continent: {
      name: "아르카나 대륙",
      description: "마법과 검술이 공존하는 판타지 대륙. 마법사 길드와 용사 길드가 대립하며, 마법학교에서는 새로운 마법사들을 양성하고, 용사 길드에서는 영웅을 찾고 있다. 던전과 마을이 공존하는 전통적인 판타지 세계로, 모험과 마법이 가득한 곳이다.",
      features: [
        "🧙‍♂️ 마법사 길드와 용사 길드의 대립",
        "⚔️ 마법과 검술이 공존하는 전투 시스템",
        "🏰 마법학교와 용사 길드의 교육 시스템",
        "🗺️ 던전과 마을이 공존하는 지형",
        "🎯 모험과 마법이 가득한 세계"
      ],
      atmosphere: "전통적인 판타지 세계관으로 모험과 마법이 넘치는 활기찬 세계"
    },
    
    // 2. 네크로폴리스 (7-10번 결과: 마왕, 기사단 공통 세계관)
    necropolis: {
      name: "네크로폴리스",
      description: "어둠과 빛이 공존하는 신비로운 세계. 마왕군과 성기사단이 대립하는 곳으로, 마왕은 인간의 감정에 호기심을 가지고 있고, 성기사단은 정의를 위해 싸운다. 어둠의 마법과 빛의 신성마법이 공존하며, 때로는 예상치 못한 동맹이 이루어지기도 한다.",
      features: [
        "😈 마왕군과 성기사단의 대립",
        "🌙 어둠의 마법과 빛의 신성마법",
        "🏛️ 고대 유적과 성채",
        "💔 마왕의 외로움과 기사단의 고민",
        "⚖️ 어둠과 빛의 균형과 조화"
      ],
      atmosphere: "어둠과 빛이 공존하는 신비롭고 극적인 세계"
    },
    
    // 3. 페트로폴리스 (11-12번 결과: 펫 계약 공통 세계관)
    petropolis: {
      name: "페트로폴리스", 
      description: "인간과 마법 생물이 계약을 맺고 함께 살아가는 세계. 펫과 마스터의 관계가 사회의 기본 단위가 되는 곳. 귀여운 펫들이 실제로는 강력한 전투력을 가지고 있고, 마족 펫들은 인간에게 반해버리는 일이 자주 일어난다. 펫 계약 시스템이 발달해 있어서, 누구나 자신만의 펫을 가질 수 있다.",
      features: [
        "🐾 인간과 마법 생물의 계약 시스템",
        "💕 펫과 마스터의 특별한 유대",
        "😈 마족 펫들의 로맨틱한 고민",
        "⚡ 귀여운 외모의 강력한 전투력",
        "🏠 펫과 함께하는 일상생활"
      ],
      atmosphere: "귀엽고 따뜻하지만, 때로는 강력하고 로맨틱한 감정이 넘치는 세계"
    },
    
    // 4. 힐링 가든 (13-14번 결과: 치유 슬로우라이프 공통 세계관)
    healing_garden: {
      name: "힐링 가든",
      description: "자연과 치유의 힘이 넘치는 평화로운 세계. 전쟁의 상처를 치유하고자 하는 힐러들이 모여 사는 곳. 나무를 심고 온천을 관리하며, 자연과 함께하는 삶을 추구한다. 전투의 PTSD를 겪은 이들도 이곳에서 마음의 평화를 찾을 수 있다. 시간이 천천히 흘러가는 느긋한 세계.",
      features: [
        "🌳 자연과 치유의 힘",
        "💚 평화로운 슬로우라이프",
        "🛁 온천과 힐링 시스템",
        "🌿 나무 심기와 정원 가꾸기",
        "😌 마음의 평화를 찾는 공간"
      ],
      atmosphere: "평화롭고 따뜻하며, 자연과 함께하는 여유로운 삶을 추구하는 세계"
    },
    
    // 5. 하이스쿨 히어로즈 (15번 결과: 초능력 고등학교 단독 세계관)
    highschool_heroes: {
      name: "하이스쿨 히어로즈",
      description: "초능력을 가진 학생들이 다니는 특별한 고등학교. 각자 다른 능력을 가진 학생들이 모여서 학교생활을 보내는 곳. 능력이 있는 학생들 사이에서 능력이 없는 학생도 연애만 하며 행복하게 살아간다. 학교 내에서 능력 대결도 벌어지지만, 결국은 청춘의 로맨스가 가장 중요한 곳.",
      features: [
        "🎓 초능력 고등학교 시스템",
        "💕 청춘의 로맨스가 중심",
        "⚡ 다양한 능력자들의 대결",
        "😊 능력이 없어도 행복한 일상",
        "🎭 학교 내 능력자 서열"
      ],
      atmosphere: "청춘의 로맨스와 능력자들의 대결이 공존하는 활기찬 학교 세계"
    }
  },

  questions: [
    {
      id: 1,
      question: "눈을 떴다. 여긴 어디지?",
      options: [
        { text: "또 전생이야?", score: { magic: 1, hero: 0, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "미지의 세계다!", score: { magic: 0, hero: 2, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "실화냐 이거?", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 1, school: 1 } },
        { text: "기시감이 드는데…", score: { magic: 0, hero: 0, demon: 1, knight: 0, pet: 0, healer: 0, school: 0 } }
      ]
    },
    {
      id: 2,
      question: "갑자기 누군가 \"당신은 영웅입니다\"라고 말한다. 당신의 반응은?",
      options: [
        { text: "거절할게요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 2, school: 0 } },
        { text: "이미 알고 있었지", score: { magic: 0, hero: 0, demon: 1, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "뭐든 시켜만 줘", score: { magic: 0, hero: 2, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "그쪽이 착각한 듯요", score: { magic: 1, hero: 0, demon: 0, knight: 0, pet: 1, healer: 0, school: 0 } }
      ]
    },
    {
      id: 3,
      question: "당신 앞에 고대 유물이 놓여 있다. 어떻게 할까?",
      options: [
        { text: "망설임 없이 손댄다", score: { magic: 0, hero: 2, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "일단 관찰", score: { magic: 1, hero: 0, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "함정 의심함", score: { magic: 0, hero: 0, demon: 0, knight: 1, pet: 0, healer: 1, school: 0 } },
        { text: "안 건드림", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 2, school: 1 } }
      ]
    },
    {
      id: 4,
      question: "동료 한 명이 배신했다. 당신의 선택은?",
      options: [
        { text: "용서할 수 없어", score: { magic: 0, hero: 0, demon: 1, knight: 2, pet: 0, healer: 0, school: 0 } },
        { text: "이유부터 듣는다", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 1, healer: 1, school: 0 } },
        { text: "전략적으로 묵인", score: { magic: 1, hero: 0, demon: 1, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "바로 내쫓는다", score: { magic: 0, hero: 1, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } }
      ]
    },
    {
      id: 5,
      question: "왕이 자리를 비운 틈, 나라가 혼란스러워진다. 당신은?",
      options: [
        { text: "내가 다스린다", score: { magic: 0, hero: 0, demon: 2, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "조용히 떠난다", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 2, school: 0 } },
        { text: "어둠 속에서 조종한다", score: { magic: 1, hero: 0, demon: 1, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "시민을 조직해 봉기", score: { magic: 0, hero: 2, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } }
      ]
    },
    {
      id: 6,
      question: "당신의 전생의 마지막 기억은?",
      options: [
        { text: "전쟁터", score: { magic: 0, hero: 2, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "사랑하는 이의 얼굴", score: { magic: 0, hero: 0, demon: 1, knight: 0, pet: 1, healer: 0, school: 0 } },
        { text: "거울 앞의 나", score: { magic: 1, hero: 0, demon: 0, knight: 0, pet: 0, healer: 0, school: 1 } },
        { text: "아무것도 기억나지 않는다", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 1, school: 0 } }
      ]
    },
    {
      id: 7,
      question: "마왕이 당신에게 협력을 요청한다. 당신의 대답은?",
      options: [
        { text: "조건부터 보자", score: { magic: 0, hero: 0, demon: 1, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "절대 안 돼", score: { magic: 0, hero: 1, demon: 0, knight: 2, pet: 0, healer: 0, school: 0 } },
        { text: "뭔가 수상해", score: { magic: 1, hero: 0, demon: 0, knight: 0, pet: 0, healer: 1, school: 0 } },
        { text: "그냥 도망친다", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 2, school: 1 } }
      ]
    },
    {
      id: 8,
      question: "기사단에 들어가게 됐다. 어떤 역할을 맡고 싶어?",
      options: [
        { text: "전투 기사", score: { magic: 0, hero: 1, demon: 0, knight: 2, pet: 0, healer: 0, school: 0 } },
        { text: "치유 기사", score: { magic: 0, hero: 0, demon: 0, knight: 1, pet: 0, healer: 2, school: 0 } },
        { text: "마법 기사", score: { magic: 1, hero: 0, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "요리 기사", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 1, healer: 0, school: 0 } }
      ]
    },
    {
      id: 9,
      question: "귀여운 펫이 계약을 요청해왔다. 당신의 반응은?",
      options: [
        { text: "바로 계약", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 2, healer: 0, school: 0 } },
        { text: "조건부터 확인", score: { magic: 0, hero: 0, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "먼저 친해지기", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 1, healer: 1, school: 0 } },
        { text: "그냥 지나침", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 0, school: 1 } }
      ]
    },
    {
      id: 10,
      question: "이세계에서 가장 중요하게 생각하는 건?",
      options: [
        { text: "강해지는 것", score: { magic: 1, hero: 2, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "편안하게 사는 것", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 2, school: 0 } },
        { text: "새로운 경험", score: { magic: 1, hero: 1, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "집에 돌아가는 것", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 1, school: 1 } }
      ]
    },
    {
      id: 11,
      question: "마법학교에 입학했다. 어떤 과목을 선택할래?",
      options: [
        { text: "마법 이론", score: { magic: 2, hero: 0, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "실전 마법", score: { magic: 1, hero: 1, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "마법 생물학", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 1, healer: 0, school: 0 } },
        { text: "마법 요리학", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 1, school: 0 } }
      ]
    }
  ],
  
  results: {
    // 🌍 1. 마법사 세계 (3) - 아르카나 대륙
    magic_master: {
      title: "마법서 잘못 열고 마스터됨",
      character_name: "📚 지식의 탐구자",
      hook: "📖 잘못 열었을 뿐인데, 전설이 되어버렸다.",
      emotion_script: `처음엔 단순한 호기심이었어.
마법서에 손을 댄 순간, 머릿속에 지식이 폭발했지.
이제 나는 마법학교의 전설, 지식의 탐구자가 되었어.`,
      story: `당신은 이론을 사랑하는 천재 마도사.
마법 지식을 꿰뚫는 특별한 재능을 가졌고,
한 번 보면 외울 수 있는 기억력으로
수많은 마법을 창조해낸다.`,
      routine: `아침엔 마법서를 정리하고,
점심엔 신입생들을 가르치며,
밤엔 새로운 마법을 발명한다.`,
      characteristics: [
        "📚 마법서만 보면 다 알아버림",
        "🎯 실전보다 이론이 더 재미있음",
        "🧠 마법 지식이 머릿속에 가득",
        "✨ 새로운 마법 발견에 열중"
      ],
      strategy: "마법학교 교수로서 당신의 지식을 전파하세요. 새로운 마법 발견은 당신의 사명이에요!",
      recommendation: {
        characters: ["질리언", "빅토르", "하이머딩거"],
        image: "/images/magic_master.png",
        shareText: "나는 📖 마법서 잘못 열고 마스터됨! 이세계 전이 테스트 결과를 확인해보세요! ✨"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "arcana_continent",
      color: "#8b5cf6"
    },
    slime_master: {
      title: "소환된 슬라임인데 개쎔",
      character_name: "💙 귀여운 파괴신",
      hook: "💙 약하다고? 그건 착각이야.",
      emotion_script: `소환되자마자 레벨이 폭발적으로 올라갔어.
보통 슬라임과는 다른 특별한 존재가 되었지.
이제 마왕도 한 방에 보낼 수 있어.`,
      story: `당신은 소환된 슬라임이지만,
레벨업 속도가 미쳤어.
귀엽지만 무서운 전투력을 가진
특별한 슬라임 마스터다.`,
      routine: `아침엔 슬라임 체조로 몸을 풀고,
점심엔 마법 연습을 하며,
밤엔 새로운 변신 기술을 익힌다.`,
      characteristics: [
        "💙 슬라임인데 마법도 씀",
        "🔥 레벨업 속도가 미쳤음",
        "🎯 전투력이 예상 초과",
        "😊 귀엽지만 무서움"
      ],
      strategy: "슬라임의 장점을 살려서 다양한 형태로 변신해보세요. 마법도 계속 연마해서 완전체가 되세요!",
      recommendation: {
        characters: ["슬라임", "메타몽", "디토"],
        image: "/images/slime_master.png",
        shareText: "나는 💙 소환된 슬라임인데 개쎔! 이세계 전이 테스트 결과를 확인해보세요! 🔥"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "arcana_continent",
      color: "#06b6d4"
    },
    magic_dropout: {
      title: "마법학교 자퇴하고 용병됨",
      character_name: "🗡️ 자유의 용병",
      hook: "🗡️ 규칙에 얽매이기 싫어서, 자유를 선택했다.",
      emotion_script: `마법학교의 규칙이 너무 답답했어.
실전에서 배우는 게 더 재미있다고 생각했지.
그래서 자퇴하고 용병이 되었어.`,
      story: `당신은 자유로운 영혼을 가진 용병.
실전 경험이 풍부하고 현실적인 전투 스타일.
마법과 검술을 조합한 독특한 기술을 구사한다.`,
      routine: `아침엔 의뢰를 받아서 계획을 세우고,
점심엔 전투를 치르며,
밤엔 보수를 받아서 술을 마신다.`,
      characteristics: [
        "🗡️ 실전 경험이 풍부함",
        "💪 자유로운 영혼",
        "🎯 현실적인 전투 스타일",
        "💰 돈 벌어서 살아감"
      ],
      strategy: "용병 길드에서 활동하면서 다양한 의뢰를 받아보세요. 마법과 검술을 조합한 독특한 스타일을 만들어보세요!",
      recommendation: {
        characters: ["제라스", "야스오", "리븐"],
        image: "/images/magic_dropout.png",
        shareText: "나는 🗡️ 마법학교 자퇴하고 용병됨! 이세계 전이 테스트 결과를 확인해보세요! 💪"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "arcana_continent",
      color: "#dc2626"
    },

    // 🌍 2. 용사 세계 (3) - 아르카나 대륙
    hero_accident: {
      title: "\"아무것도 안 했는데 용사됨\"",
      character_name: "🍀 행운의 용사",
      hook: "🍀 운이 좋아서, 갑자기 영웅이 되었다.",
      emotion_script: `아무것도 안 했는데 갑자기 용사가 되었어.
본인도 당황스러워하지만 운이 정말 좋았지.
하지만 이런 운은 계속되지 않을 거야.`,
      story: `당신은 운빨로 용사가 된 특별한 케이스.
실력보다는 운이 앞서는 영웅.
갑자기 중요한 역할을 맡게 되었지만
본인도 당황스러워한다.`,
      routine: `아침엔 운세를 보고 하루를 시작하고,
점심엔 팀원들과 함께 모험을 떠나며,
밤엔 다음날의 운을 기원한다.`,
      characteristics: [
        "🍀 운이 정말 좋음",
        "😅 실력보다는 운빨",
        "🎯 갑자기 중요한 역할",
        "🤷‍♂️ 본인도 당황함"
      ],
      strategy: "운에만 의존하지 말고 실력을 키워보세요. 팀원들과 협력해서 진정한 용사가 되어보세요!",
      recommendation: {
        characters: ["럭스", "소나", "나미"],
        image: "/images/hero_accident.png",
        shareText: "나는 🛡️ \"아무것도 안 했는데 용사됨\"! 이세계 전이 테스트 결과를 확인해보세요! 🍀"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "arcana_continent",
      color: "#f59e0b"
    },
    dungeon_chef: {
      title: "던전에서 치킨집 창업함",
      character_name: "🍗 요리의 창조자",
      hook: "🍗 모험보다 요리가 더 재미있었다.",
      emotion_script: `던전에서 치킨집을 창업했어.
모험가들이 맛있는 치킨을 먹고 힘을 얻는다니,
정말 멋진 아이디어라고 생각해.`,
      story: `당신은 창의적인 요리사이자 사업가.
던전에서 치킨집을 운영하며 모험가들을 돕는다.
요리 실력과 사업 감각을 모두 갖춘 특별한 영웅.`,
      routine: `아침엔 신선한 재료를 구매하고,
점심엔 모험가들을 위한 특별 메뉴를 만들며,
밤엔 새로운 요리 레시피를 개발한다.`,
      characteristics: [
        "🍗 요리 실력이 뛰어남",
        "💡 창의적인 아이디어",
        "💰 사업 감각이 있음",
        "😊 사람들과 잘 어울림"
      ],
      strategy: "던전 체인점을 만들어보세요. 모험가들을 위한 특별한 요리도 개발해보세요!",
      recommendation: {
        characters: ["타히마 케나치", "고든 램지", "이치라쿠 테이유"],
        image: "/images/dungeon_chef.png",
        shareText: "나는 🍗 던전에서 치킨집 창업함! 이세계 전이 테스트 결과를 확인해보세요! 💡"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "arcana_continent",
      color: "#f97316"
    },
    npc_legend: {
      title: "NPC인데 존재감 미침",
      character_name: "🎭 대화의 천재",
      hook: "🎭 배경이었는데, 주인공이 되었다.",
      emotion_script: `보통 NPC는 배경이지만,
나는 주인공보다 더 인기가 많아졌어.
퀘스트를 주는 NPC인데 실수로 마왕을 물리쳤지.`,
      story: `당신은 특별한 NPC로 전설이 되었다.
대화가 재미있고 마을 사람들이 좋아한다.
실수로 중요한 일을 해결하는
주인공급 존재감을 가진 NPC.`,
      routine: `아침엔 마을 사람들과 인사를 나누고,
점심엔 퀘스트를 주며 모험가들을 도우며,
밤엔 실수로 해결한 일들을 정리한다.`,
      characteristics: [
        "🎭 NPC인데 주인공급",
        "💬 대화가 재미있음",
        "🎯 실수로 중요한 일 해결",
        "😊 마을 사람들이 좋아함"
      ],
      strategy: "NPC의 장점을 살려서 마을 사람들과 친해지세요. 실수로 해결한 일들을 계속 해보세요!",
      recommendation: {
        characters: ["가렌", "다리우스", "잭스"],
        image: "/images/npc_legend.png",
        shareText: "나는 🎭 NPC인데 존재감 미침! 이세계 전이 테스트 결과를 확인해보세요! 💬"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "arcana_continent",
      color: "#10b981"
    },

    // 🌍 3. 마왕 세계 (2) - 네크로폴리스
    demon_lover: {
      title: "마왕의 전 애인",
      character_name: "💔 사랑의 희생자",
      hook: "💔 사랑했지만, 헤어져야 했다.",
      emotion_script: `마왕과 사랑에 빠졌지만 헤어졌어.
아직 마음에 상처가 남아있지만,
마왕도 사람이니까 이해할 수 있어.`,
      story: `당신은 마왕과의 과거가 있는 특별한 존재.
드라마틱한 과거를 가진 강한 마음의 소유자.
새로운 사랑을 찾아야 할 때다.`,
      routine: `아침엔 과거를 정리하고,
점심엔 새로운 시작을 준비하며,
밤엔 마왕과의 경험을 바탕으로 다른 사람들을 돕는다.`,
      characteristics: [
        "💔 마왕과의 과거가 있음",
        "😢 아직 마음에 상처",
        "🎭 드라마틱한 과거",
        "💪 강한 마음의 소유자"
      ],
      strategy: "과거는 과거로 두고 새로운 시작을 해보세요. 마왕과의 경험을 바탕으로 다른 사람들을 도와보세요!",
      recommendation: {
        characters: ["모르가나", "이블린", "아리"],
        image: "/images/demon_lover.png",
        shareText: "나는 💔 마왕의 전 애인! 이세계 전이 테스트 결과를 확인해보세요! 🎭"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "necropolis",
      color: "#7c3aed"
    },
    demon_contractor: {
      title: "마왕과 계약한 인간",
      character_name: "😈 대담한 계약자",
      hook: "😈 대담하게 마왕과 계약을 맺었다.",
      emotion_script: `마왕과 계약을 맺었어.
정말 용감한 선택이지만,
마왕도 나름의 이유가 있을 거야.`,
      story: `당신은 마왕과의 계약 관계를 가진 대담한 인간.
조건을 중요시하고 전략적 사고를 한다.
협력 관계를 구축하는 현명한 선택을 했다.`,
      routine: `아침엔 계약 조건을 확인하고,
점심엔 마왕과의 협력을 진행하며,
밤엔 새로운 가능성을 찾아본다.`,
      characteristics: [
        "😈 마왕과의 계약 관계",
        "💼 조건을 중요시함",
        "🎯 전략적 사고",
        "🤝 협력 관계 구축"
      ],
      strategy: "마왕과의 계약을 잘 활용해서 새로운 가능성을 찾아보세요. 마왕의 진짜 의도를 알아보세요!",
      recommendation: {
        characters: ["스웨인", "베인", "카시오페아"],
        image: "/images/demon_contractor.png",
        shareText: "나는 😈 마왕과 계약한 인간! 이세계 전이 테스트 결과를 확인해보세요! 💼"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "necropolis",
      color: "#7c3aed"
    },

    // 🌍 4. 기사단 세계 (2) - 네크로폴리스
    holy_knight: {
      title: "성기사단의 정의로운 기사",
      character_name: "⚔️ 정의의 수호자",
      hook: "⚔️ 정의를 위해, 빛의 힘을 사용한다.",
      emotion_script: `성기사단에서 정의를 위해 싸우고 있어.
빛의 신성마법을 사용해서 악을 물리치는
정말 아름다운 모습이야.`,
      story: `당신은 정의를 위해 싸우는 성기사.
신성마법을 사용해서 동료들을 보호한다.
강한 의지를 가진 진정한 기사다.`,
      routine: `아침엔 기사단 훈련을 하고,
점심엔 마을을 순찰하며,
밤엔 동료들과 함께 더 큰 악을 물리친다.`,
      characteristics: [
        "⚔️ 정의를 위해 싸움",
        "✨ 신성마법 사용",
        "🛡️ 동료들을 보호",
        "💪 강한 의지"
      ],
      strategy: "성기사단에서 더욱 강해져서 진정한 정의의 기사가 되어보세요. 동료들과 함께 더 큰 악을 물리쳐보세요!",
      recommendation: {
        characters: ["가렌", "레오나", "타릭"],
        image: "/images/holy_knight.png",
        shareText: "나는 ⚔️ 성기사단의 정의로운 기사! 이세계 전이 테스트 결과를 확인해보세요! ✨"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "necropolis",
      color: "#fbbf24"
    },
    dark_knight: {
      title: "어둠의 기사",
      character_name: "🌙 어둠의 탐구자",
      hook: "🌙 어둠의 힘으로, 정의를 추구한다.",
      emotion_script: `어둠의 힘을 사용하지만 정의를 위해 싸워.
정말 복잡하고 특별한 기사야.
어둠과 빛의 균형을 잘 조절해야 해.`,
      story: `당신은 어둠의 힘을 사용하는 복잡한 기사.
균형을 추구하고 강한 힘을 가졌다.
어둠과 빛 사이에서 새로운 길을 만든다.`,
      routine: `아침엔 어둠의 힘을 조절하고,
점심엔 정의를 위해 싸우며,
밤엔 어둠과 빛의 균형을 찾는다.`,
      characteristics: [
        "🌙 어둠의 힘 사용",
        "⚖️ 균형을 추구",
        "🎭 복잡한 내면",
        "💪 강한 힘"
      ],
      strategy: "어둠의 힘을 잘 조절해서 정의를 위해 사용해보세요. 어둠과 빛의 균형을 찾아보세요!",
      recommendation: {
        characters: ["야스오", "제드", "카타리나"],
        image: "/images/dark_knight.png",
        shareText: "나는 🌙 어둠의 기사! 이세계 전이 테스트 결과를 확인해보세요! ⚖️"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "necropolis",
      color: "#6b7280"
    },

    // 🌍 5. 펫 계약 세계 (2) - 페트로폴리스
    pet_master: {
      title: "펫과 계약한 마스터",
      character_name: "🐾 펫의 영웅",
      hook: "🐾 특별한 유대로, 함께 성장한다.",
      emotion_script: `펫과 특별한 계약을 맺었어.
함께 성장하는 모습이 정말 아름다워.
행복한 일상을 살고 있어.`,
      story: `당신은 펫과의 특별한 유대를 가진 따뜻한 마스터.
펫과 함께 성장하며 행복한 일상을 산다.
따뜻한 마음으로 펫을 사랑한다.`,
      routine: `아침엔 펫과 함께 산책하고,
점심엔 펫과 놀며 훈련하고,
밤엔 펫과 함께 새로운 모험을 계획한다.`,
      characteristics: [
        "🐾 펫과의 특별한 유대",
        "💕 따뜻한 마음",
        "🎯 펫과 함께 성장",
        "😊 행복한 일상"
      ],
      strategy: "펫과의 유대를 더욱 깊게 만들어보세요. 펫과 함께 새로운 모험을 떠나보세요!",
      recommendation: {
        characters: ["나서스", "워윅", "케넨"],
        image: "/images/pet_master.png",
        shareText: "나는 🐾 펫과 계약한 마스터! 이세계 전이 테스트 결과를 확인해보세요! 💕"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "petropolis",
      color: "#ec4899"
    },
    pet_companion: {
      title: "마족 펫의 인간 파트너",
      character_name: "😈 마족의 친구",
      hook: "😈 마족 펫과의 완벽한 조합.",
      emotion_script: `마족 펫과 계약을 맺었어.
강력한 힘과 따뜻한 마음이 만나서
완벽한 조합이 되었어.`,
      story: `당신은 마족 펫과 계약을 맺은 특별한 파트너.
마족 펫의 강력한 힘과 당신의 따뜻한 마음이 만나
로맨틱한 관계를 형성한다.`,
      routine: `아침엔 마족 펫과 함께 훈련하고,
점심엔 로맨틱한 시간을 보내며,
밤엔 함께 강해져서 새로운 모험을 계획한다.`,
      characteristics: [
        "😈 마족 펫과의 계약",
        "💕 로맨틱한 관계",
        "⚡ 강력한 전투력",
        "🎭 특별한 유대"
      ],
      strategy: "마족 펫과의 관계를 더욱 깊게 만들어보세요. 함께 강해져서 새로운 모험을 떠나보세요!",
      recommendation: {
        characters: ["아리", "이블린", "모르가나"],
        image: "/images/pet_companion.png",
        shareText: "나는 😈 마족 펫의 인간 파트너! 이세계 전이 테스트 결과를 확인해보세요! 💕"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "petropolis",
      color: "#ec4899"
    },

    // 🌍 6. 힐링 세계 (2) - 힐링 가든
    nature_healer: {
      title: "자연의 힐러",
      character_name: "🌳 자연의 치유자",
      hook: "🌳 자연의 힘으로, 사람들을 치유한다.",
      emotion_script: `자연의 힘을 사용해서 사람들을 치유해.
자연과 함께하는 삶이 정말 행복해.
평화로운 마음을 가진 힐러야.`,
      story: `당신은 자연의 힘을 사용하는 평화로운 힐러.
자연과 함께하는 삶을 살며 여유로운 시간을 보낸다.
치유 능력으로 사람들을 돕는다.`,
      routine: `아침엔 자연의 힘을 받아들이고,
점심엔 사람들을 치유하며,
밤엔 자연과 함께하는 삶을 계속한다.`,
      characteristics: [
        "🌳 자연의 힘 사용",
        "💚 평화로운 마음",
        "🛁 치유 능력",
        "😌 여유로운 삶"
      ],
      strategy: "자연의 힘을 더욱 깊게 이해해서 더 많은 사람들을 치유해보세요. 자연과 함께하는 삶을 계속 이어가보세요!",
      recommendation: {
        characters: ["소라카", "나미", "잔나"],
        image: "/images/nature_healer.png",
        shareText: "나는 🌳 자연의 힐러! 이세계 전이 테스트 결과를 확인해보세요! 💚"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "healing_garden",
      color: "#10b981"
    },
    slow_life_master: {
      title: "슬로우라이프 마스터",
      character_name: "🍃 여유의 창조자",
      hook: "🍃 천천히 흘러가는 시간을 즐긴다.",
      emotion_script: `천천히 흘러가는 시간을 즐기고 있어.
온천에서 힐링하고 정원을 가꾸며
마음의 평화를 찾았어.`,
      story: `당신은 여유로운 슬로우라이프 마스터.
천천히 흘러가는 시간을 즐기며 행복한 삶을 산다.
온천 힐링과 정원 가꾸기가 일상이다.`,
      routine: `아침엔 천천히 일어나서 정원을 가꾸고,
점심엔 온천에서 힐링하며,
밤엔 마음의 평화를 찾는다.`,
      characteristics: [
        "🍃 천천히 흘러가는 시간",
        "🛁 온천 힐링",
        "🌿 정원 가꾸기",
        "😌 마음의 평화"
      ],
      strategy: "슬로우라이프를 더욱 완벽하게 만들어보세요. 다른 사람들도 이런 여유로운 삶을 살 수 있도록 도와보세요!",
      recommendation: {
        characters: ["요네", "아리", "소라카"],
        image: "/images/slow_life_master.png",
        shareText: "나는 🍃 슬로우라이프 마스터! 이세계 전이 테스트 결과를 확인해보세요! 🛁"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "healing_garden",
      color: "#10b981"
    },

    // 🌍 7. 학교 세계 (1) - 하이스쿨 히어로즈
    school_romance: {
      title: "초능력 고등학교의 로맨스",
      character_name: "🎓 청춘의 소년",
      hook: "🎓 능력보다는, 사랑이 더 중요하다.",
      emotion_script: `초능력 고등학교에서 연애만 하며
행복하게 살아가고 있어.
능력보다는 사랑이 더 중요해.`,
      story: `당신은 청춘다운 학생으로 로맨스를 추구한다.
능력보다는 사랑이 최우선인 아름다운 마음을 가졌다.
행복한 학교생활을 보낸다.`,
      routine: `아침엔 연인과 함께 등교하고,
점심엔 연애에 집중하며,
밤엔 능력보다는 마음이 더 중요하다는 걸 알린다.`,
      characteristics: [
        "🎓 청춘의 로맨스",
        "💕 사랑이 최우선",
        "😊 행복한 학교생활",
        "🎭 능력보다는 마음"
      ],
      strategy: "청춘의 로맨스를 더욱 아름답게 만들어보세요. 능력보다는 마음이 더 중요하다는 걸 다른 사람들에게도 알려보세요!",
      recommendation: {
        characters: ["진", "루시안", "케이틀린"],
        image: "/images/school_romance.png",
        shareText: "나는 🎓 초능력 고등학교의 로맨스! 이세계 전이 테스트 결과를 확인해보세요! 💕"
      },
      links: {
        same_world: true,
        go_home: true,
        retry_test: true
      },
      world: "highschool_heroes",
      color: "#8b5cf6"
    }
  },

  // 🎯 결과 계산 함수
  calculateResult: (scores) => {
    const maxScore = Math.max(...Object.values(scores));
    const topTypes = Object.keys(scores).filter(type => scores[type] === maxScore);
    
    // 점수에 따른 결과 매핑
    const resultMap = {
      magic: ['magic_master', 'slime_master', 'magic_dropout'],
      hero: ['hero_accident', 'dungeon_chef', 'npc_legend'],
      demon: ['demon_lover', 'demon_contractor'],
      knight: ['holy_knight', 'dark_knight'],
      pet: ['pet_master', 'pet_companion'],
      healer: ['nature_healer', 'slow_life_master'],
      school: ['school_romance']
    };
    
    // 최고 점수 타입에 따른 결과 반환
    const topType = topTypes[0];
    const possibleResults = resultMap[topType];
    
    if (possibleResults && possibleResults.length > 0) {
      // 점수에 따라 세부 결과 결정
      const scoreSum = Object.values(scores).reduce((a, b) => a + b, 0);
      const resultIndex = scoreSum % possibleResults.length;
      return possibleResults[resultIndex];
    }
    
    // 기본값
    return 'hero_accident';
  }
};

export default isekaiTestData; 