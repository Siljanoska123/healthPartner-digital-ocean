import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import Aboutus from './Components/Aboutus/Aboutus'
import Gallery from './Components/Gallery/Gallery'
import Reviews from './Components/Reviews/Reviews'
import Contactus from './Components/ContactUs/Contactus'
import Footer from './Components/Footer/Footer'
import Video from './Components/Videos/Video'
import OurTeam from './Components/OurTeam/OurTeam'
import Services from './Components/Services/Services'
import Experience from './Components/Experience/Experience'
import Hero from './Components/Hero/Hero'
import Steps from './Components/Steps/Steps'


const App = () => {

  const [playState, setPlayState] = useState(false)


  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <Hero />
   

      <div className='container'>
     
        <Aboutus setPlayState={setPlayState} />
        <Title subTitle='How We Work' title='Our process' />
        <Steps/>
        <Title subTitle='Our Program' title='What We Offer' />
        <Programs />
        <Title subTitle='Our Team' title='We Are The Best Team' />
        <OurTeam />
        <Title subTitle='Services' title='What We Offer' />
        <Services />
        <Title subTitle='Gallery' title='Best Fotos of Us' />
        <Gallery />
        <Title subTitle='Experience' title='What is Our Experience' />
        <Experience />
        <Title subTitle='Reviws' title='What Others Says' />
        <Reviews />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contactus />

        
        <Footer />
      </div>
      <Video playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
