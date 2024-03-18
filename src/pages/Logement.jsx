import React from 'react';
import logements from '../data/logements.json';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import RatingScale from '../components/RatingScale';
import Collapse from '../components/Collapse';
import '../styles/Logement.css'
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
      <section className='logement_page'>
        <Gallery 
        img={logement.pictures} 
        />
        <header className='logement_page_header'>
                <article className='logement_page_header_infos'>
                    <p className='logement_page_header_infos_title'>{logement.title}</p>
                    <p className='logement_page_header_infos_subtitle'>{logement.location}</p>
                    <div className='logement_page_header_infos_tags'>
                        {logement.tags.map((tag, i) => (
                            <p key={i} className='logement_page_header_infos_tags_tag'>{tag}</p>
                        ))}
                    </div> 
                </article> 
            
                <article className='logement_page_header_host'>
                    <div className='logement_page_header_host_infos'>
                        <p className='logement_page_header_host_infos_name'>{logement.host.name}</p>
                        <img src={logement.host.picture} alt='host-cover' className='logement_page_header_host_infos_img'/>
                    </div>
                    <RatingScale
                        scaleValue={logement.rating}
                    />
                </article>
            </header>

            <article className='logement_page_collapses'>
                <div className='logement_page_collapses_content'>
                    <Collapse
                        title='Description'
                        content={logement.description}
                    />
                </div>
                <div className='logement_page_collapses_content'>
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
// Dans "Header" et "Equipement" les paramètres sont récupérés par "map" dans des listes crées par "key" 

export default Logement;
