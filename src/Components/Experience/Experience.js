import React from 'react'
import './Experience.css'
import { Link } from 'react-scroll'

const Experience = () => {
    return (
        <div className='experience'>
            <div className='experience-left'>
                <h1>Why Us?</h1>
                <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla purus, ornare ac fringilla vel, laoreet et nibh. Nunc nec dolor at odio vestibulum accumsan. Cras sed molestie erat. Donec vel dictum lectus, non mollis nunc. Proin tempor venenatis interdum. Phasellus ut vulputate purus. Aliquam porta sapien felis, at rhoncus lorem aliquet id. Sed suscipit diam eu felis facilisis, et bibendum elit maximus. Donec aliquam lacus ac nulla semper, id molestie magna imperdiet. Vivamus velit augue, aliquam vel vulputate et, vulputate in dolor.
                </p>

                <Link to='contact' smooth={true} offset={-260} duration={500} className='btn dark-btn'>Contact us</Link>
            </div>
            <div className='experience-right'>
                <div className='experience-card'>
                    <div className='e-card'>
                        <h1>100 +</h1>
                        <p>Happy Customer</p>
                    </div>
                    <div className='e-card'>
                        <h1>450 +</h1>
                        <p>Project Completed</p>
                    </div>
                    <div className='e-card'>
                        <h1>50 +</h1>
                        <p>Award Wins</p>
                    </div>
                    <div className='e-card'>
                        <h1>20 +</h1>
                        <p>Years Experience</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Experience
