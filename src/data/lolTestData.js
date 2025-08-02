// 🎮 롤 라인 추천 테스트 데이터
export const lolTestData = {
  // 📝 테스트 기본 정보
  testInfo: {
    id: "lol-line-recommendation",
    title: "롤 라인 추천 테스트",
    subtitle: "나에게 어울리는 라인은?",
    description: "성향 기반으로 추천하는 롤 라인 & 역할군",
    emoji: "🎮",
    thumbnail: "/images/tests/lol/thumbnail.png"
  },

  // ❓ 1단계: 라인 결정 질문들 (6문항)
  lineQuestions: [
    {
      question: "🎯 게임에서 당신이 가장 중요하게 생각하는 것은?",
      options: [
        { text: "팀을 이끌고 승리를 만드는 것", type: "carry" },
        { text: "팀원들을 보호하고 지원하는 것", type: "support" },
        { text: "개인적인 성장과 실력 향상", type: "growth" },
        { text: "팀워크와 협동을 통한 승리", type: "teamwork" }
      ]
    },
    {
      question: "⚡ 긴장감 넘치는 순간, 당신은?",
      options: [
        { text: "직접 나서서 상황을 해결한다", type: "aggressive" },
        { text: "뒤에서 안전하게 지원한다", type: "defensive" },
        { text: "팀원들과 함께 대응한다", type: "cooperative" },
        { text: "상황을 분석하고 최적의 타이밍을 기다린다", type: "patient" }
      ]
    },
    {
      question: "🎪 새로운 메타나 챔피언을 시도할 때?",
      options: [
        { text: "즉시 도전해보고 싶다", type: "flexible" },
        { text: "충분히 연습하고 익숙해진 후에", type: "stable" },
        { text: "팀원들과 상의해서 결정한다", type: "collaborative" },
        { text: "기존에 익숙한 것을 선호한다", type: "conservative" }
      ]
    },
    {
      question: "👥 팀원과의 소통에서 당신은?",
      options: [
        { text: "적극적으로 정보를 공유한다", type: "communicative" },
        { text: "필요할 때만 간단히 말한다", type: "quiet" },
        { text: "팀원들의 의견을 듣고 조율한다", type: "mediator" },
        { text: "명령을 내리고 지시한다", type: "leader" }
      ]
    },
    {
      question: "📊 게임 결과를 분석할 때?",
      options: [
        { text: "내 플레이를 먼저 점검한다", type: "self-focused" },
        { text: "팀 전체의 플레이를 본다", type: "team-focused" },
        { text: "상대팀의 플레이를 분석한다", type: "opponent-focused" },
        { text: "전체적인 게임 플로우를 본다", type: "macro-focused" }
      ]
    },
    {
      question: "🎨 게임 스타일을 한 마디로 표현하면?",
      options: [
        { text: "화려하고 임팩트 있는 플레이", type: "flashy" },
        { text: "안정적이고 꾸준한 플레이", type: "steady" },
        { text: "창의적이고 예측 불가능한 플레이", type: "creative" },
        { text: "전략적이고 계산된 플레이", type: "strategic" }
      ]
    }
  ],

  // ❓ 2단계: 세부 성향 결정 질문들
  roleQuestions: {
    top: [
      {
        question: "🗡️ 탑라인에서 당신이 선호하는 플레이는?",
        options: [
          { text: "적극적으로 상대를 압박한다", type: "aggressive" },
          { text: "안전하게 CS를 챙긴다", type: "farm" },
          { text: "팀원들과 함께 로밍한다", type: "roam" },
          { text: "상대의 실수를 기다린다", type: "patient" }
        ]
      },
      {
        question: "🛡️ 팀파이트에서 당신의 역할은?",
        options: [
          { text: "앞장서서 적진을 무너뜨린다", type: "engage" },
          { text: "뒤에서 안전하게 딜을 넣는다", type: "damage" },
          { text: "팀원들을 보호하고 지원한다", type: "protect" },
          { text: "적의 후방을 기습한다", type: "flank" }
        ]
      },
      {
        question: "🌱 라인전에서 당신은?",
        options: [
          { text: "상대를 계속 견제하며 우위를 점한다", type: "harass" },
          { text: "CS에 집중하며 안정적으로 성장한다", type: "scale" },
          { text: "정글러와 함께 갱킹을 시도한다", type: "gank" },
          { text: "상대의 패턴을 분석한다", type: "analyze" }
        ]
      },
      {
        question: "⚔️ 상대와 1:1 대결할 때 당신은?",
        options: [
          { text: "강력한 콤보로 상대를 압도한다", type: "aggressive" },
          { text: "스킬을 아끼며 안전하게 플레이한다", type: "farm" },
          { text: "상대의 스킬을 피하며 교묘하게 싸운다", type: "skillful" },
          { text: "팀원의 도움을 기다린다", type: "team-reliant" }
        ]
      },
      {
        question: "🎯 오브젝트 싸움에서 당신의 포지션은?",
        options: [
          { text: "앞에서 적을 차단하고 보호한다", type: "engage" },
          { text: "뒤에서 안전하게 딜링한다", type: "damage" },
          { text: "옆에서 적을 견제한다", type: "harass" },
          { text: "오브젝트를 직접 처리한다", type: "objective" }
        ]
      }
    ],
    jungle: [
      {
        question: "🌲 정글링할 때 당신이 중시하는 것은?",
        options: [
          { text: "적극적으로 갱킹을 시도한다", type: "gank" },
          { text: "효율적인 팜과 오브젝트 컨트롤", type: "farm" },
          { text: "라인들의 상황을 지켜보며 지원한다", type: "support" },
          { text: "상대 정글러의 움직임을 추적한다", type: "track" }
        ]
      },
      {
        question: "🎯 갱킹 스타일은?",
        options: [
          { text: "예측 불가능한 타이밍으로 기습한다", type: "surprise" },
          { text: "확실한 상황에서만 안전하게 간다", type: "safe" },
          { text: "라인과 함께 계획적으로 갱킹한다", type: "coordinated" },
          { text: "상대의 실수를 기다린다", type: "patient" }
        ]
      },
      {
        question: "⚔️ 오브젝트 싸움에서 당신은?",
        options: [
          { text: "스틸을 노리며 적극적으로 개입한다", type: "steal" },
          { text: "팀과 함께 안전하게 처리한다", type: "secure" },
          { text: "상대팀을 견제하며 시간을 번다", type: "stall" },
          { text: "다른 오브젝트를 대신 가져간다", type: "trade" }
        ]
      },
      {
        question: "🌍 맵 컨트롤에 대한 당신의 자세는?",
        options: [
          { text: "적극적으로 상대 정글을 침입한다", type: "gank" },
          { text: "우리 정글을 안전하게 지킨다", type: "farm" },
          { text: "라인들과 함께 맵을 압박한다", type: "pressure" },
          { text: "상대의 움직임을 예측하고 대응한다", type: "counter" }
        ]
      },
      {
        question: "🎪 팀파이트에서 당신의 역할은?",
        options: [
          { text: "적의 후방을 기습하여 혼란을 만든다", type: "surprise" },
          { text: "팀원을 보호하며 안정적으로 플레이한다", type: "safe" },
          { text: "적의 주요 딜러를 제거한다", type: "assassin" },
          { text: "팀의 이니시에이션을 돕는다", type: "initiate" }
        ]
      }
    ],
    mid: [
      {
        question: "🎪 미드라인에서 당신이 좋아하는 것은?",
        options: [
          { text: "1:1 대결에서 상대를 압도한다", type: "solo" },
          { text: "로밍으로 다른 라인을 도와준다", type: "roam" },
          { text: "팀과 함께 오브젝트를 컨트롤한다", type: "objective" },
          { text: "상대의 패턴을 분석하고 대응한다", type: "analyze" }
        ]
      },
      {
        question: "💥 딜링 스타일은?",
        options: [
          { text: "순간적인 폭발력으로 상대를 제거한다", type: "burst" },
          { text: "지속적인 딜로 상대를 압박한다", type: "sustain" },
          { text: "팀과 함께 조합 딜을 넣는다", type: "combo" },
          { text: "안전한 거리에서 견제한다", type: "poke" }
        ]
      },
      {
        question: "🎯 스킬샷에 대한 당신의 자세는?",
        options: [
          { text: "어려운 스킬샷도 도전한다", type: "skill" },
          { text: "확실한 스킬샷을 선호한다", type: "reliable" },
          { text: "상대의 움직임을 예측해서 쏜다", type: "predict" },
          { text: "팀원과 함께 연계 스킬을 사용한다", type: "coordinate" }
        ]
      },
      {
        question: "🌍 맵 압박에 대한 당신의 전략은?",
        options: [
          { text: "적극적으로 상대 정글을 압박한다", type: "solo" },
          { text: "우리 정글을 보호하며 안정적으로 플레이한다", type: "roam" },
          { text: "라인들과 함께 맵을 압박한다", type: "pressure" },
          { text: "상대의 움직임을 추적하고 대응한다", type: "track" }
        ]
      },
      {
        question: "⚡ 순간적인 기회 포착 능력은?",
        options: [
          { text: "상대의 실수를 놓치지 않고 즉시 반격한다", type: "burst" },
          { text: "꾸준한 압박으로 상대를 지치게 만든다", type: "sustain" },
          { text: "팀원과 함께 기회를 만든다", type: "create" },
          { text: "상대의 패턴을 파악하고 대응한다", type: "adapt" }
        ]
      }
    ],
    adc: [
      {
        question: "🎯 원딜로서 당신이 중시하는 것은?",
        options: [
          { text: "안전한 포지셔닝과 생존", type: "safe" },
          { text: "적극적인 딜링과 킬참여", type: "aggressive" },
          { text: "팀과의 협동과 소통", type: "cooperative" },
          { text: "개인적인 성장과 실력 향상", type: "growth" }
        ]
      },
      {
        question: "⚡ 딜링 타이밍은?",
        options: [
          { text: "기회를 보면 즉시 딜을 넣는다", type: "opportunistic" },
          { text: "팀의 보호를 받으며 안정적으로 딜한다", type: "protected" },
          { text: "서폿과 함께 타이밍을 맞춘다", type: "coordinated" },
          { text: "상대의 스킬을 피한 후 딜한다", type: "calculated" }
        ]
      },
      {
        question: "🎪 팀파이트에서 당신의 포지션은?",
        options: [
          { text: "앞에서 적극적으로 딜링한다", type: "frontline" },
          { text: "뒤에서 안전하게 딜링한다", type: "backline" },
          { text: "옆에서 적을 견제한다", type: "flank" },
          { text: "팀원들과 함께 포지션을 잡는다", type: "formation" }
        ]
      },
      {
        question: "🌱 라인전에서 당신의 스타일은?",
        options: [
          { text: "적극적으로 상대를 압박하며 CS를 챙긴다", type: "aggressive" },
          { text: "안전하게 CS에 집중하며 성장한다", type: "safe" },
          { text: "서폿과 함께 상대를 견제한다", type: "harass" },
          { text: "상대의 패턴을 분석하고 대응한다", type: "analyze" }
        ]
      },
      {
        question: "🎯 오브젝트 싸움에서 당신의 역할은?",
        options: [
          { text: "적극적으로 오브젝트에 딜을 넣는다", type: "opportunistic" },
          { text: "팀의 보호를 받으며 안전하게 딜링한다", type: "protected" },
          { text: "상대팀을 견제하며 시간을 번다", type: "stall" },
          { text: "다른 오브젝트를 대신 가져간다", type: "trade" }
        ]
      }
    ],
    support: [
      {
        question: "🛡️ 서폿으로서 당신의 역할은?",
        options: [
          { text: "원딜을 보호하고 지원한다", type: "protect" },
          { text: "적극적으로 적을 견제한다", type: "harass" },
          { text: "팀 전체를 지원하고 조율한다", type: "coordinate" },
          { text: "상대의 움직임을 추적하고 정보를 제공한다", type: "scout" }
        ]
      },
      {
        question: "👁️ 와딩에 대한 당신의 자세는?",
        options: [
          { text: "적극적으로 위험한 곳에도 와드를 박는다", type: "aggressive" },
          { text: "안전한 곳에 꼼꼼하게 와드를 박는다", type: "safe" },
          { text: "팀원들과 함께 와딩을 계획한다", type: "coordinated" },
          { text: "상대의 와딩 패턴을 분석한다", type: "analyze" }
        ]
      },
      {
        question: "🎯 스킬 사용 스타일은?",
        options: [
          { text: "적극적으로 적을 묶고 견제한다", type: "engage" },
          { text: "팀원을 보호하고 힐링한다", type: "heal" },
          { text: "팀과 함께 연계 스킬을 사용한다", type: "combo" },
          { text: "상대의 스킬을 예측하고 대응한다", type: "counter" }
        ]
      },
      {
        question: "🌍 맵 압박에 대한 당신의 전략은?",
        options: [
          { text: "적극적으로 상대 정글을 압박한다", type: "harass" },
          { text: "우리 정글을 보호하며 안정적으로 플레이한다", type: "protect" },
          { text: "라인들과 함께 맵을 압박한다", type: "pressure" },
          { text: "상대의 움직임을 추적하고 대응한다", type: "track" }
        ]
      },
      {
        question: "⚡ 순간적인 기회 포착 능력은?",
        options: [
          { text: "상대의 실수를 놓치지 않고 즉시 반격한다", type: "engage" },
          { text: "꾸준한 보호로 팀원을 지켜낸다", type: "heal" },
          { text: "팀원과 함께 기회를 만든다", type: "create" },
          { text: "상대의 패턴을 파악하고 대응한다", type: "adapt" }
        ]
      }
    ]
  },

  // 🎯 결과 데이터
  results: {
    // 탑 라인 결과들
    "top-aggressive-engage": {
      line: "탑",
      role: "전사형",
      title: "탑 / 전사형",
      catchphrase: "앞장서서 팀을 이끄는 무쌍의 전사",
      description: [
        "당신은 팀의 앞장에서 적진을 무너뜨리는 전사형 플레이어입니다. 강력한 근접 딜링과 탱킹 능력을 바탕으로 팀파이트의 중심이 되어 적들을 압도합니다.",
        "라인전에서도 적극적인 견제와 압박으로 상대를 위축시키며, CS와 킬을 모두 챙기는 효율적인 플레이를 선보입니다. 상대방이 당신을 만나면 항상 긴장할 수밖에 없죠.",
        "팀파이트에서는 적극적으로 적진에 뛰어들어 적의 주요 딜러를 제거하거나, 팀원들이 안전하게 딜링할 수 있도록 보호하는 역할을 맡습니다. 당신의 존재감이 팀의 승리를 이끄는 핵심입니다."
      ],
      champions: [
        {
          name: "다리우스",
          description: "노익장의 압도적인 근접 딜링으로 적을 무자비하게 베어내는 전사"
        },
        {
          name: "레넥톤",
          description: "분노 게이지를 활용한 폭발적인 콤보로 상대를 압도하는 사막의 지배자"
        },
        {
          name: "모데카이저",
          description: "죽음의 영역을 펼쳐 적을 고립시키고 1:1 대결에서 승리하는 철의 영주"
        }
      ],
      goodSynergy: {
        type: "정글/갱킹형",
        reason: "정글러의 갱킹과 함께 상대 탑을 완전히 압도할 수 있어요"
      },
      badSynergy: {
        type: "서폿/유틸형",
        reason: "서폿의 보호 능력이 탑라인에서는 크게 도움이 되지 않아요"
      },
      characterName: "다레모스",
      image: "/images/tests/lol/top-aggressive-engage.png"
    },
    "top-farm-damage": {
      line: "탑",
      role: "딜러형",
      title: "탑 / 딜러형",
      catchphrase: "안정적인 성장으로 후반을 장악하는 원거리 딜러",
      description: [
        "당신은 안정적인 CS 수집과 성장을 통해 후반에 강력한 딜링을 보여주는 딜러형 플레이어입니다. 라인전에서는 안전하게 팜에 집중하며, 후반 팀파이트에서 진가를 발휘합니다.",
        "원거리 딜링을 통해 안전한 포지션에서 지속적인 딜을 넣으며, 상대방이 접근하기 어려운 거리에서 압박을 가합니다. 꾸준한 성장으로 게임 후반부의 핵심 딜러가 됩니다.",
        "팀파이트에서는 뒤에서 안전하게 딜링하면서도, 적절한 타이밍에 진입하여 상대의 주요 딜러를 제거하는 역할을 맡습니다. 당신의 안정적인 플레이가 팀의 승리를 보장합니다."
      ],
      champions: [
        {
          name: "케넨",
          description: "번개를 다루는 요들로 원거리 견제와 강력한 궁극기로 팀파이트를 장악"
        },
        {
          name: "제이스",
          description: "근접/원거리 모드를 전환하며 상황에 맞는 딜링을 보여주는 미래의 수호자"
        },
        {
          name: "퀸",
          description: "독을 바른 화살로 상대를 괴롭히며 안전한 원거리 딜링을 선보이는 데마시아의 정찰병"
        }
      ],
      goodSynergy: {
        type: "정글/갱킹형",
        reason: "정글러의 보호로 안전하게 성장할 수 있어요"
      },
      badSynergy: {
        type: "미드/어시스트형",
        reason: "미드의 로밍이 탑라인에 집중되면 상대가 더욱 압박할 수 있어요"
      },
      characterName: "케제퀸",
      image: "/images/tests/lol/top-farm-damage.png"
    },

    // 정글 라인 결과들
    "jungle-gank-surprise": {
      line: "정글",
      role: "갱킹형",
      title: "정글 / 갱킹형",
      catchphrase: "예측 불가능한 갱킹으로 게임을 장악하는 그림자",
      description: [
        "당신은 예측 불가능한 타이밍과 루트로 갱킹을 시도하여 상대방을 혼란시키는 갱킹형 플레이어입니다. 각 라인의 상황을 정확히 파악하고 최적의 타이밍에 나타나 승기를 잡습니다.",
        "정글링 효율성과 갱킹의 균형을 잘 맞추며, 상대 정글러의 움직임을 읽고 카운터 갱킹을 시도하기도 합니다. 당신의 갱킹은 항상 상대방에게 공포의 대상이 됩니다.",
        "오브젝트 싸움에서는 스틸을 노리거나 적극적으로 개입하여 팀에게 유리한 상황을 만들어줍니다. 당신의 존재감이 게임의 흐름을 완전히 바꿀 수 있는 힘을 가지고 있습니다."
      ],
      champions: [
        {
          name: "리신",
          description: "용의 분노로 적을 차원문 너머로 날려보내는 사막의 무사"
        },
        {
          name: "엘리스",
          description: "거미의 본능으로 적을 거미줄에 가두고 독으로 고통받게 하는 거미 여왕"
        },
        {
          name: "자크",
          description: "점액으로 변신하며 예측 불가능한 갱킹을 시도하는 생체 실험체"
        }
      ],
      goodSynergy: {
        type: "탑/전사형",
        reason: "탑의 압박과 함께 상대 탑을 완전히 압도할 수 있어요"
      },
      badSynergy: {
        type: "원딜/보수형",
        reason: "원딜이 너무 보수적이면 갱킹의 효과가 떨어질 수 있어요"
      },
      characterName: "리엘자",
      image: "/images/tests/lol/jungle-gank-surprise.png"
    },
    "jungle-farm-secure": {
      line: "정글",
      role: "팜형",
      title: "정글 / 팜형",
      catchphrase: "효율적인 팜으로 후반을 장악하는 경제의 달인",
      description: [
        "당신은 효율적인 정글링과 오브젝트 컨트롤을 통해 팀의 경제적 우위를 만들어내는 팜형 플레이어입니다. 안정적인 성장을 통해 후반에 강력한 존재감을 발휘합니다.",
        "갱킹보다는 정글 팜과 오브젝트에 집중하며, 상대 정글러보다 빠른 성장을 통해 카운터 정글링을 시도하기도 합니다. 당신의 경제력이 팀의 승리를 이끄는 핵심입니다.",
        "오브젝트 싸움에서는 확실한 상황에서만 안전하게 처리하며, 팀과의 협력으로 드래곤과 바론을 확실히 가져갑니다. 당신의 안정적인 플레이가 팀에게 믿음직한 후방 지원이 됩니다."
      ],
      champions: [
        {
          name: "마오카이",
          description: "자연의 힘으로 정글을 지배하며 안정적인 성장을 보여주는 고대의 수호자"
        },
        {
          name: "누누와 윌럼프",
          description: "설원의 친구들과 함께 효율적인 정글링으로 후반을 장악하는 설원의 기사"
        },
        {
          name: "람머스",
          description: "거북이의 인내심으로 꾸준히 성장하며 후반에 강력한 탱킹을 선보이는 방어의 달인"
        }
      ],
      goodSynergy: {
        type: "원딜/보수형",
        reason: "원딜의 안정적인 성장과 함께 후반을 장악할 수 있어요"
      },
      badSynergy: {
        type: "미드/어시스트형",
        reason: "미드가 너무 공격적이면 정글의 안정적인 성장이 어려워질 수 있어요"
      },
      characterName: "마누람",
      image: "/images/tests/lol/jungle-farm-secure.png"
    },

    // 미드 라인 결과들
    "mid-solo-burst": {
      line: "미드",
      role: "어시스트형",
      title: "미드 / 어시스트형",
      catchphrase: "1:1 대결의 달인, 순간의 폭발력으로 적을 제거",
      description: [
        "당신은 미드라인에서 1:1 대결을 선호하며, 순간적인 폭발력으로 상대를 제거하는 어시스트형 플레이어입니다. 강력한 콤보와 스킬샷으로 상대를 압도합니다.",
        "라인전에서는 적극적인 견제와 딜링을 통해 상대를 압박하며, 킬을 노리는 공격적인 플레이를 선보입니다. 당신의 존재감이 미드라인을 완전히 장악합니다.",
        "로밍을 통한 다른 라인 지원도 적극적으로 시도하며, 팀 전체의 승기를 이끄는 역할을 맡습니다. 당신의 개입이 게임의 흐름을 바꿀 수 있는 핵심입니다."
      ],
      champions: [
        {
          name: "제라스",
          description: "죽음의 손길로 적을 묶고 강력한 콤보로 제거하는 그림자의 사제"
        },
        {
          name: "르블랑",
          description: "환술과 기만으로 상대를 혼란시키며 순간적인 폭발력을 보여주는 환술사"
        },
        {
          name: "피즈",
          description: "바다의 힘을 다루며 기동성과 폭발적인 딜링으로 적을 제거하는 대양의 트라이튼"
        }
      ],
      goodSynergy: {
        type: "정글/갱킹형",
        reason: "정글러의 갱킹과 함께 미드라인을 완전히 압도할 수 있어요"
      },
      badSynergy: {
        type: "서폿/유틸형",
        reason: "서폿의 보호 능력이 미드라인에서는 크게 도움이 되지 않아요"
      },
      characterName: "제르피",
      image: "/images/tests/lol/mid-solo-burst.png"
    },
    "mid-roam-sustain": {
      line: "미드",
      role: "로밍형",
      title: "미드 / 로밍형",
      catchphrase: "적극적인 로밍으로 팀 전체를 이끄는 전략가",
      description: [
        "당신은 미드라인에서 안정적인 성장을 바탕으로 적극적인 로밍을 통해 다른 라인을 지원하는 로밍형 플레이어입니다. 팀 전체의 승기를 고려하는 전략적 사고를 가지고 있습니다.",
        "라인전에서는 안정적으로 CS를 챙기며, 상대 미드가 로밍을 가면 즉시 따라가거나 다른 라인을 지원합니다. 당신의 로밍이 팀의 승리를 이끄는 핵심입니다.",
        "지속적인 딜링을 통해 팀파이트에서도 중요한 역할을 맡으며, 팀원들과의 협력으로 승리를 만들어냅니다. 당신의 전략적 플레이가 팀의 승리를 보장합니다."
      ],
      champions: [
        {
          name: "갈리오",
          description: "데마시아의 수호자로 전장을 날아다니며 팀원들을 보호하는 거대한 석상"
        },
        {
          name: "트위스티드 페이트",
          description: "운명의 카드로 전장을 장악하며 순간이동으로 모든 라인을 지원하는 카드의 달인"
        },
        {
          name: "탈론",
          description: "그림자 속에서 빠르게 이동하며 적의 약점을 노리는 암살자"
        }
      ],
      goodSynergy: {
        type: "원딜/보수형",
        reason: "원딜의 안정적인 성장을 로밍으로 보호할 수 있어요"
      },
      badSynergy: {
        type: "탑/전사형",
        reason: "탑이 너무 공격적이면 로밍의 효과가 떨어질 수 있어요"
      },
      characterName: "갈트탈",
      image: "/images/tests/lol/mid-roam-sustain.png"
    },

    // 원딜 라인 결과들
    "adc-safe-protected": {
      line: "원딜",
      role: "보수형",
      title: "원딜 / 보수형",
      catchphrase: "안전한 포지셔닝으로 꾸준한 딜링을 보여주는 신중한 사수",
      description: [
        "당신은 안전한 포지셔닝과 생존을 최우선으로 하며, 팀의 보호를 받아 꾸준한 딜링을 보여주는 보수형 플레이어입니다. CS 수집에 집중하며 안정적으로 성장합니다.",
        "라인전에서는 서폿과의 협력을 통해 안전하게 CS를 챙기며, 위험한 상황을 피해 꾸준히 성장합니다. 당신의 안정적인 플레이가 팀의 후반 승리를 보장합니다.",
        "팀파이트에서는 뒤에서 안전하게 딜링하면서도, 적절한 타이밍에 진입하여 상대의 주요 딜러를 제거하는 역할을 맡습니다. 당신의 꾸준한 딜링이 팀의 승리를 이끕니다."
      ],
      champions: [
        {
          name: "케이틀린",
          description: "데마시아의 정찰병으로 긴 사거리와 안전한 포지셔닝으로 꾸준한 딜링을 선보이는 저격수"
        },
        {
          name: "애쉬",
          description: "프렐요드의 여왕으로 화살로 적을 둔화시키며 안전한 원거리 딜링을 보여주는 얼음의 궁수"
        },
        {
          name: "진",
          description: "자운의 범죄 조직원으로 폭발적인 딜링과 안전한 포지셔닝을 모두 갖춘 화약의 달인"
        }
      ],
      goodSynergy: {
        type: "서폿/보호형",
        reason: "서폿의 보호 능력과 함께 안전하게 성장할 수 있어요"
      },
      badSynergy: {
        type: "정글/갱킹형",
        reason: "정글러가 너무 공격적이면 원딜의 안정적인 성장이 어려워질 수 있어요"
      },
      characterName: "케이애진",
      image: "/images/tests/lol/adc-safe-protected.png"
    },
    "adc-aggressive-frontline": {
      line: "원딜",
      role: "공격형",
      title: "원딜 / 공격형",
      catchphrase: "적극적인 딜링으로 적을 압도하는 공격적인 사수",
      description: [
        "당신은 적극적인 딜링과 킬참여를 통해 게임을 주도하는 공격형 플레이어입니다. 기회를 보면 즉시 딜을 넣으며 상대를 압박합니다.",
        "라인전에서도 적극적인 견제와 딜링을 통해 상대를 위축시키며, 서폿과의 협력으로 킬을 노리는 공격적인 플레이를 선보입니다. 당신의 존재감이 바텀라인을 완전히 장악합니다.",
        "팀파이트에서는 앞에서 적극적으로 딜링하면서도, 적절한 타이밍에 진입하여 상대의 주요 딜러를 제거하는 역할을 맡습니다. 당신의 공격적인 플레이가 팀의 승리를 이끕니다."
      ],
      champions: [
        {
          name: "루시안",
          description: "빛의 수호자로 빠른 기동성과 연속 딜링으로 적을 압도하는 이중 권총의 달인"
        },
        {
          name: "드레이븐",
          description: "자부심 넘치는 도끼 투척사로 화려한 기술과 폭발적인 딜링을 선보이는 쇼맨"
        },
        {
          name: "카이사",
          description: "공허의 딸로 진화하는 능력과 적극적인 딜링으로 적을 제거하는 암살자형 원딜"
        }
      ],
      goodSynergy: {
        type: "서폿/견제형",
        reason: "서폿의 견제와 함께 상대 바텀을 완전히 압도할 수 있어요"
      },
      badSynergy: {
        type: "정글/팜형",
        reason: "정글러가 너무 보수적이면 공격형 원딜의 성장이 어려워질 수 있어요"
      },
      characterName: "루드카",
      image: "/images/tests/lol/adc-aggressive-frontline.png"
    },

    // 서폿 라인 결과들
    "support-protect-heal": {
      line: "서폿",
      role: "보호형",
      title: "서폿 / 보호형",
      catchphrase: "팀원을 보호하고 지원하는 따뜻한 수호자",
      description: [
        "당신은 팀원들을 보호하고 지원하는 것을 최우선으로 하는 보호형 플레이어입니다. 힐링과 보호 스킬로 팀원들의 생존을 보장합니다.",
        "라인전에서는 원딜을 보호하며 안전하게 성장할 수 있도록 지원하고, 위험한 상황에서 팀원을 구출하는 역할을 맡습니다. 당신의 보호 능력이 팀의 승리를 보장합니다.",
        "팀파이트에서는 팀원들을 보호하며, 적절한 타이밍에 궁극기를 사용하여 팀의 승리를 이끕니다. 당신의 존재감이 팀에게 믿음직한 후방 지원이 됩니다."
      ],
      champions: [
        {
          name: "소라카",
          description: "별의 치유사로 팀원들의 생명력을 회복시키며 보호하는 치유의 여신"
        },
        {
          name: "나미",
          description: "바다의 여신으로 물의 힘으로 팀원을 보호하고 적을 둔화시키는 조류의 수호자"
        },
        {
          name: "잔나",
          description: "바람의 정령으로 방어막과 회복으로 팀원을 보호하는 자연의 힘"
        }
      ],
      goodSynergy: {
        type: "원딜/보수형",
        reason: "원딜의 안정적인 성장을 보호할 수 있어요"
      },
      badSynergy: {
        type: "탑/전사형",
        reason: "탑의 공격적인 플레이와는 시너지가 떨어질 수 있어요"
      },
      characterName: "소나잔",
      image: "/images/tests/lol/support-protect-heal.png"
    },
    "support-harass-engage": {
      line: "서폿",
      role: "견제형",
      title: "서폿 / 견제형",
      catchphrase: "적극적인 견제로 상대를 압박하는 공격적인 지원자",
      description: [
        "당신은 적극적인 견제와 딜링을 통해 상대를 압박하는 견제형 플레이어입니다. 공격적인 스킬 사용으로 상대의 성장을 방해합니다.",
        "라인전에서는 적극적으로 상대를 견제하며 원딜이 안전하게 CS를 챙길 수 있도록 지원하고, 기회를 보면 적을 묶어 킬을 만들어내는 역할을 맡습니다. 당신의 공격적인 플레이가 바텀라인을 장악합니다.",
        "팀파이트에서는 적극적으로 적을 묶고 견제하며, 적절한 타이밍에 궁극기를 사용하여 팀의 승리를 이끕니다. 당신의 존재감이 팀의 공격을 지원합니다."
      ],
      champions: [
        {
          name: "카르마",
          description: "영원한 영혼으로 강력한 견제와 보호를 모두 갖춘 균형의 달인"
        },
        {
          name: "룰루",
          description: "요들 마법사로 변신과 둔화로 적을 혼란시키며 팀원을 보호하는 장난꾸러기"
        },
        {
          name: "모르가나",
          description: "어둠의 여왕으로 속박과 보호막으로 적을 제어하며 팀원을 보호하는 그림자의 힘"
        }
      ],
      goodSynergy: {
        type: "원딜/공격형",
        reason: "원딜의 공격적인 플레이와 함께 상대 바텀을 완전히 압도할 수 있어요"
      },
      badSynergy: {
        type: "정글/팜형",
        reason: "정글러가 너무 보수적이면 견제형 서폿의 효과가 떨어질 수 있어요"
      },
      characterName: "카룰모",
      image: "/images/tests/lol/support-harass-engage.png"
    },

    // 새로운 역할군 결과들
    "top-team-support": {
      line: "탑",
      role: "팀지원형",
      title: "탑 / 팀지원형",
      catchphrase: "팀과 함께하는 협동의 전사",
      description: [
        "당신은 팀과의 협동을 중시하는 팀지원형 플레이어입니다. 개인적인 성과보다는 팀 전체의 이익을 우선시하며, 팀원들과 함께 승리를 만들어갑니다.",
        "라인전에서는 정글러와의 협동을 통해 갱킹을 시도하고, 다른 라인을 지원하기 위해 로밍을 자주 시도합니다. 팀 전체의 맵 압박에 기여하는 플레이를 선보입니다.",
        "팀파이트에서는 팀원들을 보호하고 지원하는 역할을 맡으며, 적절한 타이밍에 진입하여 팀의 승리를 이끕니다. 당신의 협동 정신이 팀의 승리를 보장합니다."
      ],
      champions: [
        {
          name: "오른",
          description: "불의 영혼으로 팀원을 보호하고 지원하는 불멸의 수호자"
        },
        {
          name: "말파이트",
          description: "바위의 힘으로 팀을 보호하며 적을 제어하는 대지의 수호자"
        },
        {
          name: "쉔",
          description: "그림자의 힘으로 팀원을 보호하고 전장을 장악하는 그림자 사무라이"
        }
      ],
      goodSynergy: {
        type: "정글/갱킹형",
        reason: "정글러와의 협동으로 상대 탑을 완전히 압도할 수 있어요"
      },
      badSynergy: {
        type: "미드/솔로형",
        reason: "미드가 너무 개인적이면 팀지원형 탑의 효과가 떨어질 수 있어요"
      },
      characterName: "오말쉔",
      image: "/images/tests/lol/top-team-support.png"
    },
    "top-skillful-adaptive": {
      line: "탑",
      role: "기술형",
      title: "탑 / 기술형",
      catchphrase: "정교한 기술로 적을 압도하는 스킬 마스터",
      description: [
        "당신은 정교한 기술과 분석력을 바탕으로 플레이하는 기술형 플레이어입니다. 상대의 패턴을 분석하고 적절한 대응을 통해 승리를 만들어갑니다.",
        "라인전에서는 상대의 스킬을 피하며 교묘하게 싸우고, 상대의 실수를 기다려 기회를 포착합니다. 꾸준한 성장을 통해 후반에 강력한 힘을 발휘합니다.",
        "팀파이트에서는 적절한 포지션에서 오브젝트를 처리하고, 팀의 승리에 기여하는 역할을 맡습니다. 당신의 분석력과 기술이 팀의 승리를 이끕니다."
      ],
      champions: [
        {
          name: "제이스",
          description: "미래의 수호자로 원거리와 근접 무기를 자유자재로 다루는 기술의 달인"
        },
        {
          name: "케넨",
          description: "번개의 요들로 정교한 스킬샷과 강력한 궁극기로 적을 제어하는 전기 마스터"
        },
        {
          name: "퀸",
          description: "데마시아의 정찰병으로 독과 기동성을 활용해 적을 교묘하게 제거하는 독수리 기사"
        }
      ],
      goodSynergy: {
        type: "미드/분석형",
        reason: "미드와 함께 상대의 패턴을 분석하고 대응할 수 있어요"
      },
      badSynergy: {
        type: "정글/갱킹형",
        reason: "정글러가 너무 공격적이면 기술형 탑의 안정적인 플레이가 어려워질 수 있어요"
      },
      characterName: "제케퀸",
      image: "/images/tests/lol/top-skillful-adaptive.png"
    },
    "jungle-support-coordinated": {
      line: "정글",
      role: "지원형",
      title: "정글 / 지원형",
      catchphrase: "팀과 함께하는 협동의 정글러",
      description: [
        "당신은 팀과의 협동을 중시하는 지원형 플레이어입니다. 라인들의 상황을 지켜보며 적절한 지원을 제공하고, 팀 전체의 성장을 돕습니다.",
        "정글링에서는 효율적인 팜을 통해 안정적으로 성장하며, 라인들과 함께 계획적으로 갱킹을 시도합니다. 팀원들의 요청에 적극적으로 응답하는 플레이를 선보입니다.",
        "오브젝트 싸움에서는 팀과 함께 안전하게 처리하며, 상대팀을 견제하여 시간을 벌어주는 역할을 맡습니다. 당신의 협동 정신이 팀의 승리를 보장합니다."
      ],
      champions: [
        {
          name: "누누와 윌럼프",
          description: "눈사람과 소년의 조합으로 팀을 지원하고 오브젝트를 장악하는 겨울의 정령"
        },
        {
          name: "이블린",
          description: "고통의 여왕으로 은밀한 갱킹과 팀 지원을 통해 적을 혼란시키는 그림자 사냥꾼"
        },
        {
          name: "람머스",
          description: "가시돋친 방어구로 팀을 보호하며 적을 둔화시키는 거북이 전사"
        }
      ],
      goodSynergy: {
        type: "라인/협동형",
        reason: "협동을 중시하는 라인들과 함께 시너지를 발휘할 수 있어요"
      },
      badSynergy: {
        type: "라인/솔로형",
        reason: "개인적 플레이를 선호하는 라인들과는 시너지가 떨어질 수 있어요"
      },
      characterName: "누이람",
      image: "/images/tests/lol/jungle-support-coordinated.png"
    },
    "jungle-control-tracker": {
      line: "정글",
      role: "통제형",
      title: "정글 / 통제형",
      catchphrase: "맵을 장악하는 통제의 달인",
      description: [
        "당신은 맵 통제와 정보 수집을 중시하는 통제형 플레이어입니다. 상대 정글러의 움직임을 추적하고, 맵 압박을 통해 팀에게 유리한 상황을 만들어갑니다.",
        "정글링에서는 상대 정글러의 패턴을 분석하고 대응하며, 라인들과 함께 맵을 압박합니다. 상대의 움직임을 예측하고 적절한 대응을 통해 우위를 점합니다.",
        "오브젝트 싸움에서는 상대팀을 견제하며 시간을 벌거나, 다른 오브젝트를 대신 가져가는 전략적 플레이를 선보입니다. 당신의 통제력이 팀의 승리를 이끕니다."
      ],
      champions: [
        {
          name: "리 신",
          description: "맹목적인 수도승으로 기동성과 통제력을 바탕으로 맵을 장악하는 용의 영혼"
        },
        {
          name: "렉사이",
          description: "공허의 포식자로 지하에서 맵을 통제하며 적을 추적하는 대지의 지배자"
        },
        {
          name: "카직스",
          description: "공허의 사냥꾼으로 진화하는 능력과 추적 기술로 적을 제거하는 완벽한 포식자"
        }
      ],
      goodSynergy: {
        type: "라인/분석형",
        reason: "분석력을 중시하는 라인들과 함께 맵 통제를 완벽하게 할 수 있어요"
      },
      badSynergy: {
        type: "라인/공격형",
        reason: "공격적인 라인들과는 통제형 정글의 효과가 떨어질 수 있어요"
      },
      characterName: "리렉카",
      image: "/images/tests/lol/jungle-control-tracker.png"
    },
    "mid-objective-coordinator": {
      line: "미드",
      role: "오브젝트형",
      title: "미드 / 오브젝트형",
      catchphrase: "팀과 함께 오브젝트를 장악하는 조율자",
      description: [
        "당신은 팀과의 협동을 통해 오브젝트를 장악하는 오브젝트형 플레이어입니다. 개인적인 성과보다는 팀 전체의 이익을 우선시하며, 오브젝트 컨트롤에 특화되어 있습니다.",
        "라인전에서는 팀과 함께 오브젝트를 컨트롤하고, 다른 라인을 지원하기 위해 로밍을 자주 시도합니다. 팀과 함께 연계 스킬을 사용하여 시너지를 극대화합니다.",
        "팀파이트에서는 팀과 함께 조합 딜을 넣으며, 적절한 타이밍에 궁극기를 사용하여 팀의 승리를 이끕니다. 당신의 협동 정신이 팀의 승리를 보장합니다."
      ],
      champions: [
        {
          name: "오리아나",
          description: "시계태엽 소녀로 공을 조종하여 팀과 함께 연계 스킬을 사용하는 기계의 마법사"
        },
        {
          name: "갈리오",
          description: "거대한 수호자로 팀을 보호하며 적을 제어하는 대지의 방패"
        },
        {
          name: "룩산",
          description: "빛의 수호자로 팀과 함께 조합 딜을 넣으며 적을 제거하는 빛의 마법사"
        }
      ],
      goodSynergy: {
        type: "정글/지원형",
        reason: "정글러와 함께 오브젝트를 완벽하게 장악할 수 있어요"
      },
      badSynergy: {
        type: "탑/전사형",
        reason: "탑이 너무 개인적이면 오브젝트형 미드의 효과가 떨어질 수 있어요"
      },
      characterName: "오갈룩",
      image: "/images/tests/lol/mid-objective-coordinator.png"
    },
    "mid-adaptive-analyzer": {
      line: "미드",
      role: "적응형",
      title: "미드 / 적응형",
      catchphrase: "상대를 분석하고 적응하는 전략가",
      description: [
        "당신은 상대의 패턴을 분석하고 적절히 적응하는 적응형 플레이어입니다. 상대의 움직임을 예측하고 대응하며, 다양한 상황에 유연하게 대처합니다.",
        "라인전에서는 상대의 패턴을 분석하고 대응하며, 상대의 스킬을 예측해서 정확한 스킬샷을 선보입니다. 꾸준한 압박으로 상대를 지치게 만드는 플레이를 합니다.",
        "팀파이트에서는 상대의 패턴을 파악하고 대응하며, 적절한 타이밍에 진입하여 팀의 승리에 기여합니다. 당신의 분석력과 적응력이 팀의 승리를 이끕니다."
      ],
      champions: [
        {
          name: "아리",
          description: "구미호로 매혹적인 매력과 기동성을 활용해 적을 교묘하게 제거하는 여우 마법사"
        },
        {
          name: "카시오페아",
          description: "독사의 여왕으로 독과 둔화로 적을 제어하며 지속적인 딜을 넣는 독의 마법사"
        },
        {
          name: "빅토르",
          description: "기계화된 마법사로 진화하는 능력과 강력한 제어 스킬로 적을 압도하는 미래의 마법사"
        }
      ],
      goodSynergy: {
        type: "정글/통제형",
        reason: "정글러와 함께 상대의 패턴을 분석하고 대응할 수 있어요"
      },
      badSynergy: {
        type: "원딜/공격형",
        reason: "원딜이 너무 공격적이면 적응형 미드의 안정적인 플레이가 어려워질 수 있어요"
      },
      characterName: "아카빅",
      image: "/images/tests/lol/mid-adaptive-analyzer.png"
    },
    "adc-cooperative-team": {
      line: "원딜",
      role: "협동형",
      title: "원딜 / 협동형",
      catchphrase: "팀과 함께하는 협동의 원딜러",
      description: [
        "당신은 팀과의 협동을 중시하는 협동형 플레이어입니다. 서폿과의 타이밍을 맞추고, 팀원들과 함께 포지션을 잡으며 플레이합니다.",
        "라인전에서는 서폿과 함께 상대를 견제하고, 팀원들과 함께 협동하여 CS를 챙깁니다. 팀 전체의 성장을 위해 협동하는 플레이를 선보입니다.",
        "팀파이트에서는 팀원들과 함께 포지션을 잡고, 팀의 보호를 받으며 안정적으로 딜링합니다. 당신의 협동 정신이 팀의 승리를 보장합니다."
      ],
      champions: [
        {
          name: "애쉬",
          description: "프렐요드의 여왕으로 화살과 얼음으로 적을 둔화시키며 팀을 지원하는 얼음의 궁수"
        },
        {
          name: "진",
          description: "자운의 총잡이로 연막과 기동성을 활용해 팀과 함께 협동하는 화약의 달인"
        },
        {
          name: "시비르",
          description: "샤우리마의 여왕으로 방패와 부메랑으로 팀을 보호하며 딜링하는 사막의 전사"
        }
      ],
      goodSynergy: {
        type: "서폿/협동형",
        reason: "서폿과 함께 완벽한 협동을 통해 바텀을 장악할 수 있어요"
      },
      badSynergy: {
        type: "정글/갱킹형",
        reason: "정글러가 너무 공격적이면 협동형 원딜의 안정적인 플레이가 어려워질 수 있어요"
      },
      characterName: "애진시",
      image: "/images/tests/lol/adc-cooperative-team.png"
    },
    "adc-calculated-adaptive": {
      line: "원딜",
      role: "계산형",
      title: "원딜 / 계산형",
      catchphrase: "정확한 계산으로 승리를 만드는 전략가",
      description: [
        "당신은 정확한 계산과 분석을 바탕으로 플레이하는 계산형 플레이어입니다. 상대의 스킬을 피한 후 딜링하고, 상대의 패턴을 분석하여 대응합니다.",
        "라인전에서는 상대의 패턴을 분석하고 대응하며, 안전한 거리에서 견제하는 플레이를 합니다. 꾸준한 성장을 통해 후반에 강력한 힘을 발휘합니다.",
        "팀파이트에서는 상대팀을 견제하며 시간을 벌거나, 다른 오브젝트를 대신 가져가는 전략적 플레이를 선보입니다. 당신의 계산력이 팀의 승리를 이끕니다."
      ],
      champions: [
        {
          name: "케이틀린",
          description: "필트오버의 보안관으로 함정과 원거리 딜링으로 적을 교묘하게 제거하는 저격수"
        },
        {
          name: "바루스",
          description: "고대의 활시위로 독과 관통으로 적을 둔화시키며 지속적인 딜을 넣는 독의 궁수"
        },
        {
          name: "코그모",
          description: "공허의 포식자로 원거리 견제와 강력한 궁극기로 적을 압도하는 공허의 딜러"
        }
      ],
      goodSynergy: {
        type: "서폿/분석형",
        reason: "서폿과 함께 상대의 패턴을 분석하고 대응할 수 있어요"
      },
      badSynergy: {
        type: "정글/갱킹형",
        reason: "정글러가 너무 공격적이면 계산형 원딜의 안정적인 플레이가 어려워질 수 있어요"
      },
      characterName: "케이바코",
      image: "/images/tests/lol/adc-calculated-adaptive.png"
    },
    "support-coordinate-team": {
      line: "서폿",
      role: "조율형",
      title: "서폿 / 조율형",
      catchphrase: "팀을 조율하는 협동의 리더",
      description: [
        "당신은 팀 전체를 조율하고 지원하는 조율형 플레이어입니다. 팀원들과 함께 연계 스킬을 사용하고, 팀 전체의 협동을 이끌어갑니다.",
        "라인전에서는 팀원들과 함께 와딩을 계획하고, 팀과 함께 연계 스킬을 사용하여 시너지를 극대화합니다. 팀 전체의 성장을 위해 조율하는 플레이를 선보입니다.",
        "팀파이트에서는 팀과 함께 연계 스킬을 사용하며, 팀원들과 함께 기회를 만들어내는 역할을 맡습니다. 당신의 조율력이 팀의 승리를 보장합니다."
      ],
      champions: [
        {
          name: "쓰레쉬",
          description: "잔혹한 감시자로 사슬과 등불로 적을 묶고 팀을 지원하는 그림자의 수호자"
        },
        {
          name: "알리스타",
          description: "미노타우로스로 강력한 이니시에이션과 보호 능력으로 팀을 이끄는 대지의 수호자"
        },
        {
          name: "레오나",
          description: "태양의 여전사로 빛과 방패로 적을 제어하며 팀을 보호하는 태양의 수호자"
        }
      ],
      goodSynergy: {
        type: "원딜/협동형",
        reason: "원딜과 함께 완벽한 협동을 통해 바텀을 장악할 수 있어요"
      },
      badSynergy: {
        type: "탑/전사형",
        reason: "탑이 너무 개인적이면 조율형 서폿의 효과가 떨어질 수 있어요"
      },
      characterName: "쓰알레",
      image: "/images/tests/lol/support-coordinate-team.png"
    },
    "support-adaptive-scout": {
      line: "서폿",
      role: "적응형",
      title: "서폿 / 적응형",
      catchphrase: "상대를 분석하고 적응하는 정보원",
      description: [
        "당신은 상대의 움직임을 추적하고 정보를 제공하는 적응형 플레이어입니다. 상대의 패턴을 파악하고 대응하며, 다양한 상황에 유연하게 대처합니다.",
        "라인전에서는 상대의 와딩 패턴을 분석하고, 상대의 스킬을 예측하여 대응합니다. 상대의 움직임을 추적하여 팀에게 유용한 정보를 제공합니다.",
        "팀파이트에서는 상대의 패턴을 파악하고 대응하며, 적절한 타이밍에 진입하여 팀의 승리에 기여합니다. 당신의 분석력과 적응력이 팀의 승리를 이끕니다."
      ],
      champions: [
        {
          name: "피들스틱",
          description: "고대의 공포로 겁과 침묵으로 적을 혼란시키며 팀을 지원하는 공포의 마법사"
        },
        {
          name: "블리츠크랭크",
          description: "증기로봇으로 갈고리와 기절로 적을 제어하며 팀을 지원하는 기계의 수호자"
        },
        {
          name: "브랜드",
          description: "불의 복수자로 화염과 폭발로 적을 제거하며 팀을 지원하는 화염의 마법사"
        }
      ],
      goodSynergy: {
        type: "원딜/계산형",
        reason: "원딜과 함께 상대의 패턴을 분석하고 대응할 수 있어요"
      },
      badSynergy: {
        type: "정글/갱킹형",
        reason: "정글러가 너무 공격적이면 적응형 서폿의 안정적인 플레이가 어려워질 수 있어요"
      },
      characterName: "피블브",
      image: "/images/tests/lol/support-adaptive-scout.png"
    }
  }
}; 