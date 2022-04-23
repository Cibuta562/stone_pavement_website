import React from 'react'
import './footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import discordIcon from "../assets/assets_website/discord-black-icon-703937.png";
import instagramIcon from "../assets/assets_website/5ecec78673e4440004f09e77.png";
import twitterIcon from "../assets/assets_website/pngwing.com.png";
import dubbsLogo from "../assets/LOGO_PIATRA.png";
import {Col, Container, NavLink, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Footer = () => {

    function moveToMint() {
        window.location.href = 'http://localhost:3000/mint'
    }

    function moveToTop(){
        window.scrollTo(0, 0);
    }

    function moveToTwitter(){
        window.location.href = "https://twitter.com/nftshub_";
    }

    function moveToDiscord(){
        window.location.href = "http://discord.gg/ZjtUSx9DjK";
    }

    function moveToInsta(){
        window.location.href = "https://www.instagram.com/nftshub_/";
    }

    return (
        <div className='footer-big'>
            <div className="cards" style={{ backgroundColor: "#C5C3C8", margin: 0}}>
                <div className="card-logo display-footer" style={{position: "relative", backgroundColor: "#C5C3C8"}} >
                    <div className='footerLogo' onClick={moveToTop}>
                    <img src={dubbsLogo} className='footerLogo img-logo'  onClick={moveToTop} style={{marginRight: "10px", marginLeft: "10px", marginTop:"0px"}}/>
                   </div>
                </div>
                <div className="card-logo" style={{position: "relative", backgroundColor: "#C5C3C8", margin: 0}}>
                    <div className="footerItems" onClick={moveToTop}>
                    <Link className="no-decorations " to="/termenii_si_conditiile"><p className='privacy' style={{color:"white"}}>Termenii si Conditiile</p></Link>
                </div>
                </div>
                <div className="card-logo" style={{position: "relative", backgroundColor: "#C5C3C8", margin: 0}}>
                    <div className="copyrights">
                        <p className="terms">
                            <a href="https://www.linkedin.com/in/boboc-robert-andrei-a2b21a175/" style={{textDecoration: "none", color:"white"}}>
                            © Boboc Robert Andrei
                            </a>
                        </p>
                </div>
                </div>
            </div>

        </div>

    )
}

export default Footer