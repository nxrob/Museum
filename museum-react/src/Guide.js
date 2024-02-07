import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom '

const Guide = () => {
    const {guideName} = useParams();

    const [guideInfo, setGuideInfo] = usestate([]);
    const [museumsInGuide, setMuseumsInGuide] = useState([]);


    useEffect(() => {
        const getGuideInfo = async () => {
            try {
                const response = await fetch('http://localhost:8080/guide/' + guideName);
                const data = await response.json();
                setGuideInfo(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        const getMuseumsInGuide = async () => {
            try {
                const response = await fetch('http://localhost:8080/guide/' + guideName + '/list');
                const data = await response.json();
                setMuseumsInGuide(data);
            } catch(error){
                console.error('Error fetching data: ', error);
            }
        }

        getGuideInfo();
        getMuseumsInGuide();
    }, []);

    return (
        <div class="container w-50">
            {guideInfo && museumsInGuide ? (
                <div>
                    <div class="container my-3 py-3" style = {{backgroundColor: "#EFF9F1"}}>
                        <h1>{guideInfo.name}</h1>
                        <b>{guideInfo.summary}</b><br/>                        
                    </div>

                    {museumsInGuide.map((museum) => (
                        <div>
                            <ul className="list-group" style={{ width: "100%"}}>
                                <li className="list-group-item" style={{backgroundColor: "#EFF9F1"}}>
                                    <span><Link to={"/museum/" + museum.name}>{museum.name}</Link></span>
                                </li>
                                <li className="list-group-item" style={{backgroundColor: "#EFF9F1"}}>
                                    <b>{museum.location}</b>
                                </li>
                            </ul>
                            </div>
                        
                    ))}
                    </div>
            ) : (
                <p>Loading museum...</p>
            )}
        </div>
    );

};

export default Guide;