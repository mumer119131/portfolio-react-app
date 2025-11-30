'use client';

import React from 'react';
import Wrapper from '../wrapper/Wrapper';
import { console_files } from '@/data/console';
import { FaFileAlt } from 'react-icons/fa';

interface FilesProps {
  setIsFilesOpen: (isOpen: boolean) => void;
  className?: string;
  setAboveWindow: (appName: string) => void;
  openFile: (fileName: string, content: string) => void;
}

const Files: React.FC<FilesProps> = ({ setIsFilesOpen, className, setAboveWindow, openFile }) => {
  const files = Object.keys(console_files);

  return (
    <Wrapper
      setAboveWindow={setAboveWindow}
      setIsOpen={setIsFilesOpen}
      appName="files"
      className={className}
    >
      {/* Files Screen */}
      <div
        id="monitorscreen"
        className="scrollbar p-4 h-96 overflow-y-auto font-mono text-sm bg-gray-900 text-gray-300"
      >
        <div className="grid grid-cols-4 gap-4">
          {files.map((file) => (
            <div
              key={file}
              className="flex flex-col items-center justify-center p-4 hover:bg-gray-800 rounded cursor-pointer transition-colors group"
              onClick={() => openFile(file, console_files[file].join('\n'))}
            >
              <FaFileAlt className="text-4xl text-gray-500 group-hover:text-blue-400 mb-2" />
              <span className="text-xs text-center break-all">{file}</span>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Files;
