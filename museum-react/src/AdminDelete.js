import React, {useState, useEffect} from "react";
import DisplayArtist from "./DisplayArtist";

const AdminDelete = () => {
    const [submitClicked, setSubmitClicked] = useState(0)
    const [id, setId] = useState();
    const [artist,  setArtist] = useState(null)
    const [chosenId, setChosenId] = useState()

    const fetchData = async () => {
        try{
        const response = await fetch('http://localhost:8080/artist')
        const data = await response.json();
        console.log(data);
        setArtist(data);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};

    useEffect (() => {
        fetchData();
    }, []);


    useEffect (() => {
        if (submitClicked >0) {
            const deleteArtist = async () => {
                try {
                    const options = {method: 'DELETE'};
                    const response = await fetch('http://localhost:8080/artist/${chosenId}', options)
                    const data = await response.json();
                    fetchData()
                }
                catch(error){
                    console.error("Error deleting artist" + error)
                }
            }
            deleteArtist();
        }
    }, [submitClicked, chosenId])
    



    return(
       <div>
        <h1> Careful, you're deleting an artist from our catalog</h1>
        <b> What's the id of the book you want to delete?</b>
        <input
        type="text"
        value={chosenId}
        onChange={(e) => setChosenId(e.target.value)}
      />
        <button>
            onClick={() => setSubmitClicked(submitClicked + 1)}
            Submit
        </button>
       </div>
    )
}

export default AdminDelete