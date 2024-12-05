import React from 'react'
import './Aboutus.css'
import about_img from '../../assets/about.jpg'

// https://www.youtube.com/watch?v=WbV3zRgpw_E

// 53 min
function Aboutus({ setPlayState }) {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='' className='about-image' />
        {/* <span className='play-icon' onClick={() => { setPlayState(true) }} >
          <ion-icon name="play"></ion-icon>
        </span> */}
        {/* <img src={play_icon} alt='' className='play-icon'
          onClick={() => { setPlayState(true) }} /> */}
        {/* <ion-icon name="play-outline" onClick={() => { setPlayState(true) }} ></ion-icon> */}
      </div>
      <div className='about-right'>
        <h3>
          ABOUT COMPANY
        </h3>
        <h2>
          Happy employee = more productivity

        </h2>
        <p>
          Located in city of Schaffhausen, Switzerland we are a leading provider for digital services in the field of corporate health and occupational medicine.
          As a partner for companies around the world, we are using the digital technology to provide fast, secure, efficient and high quality services to our clients.

        </p>
        <p>
          Our main vision is to promote health, act preventive by consulting employers and individuals in the field of physical and mental health issues related with work.
        </p>
        <p>
          If a good employee is the best asset one company can oun, keeping them happy and healthy is the most important thing.

        </p>
        <p>
          Our services as a global partner lead to more productivity and to more growth.
        </p>
      </div>


    </div>
  )
}


export default Aboutus
