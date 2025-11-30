'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3, SiTailwindcss, SiDjango, SiFlask, SiMongodb, SiPython, SiExpress, SiPostgresql, SiDocker, SiGit, SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { FaNode, FaAws } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { TbBrandReactNative } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.fromTo(cardsRef.current, 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.5,
          rotationX: -45
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: {
            amount: 0.8,
            grid: [3, 6],
            from: "center"
          },
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
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
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <GrReactjs />, name: 'React', color: '#61DAFB' },
    { icon: <RiNextjsLine />, name: 'Next.js', color: '#ffffff' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06B6D4' },
    { icon: <TbBrandReactNative />, name: 'React Native', color: '#61DAFB' },
    { icon: <SiPython />, name: 'Python', color: '#3776AB' },
    { icon: <SiDjango />, name: 'Django', color: '#092E20' },
    { icon: <SiFlask />, name: 'Flask', color: '#ffffff' },
    { icon: <FaNode />, name: 'Node.js', color: '#339933' },
    { icon: <SiExpress />, name: 'Express', color: '#ffffff' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#4169E1' },
    { icon: <SiGit />, name: 'Git', color: '#F05032' },
    { icon: <SiDocker />, name: 'Docker', color: '#2496ED' },
    { icon: <FaAws />, name: 'AWS', color: '#FF9900' },
  ];

  return (
    <section 
      ref={containerRef} 
      id="experience" 
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="text-center mb-20 relative z-10">
        <p className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-3">Tech Stack</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
          Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tools</span>
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 perspective-1000">
          {skills.map((skill, index) => (
            <div 
              key={index}
              ref={(el) => { if (el) cardsRef.current[index] = el }}
              className="skill-card group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 animate-float"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
              
              {/* Card Content */}
              <div className="relative h-full bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-white/5 group-hover:border-blue-500/30 transition-colors">
                <div 
                  className="text-4xl text-slate-400 group-hover:text-[var(--color)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_var(--color)]" 
                  style={{ '--color': skill.color } as React.CSSProperties}
                >
                  {skill.icon}
                </div>
                <span className="text-slate-300 font-medium text-sm tracking-wide group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .group-hover\:animate-shimmer:hover {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;
