import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DatePage from './components/DatePage';
import LovePage from './components/LovePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/date" element={<DatePage />} />
        <Route path="/love" element={<LovePage />} />
      </Routes>
    </Router>
  )
}

export default App
