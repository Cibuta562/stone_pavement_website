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
import Page from "react-page-loading";

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
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