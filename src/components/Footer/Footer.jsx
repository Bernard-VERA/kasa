import React from 'react';
import logo_white from '../../assets/logo_white.png'
import '../../styles/Footer.scss';

 const Footer = () => {
    return(
        <footer className="footer">
            <img src={ logo_white} className='footer_logo' alt='logo Kasa' />
            <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}


export default Footer