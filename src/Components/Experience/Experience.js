import React from 'react'
import './Experience.css'
import { Link } from 'react-scroll'

const Experience = () => {
    return (
        <section class="experience">
      
        <div class="experiencecards">
          <div class="experiencecard">
            <i class="fas fa-users"></i>
            {/* <h3>Care for your employees</h3> */}
            <p>If a good employee is the best asset a company can own, keeping them motivated and healthy is the most important priority. </p>
          </div>
          <div class="experiencecard">
            <i class="fas fa-heartbeat"></i>
            {/* <h3>Motivation programs</h3> */}
            <p>Through our programs, certifications, and training sessions, we offer tools and solutions that improve motivation, health, and trust, which lead to the overall success of an organization.</p>
          </div>
          <div class="experiencecard">
            <i class="fas fa-brain"></i>
            {/* <h3>Stress management</h3> */}
            <p>Our tailored stress management plans and mental hygiene support ensure employees remain resilient and focused in demanding work environments. </p>
          </div>
          <div class="experiencecard">
            <i class="fas fa-lightbulb"></i>
            {/* <h3>Leadership and culture</h3> */}
            <p>By fostering leadership excellence and cultivating a positive organizational culture, we empower businesses to inspire innovation and collaboration. </p>
          </div>
          <div class="experiencecard">
            <i class="fas fa-cogs"></i>
            {/* <h3>Safety and comfort</h3> */}
            <p>Our emphasis on workplace ergonomics and robust safety standards creates a foundation where both productivity and employee satisfaction thrive.</p>
          </div>
        </div>
      </section>
      
      
      
      
      
    )
}

export default Experience
