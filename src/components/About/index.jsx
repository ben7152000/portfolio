import React from 'react'
import './index.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa"
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from "react-icons/vsc"
import Card from './components/Card'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <Card
              icon={<FaAward className='about__icon' />}
              title='Experience'
              description='3+ Years Working'
            />

            <Card
              icon={<FiUsers className='about__icon' />}
              title='Clients'
              description='200+ Worldwide'
            />

            <Card
              icon={<VscFolderLibrary className='about__icon' />}
              title='Projects'
              description='80+ Completed'
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet, architecto autem error eveniet exercitationem facilis incidunt nam necessitatibus perspiciatis quod tempore temporibus totam. Deleniti fugiat libero neque repellendus sequi.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
