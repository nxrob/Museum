import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const GuideAll = () => {

    const [guides, setGuides] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/guide');
                const data = await response.json();
                setGuides(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);


    return (
        <div class="container-fluid text-center">
            <h1>Guides</h1><br />
            {guides ? (
                <table class="table table-striped" style={{ width: "30%", marginLeft: "auto", marginRight: "auto" }}>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guides.map((guide) => (
                            <tr>
                                <td>
                                    <Link to={guide.name}>{guide.name}</Link>
                                </td>
                                <td>{guide.summary}</td>
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

export default GuideAll;