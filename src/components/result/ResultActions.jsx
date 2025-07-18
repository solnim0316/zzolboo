import Button from "../common/Button";

export default function ResultActions() {
  return (
    <div className="flex justify-center gap-3 mt-6 flex-wrap">
      <Button>처음으로</Button>
      <Button>다시 하기</Button>
      <Button>공유하기</Button>
      <Button>이미지 저장</Button>
    </div>
  );
}
