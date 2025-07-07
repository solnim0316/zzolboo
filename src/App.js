// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestoEgenPage from './pages/TestoEgenPage';
import CatMbtiPage from './pages/CatMbtiPage';
import KittyVibePage from './pages/KittyVibePage';
import NewTestPage from './pages/NewTestPage';
import DinoTestPage from './pages/DinoTestPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/testo-egen" element={<TestoEgenPage />} />
        <Route path="/cat-mbti" element={<CatMbtiPage />} />
        <Route path="/kittyvibe" element={<KittyVibePage />} />
        <Route path="/new_test" element={<NewTestPage />} />
        <Route path="/dino_test" element={<DinoTestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
