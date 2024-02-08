import React, { useState } from 'react';
import axios from 'axios';
import "./Admin.css"; // Ensure your CSS file is correctly imported

function AddMuseum() {
  const [museum, setMuseum] = useState({
    id: '',
    name: '',
    location: '',
    description: ''
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMuseum(prevState => ({
      ...prevState,
      [name]: name === 'id' ? parseInt(value, 10) || '' : value // Ensures ID is handled correctly
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      const response = await axios.post('http://localhost:8080/museum', museum);
      console.log('Response:', response.data);
      setMessage('Museum entry has been created successfully');
    } catch (error) {
      console.error('Error posting data:', error);
      setMessage('Error creating museum entry');
      setIsError(true);
    }
  };

  return (
    <div className="ArtistHome"> {/* Use the same class for consistent styling */}
      <h1 className="PageHeader">Add a New Museum Entry</h1>
      <form onSubmit={handleSubmit} className="formStyle">
        <div className="inputContainer">
          <label>Museum ID:</label>
          <input
            type="number"
            name="id"
            value={museum.id}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <div className="inputContainer">
          <label>Museum Name:</label>
          <input
            type="text"
            name="name"
            value={museum.name}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <div className="inputContainer">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={museum.location}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <div className="inputContainer">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={museum.description}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <button type="submit" className="buttonStyle">Create Entry</button>
      </form>
      {message && (
        <p className={isError ? 'errorMessage' : 'successMessage'}>{message}</p>
      )}
    </div>
  );
}

export default AddMuseum;
