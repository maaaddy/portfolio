import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopBar from './components/TopBar/TopBar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;