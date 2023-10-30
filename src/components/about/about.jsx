import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
// import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            {/* <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article> */}

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Experience</h5>
              <small>2 years of building projects</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>

          </div>
          <p>
            I am NOUREDDINE ELFAQIR, a 2nd year
            full-stack Developer. I am actively
            developing my skills in full-stack
            web development ( Im looking for internship opportunity )
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about