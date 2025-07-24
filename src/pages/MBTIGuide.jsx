// 📚 MBTI 이론 완전 가이드 페이지
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function MBTIGuide() {
  const [activeTab, setActiveTab] = useState('theory');

  const mbtiTypes = [
    {
      type: "INTJ",
      name: "건축가",
      description: "상상력이 풍부하고 전략적인 사고를 하는 사람",
      traits: ["독립적", "창의적", "결단력", "완벽주의"],
      careers: ["과학자", "엔지니어", "건축가", "작가"],
      famous: ["일론 머스크", "스티븐 호킹", "니콜라 테슬라"],
      strengths: ["전략적 사고", "독립성", "창의성", "미래 비전"],
      weaknesses: ["감정 표현 어려움", "완벽주의", "비판적 태도", "협업 어려움"],
      percentage: "2-4%"
    },
    {
      type: "INTP", 
      name: "논리술사",
      description: "혁신적인 발명가로 지식에 대한 갈증이 끝이 없는 사람",
      traits: ["논리적", "객관적", "유연한", "호기심"],
      careers: ["연구원", "프로그래머", "수학자", "철학자"],
      famous: ["알베르트 아인슈타인", "빌 게이츠", "스티븐 호킹"],
      strengths: ["논리적 분석", "객관성", "유연성", "창의성"],
      weaknesses: ["감정 무시", "현실감 부족", "우유부단", "마감 미루기"],
      percentage: "3-5%"
    },
    {
      type: "ENTJ",
      name: "통솔자", 
      description: "대담하고 상상력이 풍부한 강력한 의지의 리더",
      traits: ["리더십", "결단력", "효율성", "자신감"],
      careers: ["CEO", "정치가", "변호사", "사업가"],
      famous: ["스티브 잡스", "나폴레옹", "윈스턴 처칠"],
      strengths: ["리더십", "효율성", "목표 지향", "결단력"],
      weaknesses: ["무관용", "성급함", "감정 경시", "독단적"],
      percentage: "2-4%"
    },
    {
      type: "ENTP",
      name: "변론가",
      description: "똑똑하고 호기심이 많은 사색가",
      traits: ["창의적", "열정적", "독립적", "카리스마"],
      careers: ["기업가", "발명가", "저널리스트", "컨설턴트"],
      famous: ["토마스 에디슨", "레오나르도 다빈치", "월트 디즈니"],
      strengths: ["창의성", "열정", "적응력", "카리스마"],
      weaknesses: ["집중력 부족", "루틴 싫어함", "세부사항 놓침", "약속 어김"],
      percentage: "2-3%"
    },
    {
      type: "INFJ",
      name: "옹호자",
      description: "선의의 옹호자이며 창의적이고 통찰력이 있는 사람",
      traits: ["이상주의", "공감능력", "창의성", "결단력"],
      careers: ["상담사", "작가", "교사", "예술가"],
      famous: ["간디", "넬슨 만델라", "마더 테레사"],
      strengths: ["통찰력", "공감능력", "창의성", "결단력"],
      weaknesses: ["완벽주의", "민감함", "번아웃", "갈등 회피"],
      percentage: "1-3%"
    },
    {
      type: "INFP", 
      name: "중재자",
      description: "항상 선을 행할 준비가 되어 있는 시적이고 친절한 이타주의자",
      traits: ["이상주의", "충성심", "적응력", "호기심"],
      careers: ["작가", "상담사", "예술가", "심리학자"],
      famous: ["윌리엄 셰익스피어", "존 레논", "오드리 헵번"],
      strengths: ["이상주의", "충성심", "공감능력", "창의성"],
      weaknesses: ["과도한 이상주의", "스트레스 취약", "실용성 부족", "자기비판"],
      percentage: "4-5%"
    },
    {
      type: "ENFJ",
      name: "선도자",
      description: "카리스마 넘치고 영감을 주는 지도자",
      traits: ["카리스마", "이타심", "신뢰성", "이해심"],
      careers: ["교사", "상담사", "정치가", "종교인"],
      famous: ["오프라 윈프리", "버락 오바마", "교황 요한 바오로 2세"],
      strengths: ["카리스마", "공감능력", "소통력", "동기부여"],
      weaknesses: ["과도한 이타심", "비판 민감", "번아웃", "자기 무시"],
      percentage: "2-3%"
    },
    {
      type: "ENFP",
      name: "활동가", 
      description: "열정적이고 창의적인 자유로운 영혼",
      traits: ["열정적", "창의적", "사교적", "낙관적"],
      careers: ["배우", "음악가", "저널리스트", "상담사"],
      famous: ["로빈 윌리엄스", "엘런 드제너러스", "윌 스미스"],
      strengths: ["열정", "창의성", "사교성", "낙관주의"],
      weaknesses: ["집중력 부족", "루틴 싫어함", "과도한 감정", "현실감 부족"],
      percentage: "7-8%"
    },
    {
      type: "ISTJ",
      name: "논리주의자",
      description: "사실과 믿을 만한 정보를 중시하는 실용적이고 현실적인 사람",
      traits: ["책임감", "성실함", "체계적", "신중함"],
      careers: ["회계사", "의사", "판사", "관리자"],
      famous: ["조지 워싱턴", "워렌 버핏", "엘리자베스 2세"],
      strengths: ["책임감", "성실함", "체계성", "신뢰성"],
      weaknesses: ["변화 거부", "융통성 부족", "감정 표현 어려움", "새로운 것 회피"],
      percentage: "11-14%"
    },
    {
      type: "ISFJ",
      name: "수호자",
      description: "따뜻한 마음과 헌신적인 성격으로 항상 다른 사람을 도울 준비가 되어 있는 사람",
      traits: ["이타적", "신뢰할만한", "인내심", "관찰력"],
      careers: ["간호사", "교사", "상담사", "사회복지사"],
      famous: ["마더 테레사", "로사 파크스", "케이트 미들턴"],
      strengths: ["이타심", "신뢰성", "지지력", "섬세함"],
      weaknesses: ["자기주장 부족", "과로", "변화 어려움", "갈등 회피"],
      percentage: "9-14%"
    },
    {
      type: "ESTJ",
      name: "경영자",
      description: "훌륭한 관리자로 계획을 관리하거나 사람을 관리하는 데 타고난 재능이 있는 사람",
      traits: ["리더십", "실용적", "체계적", "결단력"],
      careers: ["관리자", "판사", "군인", "사업가"],
      famous: ["프랭클린 루스벨트", "헨리 포드", "존 록펠러"],
      strengths: ["리더십", "조직력", "결단력", "실용성"],
      weaknesses: ["융통성 부족", "감정 무시", "독단적", "전통 고수"],
      percentage: "8-12%"
    },
    {
      type: "ESFJ",
      name: "집정관",
      description: "도움이 되고 싶어하고 인기가 많으며 항상 다른 사람을 도우려 하는 사람",
      traits: ["협력적", "친절함", "실용적", "충성심"],
      careers: ["교사", "간호사", "상담사", "매니저"],
      famous: ["테일러 스위프트", "휴 잭맨", "안젤리나 졸리"],
      strengths: ["협력성", "친화력", "조화 추구", "실용성"],
      weaknesses: ["비판 민감", "갈등 회피", "자기주장 부족", "변화 어려움"],
      percentage: "9-13%"
    },
    {
      type: "ISTP",
      name: "만능재주꾼",
      description: "대담하고 실용적인 실험정신의 소유자",
      traits: ["독립적", "적응력", "현실적", "논리적"],
      careers: ["엔지니어", "파일럿", "수리공", "운동선수"],
      famous: ["브루스 리", "클린트 이스트우드", "마이클 조던"],
      strengths: ["실용성", "적응력", "문제해결", "독립성"],
      weaknesses: ["감정 표현 어려움", "장기계획 어려움", "루틴 싫어함", "약속 경시"],
      percentage: "4-6%"
    },
    {
      type: "ISFP",
      name: "모험가",
      description: "유연하고 매력적인 예술가 기질의 사람",
      traits: ["예술적", "유연함", "매력적", "호기심"],
      careers: ["예술가", "음악가", "디자이너", "상담사"],
      famous: ["마이클 잭슨", "프린스", "레이디 가가"],
      strengths: ["예술성", "유연성", "공감능력", "개성"],
      weaknesses: ["자기주장 부족", "스트레스 취약", "계획성 부족", "현실감 부족"],
      percentage: "8-9%"
    },
    {
      type: "ESTP",
      name: "사업가",
      description: "영리하고 에너지 넘치며 인식이 뛰어난 사람",
      traits: ["활동적", "실용적", "관찰력", "적응력"],
      careers: ["영업직", "운동선수", "연예인", "기업가"],
      famous: ["도널드 트럼프", "어니스트 헤밍웨이", "브루스 윌리스"],
      strengths: ["활동력", "적응력", "현실감", "사교성"],
      weaknesses: ["장기계획 어려움", "루틴 싫어함", "충동적", "세부사항 놓침"],
      percentage: "4-5%"
    },
    {
      type: "ESFP",
      name: "연예인",
      description: "자발적이고 열정적이며 사람과 어울리기 좋아하는 사람",
      traits: ["열정적", "친근함", "낙관적", "유연함"],
      careers: ["연예인", "교사", "상담사", "이벤트 기획자"],
      famous: ["마릴린 먼로", "엘비스 프레슬리", "빌 클린턴"],
      strengths: ["열정", "친화력", "낙관주의", "유연성"],
      weaknesses: ["계획성 부족", "장기적 사고 어려움", "비판 민감", "집중력 부족"],
      percentage: "6-8%"
    }
  ];

  const dimensions = [
    {
      name: 'E vs I',
      title: '외향성 vs 내향성',
      description: '에너지의 방향과 관심의 초점',
      extrovert: {
        letter: 'E',
        name: '외향성 (Extraversion)',
        traits: ['사람과의 상호작용에서 에너지 충전', '외부 세계에 관심', '말로 생각을 정리', '폭넓은 인간관계'],
        percentage: '약 75%'
      },
      introvert: {
        letter: 'I',
        name: '내향성 (Introversion)',
        traits: ['혼자만의 시간에서 에너지 충전', '내면 세계에 관심', '생각으로 정리 후 말함', '깊이 있는 인간관계'],
        percentage: '약 25%'
      }
    },
    {
      name: 'S vs N',
      title: '감각 vs 직관',
      description: '정보를 받아들이는 방식',
      extrovert: {
        letter: 'S',
        name: '감각형 (Sensing)',
        traits: ['구체적이고 실제적인 정보 선호', '현재에 집중', '세부사항 중시', '경험을 통한 학습'],
        percentage: '약 75%'
      },
      introvert: {
        letter: 'N',
        name: '직감형 (iNtuition)',
        traits: ['추상적이고 이론적인 정보 선호', '미래 가능성에 집중', '전체적인 틀 중시', '상상력을 통한 학습'],
        percentage: '약 25%'
      }
    },
    {
      name: 'T vs F',
      title: '사고 vs 감정',
      description: '의사결정을 내리는 방식',
      extrovert: {
        letter: 'T',
        name: '사고형 (Thinking)',
        traits: ['논리와 분석을 통한 판단', '객관적 기준 중시', '원칙과 일관성 추구', '비판적 사고'],
        percentage: '약 50%'
      },
      introvert: {
        letter: 'F',
        name: '감정형 (Feeling)',
        traits: ['가치와 감정을 통한 판단', '주관적 의미 중시', '조화와 배려 추구', '공감적 사고'],
        percentage: '약 50%'
      }
    },
    {
      name: 'J vs P',
      title: '판단 vs 인식',
      description: '외부 세계에 대한 태도',
      extrovert: {
        letter: 'J',
        name: '판단형 (Judging)',
        traits: ['계획적이고 체계적', '결론을 선호', '마감시간 준수', '안정성과 질서 추구'],
        percentage: '약 55%'
      },
      introvert: {
        letter: 'P',
        name: '인식형 (Perceiving)',
        traits: ['융통성 있고 적응적', '과정을 즐김', '유연한 시간 관리', '자유와 다양성 추구'],
        percentage: '약 45%'
      }
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* 헤더 섹션 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 text-[#5D4037]">
              📚 MBTI 이론 완전 가이드
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Myers-Briggs Type Indicator의 모든 것을 알아보세요. 
              16가지 성격 유형의 특징부터 심층적인 이론까지, 
              MBTI를 완전히 이해할 수 있는 종합 가이드입니다.
            </p>
          </div>

          {/* 탭 네비게이션 */}
          <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('theory')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'theory' 
                  ? 'bg-[#5D4037] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📖 MBTI 이론
            </button>
            <button
              onClick={() => setActiveTab('dimensions')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'dimensions' 
                  ? 'bg-[#5D4037] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🔍 4가지 차원
            </button>
            <button
              onClick={() => setActiveTab('types')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'types' 
                  ? 'bg-[#5D4037] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              👥 16가지 유형
            </button>
            <button
              onClick={() => setActiveTab('application')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'application' 
                  ? 'bg-[#5D4037] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              💼 실생활 활용
            </button>
          </div>

          {/* MBTI 이론 섹션 */}
          {activeTab === 'theory' && (
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-[#5D4037]">🧠 MBTI란 무엇인가?</h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold text-[#5D4037] mb-4">📜 MBTI의 역사</h3>
                    <p className="text-gray-700 leading-relaxed">
                      MBTI(Myers-Briggs Type Indicator)는 1940년대 캐서린 쿡 브릭스(Katharine Cook Briggs)와 
                      그녀의 딸 이자벨 브릭스 마이어스(Isabel Briggs Myers)가 칼 융(Carl Jung)의 심리 유형론을 
                      바탕으로 개발한 성격 유형 지표입니다. 
                      제2차 세계대전 중 여성들이 적성에 맞는 일자리를 찾도록 돕기 위해 시작되었습니다.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold text-[#5D4037] mb-4">🎯 MBTI의 목적</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>자기 이해:</strong> 개인의 선호도와 행동 패턴을 이해</li>
                      <li>• <strong>타인 이해:</strong> 다른 사람의 관점과 행동 방식을 이해</li>
                      <li>• <strong>의사소통 개선:</strong> 효과적인 소통 방법을 찾기</li>
                      <li>• <strong>갈등 해결:</strong> 차이점을 인정하고 조화를 이루기</li>
                      <li>• <strong>개인 발전:</strong> 강점을 활용하고 약점을 보완하기</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold text-[#5D4037] mb-4">⚖️ MBTI의 기본 원리</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">🔄 선호도 이론</h4>
                        <p className="text-gray-700 text-sm">
                          MBTI는 타고난 성격이 아닌 '선호도'를 측정합니다. 
                          오른손잡이/왼손잡이처럼 자연스럽게 선호하는 방향이 있다는 이론입니다.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">📊 4가지 차원</h4>
                        <p className="text-gray-700 text-sm">
                          외향-내향, 감각-직관, 사고-감정, 판단-인식의 
                          4개 차원으로 성격을 분류하여 16가지 유형을 만듭니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-[#5D4037]">🔬 MBTI의 배경과 활용</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-3">✅ 장점</h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• 70년 이상의 연구와 발전</li>
                      <li>• 전 세계 수백만 명이 활용</li>
                      <li>• 기업, 교육기관에서 광범위하게 사용</li>
                      <li>• 지속적인 학술 연구와 개선</li>
                      <li>• 실용적이고 이해하기 쉬운 체계</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold text-[#5D4037] mb-3">⚠️ 한계점</h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• 이분법적 분류의 한계</li>
                      <li>• 상황에 따른 변화 가능성</li>
                      <li>• 개인차와 복잡성의 단순화</li>
                      <li>• 자기보고식 검사의 주관성</li>
                      <li>• 참고 자료로만 활용 권장</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4가지 차원 섹션 */}
          {activeTab === 'dimensions' && (
            <div className="space-y-8">
              {dimensions.map((dimension, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 text-[#5D4037] text-center">
                    {dimension.title}
                  </h2>
                  <p className="text-center text-gray-600 mb-8">{dimension.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                      <div className="text-center mb-4">
                        <span className="text-4xl font-bold text-blue-600">{dimension.extrovert.letter}</span>
                        <h3 className="text-xl font-bold text-[#5D4037] mt-2">{dimension.extrovert.name}</h3>
                        <span className="text-sm text-gray-600">{dimension.extrovert.percentage}</span>
                      </div>
                      <ul className="space-y-2">
                        {dimension.extrovert.traits.map((trait, idx) => (
                          <li key={idx} className="text-gray-700 text-sm">• {trait}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                      <div className="text-center mb-4">
                        <span className="text-4xl font-bold text-purple-600">{dimension.introvert.letter}</span>
                        <h3 className="text-xl font-bold text-[#5D4037] mt-2">{dimension.introvert.name}</h3>
                        <span className="text-sm text-gray-600">{dimension.introvert.percentage}</span>
                      </div>
                      <ul className="space-y-2">
                        {dimension.introvert.traits.map((trait, idx) => (
                          <li key={idx} className="text-gray-700 text-sm">• {trait}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 16가지 유형 섹션 */}
          {activeTab === 'types' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#5D4037] mb-4">16가지 성격 유형</h2>
                <p className="text-lg text-gray-700">각 유형의 특징과 대표 인물들을 확인해보세요!</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {mbtiTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#5D4037]">
                          {type.type} - {type.name}
                        </h3>
                        <span className="text-sm text-gray-500">인구의 {type.percentage}</span>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{type.type}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                      {type.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">🎯 주요 특징</h4>
                        <div className="flex flex-wrap gap-1">
                          {type.traits.map((trait, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">💪 강점</h4>
                        <div className="flex flex-wrap gap-1">
                          {type.strengths.map((strength, idx) => (
                            <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              {strength}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">⚠️ 주의점</h4>
                        <div className="flex flex-wrap gap-1">
                          {type.weaknesses.map((weakness, idx) => (
                            <span key={idx} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                              {weakness}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">💼 적합한 직업</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {type.careers.map((career, idx) => (
                            <li key={idx}>• {career}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">⭐ 유명인물</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {type.famous.map((person, idx) => (
                            <li key={idx}>• {person}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 실생활 활용 섹션 */}
          {activeTab === 'application' && (
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-[#5D4037]">💼 MBTI 실생활 활용법</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-semibold text-[#5D4037] mb-4">🏢 직장에서의 활용</h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• <strong>팀 빌딩:</strong> 팀원들의 성향을 이해하여 효과적인 협업</li>
                        <li>• <strong>의사소통:</strong> 상대방의 소통 스타일에 맞춘 대화</li>
                        <li>• <strong>갈등 해결:</strong> 차이점을 인정하고 건설적인 해결책 모색</li>
                        <li>• <strong>리더십:</strong> 구성원별 동기부여 방법 차별화</li>
                        <li>• <strong>업무 분장:</strong> 개인의 강점에 맞는 역할 배정</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-semibold text-[#5D4037] mb-4">💕 인간관계에서의 활용</h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• <strong>연애:</strong> 상대방의 사랑 언어와 표현 방식 이해</li>
                        <li>• <strong>우정:</strong> 친구의 성향에 맞는 활동과 대화 주제</li>
                        <li>• <strong>가족:</strong> 가족 구성원 간의 이해와 소통 개선</li>
                        <li>• <strong>육아:</strong> 아이의 성향에 맞는 교육과 양육 방식</li>
                        <li>• <strong>사회생활:</strong> 다양한 사람들과의 원활한 관계 형성</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-purple-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-semibold text-[#5D4037] mb-4">🎓 학습과 성장에서의 활용</h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• <strong>학습 스타일:</strong> 개인에게 맞는 공부 방법 찾기</li>
                        <li>• <strong>진로 선택:</strong> 성향에 맞는 직업과 전공 선택</li>
                        <li>• <strong>스트레스 관리:</strong> 개인별 스트레스 해소법 개발</li>
                        <li>• <strong>목표 설정:</strong> 성격에 맞는 목표 수립과 달성 방법</li>
                        <li>• <strong>자기계발:</strong> 강점 강화와 약점 보완 전략</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-semibold text-[#5D4037] mb-4">⚠️ 활용 시 주의사항</h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• <strong>고정관념 금지:</strong> 유형으로 사람을 판단하지 말기</li>
                        <li>• <strong>변화 가능성:</strong> 성격은 변할 수 있음을 인정</li>
                        <li>• <strong>개인차 존중:</strong> 같은 유형이라도 개인차는 존재</li>
                        <li>• <strong>참고 자료:</strong> 절대적 기준이 아닌 참고용으로 활용</li>
                        <li>• <strong>균형적 시각:</strong> 장단점을 모두 고려한 해석</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-[#5D4037]">
                  🎯 쫄부월드에서 MBTI 테스트하기
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  재미있는 테마로 나의 MBTI를 알아보세요! 
                  공룡 세계와 고양이 왕국에서 펼쳐지는 특별한 성격 테스트를 경험해보세요.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/dinosaur-test" 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105"
                  >
                    🦕 공룡 MBTI 테스트
                  </a>
                  <a 
                    href="/cat-test" 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
                  >
                    🐱 고양이 MBTI 테스트
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
