import React from 'react'
import "./DownloadLinks.css"
import cardImg from "../assets/cardImg.png"
import iphoneLogo from "../assets/iphonelogo.png"
import playstorLogio from "../assets/playstore logo.png"
import appleStoreLogo from "../assets/applegallerylogo.png"

const DownloadLinks = () => {
    return (
        <>
            <h1>Put us in you pocket</h1>

            <div className="cardConatiner">
                <div className="card">

                    <div className="content">

                        <h3>Download the food and groceries you love </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum excepturi dolores eius odit, facilis accusamus velit magni eaque quo tempore necessitatibus odio quae sapiente, voluptatum deleniti quaerat. Accusantium ea eum sint nulla magnam blanditiis?</p>
                        <div className="links">
                            <div className="link">
                                <img src="https://th.bing.com/th/id/R.42e914ec69f14c033950263c15a37aa0?rik=53PSIWfLLSETbQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxcg%2fKK4%2fxcgKK4qki.jpeg&ehk=jgRGPCurLOSdaNkNNGlaZayszreRtz1MZi1%2bn9lySAE%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                <span>Apple Store</span>
                            </div>

                            <div className="link">
                                <img src={playstorLogio} alt="" />
                                <span>Play Store</span>
                            </div>

                            <div className="link">
                                <img  src="https://th.bing.com/th/id/OIP.ckuYqUeO2cj_ZMHSINMPHQHaGB?rs=1&pid=ImgDetMain" alt="" />
                                <span>App Gallery</span>
                            </div>
                        </div>

                    </div>

                    <img id='cardImg' src={cardImg} alt="" />

                </div>
            </div>
        </>
    )
}

export default DownloadLinks