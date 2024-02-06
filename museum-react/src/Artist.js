import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Artist = () => {

    const { artistName } = useParams();

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
            <div class="row mh-25">
                <div class="col">
                    <div class="container my-3 py-3" style={{ backgroundColor: "#EFF6F9" }}>
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
                <div class="col container my-3 ">
                    {artistImage ? (<img src={artistImage} style={{maxHeight:"550px"}}/>) : (<p>Loading artist image</p>)}
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
