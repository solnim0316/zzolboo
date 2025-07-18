import { tagColorMap } from "@/data/tagColorMap";
import { tagEmojiMap } from "@/data/tagEmojiMap";

export default function TagButton({ label }) {
  const emoji = tagEmojiMap[label] || "";
  const colorClass =
    tagColorMap[label] || "bg-gray-100 text-gray-600 border-gray-200";

  return (
    <span
      className={`px-3 py-1 text-sm font-medium rounded-full border transition-all whitespace-nowrap ${colorClass}`}
    >
      #{emoji}{label}
    </span>
  );
}
