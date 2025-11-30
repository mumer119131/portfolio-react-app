'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Icons
import { FaReact, FaAngular } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNextjsFill } from 'react-icons/ri';
import { DiPython } from 'react-icons/di';
import { SiFlask, SiDjango, SiExpress } from 'react-icons/si';
import { BiLogoNodejs } from 'react-icons/bi';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null); // Ref for the new central "Core" element

  // Constants (logoSize remains relevant for card icons)
  const logoSize = 28;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animations (triggered on scroll)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        defaults: { ease: 'power3.out', duration: 1 },
      });

      // Initial states are handled by CSS or from() tweens
      tl.from('.about-title', { y: 30, opacity: 0, duration: 0.8 })
        .from('.card-left', { x: -50, opacity: 0 }, '-=0.6')
        .from('.card-right', { x: 50, opacity: 0 }, '-=0.8')
        .from(coreRef.current, { scale: 0.5, opacity: 0, rotation: 90, ease: 'back.out(1.7)' }, '-=0.8'); // Animate the new Core

      // 2. Core Ambient Animation (Pulsating Central Glow)
      // Targeting the internal glow source for a more focused pulse effect
      gsap.to('.central-glow-source', {
        scale: 1.5,
        opacity: 0.8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });


      // 3. Mouse Interaction for the Core (Subtle Rotation/Scale)
      const handleMouseMove = (e: MouseEvent) => {
        if (!coreRef.current) return;

        const rect = coreRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        // Calculate rotation/translation based on mouse position relative to core center
        const rotateX = -deltaY * 0.02; // Smaller values for subtle effect
        const rotateY = deltaX * 0.02;

        gsap.to(coreRef.current, {
          rotationX: rotateX,
          rotationY: rotateY,
          scale: 1.02, // Slightly scale up on hover
          duration: 0.5,
          overwrite: 'auto',
          ease: 'power1.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(coreRef.current, {
          rotationX: 0,
          rotationY: 0,
          scale: 1, // Return to normal scale
          duration: 0.5,
          overwrite: 'auto',
          ease: 'power1.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      if (coreRef.current) {
        coreRef.current.addEventListener('mouseleave', handleMouseLeave);
      }

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (coreRef.current) {
          coreRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen w-full bg-slate-950 py-20 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

      {/* --- Header --- */}
      <div className="about-title text-center mb-16 relative z-10">
        <p className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-3">
          Get to know me
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
        </h2>
      </div>

      {/* --- Main Grid Content --- */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* 1. Left Card: Frontend */}
          <div className="card-left order-2 lg:order-1">
            <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-blue-500/30 transition-colors shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                Frontend
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I have worked as a Frontend Developer for <span className="text-blue-400 font-semibold">5+ years</span>, creating dynamic and responsive user interfaces using modern technologies.
              </p>
              
              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-4 text-slate-400">
                <TechIcon Icon={FaReact} color="#61DAFB" />
                <TechIcon Icon={RiNextjsFill} color="#ffffff" />
                <TechIcon Icon={FaAngular} color="#dd0031" />
                <TechIcon Icon={IoLogoJavascript} color="#F7DF1E" />
                <TechIcon Icon={SiDjango} color="#092E20" />
              </div>
            </div>
          </div>

          {/* 2. Center: The Creative Core Element (Abstract Network) */}
          <div className="order-1 lg:order-2 flex justify-center py-10 lg:py-0 relative">
            <div 
              ref={coreRef} 
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center cursor-pointer transform-gpu"
              style={{
                transformStyle: 'preserve-3d', 
                perspective: '1000px', // Required for 3D effect
              }}
            >
              {/* Central Blur/Glow Source (Pulsating Element) */}
              <div className="absolute w-16 h-16 rounded-full bg-white/5 central-glow-source blur-xl z-10"></div>
              
              {/* Abstract Rotating Rings - Layer 1 (Blue focus) */}
              <div className="absolute w-48 h-48 rounded-full border border-blue-400/30 animate-spin-slow"></div>
              
              {/* Abstract Rotating Rings - Layer 2 (Purple focus) */}
              {/* Note: I'm reversing the animation for aesthetic contrast */}
              <div 
                className="absolute w-60 h-60 rounded-full border-2 border-purple-500/10"
                style={{ animation: 'spin-medium 10s linear infinite reverse' }}
              ></div>

              {/* Abstract Rotating Lines - Layer 3 (Wireframe Intersection) */}
              <div 
                className="absolute w-72 h-72 border border-blue-500/10" 
                style={{ transform: 'rotate(45deg)', borderRadius: '25%' }}
              ></div>
              <div 
                className="absolute w-72 h-72 border border-purple-500/10" 
                style={{ transform: 'rotate(-45deg)', borderRadius: '25%' }}
              ></div>

              {/* Subtle Text Placeholder (Invisible) */}
               <div className="relative text-white opacity-0 pointer-events-none">
                <span className="block text-4xl">F-S</span>
              </div>
            </div>
          </div>

          {/* 3. Right Card: Backend */}
          <div className="card-right order-3">
             <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-purple-500/30 transition-colors shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2 lg:flex-row-reverse lg:text-right">
                Backend
                <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 lg:text-right">
                I have worked as a Backend Developer for over <span className="text-purple-400 font-semibold">4+ years</span>, building robust and scalable server-side applications.
              </p>
              
              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-4 text-slate-400 lg:justify-end">
                <TechIcon Icon={DiPython} color="#3776AB" />
                <TechIcon Icon={SiFlask} color="#ffffff" />
                <TechIcon Icon={SiExpress} color="#ffffff" />
                <TechIcon Icon={BiLogoNodejs} color="#339933" />
                <TechIcon Icon={SiDjango} color="#092E20" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Helper Component for Tech Icons ---
const TechIcon = ({ Icon, color }: { Icon: React.ElementType, color: string }) => {
  return (
    <div className="group relative">
      <div 
        className="p-3 rounded-lg bg-slate-800 border border-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
        style={{ '--hover-color': color } as React.CSSProperties}
      >
        <Icon 
          size={24} 
          className="transition-colors duration-300 group-hover:text-[var(--hover-color)]" 
        />
      </div>
    </div>
  );
};

export default About;