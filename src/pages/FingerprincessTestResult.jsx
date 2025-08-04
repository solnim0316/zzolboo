// 🎨 나만의 fingerprincess(핑프)는? 테스트 결과 페이지
import { useParams, useNavigate } from 'react-router-dom';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState, useEffect } from 'react';
import { fingerprincessTestData } from '@/data/fingerprincessTestData';
import UnifiedShareModal from '@/components/common/UnifiedShareModal';
import { setMetaTags } from '@/utils/shareUtils';

export default function FingerprincessTestResult() {
  const { resultKey } = useParams();
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);

  const { results } = fingerprincessTestData;
  const result = results[resultKey] || results.pastel_dreamer;

  // 결과에 따른 이미지 선택 (각 결과별로 여러 이미지 중 랜덤 선택)
  const getResultImage = (resultKey) => {
    // 각 결과별로 여러 이미지 번호 배열 (실제 존재하는 이미지만 사용)
    const imageMapping = {
      'pastel_dreamer': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
      'neon_vibes': ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
      'minimal_elegance': ['41', '42', '43', '44', '45', '46', '47', '48', '49', '51', '52', '53', '55', '56', '57', '58', '59', '60', '61', '62'],
      'cozy_warmth': ['63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82'],
      'artistic_soul': ['83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102'],
      'urban_rhythm': ['103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122'],
      'mystical_dream': ['123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '163', '164'],
      'vibrant_energy': ['165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175', '176', '177', '178', '179', '180', '181', '182', '183', '184'],
      'gentle_healer': ['185', '186', '187', '188', '189', '190', '191', '192', '193', '194', '195', '196', '197', '198', '199', '200', '201', '202', '203', '204'],
      'cosmic_wanderer': ['205', '206', '207', '208', '209', '211', '213', '214', '215', '217', '218', '219', '220', '221', '222', '223', '224', '225', '226', '227'],
      'retro_charm': ['228', '229', '230', '231', '232', '233', '234', '235', '236', '237', '238', '239', '240', '241', '242', '243', '244', '245', '246', '247'],
      'ethereal_grace': ['248', '249', '250', '251', '252', '253', '254', '255', '256', '257', '258', '259', '260', '261', '262', '263', '264', '265', '266', '267'],
      'wild_spirit': ['268', '269', '270', '271', '272', '273', '274', '275', '276', '277', '278', '279', '280', '281', '282', '283', '284', '285', '286', '287'],
      'serene_zen': ['288', '289', '290', '291', '292', '293', '294', '295', '296', '297', '298', '299', '300', '301', '302', '303', '304', '305', '306', '307'],
      'bold_rebel': ['308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318', '319', '320', '321', '322', '323', '324', '325', '326', '327'],
      'sweet_romance': ['328', '329', '330', '331', '332', '333', '334', '335', '336', '337', '338', '339', '340', '341', '342', '343', '344', '345', '346', '347'],
      'tech_savvy': ['348', '349', '350', '351', '352', '353', '354', '355', '356', '357', '358', '359', '360', '361', '362', '363', '364', '365', '366', '367'],
      'nature_lover': ['368', '369', '370', '371', '372', '373', '374', '375', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      'classic_beauty': ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32'],
      'modern_edge': ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '51', '52', '53']
    };
    
    const imageArray = imageMapping[resultKey] || imageMapping['pastel_dreamer'];
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const imageNumber = imageArray[randomIndex];
    return `/images/fingerprincess/${imageNumber}.webp`;
  };

  // OG 이미지용 고정 이미지 (결과 타입별 대표 이미지)
  const getOGImage = (resultKey) => {
    const ogImageMapping = {
      'pastel_dreamer': '01',
      'neon_vibes': '21',
      'minimal_elegance': '41',
      'cozy_warmth': '63',
      'artistic_soul': '83',
      'urban_rhythm': '103',
      'mystical_dream': '123',
      'vibrant_energy': '165',
      'gentle_healer': '185',
      'cosmic_wanderer': '205',
      'retro_charm': '228',
      'ethereal_grace': '248',
      'wild_spirit': '268',
      'serene_zen': '288',
      'bold_rebel': '308',
      'sweet_romance': '328',
      'tech_savvy': '348',
      'nature_lover': '368',
      'classic_beauty': '13',
      'modern_edge': '33'
    };
    
    const imageNumber = ogImageMapping[resultKey] || '01';
    return `${window.location.origin}/images/fingerprincess/${imageNumber}.webp`;
  };

  const [fingerprincessImage] = useState(getResultImage(resultKey));

  // 메타 태그 설정
  useEffect(() => {
    const ogImage = getOGImage(resultKey);
    const title = `🎨 나만의 fingerprincess(핑프)는? - ${result.title}`;
    const description = `${result.description}\n\nboyboyboy의 픽셀아트로 완성된 당신만의 핑프를 확인해보세요!`;
    
    setMetaTags({
      title,
      description,
      image: ogImage,
      url: window.location.href
    });
  }, [resultKey, result]);

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-pink-200">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎨</div>
              <h1 className="text-3xl font-bold text-[#5D4037] mb-4">
                당신만의 fingerprincess(핑프)는?
              </h1>
              <p className="text-lg text-gray-600">
                boyboyboy(소년소년소년)의 픽셀아트로 완성된 당신만의 핑프 스타일!
              </p>
            </div>

            {/* boyboyboy 픽셀아트 이미지 */}
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
                <img 
                  src={fingerprincessImage} 
                  alt="Fingerprincess by boyboyboy" 
                  className="mx-auto max-w-full h-auto rounded-xl shadow-lg"
                  style={{ maxHeight: '400px' }}
                />
                <p className="text-sm text-gray-600 mt-4">
                  🎨 Art by boyboyboy(소년소년소년)
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-8 border border-pink-200">
              <h2 className="text-2xl font-bold text-center mb-4 text-[#5D4037]">
                {result.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {result.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#5D4037] mb-3">🎨 핑프 특징</h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {result.characteristics}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#5D4037] mb-3">💡 핑프 라이프스타일</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {result.lifestyle}
                  </p>
                </div>
              </div>
            </div>

            {/* 공유 버튼들 */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setShowShareModal(true)}
                className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
              >
                📤 결과 공유하기
              </button>
              <button
                onClick={() => navigate('/fingerprincess')}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                🔄 다시 테스트하기
              </button>
              <button
                onClick={() => navigate('/')}
                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                🏠 홈으로 돌아가기
              </button>
            </div>

            {/* boyboyboy 소개 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-[#5D4037] mb-4 text-center">
                🎨 boyboyboy(소년소년소년) 소개
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">🎵 아티스트</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 픽셀아트 전문 아티스트</li>
                    <li>• 래퍼이자 음악 프로듀서</li>
                    <li>• 독특한 시각적 감각</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">🎨 작품 스타일</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 픽셀아트 기반 디지털 아트</li>
                    <li>• 독특한 색감과 구성</li>
                    <li>• 감성적이고 몽환적인 분위기</li>
                  </ul>
                </div>
              </div>

              {/* 콜라보 안내 */}
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800 text-center">
                  🎨 <strong>콜라보 컨텐츠!</strong> boyboyboy의 픽셀아트로 완성된 당신만의 핑프를 확인해보세요! ✨
                </p>
              </div>

              {/* 추가 정보 */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  💡 더 많은 boyboyboy의 작품을 보고 싶다면 SNS를 팔로우해보세요!
                </p>
                                 <div className="text-center mt-2">
                   <div className="inline-flex items-center gap-3">
                     {/* Instagram SVG */}
                     <a 
                       href="https://www.instagram.com/imboyboyboy/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center justify-center w-12 h-12 hover:scale-110 transition-all duration-200"
                       title="Instagram"
                     >
                       <img 
                         src="/SVG/instagram.svg" 
                         alt="Instagram" 
                         className="w-12 h-12"
                       />
                     </a>
                     
                     {/* BOYBOYBOY 텍스트 */}
                     <a 
                       href="https://www.instagram.com/imboyboyboy/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-lg font-bold text-gray-800 hover:text-pink-600 transition-colors cursor-pointer"
                     >
                       BOYBOYBOY
                     </a>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 통일된 공유 모달 */}
      <UnifiedShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        result={{
          title: result?.title || '나만의 핑프',
          catchphrase: result?.description || 'boyboyboy의 픽셀아트로 완성된 나만의 핑프를 확인해보세요!',
          imageUrl: fingerprincessImage
        }}
        testType="fingerprincess"
      />

      <Footer />
    </>
  );
} 