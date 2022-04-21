import React from 'react'
import "./team.css"
import BobocDobb from "../assets/owner/piatra1.png";
import RaduDobb from "../assets/radu.jpeg";
import BogdanDobb from "../assets/owner/gratar1.png";
import StefanDobb from '../assets/owner/gazon1.png';
import CristianaDobb from "../assets/owner/pomi2.png";
import VladDobb from "../assets/owner/fantani1.png";
import LinkedinLogo from '../assets/linkedin.png'
import "./Mint.scss";
import {Link} from "react-router-dom";

const Team = () => {

    function moveToLinkedinBogdan(){
        window.open("https://www.linkedin.com/in/bogdan-lazar-23545a1a0/");
    }

    function moveToLinkedinBoboc(){
        window.open("https://www.linkedin.com/in/boboc-robert-andrei-a2b21a175/");
    }

    function moveToLinkedinCristiana(){
        window.open("https://www.linkedin.com/in/cristiana-tache-5b7b8a216/");
    }

    function moveToLinkedinVlad(){
        window.open("https://www.linkedin.com/in/vlad-popa-05a033235/");
    }

    function moveToLinkedinStefan(){
        window.open("https://www.linkedin.com/in/radustefandumitru/");
    }

    function moveToLinkedRadu(){
        window.open("https://www.linkedin.com/in/lupu-radu-b20ba51aa/");
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
                            <img src={BobocDobb} className={'boboc'} onClick={moveToLinkedinBoboc}/>
                            <h3 className='descriere-rol-team'>Piatră se poate monta pe: pavaj curte, alei casă, temelie casă, terase, scări, stalpi, zidări, garduri.
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
                            <img src={BogdanDobb} className={'boboc'} onClick={moveToLinkedinBoboc}/>
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
                            <img src={StefanDobb} className='stefan' onClick={moveToLinkedinStefan}/>
                            <h3 className='descriere-rol-team'>Gazonul natural vine in rulouri si se poate monta atat in curte cat si in gradina.</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Pomi</h1>
                        <div className="cristiana">
                            <img src={CristianaDobb} className={'cristiana'} onClick={moveToLinkedinCristiana}/>
                            <h3 className='descriere-rol-team'>Plantam pomi decorativi cat si plante pentru a a duce un aspect mai placut gradinii dumneavostra.</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Fantani</h1>
                        <div className="vlad">
                            <img src={VladDobb} className={'vlad'} onClick={moveToLinkedinVlad}/>
                            <h3 className='descriere-rol-team'>Executam fantani si cascade la comanda.</h3>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    )
}

export default Team