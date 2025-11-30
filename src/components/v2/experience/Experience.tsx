'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3, SiTailwindcss, SiDjango, SiFlask, SiMongodb, SiPython, SiExpress } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { FaBootstrap, FaNode } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { TbBrandReactNative } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-card', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
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

  const skills = [
    { icon: <ImHtmlFive />, name: 'HTML5', color: '#E34F26' },
    { icon: <SiCss3 />, name: 'CSS3', color: '#1572B6' },
    { icon: <IoLogoJavascript />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <GrReactjs />, name: 'React', color: '#61DAFB' },
    { icon: <RiNextjsLine />, name: 'Next.js', color: '#ffffff' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06B6D4' },
    { icon: <SiPython />, name: 'Python', color: '#3776AB' },
    { icon: <SiDjango />, name: 'Django', color: '#092E20' },
    { icon: <SiFlask />, name: 'Flask', color: '#ffffff' },
    { icon: <FaNode />, name: 'Node.js', color: '#339933' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <TbBrandReactNative />, name: 'React Native', color: '#61DAFB' },
  ];

  return (
    <section ref={containerRef} id="experience" className="relative min-h-screen w-full flex flex-col justify-center items-center py-20">
      
      <div className="text-center mb-16 relative z-10">
        <p className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-3">Tech Stack</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tools</span></h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card group p-6 bg-slate-900/50 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-blue-500/50 transition-all hover:-translate-y-2"
            >
              <div className="text-4xl text-slate-400 group-hover:text-[var(--color)] transition-colors" style={{ '--color': skill.color } as React.CSSProperties}>
                {skill.icon}
              </div>
              <span className="text-slate-300 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
