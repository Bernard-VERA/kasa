import React from 'react';
import logo_white from '../assets/logo_white.png'
import '../styles/Footer.scss';

 const Footer = () => {
    return(
        <footer className="footer">
            <img src={ logo_white} className='footer-logo' alt='logo Kasa' />
            <p className='footer-text'><span>© 2020 Kasa. All </span> <span>rights reserved</span></p>
        </footer>
    )
}


export default Footer