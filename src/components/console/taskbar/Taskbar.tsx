'use client';

import React, { useState, useEffect } from 'react';
import { FaSearch, FaBatteryFull, FaWifi, FaVolumeUp, FaCog, FaUbuntu, FaBars } from 'react-icons/fa';

const Taskbar = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-8 bg-black/80 backdrop-blur-md text-gray-200 shadow-md z-40 flex items-center justify-between px-4 text-xs font-medium border-b border-white/10">
      {/* Left side: Application icons */}
      <div className="flex items-center space-x-4">
        <button className="hover:text-white hover:bg-white/10 p-1.5 rounded transition-colors">
          <FaBars />
        </button>
        <button className="hover:text-white hover:bg-white/10 p-1.5 rounded transition-colors">
          <FaUbuntu className="text-orange-500 text-sm" />
        </button>
        <span className="font-bold hidden sm:block">Activities</span>
      </div>

      {/* Center: Date/Time */}
      <div className="absolute left-1/2 -translate-x-1/2 text-center cursor-default hover:text-white transition-colors">
        <span>{new Date().toDateString()} &nbsp; {time}</span>
      </div>

      {/* Right side: System tray icons */}
      <div className="flex items-center space-x-3">
        <button className="hover:text-white hover:bg-white/10 p-1.5 rounded transition-colors">
          <FaSearch />
        </button>
        <div className="flex items-center space-x-3 hover:bg-white/10 px-2 py-1 rounded transition-colors cursor-pointer">
            <FaWifi />
            <FaVolumeUp />
            <FaBatteryFull />
            <FaCog />
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
