import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

function Header({ pageTitle, setSearchArt, toggleArt, artist, setSearchMuseums, toggleMuseum, toggleArtist, location, toggleSearch , setSearchArtists}) {

    const navigate = useNavigate();

    function showSearch (toggleSearch){
        if (toggleSearch) {
            return (
                <SearchBar
                setSearchArt={setSearchArt} toggleArt={toggleArt} artist={artist}
                setSearchMuseums={setSearchMuseums} toggleMuseum={toggleMuseum}
                setSearchArtists={setSearchArtists}
                toggleArtist={toggleArtist} location={location}
                /> 
            )
        } else {
            return "";
        }
    }

    return (
        <div class="rounded-1 row mx-auto mt-2 border" style={{ backgroundColor: "#EFF6F9" }}>
            <span class="col my-2 align-self-center">
                <span class="display-3" style={{ fontFamily: "DM Serif Display" }}>{pageTitle}</span>
            </span>
          
            <div class="w-50 my-4">
                {/* <SearchBar
                setSearchArt={setSearchArt} toggleArt={toggleArt} artist={artist}
                setSearchMuseums={setSearchMuseums} toggleMuseum={toggleMuseum}
                toggleArtist={toggleArtist} location={location}
                /> */}
                {showSearch(toggleSearch)}
            </div>

            <div class="col d-flex flex-row-reverse h-50 align-self-center">
                <button class="btn btn-primary" type="button" style={{ maxWidth: "50px" }} onClick={() => navigate(-1)}>Back</button>
                <button class="btn btn-primary mx-1" type="button" style={{ maxWidth: "55px" }} onClick={() => navigate("/")}>Home</button>
            </div>
        </div>
    );
}
export default Header;

