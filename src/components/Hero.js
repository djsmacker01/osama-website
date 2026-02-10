import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { buttonHover } from '../utils/animations';
import { useIsMobile } from '../hooks/useIsMobile';

const roles = ['ENTREPRENEUR', 'SPEAKER', 'INNOVATOR', 'DEVELOPER', 'FOUNDER'];

const Hero = () => {
  const heroRef = useRef(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]);
  const [isScrambling, setIsScrambling] = useState(false);
  const { isMobile, isTouch } = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const imageX = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], isMobile ? [1, 1] : [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -50]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*';

  const scrambleTo = useCallback((targetText) => {
    setIsScrambling(true);
    const maxLength = Math.max(displayText.length, targetText.length);
    let iteration = 0;
    const totalIterations = isMobile ? 6 : 12;
    const intervalSpeed = isMobile ? 80 : 50;

    const interval = setInterval(() => {
      setDisplayText(prev => {
        const result = targetText
          .padEnd(maxLength)
          .split('')
          .map((char, idx) => {
            if (idx < iteration) return targetText[idx] || '';
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join('')
          .trim();
        return result;
      });

      iteration += 1;

      if (iteration > totalIterations) {
        clearInterval(interval);
        setDisplayText(targetText);
        setIsScrambling(false);
      }
    }, intervalSpeed);

    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex(prev => {
        const next = (prev + 1) % roles.length;
        scrambleTo(roles[next]);
        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [scrambleTo]);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <motion.div
        className="hero-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div className="hero-content" style={isMobile ? {} : { y: contentY }}>
          <motion.div
            className="hero-main-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="hero-name-line"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Nurudeen; <span className="hero-role-scramble">{displayText}</span> AND AUTHORITY IN AI, SOFTWARE DEVELOPMENT & DIGITAL SOLUTIONS.
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Software engineer, Mechanical engineer, AI innovator, entrepreneur and founder of SAAN-HUB Solutions – building AI-powered platforms and digital solutions that tackle real-world problems and unlock new opportunities in technology.
            </motion.p>
          </motion.div>
          <motion.div
            className="hero-cta-link"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              className="about-link"
              onClick={() => scrollToSection('about')}
              {...buttonHover}
            >
              <span>ABOUT NURUDEEN</span>
              <motion.span
                className="about-link-arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={isMobile ? {} : { x: imageX, scale: imageScale }}
        >
          <img
            src="/images/Headshot_1.png"
            alt="Nurudeen Adedeji"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
