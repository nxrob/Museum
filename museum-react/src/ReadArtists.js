import React, {useEffect, useState} from "react";
import DisplayArtist from "./DisplayArtist";

const ReadArtist = () => {
    const [artistData, setArtistData] = useState(null);

useEffect (() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/artist');
            const data = await response.json();
            console.log(data);
            setArtistData(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    fetchData();
}, [])


return (
    <div>
        <h1>
            This is  a list of all of our artists!
        </h1>
        {DisplayArtist(artistData)}
    </div>
)

}

export default ReadArtist;