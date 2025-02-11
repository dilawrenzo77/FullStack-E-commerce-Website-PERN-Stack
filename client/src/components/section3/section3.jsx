import React from 'react';
import "./section3.css";

const Section3 = () => {
    return (
        <div className='section3Content'>
            <div className="introHeader">
                <h1 className="header">What our Clients Says</h1>
            </div>
            <div className="contentBody">
                <div className="content2">
                    <p className="customerTag">Customer Stories</p>
                    <p className="customerStoriesContent">''Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.<br/> Et voluptas, <br/>nesciunt ex vitae odit exercitationem iure.''</p>
                    <p className="customerName">Lawrence Mbata - <span>Nigeria</span></p>
                </div>
                <div className="content3">
                    <p className="customerTag">Customer Stories</p>
                    <p className="customerStoriesContent">''Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.<br/> Et voluptas, nesciunt ex vitae odit exercitationem iure.''</p>
                    <p className="customerName">Lawrence Mbata - <span>Nigeria</span></p>
                </div>
            </div>
        </div>
    );
}

export default Section3;
