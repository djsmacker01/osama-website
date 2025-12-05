import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, imageHover, buttonHover } from '../utils/animations';

const VenturesHighlight = () => {
  return (
    <motion.section 
      className="ventures-highlight" 
      id="ventures"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="venture-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="venture-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>SAAN-HUB SOLUTIONS</h2>
          <p>The AI-powered digital solutions company building platforms that tackle real-world problems.</p>
          <p>Founded by Nurudeen Adedeji, SAAN-HUB Solutions specializes in:</p>
          <ul>
            <li>Building AI-powered platforms and intelligent digital solutions</li>
            <li>Developing custom software applications that scale with your business</li>
            <li>Creating innovative technology solutions that unlock new opportunities</li>
            <li>Partnering with businesses and institutions to transform their digital capabilities</li>
          </ul>
          <motion.button 
            className="btn-primary"
            onClick={() => window.location.href = 'mailto:djsmacker01@gmail.com'}
            {...buttonHover}
          >
            EXPLORE SAAN-HUB
          </motion.button>
        </motion.div>
        <motion.div 
          className="venture-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          {...imageHover}
        >
          <img src="/images/SAAN-HUB Solutions.jpeg" alt="SAAN-HUB Solutions" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="venture-row reverse"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="venture-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>AI & SOFTWARE DEVELOPMENT</h2>
          <p>
            Transforming businesses through cutting-edge AI integration and custom software 
            development. Building solutions that drive innovation and growth.
          </p>
          <p>Our expertise includes:</p>
          <ul>
            <li>AI-powered platform development and machine learning integration</li>
            <li>Full-stack software engineering and web application development</li>
            <li>Digital transformation consulting and technical strategy</li>
            <li>Scalable system architecture and cloud-based solutions</li>
          </ul>
          <motion.button 
            className="btn-primary"
            onClick={() => window.location.href = 'mailto:djsmacker01@gmail.com'}
            {...buttonHover}
          >
            GET IN TOUCH
          </motion.button>
        </motion.div>
        <motion.div 
          className="venture-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          {...imageHover}
        >
          <img src="/images/ai.png" alt="AI & Software Development" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default VenturesHighlight;