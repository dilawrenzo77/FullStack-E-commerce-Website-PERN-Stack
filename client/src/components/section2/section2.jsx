import React from 'react';
import {Link} from "react-router-dom";
import "./section2.css";
import img1 from "../../assets/other/page1.jpg";
import img2 from "../../assets/other/img7.jpg";
import img3 from "../../assets/other/air.jpg";
import img4 from "../../assets/other/head.jpg";
import img5 from "../../assets/other/power.jpg";
import img6 from "../../assets/other/keys.jpg";

const Section2 = () => {
    return (
        <div className='section2Content'>
            <div className="intro">
                <h1 className="introHeader">Featured Collections</h1>
                <p>Explore a wide range of Tech Products</p>
            </div>
            <div className="container">
                <Link to="/catalog"><div className="block 1">
                    <img src={img1} alt="contentImg" />
                    <p>Phones</p>
                </div></Link>
                <Link to="/catalog"><div className="block 2">
                    <img src={img2} alt="contentImg" />
                    <p>Laptops</p>
                </div></Link>
                <Link to="/catalog"><div className="block 3">
                    <img src={img3} alt="contentImg" />
                    <p>Airpods</p>
                </div></Link>
                <Link to="/catalog"><div className="block 4">
                    <img src={img4} alt="contentImg" />
                    <p>Headsets</p>
                </div></Link>
                <Link to="/catalog"><div className="block 5">
                    <img src={img5} alt="contentImg" />
                    <p>PowerBanks</p>
                </div></Link>
                <Link to="/catalog"><div className="block 6">
                    <img src={img6} alt="contentImg" />
                    <p>KeyBoards</p>
                </div></Link>
            </div>
            <Link to="/catalog"><button className="discoverBtn">DISCOVER</button></Link>
        </div>
    );
}

export default Section2;
