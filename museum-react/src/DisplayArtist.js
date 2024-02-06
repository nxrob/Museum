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
                            {/* <p>Biography: : {artist.bio}</p> */}
                                             
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