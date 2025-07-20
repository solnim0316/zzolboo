// 📞 문의 페이지
import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 구현 시 이메일 발송 로직 추가
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <main className="bg-background text-text min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-[#5D4037]">
              📞 문의하기
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* 연락처 정보 */}
              <div>
                <h2 className="text-xl font-semibold mb-6 text-[#5D4037]">연락처 정보</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">이메일</h3>
                      <p className="text-gray-600">016sol@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🌐</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">웹사이트</h3>
                      <p className="text-gray-600">www.zzolbooworld.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">운영시간</h3>
                      <p className="text-gray-600">24시간 언제든지 문의 가능</p>
                      <p className="text-sm text-gray-500">답변은 1-2일 내에 드립니다</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl">
                  <h3 className="font-semibold text-[#5D4037] mb-3">🐱 쫄부월드 소개</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    쫄부월드는 재미있고 정확한 MBTI 성격 테스트를 통해 
                    여러분의 진정한 모습을 발견할 수 있도록 도와드립니다. 
                    쫄과 부가 함께하는 특별한 세계관에서 즐거운 테스트를 경험해보세요!
                  </p>
                </div>
              </div>

              {/* 문의 폼 */}
              <div>
                <h2 className="text-xl font-semibold mb-6 text-[#5D4037]">문의사항</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="답변받을 이메일 주소"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      제목 *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="문의 제목을 입력해주세요"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      내용 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="문의 내용을 자세히 적어주세요"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    문의 보내기 📨
                  </button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-600 text-center">
                    <span className="text-blue-600 font-medium">💡 TIP:</span> 
                    테스트 관련 오류나 제안사항은 언제든 환영입니다!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
