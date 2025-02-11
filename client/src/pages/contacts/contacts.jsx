import React from 'react';
import "./contacts.css";
import Footer from '../../components/footer/footer';
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className="contentText">
                    <h1>Contact The Developer</h1>
                    <h3>Get in touch with the developer for Projects, criticism and Project resources.</h3>
                </div>
            <div className="contactContent">
                <div className="contactsContents">
                    <div className="github">
                        <div className="icon">
                            <FaGithub />
                        </div>
                        <div className="text">
                            <h3>www.github.com</h3>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="icon">
                            <FaPhoneAlt />
                        </div>
                        <div className="text">
                            <h3>+234 706 286 4478</h3>
                        </div>
                    </div>
                    <div className="email">
                        <div className="icon">
                            <AiOutlineMail />
                        </div>
                        <div className="text">
                            <h3>mbatalawrence@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className="contactImageContent">
                    <div className="imgContent">
                        <img src='' alt="" className="contentImage" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contacts;
