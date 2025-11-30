'use client';

import React from 'react';
import { FaGithub, FaDev } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { AiFillLinkedin, AiFillBehanceCircle } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 relative overflow-hidden z-50">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-slate-100 mb-8 tracking-wider">
          | <span className="text-blue-400">Socials</span> |
        </h2>
        
        <div className="flex gap-8 items-center justify-center">
          <SocialLink href="https://github.com/mumer119131" icon={<FaGithub />} />
          <SocialLink href="https://dev.to/mumer119131" icon={<FaDev />} />
          <SocialLink href="mailto:mumer119131@gmail.com" icon={<SiGmail />} />
          <SocialLink href="https://www.linkedin.com/in/dev-umer/" icon={<AiFillLinkedin />} />
          <SocialLink href="https://www.behance.net/mumer4" icon={<AiFillBehanceCircle />} />
        </div>

        <p className="mt-12 text-slate-500 text-sm">
          © {new Date().getFullYear()} Muhammad Umer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="text-3xl text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;

