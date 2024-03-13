import React from 'react';
import greystar from '../assets/greystar.png';
import redstar from '../assets/redstar.png';
import '../styles/RatingScale.css'

const star_red = <img className='redstar' src={redstar} alt=""/>;
const star_grey = <img className='greystar' src={greystar} alt=""/>;

function RatingScale (props) {
    const scaleValue = props.scaleValue
    const range = [1, 2, 3, 4, 5]

    return (
        <div className='rating_star'>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()} className='rating_star_red'>{star_red}</span> : 
                    <span key={rangeElem.toString()} className='rating_star_grey'>{star_grey}</span>
            )}
        </div>        
    )
}

export default RatingScale