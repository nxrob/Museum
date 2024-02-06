import React, { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Button, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { useAsyncError } from "react-router";
import { Form } from "react-router-dom";
import { waitFor } from "@testing-library/react";

const SearchBar = ({setSearchMuseums}) => {
    const [input, setInput] = useState("");
    const [artists, setArtists] = useState("");
    const [arts, setArts] = useState("");
    //const [searchMuseums, setSearchMuseums] = useState("");
    const [allNames, setAllNames] = useState("");
    const [searchFilter, setSearchFilter] = useState("");

    useEffect(() => {
        fetchAllNames();
        
    }, []);


    const fetchAllNames = async () => {



        let names = new Array;
        console.log(allNames);


        if (searchFilter == 'all' || searchFilter == 'artist') {
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
            });
        }
        if (searchFilter == 'all' || searchFilter == 'artwork') {

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
            });
        }
        if (searchFilter == 'all' || searchFilter == 'museum') {
            let tempMuseums = new Array;
            try {
                const response = await fetch("http://localhost:8080/museum");
                const data = await response.json();
                tempMuseums = data;
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
            tempMuseums.forEach(element => {
                names.push(element.name);
            })
        }

        var uniqNames = [...new Set(names)];
        setAllNames(uniqNames);

    }



    function updateInput(e) {
        e.preventDefault()

        setInput(e.target.value);
        console.log('updating input');



    }

    // function handleInput(e) {
    //     e.preventDefault()
    //     setSearchFilter(e.target.value);


    //     fetchAllNames();
    // }

    const search = async () => {
        console.log('Searching')
       // console.log('dsdsa' + searchMuseums);

        try {
            const response = await fetch("http://localhost:8080/artist?name=" + input);
            const data = await response.json();
            setArtists(data);
        }
        catch (error) {
            console.error('Error fetching Data ', error);
        }
        try {
            const response = await fetch("http://localhost:8080?filter=" + input);
            const data = await response.json();
            setArts(data);
        }
        catch (error) {
            console.error('Error Fetching Data ', error)
        }
        try {
            const response = await fetch("http://localhost:8080/museum?name=" + input);
            const data = await response.json();
            setSearchMuseums(data);
        }
        catch (error) {
            console.error('Error Fetching Data ', error)
        }
        
    };


    return (
        <h1>
            
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Autocomplete
                    disablePortal
                    disableClearable
                    id="auto-search"
                    sx={{ width: 400 }}
                    options={allNames}
                    freeSolo
                    value={input}
                    onInput={updateInput}
                    onSelect={updateInput}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            search();
                        }
                    }
                    }

                    renderInput={(params) => <TextField {...params} label="Search" />}
                />
                <Button
                    sx={{ height: 58, 
                    width: 58}}
                    onClick={search}

                >🔍</Button>

            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Search By:
                <RadioGroup
                    defaultValue="all"
                    name="search-filter-group"
                    row
                >

                    <FormControlLabel value="artwork" control={<Radio />} label="Artwork" onChange={handleInput} />
                    <FormControlLabel value="artist" control={<Radio />} label="Artist" onChange={handleInput} />
                    <FormControlLabel value="museum" control={<Radio />} label="Museum" onChange={handleInput} />
                    <FormControlLabel value="all" control={<Radio />} label="All" onChange={handleInput} />

                </RadioGroup>
                ddjsdk, {searchFilter} */}
            </div>

            {/* <div2>

                {artists ? (
                    <div>
                        Artists: <br />
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
                        Artworks: <br />
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
            <div4>
                {museums ? (
                    <div>
                        Museum: <br />
                        ----------------------------------
                        {museums.map(museum =>
                            <div >
                                <b>Name: </b> {museum.name} <br />
                                <b>Id: </b> {museum.id} <br />
                                ---------------------------------------------
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div4> */}
        </h1>

    );
};
export default SearchBar;

