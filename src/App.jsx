import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Canonical from "./components/common/Canonical";

// 🚀 지연 로딩을 위한 컴포넌트들
const Home = lazy(() => import("./pages/Home"));
const DinosaurTest = lazy(() => import("./pages/DinosaurTest"));
const CatTest = lazy(() => import("./pages/CatTest"));
const FoodTest = lazy(() => import("./pages/FoodTest"));
const FashionTest = lazy(() => import("./pages/FashionTest"));
const MovieTest = lazy(() => import("./pages/MovieTest"));
const ColorTest = lazy(() => import("./pages/ColorTest"));
const SharedResult = lazy(() => import("./pages/SharedResult"));
const About = lazy(() => import("./pages/About"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Contact = lazy(() => import("./pages/Contact"));
const MBTIGuide = lazy(() => import("./pages/MBTIGuide"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const FamilyMbtiTest = lazy(() => import("./pages/FamilyMbtiTest"));
const FamilyMbtiResult = lazy(() => import("./pages/FamilyMbtiResult"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ImageCuratorDemo = lazy(() => import("./pages/ImageCuratorDemo"));
const AutoImageGeneratorDemo = lazy(() => import("./pages/AutoImageGeneratorDemo"));
const FreeImageGeneratorDemo = lazy(() => import("./pages/FreeImageGeneratorDemo"));
const IsekaiCardDemo = lazy(() => import("./pages/IsekaiCardDemo"));
const OfflineHistoryPage = lazy(() => import("./pages/OfflineHistory"));

// Bro 페이지들
const LolTest = lazy(() => import("./pages/bro/LolTest"));
const LolTestResult = lazy(() => import("./pages/bro/LolTestResult"));
const BroHome = lazy(() => import("./pages/bro/BroHome"));
const BitcoinTest = lazy(() => import("./pages/bro/BitcoinTest"));
const BitcoinTestResult = lazy(() => import("./pages/bro/BitcoinTestResult"));
const IsekaiTest = lazy(() => import("./pages/IsekaiTest"));
const IsekaiTestResult = lazy(() => import("./pages/IsekaiTestResult"));
const BroIsekaiTest = lazy(() => import("./pages/bro/BroIsekaiTest"));
const BroIsekaiTestResult = lazy(() => import("./pages/bro/BroIsekaiTestResult"));
const F1DriverTest = lazy(() => import("./pages/bro/F1DriverTest"));
const F1DriverTestResult = lazy(() => import("./pages/bro/F1DriverTestResult"));
const StockInvestorTest = lazy(() => import("./pages/bro/StockInvestorTest"));
const StockInvestorTestResult = lazy(() => import("./pages/bro/StockInvestorTestResult"));
const MainStockInvestorTest = lazy(() => import("./pages/StockInvestorTest"));
const MainStockInvestorTestResult = lazy(() => import("./pages/StockInvestorTestResult"));
const TetogenTest = lazy(() => import("./pages/TetogenTest"));
const TetogenTestResult = lazy(() => import("./pages/TetogenTestResult"));

const WorkoutMateTest = lazy(() => import("./pages/WorkoutMateTest"));
const WorkoutMateTestResult = lazy(() => import("./pages/WorkoutMateTestResult"));
const FingerprincessTest = lazy(() => import("./pages/FingerprincessTest"));
const FingerprincessTestResult = lazy(() => import("./pages/FingerprincessTestResult"));
const LoveHabitTest = lazy(() => import("./pages/LoveHabitTest"));
const LoveHabitTestResult = lazy(() => import("./pages/LoveHabitTestResult"));
const DramaTest = lazy(() => import("./pages/DramaTest"));
const DramaTestResult = lazy(() => import("./pages/DramaTestResult"));
const NotFound = lazy(() => import("./pages/NotFound"));

// 🎯 로딩 컴포넌트
const LoadingSpinner = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5D4037] mx-auto mb-4"></div>
      <p className="text-[#8D6E63]">페이지 로딩 중...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <ErrorBoundary>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Suspense fallback={<LoadingSpinner />}>
          <Canonical />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/share" element={<SharedResult />} />
            <Route path="/dinosaur-test" element={<DinosaurTest />} />
            <Route path="/cat-test" element={<CatTest />} />
            <Route path="/food-test" element={<FoodTest />} />
            <Route path="/fashion-test" element={<FashionTest />} />
            <Route path="/movie-test" element={<MovieTest />} />
            <Route path="/color-test" element={<ColorTest />} />
            <Route path="/about" element={<About />} />
            <Route path="/mbti-guide" element={<MBTIGuide />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/family-mbti" element={<FamilyMbtiTest />} />
            <Route path="/family-mbti-result/:resultType" element={<FamilyMbtiResult />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/image-curator" element={<ImageCuratorDemo />} />
            <Route path="/auto-image-generator" element={<AutoImageGeneratorDemo />} />
            <Route path="/free-image-generator" element={<FreeImageGeneratorDemo />} />
            <Route path="/isekai-card-demo" element={<IsekaiCardDemo />} />
            <Route path="/offline-history" element={<OfflineHistoryPage />} />
            
            {/* Bro 페이지 라우트 */}
            <Route path="/bro" element={<BroHome />} />
            <Route path="/bro/lol-test" element={<LolTest />} />
            <Route path="/bro/lol-result/:resultKey" element={<LolTestResult />} />
            <Route path="/bro/bitcoin-test" element={<BitcoinTest />} />
            <Route path="/bro/bitcoin-result/:resultKey" element={<BitcoinTestResult />} />
            <Route path="/bro/isekai" element={<BroIsekaiTest />} />
            <Route path="/bro/isekai-result/:resultKey" element={<BroIsekaiTestResult />} />
            <Route path="/bro/f1-driver" element={<F1DriverTest />} />
            <Route path="/bro/f1-driver-result/:resultKey" element={<F1DriverTestResult />} />
            <Route path="/bro/stock-investor" element={<StockInvestorTest />} />
            <Route path="/bro/stock-investor-result/:resultKey" element={<StockInvestorTestResult />} />
            
            
            {/* 메인 페이지 테스트 라우트 */}
            <Route path="/stock-investor" element={<MainStockInvestorTest />} />
            <Route path="/stock-investor-result/:resultKey" element={<MainStockInvestorTestResult />} />
            <Route path="/isekai" element={<IsekaiTest />} />
            <Route path="/isekai-result/:resultKey" element={<IsekaiTestResult />} />
            <Route path="/workout-mate" element={<WorkoutMateTest />} />
            <Route path="/workout-mate-result/:resultKey" element={<WorkoutMateTestResult />} />
            <Route path="/fingerprincess" element={<FingerprincessTest />} />
            <Route path="/fingerprincess-result/:resultKey" element={<FingerprincessTestResult />} />
            <Route path="/love-habit-test" element={<LoveHabitTest />} />
            <Route path="/love-habit-result/:resultKey" element={<LoveHabitTestResult />} />
            <Route path="/drama-test" element={<DramaTest />} />
            <Route path="/drama-result/:resultKey" element={<DramaTestResult />} />
            <Route path="/tetogen" element={<TetogenTest />} />
            <Route path="/tetogen-result/:resultKey" element={<TetogenTestResult />} />
            
            {/* 404 에러 페이지 - 모든 라우트의 마지막에 위치 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}
