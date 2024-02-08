import React, {useState} from "react"
import "./DisplayArt.css"
import { end } from "@popperjs/core";


function DisplayArt(artwork) {

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    if(!artwork){
        return <p>Loading ...</p>;
    }

    const startIndex = (currentPage - 1) *  itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = artwork.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }
    return artwork ? (
         <div>
            <div className="artGrid">
                {currentItems.map((art) => (
                <div key= {art.id} className="artBox">
                      
                <p>Id: : {art.id}</p>
                <p>Title: : {art.title}</p>

                 </div>
                
                ))}
                </div>
                <div className="pagination">
                        {Array.from({length: Math.ceil(artwork.length / itemsPerPage)}, (_, index) =>(
                            <button key={"Page" + index+1} onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        ))}
                    </div>

                
                {/* // <div>
                //     {artwork.map((art) => (
                //         <
                //     ))}
                // </div> */}
            </div>
    
        ) : (
            <p>Loading ...</p>
        )
    
}

export  default DisplayArt