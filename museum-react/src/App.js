import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'; 
import Museum from './Museum';
import UpdateMuseum from './UpdateMuseum'
import AddMuseum from './AddMuseum'
import UpdateArt from './UpdateArt'
import UpdateArtist from './UpdateArtist'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/museums" element={<Museum />} />
          <Route path="/updateMuseum" element={<UpdateMuseum />} />
          <Route path="/addMuseum" element={<AddMuseum />} />
          <Route path="/updateArt" element={<UpdateArt />} />
          <Route path="/updateArtist" element={<UpdateArtist />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

