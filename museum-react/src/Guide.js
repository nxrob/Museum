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
        ddsd
    )

}