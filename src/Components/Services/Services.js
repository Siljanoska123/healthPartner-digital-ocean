import React from 'react'
import './Services.css'

import { projects } from '../../data'
import { Link } from 'react-router-dom'

function Services() {

 
  return (
    <div className='services'>

      {projects.map((project, id) => {

        return (
          <div className="container-glass" key={project.id}>
            <img src={project.image} alt='' />
            <h2>{project.title}</h2>
            <p >
              {project.text}
            </p>
            {/* <button className="btn dark-btn "><a href={`/service/${project.id}`}>Read more</a></button> */}
           
           
            <Link className="btn dark-btn " to={`/service/${project.id}`}>Read more</Link>
          </div>
        )



      })}


      {/* <div className="container-glass">
        <img src={service_2} alt='' />
        <h2>Service Title</h2>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="btn dark-btn ">Read more</button>
      </div>

      <div className="container-glass">
        <img src={service_3} alt='' />
        <h2>Service Title</h2>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="btn dark-btn ">Read more</button>
      </div> */}
    </div>
  )
}

export default Services


