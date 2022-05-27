import React from 'react'
import "./team.css"
import piatra from "../assets/owner/piatra1.png";
import gratare from "../assets/gallery/gratar3.jpeg";
import gazon from '../assets/gallery/gazon1.jpeg';
import pomi from "../assets/owner/pomi2.png";
import fantani from "../assets/owner/fantani1.png";
import {Link} from "react-router-dom";

const Team = () => {

    function moveToPiatra() {
        window.open("/piatra");
    }

    function moveToGratare(){
        window.open("/gratare");
    }

    function moveToGazon(){
        window.open("/gazon");
    }

    function moveToTui(){
        window.open("/tui");
    }

    function moveToFantani(){
        window.open("/fantani");
    }


    return (

        <div className='container'>
            <div className="teamText">
            </div>
            <Link to="/piatra" style={{textDecoration: "none"}}>
            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Piatra</h1>
                        <div className="boboc">

                            <img src={piatra} className={'boboc'}/>
                            <h3 className='descriere-rol-team'>Piatră se poate monta pe: pavaj curte, alei casă, temelie casă, terase, scări, stalpi, zidarii, garduri.
                               </h3>
                        </div>
                    </div>
                </div>
            </div>
            </Link>

            <Link to="/gratare" style={{textDecoration: "none"}}>
            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Gratare</h1>
                        <div className="boboc">
                            <img src={gratare} className={'boboc'}/>
                            <h3 className='descriere-rol-team'>Gratarele se executa la comanda si va puteti alege modelul de caramida dorita.</h3>
                        </div>
                    </div>
                </div>
            </div>
            </Link>

            <Link to="/gazon" style={{textDecoration: "none"}}>
            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Gazon</h1>
                        <div className="stefan">
                            <img src={gazon} className='stefan'/>
                            <h3 className='descriere-rol-team'>Gazonul natural vine in rulouri si se poate monta atat in curte cat si in gradina.</h3>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
                <Link to="/tui" style={{textDecoration: "none"}}>
            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Tuie Smarald</h1>
                        <div className="cristiana">
                            <img src={pomi} className={'cristiana'}/>
                            <h3 className='descriere-rol-team'>Oferim o gama larga de plante ornamentale direct de la producator pentru a aduce un aspect mai placut gradinii dumneavostra.</h3>
                        </div>
                    </div>
                </div>
            </div>
                </Link>




        </div>



    )
}

export default Team