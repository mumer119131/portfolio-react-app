'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Assets
import terminal_img from '@/assets/terminal.png';
import folder_img from '@/assets/folder.png';
import shutdown_img from '@/assets/shutdown.png';
import setting_img from '@/assets/setting.png';
import wallpaperConsole from '@/assets/wallpaper-console.jpg';

// Components
import Terminal from '../console/terminal/Terminal';
import Taskbar from '../console/taskbar/Taskbar';
import ShuttingDownPage from '../console/shutdown/Shutdown';
import Files from '../console/files/Files';
import Settings from '../console/settings/Settings';
import Notepad from '../console/notepad/Notepad';

const TV = () => {
  const [isOn, setIsOn] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [isShuttingDown, setIsShuttingDown] = useState(false);
  const [isFilesOpen, setIsFilesOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotepadOpen, setIsNotepadOpen] = useState(false);
  const [notepadContent, setNotepadContent] = useState('');
  const [notepadFileName, setNotepadFileName] = useState('Untitled.txt');
  
  const [aboveWindow, setAboveWindow] = useState<string | null>(null);
  const [monitorHeight, setMonitorHeight] = useState<number | null>(null);
  const [background, setBackground] = useState<string | null>(null);
  
  const monitorRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handlePowerOff = () => {
    setIsOn(!isOn);
  };

  const shutDown = () => {
    setIsTerminalOpen(false);
    setIsOn(false);
    setIsShuttingDown(true);
    setTimeout(() => {
      router.push('/');
    }, 4000);
  };

  const handleAppOpen = (app: string) => {
    if (app === 'terminal') {
      setIsTerminalOpen(true);
    } else if (app === 'files') {
      setIsFilesOpen(true);
    } else if (app === 'settings') {
      setIsSettingsOpen(true);
    } else if (app === 'notepad') {
      setIsNotepadOpen(true);
    }
    setAboveWindow(app);
  };

  const openFile = (fileName: string, content: string) => {
    setNotepadFileName(fileName);
    setNotepadContent(content);
    setIsNotepadOpen(true);
    setAboveWindow('notepad');
  };

  useEffect(() => {
    const handleResize = () => {
      if (monitorRef.current) {
        setMonitorHeight(monitorRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    if (monitorRef.current) {
      setMonitorHeight(monitorRef.current.offsetHeight);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set default background
  useEffect(() => {
    setBackground(wallpaperConsole.src);
  }, []);

  return (
    <div id="container" className="w-full min-h-screen flex items-center justify-center bg-neutral-900 p-4">
      <div id="monitor" className="relative w-full max-w-[1600px] aspect-video bg-black rounded-xl border-[20px] border-gray-800 shadow-2xl overflow-hidden">
        
        {/* Power Button */}
        <div 
          onClick={handlePowerOff} 
          className="absolute z-50 right-8 bottom-4 cursor-pointer flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-xs"
        >
          POWER
          <div className={`w-3 h-3 rounded-full ${isOn ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-red-500'}`}></div>
        </div>

        {isShuttingDown && <ShuttingDownPage />}

        <AnimatePresence>
          {(isOn && !isShuttingDown) && (
            <motion.div
              id="monitorscreen"
              ref={monitorRef}
              className="relative w-full h-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.4 },
              }}
              exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.4 } }}
            >
              <div
                className="w-full h-full flex flex-col relative bg-no-repeat bg-center bg-cover transition-all duration-500"
                style={{
                  backgroundImage: background && !background.startsWith('#') ? `url(${background})` : 'none',
                  backgroundColor: background && background.startsWith('#') ? background : 'transparent',
                }}
              >
                <Taskbar />
                
                {/* Desktop Icons */}
                <div className="flex flex-col gap-8 absolute left-6 top-20 z-10">
                  <div className="flex flex-col items-center justify-center cursor-pointer group" onClick={() => handleAppOpen('terminal')}>
                    <Image src={terminal_img} alt="terminal" width={64} height={64} className="w-16 h-16 drop-shadow-lg group-hover:scale-110 transition-transform" />
                    <span className="text-gray-200 text-sm font-medium mt-1 drop-shadow-md bg-black/20 px-2 rounded">Terminal</span>
                  </div>
                  <div className="flex flex-col items-center justify-center cursor-pointer group" onClick={() => handleAppOpen('files')}>
                    <Image src={folder_img} alt="files" width={64} height={64} className="w-16 h-16 drop-shadow-lg group-hover:scale-110 transition-transform" />
                    <span className="text-gray-200 text-sm font-medium mt-1 drop-shadow-md bg-black/20 px-2 rounded">Files</span>
                  </div>
                  <div className="flex flex-col items-center justify-center cursor-pointer group" onClick={() => handleAppOpen('settings')}>
                    <Image src={setting_img} alt="settings" width={64} height={64} className="w-16 h-16 drop-shadow-lg group-hover:scale-110 transition-transform" />
                    <span className="text-gray-200 text-sm font-medium mt-1 drop-shadow-md bg-black/20 px-2 rounded">Settings</span>
                  </div>
                  <div className="flex flex-col items-center justify-center cursor-pointer group" onClick={shutDown}>
                    <Image src={shutdown_img} alt="shutdown" width={64} height={64} className="w-16 h-16 drop-shadow-lg group-hover:scale-110 transition-transform" />
                    <span className="text-gray-200 text-sm font-medium mt-1 drop-shadow-md bg-black/20 px-2 rounded">Shutdown</span>
                  </div>
                </div>

                {/* Windows Area */}
                <div className="flex-grow w-full relative">
                  {isTerminalOpen && (
                    <Terminal
                      setIsTerminalOpen={setIsTerminalOpen}
                      className={aboveWindow === 'terminal' ? 'z-30' : 'z-10'}
                      setAboveWindow={setAboveWindow}
                      openFile={openFile}
                    />
                  )}
                  {isFilesOpen && (
                    <Files
                      setIsFilesOpen={setIsFilesOpen}
                      className={aboveWindow === 'files' ? 'z-30' : 'z-10'}
                      setAboveWindow={setAboveWindow}
                      openFile={openFile}
                    />
                  )}
                  {isSettingsOpen && (
                    <Settings
                      setIsOpen={setIsSettingsOpen}
                      className={aboveWindow === 'settings' ? 'z-30' : 'z-10'}
                      setAboveWindow={setAboveWindow}
                      setBackgroundColor={setBackground}
                    />
                  )}
                  {isNotepadOpen && (
                    <Notepad
                      setIsOpen={setIsNotepadOpen}
                      className={aboveWindow === 'notepad' ? 'z-30' : 'z-10'}
                      setAboveWindow={setAboveWindow}
                      initialContent={notepadContent}
                      fileName={notepadFileName}
                    />
                  )}
                </div>
              </div>
              
              {/* CRT Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TV;
