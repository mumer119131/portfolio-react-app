import React from 'react'
import { FaSearch, FaBatteryFull, FaWifi, FaVolumeUp, FaCog } from 'react-icons/fa'; // Example icons
const Taskbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
    <div className="flex items-center justify-between p-2 max-w-screen-xl mx-auto">
      {/* Left side: Application icons (like Ubuntu dock) */}
      <div className="flex items-center space-x-4">
        {/* Start button (Ubuntu-like) */}
        <button className="text-white hover:bg-gray-700 p-2 rounded-full">
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Apps or Launcher Icons */}
        <button className="text-white hover:bg-gray-700 p-2 rounded-full">
          <i className="fa-brands fa-ubuntu"></i>
        </button>

        {/* More app icons can be added here */}
      </div>

      {/* Center: Application Title or Workspace switcher */}
      <div className="flex-1 text-center">
        <span className="text-sm font-semibold">Umer's Ubuntu</span>
      </div>

      {/* Right side: System tray icons */}
      <div className="flex items-center space-x-4">
        <button className="text-white hover:bg-gray-700 p-2 rounded-full">
          <FaSearch />
        </button>
        <button className="text-white hover:bg-gray-700 p-2 rounded-full">
          <FaBatteryFull />
        </button>
        <button className="text-white hover:bg-gray-700 p-2 rounded-full">
          <FaWifi />
        </button>
        <button className="text-white hover:bg-gray-700 p-2 rounded-full">
          <FaVolumeUp />
        </button>
        <button className="text-white hover:bg-gray-700 p-2 rounded-full">
          <FaCog />
        </button>

        {/* Clock */}
        <div className="text-sm font-semibold">
          {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Taskbar