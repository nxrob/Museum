import React, {useState, useEffect} from 'react'
import image1  from "./images/1000_F_259692993_uUOLDS9ISn2FRljd9LpI6YYKEx2HM4v7.jpg"
import image2 from "./images/il_570xN.1185533356_i5n8.avif"
import image3 from "./images/IMG20230209122950.jpg"
import image4 from "./images/Skye-Canvas-painting-prints-art-Scotland-Scottish-Artist-Peutherer-scaled.jpg"
import image5 from "./images/cute-dog-paintings-on-canvas-1024x814.jpg"
import image6 from "./images/van-gogh-starry-night-min.jpg"
import './ImageGallery.css'

const ImageGallery = () => {

    const [currentPic, setCurrentPic] = useState(image2)

    const imgGallery = [image1, image2, image3, image4, image5, image6]

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
