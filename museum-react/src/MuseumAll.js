import React, { useState, useEffect } from 'react';

const MuseumAll = () => {

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
          {museums.map((museum) => (
            <div>
              <b>Name: </b> {museum.name} <br />
              <b>Location: </b> {museum.location} <br />
              <b>Link: </b> <a id="museumLink" href="">Click me</a>
              ---------------------------------------------
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MuseumAll;
