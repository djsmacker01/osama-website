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
          <h2>OTID ENTERTAINMENT / OTID.AGENCY</h2>
          <p>The global marketing, events, media and festival company.</p>
          <p>Founded in 2023, OTID Entertainment and OTID.Agency work together to:</p>
          <ul>
            <li>Design and deliver live experiences, festivals and branded events</li>
            <li>Build marketing systems and ticketing funnels that scale</li>
            <li>Produce media and content around launches and campaigns</li>
            <li>Partner with brands, platforms and institutions that want culture-led growth</li>
          </ul>
          <motion.button 
            className="btn-primary"
            {...buttonHover}
          >
            EXPLORE OTID
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
          <img src="/images/otid-image.jpg" alt="OTID Entertainment" />
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
          <h2>AFROWALES</h2>
          <p>
            Amplifying underrepresented voices through inclusive events, festivals and youth 
            engagement. ✨ Be seen, heard and valued.
          </p>
          <p>Founded in 2021, Afrowales focuses on:</p>
          <ul>
            <li>Inclusive events and club nights</li>
            <li>Youth music festivals and showcases</li>
            <li>School, college and university collaborations</li>
            <li>Community projects and charity drives</li>
          </ul>
          <motion.button 
            className="btn-primary"
            {...buttonHover}
          >
            DISCOVER AFROWALES
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
          <img src="/images/afrowales-image.jpg" alt="Afrowales" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default VenturesHighlight;