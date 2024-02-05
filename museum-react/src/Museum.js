import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Museum = () => {

    const { museumName } = useParams();

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
        <div>
            {worksInMuseum ? (
                <div>
                    <h1>{museumInfo.name}</h1>
                    <h5><i>{museumInfo.location}</i></h5>
                    {worksInMuseum.map((artwork) => (
                        <div>
                            <ul className="list-group" style={{width:"75%"}}>
                                <li className="list-group-item"><b class="text-white bg-dark">{artwork.title}</b></li>
                                <ul class="">
                                    <li className="list-group">
                                        <span><b>Artist: </b>{artwork.artistName}</span>
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
                    ))};
                </div>
            ) : (
                <p>Loading museum...</p>
            )}
        </div>
    );
};

export default Museum;
