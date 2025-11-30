'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export interface Project {
  id: string;
  img: string;
  web_name: string;
  details: string;
  github_link: string;
  live_preview: string;
  is_visible?: boolean;
}

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} id="portfolio" className="relative w-full py-20">
      
      <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
        <p className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-2">My Recent Work</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span></h2>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col gap-12 pb-20">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card sticky top-24 md:top-32 w-full max-w-5xl mx-auto bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[60vh] md:h-[500px]"
            style={{ 
              top: `calc(100px + ${index * 20}px)`, // Stacking offset
              zIndex: index + 1 
            }}
          >
            {/* Image Section */}
            <div className="relative h-1/2 md:h-full md:w-3/5 overflow-hidden group">
              <Image
                src={project.img}
                alt={project.web_name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-10 flex flex-col justify-center md:w-2/5 bg-slate-900">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">{project.web_name}</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 line-clamp-4 md:line-clamp-none">
                {project.details}
              </p>
              
              <div className="flex gap-4 mt-auto">
                {project.github_link && (
                  <a href={project.github_link} target="_blank" rel="noreferrer" className="flex-1 py-3 rounded-xl bg-slate-800 text-slate-300 text-center hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 font-medium">
                    <FaGithub /> Code
                  </a>
                )}
                {project.live_preview && (
                  <a href={project.live_preview} target="_blank" rel="noreferrer" className="flex-1 py-3 rounded-xl bg-blue-600 text-white text-center hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 font-medium">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
