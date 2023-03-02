import React from 'react'
import './index.css'
import ME from '../../assets/me-about.jpg'
import { aboutData } from '../../data/data'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me--image'>
            <img src={ME} alt="" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            {aboutData.map(({ id, title, icon, description }, index) => {
              return (
                <article key={id} className='about__card'>
                  {icon}
                  <h5>{title}</h5>
                  <small>{description}</small>
                </article>
              )
            })}
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto distinctio dolorum ducimus earum, esse iusto laudantium minima mollitia necessitatibus officiis quam quibusdam quod quos repellat tempore voluptate voluptatibus. Dolore, velit!
          </p>

          <a href={'#contact'} className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
