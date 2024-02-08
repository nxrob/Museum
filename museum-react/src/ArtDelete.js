import React, {useState, useEffect, useRef} from "react";
import DisplayArt from "./DisplayArt";

const ArtDelete = () => {
    const [submitClicked, setSubmitClicked] = useState(0)
    const hasPageBeenRendered = useRef(false);
    const [artData,  setArtData] = useState(null)
    const [chosenId, setChosenId] = useState(1)

    const fetchData = async () => {
        try{
        const response = await fetch('http://localhost:8080/art')
        const data = await response.json();
        console.log(data);
        setArtData(data);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};

  


    useEffect (() => {
        fetchData();
        if (hasPageBeenRendered.current) {
            const deleteArt = async () => {
                try {
                    const options = {method: 'DELETE'};
                    const response = await fetch('http://localhost:8080/art/' + chosenId, options)
                    const data = await response.json();
                    console.log(data)
                }
                catch(error){
                    console.error("Error deleting artwork" + error)
                }
                fetchData();
            }
            deleteArt();
        }
        hasPageBeenRendered.current=true;
    }, [submitClicked])
    



    return(
       <div>
        <h1> Careful, you're deleting art from our catalog</h1>
        <b> What's the id of the art you want to delete?</b>
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
      <c>
        For  your reference,  
        {DisplayArt(artData)}
      </c>
      
       </div>
    )
}

export default ArtDelete