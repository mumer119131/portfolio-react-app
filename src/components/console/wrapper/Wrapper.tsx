'use client';

import React from 'react';
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
  const [isMaximized, setIsMaximized] = React.useState(false);

  const handleClickAndDrag = () => {
    setAboveWindow(appName);
  };

  const maximizeScreen = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <Draggable bounds="parent" handle=".drag-handle">
      <div
        className={`text-gray-100 rounded-lg shadow-lg w-3/4 max-w-3xl absolute ${className} ${
          isMaximized
            ? 'min-w-full w-full h-full left-0 top-0 !translate-x-0 !translate-y-0 flex flex-col transition-all'
            : ''
        }`}
        onClick={handleClickAndDrag}
        onDrag={handleClickAndDrag}
      >
        {/* Header */}
        <div className="bg-gray-700 p-3 flex items-center rounded-t-lg shadow-lg drag-handle">
          <div className="flex space-x-2">
            <span
              className="w-3 h-3 bg-red-500 rounded-full cursor-pointer flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <div className="invisible wrapper-button text-[8px] w-full h-full hover:visible">
                x
              </div>
            </span>
            <span
              className="w-3 h-3 bg-yellow-500 rounded-full"
              onClick={maximizeScreen}
            ></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex-1 text-center text-sm font-semibold text-gray-400 capitalize">
            {appName}
          </div>
        </div>
        {children}
      </div>
    </Draggable>
  );
};

export default Wrapper;
