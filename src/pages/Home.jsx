import React from "react";
import image_home from '../assets/image_home.png';
import '../styles/home.scss'


 function Home () {

    return(
        <main className="main-home">
            <div className="banner">
                <img className="banner_img" src={image_home} alt="" />
                <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
            </div>
        </main>
    )
}

export default Home;