import React, { useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import ScrollAnimate from "react-scroll-fade-animation";
import Trailer from "./Trailer";
import {Container} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';


import "react-image-gallery/styles/css/image-gallery.css";

import "./Piatra.css";
import pomi1 from "../assets/gallery/pomi1.jpeg"
import pomi2 from "../assets/gallery/pomi2.jpeg"
import pomi3 from "../assets/gallery/pomi3.jpeg"
import pomi4 from "../assets/gallery/pomi4.jpeg"
import pomi5 from "../assets/gallery/pomi5.jpeg"
import pomi6 from "../assets/gallery/pomi6.jpeg"
import pomi7 from "../assets/gallery/pomi7.jpeg"

import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";
import Page from "react-page-loading";

const images = [
    {
        original: pomi1,
    },
    {
        original: pomi3,
    },
    {
        original: pomi2,
    },
    {
        original: pomi7,
    },
    {
        original: pomi5,
    },
    {
        original: pomi6,
    },
    {
        original: pomi4,
    },
];

const Tui = () => {

    return (
        <div className='piatra'>


            <HeaderMobile/>
            <h1 className='titluTrailer'>Tui</h1>
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

export default Tui