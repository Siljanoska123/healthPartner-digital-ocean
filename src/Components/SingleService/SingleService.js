import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './singleServices.css'

import { projects } from '../../data'


const SingleService = () => {
  const { id } = useParams(); // Get the service id from the URL
  const [project, setProject] = useState(null);

  console.log(projects.id)

  useEffect(() => {
    // Find the project based on the id from the URL
    const foundProject = projects.find((project) => project.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      console.error('Project not found');
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>; // Display while fetching data
  }

  return (
    <div className='container'>
      <div className='singleServices  '>

        <div className='singleServices-left'>

          <h1>
            {/* Stress Management Plan */}
            {project.title}
          </h1>
          <h2 class="sub-title"> {project.title}</h2>
        </div>
      </div>
      {/* ova e vo red */}
      <div className='description  '>
        <div className='description-left'>
          <img src={project.image} alt='' className='description-image' />
        </div>
        <div className='description-right'>
          <h3>
            ABOUT {project.title}
          </h3>
          <h2>
            Description

          </h2>
          <p>
            {project.text}
          </p>
          <p>
            {project.text1}
          </p>
          <p>
            {project.text2}
          </p>
          <p>

            {project.text3}
          </p>
        </div>


      </div>


      {/*  */}


      <div className='title'>
        {/* <p>{subTitle}</p> */}
        <h2>What do we Offer?</h2>
      </div>


      <div className='whatoffer'>


        <p>
          Anonymous Online Consultations: Employees can access mental health support without having to disclose their identity or personal details. This ensures complete confidentiality and comfort, encouraging open communication and honest discussion.
        </p>


        <div className=''>

          <div className='whatoffer-container' >

           <img src=''/>
            <div className='service-desc'>
              <h3>ime</h3>
              <p className="service-text">tekst</p>
            </div>
          </div>
          <div className='whatoffer-container' >

            <i >ikona</i>
            <div className='service-desc'>
              <h3>ime</h3>
              <p className="service-text">tekst</p>
            </div>
          </div>
        
        </div>







      </div>





      {/* <div className='singleServices-title'>
        <p>The development of the plan consists of <p>two parts:</p></p>

      </div> */}

      {/* proba 2 */}

      {/* <div  className='proba2'>
        <ol style={{ "--length": '5' }} role="list">
          <li style={{ "--i": '1' }}>
            <h3>Comprehensive assessment of psychological risk and stress levels in the workplace.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.</p>
          </li>
          <li style={{ "--i": '2' }}>
            <h3> Development of a tailored stress management plan, along with recommendations for improvement.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.</p>
          </li>

        </ol>

      </div> */}


    </div>
  )
}

export default SingleService
