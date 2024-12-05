import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './singleServices.css'
import { projects } from '../../data'
import DotsWrapper from '../DotsWrapper'
import Coutses from '../Courses/Courses'
import StressManagment from '../StressManagment/StressManagment'
import SosConsultation from '../SosConsultation/SosConsultation'
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
      setProject({ title: "Not Found", text: "The requested project doesn't exist." });
    }
  }, [id]);


  if (!project) {
    return <div className="loading">Loading service details, please wait...</div>;
  }

  return (
    <div className='courses container'>
      <div className='courses-hero'>

        <div className='courses-hero-left'>

          <h1>{project.title}</h1>
          <h2 class="subject-title">{project.title}</h2>
          <p>
            {project.text}
          </p>

        </div>

        <div className='courses-hero-right'>
          <img src={project.imageIn} alt={project.title} className='courses-image' />

          <div className='DotsWrapper'>
            <DotsWrapper />
          </div>
        </div>


      </div>


      <br />

      <div className='title'>
        <p>{project.titlePrograms}</p>
        <h2>{project.titleOffer}</h2>
      </div>

      {/* trainings */}
      {/* Условно прикажување на coursesCard */}
      {project.showCourses && (
        <Coutses />
      )}

      {project.showStressManagment && (
        <StressManagment />
      )}

{project.showSosConsultation && (
        <SosConsultation/>
      )}

    </div>
  )
}

export default SingleService
