import React from 'react'
import "./team.css"
import BobocDobb from "../assets/boboc.jpeg";
import RaduDobb from "../assets/radu.jpeg";
import BogdanDobb from "../assets/lazarL.jpg";
import StefanDobb from '../assets/stefan.jpeg';
import CristianaDobb from "../assets/cristiana.jpeg";
import VladDobb from "../assets/vlad.jpeg";
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
                <h2 className='teamHeader'>Who are we?</h2>
                <p className='teamParagraph'>We are a team of 6 young lads that are ready to bring value to the NFT space and try their best to make the world a better place </p>
            </div>
            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Bogdan</h1>
                        <div className="bogdan">
                            <img src={BogdanDobb} className={'bogdan'} onClick={moveToLinkedinBogdan} />
                            <h3 className='descriere-rol'>Web Dev</h3>
                            <h3 className='descriere'>Always bossy</h3>
                            <img src = {LinkedinLogo} className={'logo'} onClick={moveToLinkedinBogdan}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Boboc</h1>
                        <div className="boboc">
                            <img src={BobocDobb} className={'boboc'} onClick={moveToLinkedinBoboc}/>
                            <h3 className='descriere-rol'>Web Dev</h3>
                            <h3 className='descriere'>Always energetic</h3>
                            <img src = {LinkedinLogo} className={'logo'} onClick={moveToLinkedinBoboc}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Stefan</h1>
                        <div className="stefan">
                            <img src={StefanDobb} className='stefan' onClick={moveToLinkedinStefan}/>
                            <h3 className='descriere-rol'>Marketing</h3>
                            <h3 className='descriere'>Always late on meetings</h3>
                            <img src = {LinkedinLogo} className={'logo'} onClick={moveToLinkedinStefan}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Cristiana</h1>
                        <div className="cristiana">
                            <img src={CristianaDobb} className={'cristiana'} onClick={moveToLinkedinCristiana}/>
                            <h3 className='descriere-rol'>Artist</h3>
                            <h3 className='descriere'>Always on our vibe</h3>
                            <img src = {LinkedinLogo} className={'logo'} onClick={moveToLinkedinCristiana}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Vlad</h1>
                        <div className="vlad">
                            <img src={VladDobb} className={'vlad'} onClick={moveToLinkedinVlad}/>
                            <h3 className='descriere-rol'>Marketing</h3>
                            <h3 className='descriere'>Always underappreciated</h3>
                            <img src = {LinkedinLogo} className={'logo'} onClick={moveToLinkedinVlad}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon" style={{marginTop:"10px"}}>
                    <div className="continut">
                        <h1 className='names'>Andrew</h1>
                        <div className="radu">
                            <img src={RaduDobb} className={'radu'} onClick={moveToLinkedRadu}/>
                            <h3 className='descriere-rol'>Marketing</h3>
                            <h3 className='descriere'>Always needs a haircut</h3>
                            <img src = {LinkedinLogo} className={'logo'} onClick={moveToLinkedRadu}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Team