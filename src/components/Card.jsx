import React from 'react';

// La fonction "card" permet de récupérer l' id, le title et le cover (image) des logements
const Card = ({ id, title, cover }) => {
    return(
        <li key={id} className='logement'> 
            <a href={'/logement/' + id}>
                <figure className='logement_figure'>
                    <img src={cover} alt={title}  className='logement_figure_cover'/>
                    <figcaption className='logement_figure_figcaption'>
                        <h2 className='logement_figure_figcaption_title'>{title}</h2>
                    </figcaption>
                </figure>
            </a> 
        </li> // "li" crée une liste des logements
    ) // "key" identifie tous les éléments, afin d'éviter des clés manquantes
}

export default Card;