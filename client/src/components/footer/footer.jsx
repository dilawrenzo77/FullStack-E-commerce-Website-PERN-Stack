import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/other/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerContainer">
            <div className="footer1">
                <Link to="/"><img src={Logo} alt="" className="logo" /></Link>
            </div>
            <div className="footer2">
                <Link to="/" className="footerLink">HOME</Link>
                <Link to="/catalog" className="footerLink">CATALOG</Link>
                <Link to="/contact" className="footerLink">ABOUT US</Link>
                <Link to="/" className="footerLink">FAQ</Link>
                <Link to="/contact" className="footerLink">CONTACT</Link>
            </div>
            <div className="footer2">
                <FaFacebookF size={25} color='#52b788'/>
                <FaInstagram size={25} color='#52b788' />
                <FaXTwitter size={25} color='#52b788' />
                <FaWhatsapp size={25} color='#52b788' />
            </div>
            <div className="footer3">
                <p className="copyright">Copyright @ 2025 Flowtech</p>
                <p className="copyright">All rights reserved</p>
            </div>
            </div>
        </div>
    );
}

export default Footer;
