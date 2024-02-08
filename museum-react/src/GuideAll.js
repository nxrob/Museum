import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const GuideAll = () => {

    const [guides, setGuides] = useState([]);
    const images = require.context('../images/guide/', true);


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

    function getGuideImage(guideName) {
        let imageSource = "";

        try {
            imageSource = './' + guideName + '.jpeg'
            let src = images(imageSource);
        } catch (error) {
            console.error('Error, guide image not found: ', error);
            imageSource = './Default.jpeg';
        }

        return imageSource;
    }

    return (
        <div class="container w-75">
            <Header pageTitle={"Guides"} toggleSearch={false}/>
            <div class="container w-50">
            { guides ? (
                
                <div class="row row-cols-1 row-cols-md-1 g-4 my-2">
                    {guides.map((guide) => (
                        <div class="col">
                            <Link to={guide.name} class="text-decoration-none">
                                <div class="card bg-light m-auto" style={{width: ""}}>
                                <img src={images(getGuideImage(guide.name))} class="card-img-top" style={{ maxHeight: "200px", objectFit: "cover" }} />
                                    <div class="card-body">
                                        <p class="card-text">{guide.name}</p>
                                    </div>
                                </div>
                            </Link>
                            </div>
                    ))}
                    </div>
            ) : (
                <p>Loading guides...</p>
            )}
            </div>
            <Footer/>
        </div>
    );


};

export default GuideAll;