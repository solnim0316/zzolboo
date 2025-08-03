import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Home from "./pages/Home";
import TestPlayer from "./pages/TestPlayer";
import ResultPage from "./pages/ResultPage";
import DinosaurTest from "./pages/DinosaurTest";
import CatTest from "./pages/CatTest";
import FoodTest from "./pages/FoodTest";
import FashionTest from "./pages/FashionTest";
import MovieTest from "./pages/MovieTest";
import ColorTest from "./pages/ColorTest";
import SharedResult from "./pages/SharedResult";
import About from "./pages/About";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Contact from "./pages/Contact";
import MBTIGuide from "./pages/MBTIGuide";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FamilyMbtiTest from "./pages/FamilyMbtiTest";
import FamilyMbtiResult from "./pages/FamilyMbtiResult";
import Gallery from "./pages/Gallery";
import ImageCuratorDemo from "./pages/ImageCuratorDemo";
import AutoImageGeneratorDemo from "./pages/AutoImageGeneratorDemo";
import FreeImageGeneratorDemo from "./pages/FreeImageGeneratorDemo";
import LolTest from "./pages/bro/LolTest";
import LolTestResult from "./pages/bro/LolTestResult";
import BroHome from "./pages/bro/BroHome";
import LoveHabitTest from "./pages/LoveHabitTest";
import LoveHabitTestResult from "./pages/LoveHabitTestResult";
import DramaTest from "./pages/DramaTest";
import DramaTestResult from "./pages/DramaTestResult";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ErrorBoundary>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test/:testId" element={<TestPlayer />} />
          <Route path="/test/:testId/result" element={<ResultPage />} />
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
                          <Route path="/bro/lol-test" element={<LolTest />} />
        <Route path="/bro/lol-result/:resultKey" element={<LolTestResult />} />
                  <Route path="/bro" element={<BroHome />} />
                  <Route path="/love-habit-test" element={<LoveHabitTest />} />
                  <Route path="/love-habit-result/:resultKey" element={<LoveHabitTestResult />} />
                  <Route path="/drama-test" element={<DramaTest />} />
                  <Route path="/drama-result/:resultKey" element={<DramaTestResult />} />
                  {/* 404 에러 페이지 - 모든 라우트의 마지막에 위치 */}
                  <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
