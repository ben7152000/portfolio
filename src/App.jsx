import React, { lazy, Suspense } from 'react'
import Header from "./components/Header"
import Nav from './components/Nav'
import Footer from "./components/Footer"
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Services = lazy(() => import('./components/Services'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
