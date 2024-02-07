import React, { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Button, RadioGroup, Radio, FormControlLabel } from "@mui/material";


const SearchBar = ({ setSearchArtists, setSearchArt, setSearchMuseums, toggleArt, toggleArtist, toggleMuseum, location, artist }) => {
    const [input, setInput] = useState("");
    const [allNames, setAllNames] = useState("");


    useEffect(() => {
        fetchAllNames();
    }, []);


    const fetchAllNames = async () => {



        let names = new Array;
        console.log(allNames);


        if (toggleArt) {
            let tempArtists = new Array;
            try {
                const response = await fetch("http://localhost:8080/artist");
                const data = await response.json();
                tempArtists = data;
            }
            catch (error) {
                console.error('Error fetching data: ', error);
            }

            if (location !== null) {
                tempArtists.forEach(async element => {
                    var isPresent = false;
                    const response = await fetch("http://localhost:8080?filter=" + element.name)
                    const data = await response.json();
                    data.forEach(element => {
                        if ((element.location).includes(location)) {
                            isPresent = true;
                        }
                    })
                    console.log(isPresent, element.name);
                    if (isPresent) {
                        names.push(element.name);
                    }
                })
            }
            else {
                tempArtists.forEach(element => {
                    names.push(element.name);
                });
            }
        }
        if (toggleArtist) {

            let tempArtworks = new Array;
           
            try {
                const response = await fetch("http://localhost:8080");
                const data = await response.json();
                tempArtworks = data;
            } catch (error) {
                console.error('Error fetching data: ', error);
            }

            if (location != null) {
                
                tempArtworks.forEach(element => {
                    var isPresent = false;
                    if ((element.location).includes(location)) {
                        isPresent = true;
                    }
                    if (isPresent) {
                        names.push(element.title);
                    }
                });
            }

            else if(artist != null) {
                tempArtworks.forEach(element => {
                    var isPresent = false;
                    if ((element.artistName) == (artist)) {
                        isPresent = true;
                    }
                    console.log(element.artistName);

                    if (isPresent) {
                        names.push(element.title);
                    }
                });
            }

            else {

                tempArtworks.forEach(element => {
                    console.log(element.artistName);
                    names.push(element.title);
                })
            }
        }

        if (toggleMuseum) {
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
    }



    const search = async () => {


        if (toggleArtist) {
            try {
                const response = await fetch("http://localhost:8080/artist?name=" + input);
                const data = await response.json();
                setSearchArtists(data);
            }
            catch (error) {
                console.error('Error fetching Data ', error);
            }
        }
        if (toggleArt) {
            try {
                const response = await fetch("http://localhost:8080?filter=" + input);
                const data = await response.json();

                if (location != null) {
                    let tempData = new Array;

                    data.forEach(element => {
                        var isPresent = false;

                        if ((element.location).includes(location)) {
                            isPresent = true;
                        }
                        if (isPresent) {
                            tempData.push(element);
                        }
                    });

                    setSearchArt(tempData);
                }

                else if(artist != null){
                    let tempData = new Array;
                    data.forEach(element => {
                        var isPresent = false;

                        if((element.artistName) == artist){
                            isPresent = true;
                        }
                        if(isPresent){
                            tempData.push(element);
                        }
                    });
                    setSearchArt(tempData);
                }
                
                else {
                    setSearchArt(data);
                }

            }
            catch (error) {
                console.error('Error Fetching Data ', error)
            }
        }
        if (toggleMuseum) {
            try {
                const response = await fetch("http://localhost:8080/museum?name=" + input);
                const data = await response.json();
                setSearchMuseums(data);
            }
            catch (error) {
                console.error('Error Fetching Data ', error)
            }
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
                    sx={{
                        height: 58,
                        width: 58
                    }}
                    onClick={search}

                >🔍</Button>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            </div>

        </h1>

    );
};
export default SearchBar;

