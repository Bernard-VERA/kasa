import React from 'react';

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
        </li>
    )
}

export default Card;