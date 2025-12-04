import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, buttonHover } from '../utils/animations';

const FinalCTA = () => {
  const scrollToAbout = () => {
    const section = document.getElementById('about');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSpeaking = () => {
    const section = document.getElementById('speaking');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="final-cta" 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        {...scrollReveal}
      >
        BUILD SOMETHING BOLD WITH NURUDEEN
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ maxWidth: '800px', margin: '0 auto 1rem' }}
      >
        If you're ready to leverage AI and cutting-edge technology to transform your business, 
        solve complex challenges, or build innovative digital solutions, Nurudeen can help.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ maxWidth: '800px', margin: '0 auto 2rem', color: '#666', fontSize: '1rem' }}
      >
        As a software engineer, AI innovator, and founder of SAAN-HUB Solutions, Nurudeen specializes in 
        building AI-powered platforms that tackle real-world problems. Whether you need custom software 
        development, AI integration, technical consulting, or a speaker for your tech event, he brings 
        expertise from speaking at major conferences like Wales Tech Week and London Tech Week, combined 
        with hands-on experience in creating scalable digital solutions.
      </motion.p>
      <motion.div 
        className="hero-buttons" 
        style={{ justifyContent: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button 
          className="btn-primary" 
          onClick={() => window.location.href = 'mailto:djsmacker01@gmail.com'}
          {...buttonHover}
        >
          WORK WITH NURUDEEN
        </motion.button>
        <motion.button 
          className="btn-secondary" 
          onClick={scrollToSpeaking}
          {...buttonHover}
        >
          SPEAKING ENQUIRIES
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default FinalCTA;