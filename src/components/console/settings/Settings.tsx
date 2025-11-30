'use client';

import React from 'react';
import Wrapper from '../wrapper/Wrapper';
import { HexColorPicker } from 'react-colorful';

interface SettingsProps {
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
  setAboveWindow: (appName: string) => void;
  setBackgroundColor: (color: string) => void;
}

const Settings: React.FC<SettingsProps> = ({
  setIsOpen,
  className,
  setAboveWindow,
  setBackgroundColor,
}) => {
  const [color, setColor] = React.useState('#aabbcc');

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    setBackgroundColor(newColor);
  };

  return (
    <Wrapper
      setAboveWindow={setAboveWindow}
      setIsOpen={setIsOpen}
      appName="settings"
      className={className}
    >
      {/* Settings Screen */}
      <div
        id="monitorscreen"
        className="scrollbar p-4 h-96 overflow-y-auto font-mono font-mono-imp text-sm bg-gray-900 !overflow-auto"
      >
        <div className="text-center text-gray-300 flex flex-col gap-4 items-center">
          <h3 className="text-lg">Background Settings</h3>
          <HexColorPicker color={color} onChange={handleColorChange} />
          <div className="text-sm">Selected Color: {color}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Settings;
