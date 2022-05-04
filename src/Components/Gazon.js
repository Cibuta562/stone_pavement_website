import React, { useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import ScrollAnimate from "react-scroll-fade-animation";
import Trailer from "./Trailer";
import {Container} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';

import gazon1 from "../assets/gallery/gazon1.jpeg"
import gazon2 from "../assets/gallery/gazon2.jpeg"
import gazon3 from "../assets/gallery/gazon3.jpeg"
import gazon4 from "../assets/gallery/gazon4.jpeg"


import "react-image-gallery/styles/css/image-gallery.css";

import "./Piatra.css";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";
import Page from "react-page-loading";

const images = [
    {
        original: gazon1,
    },
    {
        original: gazon2,
    },
    {
        original: gazon3,
    },
    {
        original: gazon4,
    },
];

const Gazon = () => {

    return (
        <div className='piatra'>


            <HeaderMobile/>
            <h1 className='titluTrailer'>Gazon</h1>
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

export default Gazon