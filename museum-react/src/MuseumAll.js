import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Museum from './Museum';
import Header from './Header';

const MuseumAll = () => {

	const [museums, setMuseums] = useState(null);
	const navigate = useNavigate();
	const images = require.context('../images/museum/', true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/museum');
				console.log(response);
				const data = await response.json();
				setMuseums(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div class="container w-50">
			<Header pageTitle={"Museums"}/>
				{/* {museums ? (
					<table class="table table-striped" style={{ marginLeft: "auto", marginRight: "auto" }}>
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
				)} */}
				{museums ? (
                <div class="row row-cols-1 row-cols-md-2 g-4 my-3">
                    {museums.map((museum) => (
                        <div class="col">
                            <Link to={museum.name} class="text-decoration-none">
                                <div class="card bg-light m-auto" style={{ width: "35rem" }}>
                                    <img src={images(`./${museum.name}.jpeg`)} class="card-img-top" style={{ maxHeight: "200px", objectFit: "cover" }} />
                                    <div class="card-body">
                                        <p class="card-text">{museum.name}</p>
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
