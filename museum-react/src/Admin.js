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
                 <Link to = "/Admin/Create">Create</Link> 
              </li>
              
              <li>
                <Link to = "/Admin/update">Update</Link>
              </li>
              <li>
                <Link to = "/Admin/delete">Delete</Link>
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