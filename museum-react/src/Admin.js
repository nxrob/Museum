import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import artistImage from "./images/artist Image.jpg"
import artworkImage from "./images/1000_F_259692993_uUOLDS9ISn2FRljd9LpI6YYKEx2HM4v7.jpg"
import museumImage from "./images/moder-art-exhibit-mallorca-vertical-people-watch-paintings-gallery-nit-de-night-event-palma-de-98934513.webp"
import "./Admin.css"
import Footer from "./Footer";
import Header from "./Header";
import ImageGallery from "./ImageGallery";


const Admin = () => {
    
    return (
        <div className="adminContainer">
            
         <div>
         <Header/>
        
          <nav className = "nav-links">
          
                 <Link to = "/Admin/Artist">
                  <div className = "image-container">
                  <img src = {artistImage} alt="Artist" style={{height: '380px'}}/>
                  <div className="artistText"> Artist Catalogue</div>
             
                  </div>
                 
                 </Link> 
             
                <Link to = "/Admin/Art">
                <div className = "image-container">
                <img src = {artworkImage} alt = "Artwork" className="artworkImage"/>
                <div className="artistText"> Artwork Catalogue</div>
                </div>
                </Link>
              
                <Link to = "/Admin/Museum">
                <div className = "image-container">
                <img src = {museumImage} alt = "Museum" className = "museumImage" />
                <div className="artistText"> Museum Catalogue</div>
                </div>
                </Link>
            
          </nav>
        
         
         </div>
         <ImageGallery/>
         <Footer/>
          
        </div>
       
      );

    
}

export default Admin