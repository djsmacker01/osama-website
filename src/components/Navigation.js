import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInDown } from '../utils/animations';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const targetPosition = section.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className={isScrolled ? 'scrolled' : ''}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo" 
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          NURUDEEN
        </motion.div>
        <motion.div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('ventures')}>Ventures</a></li>
          <li><a onClick={() => scrollToSection('volunteering')}>Volunteering</a></li>
          <li><a onClick={() => scrollToSection('speaking')}>Speaking</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;