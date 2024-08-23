import React from 'react'
import './Hero.css'
import hero_back_img from '../../assets/service4.png'
import hero_boja from '../../assets/boja.png'
import Slider from '../Slider/Slider'
import hero_img from '../../assets/happy-employee-appreciation-day-cartoon-illustration-to-give-thanks-or-recognition-for-their-employees-with-with-great-job-or-trophy-in-flat-style-vector-removebg-preview.png'
import { Link } from 'react-scroll'




function Hero() {

    return (
        <div className='hero container'>
            {/* <img alt="golden-lines.png" className="bg-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/golden%20lines.png" /> */}
            <div className='hero-left'>
                <span>
                    Who we are
                </span>
                <h1>
                    Corporate Health Partner
                </h1>
                <br />
                {/* <hr></hr> */}
                <p>
                    {/* web coaching */}
                    We are helping employees to be happier and healthyer , because great companies are made of great people.
                </p>


                <Link to='about' smooth={true} offset={-150} duration={500} className='btn'>Explore more</Link>
            </div>

            <div className='hero-right'>
            <img src={hero_img} alt='hero_img' className='hero_img' />

            </div>
        </div>
    )
}

export default Hero
