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
          <h2 class="sub-title">Stress Management Plan</h2>
        </div>
      </div>

      <div className='description  '>
        <div className='description-left'>
          <img src={project.image} alt='' className='description-image' />
        </div>
        <div className='description-right'>
          <h3>
            ABOUT Conducting an Analysis of Psychological Strain
          </h3>
          <h2>
            Description

          </h2>
          <p>
            Managing psychological strain through workplace analysis is an innovative tool that enables employers to gain a deep understanding of the stress levels experienced by employees within the company.  </p>
          <p>
            High levels of workplace stress are directly linked to reduced productivity, increased absenteeism, and higher turnover rates.
          </p>
          <p>Proactively managing these factors not only enhances employee well-being but also positively impacts the overall efficiency of the organization. Investing in the analysis and management of psychological strain at the workplace will not only improve the health and well-being of your employees but also contribute to the long-term stability and success of your company.</p>
          <p> According to Gallup, companies that actively address workplace stress experience 37% lower absenteeism and a 21% increase in profitability.</p>
        </div>


      </div>

      <div className='singleServices-title'>
        <p>The development of the plan consists of <p>two parts:</p></p>

      </div>

      {/* proba 2 */}

      <div  className='proba2'>
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

      </div>
    </div>
  )
}

export default SingleService
