import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { lolTestData } from '../../data/lolTestData';
import BroHeader from '../../components/layout/BroHeader';
import Footer from '../../components/layout/Footer';
import Button from '../../components/common/Button';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const LolTest = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedLine, setSelectedLine] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // 라인 결정 로직
  const determineLine = (answers) => {
    const lineScores = {
      top: 0,
      jungle: 0,
      mid: 0,
      adc: 0,
      support: 0
    };

    answers.forEach((answer, index) => {
      const question = lolTestData.lineQuestions[index];
      const selectedOption = question.options.find(opt => opt.text === answer);
      
      if (selectedOption) {
        switch (selectedOption.type) {
          case 'carry':
            lineScores.top += 2;
            lineScores.mid += 2;
            lineScores.adc += 2;
            break;
          case 'support':
            lineScores.support += 3;
            lineScores.jungle += 1;
            break;
          case 'growth':
            lineScores.top += 1;
            lineScores.mid += 2;
            lineScores.adc += 1;
            break;
          case 'teamwork':
            lineScores.support += 2;
            lineScores.jungle += 2;
            break;
          case 'aggressive':
            lineScores.top += 2;
            lineScores.jungle += 2;
            lineScores.mid += 1;
            break;
          case 'defensive':
            lineScores.support += 2;
            lineScores.adc += 1;
            break;
          case 'cooperative':
            lineScores.support += 2;
            lineScores.jungle += 1;
            break;
          case 'patient':
            lineScores.adc += 2;
            lineScores.support += 1;
            break;
          case 'flexible':
            lineScores.jungle += 2;
            lineScores.mid += 2;
            break;
          case 'stable':
            lineScores.adc += 2;
            lineScores.support += 1;
            break;
          case 'collaborative':
            lineScores.support += 2;
            lineScores.jungle += 1;
            break;
          case 'conservative':
            lineScores.adc += 1;
            lineScores.support += 2;
            break;
          case 'communicative':
            lineScores.support += 2;
            lineScores.jungle += 1;
            break;
          case 'quiet':
            lineScores.top += 1;
            lineScores.adc += 1;
            break;
          case 'mediator':
            lineScores.support += 2;
            lineScores.jungle += 1;
            break;
          case 'leader':
            lineScores.top += 2;
            lineScores.mid += 1;
            break;
          case 'self-focused':
            lineScores.top += 2;
            lineScores.mid += 2;
            break;
          case 'team-focused':
            lineScores.support += 2;
            lineScores.jungle += 2;
            break;
          case 'opponent-focused':
            lineScores.mid += 2;
            lineScores.jungle += 1;
            break;
          case 'macro-focused':
            lineScores.jungle += 2;
            lineScores.support += 1;
            break;
          case 'flashy':
            lineScores.mid += 2;
            lineScores.adc += 1;
            break;
          case 'steady':
            lineScores.top += 1;
            lineScores.support += 2;
            break;
          case 'creative':
            lineScores.mid += 2;
            lineScores.jungle += 1;
            break;
          case 'strategic':
            lineScores.jungle += 2;
            lineScores.support += 1;
            break;
        }
      }
    });

    // 가장 높은 점수의 라인 반환
    return Object.keys(lineScores).reduce((a, b) => 
      lineScores[a] > lineScores[b] ? a : b
    );
  };

  // 역할군 결정 로직
  const determineRole = (line, roleAnswers) => {
    const roleScores = {};
    
    // 라인별 역할군 점수 계산
    switch (line) {
      case 'top':
        roleScores['aggressive'] = 0;
        roleScores['farm'] = 0;
        roleScores['engage'] = 0;
        roleScores['damage'] = 0;
        roleScores['harass'] = 0;
        roleScores['scale'] = 0;
        roleScores['roam'] = 0;
        roleScores['patient'] = 0;
        roleScores['protect'] = 0;
        roleScores['flank'] = 0;
        roleScores['gank'] = 0;
        roleScores['analyze'] = 0;
        roleScores['skillful'] = 0;
        roleScores['team-reliant'] = 0;
        roleScores['objective'] = 0;
        
        roleAnswers.forEach((answer, index) => {
          const question = lolTestData.roleQuestions.top[index];
          const selectedOption = question.options.find(opt => opt.text === answer);
          
          if (selectedOption) {
            roleScores[selectedOption.type]++;
          }
        });
        
        // 탑 역할군 결정 (더 세분화된 로직)
        const topAggressiveScore = roleScores['aggressive'] + roleScores['engage'] + roleScores['harass'];
        const topFarmScore = roleScores['farm'] + roleScores['damage'] + roleScores['scale'];
        const topTeamScore = roleScores['roam'] + roleScores['protect'] + roleScores['gank'];
        const topSkillScore = roleScores['skillful'] + roleScores['analyze'] + roleScores['objective'];
        
        if (topAggressiveScore > topFarmScore && topAggressiveScore > topTeamScore && topAggressiveScore > topSkillScore) {
          return 'aggressive-engage';
        } else if (topFarmScore > topAggressiveScore && topFarmScore > topTeamScore && topFarmScore > topSkillScore) {
          return 'farm-damage';
        } else if (topTeamScore > topAggressiveScore && topTeamScore > topFarmScore && topTeamScore > topSkillScore) {
          return 'team-support';
        } else {
          return 'skillful-adaptive';
        }
        
      case 'jungle':
        roleScores['gank'] = 0;
        roleScores['farm'] = 0;
        roleScores['surprise'] = 0;
        roleScores['safe'] = 0;
        roleScores['steal'] = 0;
        roleScores['secure'] = 0;
        roleScores['support'] = 0;
        roleScores['track'] = 0;
        roleScores['coordinated'] = 0;
        roleScores['patient'] = 0;
        roleScores['stall'] = 0;
        roleScores['trade'] = 0;
        roleScores['pressure'] = 0;
        roleScores['counter'] = 0;
        roleScores['assassin'] = 0;
        roleScores['initiate'] = 0;
        
        roleAnswers.forEach((answer, index) => {
          const question = lolTestData.roleQuestions.jungle[index];
          const selectedOption = question.options.find(opt => opt.text === answer);
          
          if (selectedOption) {
            roleScores[selectedOption.type]++;
          }
        });
        
        // 정글 역할군 결정 (더 세분화된 로직)
        const jungleGankScore = roleScores['gank'] + roleScores['surprise'] + roleScores['steal'];
        const jungleFarmScore = roleScores['farm'] + roleScores['safe'] + roleScores['secure'];
        const jungleSupportScore = roleScores['support'] + roleScores['coordinated'] + roleScores['patient'];
        const jungleControlScore = roleScores['track'] + roleScores['pressure'] + roleScores['counter'];
        
        if (jungleGankScore > jungleFarmScore && jungleGankScore > jungleSupportScore && jungleGankScore > jungleControlScore) {
          return 'gank-surprise';
        } else if (jungleFarmScore > jungleGankScore && jungleFarmScore > jungleSupportScore && jungleFarmScore > jungleControlScore) {
          return 'farm-secure';
        } else if (jungleSupportScore > jungleGankScore && jungleSupportScore > jungleFarmScore && jungleSupportScore > jungleControlScore) {
          return 'support-coordinated';
        } else {
          return 'control-tracker';
        }
        
      case 'mid':
        roleScores['solo'] = 0;
        roleScores['roam'] = 0;
        roleScores['burst'] = 0;
        roleScores['sustain'] = 0;
        roleScores['skill'] = 0;
        roleScores['reliable'] = 0;
        roleScores['objective'] = 0;
        roleScores['analyze'] = 0;
        roleScores['combo'] = 0;
        roleScores['poke'] = 0;
        roleScores['predict'] = 0;
        roleScores['coordinate'] = 0;
        roleScores['pressure'] = 0;
        roleScores['track'] = 0;
        roleScores['create'] = 0;
        roleScores['adapt'] = 0;
        
        roleAnswers.forEach((answer, index) => {
          const question = lolTestData.roleQuestions.mid[index];
          const selectedOption = question.options.find(opt => opt.text === answer);
          
          if (selectedOption) {
            roleScores[selectedOption.type]++;
          }
        });
        
        // 미드 역할군 결정 (더 세분화된 로직)
        const midSoloScore = roleScores['solo'] + roleScores['burst'] + roleScores['skill'];
        const midRoamScore = roleScores['roam'] + roleScores['sustain'] + roleScores['reliable'];
        const midObjectiveScore = roleScores['objective'] + roleScores['combo'] + roleScores['coordinate'];
        const midAdaptiveScore = roleScores['analyze'] + roleScores['predict'] + roleScores['adapt'];
        
        if (midSoloScore > midRoamScore && midSoloScore > midObjectiveScore && midSoloScore > midAdaptiveScore) {
          return 'solo-burst';
        } else if (midRoamScore > midSoloScore && midRoamScore > midObjectiveScore && midRoamScore > midAdaptiveScore) {
          return 'roam-sustain';
        } else if (midObjectiveScore > midSoloScore && midObjectiveScore > midRoamScore && midObjectiveScore > midAdaptiveScore) {
          return 'objective-coordinator';
        } else {
          return 'adaptive-analyzer';
        }
        
      case 'adc':
        roleScores['safe'] = 0;
        roleScores['aggressive'] = 0;
        roleScores['opportunistic'] = 0;
        roleScores['protected'] = 0;
        roleScores['frontline'] = 0;
        roleScores['backline'] = 0;
        roleScores['cooperative'] = 0;
        roleScores['growth'] = 0;
        roleScores['coordinated'] = 0;
        roleScores['calculated'] = 0;
        roleScores['flank'] = 0;
        roleScores['formation'] = 0;
        roleScores['harass'] = 0;
        roleScores['analyze'] = 0;
        roleScores['stall'] = 0;
        roleScores['trade'] = 0;
        
        roleAnswers.forEach((answer, index) => {
          const question = lolTestData.roleQuestions.adc[index];
          const selectedOption = question.options.find(opt => opt.text === answer);
          
          if (selectedOption) {
            roleScores[selectedOption.type]++;
          }
        });
        
        // 원딜 역할군 결정 (더 세분화된 로직)
        const adcSafeScore = roleScores['safe'] + roleScores['protected'] + roleScores['backline'];
        const adcAggressiveScore = roleScores['aggressive'] + roleScores['opportunistic'] + roleScores['frontline'];
        const adcCooperativeScore = roleScores['cooperative'] + roleScores['coordinated'] + roleScores['formation'];
        const adcAdaptiveScore = roleScores['calculated'] + roleScores['analyze'] + roleScores['trade'];
        
        if (adcSafeScore > adcAggressiveScore && adcSafeScore > adcCooperativeScore && adcSafeScore > adcAdaptiveScore) {
          return 'safe-protected';
        } else if (adcAggressiveScore > adcSafeScore && adcAggressiveScore > adcCooperativeScore && adcAggressiveScore > adcAdaptiveScore) {
          return 'aggressive-frontline';
        } else if (adcCooperativeScore > adcSafeScore && adcCooperativeScore > adcAggressiveScore && adcCooperativeScore > adcAdaptiveScore) {
          return 'cooperative-team';
        } else {
          return 'calculated-adaptive';
        }
        
      case 'support':
        roleScores['protect'] = 0;
        roleScores['harass'] = 0;
        roleScores['aggressive'] = 0;
        roleScores['safe'] = 0;
        roleScores['engage'] = 0;
        roleScores['heal'] = 0;
        roleScores['coordinate'] = 0;
        roleScores['scout'] = 0;
        roleScores['coordinated'] = 0;
        roleScores['analyze'] = 0;
        roleScores['combo'] = 0;
        roleScores['counter'] = 0;
        roleScores['pressure'] = 0;
        roleScores['track'] = 0;
        roleScores['create'] = 0;
        roleScores['adapt'] = 0;
        
        roleAnswers.forEach((answer, index) => {
          const question = lolTestData.roleQuestions.support[index];
          const selectedOption = question.options.find(opt => opt.text === answer);
          
          if (selectedOption) {
            roleScores[selectedOption.type]++;
          }
        });
        
        // 서폿 역할군 결정 (더 세분화된 로직)
        const supportProtectScore = roleScores['protect'] + roleScores['safe'] + roleScores['heal'];
        const supportHarassScore = roleScores['harass'] + roleScores['aggressive'] + roleScores['engage'];
        const supportCoordinateScore = roleScores['coordinate'] + roleScores['coordinated'] + roleScores['combo'];
        const supportAdaptiveScore = roleScores['scout'] + roleScores['analyze'] + roleScores['adapt'];
        
        if (supportProtectScore > supportHarassScore && supportProtectScore > supportCoordinateScore && supportProtectScore > supportAdaptiveScore) {
          return 'protect-heal';
        } else if (supportHarassScore > supportProtectScore && supportHarassScore > supportCoordinateScore && supportHarassScore > supportAdaptiveScore) {
          return 'harass-engage';
        } else if (supportCoordinateScore > supportProtectScore && supportCoordinateScore > supportHarassScore && supportCoordinateScore > supportAdaptiveScore) {
          return 'coordinate-team';
        } else {
          return 'adaptive-scout';
        }
        
      default:
        return 'safe-protected';
    }
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentStep === 1) {
      // 1단계: 라인 결정
      if (currentQuestionIndex < lolTestData.lineQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setProgress(((currentQuestionIndex + 2) / lolTestData.lineQuestions.length) * 50);
      } else {
        // 라인 결정 완료
        const determinedLine = determineLine(newAnswers);
        setSelectedLine(determinedLine);
        setCurrentStep(2);
        setCurrentQuestionIndex(0);
        setProgress(50);
      }
    } else {
      // 2단계: 역할군 결정
      if (currentQuestionIndex < lolTestData.roleQuestions[selectedLine].length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setProgress(50 + ((currentQuestionIndex + 2) / lolTestData.roleQuestions[selectedLine].length) * 50);
      } else {
        // 역할군 결정 완료
        const roleAnswers = newAnswers.slice(lolTestData.lineQuestions.length);
        const determinedRole = determineRole(selectedLine, roleAnswers);
        const resultKey = `${selectedLine}-${determinedRole}`;
        
        setIsLoading(true);
                 setTimeout(() => {
           navigate(`/bro/lol-result/${resultKey}`);
         }, 1500);
      }
    }
  };

  const getCurrentQuestion = () => {
    if (currentStep === 1) {
      return lolTestData.lineQuestions[currentQuestionIndex];
    } else {
      return lolTestData.roleQuestions[selectedLine][currentQuestionIndex];
    }
  };

  const getLineDisplayName = (line) => {
    const lineNames = {
      top: '탑',
      jungle: '정글',
      mid: '미드',
      adc: '원딜',
      support: '서폿'
    };
    return lineNames[line] || line;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <BroHeader />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <LoadingSpinner />
            <p className="text-white text-lg mt-4">결과를 분석하고 있습니다...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const currentQuestion = getCurrentQuestion();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <BroHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* 진행률 바 */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-gray-700 rounded-full h-3 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-center text-white">
            <span className="text-sm">
              {currentStep === 1 ? '1단계: 기본 성향 분석' : '2단계: 세부 성향 분석'}
            </span>
            <span className="mx-2">•</span>
            <span className="text-sm">
              {currentStep === 1 
                ? `${currentQuestionIndex + 1}/${lolTestData.lineQuestions.length}`
                : `${currentQuestionIndex + 1}/${lolTestData.roleQuestions[selectedLine].length}`
              }
            </span>
          </div>
        </div>

        {/* 질문 카드 */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {currentQuestion.question}
              </h2>
            </div>

            {/* 선택지 */}
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.text)}
                  className="w-full p-6 text-left bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 border-2 border-gray-200 hover:border-blue-300 rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 테스트 정보 */}
        <div className="max-w-2xl mx-auto text-center text-white">
          <div className="bg-black bg-opacity-20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">🎮 롤 라인 추천 테스트</h3>
            <p className="text-gray-300">
              당신의 성향을 분석하여 가장 어울리는 롤 라인과 역할군을 추천해드립니다.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              총 {lolTestData.lineQuestions.length + 5}문항 • 약 4분 소요
            </div>
            
            {/* 저작권 표기 */}
            <div className="mt-4 pt-4 border-t border-gray-600">
              <p className="text-xs text-gray-400">
                League of Legends는 Riot Games, Inc.의 등록상표입니다.
                <br />
                <a 
                  href="https://www.leagueoflegends.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  공식 사이트 방문
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LolTest; 