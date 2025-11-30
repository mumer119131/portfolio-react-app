'use client';

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';

gsap.registerPlugin(ScrollToPlugin);

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: <FaHome />, label: 'Home' },
    { id: 'portfolio', icon: <FaBriefcase />, label: 'Work' },
    { id: 'experience', icon: <FaCode />, label: 'Skills' },
    { id: 'about', icon: <FaUser />, label: 'About' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  const handleScroll = (id: string) => {
    gsap.to(window, { duration: 1, scrollTo: { y: `#${id}`, offsetY: 50 }, ease: 'power3.inOut' });
    setActiveSection(id);
  };

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-900/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-2xl shadow-black/50">
      <ul className="flex items-center gap-2">
        {navItems.map((item) => (
          <li key={item.id} className="relative group">
            <button
              onClick={() => handleScroll(item.id)}
              className={`p-3 rounded-full transition-all duration-300 relative z-10 ${
                activeSection === item.id 
                  ? 'bg-blue-500 text-white scale-110' 
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.icon}
            </button>
            
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
