import React, { useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import ScrollAnimate from "react-scroll-fade-animation";
import Trailer from "./Trailer";
import {Container} from "react-bootstrap";
import "./Piatra.css";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";

const Piatra = () => {

    return (
        <div className='Piatra'>


            <HeaderMobile/>
            <h1>Piatra</h1>
            <Footer/>

        </div>
    )
}

export default Piatra