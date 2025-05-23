import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopBar from './components/TopBar/TopBar';
import Home from './pages/Home';
import WhiskAway from './pages/Projects/WhiskAway';
import ToDo from './pages/Projects/ToDo';
import RandomRetail from './pages/Projects/RandomRetail';
import ArduinoCar from './pages/Projects/ArduinoCar';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects/whiskaway' element={<WhiskAway />} />
        <Route path='/projects/todo' element={<ToDo />} />
        <Route path='/projects/random-retail' element={<RandomRetail />} />
        <Route path='/projects/arduino-car' element={<ArduinoCar />} />
      </Routes>
    </Router>
  );
}

export default App;