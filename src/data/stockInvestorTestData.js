export const stockInvestorTestData = {
  questions: [
    {
      id: 1,
      question: "갑자기 주식이 50% 떡락했다! 당신의 첫 반응은?",
      options: [
        { text: "아... 이게 꿈이었으면 좋겠다 😭", score: { panic: 3, emotional: 2, dramatic: 1 } },
        { text: "뭐 어차피 장기투자니까 괜찮지~ 😌", score: { calm: 3, optimistic: 2, chill: 1 } },
        { text: "이거 기회다! 더 사야겠어! 🚀", score: { aggressive: 3, bold: 2, yolo: 1 } },
        { text: "일단 뉴스부터 찾아보자... 📰", score: { research: 3, careful: 2, analytical: 1 } }
      ]
    },
    {
      id: 2,
      question: "친구가 '이거 대박주다!'라고 추천했다. 당신은?",
      options: [
        { text: "친구니까 믿어야지! 바로 매수! 🤝", score: { trust: 3, social: 2, naive: 1 } },
        { text: "친구도 주식 잘 모르는데... 🤔", score: { skeptical: 3, careful: 2, realistic: 1 } },
        { text: "일단 10만원만 넣어볼까? 🎲", score: { experimental: 3, small: 2, curious: 1 } },
        { text: "친구가 뭘 아냐! 내가 더 잘 알아! 😤", score: { arrogant: 3, confident: 2, dismissive: 1 } }
      ]
    },
    {
      id: 3,
      question: "주식 앱을 열었는데 빨간색이 가득하다. 당신은?",
      options: [
        { text: "아... 눈이 아파... 😵‍💫", score: { overwhelmed: 3, emotional: 2, dramatic: 1 } },
        { text: "빨간색이 예쁘네~ 🎨", score: { artistic: 3, positive: 2, unique: 1 } },
        { text: "이거 스크린샷 찍어서 SNS에 올려야겠다! 📸", score: { social: 3, share: 2, attention: 1 } },
        { text: "앱을 껐다가 다시 켜볼까? 🔄", score: { denial: 3, hope: 2, magical: 1 } }
      ]
    },
    {
      id: 4,
      question: "뉴스에서 '주식시장 폭락'이라는 헤드라인을 봤다. 당신은?",
      options: [
        { text: "뉴스는 항상 과장하잖아~ 😏", score: { dismissive: 3, optimistic: 2, chill: 1 } },
        { text: "아... 이제 정말 끝났구나... 💀", score: { doom: 3, dramatic: 2, pessimistic: 1 } },
        { text: "폭락? 그거 기회 아닌가? 🎯", score: { opportunistic: 3, smart: 2, contrarian: 1 } },
        { text: "일단 댓글부터 읽어보자! 💬", score: { social: 3, curious: 2, crowd: 1 } }
      ]
    },
    {
      id: 5,
      question: "주식이 10% 상승했다! 당신의 반응은?",
      options: [
        { text: "이제 부자다! 람보르기니 살까? 🏎️", score: { extravagant: 3, impulsive: 2, dreamy: 1 } },
        { text: "10%면 뭐... 인플레이션도 그 정도인데 😒", score: { realistic: 3, unimpressed: 2, cynical: 1 } },
        { text: "친구들에게 자랑해야겠다! 📢", score: { boastful: 3, social: 2, proud: 1 } },
        { text: "이제 팔아야겠나? 🤔", score: { cautious: 3, profit: 2, strategic: 1 } }
      ]
    },
    {
      id: 6,
      question: "주식 투자에 실패해서 돈을 잃었다. 당신은?",
      options: [
        { text: "이제 정말 주식 그만둬야겠다... 😭", score: { giveup: 3, emotional: 2, dramatic: 1 } },
        { text: "실패는 성공의 어머니! 더 배워야겠다! 📚", score: { learning: 3, positive: 2, growth: 1 } },
        { text: "친구 탓이다! 왜 추천했어! 😤", score: { blame: 3, angry: 2, external: 1 } },
        { text: "뭐 어차피 도박이었잖아~ 🎰", score: { gambling: 3, chill: 2, philosophical: 1 } }
      ]
    },
    {
      id: 7,
      question: "주식 시장에서 가장 중요한 것은?",
      options: [
        { text: "감정 컨트롤! 침착하게! 🧘‍♂️", score: { control: 3, disciplined: 2, rational: 1 } },
        { text: "운! 로또도 당첨되면 되잖아! 🍀", score: { luck: 3, gambling: 2, hope: 1 } },
        { text: "정보! 루머라도 빨리 알아야지! 📡", score: { info: 3, fast: 2, insider: 1 } },
        { text: "친구들! 같이 하면 덜 무서워! 👥", score: { social: 3, group: 2, comfort: 1 } }
      ]
    },
    {
      id: 8,
      question: "주식 투자로 돈을 벌었다! 당신은?",
      options: [
        { text: "이제 정말 부자다! 사치품 쇼핑! 🛍️", score: { spend: 3, extravagant: 2, impulsive: 1 } },
        { text: "또 투자해야겠다! 복리 효과! 📈", score: { reinvest: 3, smart: 2, compound: 1 } },
        { text: "친구들에게 밥 사줘야겠다! 🍕", score: { generous: 3, social: 2, share: 1 } },
        { text: "이제 그만하고 안전하게 은행에 넣어야겠다! 🏦", score: { safe: 3, conservative: 2, secure: 1 } }
      ]
    },
    {
      id: 9,
      question: "주식 시장이 불안정하다. 당신의 전략은?",
      options: [
        { text: "일단 현금 보유! 안전이 최우선! 💰", score: { cash: 3, safe: 2, conservative: 1 } },
        { text: "불안정할 때가 기회지! 공격적 매수! ⚔️", score: { aggressive: 3, contrarian: 2, bold: 1 } },
        { text: "친구들이 뭐라고 하는지 들어보자! 👂", score: { crowd: 3, social: 2, follow: 1 } },
        { text: "일단 유튜브에서 전문가 의견 들어보자! 📺", score: { research: 3, expert: 2, learning: 1 } }
      ]
    },
    {
      id: 10,
      question: "주식 투자의 궁극적인 목표는?",
      options: [
        { text: "부자가 되어서 람보르기니 타고 다니기! 🏎️", score: { luxury: 3, dream: 2, material: 1 } },
        { text: "안정적인 수익으로 노후 준비! 👴", score: { retirement: 3, stable: 2, future: 1 } },
        { text: "친구들한테 자랑하기! 😎", score: { boast: 3, social: 2, ego: 1 } },
        { text: "그냥 재미로! 도박이랑 똑같잖아! 🎰", score: { fun: 3, gambling: 2, entertainment: 1 } }
      ]
    }
  ],
  results: {
    panic_seller: {
      title: "😱 패닉셀러 - 감정의 노예",
      description: "주식이 조금만 떨어져도 바로 패닉에 빠지는 당신! 감정에 휘둘려서 항상 최악의 타이밍에 팔고, 최고점에 사는 전형적인 '감정의 노예'입니다. 하지만 이런 사람들이 있어야 시장이 움직이니까... 뭐, 나름대로 기여하고 있어요! 😅",
      characteristics: "• 주가가 1%만 떨어져도 패닉\n• 뉴스 하나만 봐도 바로 매도\n• 친구들이 '팔아라'하면 바로 팔아\n• 항상 최악의 타이밍에 거래\n• 감정 컨트롤이 전혀 안됨",
      lifestyle: "주식 시장의 '공포 지표' 역할을 톡톡히 하고 있습니다. 다른 투자자들이 당신의 패닉을 보고 반대 매매를 하면 돈을 벌 수 있어요! 나름대로 시장에 기여하고 있다고 생각하세요! 😂"
    },
    yolo_investor: {
      title: "🚀 YOLO 투자자 - 운명의 도박사",
      description: "YOLO! You Only Live Once! 당신은 주식 투자를 도박으로 생각하는 진정한 '운명의 도박사'입니다. 루머 하나만 들어도 바로 올인하고, 친구 추천은 무조건 믿는 순수한 영혼! 가끔은 대박도 치지만, 대부분은... 뭐, 인생은 한 번뿐이니까요! 🎰",
      characteristics: "• 루머만 들어도 바로 매수\n• 친구 추천은 무조건 믿음\n• '이번만'이라고 하면서 계속 도박\n• 운에 모든 것을 맡김\n• 가끔 대박, 대부분 대참사",
      lifestyle: "인생은 한 번뿐이니까 YOLO! 하지만 가끔은 차분히 생각해보는 것도 좋아요. 그래도 이런 사람들이 있어야 시장이 재미있어지니까... 계속 YOLO하세요! 🎲"
    },
    social_trader: {
      title: "👥 소셜 트레이더 - 군중의 추종자",
      description: "혼자서는 아무것도 못 하는 '군중의 추종자'! 친구들이 뭐라고 하면 그대로 하고, SNS에서 핫한 주식은 무조건 따라 사는 소셜 트레이더입니다. 하지만 이런 사람들이 많아야 주가가 오르니까... 나름대로 시장의 엔진 역할을 하고 있어요! 📱",
      characteristics: "• 친구 추천은 무조건 따라함\n• SNS 핫한 주식 무조건 매수\n• 혼자서는 아무것도 못함\n• 군중심리에 쉽게 휘둘림\n• '다른 사람들도 사니까 괜찮겠지'",
      lifestyle: "혼자서는 아무것도 못 하지만, 친구들과 함께라면 뭐든 할 수 있어요! 다만 가끔은 독립적으로 생각해보는 것도 좋아요. 그래도 소셜 트레이더들이 있어야 시장이 활발해지니까... 계속 소셜하세요! 👥"
    },
    drama_queen: {
      title: "🎭 드라마퀸 - 연극의 주인공",
      description: "주식 투자를 드라마로 만드는 '연극의 주인공'! 조금만 떨어져도 '이제 정말 끝났다'고 하고, 조금만 오르면 '이제 부자다'고 하는 극적인 성격의 소유자입니다. 주변 사람들이 당신의 연기를 보는 재미로 주식 투자를 시작할 수도 있어요! 🎬",
      characteristics: "• 조금만 떨어져도 '끝났다'고 함\n• 조금만 오르면 '부자다'고 함\n• 모든 것을 극적으로 표현\n• 주변 사람들을 연극에 끌어들임\n• 감정 표현이 과장됨",
      lifestyle: "주식 투자가 단조로울 수 없게 만들어주는 드라마퀸! 주변 사람들이 당신의 연기를 보는 재미로 주식 투자를 시작할 수도 있어요. 계속 드라마틱하게 살아가세요! 🎭"
    },
    chill_investor: {
      title: "😌 칠 투자자 - 차분한 현자",
      description: "주식이 떨어져도 오르는 것도 차분하게 받아들이는 '현자'! 감정에 휘둘리지 않고 장기적인 관점에서 투자하는 칠 투자자입니다. 다른 사람들이 패닉에 빠져있을 때도 당신만은 차분하게... 뭐, 이런 사람들이 있어야 시장이 안정적이니까요! 🧘‍♂️",
      characteristics: "• 주가 변동에 감정적으로 반응 안함\n• 장기적인 관점으로 투자\n• 패닉에 빠지지 않음\n• 차분하고 이성적\n• '뭐 어차피 장기투자니까'",
      lifestyle: "시장의 안정기 역할을 톡톡히 하고 있는 칠 투자자! 다른 사람들이 패닉에 빠져있을 때도 당신만은 차분하게... 계속 칠하게 살아가세요! 😌"
    },
    boastful_winner: {
      title: "😎 자랑쟁이 승자 - 자랑의 달인",
      description: "주식으로 돈을 벌면 모든 사람에게 자랑하는 '자랑의 달인'! SNS에 수익률 올리고, 친구들에게 계속 자랑하고, 가족들에게도 자랑하는... 뭐, 자랑할 게 있으면 자랑해야죠! 하지만 가끔은 겸손도 필요해요! 😏",
      characteristics: "• 수익률을 SNS에 올림\n• 친구들에게 계속 자랑함\n• 가족들에게도 자랑함\n• 자랑할 게 있으면 자랑해야 한다고 생각\n• 가끔은 과도하게 자랑함",
      lifestyle: "자랑할 게 있으면 자랑해야죠! 하지만 가끔은 겸손도 필요해요. 그래도 자랑쟁이들이 있어야 다른 사람들이 주식 투자에 관심을 가질 수도 있으니까... 계속 자랑하세요! 😎"
    },
    research_nerd: {
      title: "📚 리서치 너드 - 분석의 달인",
      description: "주식 투자 전에 모든 것을 분석하는 '분석의 달인'! 재무제표부터 뉴스까지, 모든 것을 꼼꼼히 분석하고 연구하는 리서치 너드입니다. 가끔은 과도하게 분석해서 기회를 놓칠 수도 있지만, 그래도 안전하게 투자할 수 있어요! 🔍",
      characteristics: "• 투자 전 모든 것을 분석함\n• 재무제표를 꼼꼼히 읽음\n• 뉴스를 빠짐없이 체크함\n• 과도하게 분석함\n• 분석하는 재미로 투자함",
      lifestyle: "분석하는 재미로 투자하는 리서치 너드! 가끔은 과도하게 분석해서 기회를 놓칠 수도 있지만, 그래도 안전하게 투자할 수 있어요. 계속 분석하세요! 📚"
    },
    gambling_addict: {
      title: "🎰 도박 중독자 - 카지노의 상주인",
      description: "주식 투자를 도박으로 생각하는 '카지노의 상주인'! 주식 시장을 카지노로 보고, 모든 것을 운에 맡기는 도박 중독자입니다. 가끔은 대박도 치지만, 대부분은... 뭐, 도박의 재미는 승패가 아니라 도박 자체에 있으니까요! 🎲",
      characteristics: "• 주식 시장을 카지노로 봄\n• 모든 것을 운에 맡김\n• 도박의 재미로 투자함\n• 가끔 대박, 대부분 대참사\n• '이번만'이라고 하면서 계속함",
      lifestyle: "도박의 재미는 승패가 아니라 도박 자체에 있죠! 가끔은 대박도 치지만, 대부분은... 그래도 도박 중독자들이 있어야 시장이 재미있어지니까... 계속 도박하세요! 🎰"
    },
    conservative_granny: {
      title: "👵 보수적 할머니 - 안전의 수호자",
      description: "안전이 최우선인 '안전의 수호자'! 주식 투자보다는 은행 예금을 선호하고, 조금만 위험해 보이면 바로 도망가는 보수적 할머니입니다. 수익률은 낮지만 안전하게 자산을 지킬 수 있어요! 🏦",
      characteristics: "• 안전이 최우선\n• 은행 예금을 선호함\n• 조금만 위험해 보이면 도망감\n• 수익률보다 안전을 중시\n• '돈은 은행에 넣어야 해'",
      lifestyle: "수익률은 낮지만 안전하게 자산을 지킬 수 있는 보수적 할머니! 다른 사람들이 위험한 투자를 할 때도 당신만은 안전하게... 계속 보수적으로 살아가세요! 👵"
    },
    arrogant_expert: {
      title: "😤 오만한 전문가 - 나만 잘난 척",
      description: "자신만 주식을 잘 안다고 생각하는 '나만 잘난 척'! 친구들의 조언은 무시하고, 자신의 판단만 믿는 오만한 전문가입니다. 가끔은 맞기도 하지만, 대부분은... 뭐, 자신감은 좋은 거니까요! 😤",
      characteristics: "• 자신만 주식을 잘 안다고 생각\n• 친구들의 조언을 무시함\n• 자신의 판단만 믿음\n• 가끔은 맞기도 함\n• '내가 더 잘 알아'",
      lifestyle: "자신감은 좋은 거니까요! 가끔은 맞기도 하지만, 대부분은... 그래도 오만한 전문가들이 있어야 시장이 재미있어지니까... 계속 오만하게 살아가세요! 😤"
    },
    lucky_fool: {
      title: "🍀 행운의 바보 - 운의 총아",
      description: "아무것도 모르는데 운으로 돈을 버는 '운의 총아'! 주식 투자에 대해 아무것도 모르지만, 어쩌다가 대박을 치는 행운의 바보입니다. 다른 사람들이 열심히 분석해도 돈을 못 버는데, 당신은 운으로 돈을 버니까... 뭐, 운도 실력이죠! 🍀",
      characteristics: "• 주식 투자에 대해 아무것도 모름\n• 어쩌다가 대박을 침\n• 운으로 돈을 벌음\n• 다른 사람들이 부러워함\n• '운도 실력이야'",
      lifestyle: "운도 실력이죠! 다른 사람들이 열심히 분석해도 돈을 못 버는데, 당신은 운으로 돈을 버니까... 계속 행운을 믿고 살아가세요! 🍀"
    },
    attention_seeker: {
      title: "📢 관심쟁이 - 스포트라이트의 주인공",
      description: "주식 투자로 관심받는 것을 좋아하는 '스포트라이트의 주인공'! 수익률을 SNS에 올리고, 친구들에게 계속 자랑하고, 모든 사람의 관심을 받고 싶어하는 관심쟁이입니다. 뭐, 관심받는 것도 재미니까요! 📸",
      characteristics: "• 수익률을 SNS에 올림\n• 친구들에게 계속 자랑함\n• 모든 사람의 관심을 받고 싶어함\n• 스포트라이트를 좋아함\n• '나를 봐주세요'",
      lifestyle: "관심받는 것도 재미니까요! 수익률을 SNS에 올리고, 친구들에게 계속 자랑하고... 계속 관심받으면서 살아가세요! 📢"
    }
  }
}; 