import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Museum from './Museum';
import SearchBar from './SearchBar';
import MuseumAll from './MuseumAll';
import Admin from './Admin';
import AddArtist from "./AddArtist";
import UpdateArtist from "./UpdateArtist";
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
import Artists from './Artists';
import DataAnalysisPage from './DataAnalysisPage';
import AddMuseum from './AddMuseum';
import AddPainting from './AddPainting';
import AddSculpture from './AddSculpture';
import UpdateMuseum from './UpdateMuseum';
import UpdateArt from './UpdateArt';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/museums" element={<MuseumAll />} />
          <Route path="/museums/:museumName" element={<Museum />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:artistName" element={<Artist />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/data-analysis" Component={DataAnalysisPage} />

          <Route path = "/Admin/Artist" element = {<AdminArtistHome/>}/>
          <Route path = "/Admin/Artist/Create" element = {<AddArtist />}/>
          <Route path = "/Admin/Artist/Update" element = {<UpdateArtist/>}/>
          <Route path = "/Admin/Artist/Delete" element = {<ArtistDelete/>}/>
          <Route path = "/Admin/Artist/Read" element = {<ReadArtist/>}/>

          <Route path = "/Admin/Art" element = {<AdminArtHome/>}/>
          <Route path = "/Admin/Art/Delete" element = {<ArtDelete/>}/>
          <Route path = "/Admin/Art/Read" element = {<ReadArt/>}/>
          <Route path = "/Admin/Art/Create/Painting" element = {<AddPainting/>}/>
          <Route path = "/Admin/Art/Create/Sculpture" element = {<AddSculpture/>}/>
          <Route path = "/Admin/Art/Update" element = {<UpdateArt/>}/>
        

          
          <Route path = "/Admin/Museum" element = {<AdminMuseumHome/>}/>
          <Route path = "/Admin/Museum/Delete" element = {<MuseumDelete />}/>
          <Route path = "/Admin/Museum/Read" element = {<ReadMuseum/>}/>
          <Route path = "/Admin/Museum/Create" element = {<AddMuseum/>}/>
          <Route path = "/Admin/Museum/Update" element = {<UpdateMuseum/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}
export default App;