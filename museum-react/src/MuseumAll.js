import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Museum from './Museum';
import SearchBar from './SearchBar';

const MuseumAll = () => {

  const [museums, setMuseums] = useState(null);
  const [searchMuseums, setSearchMuseums] = useState([]);
  

  useEffect(() =>{
    setMuseums(searchMuseums);
  }, [searchMuseums]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     //search();
  //     // try {
  //     //   const response = await fetch('http://localhost:8080/museum');
  //     //   console.log(response);
  //     //   const data = await response.json();
  //     //   setMuseums(data);
  //     // } catch (error) {
  //     //   console.error('Error fetching data:', error);
  //     // }
  //     // setMuseums(searchMuseums);
      
  //     console.log(museums, 'dff')
      

  //   };

  //   fetchData();
  // }, []);

  return (
    <div class="container-fluid text-center">
      <h1>Museums</h1><br/>
      <SearchBar setSearchMuseums={setSearchMuseums} />
      
      <br />
      {museums ? (
        <table class="table table-striped" style={{ width: "30%", marginLeft: "auto", marginRight: "auto" }}>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {museums.map((museum) => (
              <tr>
                <td>
                  <Link to={museum.name}>{museum.name}</Link>
                </td>
                <td>{museum.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

};

export default MuseumAll;
