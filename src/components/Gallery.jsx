import React, { useState } from "react";
import vector_left from '../assets/vector_left.png';
import vector_right from '../assets/vector_right.png';
import '../styles/Gallery.scss'

const angleLeft =  <img className='vector_left' src={vector_left} alt=""/>;
const angleRight =  <img className='vector_right' src={vector_right} alt=""/>;


const Gallery = (props) => {
    const [slideIdx, setSlideIdx] = useState(0);
    

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
    return (
        <div className='slideshow'>
            <div className='slideshow_container' style={{transform: `translateX(-${slideIdx * 100}%)`}}>
                {props.img.map((picture, i) => 
                    <img className='slideshow_container_img' alt='diaporama-page-logement' src={picture} key={i} />
                )}
            </div>
            
            {props.img.length > 1 && <>
            <div className='slideshow_controls'>
                <i className='slideshow_controls_chevron' onClick={onPrev}>{angleLeft}</i>
                <i className='slideshow_controls_chevron' onClick={onNext}>{angleRight}</i>
            </div>
            <div className='slideshow_idx'>{slideIdx + 1} / {props.img.length}</div>
            </>}
        </div>
    )
}

export default Gallery;