import React, { useEffect } from 'react';
import "./CTA.css"
import piatra_cta from  "../assets/owner/piatra_cta.jpg" ;
import bani_cta from  "../assets/owner/bani_cta.jpg" ;
import timp_cta from  "../assets/owner/timp_cta.jpg" ;
import {Link} from "react-router-dom";
import instagramIcon from "../assets/assets_website/logo_fb_black.png";
import twitterIcon from "../assets/assets_website/whapp.png";
import olxIcon from "../assets/owner/olx-logo.png";
import {Container} from "react-bootstrap";
import emailjs from "emailjs-com";

const CTA = () => {


    function moveToOlx(){
        window.open ("https://www.olx.ro/oferte/user/d0Liv/");
    }

    function moveToWapp(){
        window.open ("https://wa.me/message/JUE5BSRGGMDCA1");
    }

    function moveToFb(){
        window.open ("https://www.facebook.com/profile.php?id=100081064977561");
    }

    function sendEmail(e) {
        e.preventDefault();


        emailjs.sendForm("Piatra Naturala de Munte", "template_rpiry6d", e.target, "7M4Cj0uk_09UOe3du")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }




    return (
        <div className='call-to-action'>


                <div className="call-space">
                    <div className="direct-contact-container">
                        <hr className="opp"/>

                    </div>
                </div>


            <div className="col-call col-margin">
            <div className="card-call">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                    </div>
                </div>
            </div>
                <div className="card-call1" onClick={moveToFb}>
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
                <div className="card-call1" onClick={moveToWapp}>
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
                <div className="card-call1" onClick={moveToOlx}>
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

                <form onSubmit={sendEmail} id="contact-form" className="form-horizontal" role="form">

                            <input type="text" className="form-control col-sm-12 form-group" placeholder="NUME" name="name"
                                    />

                            <input type="email" className="form-control col-sm-12 form-group"  placeholder="EMAIL" name="email"
                                    />

                    <textarea className="form-control" rows="10" placeholder="MESAJ" name="message"
                              required></textarea>

                    <input type="submit" className='mintButton1-contact' value="SEND">
                    </input>

                </form>


                <div className="direct-contact-container">

                    <ul className="contact-list">
                        <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text place"><a
                            href="tel:+40790347866" title="Give me a call">0790347866</a></span></i></li>

                        <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text place"><a
                            href="tel:+40790347866" title="Give me a call">0728523219</a></span></i></li>

                        <li className="list-item"><i className="fa fa-envelope fa-2x"><span
                            className="contact-text place"><a href="mailto:marinalin2003@gmail.com"
                                                              title="Send me an email">marinalin2003@gmail.com</a></span></i>
                        </li>

                    </ul>

                    <hr/>
                        <ul className="social-media-list">
                            <div className='headerActions'>
                                <div className="instagramContainerH" >
                                    <img src={instagramIcon} onClick={moveToFb}/>
                                </div>
                                <div className="twitterContainerH" >
                                    <img src={twitterIcon} onClick={moveToWapp}/>
                                </div>
                                <div className="instagramContainerH" >
                                    <img src={olxIcon} onClick={moveToOlx}/>
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