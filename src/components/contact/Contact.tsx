'use client';

import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import DOODLE from '@/assets/doodles/person_using_comp.png';
import HEART_DOODLE from '@/assets/doodles/heart.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLImageElement>(null);

  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from('.contact-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      });

      // Heart Beat Animation
      if (heartRef.current) {
        gsap.to(heartRef.current, {
          scale: 1.2,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current || !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error('Configuration error');
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          toast.success('Message Sent!');
        },
        (error) => {
          toast.error('Some error occured');
          console.log(error);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <section ref={containerRef} id="contact" className="relative min-h-screen w-full bg-slate-950 py-24 px-6 overflow-hidden flex items-center justify-center z-40">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <ToastContainer theme="dark" />

      <div className="contact-content max-w-6xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left: Doodles */}
          <div className="relative w-full max-w-md flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image 
                src={DOODLE} 
                alt="Contact Doodle" 
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]"
              />
              <div className="absolute -top-4 right-10 w-16 h-16">
                <Image 
                  ref={heartRef}
                  src={HEART_DOODLE} 
                  alt="Heart" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full max-w-xl bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-slate-100 mb-2">Let&apos;s Talk</h3>
              
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  name="name" 
                  required 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  name="email" 
                  required 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  name="phone" 
                  required 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <textarea 
                  placeholder="Your Message" 
                  name="message" 
                  rows={4}
                  required 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-6 py-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

