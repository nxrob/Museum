import React, {useState} from "react";
import SearchBar from "./SearchBar";
import MuseumAll from "./MuseumAll";
import Artist from "./Artist";
import Artists from "./Artists";

function SearchParent() {
    const [searchMuseums, setSearchMuseums] = useState([]);
    const [searchArt, setSearchArt] = useState([]);
    const [searchArtists, setSearchArtists] = useState([]);

    return(
        <div>
            <SearchBar setSearchMuseums={setSearchMuseums} setSearchArt={setSearchArt} setSearchArtists={setSearchArtists}/>
            <MuseumAll searchMuseums={searchMuseums} searchArt={searchArt} searchArtists={searchArtists}/>
            <Artist searchArt={searchArt}/>
            <Museum searchArt={searchArt} searchArtists ={searchArtists}/>
            <Artists searchArtists = {searchArtists}/>
        </div>
    );
}

export default SearchParent;