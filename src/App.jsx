import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TestPlayer from "./pages/TestPlayer";
import ResultPage from "./pages/ResultPage";
import DinosaurTest from "./pages/DinosaurTest";

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/:testId" element={<TestPlayer />} />
        <Route path="/test/:testId/result" element={<ResultPage />} />
        <Route path="/dinosaur-test" element={<DinosaurTest />} />
      </Routes>
    </Router>
  );
}
