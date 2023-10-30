import React from 'react'
import './portfolio.css'
import {SiGithub} from 'react-icons/si'
// import {CgMediaLive} from 'react-icons/cg'
import { projects } from './data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

       {
        projects.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} 
              className="btn" rel='noreferrer' target='_blank' title='Code surce on github'><SiGithub className="portfolio__item-cta-icon"/> Github</a>
              {/* <a href={demo} className="btn btn-primary" rel='noreferrer' target='_blank' title='Live demo' ><CgMediaLive className="portfolio__item-cta-icon"/> Live Demo</a> */}
            </div>
          </article>
          )
        })
       }

        
      </div>
    </section>
  )
}

export default Portfolio