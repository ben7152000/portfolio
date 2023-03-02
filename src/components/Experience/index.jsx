import React from 'react'
import './index.css'
import List from './components/List'
import { skillData } from "../../data"

const Experience = () => {
  const { fronted, backed } = skillData

  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {fronted.map(({ title, description }, index) => {
              return <List key={index} title={title} description={description} />
            })}
          </div>
        </div>

        <div className='experience__backed'>
          <h3>Backed Development</h3>
          <div className='experience__content'>
            {backed.map(({ title, description }, index) => {
              return <List key={index} title={title} description={description} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
