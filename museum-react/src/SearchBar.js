import React, { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from "@mui/material";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const [artists, setArtists] = useState("");
    const [arts, setArts] = useState("");
    const [allNames, setAllNames ]= useState("");

    const fetchAllNames = async () => {
        let names = new Array;
        let tempArtists = new Array;
        try {
            const response = await fetch("http://localhost:8080/artist");
            const data = await response.json();
            tempArtists = data;
        }
        catch (error) {
            console.error('Error fetching data: ', error);
        }
        tempArtists.forEach(element => {
            names.push(element.name);
            console.log(element.name);
        });

        let tempArtworks = new Array;

        try {
            const response = await fetch("http://localhost:8080");
            const data = await response.json();
            tempArtworks = data;
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
        tempArtworks.forEach(element => {
            names.push(element.title);
            console.log(element.title);
        });

        var uniqNames = [...new Set(names)];
        setAllNames(uniqNames);

    }
   

    useEffect(() => {
        fetchAllNames();
    }, []);

    

    function updateInput(e) {
        e.preventDefault()
        setInput(e.target.value);
        console.log('updating input');
        
        
    }

    const search = async () => {
        
        try {
            const response = await fetch("http://localhost:8080/artist?name=" + input);
            const data = await response.json();
            setArtists(data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
        try {
            const response = await fetch("http://localhost:8080?filter=" + input)
            const data = await response.json();
            setArts(data);
        }
        catch (error) {
            console.error('Error Fetching Data', error)
        }
    };


    return (
        <h1>
            <div>
               inpyt dsadsad {input}
                <Autocomplete
                disablePortal
                id="auto-search"
                sx={{ width: 300}}
                options={allNames}
                freeSolo
                value={input}
                onInput={updateInput}
                onSelect={updateInput}
                onKeyDown={(e) =>
                   { if(e.key==='Enter'){
                        search();
                    }
                }
                }
                
                renderInput={(params) => <TextField {...params} label="Search Art/Artist"/>}
                />
               
                <button
                    
                    onClick={search}
                    
                >Search</button>
                
            </div>

            <div2>
                
                {artists ? (
                    <div>
                        Artists: <br/>
                        ---------------------------------- 
                        {artists.map(artist => 
                            <div >
                                <b>Name: </b> {artist.name} <br />
                                <b>Id: </b> {artist.id} <br />
                                ---------------------------------------------
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}

            </div2>
            <div3>
            {arts ? (
                    <div>
                        Artworks: <br/>
                        ---------------------------------- 
                        {arts.map(art => 
                            <div >
                                <b>Name: </b> {art.title} <br />
                                <b>Id: </b> {art.id} <br />
                                ---------------------------------------------
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div3>
        </h1>

    );
};
export default SearchBar;
