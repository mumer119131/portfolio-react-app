'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { IoTerminal, IoLogoGithub, IoLogoLinkedin, IoMail, IoCodeSlash } from 'react-icons/io5';
import { BsArrowReturnRight } from 'react-icons/bs';
import { SiUpwork } from 'react-icons/si';

import MY_IMAGE from '@/assets/my.png';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      gsap.set(['.hero-text', '.hero-btn', '.side-bar-element'], { autoAlpha: 0, y: 30 });
      gsap.set(heroImageRef.current, { autoAlpha: 0, scale: 0.9 });

      tl.to(heroImageRef.current, { autoAlpha: 1, scale: 1, duration: 1 })
        .to('.hero-text', { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.8 }, '-=0.5')
        .to('.hero-btn', { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .to('.side-bar-element', { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.8 }, '-=0.6');

      gsap.to('.hero-blob', {
        scale: 1.1,
        rotation: 10,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-6">
        
        {/* Left: Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <small className="hero-text text-blue-400 font-medium tracking-widest uppercase mb-4 block">
            Hello, I&apos;m
          </small>
          
          <h1 className="hero-text text-5xl sm:text-6xl md:text-7xl font-bold text-slate-100 leading-tight mb-2">
            Muhammad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Umer
            </span>
          </h1>

          <p className="hero-text text-lg sm:text-xl text-slate-400 mt-4 mb-8 font-mono">
            - FullStack Developer -
          </p>

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
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-slate-600 text-2xl hidden lg:block group-hover:text-blue-400 transition-colors">
              <BsArrowReturnRight />
            </div>
            <Link
              href="/console"
              className="flex items-center gap-3 px-6 py-3 bg-black/40 backdrop-blur-md border border-slate-800 rounded-xl text-slate-300 transition-all hover:border-green-500/50 hover:text-green-400 hover:shadow-[0_0_15px_rgba(74,222,128,0.1)]"
            >
              <IoTerminal className="text-xl" />
              <span className="font-mono text-sm">Access Terminal / Console</span>
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div ref={heroImageRef} className="relative w-full max-w-md lg:max-w-lg aspect-square flex justify-center items-center">
          <div className="hero-blob absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 w-[80%] h-[80%] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm group">
            <Image 
              src={MY_IMAGE} 
              alt="Muhammad Umer" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
          </div>

           <a
            href="https://www.upwork.com/freelancers/~018f0a3f855d9f92d9"
            target="_blank"
            rel="noreferrer"
            className="absolute -bottom-6 -right-4 sm:bottom-10 sm:-right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-xl cursor-pointer hover:bg-white/20 transition-colors z-20 max-w-[200px]"
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
    </section>
  );
};

export default Home;
