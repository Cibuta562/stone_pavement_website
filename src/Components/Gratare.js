import React, { useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import ScrollAnimate from "react-scroll-fade-animation";
import Trailer from "./Trailer";
import {Container} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';


import "react-image-gallery/styles/css/image-gallery.css";

import "./Piatra.css";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";

import gratar1 from "../assets/gallery/gratar1.jpeg"
import gratar2 from "../assets/gallery/gratar2.jpeg"
import gratar3 from "../assets/gallery/gratar3.jpeg"
import gratar4 from "../assets/gallery/gratar4.jpeg"
import gratar5 from "../assets/gallery/gratar5.jpeg"
import gratar6 from "../assets/gallery/gratar6.jpeg"

import Page from "react-page-loading";

const images = [
    {
        original: gratar1,
    },
    {
        original: gratar2,
    },
    {
        original: gratar3,
    },
    {
        original: gratar4,
    },
    {
        original: gratar5,
    },
    {
        original: gratar6,
    },
];

const Gratare = () => {

    return (
        <div className='piatra'>


            <HeaderMobile/>
            <h1 className='titluTrailer'>Gratare</h1>
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

export default Gratare