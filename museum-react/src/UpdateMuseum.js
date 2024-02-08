import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Admin.css"; // Ensure your CSS file is correctly imported

function UpdateMuseum() {
  const [museum, setMuseum] = useState({
    id: '',
    name: '',
    location: '',
    description: ''
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [newId, setNewId] = useState('');
  const [newInfo, setNewInfo] = useState([]);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMuseum(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(newId)
        const response = await fetch('http://localhost:8080/museum/id/' + newId);
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

    try {
      const response = await axios.put('http://localhost:8080/museum', museum);
      console.log('Response:', response.data);
      setMessage('Museum entry has been updated successfully');
      setIsSuccessful(true);
      setNewId(response.data.id);
    } catch (error) {
      console.error('Error posting data:', error);
      setMessage('Error updating museum entry');
      setIsError(true);
    }
  };

  function displayNewInfo() {
    console.log(isSuccessful);
    if (isSuccessful) {
      return (
        <ul className="list-group" style={{ width: "100%" }}>
          <li className="list-group-item" >
            <b>New Museum Information:</b>
          </li>
          <ul class="py-3">
            <li className="list-group">
              <span><b>ID: </b>{newInfo.id}</span>
            </li>
            <li className="list-group">
              <span><b>Name: </b>{newInfo.name}</span>
            </li>
            <li className="list-group">
              <span><b>Location: </b>{newInfo.location}</span>
            </li>
            <li className="list-group">
              <span><b>Description: </b>{newInfo.description}</span>
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

export default UpdateMuseum;
