import React, {useEffect, useState} from "react";
import DisplayMuseum from "./DisplayMuseum";

const ReadMuseum = () => {
    const [museumData, setMuseumData] = useState(null);

useEffect (() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/museum');
            const data = await response.json();
            console.log(data);
            setMuseumData(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };
    fetchData();
}, [])


return (
    <div>
        <h1>
            This is  a list of all of our museums!
        </h1>
        {DisplayMuseum(museumData)}
    </div>
)

}

export default ReadMuseum;