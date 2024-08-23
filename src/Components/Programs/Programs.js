import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program1.jpg'
import program_2 from '../../assets/program2.jpg'
import program_3 from '../../assets/program3.jpg'
import program_icon1 from '../../assets/program_icon1.jpeg'

import program_icon2 from '../../assets/program_icon2.jpg'
import program_icon3 from '../../assets/program_icon3.png'


function Programs() {
    return (
        <div className='programs' >
            <div className='program'>
                <img src={program_1} alt='' />
                <div className='caption'>
                    <img src={program_icon1} alt='' />
                    <p>Program 1</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_2} alt='' />
                <div className='caption'>
                    <img src={program_icon2} alt='' />
                    <p>Program 2</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_3} alt='' />
                <div className='caption'>
                    <img src={program_icon3} alt='' />
                    <p>Program 3</p>
                </div>
            </div>

        </div>
    )
}

export default Programs
