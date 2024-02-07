import React, { useState } from 'react';
import axios from 'axios';

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
      setMessage('Museum entry has been updated');
    } catch (error) {
      console.error('Error posting data:', error);
      setMessage('Error');
      setIsError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Update a Museum Entry</h1>
          <label>
            Museum ID:
            <input
              type="number"
              name="id"
              value={museum.id}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Museum Name:
            <input
              type="text"
              name="name"
              value={museum.name}
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
              value={museum.location}
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

export default UpdateMuseum;
