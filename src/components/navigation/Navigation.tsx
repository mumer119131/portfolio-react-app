'use client';

import React, { useState, useEffect } from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { IoIosGitNetwork } from 'react-icons/io';
import { TbActivityHeartbeat } from 'react-icons/tb';
import { VscComment } from 'react-icons/vsc';
import { RiContactsLine } from 'react-icons/ri';
import LOGO from '@/assets/mu_logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#');

  // Optional: Add scroll spy logic here to update activeNav based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset

      // Check home
      if (window.scrollY < 100) {
        setActiveNav('#');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: '#', icon: <BiHomeAlt />, label: 'Home' },
    { id: 'about', icon: <AiOutlineUser />, label: 'About' },
    { id: 'experience', icon: <IoIosGitNetwork />, label: 'Experience' },
    { id: 'logo', icon: <Image src={LOGO} alt="Logo" className="w-5 h-5 object-contain" />, label: 'Logo' },
    { id: 'portfolio', icon: <TbActivityHeartbeat />, label: 'Portfolio' },
    { id: 'testimonials', icon: <VscComment />, label: 'Testimonials' },
    { id: 'contact', icon: <RiContactsLine />, label: 'Contact' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-900/20">
      {navItems.map((item) => {
        if (item.id === 'logo') {
          return (
            <Link 
              key={item.id} 
              href="#" 
              onClick={() => setActiveNav('#')}
              className="mx-2 hover:scale-110 transition-transform duration-300"
            >
              {item.icon}
            </Link>
          );
        }
        
        const isActive = activeNav === item.id || (item.id === '#' && activeNav === '#');
        const href = item.id === '#' ? '#' : `#${item.id}`;

        return (
          <Link
            key={item.id}
            href={href}
            onClick={() => setActiveNav(item.id)}
            className={`p-3 rounded-full text-lg transition-all duration-300 hover:bg-blue-600 hover:text-white ${
              isActive 
                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-110' 
                : 'text-slate-400 hover:scale-110'
            }`}
            title={item.label}
          >
            {item.icon}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
