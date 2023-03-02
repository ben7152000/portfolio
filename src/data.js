import React from "react"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import Testimonials from "./components/Testimonials";
import AVTR1 from "./assets/avatar1.jpg";

export const aboutData = [
  { title:'Experience', icon: <FaAward className='about__icon' />, description: '3+ Years Working' },
  { title:'Clients', icon: <FiUsers className='about__icon' />, description: '200+ Worldwide' },
  { title:'Projects', icon: <VscFolderLibrary className='about__icon' />, description: '80+ Completed' },
]

export const skillData = {
  fronted: [
    { title: 'HTML', description: 'Experienced' },
    { title: 'CSS', description: 'Experienced' },
    { title: 'Javascript', description: 'Experienced' },
    { title: 'Tailwind', description: 'Experienced' },
    { title: 'React', description: 'Experienced' },
    { title: 'Vue', description: 'Experienced' }
  ],
  backed: [
    { title: 'Node JS', description: 'Experienced' },
    { title: 'Express', description: 'Experienced' },
    { title: 'Nest JS', description: 'Experienced' },
    { title: 'MySQL', description: 'Experienced' },
    { title: 'MongoDB', description: 'Experienced' }
  ]
}

export const serviceData = [
  {
    title: 'UI/UX Design',
    texts: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    ]
  },
  {
    title: 'Web Development',
    texts: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    ]
  },
  {
    title: 'Content Creation',
    texts: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    ]
  }
]

export const portfolioData = [
  {
    id: 1,
    image: require('./assets/portfolio1.jpg'),
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: require('./assets/portfolio2.jpg'),
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: require('./assets/portfolio3.jpg'),
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: require('./assets/portfolio4.jpg'),
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 5,
    image: require('./assets/portfolio5.png'),
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 6,
    image: require('./assets/portfolio6.jpg'),
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  }
]

export const testimonialData = [
  {
    id: 1,
    avatar: require('./assets/avatar1.jpg'),
    name: 'Ben',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae consequatur debitis deserunt eius eos esse eveniet explicabo nihil pariatur quaerat quasi quia quibusdam, quod similique, sunt ullam voluptas voluptatum.'
  },
  {
    id: 2,
    avatar: require('./assets/avatar2.jpg'),
    name: 'Anthony',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae consequatur debitis deserunt eius eos esse eveniet explicabo nihil pariatur quaerat quasi quia quibusdam, quod similique, sunt ullam voluptas voluptatum.'
  },
  {
    id: 3,
    avatar: require('./assets/avatar3.jpg'),
    name: 'Angelo',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae consequatur debitis deserunt eius eos esse eveniet explicabo nihil pariatur quaerat quasi quia quibusdam, quod similique, sunt ullam voluptas voluptatum.'
  },
  {
    id: 4,
    avatar: require('./assets/avatar4.jpg'),
    name: 'Jenny',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae consequatur debitis deserunt eius eos esse eveniet explicabo nihil pariatur quaerat quasi quia quibusdam, quod similique, sunt ullam voluptas voluptatum.'
  },
]
