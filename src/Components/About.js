import './about.css'
import './Mint.scss'

import React, { useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import ScrollAnimate from "react-scroll-fade-animation";
import Trailer from "./Trailer";
import {Container} from "react-bootstrap";

const About = () => {
    useEffect(() => {
        document.title = 'Doberlads';
    });

    function moveToTop(){
        window.scrollTo(0, 6300);
    }
    return (
        <div className='diagonal'>
        <div className='stories'>

                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
                <div className="story1">
                    <div className='box1'>

                        <h2 style={{marginBottom: "20px"}}></h2>
                        <div className='non-hoverAbout'>
                            <Container>
                            <p style={{textAlign: "center"}} >
                                Oferim servicii de montare piatra naturală de munte.
                                Montajul se executa in toata țara, iar piatra se poate placa pe :
                                </p>
                            <p style={{textAlign: "center"}}>
                                -alei pietonale
                            </p>
                            <p style={{textAlign: "center"}}>
                                -parcari auto
                            </p>
                            <p style={{textAlign: "center"}}>
                                -scari
                            </p>
                            <p style={{textAlign: "center"}}>
                                -soclul casei
                            </p>
                            <p style={{textAlign: "center"}}>
                                -etc.
                            </p>

                            <p style={{textAlign: "center"}}>Piatra vine in diferite nuanțe si poate fi aleasa de catre dumneavoastra.</p>
                            <p style={{textAlign: "center"}}>  Pentru mai multe detalii accesati pagina de contact sau sunati la numarul afisat.
                            </p>
                            <p style={{textAlign: "center"}}> 0723344599
                            </p>
                            <br/>
                            <br/>
                            <p style={{textAlign: "center"}}>
                            </p>
                        </Container>
                        </div>
                </div>
            </div>
        </div>
            <Link className="no-hover-mint" to="#">
            <button className='mintButton1' onClick={moveToTop}>
                CONTACT
                </button>
            </Link>
            <ScrollAnimate path={'bottom'}>
                <div className='stories'>
                    <div className="story1">
                            <div className='box1'>
                                <h2 style={{marginBottom: "20px"}}></h2>
                                    <div className='non-hoverAbout'>
                                        <p style={{textAlign: "center"}}>
                                          </p>
                                    </div>
                            </div>
                    </div>
                </div>
            </ScrollAnimate>

</div>
    )
}

export default About