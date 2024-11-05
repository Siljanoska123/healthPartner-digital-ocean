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
import { Route, Routes } from 'react-router-dom'
import SingleService from './Components/SingleService/SingleService'
import HomePage from './HomePage/HomePage'
import Courses from './Components/Courses/Courses'
import Course1 from './Components/Course1/Course1'
import './App.css'


const App = () => {

  const [playState, setPlayState] = useState(false)


  return (
    <div className='app-zdravo'> 
      <Navbar />
      {/* <Header /> */}

      <Routes>
        <Route path='*' element={<HomePage />} />
        <Route path='/service/:id' element={<SingleService />}></Route>
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/course1' element={<Course1 />} />
      </Routes>

      <div className='container'>
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contactus />
        <Footer />
      </div>
      <Video playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
