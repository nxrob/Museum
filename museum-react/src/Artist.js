import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Artist = () => {

    const { artistName } = useParams();

    const [artistWorks, setArtistWorks] = useState();
    const [artistInfo, setArtistInfo] = useState();


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
            <div class="container my-3 py-3" style={{backgroundColor:"#EFF6F9"}}>
                <h1>{artistName}</h1>
                {artistInfo ? (
                    <div>
                        <b>{artistInfo.dobAndDod}<br />
                            Born in {artistInfo.birthplace}<br /></b>
                        <div >
                            {artistInfo.bio}
                        </div>
                    </div>
                ) : (<p>Loading artist info...</p>)
                }
            </div>


            {artistWorks ? (
                <div>
                    {artistWorks.map((artwork) => (
                        <div>
                            <ul className="list-group" style={{ width: "100%" }}>
                                <li className="list-group-item" style={{backgroundColor:"#EFF9F1"}}>
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
