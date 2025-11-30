'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from '@/components/home/Home';
import Navigation from '@/components/navigation/Navigation';
import About from '@/components/about/About';
import Experience from '@/components/experience/Experience';
import Portfolio from '@/components/portfolio/Portfolio';
import Testimonials from '@/components/testimonials/Testimonials';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.panel');
      
      panels.forEach((panel: any, i) => {
        const nextPanel = panels[i + 1] as HTMLElement;
        if (nextPanel) {
          gsap.to(panel, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(10px)',
            ease: 'none',
            scrollTrigger: {
              trigger: nextPanel,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            }
          });
        }
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="relative w-full bg-slate-950">
      <Navigation />
      
      {/* Home - Short */}
      <div className="panel sticky top-0 z-10 min-h-screen w-full overflow-hidden bg-slate-950">
        <Home />
      </div>

      {/* About - Short */}
      <div className="panel sticky top-0 z-20 min-h-screen w-full overflow-hidden bg-slate-950">
        <About />
      </div>

      {/* Portfolio - Tall */}
      <div className="panel sticky bottom-0 z-30 min-h-screen w-full bg-slate-950">
        <Portfolio />
      </div>

      {/* Experience - Tall */}
      <div className="panel sticky bottom-0 z-40 min-h-screen w-full bg-slate-950">
        <Experience />
      </div>

      {/* Testimonials - Short */}
      <div className="panel sticky top-0 z-50 min-h-screen w-full bg-slate-950">
        <Testimonials />
      </div>

      {/* Contact - Short */}
      <div className="panel sticky top-0 z-60 min-h-screen w-full overflow-hidden bg-slate-950">
        <Contact />
      </div>

      {/* Footer - Short */}
      <div className="panel sticky bottom-0 z-70 w-full bg-slate-950">
        <Footer />
      </div>
    </main>
  );
}
