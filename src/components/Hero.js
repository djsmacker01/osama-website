import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, hoverImage, buttonHover } from '../utils/animations';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        let progress = 0;
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
        }
        
        const translateX = -100 + (progress * 200);
        setScrollY(translateX);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <motion.div 
        className="hero-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="hero-content">
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
              Nurudeen; <span>ENTREPRENEUR, SPEAKER, INNOVATOR, ORGANIZER</span> AND AUTHORITY IN AI, SOFTWARE DEVELOPMENT & DIGITAL SOLUTIONS.
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
              ABOUT NURUDEEN →
            </motion.a>
          </motion.div>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          whileHover={{ 
            scale: 1.03,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          <img 
            src="/images/Headshot_1.png" 
            alt="Nurudeen Adedeji"
            style={{ 
              transform: `translateX(${scrollY}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;