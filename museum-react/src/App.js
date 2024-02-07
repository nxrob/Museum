import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Museum from './Museum';
import SearchBar from './SearchBar';
import MuseumAll from './MuseumAll';
import Admin from './Admin';
import AdminCreate from "./ArtistCreate";
import AdminUpdate from "./ArtistUpdate";
import ReadArtist from './ReadArtists';
import ArtistDelete from './ArtistDelete';
import ArtDelete from './ArtDelete';
import AdminArtistHome from './AdminArtistHome';
import AdminArtHome from './AdminArtHome';
import AdminMuseumHome from './AdminMuseumHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Artist from './Artist';
import MuseumDelete from './MuseumDelete';
import ReadMuseum from './ReadMuseum';
import ReadArt from './ReadArt';
import DataAnalysisPage from './DataAnalysisPage';
import GuideAll from './GuideAll';
import Guide from './Guide';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/museums" element={<MuseumAll />} />
          <Route path="/museums/:museumName" element={<Museum />} />
          <Route path="/artists/:artistName" element={<Artist />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/data-analysis" Component={DataAnalysisPage} />

          <Route path = "/Admin/Artist" element = {<AdminArtistHome/>}/>
          <Route path = "/Admin/Artist/Create" element = {<AdminCreate />}/>
          <Route path = "/Admin/Artist/Update" element = {<AdminUpdate/>}/>
          <Route path = "/Admin/Artist/Delete" element = {<ArtistDelete/>}/>
          <Route path = "/Admin/Artist/Read" element = {<ReadArtist/>}/>

          <Route path = "/Admin/Art" element = {<AdminArtHome/>}/>
          <Route path = "/Admin/Art/Delete" element = {<ArtDelete/>}/>
          <Route path = "/Admin/Art/Read" element = {<ReadArt/>}/>

          
          <Route path = "/Admin/Museum" element = {<AdminMuseumHome/>}/>
          <Route path = "/Admin/Museum/Delete" element = {<MuseumDelete />}/>
          <Route path = "/Admin/Museum/Read" element = {<ReadMuseum/>}/>

          <Route path = "/guides" element = {<GuideAll/>}/>
          <Route path = "/guides/:guideName" element = {<Guide />}/>
          
        </Routes>
      </div>
    </Router>
  );
}
export default App;