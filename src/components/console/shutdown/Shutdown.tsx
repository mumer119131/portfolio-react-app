'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ShuttingDownPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 bg-black flex items-center justify-center z-50"
    >
      <div className="text-center text-white">
        <h1 className="text-4xl mb-4">Shutting Down...</h1>
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto"></div>
      </div>
    </motion.div>
  );
};

export default ShuttingDownPage;
