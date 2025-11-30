'use client';

import React, { useRef, useState } from 'react';
import Wrapper from '../wrapper/Wrapper';
import { HexColorPicker } from 'react-colorful';

interface SettingsProps {
  setAboveWindow: (appName: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
  setBackgroundColor: (color: string | null) => void;
}

const Settings: React.FC<SettingsProps> = ({
  setAboveWindow,
  setIsOpen,
  className,
  setBackgroundColor,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [bgColor, setBgColor] = useState("#000000");
  const [light1, setLight1] = useState("#ffffff");
  const [light2, setLight2] = useState("#ffffff");

  const handleImageClick = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBackgroundColor(url);
    }
  };

  const handleBgColorChange = (color: string) => {
    setBgColor(color);
    setBackgroundColor(color);
  };

  const handleBackgroundLight = (color: string) => {
    setLight1(color);
    document.documentElement.style.setProperty('--tv-flicker-color', color);
  };

  const handleBackgroundLight2 = (color: string) => {
    setLight2(color);
    document.documentElement.style.setProperty('--tv-flicker-color-2', color);
  };

  return (
    <Wrapper
      setAboveWindow={setAboveWindow}
      setIsOpen={setIsOpen}
      appName="settings"
      className={className}
    >
      <div
        id="monitorscreen"
        className="scrollbar p-6 h-96 overflow-y-auto font-mono text-sm bg-gray-900 text-gray-200"
      >
        <h2 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">System Settings</h2>
        
        <div className="flex gap-8 flex-wrap">
          {/* Background Color Setting */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-md font-semibold mb-3 text-gray-300">Desktop Background</h3>
            <div className="!w-full !h-32 mb-4 [&_.react-colorful]:w-full [&_.react-colorful]:h-full">
              <HexColorPicker color={bgColor} onChange={handleBgColorChange} />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setBackgroundColor(null)}
                className="bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded text-xs transition-colors"
              >
                Default Wallpaper
              </button>
              <button
                onClick={handleImageClick}
                className="bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded text-xs transition-colors"
              >
                Upload Image
              </button>
            </div>
            <input
              type="file"
              accept="image/*"
              hidden
              ref={inputRef}
              onChange={handleImageChange}
            />
          </div>

          {/* Background Light 1 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-md font-semibold mb-3 text-gray-300">Ambient Light 1</h3>
            <div className="!w-full !h-32 mb-4 [&_.react-colorful]:w-full [&_.react-colorful]:h-full">
              <HexColorPicker color={light1} onChange={handleBackgroundLight} />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleBackgroundLight('#fff')}
                className="bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded text-xs transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => handleBackgroundLight('')}
                className="bg-red-900/50 hover:bg-red-900 px-3 py-1.5 rounded text-xs transition-colors"
              >
                Disable
              </button>
            </div>
          </div>

          {/* Background Light 2 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-md font-semibold mb-3 text-gray-300">Ambient Light 2</h3>
            <div className="!w-full !h-32 mb-4 [&_.react-colorful]:w-full [&_.react-colorful]:h-full">
              <HexColorPicker color={light2} onChange={handleBackgroundLight2} />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleBackgroundLight2('#fff')}
                className="bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded text-xs transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => handleBackgroundLight2('')}
                className="bg-red-900/50 hover:bg-red-900 px-3 py-1.5 rounded text-xs transition-colors"
              >
                Disable
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Settings;
