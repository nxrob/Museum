import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";



const AdminArtHome = () => {
    return(
      <div className="adminContainer">
    
       <Header/>
        <div className="ArtistHome">
         
            <h1 className="ArtworkHeader">Artwork Catalog Admin Site</h1>
            <nav>
            <ul>
              
              <li>
                 <Link to = "/Admin/Art/Create">Create</Link> 
              </li>
              
              <li>
                <Link to = "/Admin/Art/Update">Update</Link>
              </li>
              <li>
                <Link to = "/Admin/Art/Delete">Delete</Link>
              </li>
        
              <li>
                <Link to = "/Admin/Art/Read">Read</Link>
              </li>
             
            </ul>
          </nav>
          </div>
          <Footer/>
        </div>
    )
}

export default AdminArtHome