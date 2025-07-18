// 🦕 공룡 MBTI 테스트 페이지
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dinosaurTestData } from '@/data/dinosaurTestData';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function DinosaurTest() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState('intro'); // 'intro', 'test', 'result'
  const [userName, setUserName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [result, setResult] = useState(null);

  const { testInfo, questions, results } = dinosaurTestData;

  // 🎨 MBTI별 부드러운 카드 팔레트 시스템
  const getCardPalette = (mbtiType) => {
    const paletteMap = {
      'INTJ': {
        background: 'from-slate-100 to-slate-200',
        imageArea: 'from-slate-200 to-slate-300',
        textMain: 'text-slate-800',
        textSecondary: 'text-slate-600',
        tagBg: 'from-slate-400 to-slate-500',
        mbtiButton: 'from-slate-600 to-slate-700',
        dinosaurName: 'from-slate-300 to-slate-400',
        matchBg: 'bg-slate-50',
        mismatchBg: 'bg-slate-100'
      },
      'INTP': {
        background: 'from-blue-50 to-blue-100',
        imageArea: 'from-blue-100 to-blue-200',
        textMain: 'text-blue-800',
        textSecondary: 'text-blue-600',
        tagBg: 'from-blue-400 to-blue-500',
        mbtiButton: 'from-blue-500 to-blue-600',
        dinosaurName: 'from-blue-200 to-blue-300',
        matchBg: 'bg-blue-50',
        mismatchBg: 'bg-blue-100'
      },
      'ENTJ': {
        background: 'from-amber-50 to-orange-100',
        imageArea: 'from-amber-100 to-orange-200',
        textMain: 'text-amber-800',
        textSecondary: 'text-amber-700',
        tagBg: 'from-amber-400 to-orange-500',
        mbtiButton: 'from-amber-500 to-orange-600',
        dinosaurName: 'from-amber-200 to-orange-300',
        matchBg: 'bg-amber-50',
        mismatchBg: 'bg-orange-100'
      },
      'ENTP': {
        background: 'from-emerald-50 to-teal-100',
        imageArea: 'from-emerald-100 to-teal-200',
        textMain: 'text-emerald-800',
        textSecondary: 'text-emerald-600',
        tagBg: 'from-emerald-400 to-teal-500',
        mbtiButton: 'from-emerald-500 to-teal-600',
        dinosaurName: 'from-emerald-200 to-teal-300',
        matchBg: 'bg-emerald-50',
        mismatchBg: 'bg-teal-100'
      },
      'INFJ': {
        background: 'from-purple-50 to-indigo-100',
        imageArea: 'from-purple-100 to-indigo-200',
        textMain: 'text-purple-800',
        textSecondary: 'text-purple-600',
        tagBg: 'from-purple-400 to-indigo-500',
        mbtiButton: 'from-purple-500 to-indigo-600',
        dinosaurName: 'from-purple-200 to-indigo-300',
        matchBg: 'bg-purple-50',
        mismatchBg: 'bg-indigo-100'
      },
      'INFP': {
        background: 'from-pink-50 to-rose-100',
        imageArea: 'from-pink-100 to-rose-200',
        textMain: 'text-pink-800',
        textSecondary: 'text-pink-600',
        tagBg: 'from-pink-400 to-rose-500',
        mbtiButton: 'from-pink-500 to-rose-600',
        dinosaurName: 'from-pink-200 to-rose-300',
        matchBg: 'bg-pink-50',
        mismatchBg: 'bg-rose-100'
      },
      'ENFJ': {
        background: 'from-orange-50 to-red-100',
        imageArea: 'from-orange-100 to-red-200',
        textMain: 'text-orange-800',
        textSecondary: 'text-orange-600',
        tagBg: 'from-orange-400 to-red-500',
        mbtiButton: 'from-orange-500 to-red-600',
        dinosaurName: 'from-orange-200 to-red-300',
        matchBg: 'bg-orange-50',
        mismatchBg: 'bg-red-100'
      },
      'ENFP': {
        background: 'from-yellow-50 to-pink-100',
        imageArea: 'from-yellow-100 to-pink-200',
        textMain: 'text-yellow-800',
        textSecondary: 'text-yellow-700',
        tagBg: 'from-yellow-400 to-pink-500',
        mbtiButton: 'from-yellow-500 to-pink-600',
        dinosaurName: 'from-yellow-200 to-pink-300',
        matchBg: 'bg-yellow-50',
        mismatchBg: 'bg-pink-100'
      },
      'ISTJ': {
        background: 'from-stone-50 to-neutral-100',
        imageArea: 'from-stone-100 to-neutral-200',
        textMain: 'text-stone-800',
        textSecondary: 'text-stone-600',
        tagBg: 'from-stone-400 to-neutral-500',
        mbtiButton: 'from-stone-500 to-neutral-600',
        dinosaurName: 'from-stone-200 to-neutral-300',
        matchBg: 'bg-stone-50',
        mismatchBg: 'bg-neutral-100'
      },
      'ISFJ': {
        background: 'from-green-50 to-emerald-100',
        imageArea: 'from-green-100 to-emerald-200',
        textMain: 'text-green-800',
        textSecondary: 'text-green-600',
        tagBg: 'from-green-400 to-emerald-500',
        mbtiButton: 'from-green-500 to-emerald-600',
        dinosaurName: 'from-green-200 to-emerald-300',
        matchBg: 'bg-green-50',
        mismatchBg: 'bg-emerald-100'
      },
      'ESTJ': {
        background: 'from-orange-50 to-amber-100',
        imageArea: 'from-orange-100 to-amber-200',
        textMain: 'text-orange-800',
        textSecondary: 'text-orange-600',
        tagBg: 'from-orange-400 to-amber-500',
        mbtiButton: 'from-orange-500 to-amber-600',
        dinosaurName: 'from-orange-200 to-amber-300',
        matchBg: 'bg-orange-50',
        mismatchBg: 'bg-amber-100'
      },
      'ESFJ': {
        background: 'from-pink-50 to-fuchsia-100',
        imageArea: 'from-pink-100 to-fuchsia-200',
        textMain: 'text-pink-800',
        textSecondary: 'text-pink-600',
        tagBg: 'from-pink-400 to-fuchsia-500',
        mbtiButton: 'from-pink-500 to-fuchsia-600',
        dinosaurName: 'from-pink-200 to-fuchsia-300',
        matchBg: 'bg-pink-50',
        mismatchBg: 'bg-fuchsia-100'
      },
      'ISTP': {
        background: 'from-cyan-50 to-blue-100',
        imageArea: 'from-cyan-100 to-blue-200',
        textMain: 'text-cyan-800',
        textSecondary: 'text-cyan-600',
        tagBg: 'from-cyan-400 to-blue-500',
        mbtiButton: 'from-cyan-500 to-blue-600',
        dinosaurName: 'from-cyan-200 to-blue-300',
        matchBg: 'bg-cyan-50',
        mismatchBg: 'bg-blue-100'
      },
      'ISFP': {
        background: 'from-lime-50 to-green-100',
        imageArea: 'from-lime-100 to-green-200',
        textMain: 'text-lime-800',
        textSecondary: 'text-lime-700',
        tagBg: 'from-lime-400 to-green-500',
        mbtiButton: 'from-lime-500 to-green-600',
        dinosaurName: 'from-lime-200 to-green-300',
        matchBg: 'bg-lime-50',
        mismatchBg: 'bg-green-100'
      },
      'ESTP': {
        background: 'from-red-50 to-orange-100',
        imageArea: 'from-red-100 to-orange-200',
        textMain: 'text-red-800',
        textSecondary: 'text-red-600',
        tagBg: 'from-red-400 to-orange-500',
        mbtiButton: 'from-red-500 to-orange-600',
        dinosaurName: 'from-red-200 to-orange-300',
        matchBg: 'bg-red-50',
        mismatchBg: 'bg-orange-100'
      },
      'ESFP': {
        background: 'from-violet-50 to-purple-100',
        imageArea: 'from-violet-100 to-purple-200',
        textMain: 'text-violet-800',
        textSecondary: 'text-violet-600',
        tagBg: 'from-violet-400 to-purple-500',
        mbtiButton: 'from-violet-500 to-purple-600',
        dinosaurName: 'from-violet-200 to-purple-300',
        matchBg: 'bg-violet-50',
        mismatchBg: 'bg-purple-100'
      },
      '???': {
        background: 'from-gradient-to-r from-pink-100 via-purple-100 via-indigo-100 to-blue-100',
        imageArea: 'from-gradient-to-r from-pink-200 via-purple-200 via-indigo-200 to-blue-200',
        textMain: 'text-indigo-800',
        textSecondary: 'text-indigo-600',
        tagBg: 'from-pink-400 via-purple-400 to-indigo-500',
        mbtiButton: 'from-pink-500 via-purple-500 to-indigo-600',
        dinosaurName: 'from-pink-200 via-purple-200 to-indigo-300',
        matchBg: 'bg-indigo-50',
        mismatchBg: 'bg-purple-100'
      }
    };
    return paletteMap[mbtiType] || {
      background: 'from-gray-50 to-gray-100',
      imageArea: 'from-gray-100 to-gray-200',
      textMain: 'text-gray-800',
      textSecondary: 'text-gray-600',
      tagBg: 'from-gray-400 to-gray-500',
      mbtiButton: 'from-gray-500 to-gray-600',
      dinosaurName: 'from-gray-200 to-gray-300',
      matchBg: 'bg-gray-50',
      mismatchBg: 'bg-gray-100'
    };
  };
  // 🎯 MBTI 타입별 개성 있는 메인 텍스트
  const getMainResultText = (mbtiType, dinosaur) => {
    const textMap = {
      'INTJ': `나는 세상을 설계하는 ${dinosaur}야! 🦕`,
      'INTP': `나는 진리를 탐구하는 ${dinosaur}야! 🦕`,
      'ENTJ': `나는 세상을 이끌어가는 ${dinosaur}야! 🦕`,
      'ENTP': `나는 혁신을 만들어내는 ${dinosaur}야! 🦕`,
      'INFJ': `나는 이상을 품고 있는 ${dinosaur}야! 🦕`,
      'INFP': `나는 꿈을 향해 달리는 ${dinosaur}야! 🦕`,
      'ENFJ': `나는 모두를 이끌어주는 ${dinosaur}야! 🦕`,
      'ENFP': `나는 열정으로 가득한 ${dinosaur}야! 🦕`,
      'ISTJ': `나는 믿음직한 수호자 ${dinosaur}야! 🦕`,
      'ISFJ': `나는 따뜻한 마음의 ${dinosaur}야! 🦕`,
      'ESTJ': `나는 질서를 만들어가는 ${dinosaur}야! 🦕`,
      'ESFJ': `나는 화합을 이끌어가는 ${dinosaur}야! 🦕`,
      'ISTP': `나는 현실적인 문제해결사 ${dinosaur}야! 🦕`,
      'ISFP': `나는 자유로운 영혼의 ${dinosaur}야! 🦕`,
      'ESTP': `나는 모험을 즐기는 ${dinosaur}야! 🦕`,
      'ESFP': `나는 즐거움을 선사하는 ${dinosaur}야! 🦕`,
      '???': `나는 모든 것을 아우르는 전설의 ${dinosaur}야! 🦕`
    };
    return textMap[mbtiType] || `나는 특별한 ${dinosaur}야! 🦕`;
  };

  // �️ MBTI 타입별 특성 태그 매핑
  const getCharacteristicTags = (mbtiType) => {
    const tagMap = {
      'INTJ': ['전략가', '독립적', '통찰력', '계획성'],
      'INTP': ['논리적', '탐구심', '객관적', '분석가'],
      'ENTJ': ['지도자', '효율적', '결단력', '목표지향'],
      'ENTP': ['혁신적', '창의적', '논쟁적', '호기심'],
      'INFJ': ['이상주의', '직관적', '공감능력', '신중함'],
      'INFP': ['열정적', '상상력', '가치중시', '개인주의'],
      'ENFJ': ['카리스마', '협력적', '헌신적', '영감적'],
      'ENFP': ['열정적', '호기심', '창의적', '사교적'],
      'ISTJ': ['신중함', '책임감', '체계적', '전통적'],
      'ISFJ': ['배려심', '헌신적', '보호적', '신뢰성'],
      'ESTJ': ['조직적', '실용적', '효율적', '리더십'],
      'ESFJ': ['협력적', '친화적', '지지적', '봉사정신'],
      'ISTP': ['실용적', '논리적', '유연성', '독립적'],
      'ISFP': ['예술적', '온화함', '자유로움', '현실적'],
      'ESTP': ['활동적', '현실적', '사교적', '융통성'],
      'ESFP': ['자유로움', '열정적', '사교적', '즐거움'],
      '???': ['균형잡힌', '유연한', '다재다능', '신비로운']
    };
    return tagMap[mbtiType] || ['특별한', '독특한', '개성적', '매력적'];
  };

  // �🎯 테스트 시작
  const startTest = () => {
    if (!userName.trim()) {
      alert('이름을 입력해주세요!');
      return;
    }
    setCurrentStep('test');
  };

  // 📝 답변 선택
  const selectAnswer = (optionType) => {
    const newScores = { ...scores };
    newScores[optionType]++;
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newScores);
    }
  };

  // 🧮 MBTI 계산
  const calculateMBTI = (finalScores) => {
    // 완벽한 균형 체크
    if (
      finalScores.E === finalScores.I &&
      finalScores.S === finalScores.N &&
      finalScores.T === finalScores.F &&
      finalScores.J === finalScores.P
    ) {
      return "???";
    }

    return (
      (finalScores.E >= finalScores.I ? "E" : "I") +
      (finalScores.S >= finalScores.N ? "S" : "N") +
      (finalScores.T >= finalScores.F ? "T" : "F") +
      (finalScores.J >= finalScores.P ? "J" : "P")
    );
  };

  // 🎯 결과 계산
  const calculateResult = (finalScores) => {
    const mbtiType = calculateMBTI(finalScores);
    const resultData = results[mbtiType];
    setResult(resultData);
    setCurrentStep('result');
  };

  // 🔄 테스트 재시작
  const restartTest = () => {
    setCurrentStep('intro');
    setUserName('');
    setCurrentQuestion(0);
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setResult(null);
  };

  // 🏠 홈으로 가기
  const goHome = () => {
    navigate('/');
  };

  // 📊 진행률 계산
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen">
        
        {/* 🎯 시작 화면 */}
        {currentStep === 'intro' && (
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
              <div className="text-6xl mb-6">{testInfo.emoji}</div>
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                {testInfo.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {testInfo.subtitle}
              </p>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="이름을 입력하세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-6 text-center focus:outline-none focus:ring-2 focus:ring-primary"
                onKeyPress={(e) => e.key === 'Enter' && startTest()}
              />
              <button
                onClick={startTest}
                className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
              >
                테스트 시작하기
              </button>
            </div>
          </div>
        )}

        {/* ❓ 테스트 진행 화면 */}
        {currentStep === 'test' && (
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
              
              {/* 📊 진행률 표시 */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">
                    {currentQuestion + 1} / {questions.length}
                  </span>
                  <span className="text-sm text-gray-600">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* 💭 질문 */}
              <h3 className="text-xl font-bold mb-8 text-center text-gray-800">
                {questions[currentQuestion].question}
              </h3>

              {/* 📝 선택지 */}
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(option.type)}
                    className="w-full p-4 text-left bg-gray-50 hover:bg-primary/10 rounded-xl transition-colors border border-gray-200 hover:border-primary"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 🎯 결과 화면 */}
        {currentStep === 'result' && result && (
          <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
            <div className="max-w-4xl w-full space-y-6">
              
              {/* 🎨 공유용 이미지 카드 */}
              <div className={`bg-gradient-to-br ${getCardPalette(result.MBTI).background} rounded-3xl p-8 shadow-2xl`}>
                <div className="text-center">
                  {/* 🌐 도메인 표시 */}
                  <div className={`text-sm ${getCardPalette(result.MBTI).textSecondary} mb-6`}>ZZOLBOOWORLD.COM</div>
                  
                  {/* 🦕 공룡 이미지 영역 */}
                  <div className={`bg-gradient-to-br ${getCardPalette(result.MBTI).imageArea} rounded-2xl p-8 mb-6 min-h-[200px] flex items-center justify-center`}>
                    <img
                      src={result.image}
                      alt={result.dinosaur}
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                  
                  {/* 🏷️ 특성 태그들 */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {getCharacteristicTags(result.MBTI).map((tag, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-gradient-to-r ${getCardPalette(result.MBTI).tagBg} text-white rounded-full text-sm font-medium shadow-lg`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* 🎯 메인 결과 텍스트 */}
                  <h2 className={`text-2xl font-bold ${getCardPalette(result.MBTI).textMain} mb-4`}>
                    {getMainResultText(result.MBTI, result.dinosaur)}
                  </h2>
                  
                  {/* 🔥 MBTI 타입 강조 */}
                  <div className={`inline-block bg-gradient-to-r ${getCardPalette(result.MBTI).mbtiButton} text-white px-8 py-3 rounded-full text-2xl font-bold shadow-lg mb-6`}>
                    {result.MBTI}
                  </div>
                  
                  {/* 🦕 공룡 이름 */}
                  <div className={`bg-gradient-to-r ${getCardPalette(result.MBTI).dinosaurName} ${getCardPalette(result.MBTI).textMain} px-6 py-3 rounded-2xl text-xl font-bold`}>
                    {result.dinosaur}
                  </div>
                  
                  {/* 💕 궁합 정보 */}
                  <div className="flex justify-between items-center mt-8">
                    <div className="text-center">
                      <div className={`text-sm ${getCardPalette(result.MBTI).textSecondary} mb-2`}>좋은 궁합 공룡❤️</div>
                      <div className="space-y-1">
                        {result.match.map((matchType, index) => (
                          <div key={index} className={`${getCardPalette(result.MBTI).matchBg} px-3 py-1 rounded-lg text-sm ${getCardPalette(result.MBTI).textMain}`}>
                            {matchType}/{results[matchType]?.dinosaur?.split('사우루스')[0] || ''}사우루스
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className={`text-sm ${getCardPalette(result.MBTI).textSecondary} mb-2`}>만나면 싸우는 공룡⚡</div>
                      <div className={`${getCardPalette(result.MBTI).mismatchBg} px-3 py-1 rounded-lg text-sm ${getCardPalette(result.MBTI).textMain}`}>
                        {result.mismatch !== "없음" ? 
                          `${result.mismatch}/${results[result.mismatch]?.dinosaur?.split('사우루스')[0] || ''}사우루스` :
                          "없음"
                        }
                      </div>
                    </div>
                  </div>
                  
                  {/* 🌐 하단 도메인 */}
                  <div className={`text-sm ${getCardPalette(result.MBTI).textSecondary} mt-6`}>ZZOLBOOWORLD.COM</div>
                </div>
              </div>

              {/* 📝 부연설명 텍스트 카드 */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {userName}님의 결과: {result.title}
                  </h3>
                  <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
                
                {/* 📄 상세 설명 */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <p className="text-gray-700 text-lg leading-relaxed text-center">
                    {result.desc}
                  </p>
                </div>

                {/* 💕 궁합 상세 정보 */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-green-700 mb-4 text-lg flex items-center">
                      💚 나의 절친 공룡들
                    </h4>
                    <div className="space-y-3">
                      {result.match.map((matchType, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                          <div className="font-semibold text-green-600 mb-2">
                            {results[matchType]?.dinosaur || matchType} ({matchType})
                          </div>
                          <div className="text-sm text-green-600">
                            {result.matchReason[index]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 💔 상극 정보 */}
                  {result.mismatch !== "없음" && (
                    <div className="bg-red-50 p-6 rounded-2xl">
                      <h4 className="font-bold text-red-700 mb-4 text-lg flex items-center">
                        💔 만나면 싸우는 공룡
                      </h4>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="font-semibold text-red-600 mb-2">
                          {results[result.mismatch]?.dinosaur || result.mismatch} ({result.mismatch})
                        </div>
                        <div className="text-sm text-red-600">
                          {result.mismatchReason}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 🔄 액션 버튼들 */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={goHome}
                    className="flex-1 bg-gray-500 text-white py-4 rounded-2xl font-bold hover:bg-gray-600 transition-colors text-lg"
                  >
                    🏠 처음으로
                  </button>
                  <button
                    onClick={restartTest}
                    className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-colors text-lg"
                  >
                    🔄 다시 하기
                  </button>
                  <button
                    onClick={() => alert('공유 기능 준비 중입니다! 🦕')}
                    className="flex-1 bg-green-500 text-white py-4 rounded-2xl font-bold hover:bg-green-600 transition-colors text-lg"
                  >
                    📤 공유하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}
