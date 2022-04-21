import React, { useEffect } from 'react';
import "./CTA.css"
import {Card, Col, Container, Row} from "react-bootstrap";
import {Button} from "bootstrap";
import piatra_cta from  "../assets/owner/piatra_cta.jpg" ;
import bani_cta from  "../assets/owner/bani_cta.jpg" ;
import timp_cta from  "../assets/owner/timp_cta.jpg" ;
import {Link} from "react-router-dom";
import RoadMap from "./RoadMap";
import instagramIcon from "../assets/assets_website/logo_fb_black.png";
import twitterIcon from "../assets/assets_website/whapp.png";

const CTA = () => {

    function moveToTwitter(){
        window.open ("https://twitter.com/DoberLads");
    }

    function moveToDiscord(){
        window.open ("https://discord.gg/hCdmCCJdfx");
    }

    function moveToFb(){
        window.open ("https://www.facebook.com/bobocrobertandrei/");
    }

    function moveToDis(){
        window.open("https://discord.gg/hCdmCCJdfx");
    }

    function moveToTwitter(){
        window.open("https://twitter.com/DoberLads");
    }



    return (
        <div className='call-to-action'>
                <div className="call-space"></div>

            <div className="col-call col-margin">
            <div className="card-call">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                    </div>
                </div>
            </div>
                <div className="card-call1" onClick={moveToDis}>
                    <div style={{position: "relative"}}  style={{marginTop:"10px"}}>
                        <img className="img-call" src={piatra_cta} />
                    <p className="names-call">Calitate superioara</p>
                    <p  className="names-call-p">Pentru ca ne dorim ce este mai bun pentru clientul nostru oferim servicii superioare</p>
                    </div>
                </div>
            </div>

            <div className="col-call col-margin">
                <div className="card-call ">
                    <div className="icon" style={{marginTop:"10px"}}>
                        <div className="continut">
                        </div>
                    </div>
                </div>
                <div className="card-call1" onClick={moveToTwitter}>
                    <div  style={{marginTop:"10px"}}>
                        <div style={{position: "relative"}}>
                            <img className="img-call" src={timp_cta} />
                            <p className="names-call">Mereu la timp</p>
                            <p  className="names-call-p">Ne respectam termenii stabiliti, iar echipa nostra termina lucrarea eficient si calitativ</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-call">
                <div className="card-call">
                    <div className="icon" style={{marginTop:"10px"}}>
                        <div className="continut">
                        </div>
                    </div>
                </div>
                <Link to="/roadmap">
                <div className="card-call1" >
                    <div style={{marginTop:"10px"}}>
                        <div style={{position: "relative"}}>
                            <img className="img-call" src={bani_cta} />
                            <p className="names-call">Preturi accesibile</p>
                            <p  className="names-call-p">Pentru a primi o oferta din partea nostra contacteaza-ne pe WhatsApp!</p>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
            <div className="call-space"></div>
            <h1 className="section-header">Contact</h1>

            <div className="contact-wrapper">

                <form id="contact-form" className="form-horizontal" role="form">

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" id="name" placeholder="NUME" name="name"
                                   value="" required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"
                                   value="" required/>
                        </div>
                    </div>

                    <textarea className="form-control" rows="10" placeholder="MESAJ" name="message"
                              required></textarea>

                    <button className='mintButton1-contact' >
                        SEND
                    </button>

                </form>


                <div className="direct-contact-container">

                    <ul className="contact-list">
                        <li className="list-item"><i className="fa fa-map-marker fa-2x"><span
                            className="contact-text place">Bucuresti</span></i></li>

                        <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text place"><a
                            href="tel:1-212-555-5555" title="Give me a call">0723344599</a></span></i></li>

                        <li className="list-item"><i className="fa fa-envelope fa-2x"><span
                            className="contact-text place"><a href="mailto:#"
                                                              title="Send me an email">andreiboboccibo@gmail.com</a></span></i>
                        </li>

                    </ul>

                    <hr/>
                        <ul className="social-media-list">
                            <div className='headerActions'>
                                <div className="instagramContainerH" >
                                    <img src={instagramIcon} onClick={moveToFb}/>
                                </div>
                                <div className="twitterContainerH" >
                                    <img src={twitterIcon} onClick={moveToTwitter}/>
                                </div>
                            </div>
                        </ul>

                    <hr/>


                </div>

            </div>
        </div>
    )
}

export default CTA