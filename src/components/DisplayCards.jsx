import React from 'react';
import logements from '../data/logements.json'
import Card from './Card'
import '../styles/DisplayCards.scss'

//DisplayCards permet d'afficher les "Cards" créées
const DisplayCards = () => {
    return(
        <section className='logements_container'>
            <ul className='logements_list'>
                {logements.map(({ id, title, cover }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    ) // "map" (utilisé entre accolades) permet d'intégrer tous les éléments de "Card", sous forme de liste
}

export default DisplayCards;