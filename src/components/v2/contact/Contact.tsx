'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contact" className="relative min-h-[80vh] w-full flex flex-col justify-center items-center py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="contact-content text-center relative z-10 max-w-2xl px-6">
        <p className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-3">Get in Touch</p>
        <h2 className="text-5xl md:text-7xl font-bold text-slate-100 mb-8">Let's Work <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Together</span></h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          I'm currently available for freelance work and open to full-time opportunities. 
          If you have a project that needs some creative touch, or just want to say hi, feel free to drop a message!
        </p>

        <a 
          href="mailto:hello@example.com" 
          className="inline-block px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-blue-50 transition-colors mb-16"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8">
          <a href="#" className="text-slate-400 hover:text-white text-2xl transition-colors"><FaGithub /></a>
          <a href="#" className="text-slate-400 hover:text-blue-400 text-2xl transition-colors"><FaLinkedin /></a>
          <a href="#" className="text-slate-400 hover:text-sky-400 text-2xl transition-colors"><FaTwitter /></a>
          <a href="#" className="text-slate-400 hover:text-red-400 text-2xl transition-colors"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
