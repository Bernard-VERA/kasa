import React from "react"
import image_home from '../assets/image_home.png';
import DisplayCards from "../components/DisplayCards"
import '../styles/Home.css'


 export default function Home () {

    return (
        <main className="main-home">
            <div className="banner">
                <img className="banner-img" src={image_home} alt="" />
                <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
            </div>
            <DisplayCards />
        </main>
    )
}

