import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ShuttingDownPage = () => {
    const [isShuttingDown, setIsShuttingDown] = useState(false);

    useEffect(() => {
        // Simulate the shutdown process
        setTimeout(() => {
            setIsShuttingDown(true);
        }, 1000); // Delay the start of shutting down
    }, []);

    return (
        <div id='monitorscreen' className="flex items-center justify-center !bg-gray-900 text-white">
            {/* Background Animation */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-black z-10"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 4 }}
            />
            
            {/* Main Content */}
            <div className="text-center z-10 absolute top-[50%] translate-y-[-50%]">
                {/* Ubuntu Logo */}
                <motion.img
                    src="https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png"
                    alt="Ubuntu Logo"
                    className="w-24 h-24 mx-auto mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isShuttingDown ? 0 : 1 }}
                    transition={{ duration: 2 }}
                />
                
                {/* Shutting Down Text */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isShuttingDown ? 0 : 1 }}
                    transition={{ duration: 2 }}
                >
                    Shutting Down...
                </motion.h1>
                
                {/* Loading Animation */}
                {!isShuttingDown && (
                    <motion.div
                        className="w-16 h-16 border-t-4 border-white border-solid rounded-full mx-auto animate-spin"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isShuttingDown ? 0 : 1 }}
                        transition={{ duration: 1 }}
                    />
                )}

                {/* Progress Bar */}
                <motion.div
                    className="w-64 h-2 bg-orange-600 mx-auto mt-4"
                    initial={{ width: '0%' }}
                    animate={{ width: isShuttingDown ? '100%' : '0%' }}
                    transition={{ duration: 4 }}
                />
            </div>
        </div>
    );
};

export default ShuttingDownPage;
