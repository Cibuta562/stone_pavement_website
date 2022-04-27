import React from 'react'
import "./team.css"
import BobocDobb from "../assets/owner/piatra1.png";
import RaduDobb from "../assets/radu.jpeg";
import BogdanDobb from "../assets/owner/gratar1.png";
import StefanDobb from '../assets/owner/gazon1.png';
import CristianaDobb from "../assets/owner/pomi2.png";
import VladDobb from "../assets/owner/fantani1.png";
import LinkedinLogo from '../assets/linkedin.png'
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
            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Piatra</h1>
                        <div className="boboc">
                            <img src={BobocDobb} className={'boboc'} onClick={moveToPiatra}/>
                            <h3 className='descriere-rol-team'>Piatră se poate monta pe: pavaj curte, alei casă, temelie casă, terase, scări, stalpi, zidarii, garduri.
                               </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Gratare</h1>
                        <div className="boboc">
                            <img src={BogdanDobb} className={'boboc'} onClick={moveToGratare}/>
                            <h3 className='descriere-rol-team'>Gratarele se executa la comanda si va puteti alege modelul de caramida dorita.</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Gazon</h1>
                        <div className="stefan">
                            <img src={StefanDobb} className='stefan' onClick={moveToGazon}/>
                            <h3 className='descriere-rol-team'>Gazonul natural vine in rulouri si se poate monta atat in curte cat si in gradina.</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Tuie Smarald</h1>
                        <div className="cristiana">
                            <img src={CristianaDobb} className={'cristiana'} onClick={moveToTui}/>
                            <h3 className='descriere-rol-team'>Plantam pomi decorativi cat si plante pentru a aduce un aspect mai placut gradinii dumneavostra.</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Fantani</h1>
                        <div className="vlad">
                            <img src={VladDobb} className={'vlad'} onClick={moveToFantani}/>
                            <h3 className='descriere-rol-team'>Executam fantani si cascade la comanda.</h3>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    )
}

export default Team