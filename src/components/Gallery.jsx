import React, { useState } from "react";
import vector_left from '../assets/vector_left.png';
import vector_right from '../assets/vector_right.png';
import '../styles/Gallery.scss'
// Importation du hook usestate pour pouvoir déclarer la variable d'état

const angleLeft =  <img className='vector_left' src={vector_left} alt=""/>;
const angleRight =  <img className='vector_right' src={vector_right} alt=""/>;


const Gallery = (props) => {
    const [slideIdx, setSlideIdx] = useState(0);
 // L'état initial (useState) est à 0  

 // "onNext" et "onPrev" permettent de changer l'état initial, et font changer le "idx" en + ou en - 
    const onNext = () => {
        if(slideIdx === props.img.length - 1){
            setSlideIdx(0)
        } else {
            setSlideIdx(slideIdx + 1)
        }
    }

    const onPrev = () => {
        if(slideIdx === 0){
            setSlideIdx(props.img.length - 1)
        } else {
            setSlideIdx(slideIdx - 1)
        }
    }

    // Le style "transform translateX" permet de déplacer l'image de 100% horizontalement
    // "props.img.map" permet de récupérer les images, avec la liste créée par "key"
    return (
        <div className='slideshow'>
            <div className='slideshow-container' style={{transform: `translateX(-${slideIdx * 100}%)`}}>
                {props.img.map((picture, i) => 
                    <img className='slideshow-container-img' alt='diaporama-page-logement' src={picture} key={i} />
                )}
            </div>
            
            
            {props.img.length > 1 && <>
            <div className='slideshow-controls'>
                <i className='slideshow-controls-chevron' onClick={onPrev}>{angleLeft}</i>
                <i className='slideshow-controls-chevron' onClick={onNext}>{angleRight}</i>
            </div>
            <div className='slideshow-idx'>{slideIdx + 1} / {props.img.length}</div>
            </>}
        </div>
    )  // S'il y a plus d'une image, au clic,le chevron et l' "idx" changent 
}

export default Gallery;