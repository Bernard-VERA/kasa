import { Link } from "react-router-dom";
import React from 'react';
import { useFetch } from '../hook/hook.jsx'
import { Loader } from './Loader'
import '../styles/Loader.scss';
import '../styles/ListLocation.scss';


export default function ListLocation() {
    const { data, isLoading, error} = useFetch(`/logements.json`)
    if (error) {
        return <pre>{error}</pre>
    }
        return(
            <section className="location_container">
            {isLoading ? (
            <div className="loader_wrapper">
                <Loader data-testid="loader" />
            </div>
            ) : (data.map((logement) => (
                <Link className="location_link" key={logement.id} to={`/Logement/${logement.id}`}>
                    <img className="location_img" key={"cover"+logement.id} src={logement.cover} alt={logement.title} />
                    <h2 className="location_title" key={"title"+logement.id}>{logement.title}</h2>
                    <div className="background"></div>
                </Link>
                )
        ))}
            </section>
           ) 
        }
