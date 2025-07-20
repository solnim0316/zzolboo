import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TestPlayer from "./pages/TestPlayer";
import ResultPage from "./pages/ResultPage";
import DinosaurTest from "./pages/DinosaurTest";
import CatTest from "./pages/CatTest";
import About from "./pages/About";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/:testId" element={<TestPlayer />} />
        <Route path="/test/:testId/result" element={<ResultPage />} />
        <Route path="/dinosaur-test" element={<DinosaurTest />} />
        <Route path="/cat-test" element={<CatTest />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
