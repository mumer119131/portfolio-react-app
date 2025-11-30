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

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// --- Types & Data ---
interface SkillData {
  key: string;
  logo: React.ReactNode;
  name: string;
  description: string;
  color: string; // Added color for individual brand identity on hover
}

const frontendSkills: SkillData[] = [
  { key: '1', logo: <ImHtmlFive />, name: 'HTML5', description: 'Semantic markup structure', color: '#E34F26' },
  { key: '2', logo: <SiCss3 />, name: 'CSS3', description: 'Modern responsive styling', color: '#1572B6' },
  { key: '3', logo: <IoLogoJavascript />, name: 'JavaScript', description: 'Dynamic ES6+ interactions', color: '#F7DF1E' },
  { key: '4', logo: <GrReactjs />, name: 'React', description: 'Component-based architecture', color: '#61DAFB' },
  { key: '5', logo: <RiNextjsLine />, name: 'Next.js', description: 'Full-stack React framework', color: '#ffffff' },
  { key: '6', logo: <SiTailwindcss />, name: 'Tailwind', description: 'Utility-first design system', color: '#06B6D4' },
  { key: '7', logo: <FaBootstrap />, name: 'Bootstrap', description: 'Rapid UI development', color: '#7952B3' },
  { key: '8', logo: <TbBrandReactNative />, name: 'React Native', description: 'Cross-platform mobile', color: '#61DAFB' },
];

const backendSkills: SkillData[] = [
  { key: '1', logo: <SiPython />, name: 'Python', description: 'Advanced scripting logic', color: '#3776AB' },
  { key: '2', logo: <SiDjango />, name: 'Django', description: 'Secure Web Framework', color: '#092E20' },
  { key: '3', logo: <SiFlask />, name: 'Flask', description: 'Micro-web framework', color: '#ffffff' },
  { key: '4', logo: <FaNode />, name: 'Node.js', description: 'Server-side runtime', color: '#339933' },
  { key: '5', logo: <SiExpress />, name: 'Express', description: 'API development', color: '#ffffff' },
  { key: '6', logo: <SiMongodb />, name: 'MongoDB', description: 'NoSQL document storage', color: '#47A248' },
];

// --- Sub-Component: Skill Card ---
const SkillCard = ({ logo, name, description, color }: SkillData) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const icon = iconRef.current;
    if (!card || !icon) return;

    // Hover Animation Logic
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        borderColor: color, // Glows with brand color
        boxShadow: `0 10px 30px -10px ${color}40`, // Colored shadow
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(icon, {
        scale: 1.2,
        rotate: 5,
        color: color,
        duration: 0.4,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 0 0 0 transparent',
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        color: '#94a3b8', // Return to slate-400
        duration: 0.4,
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [color]);

  return (
    <div
      ref={cardRef}
      className="skill-card group relative p-6 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden cursor-default transition-colors"
    >
      <div className="relative z-10 flex flex-col gap-4">
        <div 
          ref={iconRef} 
          className="text-4xl text-slate-400 transition-colors"
        >
          {logo}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-slate-100 mb-1">{name}</h4>
          <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
        </div>
      </div>
      
      {/* Subtle Background Gradient Blob */}
      <div 
        className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

// --- Main Component ---
const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Animation
      gsap.from('.section-header', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      // 2. Staggered Grid Animation (Frontend)
      gsap.from('.frontend-grid .skill-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.frontend-grid',
          start: 'top 85%',
        }
      });

      // 3. Staggered Grid Animation (Backend)
      gsap.from('.backend-grid .skill-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.backend-grid',
          start: 'top 85%',
        }
      });

    }, containerRef); // Scope cleanup

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen bg-slate-950 py-24 px-6 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Header */}
        <div className="section-header text-center mb-20">
          <span className="text-blue-500 font-medium tracking-widest text-sm uppercase bg-blue-500/10 px-4 py-2 rounded-full mb-6 inline-block">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 tracking-tight">
            Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tools</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of the technologies I use to build scalable, robust, and modern web applications.
          </p>
        </div>

        {/* Frontend Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-slate-200">Frontend Development</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
          </div>
          
          <div className="frontend-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frontendSkills.map((skill) => (
              <SkillCard  {...skill} />
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-slate-200">Backend Architecture</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
          </div>
          
          <div className="backend-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendSkills.map((skill) => (
              <SkillCard  {...skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;