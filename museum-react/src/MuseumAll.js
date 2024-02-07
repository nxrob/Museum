import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import SearchBar from './SearchBar';

const MuseumAll = () => {

  const [museums, setMuseums] = useState(null);
  const [searchMuseums, setSearchMuseums] = useState([]);
  const [loaded, setLoaded] = useState("")


  useEffect(() => {
    const fetchMuseumRatings = async () => {
      const museumsWithRatings = await Promise.all(
        searchMuseums.map(async (museum) => {
          try {
            const response = await fetch('http://localhost:8080/museum/' + museum.name + '/rating');
            const data = await response.json();
            museum.rating = data;
            return museum;
          } catch (error) {
            console.error('Error fetching data: ', error);
            return museum;
          }
        })
      );
      setMuseums(museumsWithRatings);
     
    };
  
    if (museums) {
      fetchMuseumRatings();
    }
  }, [searchMuseums]);



  useEffect(() => {

    // searchMuseums.forEach(async function (element){
    //   var rating = "No Ratings Yet";
    //   try {
    //     const response = await fetch('http://localhost:8080/museum/' + element.name + '/rating');
    //     const data1 = await response.json();
    //     rating = data1
        
    //   }
    //   catch (error) {
    //     console.error('Error fetching data: ', error);
        
    //   }
    //   console.log(rating);
    //   element.rating = rating;
      
    //   searchMuseums.pop()
    //   searchMuseums.push(element);
    //   console.log(element.rating);

    // })
    // console.log(searchMuseums);
    
    setMuseums(searchMuseums);
    
  }, [searchMuseums]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch('http://localhost:8080/museum');
        console.log(response);
        const data = await response.json();
        setMuseums(data);
        // data.forEach(async function (element){
        //   var rating = "No Ratings Yet";
        //   try {
        //     const response = await fetch('http://localhost:8080/museum/' + element.name + '/rating');
        //     const data1 = await response.json();
        //     rating = data1
            
        //   }
        //   catch (error) {
        //     console.error('Error fetching data: ', error);
            
        //   }
        //   console.log(rating);
        //   element.rating = rating;
         
        //   data.pop()
        //   data.push(element);
        //   console.log(element.rating);

        // })
        // console.log(data);
        
        
        setMuseums(data);
        setSearchMuseums(data);
        console.log(museums);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }


    };

    fetchData();
  }, []);

  return (
    <div class="container-fluid text-center">
      <h1>Museums</h1><br />
      <SearchBar setSearchMuseums={setSearchMuseums} toggleMuseum={true} />

      <br />
      {museums  ? (
        <table class="table table-striped" style={{ width: "30%", marginLeft: "auto", marginRight: "auto" }}>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Guide Rating</th>
            </tr>
          </thead>
          <tbody>
            {museums.map((museum) => (
              <tr>
                <td>
                  <Link to={museum.name}>{museum.name}</Link>
                </td>
                <td>{museum.location}</td>
                <td>{museum.rating}</td>
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
