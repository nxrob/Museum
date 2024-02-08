import React, { useState } from 'react';
import axios from 'axios';
import "./Admin.css"; // Ensure your CSS file is correctly imported

function UpdateArtist() {
  const [artist, setArtist] = useState({
    id: '',
    name: '',
    dobAndDod: '',
    birthplace: '',
    bio: ''
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtist(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      const response = await axios.put('http://localhost:8080/artist', artist);
      console.log('Response:', response.data);
      setMessage('Artist entry has been updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
      setMessage('Error updating artist entry');
      setIsError(true);
    }
  };

  return (
    <div className="ArtistHome">
      <h1 className="PageHeader">Update an Artist Entry</h1>
      <form onSubmit={handleSubmit} className="formStyle">
        <div className="inputContainer">
          <label>Artist ID:</label>
          <input
            type="number"
            name="id"
            value={artist.id}
            onChange={handleChange}
            className="inputStyle"
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
            style={{ height: '100px' }}
          />
        </div>
        <button type="submit" className="buttonStyle">Update Entry</button>
      </form>
      {message && (
        <p className={isError ? 'errorMessage' : 'successMessage'}>{message}</p>
      )}
    </div>
  );
}

export default UpdateArtist;
