import { useParams } from "react-router-dom";

export default function TestPlayer() {
  const { testId } = useParams();

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#5D4037] mb-2">
            테스트 진행 중
          </h1>
          <p className="text-[#8D6E63]">테스트 ID: {testId}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">질문 1/10</h2>
          <p className="mb-6">당신이 가장 좋아하는 활동은 무엇인가요?</p>
          
          <div className="space-y-3">
            <button className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg border">
              집에서 혼자 책 읽기
            </button>
            <button className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg border">
              친구들과 파티하기
            </button>
            <button className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg border">
              새로운 장소 탐험하기
            </button>
            <button className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg border">
              운동하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
