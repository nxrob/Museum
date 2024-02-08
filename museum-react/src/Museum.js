import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';


const Museum = () => {

    const { museumName } = useParams();
    const navigate = useNavigate();

    const [searchArt, setSearchArt] = useState([]);
    const [museumInfo, setMuseumInfo] = useState();
    const [worksInMuseum, setWorksInMuseum] = useState();
    const [guidesMentioningMuseum, setGuidesMentioningMuseum] = useState();
    const [topRated, setTopRated] = useState();
    const [museumRating, setMuseumRating] = useState("");

    const images = require.context('../images/museum/', true);
    const museumImage = images(`./${museumName}.jpeg`)

    console.log("Rendering... (museumInfo = " + museumInfo + ")")

    useEffect(() => {
        setWorksInMuseum(searchArt);
        console.log(searchArt, 'fdfd');
    }, [searchArt]);

    useEffect(() => {
        const getMuseumInfo = async () => {
            try {
                const response = await fetch('http://localhost:8080/museum/' + museumName);
                const data = await response.json();
                setMuseumInfo(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const getWorksInMuseum = async () => {
            console.log("Getting works in museum")
            try {
                const response = await fetch('http://localhost:8080/museum/' + museumName + '/works');
                const data = await response.json();
                setWorksInMuseum(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const getMuseumRating = async () => {
            try {
                const response = await fetch('http://localhost:8080/museum/' + museumName + '/rating');
                const data = await response.json();
                setMuseumRating(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setMuseumRating("No Ratings Yet");
            }
        }

        const getGuidesMentioningMuseum = async () => {
            try {
                const response = await fetch('http://localhost:8080/museum/' + museumName + '/guides')
                const data = await response.json();
                console.log('GUIDES: ' + data)
                setGuidesMentioningMuseum(data);
                if (Object.keys(data).length > 2) {
                    setTopRated(true);
                } else { setTopRated(false); }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        const displayTopRated = () => {

        }
        getMuseumRating();   

        getMuseumInfo();
        getWorksInMuseum();
        getGuidesMentioningMuseum();
        displayTopRated();
        console.log(searchArt, 'fhdfw');


    }, []);

    function getMuseumImage() {
        let imageSource = ""

        try {
            imageSource = './' + museumName + '.jpeg';
            let src = images(imageSource);
        } catch (error) {
            console.error('Error, museum image not found, ',error);
            imageSource = './Default.jpeg';
        }
        return imageSource;
    }

    return (
        <div class="container w-75">
            <Header pageTitle={"Museums"} setSearchArt={setSearchArt} toggleArt={true} toggleArtist={true} location={museumName} />
            <div id="content">
                
                {/* MUSEUM INFO */}
                {worksInMuseum && museumInfo ? (
                    <div class="row mh-25 d-flex">
                        <div class="col d-flex">
                            <div class="container my-3 py-3" style={{ backgroundColor: "#EFF9F1" }}>
                                <p class="h1">
                                    {museumInfo.name}
                                    {topRated ? (
                                        <h5 style={{ display: "inline-block" }} class="align-middle mx-2">
                                            <div class="badge bg-warning">Top Rated</div>
                                        </h5>
                                    ) : (<p></p>)}
                                </p>
                                <b>{museumInfo.location}</b><br />
                                <b>Museum Guide Rating: {museumRating}</b><br/>
                                <hr />
                                <span>
                                    {museumInfo.description}
                                </span>
                            </div>


                        </div>
                        <div class="col my-3">
                            {/* <img src={museumImage} class="img-fluid float-end" /> */}
                            <img src={images(getMuseumImage())} class="img-fluid float-end"/>
                        </div>
                    </div>
                ) : (
                    <p>Loading museum information...</p>
                )}

                {worksInMuseum && guidesMentioningMuseum ? (
                    <div class="row">
                        <div class="col">

                            {/* GUIDES */}
                            <div class="py-3 ps-3 float-sm-end rounded border" style={{ backgroundColor: "#EFF6F9", width: "49.1%" }}>
                                <b>{museumInfo.name}</b> appears in the following guides: <br />
                                {guidesMentioningMuseum.map((guide) => (
                                    <div>
                                        <Link to={""}>{guide.name}</Link>
                                    </div>
                                ))}
                            </div>

                            {/* ARTWORKS */}
                            {worksInMuseum.map((artwork) => (
                                <ul className="list-group pe-4 ">
                                    <li className="list-group-item" style={{ backgroundColor: "#EFF9F1" }}>
                                        <b>{artwork.title}</b>
                                    </li>
                                    <ul class="py-3">
                                        <li className="list-group">
                                            <span><b>Artist: </b><Link to={"/artists/" + artwork.artistName}>{artwork.artistName}</Link></span>
                                        </li>
                                        <li className="list-group">
                                            <span><b>Year: </b>{artwork.yearOf}</span>
                                        </li>
                                        <li className="list-group">
                                            <span><b>Medium: </b>{artwork.medium}</span>
                                        </li>
                                        <li className="list-group">
                                            <span><b>Description: </b>{artwork.description}</span>
                                        </li>
                                    </ul>
                                </ul>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>Loading works of art...</p>
                )}
            </div>
        </div >
    );
};

export default Museum;
