import React from 'react'
import './Gallery.css'
import service1 from '../../assets/service1.jpg'
import service2 from '../../assets/service2.jpg'
import service3 from '../../assets/service3.jpg'
import service4 from '../../assets/service4.png'
import white_arrow from '../../assets/white_arrow.png'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='gallery-image'>
        <img src={service1} alt='' />
        <img src={service2} alt='' />
        <img src={service3} alt='' />
        <img src={service4} alt='' />
      </div>
      <button className='btn dark-btn'>
        See more here

        {/* <img src={white_arrow} alt='' /> */}
        <ion-icon name="arrow-redo-outline"></ion-icon>
      </button>

    </div>
  )
}

export default Gallery
