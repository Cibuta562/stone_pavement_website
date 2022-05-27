import './about.css'
import ImageGallery from 'react-image-gallery';


import "react-image-gallery/styles/css/image-gallery.css";

import piatra1 from "../assets/gallery/piatra1.jpeg"
import piatra2 from "../assets/gallery/piatra2.jpeg"
import piatra3 from "../assets/gallery/piatra3.jpeg"
import piatra4 from "../assets/gallery/piatra4.jpeg"
import piatra5 from "../assets/gallery/piatra5.jpeg"
import piatra6 from "../assets/gallery/piatra6.jpeg"
import pomi1 from "../assets/gallery/pomi1.jpeg"
import gazon3 from "../assets/gallery/gazon3.jpeg"
import piatra9 from "../assets/gallery/piatra9.jpeg"
import gratar1 from "../assets/gallery/gratar1.jpeg"

import React, { useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import ScrollAnimate from "react-scroll-fade-animation";
import Trailer from "./Trailer";
import {Container} from "react-bootstrap";

const About = () => {
    useEffect(() => {
        document.title = 'Piatra Naturala';
    });

    function moveToTop(){
        window.scrollTo(0, 6300);
    }

    const images = [
        {
            original: piatra9,
        },
        {
            original: gratar1,
        },
        {
            original: gazon3,
        },
        {
            original: pomi1,
        },
    ];

    return (
        <div className='diagonal'>
        <div className='stories'>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>

                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
                <div className="story1">
                    <div className='box1'>

                        <h2 style={{marginBottom: "20px"}}></h2>
                        <div className='non-hoverAbout'>
                            <p style={{textAlign: "center"}} className="text-sus-piatra">
                                Oferim servicii de montare piatra naturala de munte.
                                Montajul se executa in toata tara, iar piatra se poate placa pe:
                                </p>
                            <br/>
                            <p style={{textAlign: "center"}} className="text-about">
                                -Alei pietonale
                            </p>
                            <p style={{textAlign: "center"}} className="text-about">
                                -Parcari auto
                            </p>
                            <p style={{textAlign: "center"}} className="text-about">
                                -Scari
                            </p>
                            <p style={{textAlign: "center"}} className="text-about">
                                -Soclul casei
                            </p>
                            <p style={{textAlign: "center"}} className="text-about">
                                -Garduri
                            </p>
                            <p style={{textAlign: "center"}} className="text-about">
                                -etc.
                            </p>
                            <br/>
                            <p style={{textAlign: "center"}} className="text-sus-piatra">Piatra vine in diferite nuanțe si poate fi aleasa de catre dumneavoastra.</p>
                            <p style={{textAlign: "center"}} className="text-sus-piatra">  Pentru mai multe detalii accesati pagina de contact sau sunati la numarul afisat.
                            </p>
                            <br/>
                            <p style={{textAlign: "center"}} className="text-sus-piatra"> 0790347866
                            </p>

                                <p style={{textAlign: "center"}} className="text-sus-piatra"> 0728523219
                            </p>
                            <br/>

                            <ImageGallery items={images} />
                        </div>
                </div>
            </div>
        </div>
            <Link className="no-hover-mint" to="#">
            <button className='mintButton1' onClick={moveToTop} style={{marginTop: "-50px"}}>
                CONTACT
                </button>
            </Link>
            <ScrollAnimate path={'bottom'}>

            </ScrollAnimate>

</div>
    )
}

export default About