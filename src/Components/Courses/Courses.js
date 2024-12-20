import React from 'react'
import img_courses from '../../assets/service33.jpg'
import './Courses.css'
import { coursesCard } from '../../data'
import { Link } from 'react-router-dom'


const Courses = () => {



    return (
        <div className='courses-description'>
            {/*  */}
            {coursesCard.map((course, index) => (
                <article className="courses-card" key={index}>
                    <header className="courses-card__thumb">
                        <Link to={`/courses/${course.id}`}>    <img src={course.image} alt={course.title} /></Link>
                    </header>
                    <div className="courses-card__body">
                        <div className="courses-card__category"><b>{course.top}</b></div>
                        <h2 className="courses-card__title">{course.title}</h2>
                        <Link to={`/courses/${course.id}`}>more</Link>
                        <p className="courses-card__description">{course.description}</p>
                    </div>
                    <footer className="courses-card__footer">
                        <span className="icon ion-clock"></span> <i className="fa fa-star-o" aria-hidden="true"> {course.stars} </i>

                        <span className="icon ion-chatbox"></span> <i className='fa fa-comment-o'> {course.comments}</i>
                    </footer>
                </article>
            ))}

        </div>


    )
}

export default Courses
