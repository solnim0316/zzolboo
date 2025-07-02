/* === script.js 완성본 === */

/* 1. 데이터 -------------------------------------------------- */
// 4 문항 × 4 지선다
const questions = [
  {
    q: "친구가 갑질 당했다며 연락이 왔다. 당신의 반응은?",
    opt: [
      { t: "일단 전화. '어디야?' 끝.", tt: 1, eg: 0 },
      { t: "‘헐 괜찮아? 무슨 일 있었던 거야?’", tt: 0, eg: 1 },
      { t: "‘오케이. 일단 만나자, 얘기 들려줘’", tt: 1, eg: 1 },
      { t: "‘와 진짜 개빡치네…’ 하고 끊김", tt: -1, eg: 1 },
    ]
  },
  {
    q: "길거리에서 모르는 사람이 부딪혔다. 당신은?",
    opt: [
      { t: "‘앞 좀 보고 다니세요’ 딱 말함", tt: 1, eg: 0 },
      { t: "말 안 하고 그냥 스쳐 지나감", tt: 0, eg: 1 },
      { t: "피식 웃으며 고개 끄덕", tt: 1, eg: 1 },
      { t: "내적 분노 후 그대로 멈춤", tt: -1, eg: 1 },
    ]
  },
  {
    q: "소개팅에서 상대가 예의 없이 행동했다!",
    opt: [
      { t: "‘예의 좀 지키시죠’ 한마디 함", tt: 1, eg: 0 },
      { t: "‘오늘은 여기까지’ 바로 자리 뜸", tt: 0, eg: 1 },
      { t: "‘음… 잘 안 맞네요’ 정중하게 마무리", tt: 1, eg: 1 },
      { t: "속으로만 화내고 집 와서 폭발함", tt: -1, eg: 1 },
    ]
  },
  {
    q: "회식자리, 상사가 눈치 없이 말 걸기 시작했다",
    opt: [
      { t: "‘그만 좀 하시죠’ 정색", tt: 1, eg: 0 },
      { t: "웃고 넘기며 눈은 죽음", tt: 0, eg: 1 },
      { t: "리액션하면서도 거리 둠", tt: 1, eg: 1 },
      { t: "화장실 가는 척하며 피함", tt: -1, eg: 1 },
    ]
  },
  {
    q: "SNS에서 내 게시물에 악플이 달렸다!",
    opt: [
      { t: "악플 캡처해서 공개 저격", tt: 1, eg: 0 },
      { t: "바로 차단하고 무시함", tt: 0, eg: 1 },
      { t: "해명 댓글 달고 덤덤하게", tt: 1, eg: 1 },
      { t: "친구한테 하소연만 3시간", tt: -1, eg: 1 },
    ]
  },
  {
    q: "기다리던 택배가 파손돼서 왔다!",
    opt: [
      { t: "바로 고객센터 신고 ㄱ", tt: 1, eg: 0 },
      { t: "그냥 포기하고 입 다묾", tt: 0, eg: 1 },
      { t: "문의 남기면서도 예의는 챙김", tt: 1, eg: 1 },
      { t: "‘귀찮다… 걍 쓰자’", tt: -1, eg: 1 },
    ]
  },
  {
    q: "친구가 약속 40분 지각... 당신은?",
    opt: [
      { t: "‘지금 몇 시인지 알아?’ 카톡 보냄", tt: 1, eg: 0 },
      { t: "‘괜찮아~ 조심히 와’ 라고 씀", tt: 0, eg: 1 },
      { t: "‘담엔 좀만 빨리 와줘요ㅎㅎ’", tt: 1, eg: 1 },
      { t: "카톡 안 보내고 말없이 삐침", tt: -1, eg: 1 },
    ]
  },
  {
    q: "부당한 업무가 주어졌을 때 당신은?",
    opt: [
      { t: "‘이건 못하겠습니다’ 선언", tt: 1, eg: 0 },
      { t: "일단 받아두고 밤새 함", tt: 0, eg: 1 },
      { t: "부드럽게 문제 제기함", tt: 1, eg: 1 },
      { t: "친구한테만 욕함", tt: -1, eg: 1 },
    ]
  },
  {
    q: "사람 많은 지하철에서 자리 다툼이 났다!",
    opt: [
      { t: "‘지금 뭐 하시는 거예요?’ 정면승부", tt: 1, eg: 0 },
      { t: "그냥 자리 피해버림", tt: 0, eg: 1 },
      { t: "말은 예의 있게, 눈빛은 싸늘하게", tt: 1, eg: 1 },
      { t: "기 싸움 피하고 그냥 진다", tt: -1, eg: 1 },
    ]
  },
  {
    q: "혼자 카페에 앉아있는데 별로인 사람이 번호를 물어본다면?",
    opt: [
      { t: "‘죄송한데 불편해요’ 정중 퇴짜", tt: 1, eg: 0 },
      { t: "웃으며 대충 넘김", tt: 0, eg: 1 },
      { t: "‘감사한데 괜찮아요~’", tt: 1, eg: 1 },
      { t: "말 못 하고 어버버", tt: -1, eg: 1 },
    ]
  },
  {
    q: "급하게 팀플 대표 발표를 맡게 됐다!",
    opt: [
      { t: "‘제가 하죠 뭐’ 하고 맡음", tt: 1, eg: 0 },
      { t: "부담돼서 뒷걸음", tt: 0, eg: 1 },
      { t: "도움 요청하면서도 중심 잡음", tt: 1, eg: 1 },
      { t: "멘붕 와서 아무 말 못 함", tt: -1, eg: 1 },
    ]
  },
  {
    q: "카톡 답장이 안 와서 하루가 지나버렸다...",
    opt: [
      { t: "‘왜 답 없지?’ 직접 전화", tt: 1, eg: 0 },
      { t: "‘바빴겠지’ 이해하고 넘김", tt: 0, eg: 1 },
      { t: "‘괜찮아~ 나중에 봐도 돼’", tt: 1, eg: 1 },
      { t: "톡창 열었다 닫았다만 반복", tt: -1, eg: 1 },
    ]
  },
];


// 결과 8종(기본 4 + 성별반전 4)
const result = {
  "테토남":  { title:"불도저 리더형 테토남",
               desc:"테스토스테론 충만! 밀어붙이는 추진력과 결단력으로 무장한 당신은 어떤 일이든 돌파하는 불도저 스타일!",
               img:"img/tetoman.png" },
  "테토녀":  { title:"사이다 냉미녀 테토녀",
               desc:"겉은 시크, 속은 열정! 핵심을 콕 집는 능력자.",
               img:"img/tetowoman.png" },
  "에겐남":  { title:"우유빛 감성 에겐남",
               desc:"섬세하고 조용한 공감러. 배려로 존재감을 뿜는 타입!",
               img:"img/egenman.png" },
  "에겐녀":  { title:"공감 마스터 에겐녀",
               desc:"상대 눈빛까지 캐치하는 다정함 100%. 가끔은 ‘나’를 챙겨요!",
               img:"img/egenwoman.png" },
  // 성별 반전 4
  "남-테토녀":{ title:"소신있는 냉소녀 테토녀 (남성 ver.)",
               desc:"성별에 갇히지 않는 날카로운 판단력! 분위기를 리드하는 쿨가이.",
               img:"img/tetowoman.png"},
  "남-에겐녀":{ title:"물빛 감성러 에겐녀 (남성 ver.)",
               desc:"부드러운 눈빛과 배려, 의외의 매력남!",
               img:"img/egenwoman.png"},
  "여-테토남":{ title:"리더 본능 테토남 (여성 ver.)",
               desc:"강단 있고 멋진 여성 리더 스타일.",
               img:"img/tetoman.png"},
  "여-에겐남":{ title:"감정절제형 에겐남 (여성 ver.)",
               desc:"배려와 안정감을 추구하는 조용한 관찰자.",
               img:"img/egenman.png"}
};

/* 2. 상태 변수 ---------------------------------------------- */
let gender = "";          // male / female
let idx = 0;              // 현재 문항 번호
let 테토 = 0, 에겐 = 0;   // 누적 점수

/* 3. DOM 참조 ---------------------------------------------- */
const $start   = document.querySelector(".start");
const $question= document.querySelector(".question");
const $result  = document.querySelector(".result");
const $qText   = document.getElementById("qText");
const $optList = document.getElementById("optList");
const $bar     = document.querySelector(".progress-bar");
const $rImg    = document.getElementById("rImg");
const $rTitle  = document.getElementById("rTitle");
const $rDesc   = document.getElementById("rDesc");

/* 4. 시작 화면 --------------------------------------------- */
document.getElementById("maleBtn").onclick   = ()=>{ gender="male";   begin(); };
document.getElementById("femaleBtn").onclick = ()=>{ gender="female"; begin(); };

function begin(){
  $start.style.display="none";
  $question.style.display="block";
  showQuestion();
}

/* 5. 문항 출력 --------------------------------------------- */
function showQuestion(){
  if(idx >= questions.length){
    finish();
    return;
  }
  const cur = questions[idx];
  $qText.textContent = cur.q;
  $optList.innerHTML = "";   // 이전 옵션 제거
  cur.opt.forEach(o=>{
    const li = document.createElement("li");
    li.textContent = o.t;
    li.onclick = ()=>{ 테토+=o.tt; 에겐+=o.eg; idx++; updateBar(); showQuestion(); };
    $optList.appendChild(li);
  });
}
function updateBar(){
  const per = Math.round((idx/questions.length)*100);
  $bar.style.width = per+"%";
}

/* 6. 결과 계산 --------------------------------------------- */
function finish() {
  $question.style.display = "none";
  $result.style.display = "block";

  let resType = "";

  if (gender === "male") {
    if (테토 <= 2 && 에겐 >= 9)           resType = "에겐녀";
    else if (테토 <= 2 && 에겐 > 테토)    resType = "에겐녀";
    else if (테토 <= 2)                   resType = "테토녀";
    else if (테토 > 에겐)                 resType = "테토남";
    else                                  resType = "에겐남";
  } else { // female
    if (에겐 <= 2 && 테토 >= 9)           resType = "테토남";
    else if (에겐 <= 2 && 테토 > 에겐)    resType = "테토남";
    else if (에겐 <= 2)                   resType = "에겐남";
    else if (에겐 > 테토)                 resType = "에겐녀";
    else                                  resType = "테토녀";
  }

  // 성별 반전 결과 우선 적용
  const key = `${gender === "male" ? "남" : "여"}-${resType}`;
  const data = result[key] || result[resType];

  $rImg.src = data.img;
  $rTitle.textContent = data.title;
  $rDesc.textContent = data.desc;
}

// 버튼 기능 연결
document.getElementById("retryBtn").onclick = () => {
  idx = 0; 테토 = 0; 에겐 = 0; gender = "";
  $result.style.display = "none";
  $start.style.display = "block";   // 성별 선택 화면 다시 보여주기
};

document.getElementById("homeBtn").onclick = () => {
  window.location.href = "../../index.html";  // 메인 포털로 이동
};

document.getElementById("shareBtn").onclick = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert("링크가 복사되었어요!");
  });
};

document.getElementById("saveBtn").onclick = () => {
  html2canvas(document.querySelector(".result")).then(canvas => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "result.png";
    a.click();
  });
};
