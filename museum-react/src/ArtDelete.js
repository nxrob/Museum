import React, {useState, useEffect, useRef} from "react";
import DisplayArt from "./DisplayArt";
import  "./ArtDelete.css"
import Header from "./Header";
import Footer from "./Footer";


const ArtDelete = () => {
    const [submitClicked, setSubmitClicked] = useState(0)
    const hasPageBeenRendered = useRef(false);
    const [artData,  setArtData] = useState(null)
    const [chosenId, setChosenId] = useState(0)

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

    const handeDelete = () => {
        const confirmed = window.confirm("Are you sure you want to delete?")
        if (confirmed) {
            setSubmitClicked(submitClicked + 1)
        }
    }
    



    return(
       <div className="container">
        <Header/>
        <div className="leftSide">
        <h1> Careful, you're deleting art from our catalog</h1>
        <b> What's the id of the art you want to delete?</b>
        <input
        type="text"
        value={chosenId}
        onChange={(e) => setChosenId(e.target.value)}
      />
      <p>
      <button
            onClick={handeDelete}>
            Submit
        </button>
      </p>
        </div>
        
        <div className="rigthSide">
        For  your reference,  
        {DisplayArt(artData)}
        </div>

      <Footer/>
      
       </div>
    )
}

export default ArtDelete