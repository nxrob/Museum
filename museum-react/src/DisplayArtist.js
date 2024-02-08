import React from "react"


function DisplayArtist(artists) {
    return(
        artists ? (
            <div>
                <div>
                    {artists.map((artist) => (
                        <div key= {artist.id}>
                      
                            <p>Id: : {artist.id}</p>
                            <p>Name: : {artist.name}</p>
                           
                                             
                        </div>
                    ))}
                </div>
            </div>





        ) : (
            <p>Loading ...</p>
        )
    )
}

export  default DisplayArtist