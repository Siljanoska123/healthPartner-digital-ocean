import React from 'react'
import './OurTeam.css'
import color_image from '../../assets/5.png'
import photo1 from '../../assets/1.png'
import photo2 from '../../assets/2.png'
import photo3 from '../../assets/3.png'
import photo4 from '../../assets/4.png'

const OurTeam = () => {
    return (
        <div className='our-team'>
            <div className='card'>
                <img className='color-image' src={color_image} alt='' />
                <img className='photo-image' src={photo1} alt='' />
                <h3>Name Surname</h3>
                <h4>Job Position</h4>
                <div className='card-icon'>
                    <ion-icon name="logo-skype"></ion-icon>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <ion-icon name="mail-outline"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
            </div>


            <div className='card'>
                <img className='color-image' src={color_image} alt='' />
                <img className='photo-image' src={photo2} alt='' />
                <h3>Name Surname</h3>
                <h4>Job Position</h4>
                <div className='card-icon'>
                    <ion-icon name="logo-skype"></ion-icon>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <ion-icon name="mail-outline"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
            </div>


            <div className='card'>
                <img className='color-image' src={color_image} alt='' />
                <img className='photo-image' src={photo3} alt='' />
                <h3>Name Surname</h3>
                <h4>Job Position</h4>
                <div className='card-icon'>
                    <ion-icon name="logo-skype"></ion-icon>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <ion-icon name="mail-outline"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
            </div>


            <div className='card'>
                <img className='color-image' src={color_image} alt='' />
                <img className='photo-image' src={photo4} alt='' />
                <h3>Name Surname</h3>
                <h4>Job Position</h4>
                <div className='card-icon'>
                    <ion-icon name="logo-skype"></ion-icon>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <ion-icon name="mail-outline"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default OurTeam


// iconic za simboli
// https://ionic.io/ionicons