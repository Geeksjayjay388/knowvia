import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Syllabus from './pages/Syllabus.jsx';
import Dashboard from './pages/Dashboard.jsx';
function App() {
  return (
    <Router>
     <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
    </Router>
    
  );
};

export default App;