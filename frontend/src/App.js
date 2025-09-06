import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import TopBar from './components/TopBar/TopBar';
import Home from './pages/Home';
import WhiskAway from './pages/Projects/WhiskAway';
import ToDo from './pages/Projects/ToDo';
import AiWriting from './pages/Projects/AiWriting';
import RandomRetail from './pages/Projects/RandomRetail';
import ArduinoCar from './pages/Projects/ArduinoCar';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <Router>
      <TopBar />
      <SideBar
        github="https://github.com/maaaddy"
        linkedin="https://www.linkedin.com/in/madison-conway-88aa84236/"
        email="mailto:maddylconway@gmail.com"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects/whiskaway' element={<WhiskAway />} />
        <Route path='/projects/todo' element={<ToDo />} />
        <Route path='/projects/aiwriting' element={<AiWriting />} />
        <Route path='/projects/random-retail' element={<RandomRetail />} />
        <Route path='/projects/arduino-car' element={<ArduinoCar />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;