import React, {useState, useEffect} from 'react'
import image1  from "./images/1000_F_259692993_uUOLDS9ISn2FRljd9LpI6YYKEx2HM4v7.jpg"
import image2 from "./images/artist Image.jpg"
import image3 from "./images/moder-art-exhibit-mallorca-vertical-people-watch-paintings-gallery-nit-de-night-event-palma-de-98934513.webp"
import './ImageGallery.css'

const ImageGallery = () => {

    const [currentPic, setCurrentPic] = useState(image2)

    const imgGallery = [image1, image2, image3]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPic(prevPic => {
            let randomIndex;
            do {
               randomIndex = Math.floor(Math.random() * imgGallery.length)
            } while (imgGallery[randomIndex] === prevPic);
            return imgGallery[randomIndex];
        });

            // let randomIMG = imgGallery[randomIndex]
        
            // setCurrentPic(randomIMG)
        }, 10000)
       
        return () => clearInterval(intervalId)
    }, [imgGallery, currentPic])

    useEffect(() => {
        
        const imageElement = document.querySelector('.fade');

        // if (imageElement) {
        //     imageElement.classList.add("fade-out");
        //     setTimeout(() => {
        //         setCurrentPic(prevPic => {
        //             imageElement.classList.remove("fade-out");
        //             return prevPic
        //         })
        //     }, [1000])
        // }


        imageElement.classList.add('fadeTrigger');
    
        
        setTimeout(() => {
          imageElement.classList.remove('fadeTrigger');
        }, 10000); 
    
      }, [currentPic]);
    

          

   return (
    <div  className='imageContainer'>
        <img src={currentPic} className='fade' alt='Random Image' />
    </div>
   )
}

export default ImageGallery
