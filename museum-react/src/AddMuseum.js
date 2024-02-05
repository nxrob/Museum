import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddMuseum() {
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
      [name]: name === 'id' ? parseInt(value, 10) || '' : value
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add a New Museum Entry</h1>
          <div>
            <label>
              ID
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
          <button type="submit">Create Entry</button>
        </div>
      </form>
      {message && (
        <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>
      )}
    </div>
  );
}

export default AddMuseum;

// import React, { useState } from 'react';

// function AddMuseum() {
//   const [museum, setMuseum] = useState({
//     id: '',
//     name: '',
//     location: ''
//   });

//   const [message, setMessage] = useState('');
//   const [isError, setIsError] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setMuseum(prevState => ({
//       ...prevState,
//       [name]:  value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setIsError(false);

//     try {
//       const response = await fetch('http://localhost:8080/museum', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(museum),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('Response:', data);
//       setMessage('Museum entry has been created successfully');
//     } catch (error) {
//       console.error('Error posting data:', error);
//       setMessage('Error creating museum entry');
//       setIsError(true);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <h1>Add a New Museum Entry</h1>
//           <div>
//             <label>
//               ID:
//               <input
//                 type="number"
//                 name="id"
//                 value={museum.id}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Museum Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={museum.name}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Location:
//               <input
//                 type="text"
//                 name="location"
//                 value={museum.location}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//           <button type="submit">Create Entry</button>
//         </div>
//       </form>
//       {message && (
//         <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>
//       )}
//     </div>
//   );
// }

// export default AddMuseum;
