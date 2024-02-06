import React, {useState} from "react";
import SearchBar from "./SearchBar";
import MuseumAll from "./MuseumAll";

function MuseumSearchParent() {
    const [searchMuseums, setSearchMuseums] = useState([]);

    return(
        <div>
            <SearchBar setSearchMuseums={setSearchMuseums}/>
            <MuseumAll searchMuseums={searchMuseums}/>
        </div>
    );
}

export default MuseumSearchParent;