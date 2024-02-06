import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AdminDelete from "./AdminDelete";
import AdminCreate from "./AdminCreate";
import AdminUpdate from "./AdminUpdate";

const Admin = () => {
    
    return (
       
    
        <div className="AdminHome">
            <h1>Welcome Admin, how are we altering the catalog today?</h1>
         <div>
        
          <nav>
            <ul>
              
              <li>
                 <Link to = "/Create">AdminCreate</Link> 
              </li>
              
              <li>
                <Link to = "/Update">AdminUpdate</Link>
              </li>
              <li>
                <Link to = "/Delete">AdminDelete</Link>
              </li>
             
            </ul>
          </nav>
          <Routes>
            <Route path = "/admin/create" element = {<AdminCreate />}/>
            <Route path = "/admin/update" element = {<AdminUpdate/>}/>
            <Route path = "/admin/delete" element = {<AdminDelete/>}/>
          </Routes>
         </div>
          
        </div>
       
      );

    
}

export default Admin