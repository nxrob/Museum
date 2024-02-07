import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Update an Artist Entry</h1>
        <div>
          <label>
            Artist ID:
            <input
              type="number"
              name="id"
              value={artist.id}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={artist.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Date of Birth and Death:
            <input
              type="text"
              name="dobAndDod"
              value={artist.dobAndDod}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Birthplace:
            <input
              type="text"
              name="birthplace"
              value={artist.birthplace}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Bio:
            <textarea
              name="bio"
              value={artist.bio}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Update Entry</button>
      </form>
      {message && (
        <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>
      )}
    </div>
  );
}

export default UpdateArtist;
