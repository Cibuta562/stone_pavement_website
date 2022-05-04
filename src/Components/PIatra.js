import React, { useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import ScrollAnimate from "react-scroll-fade-animation";
import Trailer from "./Trailer";
import {Container} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';


import "react-image-gallery/styles/css/image-gallery.css";

import piatra1 from "../assets/gallery/piatra1.jpeg"
import piatra2 from "../assets/gallery/piatra2.jpeg"
import piatra3 from "../assets/gallery/piatra3.jpeg"
import piatra4 from "../assets/gallery/piatra4.jpeg"
import piatra5 from "../assets/gallery/piatra5.jpeg"
import piatra6 from "../assets/gallery/piatra6.jpeg"
import piatra7 from "../assets/gallery/piatra7.jpeg"
import piatra8 from "../assets/gallery/piatra8.jpeg"

import "./Piatra.css";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";
import Page from "react-page-loading";

const images = [
    {
        original: piatra1,
    },
    {
        original: piatra2,
    },
    {
        original: piatra3,
    },
    {
        original: piatra4,
    },
    {
        original: piatra5,
    },
    {
        original: piatra6,
    },
    {
        original: piatra7,
    },
    {
        original: piatra8,
    },
];

const Piatra = () => {

    return (
        <div className='piatra'>


            <HeaderMobile/>
            <h1 className='titluTrailer'>Piatra</h1>
            <div className="box">

                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
                <ImageGallery items={images} />
                <br/>
                <br/>
            </div>
            <Footer/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet"/>
        </div>
    )
}

export default Piatra