import React from 'react'
import './Aboutus.css'
import about_img from '../../assets/brankoSlika-removebg-preview.png'

// https://www.youtube.com/watch?v=WbV3zRgpw_E

// 53 min
function Aboutus({ setPlayState }) {
  return (
    <div className='about'>
      <div className='about-header'>
        {/* <p>
          We are a leading provider for digital services in the field of corporate health and occupational medicine. As a partner for companies around the world, we are using the digital technology to provide fast, secure, efficient, and high-quality services to our clients.
        </p>
        <p>
          Our main vision is to promote health, act preventive by consulting employers in the field of physical and mental health issues related with work.
        </p> */}
        {/* Текст што ќе се појави веднаш под секцијата */}
      </div>
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

        <h2>
          {/* Happy employee = more productivity */}

        </h2>

        {/* <h3>
          OUR VISION AND MISSION
        </h3> */}
        <br />
        <p>
          As the CEO of our company, I am proud to share our vision for the future: to revolutionize how businesses support their workforce by leveraging digital technology to deliver fast, secure, and high-quality services. Our mission is to empower organizations to thrive by prioritizing the health, motivation, and overall well-being of their employees.
        </p>
        <p>
          Through our cutting-edge certifications, training sessions, and strategic programs, we equip our clients with tools and solutions that enhance productivity and foster trust within teams. Our focus areas include optimizing psychological health through tailored stress management plans and preventive mental hygiene support, such as addressing burnout risks. We also specialize in leadership development and cultivating organizational cultures that inspire innovation and engagement.
        </p>
        <p>
          Additionally, we are committed to advancing workplace ergonomics and ensuring comprehensive safety and health standards. These initiatives reflect our dedication to creating environments where individuals and companies can succeed together. With these priorities at the forefront, we aim to set new benchmarks in employee care and organizational success, ensuring that the businesses we work with remain resilient, competitive, and forward-thinking in an ever-evolving world.
        </p>
      </div>


    </div>
  )
}


export default Aboutus
