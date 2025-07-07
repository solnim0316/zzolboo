const questions = [
  {
    q: "1. 집사가 갑자기 다른 고양이를 안고 들어왔다! 넌 어떻게 반응해?",
    opt: [
      { t: "누구세요? 냥펀치 시전", type: "T" },
      { t: "가만히 쳐다보며 기싸움", type: "F" },
      { t: "하이~ 꼬리로 인사함", type: "E" },
      { t: "소파 뒤에 숨음", type: "I" }
    ]
  },
  {
    q: "2. 새로운 장난감을 받았을 때 넌?",
    opt: [
      { t: "이게 뭐야!? 신기해!!", type: "N" },
      { t: "일단 냄새 맡고 정석 루틴", type: "S" },
      { t: "부셔질 때까지 논다", type: "T" },
      { t: "집사한테 가져다 줌", type: "F" }
    ]
  },
  {
    q: "3. 밥 그릇이 텅 비었을 때 너의 선택은?",
    opt: [
      { t: "야옹야옹 (집사 부르기)", type: "E" },
      { t: "그냥 기다림.. 언젠가 채워지겠지", type: "I" },
      { t: "주방 앞에 앉아 항의 시위", type: "J" },
      { t: "식탁 위에 올라가 냄비 탐색", type: "P" }
    ]
  },
  {
    q: "4. 창문 틈 사이로 바람이 솔솔~ 넌 지금?",
    opt: [
      { t: "바람 따라 먼 산 응시 중", type: "N" },
      { t: "창틀에서 새 구경 중", type: "S" },
      { t: "왜 닫아뒀지? 발로 밀어봄", type: "T" },
      { t: "따뜻한 담요에 누워있음", type: "F" }
    ]
  },
  {
    q: "5. 집사가 울고 있을 때 넌?",
    opt: [
      { t: "야옹하며 다가가 얼굴 비벼줌", type: "F" },
      { t: "내 밥이나 챙겨주라냥", type: "T" },
      { t: "가까이 다가가 가만히 지켜봄", type: "I" },
      { t: "무릎 위에 올라가서 관심 유도", type: "E" }
    ]
  },
  {
    q: "6. 야옹이 방송 인터뷰! 성격 소개 한마디?",
    opt: [
      { t: "전 뭐… 혼자 있는 게 좋아요", type: "I" },
      { t: "다들 제 귀여움에 놀라죠", type: "E" },
      { t: "고양이답게 논리적입니다", type: "T" },
      { t: "애교는 나의 무기!", type: "F" }
    ]
  },
  {
    q: "7. 일광욕 하다가 갑자기 그림자가 드리워졌을 때?",
    opt: [
      { t: "어? 뭐야? 벌떡 일어남", type: "S" },
      { t: "하늘 보며 UFO 상상", type: "N" },
      { t: "자리 옮겨 다시 눕기", type: "P" },
      { t: "집사에게 항의", type: "J" }
    ]
  },
  {
    q: "8. 갑자기 낯선 손님이 왔다! 넌?",
    opt: [
      { t: "호기심 가득! 슬쩍 다가감", type: "E" },
      { t: "숨었다가 눈치 보기", type: "I" },
      { t: "스캔 후 관심 없는 척", type: "T" },
      { t: "손님 무릎 위 점령", type: "F" }
    ]
  },
  {
    q: "9. 고양이계 명절이 생긴다면 뭐부터 할래?",
    opt: [
      { t: "우다다 경연대회 열기", type: "P" },
      { t: "새벽 3시 기상식", type: "J" },
      { t: "다 같이 야옹 대합창", type: "E" },
      { t: "조용히 방석 위 힐링 모드", type: "I" }
    ]
  },
  {
    q: "10. 집사가 스킨십을 시도한다면?",
    opt: [
      { t: "냥발로 톡! 경고 후 도망", type: "T" },
      { t: "집사의 손을 핥는다", type: "F" },
      { t: "그냥 껌딱지됨", type: "E" },
      { t: "무시하고 고양이자리로 감", type: "I" }
    ]
  },
  {
    q: "11. 새로운 고양이 화장실이 생겼다!",
    opt: [
      { t: "익숙한 데로 가야지", type: "J" },
      { t: "호오? 테스트해본다", type: "P" },
      { t: "집사한테 먼저 가게 하라고 함", type: "T" },
      { t: "다정하게 물끄러미 바라봄", type: "F" }
    ]
  },
  {
    q: "12. 오늘 하루 기분을 한 마디로 표현한다면?",
    opt: [
      { t: "크아앙!!! (초흥분 모드)", type: "E" },
      { t: "냠냠… 조용한 행복", type: "I" },
      { t: "계획대로 되고 있어", type: "J" },
      { t: "뭐든 가능해 보여~", type: "N" }
    ]
  }
];

let scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };
let idx = 0;

const $startBtn = document.getElementById("startBtn");
const $start = document.querySelector(".start");
const $question = document.querySelector(".question");
const $result = document.querySelector(".result");
const $qText = document.getElementById("qText");
const $optList = document.getElementById("optList");
const $bar = document.querySelector(".progress-bar");
const $rImg = document.getElementById("rImg");
const $rTitle = document.getElementById("rTitle");
const $rDesc = document.getElementById("rDesc");

$startBtn.onclick = () => {
  $start.style.display = "none";
  $question.style.display = "block";
  showQuestion();
};

function showQuestion() {
  if (idx >= questions.length) return finish();
  const q = questions[idx];
  $qText.textContent = q.q;
  $optList.innerHTML = "";
  q.opt.forEach(o => {
    const li = document.createElement("li");
    li.textContent = o.t;
    li.onclick = () => {
      scores[o.type]++;
      idx++;
      $bar.style.width = (idx / questions.length * 100) + "%";
      showQuestion();
    };
    $optList.appendChild(li);
  });
}

function finish() {
  $question.style.display = "none";
  $result.style.display = "block";

  const mbti = getMBTI();
  const data = results[mbti];

  $rImg.src = data.img || "";
  $rTitle.textContent = data.title;
  $rDesc.textContent = data.desc;

  // matchReason을 배열로 처리
  const match0 = data.match[0];
  const match1 = data.match[1];
  const match0Breed = results[match0]?.breed || "";
  const match1Breed = results[match1]?.breed || "";

  document.getElementById("rMatch").innerHTML =
    `잘 맞는 고양이: <b>${match0Breed}(${match0})</b>, <b>${match1Breed}(${match1})</b><br>` +
    `<b>${match0Breed}(${match0})</b>: ${data.matchReason[0]}<br>` +
    `<b>${match1Breed}(${match1})</b>: ${data.matchReason[1]}`;

  const mismatch = data.mismatch;
  const mismatchBreed = results[mismatch]?.breed || "";
  document.getElementById("rMismatch").innerHTML =
    `상극 고양이: <b>${mismatchBreed}(${mismatch})</b><br>${data.mismatchReason}`;
}

function getMBTI() {
  return (scores.E >= scores.I ? "E" : "I") +
         (scores.S >= scores.N ? "S" : "N") +
         (scores.T >= scores.F ? "T" : "F") +
         (scores.J >= scores.P ? "J" : "P");
}
const results = {
  "ENFJ": {
    "title": "ENFJ – 랙돌",
    "desc": "처음 본 고양이에게도 먼저 다가가 인싸력을 발휘하는 따뜻한 고양이! 배려심 넘치고, 주인의 기분을 귀신같이 캐치해요.",
    "breed": "랙돌",
    "img": "img/cat_enfj.png",
    "match": ["INFP", "ISFJ"],
    "mismatch": "ISTP",
    "matchReason": [
      "INFP는 감성적인 면에서 ENFJ와 깊이 연결돼요.",
      "ISFJ는 조용하지만 따뜻한 케어로 ENFJ를 안정시켜요."
    ],
    "mismatchReason": "ISTP는 혼자 있는 걸 좋아해서 ENFJ의 적극적인 관심이 부담스러울 수 있어요."
  },
  "INFP": {
    "title": "INFP – 샴",
    "desc": "감성적이고 낭만적인 고양이. 혼자만의 시간도 필요하지만, 애정이 넘치는 주인과는 깊은 유대를 맺어요.",
    "breed": "샴",
    "img": "img/cat_infp.png",
    "match": ["ENFJ", "INFJ"],
    "mismatch": "ESTJ",
    "matchReason": [
      "ENFJ의 따뜻한 리더십이 INFP를 잘 이끌어줘요.",
      "INFJ는 조용히 감정을 공유할 수 있는 이상적인 동반자예요."
    ],
    "mismatchReason": "ESTJ의 현실적인 성향이 INFP의 감성적 면과 자주 충돌해요."
  },
  "ISTP": {
    "title": "ISTP – 러시안블루",
    "desc": "쿨하고 독립적인 성격! 자기만의 루틴과 취향이 명확하며, 관심이 갈 때만 애정을 표현해요.",
    "breed": "러시안블루",
    "img": "img/cat_istp.png",
    "match": ["INTP", "ISTJ"],
    "mismatch": "ENFJ",
    "matchReason": [
      "INTP와는 말없이도 잘 통하는 사이예요.",
      "ISTJ는 비슷한 가치관과 규칙적인 생활 리듬이 잘 맞아요."
    ],
    "mismatchReason": "ENFJ의 지나치게 사교적인 성격이 ISTP에게 스트레스가 될 수 있어요."
  },
  "ESFP": {
    "title": "ESFP – 토이거",
    "desc": "사교성과 생동감의 아이콘인 ESFP는 토이거처럼 주목받는 걸 좋아하고 모두를 즐겁게 만듭니다.",
    "breed": "토이거",
    "img": "img/cat_esfp.png",
    "match": ["ISFJ", "ENFP"],
    "mismatch": "INTJ",
    "matchReason": [
      "차분한 ISFJ가 ESFP의 에너지를 수용하고 조화를 이룹니다.",
      "두 사람 모두 긍정적이고 활기찬 성향으로 쉽게 친해집니다."
    ],
    "mismatchReason": "INTJ는 조용한 계획가로서 ESFP의 즉흥성과 충돌이 잦을 수 있습니다."
  },
  "INTJ": {
    "title": "INTJ – 브리티시 숏헤어",
    "desc": "계획적이고 전략적인 브리티시 숏헤어. 겉으로는 시크하지만 속은 따뜻한 츤데레형이에요.",
    "breed": "브리티시 숏헤어",
    "img": "img/cat_intj.png",
    "match": ["INFJ", "ISTP"],
    "mismatch": "ESFP",
    "matchReason": [
      "INFJ는 조용한 대화와 감성적 교류가 가능한 파트너예요.",
      "ISTP는 비슷한 자기만의 세계를 공유할 수 있어요."
    ],
    "mismatchReason": "ESFP는 즉흥적이라 INTJ의 구조적 성격과 자주 부딪혀요."
  },
  "ISFJ": {
    "title": "ISFJ – 스코티시 폴드",
    "desc": "조용하고 헌신적인 ISFJ는 스코티시 폴드처럼 주변 사람을 살뜰히 챙기며 안정감을 줍니다.",
    "breed": "스코티시 폴드",
    "img": "img/cat_isfj.png",
    "match": ["ESFJ", "ISTJ"],
    "mismatch": "ENTP",
    "matchReason": [
      "서로의 세심함과 헌신이 자연스럽게 조화를 이룹니다.",
      "차분한 라이프스타일이 잘 맞고 안정적인 관계를 만들어갑니다."
    ],
    "mismatchReason": "ENTP는 변화와 자극을 추구하기에 ISFJ의 조용한 삶과는 충돌이 있을 수 있습니다."
  },
  "ENTP": {
    "title": "ENTP – 먼치킨",
    "desc": "궁금한 건 못 참는 호기심 천국! 탐험을 좋아하고, 늘 새로운 장난감을 찾는 창의력 고양이.",
    "breed": "먼치킨",
    "img": "img/cat_entp.png",
    "match": ["INTP", "ENFP"],
    "mismatch": "ISFJ",
    "matchReason": [
      "INTP와는 지적 호기심을 자극하며 대화가 잘 통해요.",
      "ENFP는 서로 자극을 주며 에너지를 폭발시켜요."
    ],
    "mismatchReason": "ISFJ는 안정적인 일상을 선호해서 ENTP의 변덕을 버거워해요."
  },
  "INFJ": {
    "title": "INFJ – 노르웨이숲",
    "desc": "신비롭고 조용한 고양이. 내면의 세계가 풍부하고, 한 번 믿으면 평생 함께하는 타입이에요.",
    "breed": "노르웨이숲",
    "img": "img/cat_infj.png",
    "match": ["ENFP", "INTJ"],
    "mismatch": "ESTP",
    "matchReason": [
      "ENFP는 INFJ의 깊은 감정을 따뜻하게 감싸줘요.",
      "INTJ는 서로의 독립성을 존중해줘요."
    ],
    "mismatchReason": "ESTP의 외향적이고 즉흥적인 성격은 INFJ에게는 너무 거칠 수 있어요."
  },
  "ENFP": {
    "title": "ENFP – 버마",
    "desc": "항상 호기심으로 가득 찬 버마 고양이처럼, ENFP는 창의력과 열정이 넘치며 새로운 사람이나 상황에 쉽게 끌립니다.",
    "breed": "버마",
    "img": "img/cat_enfp.png",
    "match": ["INFJ", "INFP"],
    "mismatch": "ISTJ",
    "matchReason": [
      "INFJ의 열정에 INFJ의 깊은 공감력이 어우러져 환상의 파트너십을 이룹니다.",
      "INFP와는 비슷한 감수성과 자유로움으로 서로의 공간을 존중하며 친밀함을 키웁니다."
    ],
    "mismatchReason": "ISTJ의 규칙적인 삶은 ENFP의 자유로운 성향과 충돌할 수 있습니다."
  },
  "ESTP": {
    "title": "ESTP – 벵갈",
    "desc": "활동적이고 에너지가 넘치는 ESTP는 벵갈 고양이처럼 민첩하고 도전적인 삶을 즐깁니다.",
    "breed": "벵갈",
    "img": "img/cat_estp.png",
    "match": ["ISFP", "ISTP"],
    "mismatch": "INFJ",
    "matchReason": [
      "실용적이고 조용한 ISFP는 ESTP의 즉흥성에 안정감을 더해줍니다.",
      "함께 모험을 즐기며 시너지를 발휘할 수 있는 파트너입니다."
    ],
    "mismatchReason": "INFJ는 깊이 있는 내면을 공유하길 원하지만, ESTP는 겉으로 드러나는 자극을 더 중시합니다."
  },
  "ISFP": {
    "title": "ISFP – 페르시안",
    "desc": "고요하고 우아한 페르시안처럼, ISFP는 내향적이면서도 예술적인 감각이 뛰어난 고양이입니다.",
    "breed": "페르시안",
    "img": "img/cat_isfp.png",
    "match": ["ESFP", "ESTP"],
    "mismatch": "ENTJ",
    "matchReason": [
      "서로의 감각적 성향을 이해하며 즐거운 시간을 공유합니다.",
      "즉흥적인 ESTP가 ISFP를 자극하며 새로운 경험을 함께 만들어갑니다."
    ],
    "mismatchReason": "ENTJ의 강한 주도성은 ISFP의 평온함을 위협할 수 있습니다."
  },
  "ESTJ": {
    "title": "ESTJ – 아비시니안",
    "desc": "조직적이고 책임감 강한 ESTJ는 규칙을 중요하게 여기며, 아비시니안처럼 활발하면서도 질서를 선호합니다.",
    "breed": "아비시니안",
    "img": "img/cat_estj.png",
    "match": ["ISTJ", "ESFJ"],
    "mismatch": "INFP",
    "matchReason": [
      "둘 다 현실적이며 책임감 있는 성격으로 일관된 생활을 유지합니다.",
      "사교성과 조직력을 함께 갖춘 커플로 잘 어울립니다."
    ],
    "mismatchReason": "INFP는 ESTJ의 직설적 태도에 상처받을 수 있으며 감성적 접근이 어렵습니다."
  },
  "ESFJ": {
    "title": "ESFJ – 셀커크 렉스",
    "desc": "온화하고 헌신적인 ESFJ는 셀커크 렉스 고양이처럼 따뜻한 분위기를 자아내며 사람을 좋아합니다.",
    "breed": "셀커크 렉스",
    "img": "img/cat_esfj.png",
    "match": ["ISFP", "ESTJ"],
    "mismatch": "INTP",
    "matchReason": [
      "감성적 교감이 잘 맞고 상대를 잘 배려해주는 이상적인 조합입니다.",
      "조직력과 현실적 감각이 비슷해 실용적인 커플이 됩니다."
    ],
    "mismatchReason": "INTP는 독립적인 성향이 강해 ESFJ의 관심을 부담스럽게 여길 수 있습니다."
  },
  "ISTJ": {
    "title": "ISTJ – 터키시 앙고라",
    "desc": "논리적이고 책임감 있는 ISTJ는 터키시 앙고라처럼 일관된 루틴을 중요하게 생각합니다.",
    "breed": "터키시 앙고라",
    "img": "img/cat_istj.png",
    "match": ["ESTJ", "ISFJ"],
    "mismatch": "ENFP",
    "matchReason": [
      "실용주의 성향이 비슷하고 현실적인 대화를 즐깁니다.",
      "둘 다 신뢰와 성실을 바탕으로 관계를 쌓습니다."
    ],
    "mismatchReason": "ENFP는 즉흥적이고 자유로운 성향으로 ISTJ의 체계를 흔들 수 있습니다."
  },
  "INTP": {
    "title": "INTP – 오리엔탈 쇼트헤어",
    "desc": "호기심 많고 분석적인 INTP는 오리엔탈 쇼트헤어처럼 날렵하고 독창적인 사고를 가진 고양이에요. 말은 없지만 자신만의 세계가 또렷한 철학자 타입!",
    "breed": "오리엔탈 쇼트헤어",
    "img": "img/cat_intp.png",
    "match": ["ENTP", "ISTP"],
    "mismatch": "ESFJ",
    "matchReason": [
      "같은 지적 호기심을 가진 ENTP와는 대화가 즐겁고 새로운 아이디어를 자극해줘요.",
      "말없이도 통하는 조용한 이해자, 함께 있어도 편안한 사이예요."
    ],
    "mismatchReason": "ESFJ는 지나치게 감정적으로 다가올 수 있어 INTP에게는 부담스러울 수 있어요."
  },
  "ENTJ": {
    "title": "ENTJ – 싱가푸라",
    "desc": "작지만 카리스마 넘치는 싱가푸라처럼 ENTJ는 리더십이 강하고 계획적인 성향이에요. 목표를 정하면 끝까지 밀고 나가는 추진력 갑 고양이!",
    "breed": "싱가푸라",
    "img": "img/cat_entj.png",
    "match": ["INTP", "ESTJ"],
    "mismatch": "ISFP",
    "matchReason": [
      "분석적이고 논리적인 INTP는 ENTJ의 아이디어에 날개를 달아주는 브레인이에요.",
      "비슷한 주도적 성향으로 공동 목표를 향해 잘 협력할 수 있는 타입이에요."
    ],
    "mismatchReason": "ISFP는 조용한 감성파라 ENTJ의 강한 추진력에 지칠 수 있어요."
  }
}
function goHome() {
  window.location.href = "/index.html"; // 메인 포탈 경로
}

function restartTest() {
  window.location.href = "index.html"; // 테스트 시작점 경로
}

function copyShareLink() {
  const dummy = document.createElement("input");
  const url = window.location.href;
  document.body.appendChild(dummy);
  dummy.value = url;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("링크가 복사됐어요! 친구에게 공유해보세요 🐾");
}

function downloadImage() {
  const img = document.getElementById("rImg");
  const link = document.createElement("a");
  link.href = img.src;
  link.download = img.src.split("/").pop(); // 파일명 추출
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}