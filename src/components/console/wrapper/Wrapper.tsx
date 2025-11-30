'use client';

import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';

interface WrapperProps {
  className?: string;
  setAboveWindow: (appName: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  appName: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({
  className = '',
  setAboveWindow,
  setIsOpen,
  appName,
  children,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const nodeRef = useRef(null);

  const handleClickAndDrag = () => {
    setAboveWindow(appName);
  };

  const maximizeScreen = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <Draggable bounds="parent" handle=".drag-handle" disabled={isMaximized} nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className={`absolute bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden flex flex-col ${className} ${
          isMaximized
            ? '!top-8 !left-0 !w-full !h-[calc(100%-2rem)] !transform-none rounded-none border-none z-50'
            : 'w-3/4 max-w-3xl h-auto top-12 left-12'
        }`}
        onClick={handleClickAndDrag}
        onMouseDown={handleClickAndDrag}
      >
        {/* Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700 drag-handle cursor-move select-none">
          <div className="flex space-x-2">
            <button
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors flex items-center justify-center group"
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            >
                <span className="text-[8px] text-black font-bold opacity-0 group-hover:opacity-100">x</span>
            </button>
            <button
              className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors flex items-center justify-center group"
              onClick={(e) => { e.stopPropagation(); maximizeScreen(); }}
            >
                 <span className="text-[8px] text-black font-bold opacity-0 group-hover:opacity-100">+</span>
            </button>
            <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"></button>
          </div>
          <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            {appName}
          </div>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        
        {/* Content */}
        <div className="flex-grow overflow-hidden relative">
            {children}
        </div>
      </div>
    </Draggable>
  );
};

export default Wrapper;
