'use client';

import React, { useEffect, useState, useRef } from 'react';
import LoadingState from './LoadingState/LoadingState';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  img: string;
  web_name: string;
  details: string;
  github_link: string;
  live_preview: string;
  is_visible?: boolean;
}

const backup_projects: Project[] = [
  {
    id: '6',
    img: 'https://imgur.com/gMkvmz1.jpg',
    web_name: 'Facial Probe',
    details:
      'FaceSketch AI is a cutting-edge platform that uses advanced machine learning algorithms to generate sketches of individuals based on facial characteristics.',
    github_link: 'https://github.com/mumer119131/FacialProbeDemo',
    live_preview: 'https://facial-probe-demo.vercel.app/',
  },
  {
    id: '2',
    img: 'https://imgur.com/jTc3VfQ.jpg',
    web_name: 'SemantoTube',
    details: 'Semantically search through long YouTube videos with the power of AI.',
    github_link: 'https://github.com/mumer119131/SemantoFinal',
    live_preview: 'https://semantotube.vercel.app',
  },
  {
    id: '1',
    img: 'https://imgur.com/IxVXOzt.jpg',
    web_name: 'LawSuite',
    details:
      'Get legal consultation powered by a multilingual AI chatbot trained on Pakistani law.',
    github_link: 'https://github.com/mumer119131/FinalRepoLawSuite',
    live_preview: 'https://lawsuite.vercel.app',
  },
  {
    id: '3',
    img: 'https://imgur.com/KSE0Qln.jpg',
    web_name: 'Tailors App',
    details:
      'A Java-based Android application that helps tailors store and back up client data with ease.',
    github_link: 'https://github.com/mumer119131/TailorsApp',
    live_preview: '',
  },
  {
    id: '4',
    img: 'https://imgur.com/GbIGciF.jpg',
    web_name: 'Edit Pro',
    details:
      'An image editing web application with a ReactJS frontend and a Python Flask backend.',
    github_link: 'https://github.com/mumer119131/Image_Editor_Python_React',
    live_preview: 'https://image-editor-client.vercel.app',
  },
  {
    id: '5',
    img: 'https://imgur.com/D4YCda3.jpg',
    web_name: 'Plus Pictures',
    details:
      'A ReactJS web platform combining Pixabay, Pexels, and Unsplash into a single search interface.',
    github_link: 'https://github.com/mumer119131/PlusPictures',
    live_preview: 'https://plus-pictures.vercel.app',
  },
];

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();

        const transformed: Project[] = data.map((item: any) => ({
          id: item.sys.id,
          img: `https:${item.fields.image.fields.file.url}`,
          web_name: item.fields.title,
          details: item.fields.description,
          github_link: item.fields.githubUrl || '',
          live_preview: item.fields.previewUrl || '',
          is_visible: item.fields.isVisible ?? true,
        }));

        setProjects(transformed);
      } catch (error) {
        setProjects(backup_projects);
      } finally {
        setIsLoading(false);
      }
    };

    getProjects();
  }, []);

  useEffect(() => {
    if (!isLoading && projects.length > 0) {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray('.project-card');
        
        cards.forEach((card: any, i) => {
          const nextCard = cards[i + 1] as HTMLElement;
          
          if (nextCard) {
            gsap.to(card, {
              scale: 0.9,
              filter: 'blur(10px)',
              ease: 'none',
              scrollTrigger: {
                trigger: nextCard,
                start: "top bottom",
                end: "top 15%",
                scrub: true,
              }
            });
          }
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isLoading, projects]);

  return (
    <section ref={containerRef} id="portfolio" className="relative w-full min-h-screen bg-slate-950 py-24 px-6 z-10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-3">
            My Recent Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
        </div>

        {/* Projects Stack */}
        <div className="flex flex-col pb-24">
          {isLoading ? (
            <LoadingState />
          ) : (
            projects
              .filter((p) => p.is_visible !== false)
              .map(({ id, img, web_name, details, github_link, live_preview }, index) => (
                <div 
                  key={id} 
                  className="project-card sticky top-[15%] min-h-[500px] w-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row mb-24 last:mb-0"
                  style={{ zIndex: index + 1 }}
                >
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden group">
                    <Image
                      src={img}
                      alt={web_name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                    <div className="absolute top-0 right-0 p-6 opacity-10 text-9xl font-bold text-white select-none pointer-events-none">
                      {index + 1}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-slate-100 mb-4 group-hover:text-blue-400 transition-colors">
                      {web_name}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                      {details}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-auto">
                      {github_link && (
                        <a 
                          href={github_link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 font-medium border border-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-600 transition-all flex items-center gap-2"
                        >
                          <FaGithub /> Code
                        </a>
                      )}

                      {live_preview && (
                        <a
                          href={live_preview}
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

