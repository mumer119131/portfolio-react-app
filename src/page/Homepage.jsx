import React from 'react'
import Home from '../components/home/Home'
import Navigation from '../components/navigation/Navigation'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Portfolio from '../components/portfolio/Portfolio'
import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'

const Homepage = () => {
  return (
    <>
      <Hero />
      <Home />
      <Navigation />
      <About />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default Homepage