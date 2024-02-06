import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SearchBar from './SearchBar';

const Museum = () => {

    const { museumName } = useParams();

    const [searchArt, setSearchArt] = useState([]);
    const [museumInfo, setMuseumInfo] = useState();
    const [worksInMuseum, setWorksInMuseum] = useState();
    console.log("Rendering... (museumInfo = " + museumInfo + ")")

    useEffect(() => {
        const getMuseumInfo = async () => {
            try {
                const response = await fetch('http://localhost:8080/museum/' + museumName);
                const data = await response.json();
                setMuseumInfo(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const getWorksInMuseum = async () => {
            console.log("Getting works in museum")
            try {
                const response = await fetch('http://localhost:8080/museum/' + museumName + '/works');
                const data = await response.json();
                setWorksInMuseum(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getMuseumInfo();
        getWorksInMuseum();


    }, []);

    return (
        <div class="container w-50">
            <SearchBar setSearchArt={setSearchArt} filter="art" location={museumName}/>
            {worksInMuseum ? (
                <div>
                    <div class="container my-3 py-3" style={{ backgroundColor: "#EFF6F9" }}>
                        <h1>{museumInfo.name}</h1>
                        <b>{museumInfo.location}</b>
                    </div>
                    
                    {worksInMuseum.map((artwork) => (
                        <div>
                            <ul className="list-group" style={{ width: "100%" }}>
                                <li className="list-group-item" style={{ backgroundColor: "#EFF9F1" }}>
                                    <b>{artwork.title}</b>
                                </li>
                                <ul class="py-3">
                                    <li className="list-group">
                                        <span><b>Artist: </b><Link to={"/artists/" + artwork.artistName}>{artwork.artistName}</Link></span>
                                    </li>
                                    <li className="list-group">
                                        <span><b>Year: </b>{artwork.yearOf}</span>
                                    </li>
                                    <li className="list-group">
                                        <span><b>Medium: </b>{artwork.medium}</span>
                                    </li>
                                    <li className="list-group">
                                        <span><b>Description: </b>{artwork.description}</span>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading museum...</p>
            )}
        </div>
    );
};

export default Museum;
