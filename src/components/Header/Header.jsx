
import React from 'react';
import logo from '../../assets/logo_red.png';
import {Link} from 'react-router-dom';
import './Header.scss';



function Header() {

    return (
        <header className='header_container'>
            <Link  to="/">
                <img className='logo' src={logo} alt="logo kasa"/>
            </Link>
            <nav className="navbar">
                <div className="navlink">
                    <Link className="nav" to="/">Accueil</Link>
                </div>
                <div className="navlink">
                    <Link className="nav" to="About">À propos</Link>
                </div>
            </nav>
        </header>
       ) 
}
    

    export default Header; 