// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FCFAF6',   // 부드러운 아이보리
        text: '#2F2F2F',         // 기본 진회색
        subtext: '#727272',      // 보조 회색
        primary: '#FF708A',      // 코랄핑크 (CTA 버튼)
        secondary: '#B2A4FF',    // 미스티 보라 (포인트)
        highlight: '#FFF0F3',    // 버튼 hover / 카드 강조 배경
      },
    },
  },
  plugins: [],
}
