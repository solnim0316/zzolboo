
// 오늘 뭐 먹지? 테스트 결과 더미 데이터 (한국인 식사 80종)
export const foodTestResults = [
  // 한식
  { id: 1, name: "불고기", description: "달콤짭짤한 소고기 불고기, 모두가 좋아하는 메뉴!", image: "/images/food/bulgogi.png", emoji: "🥩" },
  { id: 2, name: "비빔밥", description: "다양한 나물과 고소한 고추장, 건강한 한 끼 비빔밥!", image: "/images/food/bibimbap.png", emoji: "🥗🍚" },
  { id: 3, name: "삼겹살", description: "지글지글 구워먹는 삼겹살, 소주 한 잔과 찰떡!", image: "/images/food/samgyeopsal.png", emoji: "🥓🔥" },
  { id: 4, name: "제육볶음", description: "매콤달콤한 돼지고기 제육볶음, 밥도둑 메뉴!", image: "/images/food/jeyuk-bokkeum.png", emoji: "🌶️🐖" },
  { id: 5, name: "닭갈비", description: "매콤하게 볶아먹는 닭갈비, 치즈와 함께라면 금상첨화!", image: "/images/food/dakgalbi.png", emoji: "🍗🌶️🧀" },
  { id: 6, name: "감자탕", description: "얼큰하고 푸짐한 감자탕, 해장에도 최고!", image: "/images/food/gamjatang.png", emoji: "🥔🍲" },
  { id: 7, name: "부대찌개", description: "햄과 소시지, 라면사리까지 푸짐한 부대찌개!", image: "/images/food/budae-jjigae.png", emoji: "🍲🥓🌭" },
  { id: 8, name: "잡채", description: "쫄깃한 당면과 고기, 야채가 어우러진 잡채!", image: "/images/food/japchae.png", emoji: "🍜🥢" },
  { id: 9, name: "김밥", description: "간편하게 먹는 국민 간식 김밥!", image: "/images/food/gimbap.png", emoji: "🍙" },
  { id: 10, name: "떡볶이", description: "매콤달콤한 소스에 쫄깃한 떡, 국민 간식 떡볶이!", image: "/images/food/tteokbokki.png", emoji: "🌶️🍢" },
  { id: 11, name: "순대", description: "쫄깃한 순대와 매콤한 양념, 분식집의 인기 메뉴!", image: "/images/food/soondae.png", emoji: "🌭" },
  { id: 12, name: "라면", description: "언제 먹어도 맛있는 라면, 간편한 한 끼!", image: "/images/food/ramyeon.png", emoji: "🍜" },
  { id: 13, name: "돈까스", description: "바삭한 튀김과 부드러운 고기, 돈까스!", image: "/images/food/donkatsu.png", emoji: "🍖🍴" },
  { id: 14, name: "오므라이스", description: "계란과 케첩, 볶음밥의 조화 오므라이스!", image: "/images/food/omurice.png", emoji: "🍳🍚" },
  { id: 15, name: "카레라이스", description: "향신료 가득, 부드러운 카레라이스!", image: "/images/food/curry-rice.png", emoji: "🍛" },
  { id: 16, name: "볶음밥", description: "남은 재료로 뚝딱, 간편한 볶음밥!", image: "/images/food/bokkeumbap.png", emoji: "🍚" },
  { id: 17, name: "김치볶음밥", description: "매콤한 김치와 고소한 밥, 김치볶음밥!", image: "/images/food/kimchi-bokkeumbap.png", emoji: "🌶️🍚" },
  { id: 18, name: "계란말이", description: "달걀로 만든 부드러운 계란말이!", image: "/images/food/gyeran-mari.png", emoji: "🍳" },
  { id: 19, name: "장어덮밥", description: "고소한 장어와 달콤한 소스, 장어덮밥!", image: "/images/food/jangeo-deopbap.png", emoji: "🐟🍚" },
  // 일식
  { id: 20, name: "초밥", description: "다양한 재료와 밥의 조화, 초밥!", image: "/images/food/sushi.png", emoji: "🍣" },
  { id: 21, name: "연어덮밥", description: "신선한 연어와 밥, 연어덮밥!", image: "/images/food/salmon-don.png", emoji: "🐟🍚" },
  { id: 22, name: "가츠동", description: "달콤한 소스와 돈까스, 가츠동!", image: "/images/food/katsudon.png", emoji: "🍚🍖" },
  { id: 23, name: "규동", description: "소고기와 양파의 조화, 규동!", image: "/images/food/gyudon.png", emoji: "🥩🍚" },
  { id: 24, name: "우동", description: "따끈한 국물과 두툼한 면발, 우동!", image: "/images/food/udon.png", emoji: "🍜" },
  { id: 25, name: "라멘", description: "진한 육수와 쫄깃한 면, 일본식 라멘!", image: "/images/food/ramen.png", emoji: "🍜" },
  { id: 26, name: "타코야끼", description: "겉은 바삭, 속은 부드러운 타코야끼!", image: "/images/food/takoyaki.png", emoji: "🐙🍡" },
  { id: 27, name: "오코노미야끼", description: "다양한 재료가 어우러진 오코노미야끼!", image: "/images/food/okonomiyaki.png", emoji: "🥞🍳" },
  // 중식
  { id: 28, name: "짜장면", description: "달콤짭짤한 춘장 소스, 국민 중식 짜장면!", image: "/images/food/jjajangmyeon.png", emoji: "🍜" },
  { id: 29, name: "짬뽕", description: "얼큰한 국물과 해산물, 짬뽕!", image: "/images/food/jjambbong.png", emoji: "🍜🦐" },
  { id: 30, name: "탕수육", description: "바삭한 튀김과 새콤달콤 소스, 탕수육!", image: "/images/food/tangsuyuk.png", emoji: "🍖🍯" },
  { id: 31, name: "마파두부", description: "매콤한 두부요리, 마파두부!", image: "/images/food/mapo-tofu.png", emoji: "🌶️🍲" },
  { id: 32, name: "깐풍기", description: "매콤달콤한 소스의 닭튀김, 깐풍기!", image: "/images/food/kanpunggi.png", emoji: "🍗🌶️" },
  { id: 33, name: "양장피", description: "다양한 재료와 소스의 조화, 양장피!", image: "/images/food/yangjangpi.png", emoji: "🥗🍤" },
  // 양식
  { id: 34, name: "스테이크", description: "두툼한 고기, 육즙 가득 스테이크!", image: "/images/food/steak.png", emoji: "🥩🍷" },
  { id: 35, name: "파스타", description: "크림, 토마토, 로제 등 다양한 파스타!", image: "/images/food/pasta.png", emoji: "🍝" },
  { id: 36, name: "피자", description: "치즈 듬뿍, 토핑 가득 피자!", image: "/images/food/pizza.png", emoji: "🍕" },
  { id: 37, name: "리조또", description: "부드럽고 고소한 이탈리안 리조또!", image: "/images/food/risotto.png", emoji: "🍚🧀" },
  { id: 38, name: "함박스테이크", description: "촉촉한 고기와 소스, 함박스테이크!", image: "/images/food/hamburg-steak.png", emoji: "🥩🍳" },
  { id: 39, name: "샐러드", description: "신선한 채소와 드레싱, 건강한 샐러드!", image: "/images/food/salad.png", emoji: "🥗" },
  { id: 40, name: "치즈오븐스파게티", description: "치즈 듬뿍 오븐에 구운 스파게티!", image: "/images/food/cheese-oven-spaghetti.png", emoji: "🧀🍝" },
  // 동남아
  { id: 41, name: "팟타이", description: "쫄깃한 면과 새콤달콤 소스, 태국식 팟타이!", image: "/images/food/pad-thai.png", emoji: "🍜🥢" },
  { id: 42, name: "쌀국수", description: "담백하고 깔끔한 국물, 베트남식 쌀국수!", image: "/images/food/pho.png", emoji: "🍜" },
  { id: 43, name: "반미", description: "바삭한 바게트와 신선한 재료, 베트남식 반미!", image: "/images/food/banh-mi.png", emoji: "🥖🥒" },
  { id: 44, name: "나시고렝", description: "인도네시아식 볶음밥, 나시고렝!", image: "/images/food/nasi-goreng.png", emoji: "🍚🌶️" },
  { id: 45, name: "카오팟", description: "태국식 볶음밥, 카오팟!", image: "/images/food/khao-phat.png", emoji: "🍚🥚" },
  { id: 46, name: "똠얌꿍", description: "매콤새콤한 태국식 해산물 수프, 똠얌꿍!", image: "/images/food/tom-yum-goong.png", emoji: "🍤🌶️" },
  // 인도
  { id: 47, name: "치킨커리", description: "향신료 가득한 인도식 치킨커리!", image: "/images/food/chicken-curry.png", emoji: "🍛🍗" },
  { id: 48, name: "난&커리", description: "쫄깃한 난과 진한 커리의 조화!", image: "/images/food/nan-curry.png", emoji: "🍛🥖" },
  { id: 49, name: "팔락파니르", description: "시금치와 치즈가 어우러진 인도 커리!", image: "/images/food/palak-paneer.png", emoji: "🥬🧀" },
  { id: 50, name: "비리야니", description: "향신료와 고기가 어우러진 인도식 볶음밥!", image: "/images/food/biryani.png", emoji: "🍚🍗" },
  // 멕시칸
  { id: 51, name: "타코", description: "또띠아에 다양한 재료를 넣은 멕시코 타코!", image: "/images/food/taco.png", emoji: "🌮" },
  { id: 52, name: "부리또", description: "속이 꽉 찬 멕시코식 부리또!", image: "/images/food/burrito.png", emoji: "🌯" },
  { id: 53, name: "퀘사디아", description: "치즈와 토르티야의 조화, 퀘사디아!", image: "/images/food/quesadilla.png", emoji: "🧀🌮" },
  { id: 54, name: "나쵸", description: "바삭한 나쵸와 치즈, 살사 소스!", image: "/images/food/nacho.png", emoji: "🥨🧀" },
  // 데이트/파티/분위기
  { id: 55, name: "와인&치즈플래터", description: "분위기 내기 좋은 와인과 치즈플래터!", image: "/images/food/wine-cheese.png", emoji: "🍷🧀" },
  { id: 56, name: "감바스", description: "올리브오일에 새우를 볶은 감바스!", image: "/images/food/gambas.png", emoji: "🦐🍤" },
  { id: 57, name: "스시", description: "신선한 생선과 밥, 일본식 스시!", image: "/images/food/sushi.png", emoji: "🍣" },
  { id: 58, name: "로브스터", description: "고급스러운 해산물 요리, 로브스터!", image: "/images/food/lobster.png", emoji: "🦞" },
  { id: 59, name: "랍스터파스타", description: "랍스터와 파스타의 만남, 특별한 날에!", image: "/images/food/lobster-pasta.png", emoji: "🦞🍝" },
  { id: 60, name: "티본스테이크", description: "두툼한 티본스테이크, 데이트에 딱!", image: "/images/food/tbone-steak.png", emoji: "🥩🍷" },
  { id: 61, name: "샤브샤브", description: "야채와 고기를 끓여먹는 샤브샤브!", image: "/images/food/shabu-shabu.png", emoji: "🥩🥬🍲" },
  { id: 62, name: "치즈퐁듀", description: "치즈에 빵과 채소를 찍어먹는 치즈퐁듀!", image: "/images/food/cheese-fondue.png", emoji: "🧀🥖" },
  { id: 63, name: "스페인 빠에야", description: "해산물과 쌀의 조화, 스페인식 빠에야!", image: "/images/food/paella.png", emoji: "🥘🦐" },
  { id: 64, name: "프렌치토스트", description: "달콤한 브런치 메뉴, 프렌치토스트!", image: "/images/food/french-toast.png", emoji: "🍞🍯" },
  { id: 65, name: "팬케이크", description: "폭신폭신 달콤한 팬케이크!", image: "/images/food/pancake.png", emoji: "🥞🍯" },
  { id: 66, name: "크로플", description: "겉은 바삭 속은 쫄깃, 인기 디저트 크로플!", image: "/images/food/croffle.png", emoji: "🥐🧇" },
  { id: 67, name: "아보카도샐러드", description: "고소한 아보카도와 신선한 채소 샐러드!", image: "/images/food/avocado-salad.png", emoji: "🥑🥗" },
  { id: 68, name: "연어샐러드", description: "신선한 연어와 채소, 연어샐러드!", image: "/images/food/salmon-salad.png", emoji: "🐟🥗" },
  { id: 69, name: "치킨샐러드", description: "닭가슴살과 채소, 건강한 치킨샐러드!", image: "/images/food/chicken-salad.png", emoji: "🍗🥗" },
  { id: 70, name: "토마토파스타", description: "상큼한 토마토소스 파스타!", image: "/images/food/tomato-pasta.png", emoji: "🍝🍅" },
  { id: 71, name: "크림파스타", description: "부드러운 크림소스 파스타!", image: "/images/food/cream-pasta.png", emoji: "🍝🥛" },
  { id: 72, name: "로제파스타", description: "토마토와 크림의 조화, 로제파스타!", image: "/images/food/rose-pasta.png", emoji: "🍝🍅🥛" },
  { id: 73, name: "마르게리타피자", description: "토마토와 치즈의 클래식, 마르게리타피자!", image: "/images/food/margherita-pizza.png", emoji: "🍕🍅" },
  { id: 74, name: "고르곤졸라피자", description: "고르곤졸라 치즈와 꿀의 조화!", image: "/images/food/gorgonzola-pizza.png", emoji: "🍕🍯" },
  { id: 75, name: "불닭볶음면", description: "매운맛의 끝판왕, 불닭볶음면!", image: "/images/food/buldak.png", emoji: "🍜🌶️🔥" },
  { id: 76, name: "치즈라면", description: "치즈가 듬뿍, 부드러운 치즈라면!", image: "/images/food/cheese-ramen.png", emoji: "🍜🧀" },
  { id: 77, name: "새우튀김우동", description: "바삭한 새우튀김과 우동의 만남!", image: "/images/food/tempura-udon.png", emoji: "🍤🍜" },
  { id: 78, name: "연어스테이크", description: "고소한 연어와 소스, 연어스테이크!", image: "/images/food/salmon-steak.png", emoji: "🐟🥩" },
  { id: 79, name: "치킨텐더", description: "바삭한 치킨텐더와 소스!", image: "/images/food/chicken-tender.png", emoji: "🍗🍟" },
  { id: 80, name: "감자튀김", description: "바삭한 감자튀김, 모두가 좋아하는 사이드!", image: "/images/food/french-fries.png", emoji: "🍟" }
  // --- 웃기고 어이없는 메뉴 (81~120) ---
  ,{ id: 81, name: "초코치킨", description: "달콤한 초콜릿과 치킨의 충격적 만남!", image: "/images/food/choco-chicken.png", emoji: "🍫🍗" }
  ,{ id: 82, name: "김치피자", description: "매콤한 김치와 치즈의 이색 조화!", image: "/images/food/kimchi-pizza.png", emoji: "🍕🌶️" }
  ,{ id: 83, name: "라면샐러드", description: "생라면과 신선한 채소의 바삭함!", image: "/images/food/ramen-salad.png", emoji: "🍜🥗" }
  ,{ id: 84, name: "수박스테이크", description: "수박을 스테이크처럼 썰어먹는 신개념 요리!", image: "/images/food/watermelon-steak.png", emoji: "🍉🥩" }
  ,{ id: 85, name: "치즈떡볶이피자", description: "떡볶이와 피자의 환상 콜라보!", image: "/images/food/tteokbokki-pizza.png", emoji: "🍕🍢" }
  ,{ id: 86, name: "마라아이스크림", description: "마라의 얼얼함과 아이스크림의 달콤함!", image: "/images/food/mala-icecream.png", emoji: "🍦🌶️" }
  ,{ id: 87, name: "오이초밥", description: "오이로 만든 초밥, 상큼함이 가득!", image: "/images/food/cucumber-sushi.png", emoji: "🥒🍣" }
  ,{ id: 88, name: "팝콘밥", description: "밥 대신 팝콘으로 만든 신개념 덮밥!", image: "/images/food/popcorn-rice.png", emoji: "🍿🍚" }
  ,{ id: 89, name: "바나나카레", description: "달콤한 바나나와 카레의 만남!", image: "/images/food/banana-curry.png", emoji: "🍌🍛" }
  ,{ id: 90, name: "피클스무디", description: "피클을 갈아 만든 상큼한 스무디!", image: "/images/food/pickle-smoothie.png", emoji: "🥒🥤" }
  ,{ id: 91, name: "고구마피자", description: "달콤한 고구마와 치즈의 조화!", image: "/images/food/sweetpotato-pizza.png", emoji: "🍕🍠" }
  ,{ id: 92, name: "참치초코롤", description: "참치와 초콜릿의 이색 롤!", image: "/images/food/tuna-choco-roll.png", emoji: "🍫🐟" }
  ,{ id: 93, name: "딸기김밥", description: "딸기와 밥의 상큼한 만남!", image: "/images/food/strawberry-gimbap.png", emoji: "🍓🍙" }
  ,{ id: 94, name: "옥수수라떼", description: "옥수수와 우유의 고소한 조화!", image: "/images/food/corn-latte.png", emoji: "🌽🥛" }
  ,{ id: 95, name: "피자라면", description: "피자와 라면을 한 번에!", image: "/images/food/pizza-ramen.png", emoji: "🍕🍜" }
  ,{ id: 96, name: "멸치아이스크림", description: "멸치의 감칠맛과 아이스크림의 달콤함!", image: "/images/food/anchovy-icecream.png", emoji: "🍦🐟" }
  ,{ id: 97, name: "고추장파스타", description: "고추장으로 만든 매콤한 파스타!", image: "/images/food/gochujang-pasta.png", emoji: "🍝🌶️" }
  ,{ id: 98, name: "마늘초밥", description: "마늘향 가득한 초밥!", image: "/images/food/garlic-sushi.png", emoji: "🧄🍣" }
  ,{ id: 99, name: "단호박버거", description: "단호박 패티가 들어간 건강 버거!", image: "/images/food/pumpkin-burger.png", emoji: "🎃🍔" }
  ,{ id: 100, name: "김치스무디", description: "김치와 과일의 상큼한 스무디!", image: "/images/food/kimchi-smoothie.png", emoji: "🥤🌶️" }
  ,{ id: 101, name: "아보카도라면", description: "아보카도와 라면의 부드러운 조화!", image: "/images/food/avocado-ramen.png", emoji: "🥑🍜" }
  ,{ id: 102, name: "치즈팥빙수", description: "치즈와 팥빙수의 달콤한 만남!", image: "/images/food/cheese-bingsu.png", emoji: "🧀🍧" }
  ,{ id: 103, name: "고등어피자", description: "고등어 토핑이 올라간 피자!", image: "/images/food/mackerel-pizza.png", emoji: "🍕🐟" }
  ,{ id: 104, name: "오렌지카레", description: "오렌지와 카레의 상큼한 조화!", image: "/images/food/orange-curry.png", emoji: "🍊🍛" }
  ,{ id: 105, name: "초코김치볶음밥", description: "초콜릿과 김치볶음밥의 달콤매콤함!", image: "/images/food/choco-kimchi-bokkeumbap.png", emoji: "🍫🍚" }
  ,{ id: 106, name: "파인애플떡볶이", description: "파인애플이 들어간 달콤 떡볶이!", image: "/images/food/pineapple-tteokbokki.png", emoji: "🍍🍢" }
  ,{ id: 107, name: "고구마라떼", description: "달콤한 고구마와 우유의 만남!", image: "/images/food/sweetpotato-latte.png", emoji: "🍠🥛" }
  ,{ id: 108, name: "양파튀김라면", description: "양파튀김이 들어간 라면!", image: "/images/food/onion-ramen.png", emoji: "🧅🍜" }
  ,{ id: 109, name: "딸기치즈돈까스", description: "딸기와 치즈가 들어간 돈까스!", image: "/images/food/strawberry-cheese-donkatsu.png", emoji: "🍓🧀🍖" }
  ,{ id: 110, name: "참외샐러드", description: "참외와 채소의 상큼한 샐러드!", image: "/images/food/melon-salad.png", emoji: "🍈🥗" }
  ,{ id: 111, name: "고추참치파스타", description: "고추참치로 만든 매콤 파스타!", image: "/images/food/chili-tuna-pasta.png", emoji: "🌶️🐟🍝" }
  ,{ id: 112, name: "옥수수피자", description: "옥수수 토핑이 듬뿍 올라간 피자!", image: "/images/food/corn-pizza.png", emoji: "🌽🍕" }
  ,{ id: 113, name: "마늘치킨버거", description: "마늘향 가득 치킨버거!", image: "/images/food/garlic-chicken-burger.png", emoji: "🧄🍗🍔" }
  ,{ id: 114, name: "블루베리파스타", description: "블루베리와 파스타의 달콤한 만남!", image: "/images/food/blueberry-pasta.png", emoji: "🫐🍝" }
  ,{ id: 115, name: "고구마치즈라면", description: "고구마와 치즈가 들어간 라면!", image: "/images/food/sweetpotato-cheese-ramen.png", emoji: "🍠🧀🍜" }
  ,{ id: 116, name: "딸기샌드위치", description: "딸기와 생크림이 들어간 샌드위치!", image: "/images/food/strawberry-sandwich.png", emoji: "🍓🥪" }
  ,{ id: 117, name: "단호박피자", description: "단호박 토핑이 올라간 피자!", image: "/images/food/pumpkin-pizza.png", emoji: "🎃🍕" }
  ,{ id: 118, name: "고추장치킨", description: "고추장 양념의 매콤한 치킨!", image: "/images/food/gochujang-chicken.png", emoji: "🌶️🍗" }
  ,{ id: 119, name: "파인애플볶음밥", description: "파인애플이 들어간 볶음밥!", image: "/images/food/pineapple-bokkeumbap.png", emoji: "🍍🍚" }
  ,{ id: 120, name: "초코바나나샐러드", description: "초코와 바나나, 채소의 달콤한 샐러드!", image: "/images/food/choco-banana-salad.png", emoji: "🍫🍌🥗" }
];
