import React, { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Button, RadioGroup, Radio, FormControlLabel } from "@mui/material";


const SearchBar = ({ setSearchArtists, setSearchArt, setSearchMuseums, filter, location, artist }) => {
    const [input, setInput] = useState("");
    //const [artists, setArtists] = useState("");
    //const [arts, setArts] = useState("");
    //const [searchMuseums, setSearchMuseums] = useState("");
    const [allNames, setAllNames] = useState("");
    const [searchFilter, setSearchFilter] = useState(filter);

    useEffect(() => {
        fetchAllNames();
    }, []);


    const fetchAllNames = async () => {



        let names = new Array;
        console.log(allNames);


        if (searchFilter == 'all' || searchFilter == 'artist' || searchFilter == 'artistArt') {
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
                    console.log('sfjhssfjh')
                    var isPresent = false;
                    const response = await fetch("http://localhost:8080?filter=" + element.name)
                    const data = await response.json();
                    data.forEach(element => {
                        if ((element.location).includes(location)) {
                            isPresent = true;
                            console.log('added');
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
                console.log(names, 'names after artist call')
            }
        }
        if (searchFilter == 'all' || searchFilter == 'art' || searchFilter == 'artistArt') {

            let tempArtworks = new Array;
            console.log('fdsfs')
            console.log(artist, 'this is artist');

            try {
                const response = await fetch("http://localhost:8080");
                const data = await response.json();
                tempArtworks = data;
                console.log(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
            if (location != null) {
                
                tempArtworks.forEach(element => {
                    var isPresent = false;
                    // console.log(element.title);
                    // console.log(element.location);

                    if ((element.location).includes(location)) {
                        isPresent = true;
                    }


                    // console.log(isPresent, 'present');
                    if (isPresent) {
                        names.push(element.title);
                    }
                });

            }


            else if(artist != null) {
                console.log('in here')
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
        console.log(uniqNames);
        setAllNames(uniqNames);

    }



    function updateInput(e) {
        e.preventDefault()

        setInput(e.target.value);
        console.log('updating input');



    }



    const search = async () => {


        if (searchFilter == 'all' || searchFilter == 'artist' || searchFilter == 'artistArt') {
            try {
                const response = await fetch("http://localhost:8080/artist?name=" + input);
                const data = await response.json();
                setSearchArtists(data);
            }
            catch (error) {
                console.error('Error fetching Data ', error);
            }
        }
        if (searchFilter == 'all' || searchFilter == 'art' || searchFilter == 'artistArt') {
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
        if (searchFilter == 'all' || searchFilter == 'museum') {
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

