import React from "react"
import { NavLink } from "react-router-dom";
import '../styles/Error.css'

export default function Error () {
    return(
        <section className="error_page">
            <h1 className="error_page_number">404</h1>
              <p className="error_page_text"><span className="part1">Oups! La page que</span><span className="part2"> vous demandez n'existe pas.</span></p>
              <NavLink className="error_page_link" title="Accueil" end to="/">Retourner sur la page d'accueil</NavLink>
            </section> 
    )
}
// Le lien end to="/" permet de retourner sur la page d'accueil.