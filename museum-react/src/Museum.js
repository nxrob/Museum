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
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label class="form-check-label" for="flexRadioDefault2">
            Default checked radio
          </label>
      </div>
      <h2>Museum Information</h2>
      {museums ? (
        <div>
          {museums.map((museum) => (
            <div>
              <b>Name: </b> {museum.name} <br />
              <b>Location: </b> {museum.location} <br />
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

export default Museum;
