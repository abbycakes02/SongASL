import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import DetectionPage from './DetectionPage';
import SecondPage from './SecondPage';

function App() {
  return (
    <Router>
      <Routes>   
        <Route path="/" element={<MainPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/detection" element={<DetectionPage />} />
        <Route path="/detection" element={<DetectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;