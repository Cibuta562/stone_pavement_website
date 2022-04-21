import React, { useState, useEffect } from "react";
import { ReactComponent as CloseMenu } from "../assets/owner/x.svg";
import { ReactComponent as MenuIcon } from "../assets/owner/menu.svg";
import { ReactComponent as Logo } from "../assets/owner/menu.svg";
import "./HeaderMobile.css";
import {Link} from "react-router-dom";
import dobbsLogo from "../assets/LOGO_PIATRA.png";
import instagramIcon from "../assets/assets_website/logo_fb_black.png";
import twitterIcon from "../assets/assets_website/whapp.png";
import discordIcon from "../assets/assets_website/discord-black-icon-703937.png";

const HeaderMobile = () => {



    function moveToFAQ() {
        window.scrollTo(0,3400);
    }

    function moveToTeam() {
        window.scrollTo(0,1200);
    }

    function moveToDoberlads() {
        window.scrollTo(0,0);
    }

    function moveToTwitter(){
        window.open ("https://twitter.com/DoberLads");
    }

    function moveToDiscord(){
        window.open ("https://discord.gg/hCdmCCJdfx");
    }

    function moveToFb(){
        window.open ("https://www.facebook.com/bobocrobertandrei/");
    }

    function moveToTop() {
        window.scrollTo(0,0);
    }

    function mobileAndMove(){
        moveToTop();
        closeMobileMenu();
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet"/>
            <div className='logoContainer'>
                <Link classname="no-decorations" to="/">
                    <img src={dobbsLogo} className='doberLogo' />
                </Link>
            </div>
            <div className='headerItems' style={{marginBottom: "23px", marginRight: "120px", marginTop: "25px"}}>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option " onClick={closeMobileMenu}>
                        <Link   to="/" style={{ textDecoration: 'none', color: "rgb(0,0,0)"}}>
                            <p className='road-maphead' onClick={moveToDoberlads}>PIATRA</p>
                        </Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu} >
                        <Link   to="/" style={{ textDecoration: 'none', color: "rgb(0,0,0)" }}>
                            <p className='road-maphead' onClick={moveToTeam}>GRATARE</p>
                        </Link>
                    </li>
                    <li className="option " onClick={closeMobileMenu} >
                        <Link  to="/" style={{ textDecoration: 'none', color: "rgb(0,0,0)" }}>
                            <p className='road-maphead' onClick={moveToFAQ}>GAZON</p>
                        </Link>
                    </li>
                    <li className="option " onClick={mobileAndMove} >
                        <Link  to="/roadmap" style={{ textDecoration: 'none', color: "rgb(0,0,0)" }}>
                            <p className='road-maphead'>POMI</p>
                        </Link>
                    </li>
                    <li className="option " onClick={mobileAndMove} >
                        <Link  to="/roadmap" style={{ textDecoration: 'none', color: "rgb(0,0,0)" }}>
                            <p className='road-maphead'>FANTANI</p>
                        </Link>
                    </li>
                    <li className="option buttons"  onClick={closeMobileMenu} >
                        <div className='headerActions'>
                            <div className="instagramContainerH" >
                                <img src={instagramIcon} onClick={moveToFb}/>
                            </div>
                            <div className="twitterContainerH" >
                                <img src={twitterIcon} onClick={moveToTwitter}/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon"/>
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};

export default HeaderMobile;
