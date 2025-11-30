'use client';

import React, { useState, useEffect } from 'react';
import Wrapper from '../wrapper/Wrapper';

interface NotepadProps {
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
  setAboveWindow: (appName: string) => void;
  initialContent?: string;
  fileName?: string;
}

const Notepad: React.FC<NotepadProps> = ({
  setIsOpen,
  className,
  setAboveWindow,
  initialContent = '',
  fileName = 'Untitled.txt',
}) => {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  return (
    <Wrapper
      setAboveWindow={setAboveWindow}
      setIsOpen={setIsOpen}
      appName={`Notepad - ${fileName}`}
      className={className}
    >
      <div className="h-96 bg-white text-black flex flex-col">
        {/* Menu Bar */}
        <div className="flex gap-4 px-2 py-1 text-xs border-b border-gray-300 bg-gray-100">
          <span className="cursor-pointer hover:bg-gray-200 px-1">File</span>
          <span className="cursor-pointer hover:bg-gray-200 px-1">Edit</span>
          <span className="cursor-pointer hover:bg-gray-200 px-1">Format</span>
          <span className="cursor-pointer hover:bg-gray-200 px-1">View</span>
          <span className="cursor-pointer hover:bg-gray-200 px-1">Help</span>
        </div>
        
        {/* Text Area */}
        <textarea
          className="flex-grow w-full h-full p-2 outline-none resize-none font-mono text-sm"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          spellCheck={false}
        />
        
        {/* Status Bar */}
        <div className="px-2 py-1 text-xs border-t border-gray-300 bg-gray-100 flex justify-between">
            <span>Ln {content.split('\n').length}, Col {content.length}</span>
            <span>UTF-8</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Notepad;
