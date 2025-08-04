// 🌍 이세계 전이 테스트 데이터
export const isekaiTestData = {
  title: "이세계로 전이했을 때 나는?",
  description: "갑자기 빛에 휩싸여 이세계로 전이했다면, 당신은 어떤 캐릭터가 될까요? 🧩",
  questions: [
    {
      id: 1,
      question: "갑자기 빛에 휩싸여 눈을 떠보니 낯선 세계!\n넌 제일 먼저 무슨 생각해?",
      options: [
        { text: "나 이제 능력 같은 거 생긴 거지? 마법이나 초능력 같은 거? 진짜로?", score: { magic: 2, hero: 1, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "진짜 이세계야…? 꿈 아니야? 혹시 VR 게임에 빠진 건 아닐까? 현실감이 너무 진짜같아서 무서워", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 1, school: 1 } },
        { text: "돌아가는 버튼 어디 있어요…? 홈 버튼? ESC 키? 아무튼 원래 세계로 돌아가고 싶어요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 2, school: 0 } },
        { text: "이것도 혹시 촬영 중인가…? 히든카메라? 유튜브 프랭크? 어디선가 웃고 있겠지", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 0, school: 1 } }
      ]
    },
    {
      id: 2,
      question: "처음 만난 마법사가 \"너 소환된 거야\"라고 말해.\n넌 뭐라고 대답해?",
      options: [
        { text: "오… 근데 능력은 어디 있죠? 마법창? 스킬트리? 레벨업 시스템은? 게임처럼 생겼네", score: { magic: 2, hero: 1, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "일단 밥부터 주세요. 소환되니까 배고파요. 마법사님도 밥 먹으면서 이야기해요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 1, healer: 0, school: 0 } },
        { text: "혹시 계약 내용부터 볼 수 있을까요? 월급은? 복리후생은? 퇴직금은? 노동법은 여기도 적용되나요?", score: { magic: 0, hero: 0, demon: 1, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "나 그냥 집에 가면 안 돼요…? 엄마가 밥 차려놨을 텐데, 걱정하실 거예요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 2, school: 0 } }
      ]
    },
    {
      id: 3,
      question: "마을 광장에 슬라임이 튀어나왔다!\n넌 어떻게 해?",
      options: [
        { text: "바로 무기 들고 전투 자세! RPG 게임처럼 몬스터와 싸워야지! 경험치 올릴 시간!", score: { magic: 0, hero: 2, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "귀엽다고 다가갔다가 물림. 슬라임이 이렇게 부드럽고 귀여울 줄이야! 근데 왜 물어?", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 2, healer: 0, school: 0 } },
        { text: "도망치면서 \"이건 내가 처리할 몬스터가 아냐\" 다른 용사님이나 기사님이 처리하실 거예요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 1, school: 0 } },
        { text: "튀김 요리 떠올리며 입맛 다심. 슬라임 튀김? 슬라임 샤브샤브? 새로운 요리 재료가 생겼네", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 0, school: 1 } }
      ]
    },
    {
      id: 4,
      question: "갑자기 파티에 끼라고 하는데, 역할이 없다네?\n그럴 때 너의 반응은?",
      options: [
        { text: "\"그럼 관찰자로 넣어주세요. 전투는 못하지만 상황 분석은 잘해요. 실시간 전략 컨설팅 가능합니다\"", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 0, school: 1 } },
        { text: "\"제가 사기 캐예요. 몰라서 그렇죠. 사실 레벨 1인데 레벨 99처럼 보이게 꾸민 거예요\"", score: { magic: 1, hero: 0, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "\"딜탱힐 다 되는데요? 왜요? 전사도 되고 마법사도 되고 힐러도 됩니다. 올라운더예요\"", score: { magic: 0, hero: 2, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "\"아 그럼 밥이나 하죠 뭐... 요리 담당으로 들어갈게요. 전투 중간에 간식도 제공합니다\"", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 1, healer: 0, school: 0 } }
      ]
    },
    {
      id: 5,
      question: "전설의 마왕이 눈앞에 나타났다.\n넌 이 상황에서?",
      options: [
        { text: "\"드디어 메인 퀘스트다! 최종보스 등장! 이제 진짜 모험이 시작되는구나!\"", score: { magic: 0, hero: 2, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "\"어… 전 딱히 원한 건 아닌데요? 마왕님이랑 싸울 이유가 없는데요? 평화롭게 살고 싶어요\"", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 1, school: 0 } },
        { text: "\"너 혹시 나 아는 척하려고 나왔지? 나 유명한가? 팬이신가요? 사인해드릴까요?\"", score: { magic: 0, hero: 0, demon: 1, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "\"그냥 집 가고 싶다 진심… 마왕님이랑 싸우느니 그냥 집에서 넷플릭스나 보고 싶어요\"", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 2, school: 0 } }
      ]
    },
    {
      id: 6,
      question: "마법학교에 입학하게 됐는데,\n넌 어떤 과목을 선택할래?",
      options: [
        { text: "마법서 읽기 - 마법의 원리를 깊이 이해하고 싶어요. 실전보다는 지식이 먼저죠", score: { magic: 2, hero: 0, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "실전 마법 - 이론은 그만! 바로 써먹을 수 있는 마법을 배우고 싶어요", score: { magic: 1, hero: 1, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "마법 생물학 - 마법 생물들을 연구하고 싶어요. 슬라임의 생태라든가, 드래곤의 진화라든가", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 1, healer: 0, school: 0 } },
        { text: "마법 요리학 - 마법으로 요리하는 거예요! 불 마법으로 스테이크 굽기, 얼음 마법으로 아이스크림 만들기", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 1, school: 0 } }
      ]
    },
    {
      id: 7,
      question: "던전에서 보물상자를 발견했어!\n넌 어떻게 해?",
      options: [
        { text: "바로 열어보기 - 보물상자 발견! 바로 열어봐야죠! 뭐가 나올지 기대돼", score: { magic: 0, hero: 2, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "함정 의심하며 조심스럽게 - 함정일 수도 있어요. 함정 탐지 마법부터 써보고, 원격으로 열어보죠", score: { magic: 1, hero: 0, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "그냥 지나치기 - 위험할 수도 있으니까 그냥 지나칠게요. 안전이 최우선이죠", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 2, school: 0 } },
        { text: "상자 자체를 가져가기 - 보물보다 상자가 더 귀해 보여요. 수집품으로 삼을게요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 1, healer: 0, school: 0 } }
      ]
    },
    {
      id: 8,
      question: "갑자기 마왕이 \"계약하자\"고 해.\n넌 뭐라고 할래?",
      options: [
        { text: "\"조건부터 말해봐\" - 계약 조건을 먼저 봐야죠. 월급은? 복리후생은? 퇴직금은?", score: { magic: 0, hero: 0, demon: 1, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "\"절대 안 돼!\" - 마왕과 계약? 절대 안 돼요! 정의를 위해서라면 싸워야죠", score: { magic: 0, hero: 1, demon: 0, knight: 2, pet: 0, healer: 0, school: 0 } },
        { text: "\"어… 뭔가 이상한데?\" - 마왕이 갑자기 계약을 제안하다니 뭔가 수상해요. 함정일 수도 있어요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 1, school: 0 } },
        { text: "\"그냥 집에 가고 싶어요\" - 마왕님이랑 계약하느니 그냥 집에 가고 싶어요. 복잡한 일 싫어요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 2, school: 0 } }
      ]
    },
    {
      id: 9,
      question: "왕국 기사단에 들어가게 됐어.\n넌 어떤 역할을 맡고 싶어?",
      options: [
        { text: "전투 기사 - 앞장서서 싸우는 기사가 되고 싶어요! 검과 방패로 적을 물리치는 거죠", score: { magic: 0, hero: 1, demon: 0, knight: 2, pet: 0, healer: 0, school: 0 } },
        { text: "치유 기사 - 동료들을 치료하는 기사가 되고 싶어요. 힐링 마법으로 모두를 지켜요", score: { magic: 0, hero: 0, demon: 0, knight: 1, pet: 0, healer: 2, school: 0 } },
        { text: "마법 기사 - 검술과 마법을 모두 사용하는 기사가 되고 싶어요. 다재다능한 기사죠", score: { magic: 1, hero: 0, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "요리 기사 - 기사단 식당을 담당하는 기사가 되고 싶어요. 전투 후 맛있는 밥으로 동료들을 위로해요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 1, healer: 0, school: 0 } }
      ]
    },
    {
      id: 10,
      question: "귀여운 펫이 계약을 요청해왔어.\n넌 어떻게 할래?",
      options: [
        { text: "바로 계약하기 - 너무 귀여워요! 바로 계약할게요! 어떤 펫이든 환영해요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 2, healer: 0, school: 0 } },
        { text: "조건부터 확인하기 - 계약 조건을 먼저 봐야죠. 월급은? 복리후생은? 펫 보험은?", score: { magic: 0, hero: 0, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "먼저 친해지기 - 계약 전에 먼저 친해져야죠. 함께 놀고 이야기하면서 서로를 알아봐요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 1, healer: 1, school: 0 } },
        { text: "그냥 지나치기 - 펫은 귀찮아요. 먹이도 주고 씻겨주고... 그냥 혼자 살고 싶어요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 0, school: 1 } }
      ]
    },
    {
      id: 11,
      question: "이세계에서 살면서 가장 중요하게 생각하는 건?",
      options: [
        { text: "강해지는 것 - 이세계에서 살려면 강해져야죠! 레벨업하고 스킬을 올려서 최강자가 될 거예요", score: { magic: 1, hero: 2, demon: 0, knight: 1, pet: 0, healer: 0, school: 0 } },
        { text: "편안하게 사는 것 - 강해지는 것보다는 편안하게 사는 게 좋아요. 평화로운 마을에서 조용히 살고 싶어요", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 2, school: 0 } },
        { text: "새로운 경험 - 이세계에서 새로운 경험을 많이 해보고 싶어요! 모험하고 탐험하고 새로운 것을 발견해요", score: { magic: 1, hero: 1, demon: 0, knight: 0, pet: 0, healer: 0, school: 0 } },
        { text: "집에 돌아가는 것 - 이세계도 좋지만 결국 원래 세계로 돌아가고 싶어요. 가족들이 걱정하실 텐데", score: { magic: 0, hero: 0, demon: 0, knight: 0, pet: 0, healer: 1, school: 1 } }
      ]
    }
  ],
  
  results: {
    // 🌍 1. 마법사 세계 (3)
    magic_master: {
      title: "마법서 잘못 열고 마스터됨",
      description: "와! 당신은 진짜 마법사계의 천재네요! 🧙‍♂️ 마법서를 잘못 열었는데 오히려 마스터가 된 당신, 정말 대단해요! 어떤 마법이든 한 번 보면 바로 습득하는 당신은 마법학교의 전설이 될 거예요!",
      characteristics: [
        "📚 마법서만 보면 다 알아버림",
        "🎯 실전보다 이론이 더 재미있음",
        "🧠 마법 지식이 머릿속에 가득",
        "✨ 새로운 마법 발견에 열중"
      ],
      strategy: "마법학교에서 교수직을 맡아보세요! 당신의 지식을 후배들에게 전수하는 게 가장 어울릴 거예요! 그리고 새로운 마법 연구도 계속하세요!",
      color: "#8b5cf6",
      image: "/og-image.png",
      shareText: "나는 🧙‍♂️ 마법서 잘못 열고 마스터됨! 이세계 전이 테스트 결과를 확인해보세요! ✨"
    },
    slime_master: {
      title: "소환된 슬라임인데 개쎔",
      description: "오! 당신은 진짜 특별한 슬라임이네요! 💙 보통 슬라임은 약하지만, 당신은 소환되자마자 레벨이 폭발적으로 올라간 특별한 케이스! 이제 마왕도 한 방에 보낼 수 있을 거예요!",
      characteristics: [
        "💙 슬라임인데 마법도 씀",
        "🔥 레벨업 속도가 미쳤음",
        "🎯 전투력이 예상 초과",
        "😊 귀엽지만 무서움"
      ],
      strategy: "슬라임의 장점을 살려서 다양한 형태로 변신해보세요! 그리고 마법도 계속 연마해서 완전체가 되세요!",
      color: "#06b6d4",
      image: "/og-image.png",
      shareText: "나는 💙 소환된 슬라임인데 개쎔! 이세계 전이 테스트 결과를 확인해보세요! 🔥"
    },
    magic_dropout: {
      title: "마법학교 자퇴하고 용병됨",
      description: "와! 당신은 진짜 자유로운 영혼이네요! 🗡️ 마법학교의 규칙에 얽매이기 싫어서 자퇴하고 용병이 된 당신, 정말 멋져요! 실전에서 배우는 게 더 재미있다는 당신의 선택이 옳았어요!",
      characteristics: [
        "🗡️ 실전 경험이 풍부함",
        "💪 자유로운 영혼",
        "🎯 현실적인 전투 스타일",
        "💰 돈 벌어서 살아감"
      ],
      strategy: "용병 길드에서 활동하면서 다양한 의뢰를 받아보세요! 그리고 마법과 검술을 조합한 독특한 스타일을 만들어보세요!",
      color: "#dc2626",
      image: "/og-image.png",
      shareText: "나는 🗡️ 마법학교 자퇴하고 용병됨! 이세계 전이 테스트 결과를 확인해보세요! 💪"
    },

    // 🌍 2. 용사 세계 (3)
    hero_accident: {
      title: "\"아무것도 안 했는데 용사됨\"",
      description: "아! 당신은 진짜 운이 좋은 사람이네요! 🛡️ 아무것도 안 했는데 갑자기 용사가 된 당신, 정말 대박이에요! 하지만 이런 운은 계속되지 않으니 실력을 키워야 해요!",
      characteristics: [
        "🍀 운이 정말 좋음",
        "😅 실력보다는 운빨",
        "🎯 갑자기 중요한 역할",
        "🤷‍♂️ 본인도 당황함"
      ],
      strategy: "운에만 의존하지 말고 실력을 키워보세요! 그리고 팀원들과 협력해서 진정한 용사가 되어보세요!",
      color: "#f59e0b",
      image: "/og-image.png",
      shareText: "나는 🛡️ \"아무것도 안 했는데 용사됨\"! 이세계 전이 테스트 결과를 확인해보세요! 🍀"
    },
    dungeon_chef: {
      title: "던전에서 치킨집 창업함",
      description: "오! 당신은 진짜 창의적인 사람이네요! 🍗 던전에서 치킨집을 창업한 당신, 정말 대단해요! 모험가들이 맛있는 치킨을 먹고 힘을 얻는다니, 정말 멋진 아이디어예요!",
      characteristics: [
        "🍗 요리 실력이 뛰어남",
        "💡 창의적인 아이디어",
        "💰 사업 감각이 있음",
        "😊 사람들과 잘 어울림"
      ],
      strategy: "던전 체인점을 만들어보세요! 그리고 모험가들을 위한 특별한 요리도 개발해보세요!",
      color: "#f97316",
      image: "/og-image.png",
      shareText: "나는 🍗 던전에서 치킨집 창업함! 이세계 전이 테스트 결과를 확인해보세요! 💡"
    },
    npc_legend: {
      title: "NPC인데 존재감 미침",
      description: "와! 당신은 진짜 특별한 NPC네요! 🎭 보통 NPC는 배경이지만, 당신은 주인공보다 더 인기가 많아요! 퀘스트를 주는 NPC인데 실수로 마왕을 물리쳐버린 당신, 정말 대단해요!",
      characteristics: [
        "🎭 NPC인데 주인공급",
        "💬 대화가 재미있음",
        "🎯 실수로 중요한 일 해결",
        "😊 마을 사람들이 좋아함"
      ],
      strategy: "NPC의 장점을 살려서 마을 사람들과 친해지세요! 그리고 실수로 해결한 일들을 계속 해보세요!",
      color: "#10b981",
      image: "/og-image.png",
      shareText: "나는 🎭 NPC인데 존재감 미침! 이세계 전이 테스트 결과를 확인해보세요! 💬"
    },

    // 🌍 3. 마왕 세계 (2)
    demon_lover: {
      title: "마왕의 전 애인",
      description: "오! 당신은 진짜 로맨틱한 사람이네요! 💔 마왕과 사랑에 빠졌지만 헤어진 당신, 정말 드라마틱해요! 하지만 마왕도 사람이니까 이해할 수 있어요. 새로운 사랑을 찾아보세요!",
      characteristics: [
        "💔 마왕과의 과거가 있음",
        "😢 아직 마음에 상처",
        "🎭 드라마틱한 과거",
        "💪 강한 마음의 소유자"
      ],
      strategy: "과거는 과거로 두고 새로운 시작을 해보세요! 그리고 마왕과의 경험을 바탕으로 다른 사람들을 도와보세요!",
      color: "#7c3aed",
      image: "/og-image.png",
      shareText: "나는 💔 마왕의 전 애인! 이세계 전이 테스트 결과를 확인해보세요! 🎭"
    },
    yandere_contractor: {
      title: "얀데레 계약자",
      description: "와! 당신은 진짜 집착이 강한 사람이네요! 🔪 마왕과 계약을 맺었는데 점점 얀데레가 되어가는 당신, 정말 무서워요! 하지만 그 마음은 진심이니까 이해할 수 있어요!",
      characteristics: [
        "🔪 집착이 강함",
        "💕 사랑이 독하다",
        "😈 점점 어두워짐",
        "🎯 목표에 집중"
      ],
      strategy: "집착을 조금 줄이고 건강한 사랑을 찾아보세요! 그리고 마왕도 당신을 걱정할 거예요!",
      color: "#be185d",
      image: "/og-image.png",
      shareText: "나는 🔪 얀데레 계약자! 이세계 전이 테스트 결과를 확인해보세요! 💕"
    },

    // 🌍 4. 기사단 세계 (2)
    knight_chef: {
      title: "왕국 기사단장인데 집밥 좋아함",
      description: "오! 당신은 진짜 귀여운 기사단장이네요! 🍳 왕국 기사단장인데 집밥을 가장 좋아하는 당신, 정말 사랑스러워요! 전투보다는 요리가 더 재미있다는 당신, 정말 특별해요!",
      characteristics: [
        "🍳 요리 실력이 뛰어남",
        "🛡️ 기사단장이지만 평화주의",
        "🏠 집밥을 가장 좋아함",
        "😊 부하들이 좋아함"
      ],
      strategy: "기사단 식당을 만들어서 부하들에게 맛있는 밥을 해주세요! 그리고 평화로운 기사단을 만들어보세요!",
      color: "#059669",
      image: "/og-image.png",
      shareText: "나는 🍳 왕국 기사단장인데 집밥 좋아함! 이세계 전이 테스트 결과를 확인해보세요! 🛡️"
    },
    knight_failure: {
      title: "일 못해서 전역당함",
      description: "아! 당신은 진짜 솔직한 사람이네요! 😅 기사단에 들어갔는데 일을 제대로 못 해서 전역당한 당신, 정말 솔직해요! 하지만 솔직함이 최고의 미덕이니까 괜찮아요!",
      characteristics: [
        "😅 솔직함이 최고의 미덕",
        "🤷‍♂️ 일은 못하지만 착함",
        "😊 실수해도 웃음으로 넘김",
        "💪 새로운 길을 찾음"
      ],
      strategy: "기사단 말고 다른 길을 찾아보세요! 솔직함을 살려서 다른 일을 해보세요!",
      color: "#6b7280",
      image: "/og-image.png",
      shareText: "나는 😅 일 못해서 전역당함! 이세계 전이 테스트 결과를 확인해보세요! 🤷‍♂️"
    },

    // 🌍 5. 펫 계약 세계 (2)
    cute_pet: {
      title: "귀엽지만 전투력 최고 펫",
      description: "와! 당신은 진짜 특별한 펫이네요! 🐾 귀엽기만 한 줄 알았는데 전투력이 최고인 당신, 정말 대단해요! 주인을 지키는 강한 펫이 되어보세요!",
      characteristics: [
        "🐾 귀엽지만 강함",
        "🛡️ 주인을 지키는 의지",
        "⚡ 전투력이 최고",
        "😊 평소에는 귀여움"
      ],
      strategy: "주인과 함께 모험을 떠나보세요! 그리고 귀여운 모습으로 적들을 혼란스럽게 만들어보세요!",
      color: "#ec4899",
      image: "/og-image.png",
      shareText: "나는 🐾 귀엽지만 전투력 최고 펫! 이세계 전이 테스트 결과를 확인해보세요! ⚡"
    },
    demon_pet: {
      title: "마족인데 주인에게 심쿵함",
      description: "오! 당신은 진짜 로맨틱한 마족이네요! 😈 마족인데 인간 주인에게 반해버린 당신, 정말 귀여워요! 마족의 자존심은 잠시 접고 사랑을 찾아보세요!",
      characteristics: [
        "😈 마족이지만 순수함",
        "💕 사랑에 빠진 마족",
        "🎭 자존심과 사랑 사이",
        "😊 주인만 보면 행복"
      ],
      strategy: "마족의 자존심은 잠시 접고 주인과의 사랑을 키워보세요! 그리고 마족의 힘으로 주인을 지켜보세요!",
      color: "#7c2d12",
      image: "/og-image.png",
      shareText: "나는 😈 마족인데 주인에게 심쿵함! 이세계 전이 테스트 결과를 확인해보세요! 💕"
    },

    // 🌍 6. 치유 슬로우라이프 세계 (2)
    tree_healer: {
      title: "나무 심고 사는 힐러",
      description: "와! 당신은 진짜 평화로운 사람이네요! 🌳 나무를 심고 조용히 사는 힐러인 당신, 정말 아름다워요! 자연과 함께하는 삶이 가장 행복한 당신, 정말 멋져요!",
      characteristics: [
        "🌳 자연을 사랑함",
        "💚 평화로운 삶을 선호",
        "🌿 나무 심는 것을 좋아함",
        "😊 조용한 힐러"
      ],
      strategy: "더 많은 나무를 심어서 마을을 아름답게 만들어보세요! 그리고 자연의 힘으로 사람들을 치유해보세요!",
      color: "#16a34a",
      image: "/og-image.png",
      shareText: "나는 🌳 나무 심고 사는 힐러! 이세계 전이 테스트 결과를 확인해보세요! 💚"
    },
    onsen_manager: {
      title: "전투 PTSD로 온천 관리하는 중",
      description: "아! 당신은 진짜 현명한 사람이네요! 🛁 전투에서 받은 PTSD로 온천을 관리하게 된 당신, 정말 현명한 선택이에요! 평화로운 온천에서 마음을 치유해보세요!",
      characteristics: [
        "🛁 온천 관리에 열중",
        "😌 평화로운 삶을 찾음",
        "💆‍♂️ 마음의 치유 중",
        "😊 손님들을 편안하게 함"
      ],
      strategy: "온천을 더 아름답게 만들어서 더 많은 사람들이 편안해질 수 있도록 해보세요! 그리고 자신의 마음도 치유해보세요!",
      color: "#0891b2",
      image: "/og-image.png",
      shareText: "나는 🛁 전투 PTSD로 온천 관리하는 중! 이세계 전이 테스트 결과를 확인해보세요! 😌"
    },

    // 🌍 7. 초능력 고등학교 세계 (1)
    school_lover: {
      title: "능력은 없는데 연애만 함",
      description: "오! 당신은 진짜 로맨틱한 학생이네요! 💕 초능력 고등학교에 왔는데 능력은 없고 연애만 하는 당신, 정말 귀여워요! 능력보다는 사랑이 더 중요하다는 당신, 정말 멋져요!",
      characteristics: [
        "💕 연애에만 집중",
        "😊 능력은 없지만 행복함",
        "🎭 드라마틱한 연애",
        "😅 능력자들 사이에서 살아남음"
      ],
      strategy: "능력은 없어도 사랑만 있으면 충분해요! 그리고 연애를 통해 더 많은 사람들과 친해져보세요!",
      color: "#f43f5e",
      image: "/og-image.png",
      shareText: "나는 💕 능력은 없는데 연애만 함! 이세계 전이 테스트 결과를 확인해보세요! 😊"
    }
  }
}; 