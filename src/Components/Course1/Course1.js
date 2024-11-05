import React from 'react'
import leadership1 from '../../assets/leaderschip1.jpg'
import leadership4 from '../../assets/leaderschip4.jpg'
import leadership2 from '../../assets/leaderschip2.jpg'
import leadership3 from '../../assets/leaderschip3.jpg'
import './Course1.css'

const Course1 = () => {
    return (
        <div className="course1">

            <div className="whiteBg">

                <div className="lightBg">
                    <div className="container">
                        <div className="flexSpaceCenter">
                            <div className='AddLeft'>
                                <h1 className="">Leadership and Organizational Culture Training </h1>
                                <p >
                                    Our training is designed to equip leaders with the tools they need to create thriving, innovative workplaces.

                                    By enhancing leadership skills and cultivating a positive organizational culture, participants will learn how to manage employees more effectively, foster innovation, and drive long-term success.
                                </p>
                                <br />
                                <p>This course addresses common challenges such as poor communication, lack of trust, and stagnant team dynamics, helping leaders develop emotional intelligence, build trust, and encourage collaboration.
                                </p>
                                <br />
                                <p>
                                    Through practical strategies and insights, we empower leaders to create environments where employees feel motivated, valued, and engaged—resulting in improved performance and innovation.
                                </p>

                            </div>
                            <div className='AddRight'>
                                <div className='AddRightInner'>
                                    <div className="flexNullCenter">
                                        <div className="AddImgWrapp1">
                                            <img src={leadership1} alt="office" />
                                        </div>
                                        <div className='AddImgWrapp2'>
                                            <img src={leadership2} alt="office" />
                                        </div>
                                    </div>
                                    <div className="flexNullCenter">
                                        <div className='AddImgWrapp3'>
                                            <img src={leadership4} alt="office" />
                                        </div>
                                        <div className='AddImgWrapp4'>
                                            <img src={leadership3} alt="office" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='title'>
                    {/* <p>{subTitle}</p> */}
                    <h2>Training Overview</h2>
                </div>

                <div className='Overview '>
                    <p>
                        Our online training, "Leadership and Organizational Culture: Driving Success Through People," is tailored for professionals, managers, and executives seeking to elevate their leadership skills and positively influence their organization’s culture.
                        <br />
                        <br />
                        This interactive training focuses on the latest leadership styles, emotional intelligence, and strategies for fostering innovation and trust within teams. Whether you aim to refine your leadership approach or cultivate a more cohesive and motivated workforce, this training provides essential tools for success.  </p>


                </div>
            </div>
            <div className="container">
                <div className='title'>
                    {/* <p>{subTitle}</p> */}
                    <h2>Key Training Topics</h2>
                </div>
                <div className='Overview '>
                    <p>
                        Throughout the training, participants will explore several crucial topics that ensure a deep understanding of leadership dynamics and cultural development:  </p>

                </div>


                {/* card */}

                <div class="cards-cover ">
                    <div class="cardone">

                        <h4>Leadership Styles and Their Impact on Organizational Culture</h4>
                        <p>
                            Discover the various leadership styles, including transformational, transactional, and servant leadership. Understand how each style influences organizational culture and learn to tailor your approach to meet your team’s needs effectively.
                        </p>
                        <div class="shine"></div>
                        <div class="background">


                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                    </div>
                    {/*  */}
                    <div class="cardone">

                        <h4>Emotional Intelligence in Leadership</h4>
                        <p>
                            Emotional intelligence (EI) is vital for effective leadership. Leaders who possess strong EI can better manage their own emotions and those of their team members. This segment delves into how EI enhances leadership effectiveness, strengthens communication, and fosters a more productive work environment.
                        </p>
                        <div class="shine"></div>
                        <div class="background">


                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                    </div>
                    {/*  */}
                    <div class="cardone">

                        <h4>Creating a Safe Space for Innovation</h4>
                        <p>
                            Innovation thrives in environments where employees feel safe to take risks and share ideas. Learn how to cultivate a culture that encourages innovation, views mistakes as learning opportunities, and empowers team members to express their creativity.
                        </p>
                        <div class="shine"></div>
                        <div class="background">


                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                    </div>
                    {/*  */}
                    <div class="cardone">

                        <h4>Fostering Trust and Transparency</h4>
                        <p>
                            Trust is the foundation of any successful organization. Leaders who promote transparency and trust within their teams foster collaboration, reduce conflict, and enhance morale. This section provides actionable strategies to build and maintain trust throughout your organization.
                        </p>
                        <div class="shine"></div>
                        <div class="background">


                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                    </div>
                    {/*  */}
                    <div class="cardone">

                        <h4>Empowering Your Team for Success</h4>
                        <p>
                            Empowered employees are more engaged and committed to their work. Leaders can foster empowerment through effective delegation, granting autonomy, and recognizing contributions. This module equips you with practical techniques to help your team take ownership of their roles.
                        </p>
                        <div class="shine"></div>
                        <div class="background">


                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                    </div>

                    {/*  */}

                    <div class="cardone">

                        <h4>Leadership and Organizational Culture for Sustainable Growth</h4>
                        <p>
                            Leadership and culture are closely intertwined. Learn how strong leadership can positively shape organizational culture, and how a healthy culture supports leadership initiatives. Aligning these elements leads to improved performance and a more resilient organization.
                        </p>
                        <div class="shine"></div>
                        <div class="background">


                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                        </div>
                    </div>
                </div>

                {/*  */}


                {/* who-should-participate */}
                <div className="container">



                    <section class="who-should-participate">
                        <h2>Who Should Participate?</h2>
                        <p class="intro">This training is ideal for a diverse audience, including:</p>

                        <div >

                            <ul class="audience-list">
                                <li>
                                    <span class="icon">&#128188;</span>
                                    <div>

                                        <p>Business leaders and executives responsible for shaping strategic direction and culture.</p>
                                    </div>
                                </li>
                                <li>
                                    <span class="icon">&#128100;</span>
                                    <div>

                                        <p>HR professionals focused on developing leadership programs and fostering a positive work environment.</p>
                                    </div>
                                </li>
                                <li>
                                    <span class="icon">&#128200;</span>
                                    <div>

                                        <p>Managers and team leaders aiming to improve their leadership style and create a cohesive team.</p>
                                    </div>
                                </li>
                                <li>
                                    <span class="icon">&#128640;</span>
                                    <div>

                                        <p>Aspiring leaders seeking to develop essential skills for career advancement.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>





                </div>
                {/* training-benefits */}

                <div class="container">
                    <section class="training-benefits">
                        <div>
                            <h2>Why Choose Our Training?</h2>
                            <p class="intro">
                                Our Leadership and Organizational Culture training is delivered entirely online, providing the flexibility busy professionals need. Each module features:
                            </p>
                            <ul class="features-list">
                                <li>
                                    <h3>1. Video lectures from industry experts and experienced leaders.</h3>

                                </li>
                                <li>
                                    <h3>2. Interactive discussions and forums for sharing ideas and experiences with peers.</h3>
                                </li>
                                <li>
                                    <h3>3. Practical exercises and case studies to apply what you’ve learned in real-world scenarios.</h3>
                                </li>
                                <li>
                                    <h3>4. Upon completion, participants will receive a certificate recognizing their commitment to leadership excellence and cultural development.</h3>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
{/* enrolll */}
                <div className='container'>

                <div className='title'>
                    {/* <p>{subTitle}</p> */}
                    <h2>Enroll Today and Transform Your Leadership</h2>
                </div>
                <div className='Overview '>
                   
                </div>
                    <div class="enroll-container">
                        <div class="enroll-image">
                            <img src="https://media.istockphoto.com/id/500342299/de/vektor/werden-sie-noch-heute-mitglied-sticker.jpg?s=612x612&w=0&k=20&c=qCIOA3VFv2_ppYoLNl0lFtCaz1kO5LDd44njHKP-LTY=" alt="Leadership Training" />
                        </div>
                        <div class="enroll-text">
                            
                            <p class="descrip">
                                Take this opportunity to develop the skills needed to lead with confidence and cultivate a culture that drives success. Whether you’re an experienced leader looking to refine your approach or an emerging leader ready to take the next step, this training will provide you with the insights and tools to make a lasting impact on your organization.
                            </p>
                            <p class="call-to-action">
                                Enroll today and start your journey toward becoming a more effective leader who empowers their team and shapes a positive, innovative organizational culture.
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Course1
