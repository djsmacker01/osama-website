import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, buttonHover, glowPulse } from '../utils/animations';

const FinalCTA = () => {
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
      {/* Animated background shapes */}
      <div className="cta-bg-shapes">
        <motion.div
          className="cta-shape cta-shape-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="cta-shape cta-shape-2"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="cta-shape cta-shape-3"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

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
        style={{ maxWidth: '800px', margin: '0 auto 1rem', position: 'relative', zIndex: 2 }}
      >
        If you're ready to leverage AI and cutting-edge technology to transform your business, 
        solve complex challenges, or build innovative digital solutions, Nurudeen can help.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ maxWidth: '800px', margin: '0 auto 2rem', color: '#666', fontSize: '1rem', position: 'relative', zIndex: 2 }}
      >
        As a software engineer, AI innovator, and founder of SAAN-HUB Solutions, Nurudeen specializes in 
        building AI-powered platforms that tackle real-world problems. Whether you need custom software 
        development, AI integration, technical consulting, or a speaker for your tech event, he brings 
        expertise from speaking at major conferences like Wales Tech Week and London Tech Week, combined 
        with hands-on experience in creating scalable digital solutions.
      </motion.p>
      <motion.div 
        className="hero-buttons" 
        style={{ justifyContent: 'center', position: 'relative', zIndex: 2 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button 
          className="btn-primary"
          onClick={() => window.location.href = 'mailto:adedeji.adewale2022@gmail.com'}
          {...buttonHover}
          {...glowPulse}
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
