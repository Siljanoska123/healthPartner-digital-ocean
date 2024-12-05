import React from 'react'
import './Hero.css'

import { Link } from 'react-scroll'




function Hero() {

    return (
        <div className='hero container'>
         
            <div className='hero-left'>
                <span>
                    Who we are
                </span>
                <h1>
                Wise Vital Advisors
                </h1>
                <br />
                {/* <hr></hr> */}
                <p>
                    {/* web coaching */}
                    We are helping employees to be happier and healthyer , because great companies are made of great people.
                </p>


                <Link
                    to='about'
                    smooth={true}
                    offset={-150}
                    duration={500}
                    className='btn'>
                    Explore more
                </Link>
            </div>

            {/* <div className='hero-right'>
                <img src={hero_img} alt='hero_img' className='hero_img' />

            </div> */}
        </div>
    )
}

export default Hero
