import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Syllabus from './pages/Syllabus.jsx';
function App() {
  return (
    <Router>
     <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/syllabus" element={<Syllabus />} />
     </Routes>
    </Router>
    
  );
};

export default App;