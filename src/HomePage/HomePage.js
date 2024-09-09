import React, { useState } from 'react'
import Aboutus from '../Components/Aboutus/Aboutus'
import Title from '../Components/Title/Title'
import Steps from '../Components/Steps/Steps'
import Programs from '../Components/Programs/Programs'
import OurTeam from '../Components/OurTeam/OurTeam'
import Services from '../Components/Services/Services'
import Gallery from '../Components/Gallery/Gallery'
import Experience from '../Components/Experience/Experience'
import Reviews from '../Components/Reviews/Reviews'
import Hero from '../Components/Hero/Hero'


const HomePage = () => {

    const [playState, setPlayState] = useState(false)
    return (
        <div>
            <Hero />
            <div className='container'>
                <Title subTitle='Services' title='What We Offer' />
                <Services />
                <Title subTitle='Experience' title='What is Our Experience' />
                <Experience />

                <Aboutus setPlayState={setPlayState} />
                <Title subTitle='How We Work' title='Our process' />
                <Steps />
                {/* <Title subTitle='Our Program' title='What We Offer' />
                <Programs /> */}
                {/* <Title subTitle='Our Team' title='We Are The Best Team' />
                <OurTeam /> */}
                {/* <Title subTitle='Gallery' title='Best Fotos of Us' />
                <Gallery /> */}
                <Title subTitle='Reviws' title='What Others Says' />
                <Reviews />
                {/* <Title subTitle='Contact Us' title='Get in Touch' />
                <Contactus />
                <Footer /> */}
            </div>
        </div>

    )
}

export default HomePage
