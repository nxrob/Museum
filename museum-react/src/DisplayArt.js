import React from "react"
import "./DisplayArt.css"


function DisplayArt(artwork) {
    return(
        artwork ? (
            <div>
                <div>
                    {artwork.map((art) => (
                        <div key= {art.id} className="artBox">
                      
                            <p>Id: : {art.id}</p>
                            <p>Title: : {art.title}</p>
                           
                                             
                        </div>
                    ))}
                </div>
            </div>





        ) : (
            <p>Loading ...</p>
        )
    )
}

export  default DisplayArt