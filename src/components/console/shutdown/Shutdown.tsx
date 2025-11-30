'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ShuttingDownPage = () => {
  const [isShuttingDown, setIsShuttingDown] = useState(false);

  useEffect(() => {
    // Simulate the shutdown process
    const timer = setTimeout(() => {
      setIsShuttingDown(true);
    }, 1000); // Delay the start of shutting down
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="monitorscreen"
      className="absolute inset-0 z-[100] flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 4 }}
      />

      {/* Main Content */}
      <div className="text-center z-20 relative">
        {/* Ubuntu Logo */}
        <motion.img
          src="https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png"
          alt="Ubuntu Logo"
          className="w-24 h-24 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isShuttingDown ? 0 : 1, scale: isShuttingDown ? 0.8 : 1 }}
          transition={{ duration: 1 }}
        />

        {/* Shutting Down Text */}
        <motion.h1
          className="text-3xl md:text-4xl font-light mb-8 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: isShuttingDown ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          Shutting Down...
        </motion.h1>

        {/* Loading Animation */}
        {!isShuttingDown && (
          <motion.div
            className="w-12 h-12 border-t-2 border-l-2 border-orange-500 border-solid rounded-full mx-auto animate-spin"
            initial={{ opacity: 1 }}
            animate={{ opacity: isShuttingDown ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 mx-auto mt-8 rounded-full overflow-hidden">
            <motion.div
            className="h-full bg-orange-500"
            initial={{ width: '0%' }}
            animate={{ width: isShuttingDown ? '100%' : '0%' }}
            transition={{ duration: 3, ease: "easeInOut" }}
            />
        </div>
      </div>
    </div>
  );
};

export default ShuttingDownPage;
