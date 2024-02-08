import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./AdminArtistHome.css"
import Footer from "./Footer";


const AdminArtistHome = () => {
    return(
        <div className="ArtistHome">
            <h1 className="ArtistHeader"> Artist Catalog Admin Site</h1>
            <nav>
            <ul >
              
              <li className="image-container">
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
          <Footer/>
        </div>
    )
}

export default AdminArtistHome