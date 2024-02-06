import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Artist = () => {

    const { artistName } = useParams();
    const navigate = useNavigate();

    const [artistWorks, setArtistWorks] = useState();
    const [artistInfo, setArtistInfo] = useState();

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
        getArtistWorks();
        getArtistInfo();
    }, []);

    return (
        <div class="container w-50">
            <div class="rounded-1 row mx-auto mt-2 border" style={{ backgroundColor: "#EFF6F9" }}>
                <span class="col my-2 align-self-center">
                    <span class="display-3">𝐓𝐡𝐞 𝐆𝐢𝐭𝐠𝐨𝐨𝐝 𝐌𝐮𝐬𝐞𝐮𝐦</span>
                </span>
                <div class="col d-flex flex-row-reverse h-50 align-self-center">
                    <button class="btn btn-primary" type="button" style={{ maxWidth: "50px" }} onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
            <div class="row mh-25 d-flex">
                <div class="col d-flex">
                    <div class="container my-3 py-3" style={{ backgroundColor: "#EFF9F1" }}>
                        {artistInfo ? (
                            <div>
                                <h1>{artistName}</h1>
                                <b>{artistInfo.dobAndDod}</b><br />
                                <b>Born in {artistInfo.birthplace}</b><br />
                                {artistInfo.bio}
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
                <p>Loading artist's works...</p>
            )
            }
        </div >
    );
};

export default Artist;
