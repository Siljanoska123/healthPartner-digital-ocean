import React from 'react'
import './Hero.css'

import { Link } from 'react-scroll'




function Hero() {

    return (
        <div className='hero container'>

            <div className='hero-left'>
                {/* <span>
                    Who we are
                </span> */}
                <h1>
                    Wise Vital 
                </h1>
                <h2 >
                    Advisors 
                </h2>
                <br />
                {/* <hr></hr> */}
                <p>
                      Empowering companies to achieve excellence
                </p>



            </div>

            <div className='hero-right'>
                {/* <img src={hero_img} alt='hero_img' className='hero_img' /> */}
                {/* <Link
                    to='about'
                    smooth={true}
                    offset={-150}
                    duration={500}
                    className='btn'>
                    Explore more
                </Link> */}


            </div>
        </div>
    )
}

export default Hero
