import { NavLink } from "react-router-dom";

export default function Error () {
    return(
        <section className="error_page">
              <p className="error_page_text">Oups! La que vous demandez n'existe pas.</p>
              <NavLink className="error_page_link" title="Accueil" end to="/Home">Retourner sur la page d'accueil</NavLink>
            </section>
        
    
    )
}