import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { makeStyles } from "@mui/material";
import Footer from "./Footer";

const Guide = () => {
    const { guideName } = useParams();

    const [guideInfo, setGuideInfo] = useState([]);
    const [museumsInGuide, setMuseumsInGuide] = useState([]);
    const images = require.context('../images/guide/', true);
    const [museumRatings, setMuseumRatings] = useState({});


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
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        getGuideInfo();
        getMuseumsInGuide();
    }, []);

    function getGuideImage() {
        let imageSource = ""

        try {
            imageSource = './' + guideName + '.jpeg';
            let src = images(imageSource);
        } catch (error) {
            console.error('Error, guide image not found, ', error);
            imageSource = './Default.jpeg'
        }
        return imageSource;
    }

    async function getRating(museumName) {
        let rating = ""
        try {
            const response = await fetch('http://localhost:8080/guide/' + guideName + '/' + museumName);
            const data = await response.json();
            rating = data;
        } catch (error) {
            console.error('Error fetching rating, ', error);
            rating = "No Rating Found";
        }
        console.log(rating, 'dasdas', museumName);
        return rating;
    }

    useEffect(() => {
        const fetchMuseumRatings = async () => {
            const ratings = {};
            await Promise.all(
                museumsInGuide.map(async (museum) => {
                    const rating = await getRating(museum.name);
                    ratings[museum.name] = rating;
                })
            );
            setMuseumRatings(ratings);
        };
    
        fetchMuseumRatings();
    }, [museumsInGuide]);


    return (
        <div class="container w-75">
            <Header pageTitle={"Guides"} toggleSearch={false} />
            <div id="content">
                {guideInfo && museumsInGuide ? (
                    <div class="row mh-25 d-flex">
                        <div class="col d-flex">
                            <div class="container my-3 py-3" style={{ backgroundColor: "#EFF9F1" }}>
                                <p class="h1">
                                    {guideInfo.name}
                                </p>
                                <hr />
                                <span>
                                    {guideInfo.summary}
                                </span>
                            </div>
                        </div>
                        <div class="col my-3">
                            <img src={images(getGuideImage(guideInfo.name))} class="img-fluid float-end" />
                        </div>
                    </div>
                ) : (
                    <p>Loading guide information...</p>
                )}

                {guideInfo && museumsInGuide ? (
                    <div class="row">
                        <div class="col">
                            {museumsInGuide.map((museum) => (
                                <ul className="list-group pe-4">
                                    <li className="list-group-item" style={{ backgroundColor: "#EFF9F1" }}>
                                        <span><Link to={"/museums/" + museum.name}>{museum.name}</Link></span>
                                    </li>
                                    <ul class="py-3">
                                        <li className="list-group">
                                            <span><b>Guide Rating: {museumRatings[museum.name]}</b></span>
                                        </li>
                                    </ul>
                                </ul>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>Loading museums</p>
                )}
            </div>
            <Footer />
        </div>

    )
}





//     return (
//         <div class="container w-50">
//             {guideInfo && museumsInGuide ? (
//                 <div>
//                     <div class="container my-3 py-3" style={{ backgroundColor: "#EFF9F1" }}>
//                         <h1>{guideInfo.name}</h1>
//                         <b>{guideInfo.summary}</b><br />
//                     </div>

//                     {museumsInGuide.map((museum) => (
//                         <div>
//                             <ul className="list-group" style={{ width: "100%" }}>
//                                 <li className="list-group-item" style={{ backgroundColor: "#EFF9F1" }}>
//                                     <span><Link to={"/museums/" + museum.name}>{museum.name}</Link></span>
//                                 </li>
//                                 <li className="list-group-item" style={{ backgroundColor: "#EFF9F1" }}>
//                                     <b>{museum.location}</b>
//                                 </li>
//                             </ul>
//                             </div>

//                     ))}
//                     </div>
//             ) : (
//                 <p>Loading museum...</p>
//             )}
//         </div>
//     );

// };

export default Guide;