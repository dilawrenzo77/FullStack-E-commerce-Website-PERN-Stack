import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { AiOutlineSwapLeft } from "react-icons/ai";
import { AiOutlineSwapRight } from "react-icons/ai";
import {Link} from "react-router-dom";
import Image1 from "../../assets/other/fx1.png";
import Image2 from "../../assets/other/fx2.png";
import Image3 from "../../assets/other/fx3.png";
import Image4 from "../../assets/other/fx4.png";
import Image5 from "../../assets/other/fx5.png";
import Image6 from "../../assets/other/fx6.png";
import "./slider.css";



const Slider = () => {
    return (
        <div className='slide'>
            <Swiper 
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                autoplay={{
                    "delay": 7000,
                  }}
                speed={3000}
                loop={true}
                slidesPerView={1}
                coverflowEffect={{
                    rotate:0,
                    stretch: -75,
                    depth: 250,
                    modifier: 3.5,
                    slideShadows:false,
                }}
                navigation={{
                    nextEl:".slideRight",
                    prevEl:".slideLeft",
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation, Autoplay]}>
                <SwiperSlide><img src={Image1} alt="slidePictures" className='slideImg' /> </SwiperSlide>
                <SwiperSlide><img src={Image2} alt="slidePictures" className='slideImg' /> </SwiperSlide>
                <SwiperSlide><img src={Image3} alt="slidePictures" className='slideImg' /> </SwiperSlide>
                <SwiperSlide><img src={Image4} alt="slidePictures" className='slideImg' /> </SwiperSlide>
                <SwiperSlide><img src={Image5} alt="slidePictures" className='slideImg' /> </SwiperSlide>
                <SwiperSlide><img src={Image6} alt="slidePictures" className='slideImg' /> </SwiperSlide>
            </Swiper>
            <div className="sliderTools">
                <div className="slideLeft">
                    <AiOutlineSwapLeft size={32} />
                </div>
                <div className="slideRight">
                    <AiOutlineSwapRight size={32}/>
                </div>
            </div>
            <p className="greetings">Hello World,</p>
            <div className="frontPageContent">
                <h1>EXPERIENCE THE EVER <br/>SEAMLESS <span>FLOW</span></h1>
                <h3>Where Technology meets Effortless</h3>
                <Link to="/catalog"><button className="shopNow">SHOP NOW</button></Link>
            </div>

        </div>
    );
}

export default Slider;
