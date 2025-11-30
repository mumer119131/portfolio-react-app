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
import { Tilt } from 'react-tilt';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation: Rows sliding in from left/right
      rowsRef.current.forEach((row, index) => {
        const direction = index % 2 === 0 ? -100 : 100; // Left for even, Right for odd
        
        gsap.fromTo(row,
          { x: direction, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%',
            }
          }
        );
      });
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

  // Split skills into 3 rows
  const row1 = skills.slice(0, 6);
  const row2 = skills.slice(6, 12);
  const row3 = skills.slice(12, 18);

  const SkillCard = ({ skill }: { skill: typeof skills[0] }) => (
    <Tilt 
      className="w-40 h-40 flex-shrink-0 mx-4 relative group cursor-pointer"
      options={{
        max: 45,
        scale: 1.1,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        perspective: 500
      } as any}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="w-full h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-3 shadow-xl" style={{ transformStyle: 'preserve-3d' }}>
        <div 
          className="text-4xl text-slate-400 group-hover:text-[var(--color)] transition-all duration-300 group-hover:drop-shadow-[0_0_20px_var(--color)]" 
          style={{ '--color': skill.color, transform: 'translateZ(80px)' } as React.CSSProperties}
        >
          <div className="transition-transform duration-300">
            {skill.icon}
          </div>
        </div>
        <span 
          className="text-slate-300 font-medium text-sm tracking-wide group-hover:text-white transition-colors"
          style={{ transform: 'translateZ(50px)' }}
        >
          {skill.name}
        </span>
      </div>
    </Tilt>
  );

  const MarqueeRow = ({ items, direction, rowIndex }: { items: typeof skills, direction: 'left' | 'right', rowIndex: number }) => (
    <div 
      ref={(el) => { if (el) rowsRef.current[rowIndex] = el }}
      className="flex w-full overflow-hidden py-4 relative mask-gradient"
    >
      <div className={`flex animate-marquee-${direction} whitespace-nowrap`}>
        {[...items, ...items, ...items, ...items].map((skill, idx) => (
          <SkillCard key={`${rowIndex}-${idx}`} skill={skill} />
        ))}
      </div>
    </div>
  );

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

      <div className="w-full max-w-[100vw] flex flex-col gap-8 relative z-10">
        <MarqueeRow items={row1} direction="left" rowIndex={0} />
        <MarqueeRow items={row2} direction="right" rowIndex={1} />
        <MarqueeRow items={row3} direction="left" rowIndex={2} />
      </div>
    </section>
  );
};

export default Experience;
