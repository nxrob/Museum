import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


const AdminArtistHome = () => {
    return(
        <div>
            <h1>Artist Catalog Admin Site</h1>
            <nav>
            <ul>
              
              <li>
                 <Link to = "/Admin/Artist/Create">Create</Link> 
              </li>
              
              <li>
                <Link to = "/Admin/Artist/Update">Update</Link>
              </li>
              <li>
                <Link to = "/Admin/Artist/Delete">Delete</Link>
              </li>
        
              <li>
                <Link to = "/Admin/Artist/Read">Read</Link>
              </li>
             
            </ul>
          </nav>
        </div>
    )
}