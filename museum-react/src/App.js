import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'; 
import Museum from './Museum';
import MuseumAll from './MuseumAll';
import Admin from './Admin';
import AdminCreate from "./AdminCreate";
import AdminUpdate from "./AdminUpdate";
import ReadArtist from './ReadArtists';
import ArtistDelete  from  './ArtistDelete';
import ArtDelete from './ArtDelete';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/museums" element={<MuseumAll />} />
          <Route path="/museums/:museumName" element={<Museum />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path = "/Admin/create" element = {<AdminCreate />}/>
          <Route path = "/Admin/update" element = {<AdminUpdate/>}/>
          <Route path = "/Admin/artist/delete" element = {<ArtistDelete/>}/>
          <Route path = "/Admin/read" element = {<ReadArtist/>}/>
          <Route path = "/Admin/art/delete" element = {<ArtDelete/>}/>

        </Routes>
      </div>
    </Router>
  );
}
export default App;

