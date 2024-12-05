import React from 'react'
import './StressManagment.css'
import assestment_icon from '../../assets/assessment-icon.png'
import customized_icon from '../../assets/customized-icon.png'
import digital_icon from '../../assets/digital-icon.png'
import benefits_icon from '../../assets/benefits-icon.png'
import { Link } from 'react-scroll'

const StressManagment = () => {
  return (
    <div class="stress-plan-section">
    <div class="header-container">
      <h1 class="header-title">Key Components of Our Stress Management Plan</h1>
      <p class="header-subtitle">
        Empowering organizations with effective strategies to foster a healthier, more productive workforce.
      </p>
    </div>
  
    <div class="features-grid">
      <div class="feature-card">
        <div class="icon-wrapper">
          <img src={assestment_icon} alt="Assessment Icon"/>
        </div>
        <h3>Comprehensive Workplace Stress Assessment</h3>
        <p>
          Detailed assessments to identify psychological risks, evaluate stress factors, and create targeted solutions for lasting impact.
        </p>
      </div>
  
      <div class="feature-card">
        <div class="icon-wrapper">
          <img src={customized_icon} alt="Customized Solutions Icon"/>
        </div>
        <h3>Customized Stress Management Solutions</h3>
        <p>
          Tailored strategies to improve workplace atmosphere, enhance motivation, and support long-term employee well-being.
        </p>
      </div>
  
      <div class="feature-card">
        <div class="icon-wrapper">
          <img src={digital_icon} alt="Digital Solutions Icon"/>
        </div>
        <h3>Digital and Online Implementation</h3>
        <p>
          Access your customized plan anywhere with a digital dashboard providing real-time insights into workforce well-being.
        </p>
      </div>
  
      <div class="feature-card">
        <div class="icon-wrapper">
          <img src={benefits_icon} alt="Proven Benefits Icon"/>
        </div>
        <h3>Proven Benefits</h3>
        <p>
          Experience increased engagement, reduced absenteeism, and improved retention while ensuring compliance with global standards.
        </p>
      </div>
    </div>
  
    <div class="cta-container">
      <h2>Transform Your Workforce Today</h2>
      <p>
        Unlock the potential of a motivated, healthy team with our Stress Management Plan. Get started with a seamless digital onboarding process.
      </p>
      {/* <button class="cta-button">Contact Us</button> */}

      <Link
                    to='contact'
                    smooth={true}
                    offset={-260}
                    duration={500}
                    className='cta-button'>
                    Contact us
                </Link>
    </div>
  </div>
  
  )
}

export default StressManagment
