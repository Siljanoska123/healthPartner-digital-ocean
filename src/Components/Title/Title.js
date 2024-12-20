import React from 'react'
import './Title.css'

function Title({subTitle, title}) {
  return (
    <div className='title'>
    
      <h2>{title}</h2>
      <div class="custom-line"></div>
    </div>
  )
}

export default Title
