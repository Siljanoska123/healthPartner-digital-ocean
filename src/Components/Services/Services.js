import React from 'react'
import './Services.css'
import service_1 from '../../assets/service1.png'
import service_2 from '../../assets/service2.png'
import service_3 from '../../assets/service3.png'

function Services() {
  return (
    <div className='services'>
      <div className="container-glass">
        <h2>Service Title</h2>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="btn dark-btn ">Read more</button>
      </div>
      <div className="container-glass">
        <h2>Service Title</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="btn dark-btn ">Read more</button>
      </div>
      <div className="container-glass">
        <h2>Service Title</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="btn dark-btn ">Read more</button>
      </div>

    </div>
  )
}

export default Services


