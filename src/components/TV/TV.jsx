import React, { useState } from 'react'

import { motion } from "motion/react"
import terminal_img from "../../assets/terminal.png"
import folder_img from "../../assets/folder.png"
import shutdown_img from "../../assets/shutdown.png"
import Terminal from '../console/terminal/Terminal';
import Taskbar from '../console/taskbar/Taskbar';
import ShuttingDownPage from '../console/shutdown/Shutdown'
import { useNavigate } from 'react-router'
import Files from '../console/files/Files'

const TV = () => {
    
      const [isOn, setIsOn] = useState(true);
      const [isTerminalOpen, setIsTerminalOpen] = useState(false);
      const [isShuttingDown, setIsShuttingDown] = useState(false);
      const [isFilesOpen, setIsFilesOpen] = useState(false);
      const [aboveWindow, setAboveWindow] = useState(null);
      let navigate = useNavigate();
      const handlePowerOff = () => {
        setIsOn(!isOn);
    }
    const shutDown = () => {
        setIsTerminalOpen(false);
        setIsOn(false);
        setIsShuttingDown(true);
        setTimeout(() => {
            navigate('/');
        }, 4000);
    }
    const handleAppOpen = (app) => {
        if(app === 'terminal'){
            setIsTerminalOpen(true);
        }else if(app === 'files'){
            setIsFilesOpen(true);
        }
        setAboveWindow(app);
    }
return (
    <>
       <div id="container">
            <div id="monitor" className='my-[1rem] mx-[2rem] lg:my-[2rem] lg:mx-[10rem]'>
                <div onClick={handlePowerOff} className={`absolute z-10 right-[4rem] bottom-[1.5vw] cursor-pointer`}>Power&nbsp;&nbsp;<i class={`fa-solid fa-power-off w-4 text-${isOn ? "green-800": "red-800"}`}></i></div>
                {
                    isShuttingDown && (
                        <ShuttingDownPage />
                    )
                }
                {
                    isOn | !isShuttingDown && (
                        <motion.div id="monitorscreen" className='relative' initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                            opacity: isOn ? 1 : 0,
                            scale: isOn ? 1 : 0.8,
                            transition: { duration: 0.8 },
                            }}>
                
                        <div className="flex justify-center min-h-screen bg-gray-900 pt-[2rem] md:pt-[4rem] lg:pt-[8rem] relative">
                        <Taskbar />
                        <div className='flex flex-col gap-4 absolute left-4 top-16'>
                            <div className='flex flex-col items-center justify-center cursor-pointer' onClick={()=>handleAppOpen('terminal')}>
                                <img src={terminal_img} alt="terminal" className='w-[4rem]'/>
                                <span className='text-gray-300'>Terminal</span>
                            </div>
                            <div className='flex flex-col items-center justify-center cursor-pointer' onClick={()=>handleAppOpen('files')}>
                                <img src={folder_img} alt="terminal" className='w-[4rem]'/>
                                <span className='text-gray-300'>Files</span>
                            </div>
                            <div className='flex flex-col items-center justify-center cursor-pointer' onClick={shutDown}>
                                <img src={shutdown_img} alt="terminal" className='w-[4rem]'/>
                                <span className='text-gray-300'>ShutDown</span>
                            </div>
                        </div>
                        {isTerminalOpen && (
                           <Terminal setIsTerminalOpen={setIsTerminalOpen} className={`${aboveWindow === 'terminal' ? 'z-index-10' : 'z-index-1'}`} setAboveWindow={setAboveWindow}/>
                        )}
                        {
                            isFilesOpen && (
                                <Files setIsFilesOpen={setIsFilesOpen} className={`${aboveWindow === 'files' ? 'z-index-10' : 'z-index-1'}`} setAboveWindow={setAboveWindow}/>
                            )
                        }
                    </div>
                 

                </motion.div>
                    )
                }
            </div>
        </div>
    </>
)
}

export default TV