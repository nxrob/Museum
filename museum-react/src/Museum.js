import React, { useState, useEffect } from 'react';

const Museum = () => {

    const [museums, setMuseums] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/museum');
                const data = await response.json();
                setMuseums(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Museum Information</h2>
            {museums ? (
                <div>
                        <div>
                            <b>Name: </b> {museum.name} <br />
                            <b>Location: </b> {museum.location} <br />
                            ---------------------------------------------
                        </div>
                </div>
            ) : (
                <p>Loading museum...</p>
            )}
        </div>
    );
};

export default Museum;
