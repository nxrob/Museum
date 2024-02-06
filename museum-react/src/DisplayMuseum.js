import React from "react"


function DisplayMuseum(museums) {
    return(
        museums ? (
            <div>
                <div>
                    {museums.map((museum) => (
                        <div key= {museum.id}>
                      
                            <p>Id: : {museum.id}</p>
                            <p>Name: : {museum.name}</p>
                           
                                             
                        </div>
                    ))}
                </div>
            </div>





        ) : (
            <p>Loading ...</p>
        )
    )
}

export  default DisplayMuseum