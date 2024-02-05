import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'; 
import Museum from './Museum';
import AddMuseum from './AddMuseum'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/museums" element={<Museum />} />
          <Route path="/addMuseum" element={<AddMuseum />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

