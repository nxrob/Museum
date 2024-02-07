import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import SearchBar from './SearchBar';

import Museum from './Museum';
import Header from './Header';

const MuseumAll = () => {

	const [museums, setMuseums] = useState(null);
	const [searchMuseums, setSearchMuseums] = useState([]);
	const navigate = useNavigate();
	const images = require.context('../images/museum/', true);

	const [loaded, setLoaded] = useState("")

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/museum');
				console.log(response);
				const data = await response.json();
				setMuseums(data);
				setSearchMuseums(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	useEffect(() =>{
		setMuseums(searchMuseums);
	  }, [searchMuseums]);

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

	return (
		<div class="container w-50">
			<Header pageTitle={"Museums"} setSearchMuseums={setSearchMuseums} toggleMuseum={true} />
				{museums ? (
                <div class="row row-cols-1 row-cols-md-2 g-4 my-2">
                    {museums.map((museum) => (
                        <div class="col">
                            <Link to={museum.name} class="text-decoration-none">
                                <div class="card bg-light m-auto" style={{ width: "35rem" }}>
                                    <img src={images(`./${museum.name}.jpeg`)} class="card-img-top" style={{ maxHeight: "200px", objectFit: "cover" }} />
                                    <div class="card-body">
                                        <p class="card-text">{museum.name} ({museum.rating} ★)</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading museums...</p>
            )
            }
		</div>
	);

};

export default MuseumAll;
