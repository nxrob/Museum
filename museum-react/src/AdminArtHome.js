import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./AdminArtHome.css"
import ImageGallery from "./ImageGallery";



const AdminArtHome = () => {
    return(
      // <div className="adminContainer">
         <div class="container w-75">
        
    
       <Header className="header"  pageTitle={"Artwork"} toggleSearch={false}/>
    
         
           
            <nav className = "navLinks">
           
                <Link to = "/Admin/Art/Create">Create</Link> 
              
                <Link to = "/Admin/Art/Update">Update</Link>
              
                <Link to = "/Admin/Art/Delete">Delete</Link>
             
                <Link to = "/Admin/Art/Read">Read</Link>
            
          </nav>
      
          <ImageGallery/>
          <Footer/>
        </div>
    )
}

export default AdminArtHome