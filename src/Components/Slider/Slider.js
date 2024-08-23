import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './Slider.css';
// import required modules
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';

import slide1 from '../../assets/program1.jpg'
import slide2 from '../../assets/program2.jpg'
import slide3 from '../../assets/program3.jpg'
import slide4 from '../../assets/service2.jpg'

function Slider() {

    return (
        <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}

            pagination={true}
            modules={[EffectCube, Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={slide1} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider


