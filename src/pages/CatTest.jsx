// 🐱 고양이 MBTI 테스트 페이지
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { catQuestions, catResults } from '@/data/catTestData';
import { catImages } from '@/data/catImages';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ImageGeneratorComponent from '@/components/common/ImageGeneratorComponent';
import UnifiedShareModal from '@/components/common/UnifiedShareModal';
import AdSenseAd from '@/components/common/AdSenseAd';

export default function CatTest() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState('intro'); // 'intro', 'test', 'result', 'loading'
  const [userName, setUserName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [result, setResult] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  // 테스트 정보
  const testInfo = {
    title: "고양이 MBTI 테스트",
    subtitle: "쫄과 부가 안내하는 고양이 왕국! 너는 어떤 성격의 고양이일까?",
    emoji: "🐾"
  };

  // 🎨 MBTI별 부드러운 고양이 팔레트 시스템
  const getCardPalette = (mbtiType) => {
    const paletteMap = {
      'ENFJ': {
        background: 'from-orange-50 to-amber-100',
        imageArea: 'from-orange-100 to-amber-200',
        textMain: 'text-orange-800',
        textSecondary: 'text-orange-600',
        tagBg: 'from-orange-400 to-amber-500',
        mbtiButton: 'from-orange-500 to-amber-600',
        catName: 'from-orange-200 to-amber-300',
        matchBg: 'bg-orange-50',
        mismatchBg: 'bg-amber-100'
      },
      'INFP': {
        background: 'from-purple-50 to-violet-100',
        imageArea: 'from-purple-100 to-violet-200',
        textMain: 'text-purple-800',
        textSecondary: 'text-purple-600',
        tagBg: 'from-purple-400 to-violet-500',
        mbtiButton: 'from-purple-500 to-violet-600',
        catName: 'from-purple-200 to-violet-300',
        matchBg: 'bg-purple-50',
        mismatchBg: 'bg-violet-100'
      },
      'ISTP': {
        background: 'from-slate-50 to-gray-100',
        imageArea: 'from-slate-100 to-gray-200',
        textMain: 'text-slate-800',
        textSecondary: 'text-slate-600',
        tagBg: 'from-slate-400 to-gray-500',
        mbtiButton: 'from-slate-500 to-gray-600',
        catName: 'from-slate-200 to-gray-300',
        matchBg: 'bg-slate-50',
        mismatchBg: 'bg-gray-100'
      },
      'ESFP': {
        background: 'from-yellow-50 to-orange-100',
        imageArea: 'from-yellow-100 to-orange-200',
        textMain: 'text-yellow-800',
        textSecondary: 'text-yellow-700',
        tagBg: 'from-yellow-400 to-orange-500',
        mbtiButton: 'from-yellow-500 to-orange-600',
        catName: 'from-yellow-200 to-orange-300',
        matchBg: 'bg-yellow-50',
        mismatchBg: 'bg-orange-100'
      },
      'INTJ': {
        background: 'from-gray-50 to-slate-100',
        imageArea: 'from-gray-100 to-slate-200',
        textMain: 'text-gray-800',
        textSecondary: 'text-gray-600',
        tagBg: 'from-gray-400 to-slate-500',
        mbtiButton: 'from-gray-500 to-slate-600',
        catName: 'from-gray-200 to-slate-300',
        matchBg: 'bg-gray-50',
        mismatchBg: 'bg-slate-100'
      },
      'ISFJ': {
        background: 'from-sky-50 to-blue-100',
        imageArea: 'from-sky-100 to-blue-200',
        textMain: 'text-sky-800',
        textSecondary: 'text-sky-600',
        tagBg: 'from-sky-400 to-blue-500',
        mbtiButton: 'from-sky-500 to-blue-600',
        catName: 'from-sky-200 to-blue-300',
        matchBg: 'bg-sky-50',
        mismatchBg: 'bg-blue-100'
      },
      'ENTP': {
        background: 'from-pink-50 to-rose-100',
        imageArea: 'from-pink-100 to-rose-200',
        textMain: 'text-pink-800',
        textSecondary: 'text-pink-600',
        tagBg: 'from-pink-400 to-rose-500',
        mbtiButton: 'from-pink-500 to-rose-600',
        catName: 'from-pink-200 to-rose-300',
        matchBg: 'bg-pink-50',
        mismatchBg: 'bg-rose-100'
      },
      'INFJ': {
        background: 'from-emerald-50 to-green-100',
        imageArea: 'from-emerald-100 to-green-200',
        textMain: 'text-emerald-800',
        textSecondary: 'text-emerald-600',
        tagBg: 'from-emerald-400 to-green-500',
        mbtiButton: 'from-emerald-500 to-green-600',
        catName: 'from-emerald-200 to-green-300',
        matchBg: 'bg-emerald-50',
        mismatchBg: 'bg-green-100'
      },
      'ENFP': {
        background: 'from-red-50 to-pink-100',
        imageArea: 'from-red-100 to-pink-200',
        textMain: 'text-red-800',
        textSecondary: 'text-red-600',
        tagBg: 'from-red-400 to-pink-500',
        mbtiButton: 'from-red-500 to-pink-600',
        catName: 'from-red-200 to-pink-300',
        matchBg: 'bg-red-50',
        mismatchBg: 'bg-pink-100'
      },
      'ESTP': {
        background: 'from-amber-50 to-yellow-100',
        imageArea: 'from-amber-100 to-yellow-200',
        textMain: 'text-amber-800',
        textSecondary: 'text-amber-700',
        tagBg: 'from-amber-400 to-yellow-500',
        mbtiButton: 'from-amber-500 to-yellow-600',
        catName: 'from-amber-200 to-yellow-300',
        matchBg: 'bg-amber-50',
        mismatchBg: 'bg-yellow-100'
      },
      'ISFP': {
        background: 'from-rose-50 to-pink-100',
        imageArea: 'from-rose-100 to-pink-200',
        textMain: 'text-rose-800',
        textSecondary: 'text-rose-600',
        tagBg: 'from-rose-400 to-pink-500',
        mbtiButton: 'from-rose-500 to-pink-600',
        catName: 'from-rose-200 to-pink-300',
        matchBg: 'bg-rose-50',
        mismatchBg: 'bg-pink-100'
      },
      'ESTJ': {
        background: 'from-orange-50 to-yellow-100',
        imageArea: 'from-orange-100 to-yellow-200',
        textMain: 'text-orange-800',
        textSecondary: 'text-orange-600',
        tagBg: 'from-orange-400 to-yellow-500',
        mbtiButton: 'from-orange-500 to-yellow-600',
        catName: 'from-orange-200 to-yellow-300',
        matchBg: 'bg-orange-50',
        mismatchBg: 'bg-yellow-100'
      },
      'ESFJ': {
        background: 'from-violet-50 to-purple-100',
        imageArea: 'from-violet-100 to-purple-200',
        textMain: 'text-violet-800',
        textSecondary: 'text-violet-600',
        tagBg: 'from-violet-400 to-purple-500',
        mbtiButton: 'from-violet-500 to-purple-600',
        catName: 'from-violet-200 to-purple-300',
        matchBg: 'bg-violet-50',
        mismatchBg: 'bg-purple-100'
      },
      'ISTJ': {
        background: 'from-teal-50 to-cyan-100',
        imageArea: 'from-teal-100 to-cyan-200',
        textMain: 'text-teal-800',
        textSecondary: 'text-teal-600',
        tagBg: 'from-teal-400 to-cyan-500',
        mbtiButton: 'from-teal-500 to-cyan-600',
        catName: 'from-teal-200 to-cyan-300',
        matchBg: 'bg-teal-50',
        mismatchBg: 'bg-cyan-100'
      },
      'INTP': {
        background: 'from-indigo-50 to-blue-100',
        imageArea: 'from-indigo-100 to-blue-200',
        textMain: 'text-indigo-800',
        textSecondary: 'text-indigo-600',
        tagBg: 'from-indigo-400 to-blue-500',
        mbtiButton: 'from-indigo-500 to-blue-600',
        catName: 'from-indigo-200 to-blue-300',
        matchBg: 'bg-indigo-50',
        mismatchBg: 'bg-blue-100'
      },
      'ENTJ': {
        background: 'from-red-50 to-orange-100',
        imageArea: 'from-red-100 to-orange-200',
        textMain: 'text-red-800',
        textSecondary: 'text-red-600',
        tagBg: 'from-red-400 to-orange-500',
        mbtiButton: 'from-red-500 to-orange-600',
        catName: 'from-red-200 to-orange-300',
        matchBg: 'bg-red-50',
        mismatchBg: 'bg-orange-100'
      },
      '???': {
        background: 'from-gradient-to-r from-pink-100 via-purple-100 via-indigo-100 to-blue-100',
        imageArea: 'from-gradient-to-r from-pink-200 via-purple-200 via-indigo-200 to-blue-200',
        textMain: 'text-indigo-800',
        textSecondary: 'text-indigo-600',
        tagBg: 'from-pink-400 via-purple-400 to-indigo-500',
        mbtiButton: 'from-pink-500 via-purple-500 to-indigo-600',
        catName: 'from-pink-200 via-purple-200 to-indigo-300',
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
      catName: 'from-gray-200 to-gray-300',
      matchBg: 'bg-gray-50',
      mismatchBg: 'bg-gray-100'
    };
  };

  // 🎯 MBTI 타입별 개성 있는 메인 텍스트
  const getMainResultText = (mbtiType, breed) => {
    const textMap = {
      'ENFJ': `나는 사랑스러운 ${breed} 고양이야! 🐱`,
      'INFP': `나는 감성적인 ${breed} 고양이야! 🐱`,
      'ISTP': `나는 쿨한 ${breed} 고양이야! 🐱`,
      'ESFP': `나는 활기찬 ${breed} 고양이야! 🐱`,
      'INTJ': `나는 우아한 ${breed} 고양이야! 🐱`,
      'ISFJ': `나는 다정한 ${breed} 고양이야! 🐱`,
      'ENTP': `나는 호기심 많은 ${breed} 고양이야! 🐱`,
      'INFJ': `나는 신비로운 ${breed} 고양이야! 🐱`,
      'ENFP': `나는 열정적인 ${breed} 고양이야! 🐱`,
      'ESTP': `나는 야생적인 ${breed} 고양이야! 🐱`,
      'ISFP': `나는 자유로운 ${breed} 고양이야! 🐱`,
      'ESTJ': `나는 활동적인 ${breed} 고양이야! 🐱`,
      'ESFJ': `나는 사교적인 ${breed} 고양이야! 🐱`,
      'ISTJ': `나는 안정적인 ${breed} 고양이야! 🐱`,
      'INTP': `나는 지적인 ${breed} 고양이야! 🐱`,
      'ENTJ': `나는 카리스마 있는 ${breed} 고양이야! 🐱`,
      '???': `나는 특별한 믹스묘야! 🐱`
    };
    return textMap[mbtiType] || `나는 특별한 ${breed} 고양이야! 🐱`;
  };

  // 🏷️ MBTI 타입별 특성 태그 매핑 (고양이 버전)
  const getCharacteristicTags = (mbtiType) => {
    const tagMap = {
      'ENFJ': ['사랑스러운', '다정한', '리더십', '배려심'],
      'INFP': ['감성적', '로맨틱', '예술적', '자유로운'],
      'ISTP': ['쿨한', '독립적', '현실적', '차분한'],
      'ESFP': ['활기찬', '사교적', '즐거운', '표현력'],
      'INTJ': ['우아한', '계획적', '신중한', '완벽주의'],
      'ISFJ': ['다정한', '헌신적', '보호적', '따뜻한'],
      'ENTP': ['호기심', '창의적', '탐험적', '변화무쌍'],
      'INFJ': ['신비로운', '직관적', '이상주의', '깊이있는'],
      'ENFP': ['열정적', '창의적', '활발한', '영감적'],
      'ESTP': ['야생적', '적응력', '현실적', '모험적'],
      'ISFP': ['자유로운', '예술적', '온화한', '섬세한'],
      'ESTJ': ['활동적', '조직적', '리더십', '책임감'],
      'ESFJ': ['사교적', '친화적', '헌신적', '협력적'],
      'ISTJ': ['안정적', '신뢰성', '체계적', '충실한'],
      'INTP': ['지적인', '논리적', '호기심', '분석적'],
      'ENTJ': ['카리스마', '리더십', '목표지향', '결단력'],
      '???': ['균형잡힌', '유연한', '다재다능', '신비로운']
    };
    return tagMap[mbtiType] || ['특별한', '독특한', '개성적', '매력적'];
  };

  // 🎯 테스트 시작
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

    if (currentQuestion < catQuestions.length - 1) {
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
    const resultData = catResults[mbtiType];
    
    // 이미지 경로 추가
    const resultWithImage = {
      ...resultData,
      MBTI: mbtiType,
      image: catImages[mbtiType]
    };
    
    // 먼저 로딩 화면 표시
    setCurrentStep('loading');
    setResult(resultWithImage);
    
    // 이미지 프리로딩
    const img = new Image();
    img.onload = () => {
      setIsImageLoaded(true);
      // 이미지 로드 완료 후 최소 1초 후에 결과 표시
      setTimeout(() => {
        setCurrentStep('result');
      }, 1000);
    };
    img.onerror = () => {
      // 이미지 로드 실패시에도 2초 후 결과 표시
      setTimeout(() => {
        setCurrentStep('result');
      }, 2000);
    };
    img.src = resultWithImage.image;
    
    // Google Analytics 이벤트 추적
    if (typeof gtag !== 'undefined') {
      gtag('event', 'test_result_viewed', {
        test_name: 'cat-test'
      });
    }
  };

  // 🔄 테스트 재시작
  const restartTest = () => {
    setCurrentStep('intro');
    setUserName('');
    setCurrentQuestion(0);
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setResult(null);
    setIsImageLoaded(false);
  };

  // 🏠 홈으로 가기
  const goHome = () => {
    navigate('/');
  };

  // 📊 진행률 계산
  const progress = ((currentQuestion + 1) / catQuestions.length) * 100;

  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen">
        
        {/* 🎯 시작 화면 */}
        {currentStep === 'intro' && (
          <div className="flex flex-col items-center pt-8 px-4">
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
                    {currentQuestion + 1} / {catQuestions.length}
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
                {catQuestions[currentQuestion].question}
              </h3>

              {/* 📝 선택지 */}
              <div className="space-y-4">
                {catQuestions[currentQuestion].options.map((option, index) => (
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

        {/* ⏳ 로딩 화면 */}
        {currentStep === 'loading' && (
          <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
              {/* 로딩 애니메이션 */}
              <div className="text-6xl mb-6 animate-bounce">🐱</div>
              
              {/* 로딩 스피너 */}
              <div className="flex justify-center mb-6">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                결과 분석 중...
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {userName || '익명'}님만의 고양이 타입을 찾고 있어요! 🔍
              </p>
              
              {/* 로딩 바 */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
              </div>
              
              <p className="text-sm text-gray-500">
                잠시만 기다려 주세요...
              </p>
            </div>
          </div>
        )}

        {/* 🎯 결과 화면 */}
        {currentStep === 'result' && result && (
          <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
            <div className="max-w-4xl w-full space-y-8">
              
              {/* 🎨 Instagram-ready 공유용 카드 */}
              <div className={`relative bg-gradient-to-br ${getCardPalette(result.MBTI).background} rounded-3xl p-8 shadow-2xl border-4 border-white overflow-hidden`}>
                {/* 배경 장식 패턴 */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="text-8xl">🐱</div>
                </div>
                
                <div className="relative z-10">
                  {/* 상단 브랜드 영역 */}
                    <div className="flex items-center justify-between mb-8">
                    <div className={`text-sm font-semibold ${getCardPalette(result.MBTI).textSecondary} tracking-wider`}>
                      ZZOLBOOWORLD.COM
                    </div>
                    {/* MBTI(이모지) 뱃지 - 진한 이모지 대신 */}
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${getCardPalette(result.MBTI).mbtiButton} text-white px-4 py-2 rounded-xl shadow-lg border border-white/20 text-base font-bold`}>
                      <span>{result.MBTI} 🐱</span>
                    </div>
                  </div>

                  {/* 메인 콘텐츠 영역 */}
                  <div className="text-center space-y-6">
                    
                    {/* MBTI 타입 뱃지 - 가장 눈에 띄게 */}
                    {/* 고양이 종류 - 기존 MBTI 위치 */}
                    <div className="flex justify-center mb-6">
                      <div className="inline-flex items-center gap-3 bg-white/70 text-gray-800 px-8 py-3 rounded-2xl shadow border border-gray-200 text-2xl font-extrabold">
                        {result.breed}
                      </div>
                    </div>



                    {/* 고양이 이미지 (품종명 칸 삭제, 이미지 사이즈 키움) */}
                    <div className="relative">
                      <div className={`bg-white/30 backdrop-blur-sm rounded-3xl p-6 mb-4 shadow-xl border border-white/20`}>
                        <img
                          src={result.image}
                          alt={result.breed}
                          className="w-56 h-56 mx-auto object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>

                    {/* 메인 캐치프레이즈 */}
                    <div className={`bg-white/25 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30`}>
                      <h2 className={`text-2xl font-bold ${getCardPalette(result.MBTI).textMain} leading-relaxed`}>
                        {getMainResultText(result.MBTI, result.breed)}
                      </h2>
                    </div>
                    
                    {/* 특성 태그들 - 더 세련되게 */}
                    <div className="flex flex-wrap justify-center gap-3">
                      {getCharacteristicTags(result.MBTI).map((tag, index) => (
                        <span
                          key={index}
                          className={`px-5 py-2 bg-gradient-to-r ${getCardPalette(result.MBTI).tagBg} text-white rounded-full text-sm font-semibold shadow-lg border border-white/20 transform hover:scale-105 transition-transform`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* 궁합 정보 - 카드 스타일로 개선 */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {/* 좋은 궁합 */}
                      <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <span className="text-lg">💕</span>
                          <span className={`text-sm font-semibold ${getCardPalette(result.MBTI).textMain}`}>
                            궁합 BEST
                          </span>
                        </div>
                        <div className="space-y-2">
                          {result.match.slice(0, 2).map((matchType, index) => (
                            <div key={index} className="bg-white/40 rounded-xl p-2 text-center">
                              <div className={`text-xs font-bold ${getCardPalette(result.MBTI).textMain}`}>
                                {matchType}
                              </div>
                              <div className={`text-xs ${getCardPalette(result.MBTI).textSecondary}`}>
                                {catResults[matchType]?.breed || ''}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 상극 */}
                      <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <span className="text-lg">⚡</span>
                          <span className={`text-sm font-semibold ${getCardPalette(result.MBTI).textMain}`}>
                            주의 관계
                          </span>
                        </div>
                        <div className="bg-white/40 rounded-xl p-2 text-center">
                          <div className={`text-xs font-bold ${getCardPalette(result.MBTI).textMain}`}>
                            {result.mismatch !== "없음" ? result.mismatch : "없음"}
                          </div>
                          {result.mismatch !== "없음" && (
                            <div className={`text-xs ${getCardPalette(result.MBTI).textSecondary}`}>
                              {catResults[result.mismatch]?.breed || ''}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* 하단 브랜딩 */}
                    <div className="pt-6 border-t border-white/20">
                      <div className={`text-xs ${getCardPalette(result.MBTI).textSecondary} font-medium tracking-wider`}>
                        ✨ ZZOLBOOWORLD.COM ✨
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 📝 상세 설명 카드 - 개선된 디자인 */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📊</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {userName}님의 상세 분석
                    </h3>
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
                </div>
                
                {/* 📄 성격 요약 */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-8 border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    성격 요약
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {Array.isArray(result.description)
                      ? result.description.join('\n')
                      : result.description}
                  </p>
                </div>

                {/* 💕 궁합 상세 정보 - 카드 스타일로 개선 */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 shadow-lg">
                    <h4 className="font-bold text-green-700 mb-6 text-lg flex items-center gap-2">
                      <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">💚</span>
                      </span>
                      최고의 파트너
                    </h4>
                    <div className="space-y-4">
                      {result.match.map((matchType, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">{matchType}</span>
                            </div>
                            <div className="font-semibold text-green-700">
                              {catResults[matchType]?.breed || matchType}
                            </div>
                          </div>
                          <div className="text-sm text-green-600 ml-13">
                            {result.matchReason[index]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 💔 상극 정보 */}
                  {result.mismatch !== "없음" && (
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl border border-red-100 shadow-lg">
                      <h4 className="font-bold text-red-700 mb-6 text-lg flex items-center gap-2">
                        <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">⚡</span>
                        </span>
                        주의가 필요한 관계
                      </h4>
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-red-100">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{result.mismatch}</span>
                          </div>
                          <div className="font-semibold text-red-700">
                            {catResults[result.mismatch]?.breed || result.mismatch}
                          </div>
                        </div>
                        <div className="text-sm text-red-600 ml-13">
                          {result.mismatchReason}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 📢 AdSense 광고 */}
                <AdSenseAd 
                  adSlot="1234567890" 
                  adFormat="auto"
                  className="my-8"
                />

                {/* 🔄 액션 버튼들 - 더 매력적으로 */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={goHome}
                    className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white py-4 rounded-2xl font-bold hover:from-gray-600 hover:to-gray-700 transition-all duration-200 text-lg shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">🏠</span>
                    처음으로
                  </button>
                  <button
                    onClick={restartTest}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-lg shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">🔄</span>
                    다시 테스트
                  </button>
                  
                  {/* 공유하기 버튼 */}
                  <button
                    onClick={() => setShowShareModal(true)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-2xl font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-200 text-lg shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">📤</span>
                    공유하기
                  </button>
                {/* 이미지 저장 버튼 및 생성 컴포넌트 */}
                <div className="flex-1 mt-2">
                  <ImageGeneratorComponent
                    testType="cat"
                    result={result.MBTI}
                    characterImage={result.image}
                    userName={userName || '사용자'}
                    description={getMainResultText(result.MBTI, result.breed)}
                    characterName={result.breed}
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
      <Footer />
      
      {/* 통일된 공유 모달 */}
      <UnifiedShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        result={{
          title: result?.breed || '고양이',
          catchphrase: result?.description || '나의 고양이 성격을 확인해보세요!'
        }}
        testType="cat"
      />
    </>
  );
}
