import React, { useState } from 'react';
import axios from 'axios';

function AddSculpture() {
    const [art, setArt] = useState({
      id: '',
      title: '',
      artistName: '',
      yearOf: '',
      medium: '',
      location: '',
      locationId: '',
      description: '',
      style: ''
    });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArt(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      const response = await axios.post('http://localhost:8080/sculpture', art);
      console.log('Response:', response.data);
      setMessage('Painting entry has been updated successfully');
    } catch (error) {
      console.error('Error updating art entry:', error);
      setMessage('Error updating art entry');
      setIsError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add a Sculpture</h1>
        <div>
          <label>
            Art ID:
            <input
              type="number"
              name="id"
              value={art.id}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={art.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Artist Name:
            <input
              type="text"
              name="artistName"
              value={art.artistName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Year Of Creation:
            <input
              type="text"
              name="yearOf"
              value={art.yearOf}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Medium:
            <input
              type="text"
              name="medium"
              value={art.medium}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={art.location}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Location ID:
            <input
              type="text"
              name="locationId"
              value={art.locationId}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={art.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Style:
            <input
              type="text"
              name="style"
              value={art.style}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Add Sculpture</button>
      </form>
      {message && (
        <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>
      )}
    </div>
  );
}

export default AddSculpture;
