// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './zippy/LandingPage';
import DrawingGridPage from './zippy/DrawingGridPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/custom.css'; // Import custom CSS here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/draw" element={<DrawingGridPage />} />
      </Routes>
    </Router>
  );
}

export default App;
