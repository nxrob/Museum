import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from './Header';

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
            <Header pageTitle={"Museums"}/>
            <div id="content">
                {museumInfo ? (
                    <div class="row mh-25 d-flex">
                        <div class="col d-flex">
                            <div class="container my-3 py-3" style={{ backgroundColor: "#EFF9F1" }}>
                                <p class="h1">
                                    {museumInfo.name}
                                    {/* Add this for museums that are in at least 3 guides? */}
                                    <h5 style={{ display: "inline-block" }} class="align-middle mx-2">
                                        <div class="badge bg-warning">Top Rated</div>
                                    </h5>
                                </p>
                                <b>{museumInfo.location}</b><br />
                                <span>
                                    {museumInfo.description}
                                </span>
                            </div>
                        </div>
                        <div class="col my-3">
                            <img src={museumImage} class="img-fluid float-end" />
                        </div>
                    </div>
                ) : (
                    <p>Loading museum information...</p>
                )}

                {worksInMuseum ? (
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col ps-0">
                                {museumInfo ? (
                                    <div class="py-3 ps-3 float-sm-end rounded border" style={{ backgroundColor: "#EFF6F9", width:"48.7%" }}>
                                        <b>{museumInfo.name}</b> appears in the following guides: <br/>
                                        <span>
                                            Guide 1<br/>
                                            Guide 2<br/>
                                            Guide 3<br/>
                                            Guide 4<br/>
                                        </span>
                                    </div>
                                ) : (
                                    <p>Loading museum information...</p>
                                )}
                                {worksInMuseum.map((artwork) => (
                                    <ul className="list-group pe-4 ">
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
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading works of art...</p>
                )}
            </div>
        </div >
    );
};

export default Museum;
