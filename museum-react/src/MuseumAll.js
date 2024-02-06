import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Museum from './Museum';

const MuseumAll = () => {

	const [museums, setMuseums] = useState(null);
	const navigate = useNavigate();

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
		<div class="container text-center w-50">
			<div class="rounded-1 row mx-auto mt-2 border" style={{ backgroundColor: "#EFF6F9" }}>
				<span class="col my-2 align-self-center">
					<span class="display-3">𝐓𝐡𝐞 𝐆𝐢𝐭𝐠𝐨𝐨𝐝 𝐌𝐮𝐬𝐞𝐮𝐦</span>
				</span>
				<div class="col d-flex flex-row-reverse h-50 align-self-center">
					<button class="btn btn-primary" type="button" style={{ maxWidth: "50px" }} onClick={() => navigate(-1)}>Back</button>
				</div>
			</div>
			<h1>Museums</h1><br />
			{museums ? (
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
			)}
		</div>
	);

};

export default MuseumAll;
