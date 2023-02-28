import React from 'react'
import Header from "./components/Header"
import Nav from './components/Nav'
import About from './components/About'
import Experience from "./components/Experience"
import Services from "./components/Services"
import Portfolio from "./components/Protfolio"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
