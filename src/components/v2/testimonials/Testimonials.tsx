'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuoteLeft } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  company: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (testimonials.length > 0) {
      const ctx = gsap.context(() => {
        const cards = cardsRef.current;
        
        // Initial state: scattered off-screen to the right
        cards.forEach((card) => {
          gsap.set(card, {
            x: window.innerWidth, // Off screen right
            y: () => gsap.utils.random(-300, 300), // Random vertical scatter
            rotation: () => gsap.utils.random(-45, 45), // Random rotation
            opacity: 0,
            scale: 0.8
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            end: "+=2000", // Scroll distance to complete the stacking
            scrub: 1,
          }
        });

        cards.forEach((card, i) => {
          tl.to(card, {
            x: 0, // Center
            y: () => gsap.utils.random(-10, 10), // Slight messiness in pile
            rotation: () => gsap.utils.random(-5, 5), // Slight rotation in pile
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          }, i * 0.5); // Stagger the arrival
        });

      }, containerRef);
      return () => ctx.revert();
    }
  }, [testimonials]);

  return (
    <section ref={containerRef} id="testimonials" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      
      <div className="text-center mb-12 relative z-10 h-[15vh]">
        <p className="text-purple-500 font-medium tracking-widest text-sm uppercase mb-3">Feedback</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Stories</span></h2>
      </div>

      <div className="relative w-full max-w-2xl h-[50vh] flex items-center justify-center z-10">
        {testimonials.map((item, index) => (
          <div 
            key={index}
            ref={(el) => { if (el) cardsRef.current[index] = el }}
            className="absolute w-[85vw] md:w-[600px] p-8 md:p-10 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col gap-6"
            style={{ transformOrigin: 'center center' }}
          >
            <FaQuoteLeft className="text-3xl text-purple-500/40" />
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-light">"{item.text}"</p>
            <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                {item.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-bold text-base">{item.name}</h4>
                <p className="text-slate-500 text-xs uppercase tracking-wider">{item.role} @ {item.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
