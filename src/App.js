// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './zippy/LandingPage';
import DrawingGridPage from './zippy/DrawingGridPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/custom.css'; // Import custom CSS here
import './fontawesome/css/all.min.css';
import './fontawesome/css/brands.min.css';
import './fontawesome/css/duotone.min.css';
import './fontawesome/css/fontawesome.min.css';
import './fontawesome/css/light.min.css';
import './fontawesome/css/regular.min.css';
import './fontawesome/css/sharp-duotone-solid.min.css';
import './fontawesome/css/sharp-light.min.css';
import './fontawesome/css/sharp-regular.min.css';
import './fontawesome/css/sharp-solid.min.css';
import './fontawesome/css/sharp-thin.min.css';
import './fontawesome/css/solid.min.css';
import './fontawesome/css/svg-with-js.min.css';
import './fontawesome/css/thin.min.css';
import './fontawesome/css/v4-font-face.min.css';
import './fontawesome/css/v4-shims.min.css';
import './fontawesome/css/v5-font-face.min.css';


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
