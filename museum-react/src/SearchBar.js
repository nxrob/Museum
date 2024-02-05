import React, { useState } from "react";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const [test, setTest] = useState("");
    const [artists, setArtists] = useState("");
    const [arts, setArts] = useState("");
    const [display, setDisplay] = useState("");

    
    

    

    function updateInput(e) {
        e.preventDefault()
        setInput(e.target.value);
        
        
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
                
                <input
                    type="text"
                    placeholder="Search Artist/Art"
                    onChange={updateInput}
                    value={input}
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
