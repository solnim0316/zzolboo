import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Contact from "./pages/Contact";
import MBTIGuide from "./pages/MBTIGuide";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FamilyMbtiTest from "./pages/FamilyMbtiTest";
import FamilyMbtiResult from "./pages/FamilyMbtiResult";

export default function App() {
  return (
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
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
