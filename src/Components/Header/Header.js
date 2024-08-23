import React from 'react'
import './Header.css'
import dark_arrow from '../../assets/dark_arrow.png'

function Header() {
    return (
        <div className='header container'>
            <div className='header-text'>
                <h1>Component Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet hendrerit enim, mattis tincidunt eros interdum vitae. Donec porttitor libero in metus pulvinar, et sollicitudin lacus euismod.</p>
                <button className='btn'>Explore more
                    {/* <img src={dark_arrow} alt='' /> */}
                    <ion-icon name="arrow-forward-outline"></ion-icon>

                </button>

            </div>

        </div>
    )
}

export default Header
