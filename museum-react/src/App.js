import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'; 
import Museum from './Museum';
import MuseumAll from './MuseumAll';
import Admin from './Admin';

import 'bootstrap/dist/css/bootstrap.min.css';
import Artist from './Artist';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/museums" element={<MuseumAll />} />
          <Route path="/museums/:museumName" element={<Museum />} />
          <Route path="/artists/:artistName" element={<Artist />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

