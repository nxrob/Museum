import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'; 
import Museum from './Museum';
import MuseumAll from './MuseumAll';
import Admin from './Admin';
import AdminCreate from "./ArtistCreate";
import AdminUpdate from "./ArtistUpdate";
import ReadArtist from './ReadArtists';
import ArtistDelete  from  './ArtistDelete';
import ArtDelete from './ArtDelete';
import AdminArtistHome from './AdminArtistHome';
import AdminArtHome from './AdminArtHome';
import AdminMuseumHome from './AdminMuseumHome';
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
          <Route path = "/Admin/Artist/Create" element = {<AdminCreate />}/>
          <Route path = "/Admin/Artist/Update" element = {<AdminUpdate/>}/>
          <Route path = "/Admin/Artist/Delete" element = {<ArtistDelete/>}/>
          <Route path = "/Admin/Artist/Read" element = {<ReadArtist/>}/>
          <Route path = "/Admin/Art/Delete" element = {<ArtDelete/>}/>
          <Route path = "/Admin/Art" element = {<AdminArtHome/>}/>
          <Route path = "/Admin/Museum" element = {<AdminMuseumHome/>}/>
          <Route path = "/Admin/Artist" element = {<AdminArtistHome/>}/>

        </Routes>
      </div>
    </Router>
  );
}
export default App;

