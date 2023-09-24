import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Portfolio from './Portfolio';
import UnderConstruction from './UnderConstruction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
