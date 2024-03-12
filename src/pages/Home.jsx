import React from "react"
import image_home from '../assets/image_home.png';
import DisplayCards from "../components/DisplayCards"
import '../styles/Home.scss'


 export default function Home () {

    return (
        <main className="main_home">
            <div className="banner">
                <img className="banner_img" src={image_home} alt="" />
                <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
            </div>
            <DisplayCards />
        </main>
    )
}

