import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedName = () => {
  const [currentName, setCurrentName] = useState('NURUDEEN');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentName(prev => prev === 'NURUDEEN' ? 'ADEDEJI' : 'NURUDEEN');
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      className="animated-name"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentName}
          initial={{ 
            opacity: 0, 
            y: 30,
            scale: 0.95
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: 1
          }}
          exit={{ 
            opacity: 0, 
            y: -30,
            scale: 0.95
          }}
          transition={{ 
            duration: 1.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: 0
          }}
        >
          {/* First letter - rolls like a wheel */}
          <motion.span
            initial={{ 
              opacity: 0, 
              y: 30,
              scale: 0.95,
              rotate: -360
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1,
              rotate: 0
            }}
            transition={{ 
              duration: 1.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              rotate: {
                duration: 1.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
            style={{
              display: 'inline-block',
              transformOrigin: 'center center'
            }}
          >
            {currentName[0]}
          </motion.span>
          
          {/* Letters 2-4 - normal animation */}
          <motion.span
            initial={{ 
              opacity: 0, 
              y: 30,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            transition={{ 
              duration: 1.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{
              display: 'inline-block'
            }}
          >
            {currentName.slice(1, 4)}
          </motion.span>
          
          {/* 5th letter - jogging/bouncing */}
          <motion.span
            initial={{ 
              opacity: 0, 
              y: 30,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1, 
              y: [0, -15, 0, -10, 0, -5, 0],
              scale: 1
            }}
            transition={{ 
              duration: 1.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
                delay: 1.8
              }
            }}
            style={{
              display: 'inline-block'
            }}
          >
            {currentName[4]}
          </motion.span>
          
          {/* Letters 6+ - normal animation */}
          <motion.span
            initial={{ 
              opacity: 0, 
              y: 30,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            transition={{ 
              duration: 1.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{
              display: 'inline-block'
            }}
          >
            {currentName.slice(5)}
          </motion.span>
        </motion.h1>
      </AnimatePresence>
    </motion.section>
  );
};

export default AnimatedName;

