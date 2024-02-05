import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'; 
import Museum from './Museum';
import Admin from './Admin';
import AdminDelete from "./AdminDelete";
import AdminCreate from "./AdminCreate";
import AdminUpdate from "./AdminUpdate";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/museums" element={<Museum />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path = "/Admin/create" element = {<AdminCreate />}/>
          <Route path = "/Admin/update" element = {<AdminUpdate/>}/>
          <Route path = "/Admin/delete" element = {<AdminDelete/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;

