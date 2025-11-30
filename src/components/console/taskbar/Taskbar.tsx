'use client';

import React from 'react';

const Taskbar: React.FC = () => {
  return (
    <div className="w-full bg-gray-800 px-4 py-2 flex items-center justify-between text-gray-300 text-sm">
      <div>Portfolio Console v1.0</div>
      <div>{new Date().toLocaleTimeString()}</div>
    </div>
  );
};

export default Taskbar;
