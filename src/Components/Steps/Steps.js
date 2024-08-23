import React from 'react'
import './Steps.css'
import arrow from '../../assets/arrow3-removebg-preview.png'

const Steps = () => {
  return (
    <div>
    <div className='how-it-works'>
        {/* <h2>
            How We Work
        </h2> */}
        <div className='steps'>
            <div className='step'>
                <div className='icon_background'>
                    <h2 className='num'>1</h2>

                </div>
                <img src={arrow} alt='' />
                <h3>Planning and Analysis</h3>
                <p>
                    Our main vision is to promote health, act preventive by consulting employers and individuals in the field of physical and mental health issues related with work.
                </p>
            </div>
            <div className='step'>
                <div className='icon_background'>
                    <h2 className='num'>2</h2>

                </div>
                <img src={arrow} alt='' />
                <h3>Disigne and Development</h3>
                <p>
                    Our main vision is to promote health, act preventive by consulting employers and individuals in the field of physical and mental health issues related with work.
                </p>
            </div>
            <div className='step'>
                <div className='icon_background'>
                    <h2 className='num'>3</h2>

                </div>
                
                <h3>Testing and Development</h3>
                <p>
                    Our main vision is to promote health, act preventive by consulting employers and individuals in the field of physical and mental health issues related with work.
                </p>
            </div>
        </div>
    </div>

</div>
  )
}

export default Steps
