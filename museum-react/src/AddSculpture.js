import React, { useState } from 'react';
import axios from 'axios';
import "./Admin.css"; // Ensure your CSS file is correctly imported

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
            setMessage('Sculpture entry has been added successfully');
        } catch (error) {
            console.error('Error adding sculpture entry:', error);
            setMessage('Error adding sculpture entry');
            setIsError(true);
        }
    };

    return (
        <div className="ArtistHome">
            <h1 className="PageHeader">Add a Sculpture</h1>
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
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={art.location}
                        onChange={handleChange}
                        className="inputStyle"
                    />
                </div>
                <div className="inputContainer">
                    <label>Location ID:</label>
                    <input
                        type="text"
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
                <button type="submit" className="buttonStyle">Add Sculpture</button>
            </form>
            {message && (
                <p className={isError ? 'errorMessage' : 'successMessage'}>{message}</p>
            )}
        </div>
    );
}

export default AddSculpture;
