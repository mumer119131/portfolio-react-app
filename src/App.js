import { useEffect } from 'react'
import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Aos from 'aos'
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({duration : 2000})
  }, [])
  
  return (
    <>
      <Home />
      <Navigation />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
