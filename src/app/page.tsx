'use client';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Home from '@/components/home/Home';
import Navigation from '@/components/navigation/Navigation';
import About from '@/components/about/About';
import Experience from '@/components/experience/Experience';
import Portfolio from '@/components/portfolio/Portfolio';
import Testimonials from '@/components/testimonials/Testimonials';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export default function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Home />
      <Navigation />
      <About />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
