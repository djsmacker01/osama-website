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
        BUILD SOMETHING BOLD WITH OSAMA
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        If you are ready to treat culture as a serious part of your growth strategy, 
        Osama can help.
      </motion.p>
      <motion.div 
        className="hero-buttons" 
        style={{ justifyContent: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.button 
          className="btn-primary" 
          onClick={() => window.location.href = 'mailto:osama@example.com'}
          {...buttonHover}
        >
          WORK WITH OSAMA
        </motion.button>
        <motion.button 
          className="btn-secondary" 
          onClick={scrollToAbout}
          {...buttonHover}
        >
          LEARN MORE
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default FinalCTA;