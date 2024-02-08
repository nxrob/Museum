import React, {useState, useEffect, useRef} from "react";
import DisplayMuseum from "./DisplayMuseum";

const MuseumDelete = () => {
    const [submitClicked, setSubmitClicked] = useState(0)
    const hasPageBeenRendered = useRef(false);
    const [museumData,  setMuseumData] = useState(null)
    const [chosenId, setChosenId] = useState(1)

    const fetchData = async () => {
        try{
        const response = await fetch('http://localhost:8080/museum')
        const data = await response.json();
        console.log(data);
        setMuseumData(data);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};

  


    useEffect (() => {
        fetchData();
        if (hasPageBeenRendered.current) {
            const deleteMuseum = async () => {
                try {
                    const options = {method: 'DELETE'};
                    const response = await fetch('http://localhost:8080/museum/' + chosenId, options)
                    const data = await response.json();
                    console.log(data)
                }
                catch(error){
                    console.error("Error deleting museum" + error)
                }
                fetchData();
            }
            deleteMuseum();
        }
        hasPageBeenRendered.current=true;
    }, [submitClicked])
    



    return(
       <div>
        <h1> Careful, you're deleting a museum from our catalog</h1>
        <b> What's the id of the museum you want to delete?</b>
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
      <div>
        For  your reference,  
        {DisplayMuseum(museumData)}
      </div>
      
       </div>
    )
}

export default MuseumDelete