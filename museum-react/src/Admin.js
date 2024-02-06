import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


const Admin = () => {
    
    return (
        <div className="AdminHome">
            <h1>Welcome Admin, how are we altering the catalog today?</h1>
         <div>
        
          <nav>
            <ul>
              
              <li>
                 <Link to = "/Admin/Artist">Artists</Link> 
              </li>
              
              <li>
                <Link to = "/Admin/Art">Artwork</Link>
              </li>
              <li>
                <Link to = "/Admin/Museum">Museums</Link>
              </li>
             
            </ul>
          </nav>
          {/* <Routes>
            
          </Routes> */}
         </div>
          
        </div>
       
      );

    
}

export default Admin