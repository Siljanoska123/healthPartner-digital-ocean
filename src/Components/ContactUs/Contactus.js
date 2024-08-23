import React from 'react'
import './ContactUs.css'
import msg_icon from '../../assets/cover_icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white_arrow.png'
import Result from '../../ResultMail/Result'


// contact form 2.03.30
const Contactus = () => {


    return (
        <div className='contact'>
            {/* 1.47 */}
            <div className='contact-col'>
                <h3>Sent a message <img src={msg_icon} alt='' /></h3>
                <p>Lorem ipsum dolor sit adipiscing elit. Lorem ipsum dolor sit adipiscing elit.Lorem ipsum dolor sit adipiscing elit. Lorem ipsum dolor sit adipiscing elit. Lorem ipsum dolor sit adipiscing elit.</p>
                <ul>
                    <li>
                        <ion-icon name="mail-open-outline"></ion-icon>
                        contact@mail.com
                        {/* <img src={mail_icon} alt='' />  */}
                    </li>
                    <li>
                        {/* <img src={phone_icon} alt='' /> */}
                        <ion-icon name="call-outline"></ion-icon>
                        +123456789
                    </li>
                    <li>
                        {/* <img src={location_icon} alt='' />  */}
                        <ion-icon name="location-outline"></ion-icon>
                        Adress <br /> City Country</li>
                </ul>
            </div>
          <Result/>

        </div>
    )
}

export default Contactus
