import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Admin.css"; // Ensure your CSS file is correctly imported

function AddArt() {
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
  const [newId, setNewId] = useState('');
  const [newInfo, setNewInfo] = useState([]);
  const [isSuccessful, setIsSuccessful] = useState(false);

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
    setIsSuccessful(false);

    try {
      const response = await axios.post('http://localhost:8080/painting', art);
      console.log('Response:', response.data);
      setMessage('Painting entry has been added successfully');
      setIsSuccessful(true);
      setNewId(response.data.id);
    } catch (error) {
      console.error('Error adding art entry:', error);
      setMessage('Error adding art entry');
      setIsError(true);
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        console.log(newId)
        const response = await fetch('http://localhost:8080/art/' + newId);
        const data = await response.json();
        console.log(data);
        setNewInfo(data);
      } catch (error) {
        console.error('Error fetching artist, ', error);
      }
    };
    fetchData();
  }, [newId])


  function displayNewInfo() {
    console.log(isSuccessful);
    if (isSuccessful) {
      return (
        <ul className="list-group" style={{ width: "100%" }}>
          <li className="list-group-item" >
            <b>New Painting Information:</b>
          </li>
          <ul class="py-3">
            <li className="list-group">
              <span><b>ID: </b>{newInfo.id}</span>
            </li>
            <li className="list-group">
              <span><b>Title: </b>{newInfo.title}</span>
            </li>
            <li className="list-group">
              <span><b>Artist Name: </b>{newInfo.artistName}</span>
            </li>
            <li className="list-group">
              <span><b>Year: </b>{newInfo.yearOf}</span>
            </li>
            <li className="list-group">
              <span><b>Medium: </b>{newInfo.medium}</span>
            </li>
            <li className="list-group">
              <span><b>Location: </b>{newInfo.location}</span>
            </li>
            <li className="list-group">
              <span><b>Location ID: </b>{newInfo.locationId}</span>
            </li>
            <li className="list-group">
              <span><b>Description: </b>{newInfo.description}</span>
            </li>
            <li className="list-group">
              <span><b>Style: </b>{newInfo.style}</span>
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
      <h1 className="PageHeader">Add a Painting</h1>
      <form onSubmit={handleSubmit} className="formStyle">
        <div className="inputContainer">
          <label>Art ID:</label>
          <input
            type="number"
            name="id"
            value={art.id}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <div className="inputContainer">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={art.title}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <div className="inputContainer">
          <label>Artist Name:</label>
          <input
            type="text"
            name="artistName"
            value={art.artistName}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <div className="inputContainer">
          <label>Year Of Creation:</label>
          <input
            type="text"
            name="yearOf"
            value={art.yearOf}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <div className="inputContainer">
          <label>Medium:</label>
          <input
            type="text"
            name="medium"
            value={art.medium}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
       
        <div className="inputContainer">
          <label>Location ID:</label>
          <input
            type="number"
            name="locationId"
            value={art.locationId}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <div className="inputContainer">
          <label>Description:</label>
          <textarea
            name="description"
            value={art.description}
            onChange={handleChange}
            className="inputStyle"
            style={{ height: '100px' }}
          />
        </div>
        <div className="inputContainer">
          <label>Style:</label>
          <input
            type="text"
            name="style"
            value={art.style}
            onChange={handleChange}
            className="inputStyle"
          />
        </div>
        <button type="submit" className="buttonStyle">Add Entry</button>
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

export default AddArt;
