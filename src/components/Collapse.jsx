import React from 'react';
import { useState } from "react";
import vector_up from '../assets/vector_up.png';
import vector_down from '../assets/vector_up.png';
import '../styles/Collapse.scss';
// Importation du hook usestate pour pouvoir déclarer la variable d'état

const vectorUp =  <img className='vectorup' src={vector_up} alt=""/>;
const vectorDown =  <img className='vectordown' src={vector_down} alt=""/>;
//Définition des images servant de chevron d'ouverture et fermeture

const Collapse = (props) => {
    const [ openWrapper, setOpenWrapper ] = useState(false);
// L'état initial (useState) est "false", c'est a dire "Collapse fermé"

    const openClose = () => {
        setOpenWrapper((openWrapper) => !openWrapper);
    }; // La fonction openClose: SetopenWrapper permet de modifier la valeur de l'état

    return (
        <>
        <div  onClick={openClose} className="collapse-header"> 
            <p className="collapse-header-title">{props.title}</p> 
            {!openWrapper ? <i  className="collapse-header-image1" alt="">{vectorUp}</i> : <i  className="collapse-header-image2" alt="">{vectorDown}</i>}
        </div>
        
        {openWrapper &&
            <div className="collapse-content">{props.content}</div>
        }
        </> // Au clic, "openclose" change l'état du chevron fermé et affiche le contenu des props (texte à afficher)
    ) // le "title" affiche le contenu des props (titres)
}

export default Collapse;