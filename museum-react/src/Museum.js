import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Museum = () => {

    const { museumName } = useParams();
    const navigate = useNavigate();

    const [museumInfo, setMuseumInfo] = useState();
    const [worksInMuseum, setWorksInMuseum] = useState();

    const images = require.context('../images/museum/', true);
    const museumImage = images(`./${museumName}.jpeg`)

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
            <div class="rounded-1 row mx-auto mt-2 border" style={{ backgroundColor: "#EFF6F9" }}>
                <span class="col my-2 align-self-center">
                    <span class="display-3">𝐌𝐮𝐬𝐞𝐮𝐦𝐬</span>
                </span>
                <div class="col d-flex flex-row-reverse h-50 align-self-center">
                    <button class="btn btn-primary" type="button" style={{ maxWidth: "50px" }} onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
            {worksInMuseum ? (
                <div>


                    <div class="row mh-25 d-flex">
                        <div class="col d-flex">
                            <div class="container my-3 py-3" style={{ backgroundColor: "#EFF9F1" }}>
                                <h1>{museumInfo.name}</h1>
                                <b>{museumInfo.location}</b><br/>
                                <span>
                                    {museumInfo.description}
                                </span>
                            </div>
                        </div>
                        <div class="col my-3">
                            <img src={museumImage} class="img-fluid float-end" />
                        </div>
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
