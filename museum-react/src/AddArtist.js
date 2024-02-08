import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Admin.css"; // Ensure your CSS file is correctly imported

function AddArtist() {
  const [artist, setArtist] = useState({
    id: '',
    name: '',
    dobAndDod: '',
    birthplace: '',
    bio: ''
  });

  const [newId, setNewId] = useState('');
  const [newInfo, setNewInfo] = useState([]);

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtist(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  useEffect(() => {
    async function fetchData() {
      try {
        console.log(newId)
        const response = await fetch('http://localhost:8080/artist/id/' + newId);
        const data = await response.json();
        console.log(data);
        setNewInfo(data);
      } catch (error) {
        console.error('Error fetching artist, ', error);
      }
    };
    fetchData();


  }, [newId])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);
    setIsSuccessful(false);

    try {
      const response = await axios.post('http://localhost:8080/artist', artist);
      console.log('Response:', response.data);

      setMessage('Artist entry has been added successfully');
      setIsSuccessful(true);
      setNewId(response.data.id);
    } catch (error) {
      console.error('Error updating data:', error);
      setMessage('Error updating artist entry');
      setIsError(true);
    }
  };

  function displayNewInfo() {
    console.log(isSuccessful);
    if (isSuccessful) {
      return (
        <ul className="list-group" style={{ width: "100%" }}>
          <li className="list-group-item" >
            <b>New Artist Information:</b>
          </li>
          <ul class="py-3">
            <li className="list-group">
              <span><b>ID: </b>{newInfo.id}</span>
            </li>
            <li className="list-group">
              <span><b>Name: </b>{newInfo.name}</span>
            </li>
            <li className="list-group">
              <span><b>Date of Birth and Date of Death: </b>{newInfo.dobAndDod}</span>
            </li>
            <li className="list-group">
              <span><b>Birthplace: </b>{newInfo.birthplace}</span>
            </li>
            <li className="list-group">
              <span><b>Bio: </b>{newInfo.bio}</span>
            </li>
          </ul>
        </ul>
      );
    }
    else {
      return "";
    };
  };


  return (
    <div className="ArtistHome">
      <h1 className="PageHeader">Create an Artist Entry</h1>
      <form onSubmit={handleSubmit} className="formStyle">
        <div className="inputContainer">
          <label>Artist ID:</label>
          <input
            type="number"
            name="id"
            value={artist.id}
            onChange={handleChange}
            className="inputStyle artistIdInput"
          />
        </div>
        <div className="inputContainer">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={artist.name}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <div className="inputContainer">
          <label>Date of Birth and Death:</label>
          <input
            type="text"
            name="dobAndDod"
            value={artist.dobAndDod}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <div className="inputContainer">
          <label>Birthplace:</label>
          <input
            type="text"
            name="birthplace"
            value={artist.birthplace}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <div className="inputContainer">
          <label>Bio:</label>
          <textarea
            name="bio"
            value={artist.bio}
            onChange={handleChange}
            className="inputStyle"
          // style={{height: '100px'}}
          />
        </div>
        <button type="submit" className="buttonStyle">Add Artist</button>
      </form>
      <div>
        {message && (
          <p className={isError ? 'errorMessage' : 'successMessage'}>{message}</p>
        )}
      </div>
      <div>
        {displayNewInfo()}
      </div>
    </div>
  );
}

export default AddArtist;
