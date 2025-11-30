import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Portfolio V2. All rights reserved.
        </p>
        <p className="text-slate-600 text-sm flex items-center gap-2">
          Designed & Built with <span className="text-red-500">♥</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
