import React from 'react';
import greystar from '../assets/greystar.png';
import redstar from '../assets/redstar.png';
import '../styles/RatingScale.scss'

const star_red = <img className='redstar' src={redstar} alt=""/>;
const star_grey = <img className='greystar' src={greystar} alt=""/>;

// "RatingScale" récupère tous les éléments avec "props"
function RatingScale (props) {
    const scaleValue = props.scaleValue
    const range = [1, 2, 3, 4, 5]
// On crée une liste pour y déposer les éléments

// Puis on passe les paramètres. "map"permet de récupérer les éléments créés par "key"
    return (
        <div className='rating-star'>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                    <span key={rangeElem} className='rating-star-red'>{star_red}</span> : 
                    <span key={rangeElem} className='rating-star-grey'>{star_grey}</span>
            )}
        </div>        
    )
}

export default RatingScale;