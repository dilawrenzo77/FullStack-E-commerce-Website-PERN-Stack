import React from 'react';
import Slider from "../../components/slider/slider";
import Section1 from "../../components/section1/section1";
import Section2 from "../../components/section2/section2";
import Section3 from "../../components/section3/section3";
import Section4 from "../../components/section4/section4";
import Footer from "../../components/footer/footer";


const Home = () => {
    return (
        <div>
            <Slider />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
        </div>
    );
}

export default Home;
