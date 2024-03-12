import React from 'react';
import logements from '../data/logements.json'
import Card from './Card'
import '../styles/DisplayCards.scss'

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
    )
}

export default DisplayCards;