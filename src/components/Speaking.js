import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, imageHover, buttonHover, staggerContainer } from '../utils/animations';

const Speaking = () => {
  const topics = [
    "Culture-led growth and community-driven marketing",
    "Designing live experiences and festivals that convert",
    "Ticketing strategy and audience development",
    "Diversity, equity and representation in creative industries",
    "The immigrant founder journey and leadership"
  ];

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="speaking" 
      id="speaking"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="speaking-container">
        <motion.div 
          className="speaking-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          {...imageHover}
        >
          <img src="/images/speaking-image.jpg" alt="Osama speaking at conference" />
        </motion.div>
        <motion.div 
          className="speaking-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            {...scrollReveal}
          >
            SPEAKING & ADVISORY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Osama speaks to rooms where culture, marketing and growth meet. He has delivered 
            talks and sat on panels for conferences, universities, public bodies and industry events.
          </motion.p>
          <motion.ul 
            className="topics-list"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {topics.map((topic, index) => (
              <motion.li 
                key={index}
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                  }
                }}
              >
                {topic}
              </motion.li>
            ))}
          </motion.ul>
          <motion.button 
            className="btn-primary" 
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            {...buttonHover}
          >
            SPEAKER ENQUIRIES
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Speaking;