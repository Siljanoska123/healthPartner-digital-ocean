import React, { useRef } from 'react'
import './Reviews.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user1.jpeg'


function Reviews() {

    const slider = useRef()
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

    return (
        <div className='reviews'>

            <scan className='next-btn'
                onClick={slideForward} >
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </scan>
          
            <scan className='back-btn'
                onClick={slideBackward}  >
                <ion-icon name="chevron-back-outline"></ion-icon>
            </scan>
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user1} alt='' />
                                <div>
                                    <h3>Name surname 1</h3>
                                    <span>Country</span>
                                </div>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user1} alt='' />
                                <div>
                                    <h3>Name surname 2</h3>
                                    <span>Country</span>
                                </div>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user1} alt='' />
                                <div>
                                    <h3>Name surname 3</h3>
                                    <span>Country</span>
                                </div>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user1} alt='' />
                                <div>
                                    <h3>Name surname 4</h3>
                                    <span>Country</span>
                                </div>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Reviews
