import React from "react"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

/** 關於我的資料 */
export const aboutData = [
  {
    id: 1,
    title:'Experience',
    icon: <FaAward className='about__icon' />,
    description: '3+ Years Working'
  },
  {
    id: 2,
    title:'Clients',
    icon: <FiUsers className='about__icon' />,
    description: '200+ Worldwide'
  },
  {
    id: 3,
    title:'Projects',
    icon: <VscFolderLibrary className='about__icon' />,
    description: '80+ Completed'
  },
]

/** 技能的資料 */
export const skillData = {
  fronted: [
    { id: 1, title: 'HTML', description: 'Experienced' },
    { id: 2, title: 'CSS', description: 'Experienced' },
    { id: 3, title: 'Javascript', description: 'Experienced' },
    { id: 4, title: 'Tailwind', description: 'Experienced' },
    { id: 5, title: 'React', description: 'Experienced' },
    { id: 6, title: 'Vue', description: 'Experienced' }
  ],
  backed: [
    { id: 1, title: 'Node JS', description: 'Experienced' },
    { id: 2, title: 'Express', description: 'Experienced' },
    { id: 3, title: 'Nest JS', description: 'Experienced' },
    { id: 4, title: 'MySQL', description: 'Experienced' },
    { id: 5, title: 'MongoDB', description: 'Experienced' }
  ]
}

/** 服務的資料 */
export const serviceData = [
  {
    id: 1,
    title: 'UI/UX Design',
    texts: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    ]
  },
  {
    id: 2,
    title: 'Web Development',
    texts: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    ]
  },
  {
    id: 3,
    title: 'Content Creation',
    texts: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    ]
  }
]

/** 作品的資料 */
export const portfolioData = [
  {
    id: 1,
    image: require('../assets/portfolio1.jpg'),
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: require('../assets/portfolio2.jpg'),
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: require('../assets/portfolio3.jpg'),
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: require('../assets/portfolio4.jpg'),
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 5,
    image: require('../assets/portfolio5.png'),
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 6,
    image: require('../assets/portfolio6.jpg'),
    title: 'This is a portfolio item title',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  }
]

/** 服務評價的資料 */
export const testimonialData = [
  {
    id: 1,
    avatar: require('../assets/avatar1.jpg'),
    name: 'Ben',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae consequatur debitis deserunt eius eos esse eveniet explicabo nihil pariatur quaerat quasi quia quibusdam, quod similique, sunt ullam voluptas voluptatum.'
  },
  {
    id: 2,
    avatar: require('../assets/avatar2.jpg'),
    name: 'Anthony',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae consequatur debitis deserunt eius eos esse eveniet explicabo nihil pariatur quaerat quasi quia quibusdam, quod similique, sunt ullam voluptas voluptatum.'
  },
  {
    id: 3,
    avatar: require('../assets/avatar3.jpg'),
    name: 'Angelo',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae consequatur debitis deserunt eius eos esse eveniet explicabo nihil pariatur quaerat quasi quia quibusdam, quod similique, sunt ullam voluptas voluptatum.'
  },
  {
    id: 4,
    avatar: require('../assets/avatar4.jpg'),
    name: 'Jenny',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae consequatur debitis deserunt eius eos esse eveniet explicabo nihil pariatur quaerat quasi quia quibusdam, quod similique, sunt ullam voluptas voluptatum.'
  },
]
