import React, {useState, useEffect, useRef} from "react";
import DisplayArtist from "./DisplayArtist";

const ArtistDelete = () => {
    const [submitClicked, setSubmitClicked] = useState(0)
    const hasPageBeenRendered = useRef(false);
    const [artistData,  setArtistData] = useState(null)
    const [chosenId, setChosenId] = useState(1)

    const fetchData = async () => {
        try{
        const response = await fetch('http://localhost:8080/artist')
        const data = await response.json();
        console.log(data);
        setArtistData(data);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};

  


    useEffect (() => {
        fetchData();
        if (hasPageBeenRendered.current) {
            const deleteArtist = async () => {
                try {
                    const options = {method: 'DELETE'};
                    const response = await fetch('http://localhost:8080/artist/' + chosenId, options)
                    const data = await response.json();
                    console.log(data)
                }
                catch(error){
                    console.error("Error deleting artist" + error)
                }
                fetchData();
            }
            deleteArtist();
        }
        hasPageBeenRendered.current=true;
    }, [submitClicked])
    



    return(
       <div>
        <h1> Careful, you're deleting an artist from our catalog</h1>
        <b> What's the id of the artist you want to delete?</b>
        <input
        type="text"
        value={chosenId}
        onChange={(e) => setChosenId(e.target.value)}
      />
      <p>
      <button
            onClick={(e) => setSubmitClicked(submitClicked + 1)}>
            Submit
        </button>
      </p>
      <c>For your reference, {DisplayArtist(artistData)}</c>
      
    </div>
    )
}

export default ArtistDelete