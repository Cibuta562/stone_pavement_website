
import './App.css';
import Trailer from "./Components/Trailer.js";
import Footer from "./Components/Footer";
import Team from "./Components/Team"
import "animate.css/animate.min.css";
import HeaderMobile from "./Components/HeaderMobile";
import About from "./Components/About"
import React, { useEffect, useState, Component} from "react";
import AbtTeam from './Components/AbtTeam'
import "./Fonts/Roboto/Roboto-Bold.ttf";
import "./Fonts/BebasNeue/BebasNeue/TTF/BebasNeue-Bold.ttf";
import "./Fonts/Archive/Archive/Commercial/OTF/Archive-Regular.otf";
import "./Fonts/Roboto/Roboto-Black.ttf";
import CookieConsent from "react-cookie-consent";
import ScrollAnimate from "react-scroll-fade-animation";
import ReactGA from 'react-ga';
import CTA from "./Components/CTA";
import Transition from "./Components/Transition";
import Page from 'react-page-loading'
ReactGA.initialize('UA-223827648-1');
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {





    return (
        <div className='app'>
            <Page loader={"spin"} color={"gray"} size={6}>
                <HeaderMobile/>

            <ScrollAnimate path={'bottom'}>
                <Trailer/>
            </ScrollAnimate>

            <ScrollAnimate path={'bottom'}>
                        <About/>
            </ScrollAnimate>

            <ScrollAnimate path={'bottom'}>
                <Team/>
            </ScrollAnimate>

            <ScrollAnimate path={'bottom'}>
                <CTA/>
            </ScrollAnimate>


            <CookieConsent debug={false} location="bottom" buttonStyle={{ color: "#000", background: "#fff", fontSize: "14px", borderRadius: "10px"}}
                           style={{background: "#1e1e1e", fontFamily: "Fredoka"}} contentStyle={{marginLeft: "13%"}}>
                           Our website uses cookies to improve your experience 🍪
            </CookieConsent>
            <Footer />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet"/>

            </Page>

        </div>
    )
}export default App
