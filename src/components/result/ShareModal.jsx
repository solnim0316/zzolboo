import ShareOption from "./ShareOption";

export default function ShareModal() {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-xl">
        <h2 className="text-lg font-bold mb-4 text-center">퀴즈 결과 공유하기</h2>
        <div className="flex justify-center gap-3">
          <ShareOption label="카카오톡" />
          <ShareOption label="페이스북" />
          <ShareOption label="링크복사" />
        </div>
      </div>
    </div>
  );
}
