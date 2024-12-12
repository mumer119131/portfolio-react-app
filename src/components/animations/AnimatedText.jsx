import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const AnimatedText = ({children, className}) => {
  return (
    <AnimatePresence>
        <motion.div className={` ${className}`}>    
            {children}
        </motion.div>
    </AnimatePresence>
  )
}

export default AnimatedText