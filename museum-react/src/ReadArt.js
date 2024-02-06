import React, {useEffect, useState} from "react";
import DisplayArt from "./DisplayArt";

const ReadArt = () => {
    const [artData, setArtData] = useState(null);

useEffect (() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/art');
            const data = await response.json();
            console.log(data);
            setArtData(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    fetchData();
}, [])


return (
    <div>
        <h1>
            This is  a list of all of our artwork!
        </h1>
        {DisplayArt(artData)}
    </div>
)

}

export default ReadArt;