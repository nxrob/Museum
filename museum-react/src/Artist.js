import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Artist = () => {

    const { artistName } = useParams();
    const navigate = useNavigate();

    const [artistWorks, setArtistWorks] = useState();
    const [artistInfo, setArtistInfo] = useState();
    const [museumWithMostWorks, setMuseumWithMostWorks] = useState();

    const images = require.context('../images/artist/', true);
    const artistImage = images(`./${artistName}/artist.jpeg`)

    useEffect(() => {
        const getArtistWorks = async () => {
            try {
                const response = await fetch('http://localhost:8080/artist/' + artistName);
                const data = await response.json();
                console.log(data);
                setArtistWorks(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        const getArtistInfo = async () => {
            try {
                const response = await fetch('http://localhost:8080/artist/' + artistName + '/info');
                const data = await response.json();
                console.log(data);
                setArtistInfo(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        const getMuseumWithMostWorks = async () => {
            try {
                const response = await fetch('http://localhost:8080/artist/' + artistName + '/mostworks');
                const data = await response.json();
                setMuseumWithMostWorks(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        getArtistWorks();
        getArtistInfo();
        getMuseumWithMostWorks();
    }, []);

    return (
        <div class="container w-50">
            <Header pageTitle={"Artists"} />
            <div class="row mh-25 d-flex">
                <div class="col d-flex">
                    <div class="container my-3 py-3" style={{ backgroundColor: "#EFF9F1" }}>
                        {artistInfo ? (
                            <div>
                                <h1>{artistInfo.name}</h1>
                                <b>{artistInfo.dobAndDod}</b><br />
                                <b>Born in {artistInfo.birthplace}</b><br />
                                {artistInfo.bio}
                                <hr/>
                                <b>Did you know?</b><br />
                                {museumWithMostWorks ? (
                                    <div>
                                        <p>Currently, the <Link to={"/museums/"+museumWithMostWorks.name}>{museumWithMostWorks.name}</Link> holds more works by {artistInfo.name} than any other museum in our catalogue.</p>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                                
                            </div>
                        ) : (<p>Loading artist info...</p>)
                        }
                    </div>
                </div>
                <div class="col my-3">
                    <img src={artistImage} class="img-fluid float-end" />
                </div>
            </div>

            {artistWorks ? (
                <div>
                    {artistWorks.map((artwork) => (
                        <div>
                            <ul className="list-group" style={{ width: "100%" }}>
                                <li className="list-group-item" style={{ backgroundColor: "#EFF9F1" }}>
                                    <b>{artwork.title}</b>
                                </li>
                                <ul class="py-3">
                                    <li className="list-group">
                                        <span><b>Year: </b>{artwork.yearOf}</span>
                                    </li>
                                    <li className="list-group">
                                        <span><b>Location: </b>{artwork.location}</span>
                                    </li>
                                    <li className="list-group">
                                        <span><b>Medium: </b>{artwork.medium}</span>
                                    </li>
                                    <li className="list-group">
                                        <span><b>Style: </b>{artwork.style}</span>
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
                <p>Loading artist's works...</p>
            )
            }
        </div >
    );
};

export default Artist;
