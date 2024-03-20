import React from 'react';
import logements from '../data/logements.json';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import RatingScale from '../components/RatingScale';
import Collapse from '../components/Collapse';
import '../styles/Logement.scss'
import Error from './Error';
// useParams est importé avec tous les autres composants

const Logement = () => {

    // Le hook "useParams" permet d'extraire les paramètres des logements (id) 
  const { id } = useParams()
  const logement = logements.find(logement => logement.id === id)
  if (logement === undefined) {
    return <Error />
  } // Si le logement est "undefined" on est renvoyé vers la page d'erreur

  return (
      <section className='logement-page'>
        <Gallery 
        img={logement.pictures} 
        />
        <header className='logement-page-header'>
                <article className='logement-page-header-infos'>
                    <p className='logement-page-header-infos-title'>{logement.title}</p>
                    <p className='logement-page-header-infos-subtitle'>{logement.location}</p>
                    <div className='logement-page-header-infos-tags'>
                        {logement.tags.map((tag, i) => (
                            <p key={i} className='logement-page-header-infos-tags-tag'>{tag}</p>
                        ))}
                    </div> 
                </article> 
            
                <article className='logement-page-header-host'>
                    <div className='logement-page-header-host-infos'>
                        <p className='logement-page-header-host-infos-name'>{logement.host.name}</p>
                        <img src={logement.host.picture} alt='host-cover' className='logement-page-header-host-infos-img'/>
                    </div>
                    <RatingScale
                        scaleValue={logement.rating}
                    />
                </article>
            </header>

            <article className='logement-page-collapses'>
                <div className='logement-page-collapses-content'>
                    <Collapse
                        title='Description'
                        content={logement.description}
                    />
                </div>
                <div className='logement-page-collapses-content'>
                    <Collapse
                        title='Équipements'
                        content={logement.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <li className="nolist" >{equipment}</li>
                            </ul>
                        ))}
                    />
                </div>
            </article>
        </section>
    )
}
// Dans "Header" et "Equipement" les paramètres sont récupérés par "map" dans des listes créées par "key" 

export default Logement;
