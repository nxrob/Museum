import React, { useState } from 'react';
import axios from 'axios';
import "./Admin.css"; // Ensure your CSS file is correctly imported

function UpdateMuseum() {
  const [museum, setMuseum] = useState({
    id: '',
    name: '',
    location: ''
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMuseum(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      const response = await axios.put('http://localhost:8080/museum', museum);
      console.log('Response:', response.data);
      setMessage('Museum entry has been updated successfully');
    } catch (error) {
      console.error('Error posting data:', error);
      setMessage('Error updating museum entry');
      setIsError(true);
    }
  };

  return (
    <div className="ArtistHome"> {/* Use the same class for consistent styling */}
      <h1 className="PageHeader">Update a Museum Entry</h1>
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
        <button type="submit" className="buttonStyle">Update Entry</button>
      </form>
      {message && (
        <p className={isError ? 'errorMessage' : 'successMessage'}>{message}</p>
      )}
    </div>
  );
}

export default UpdateMuseum;
