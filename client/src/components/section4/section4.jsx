import React from 'react';
import "./section4.css";

const Section4 = () => {
    return (
        <div className='section4Content'>
            <div className="content">
                <p>Sign up for our newletters and<br/> recieve 10% off your first order</p>
            </div>
            <div className="subcribeContent">
                <input type="text" className="inputBox" />
                <button className="subscribeBtn">Subscribe</button>
            </div>
        </div>
    );
}

export default Section4;
