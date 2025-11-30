'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { IoTerminal } from 'react-icons/io5';
import { BsArrowReturnRight } from 'react-icons/bs';
import { SiUpwork } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';

import MY_IMAGE from '@/assets/my.png';

const Home: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["FullStack Developer", "Tech Enthusiast", "Gamer", "Entrepreneur", "Learner"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Initial States
      gsap.set(['.hero-text-item', '.hero-btn', '.upwork-badge'], { y: 50, opacity: 0 });
      gsap.set(heroImageRef.current, { scale: 0.8, opacity: 0, rotationY: 15 });
      gsap.set('.hero-blob', { scale: 0 });

      // Animation Sequence
      tl.to('.hero-blob', { scale: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)' })
        .to(heroImageRef.current, { scale: 1, opacity: 1, rotationY: 0, duration: 1.2, ease: 'power4.out' }, '-=1')
        .to('.hero-text-item', { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 }, '-=0.8')
        .to('.hero-btn', { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 }, '-=0.6')
        .to('.upwork-badge', { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.4');

      // Continuous Animations
      gsap.to('.hero-blob', {
        scale: 1.1,
        rotation: 10,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Image Float
      gsap.to(heroImageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;

    gsap.to('.parallax-target', {
      x: xPos,
      y: yPos,
      duration: 1,
      ease: 'power2.out'
    });

    gsap.to('.parallax-target-reverse', {
      x: -xPos * 1.5,
      y: -yPos * 1.5,
      duration: 1,
      ease: 'power2.out'
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none parallax-target-reverse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none parallax-target-reverse" />

      {/* Social Sidebar - Left */}
      <div className="absolute left-8 xl:left-12 bottom-0 hidden xl:flex flex-col gap-6 items-center z-20">
        <div className="flex flex-col gap-6">
          <a href="https://github.com/mumer119131" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 text-xl transition-all hover:-translate-y-1 hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/dev-umer/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 text-xl transition-all hover:-translate-y-1 hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://www.behance.net/mumer4" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 text-xl transition-all hover:-translate-y-1 hover:scale-110">
            <FaBehance />
          </a>
        </div>
        <div className="w-[1px] h-24 xl:h-32 bg-gradient-to-b from-slate-700 to-transparent"></div>
      </div>

      {/* Email Sidebar - Right */}
      <div className="absolute right-8 xl:right-12 bottom-0 hidden xl:flex flex-col gap-6 items-center z-20">
        <a href="mailto:mumer119131@gmail.com" className="text-slate-400 hover:text-blue-400 text-sm tracking-[0.2em] font-mono vertical-text hover:-translate-y-1 transition-all" style={{ writingMode: 'vertical-rl' }}>
          mumer119131@gmail.com
        </a>
        <div className="w-[1px] h-24 xl:h-32 bg-gradient-to-b from-slate-700 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-32">
        
        {/* Left: Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl parallax-target relative">
          {/* Decorative Elements */}
          <div className="absolute -left-20 -top-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none hidden lg:block" />
          
          <small className="hero-text-item text-blue-400 font-medium tracking-widest uppercase mb-4 block">
            Hello, I&apos;m
          </small>
          
          <h1 ref={titleRef} className="hero-text-item text-5xl sm:text-6xl md:text-7xl font-bold text-slate-100 leading-tight mb-2">
            Muhammad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block hover:scale-105 transition-transform cursor-default">
              Umer
            </span>
          </h1>

          <div className="hero-text-item mt-4 mb-8 h-8 relative w-full flex justify-center lg:justify-start overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg sm:text-xl text-slate-400 font-mono absolute"
              >
                ♰ {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="/cv.pdf" 
              download 
              className="hero-btn group relative px-8 py-3 rounded-full bg-slate-800 text-white font-medium border border-slate-700 overflow-hidden transition-all hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <div className="absolute inset-0 bg-blue-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10">Download CV</span>
            </a>
            
            <a 
              href="#contact" 
              className="hero-btn group px-8 py-3 rounded-full bg-blue-600 text-white font-medium transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105"
            >
              Let&apos;s Talk
            </a>
          </div>

          <div className="hero-btn mt-8 relative group cursor-pointer">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-slate-600 text-2xl hidden lg:block group-hover:text-blue-400 transition-colors animate-bounce-horizontal">
              <BsArrowReturnRight />
            </div>
            <Link
              href="/console"
              className="flex items-center gap-3 px-6 py-3 bg-black/40 backdrop-blur-md border border-slate-800 rounded-xl text-slate-300 transition-all hover:border-green-500/50 hover:text-green-400 hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] group-hover:-translate-y-1"
            >
              <IoTerminal className="text-xl group-hover:animate-pulse" />
              <span className="font-mono text-sm">Access Terminal / Console</span>
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex justify-center items-center">
          <div className="hero-blob absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
          
          {/* Floating Icons */}
          <div className="absolute -right-12 top-20 p-4 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl animate-float-slow hidden lg:block z-20">
            <svg className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          </div>
          <div className="absolute -left-8 bottom-32 p-4 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl animate-float-delayed hidden lg:block z-20">
            <svg className="w-8 h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
              <path d="m10 9-2 2 2 2" />
              <path d="m14 9 2 2-2 2" />
            </svg>
          </div>

          <div ref={heroImageRef} className="relative z-10 w-[80%] h-[80%] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm group perspective-1000">
            <Image 
              src={MY_IMAGE} 
              alt="Muhammad Umer" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            {/* Glare Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

           <a
            href="https://www.upwork.com/freelancers/~018f0a3f855d9f92d9"
            target="_blank"
            rel="noreferrer"
            className="upwork-badge absolute -bottom-6 -right-4 sm:bottom-10 sm:-right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-xl cursor-pointer hover:bg-white/20 transition-all hover:scale-105 hover:-rotate-2 z-20 max-w-[200px]"
          >
            <div className="bg-[#14a800] p-2 rounded-full text-white shadow-lg">
              <SiUpwork className="text-2xl" />
            </div>
            <div>
              <p className="text-xs text-slate-300 uppercase tracking-wide">Top Rated on</p>
              <p className="text-sm font-bold text-white">Upwork</p>
            </div>
          </a>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes bounce-horizontal {
          0%, 100% { transform: translate(-50%, -50%); }
          50% { transform: translate(-20%, -50%); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1.5s infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-slow 4s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default Home;
