import React from "react"


function DisplayArt(artwork) {
    return(
        artwork ? (
            <div>
                <div>
                    {artwork.map((art) => (
                        <div key= {art.id}>
                      
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