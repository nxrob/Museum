import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


const AdminMuseumHome = () => {
    return(
        <div>
            <h1>Museum Catalog Admin Site</h1>
            <nav>
            <ul>
              
              <li>
                 <Link to = "/Admin/Museum/Create">Create</Link> 
              </li>
              
              <li>
                <Link to = "/Admin/Museum/Update">Update</Link>
              </li>
              <li>
                <Link to = "/Admin/Museum/Delete">Delete</Link>
              </li>
        
              <li>
                <Link to = "/Admin/Museum/Read">Read</Link>
              </li>
             
            </ul>
          </nav>
        </div>
    )
}

export default AdminMuseumHome