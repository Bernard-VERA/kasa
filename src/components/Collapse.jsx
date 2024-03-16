import React from 'react';
import { useState } from "react";
import vector_up from '../assets/vector_up.png';
import vector_down from '../assets/vector_up.png';
import '../styles/Collapse.scss';

const vectorUp =  <img className='vectorup' src={vector_up} alt=""/>;
const vectorDown =  <img className='vectordown' src={vector_down} alt=""/>;

const Collapse = (props) => {
    const [ openWrapper, setOpenWrapper ] = useState(false);

    const openClose = () => {
        setOpenWrapper((openWrapper) => !openWrapper);
    };

    return (
        <>
        <div  className="collapse_header">
            <p className="collapse_header_title">{props.title}</p>
            {!openWrapper ? <i onClick={openClose} className="collapse_header_image1" alt="">{vectorUp}</i> : <i onClick={openClose} className="collapse_header_image2" alt="">{vectorDown}</i>}
        </div>
        {openWrapper &&
            <div className="collapse_content">{props.content}</div>
        }
        </>
    )
}

export default Collapse