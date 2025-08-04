// 💪 운동메이트 테스트 데이터
export const workoutMateTestData = {
  title: "나에게 어울리는 운동메이트는 누구!",
  description: "운동할 때 나와 가장 잘 맞는 파트너를 찾아보세요!",
  
  questions: [
    {
      id: 1,
      question: "운동할 때 어떤 스타일을 선호하나요?",
      options: [
        {
          text: "혼자 조용히 집중해서 하는 스타일",
          score: { introvert: 3, solo: 2, focused: 2 }
        },
        {
          text: "친구와 함께 즐겁게 하는 스타일",
          score: { extrovert: 3, social: 2, fun: 2 }
        },
        {
          text: "경쟁하며 서로 자극받는 스타일",
          score: { competitive: 3, motivated: 2, challenge: 2 }
        },
        {
          text: "체계적으로 계획을 세워서 하는 스타일",
          score: { organized: 3, planned: 2, systematic: 2 }
        }
      ]
    },
    {
      id: 2,
      question: "운동 목표는 무엇인가요?",
      options: [
        {
          text: "체중 감량과 다이어트",
          score: { weight_loss: 3, health: 2, diet: 2 }
        },
        {
          text: "근력 향상과 근육 증가",
          score: { muscle: 3, strength: 2, bodybuilding: 2 }
        },
        {
          text: "체력 향상과 건강 유지",
          score: { fitness: 3, health: 2, endurance: 2 }
        },
        {
          text: "스트레스 해소와 기분 전환",
          score: { stress_relief: 3, mental: 2, relaxation: 2 }
        }
      ]
    },
    {
      id: 3,
      question: "어떤 운동을 가장 좋아하나요?",
      options: [
        {
          text: "요가, 필라테스 같은 정적인 운동",
          score: { yoga: 3, calm: 2, flexibility: 2 }
        },
        {
          text: "런닝, 수영 같은 유산소 운동",
          score: { cardio: 3, endurance: 2, aerobic: 2 }
        },
        {
          text: "헬스, 크로스핏 같은 근력 운동",
          score: { strength: 3, intense: 2, power: 2 }
        },
        {
          text: "댄스, 줌바 같은 즐거운 운동",
          score: { dance: 3, fun: 2, rhythm: 2 }
        }
      ]
    },
    {
      id: 4,
      question: "운동 시간대는 언제인가요?",
      options: [
        {
          text: "새벽에 일찍 일어나서",
          score: { morning: 3, early_bird: 2, disciplined: 2 }
        },
        {
          text: "점심시간에 빠르게",
          score: { lunch: 3, efficient: 2, busy: 2 }
        },
        {
          text: "저녁에 여유있게",
          score: { evening: 3, relaxed: 2, social: 2 }
        },
        {
          text: "시간이 날 때마다",
          score: { flexible: 3, spontaneous: 2, casual: 2 }
        }
      ]
    },
    {
      id: 5,
      question: "운동할 때 어떤 분위기를 원하나요?",
      options: [
        {
          text: "조용하고 집중할 수 있는 분위기",
          score: { quiet: 3, focused: 2, peaceful: 2 }
        },
        {
          text: "활기차고 에너지 넘치는 분위기",
          score: { energetic: 3, lively: 2, dynamic: 2 }
        },
        {
          text: "격렬하고 도전적인 분위기",
          score: { intense: 3, challenging: 2, competitive: 2 }
        },
        {
          text: "편안하고 즐거운 분위기",
          score: { comfortable: 3, enjoyable: 2, friendly: 2 }
        }
      ]
    },
    {
      id: 6,
      question: "운동 파트너에게 가장 중요한 것은?",
      options: [
        {
          text: "나와 비슷한 실력과 목표",
          score: { similar: 3, balanced: 2, matched: 2 }
        },
        {
          text: "나를 이끌어주는 멘토 역할",
          score: { mentor: 3, guide: 2, leader: 2 }
        },
        {
          text: "나를 응원하고 격려해주는 역할",
          score: { cheerleader: 3, support: 2, encouragement: 2 }
        },
        {
          text: "함께 성장하는 동반자 역할",
          score: { partner: 3, growth: 2, together: 2 }
        }
      ]
    },
    {
      id: 7,
      question: "운동 실패 시 어떻게 대처하나요?",
      options: [
        {
          text: "혼자 조용히 반성하고 다시 시작",
          score: { introvert: 2, self_reflection: 3, quiet: 2 }
        },
        {
          text: "친구와 이야기하며 위로받기",
          score: { extrovert: 2, social: 3, comfort: 2 }
        },
        {
          text: "더 열심히 해서 성공하기",
          score: { determined: 3, motivated: 2, persistent: 2 }
        },
        {
          text: "계획을 다시 세워서 체계적으로 접근",
          score: { organized: 3, planned: 2, systematic: 2 }
        }
      ]
    },
    {
      id: 8,
      question: "운동할 때 음악은 어떻게 듣나요?",
      options: [
        {
          text: "조용한 자연음이나 명상음악",
          score: { calm: 3, peaceful: 2, meditation: 2 }
        },
        {
          text: "신나는 팝송이나 댄스음악",
          score: { energetic: 3, fun: 2, upbeat: 2 }
        },
        {
          text: "격렬한 락이나 힙합음악",
          score: { intense: 3, powerful: 2, aggressive: 2 }
        },
        {
          text: "친구와 함께 노래 부르며",
          score: { social: 3, fun: 2, together: 2 }
        }
      ]
    }
  ],

  results: {
    zen_master: {
      title: "🧘‍♀️ 요가 마스터",
      color: "#8B5CF6",
      description: "당신에게는 마음의 평화를 추구하는 요가 마스터가 가장 잘 맞아요! 함께 호흡을 맞추며 몸과 마음을 치유하는 시간을 가져보세요. 스트레스 많은 직장인들에게 특히 인기 있는 타입이에요!",
      characteristics: [
        "마음의 평화를 중시하는 성격",
        "체계적이고 규칙적인 생활",
        "스트레스 해소에 관심이 많음",
        "자연과 조화를 추구함",
        "명상과 마인드풀니스에 관심"
      ],
      strategy: "요가나 필라테스 같은 정적인 운동을 함께하며, 서로의 마음을 이해하고 치유하는 시간을 가져보세요. 명상과 호흡법도 함께 연습하면 더욱 좋아요! 특히 주말 아침 요가 클래스나 저녁 스트레칭 세션을 추천해요."
    },
    energy_bunny: {
      title: "🐰 에너지 버니",
      color: "#F59E0B",
      description: "당신에게는 넘치는 에너지로 항상 밝고 활기찬 에너지 버니가 가장 잘 맞아요! 함께 즐겁게 뛰어놀며 운동하는 시간을 가져보세요. SNS에서 운동 인증샷을 자주 올리는 타입이에요!",
      characteristics: [
        "항상 밝고 긍정적인 에너지",
        "사람들과 어울리는 것을 좋아함",
        "즐거운 분위기를 만드는 능력",
        "끊임없는 동기부여 제공",
        "운동 인증샷 촬영 전문가"
      ],
      strategy: "댄스, 줌바, 그룹 피트니스 같은 즐거운 운동을 함께하며, 서로를 응원하고 격려하는 시간을 가져보세요. 음악과 함께하는 운동이 특히 잘 맞을 거예요! 운동 후 카페에서 건강한 음료도 함께 마시면 좋겠어요."
    },
    iron_will: {
      title: "💪 철의 의지",
      color: "#DC2626",
      description: "당신에게는 강한 의지와 끈기로 목표를 향해 달려가는 철의 의지가 가장 잘 맞아요! 함께 도전하고 극복하는 시간을 가져보세요. 헬스장에서 가장 열심히 운동하는 사람들이 바로 이 타입이에요!",
      characteristics: [
        "강한 의지와 끈기",
        "목표 지향적인 성격",
        "도전을 즐기는 마인드",
        "체계적인 훈련 계획",
        "운동 기록 관리 전문가"
      ],
      strategy: "헬스, 크로스핏, 마라톤 같은 도전적인 운동을 함께하며, 서로를 밀어주고 끌어주는 관계를 만들어보세요. 함께 목표를 세우고 달성하는 과정이 특별할 거예요! 운동 앱으로 서로의 진행상황을 체크하는 것도 좋은 방법이에요."
    },
    social_butterfly: {
      title: "🦋 소셜 버터플라이",
      color: "#10B981",
      description: "당신에게는 사람들과의 소통을 즐기며 함께 성장하는 소셜 버터플라이가 가장 잘 맞아요! 함께 이야기하며 운동하는 시간을 가져보세요. 운동하면서도 친구들과 수다 떠는 것을 좋아하는 타입이에요!",
      characteristics: [
        "사람들과의 소통을 즐김",
        "함께 성장하는 것을 중시",
        "균형잡힌 운동 스타일",
        "지속적인 동기부여 능력",
        "운동 중 수다 전문가"
      ],
      strategy: "테니스, 배드민턴, 등산 같은 2인 운동이나 소규모 그룹 운동을 함께하며, 운동 중에도 즐거운 대화를 나누는 시간을 가져보세요. 서로의 일상도 공유하며 더욱 가까워질 수 있어요! 운동 후 맛집 탐방도 함께하면 더욱 즐거울 거예요."
    },
    morning_lark: {
      title: "🌅 모닝 래크",
      color: "#3B82F6",
      description: "당신에게는 새벽에 일찍 일어나서 규칙적으로 운동하는 모닝 래크가 가장 잘 맞아요! 함께 건강한 아침 루틴을 만들어보세요. 인스타그램에서 '새벽 운동' 해시태그를 자주 사용하는 타입이에요!",
      characteristics: [
        "규칙적인 생활 습관",
        "새벽 운동을 선호함",
        "체계적인 계획 수립",
        "건강한 라이프스타일 추구",
        "새벽 운동 인증샷 전문가"
      ],
      strategy: "새벽 러닝, 아침 요가, 조깅 같은 이른 아침 운동을 함께하며, 건강한 아침 루틴을 만들어보세요. 함께 일출을 보며 운동하는 시간이 특별할 거예요! 운동 후 건강한 아침 식사도 함께하면 완벽한 하루가 될 거예요."
    },
    fun_trainer: {
      title: "🎉 펀 트레이너",
      color: "#EC4899",
      description: "당신에게는 운동을 게임처럼 재미있게 만들어주는 펀 트레이너가 가장 잘 맞아요! 함께 즐겁게 운동하는 시간을 가져보세요. 운동을 하면서도 웃음이 끊이지 않는 타입이에요!",
      characteristics: [
        "운동을 재미있게 만드는 능력",
        "창의적인 운동 방법 제시",
        "긍정적인 에너지 전달",
        "다양한 운동 경험",
        "운동 중 장난기 전문가"
      ],
      strategy: "게임형 운동, 댄스, 스포츠 같은 재미있는 운동을 함께하며, 운동이 지루하지 않도록 다양한 방법으로 접근해보세요. 함께 웃으며 운동하는 시간이 행복할 거예요! 운동 중 틱톡 챌린지도 함께 도전해보면 어떨까요?"
    },
    lazy_but_consistent: {
      title: "🦥 게으른 슬로스",
      color: "#6B7280",
      description: "당신에게는 천천히 하지만 꾸준히 운동하는 게으른 슬로스가 가장 잘 맞아요! 서로를 압박하지 않고 편안하게 운동하는 시간을 가져보세요. '오늘은 쉬어도 괜찮아'라고 말해주는 타입이에요!",
      characteristics: [
        "천천히 하지만 꾸준함",
        "압박감 없이 편안한 운동",
        "서로를 이해하고 배려함",
        "무리하지 않는 현실적인 목표",
        "운동 중 휴식 시간 전문가"
      ],
      strategy: "가벼운 산책, 스트레칭, 요가 같은 부담 없는 운동을 함께하며, 서로를 압박하지 않고 편안하게 운동하는 시간을 가져보세요. 운동 후 맛있는 간식도 함께 먹으면 더욱 즐거울 거예요! '오늘도 운동했어!'라는 성취감을 함께 나누어보세요."
    },
    gym_selfie_queen: {
      title: "📸 헬스장 셀피 퀸",
      color: "#F472B6",
      description: "당신에게는 운동하면서도 예쁜 사진을 찍는 헬스장 셀피 퀸이 가장 잘 맞아요! 함께 운동하고 예쁜 인증샷도 찍어보세요. 헬스장에서 가장 예쁜 운동복을 입고 있는 타입이에요!",
      characteristics: [
        "운동과 패션을 동시에 추구",
        "예쁜 운동복 수집가",
        "인증샷 촬영 전문가",
        "SNS 활동에 적극적",
        "운동 중에도 메이크업 관리"
      ],
      strategy: "요가, 필라테스, 댄스 같은 예쁜 운동을 함께하며, 운동 후 예쁜 인증샷도 함께 찍어보세요. 서로의 운동복을 추천해주고 스타일링 팁도 공유하면 더욱 즐거울 거예요! 운동 후 카페에서 예쁜 음료와 함께 사진도 찍어보세요."
    },
    snack_break_lover: {
      title: "🍪 간식 브레이크 러버",
      color: "#F59E0B",
      description: "당신에게는 운동 중간중간 맛있는 간식을 먹는 간식 브레이크 러버가 가장 잘 맞아요! 운동하고 맛있는 것도 먹는 균형잡힌 라이프스타일을 만들어보세요. 운동 후 맛집 탐방을 계획하는 타입이에요!",
      characteristics: [
        "운동과 맛집 탐방을 동시에 즐김",
        "건강한 간식에 관심이 많음",
        "균형잡힌 라이프스타일 추구",
        "운동 후 보상 문화 중시",
        "맛집 리스트 관리 전문가"
      ],
      strategy: "등산, 자전거, 수영 같은 운동을 함께하며, 운동 후 맛있는 간식이나 식사도 함께 즐겨보세요. 건강한 간식 레시피도 공유하고, 새로운 맛집도 함께 탐방해보세요! 운동과 먹는 것을 모두 즐기는 완벽한 조합이 될 거예요."
    },
    late_night_warrior: {
      title: "🌙 밤늦은 나이트 워리어",
      color: "#1F2937",
      description: "당신에게는 밤늦게 운동하는 나이트 워리어가 가장 잘 맞아요! 함께 밤의 도시를 달리며 운동하는 시간을 가져보세요. 24시간 헬스장의 단골손님이 되는 타입이에요!",
      characteristics: [
        "밤늦은 시간대 운동 선호",
        "도시의 야경을 즐기는 감성",
        "24시간 헬스장 이용자",
        "밤 운동의 고독함을 즐김",
        "야간 러닝 전문가"
      ],
      strategy: "야간 러닝, 24시간 헬스장 운동, 밤 산책 같은 야간 운동을 함께하며, 도시의 야경도 함께 즐겨보세요. 밤의 도시는 또 다른 매력이 있어요! 운동 후 24시간 카페에서 차 한 잔도 함께 마시면 완벽한 하루가 될 거예요."
    },
    weekend_warrior: {
      title: "🏆 주말 워리어",
      color: "#059669",
      description: "당신에게는 평일에는 바쁘지만 주말에 폭발적으로 운동하는 주말 워리어가 가장 잘 맞아요! 함께 주말을 알차게 보내며 운동하는 시간을 가져보세요. 평일에는 운동 얘기만 하고 주말에 실제로 하는 타입이에요!",
      characteristics: [
        "주말 집중 운동 스타일",
        "평일 운동 계획 수립 전문가",
        "주말 액티비티에 관심이 많음",
        "평일 운동 얘기만 하는 전문가",
        "주말 운동 인증샷 촬영가"
      ],
      strategy: "등산, 캠핑, 서핑 같은 주말 액티비티를 함께하며, 평일에는 운동 계획을 세우고 주말에 실제로 실행해보세요. 주말 운동은 평일의 스트레스를 모두 날려버릴 수 있어요! 주말 운동 후 맛있는 식사도 함께하면 더욱 즐거울 거예요."
    },
    excuse_master: {
      title: "🤔 핑계 대기 마스터",
      color: "#9CA3AF",
      description: "당신에게는 운동할 때마다 창의적인 핑계를 대는 핑계 대기 마스터가 가장 잘 맞아요! 함께 웃으며 운동하는 시간을 가져보세요. '오늘은 날씨가 안 좋아서...'라고 말하는 타입이에요!",
      characteristics: [
        "창의적인 운동 핑계 발명가",
        "운동을 미루는 전문가",
        "웃음으로 상황을 해결하는 능력",
        "운동 계획 수정 전문가",
        "날씨, 컨디션, 일정 핑계 전문가"
      ],
      strategy: "가벼운 실내 운동, 홈 트레이닝, 짧은 스트레칭 같은 부담 없는 운동을 함께하며, 서로의 핑계를 웃으며 받아주는 시간을 가져보세요. 때로는 운동을 쉬는 것도 필요해요! 대신 함께 맛있는 음식을 먹거나 영화를 보며 스트레스를 해소해보세요."
    }
  }
}; 