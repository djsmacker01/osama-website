import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer, buttonHover } from '../utils/animations';

const Timeline = () => {
  const milestones = [
    {
      year: "2019",
      location: "ARRIVES IN CARDIFF",
      description: "Moves from Abuja Nigeria to Cardiff after finishing school, eager to explore new opportunities."
    },
    {
      year: "2021",
      location: "FOUNDS AFROWALES",
      description: "A collective amplifying underrepresented voices through inclusive events and festivals."
    },
    {
      year: "2023",
      location: "OTID ENTERTAINMENT",
      description: "Launches OTID Entertainment / OTID.Agency, a global marketing, events, media and festival company."
    }
  ];

  return (
    <motion.section 
      className="timeline"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="timeline-container">
        <motion.h2 
          className="section-title" 
          style={{ color: 'var(--dark-bg)' }}
          {...scrollReveal}
        >
          JOURNEY
        </motion.h2>
        <motion.div 
          className="timeline-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index} 
              className="timeline-card"
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                }
              }}
              {...cardHover}
            >
              <div className="timeline-year">{milestone.year}</div>
              <div className="timeline-location">{milestone.location}</div>
              <p className="timeline-description">{milestone.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="timeline-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button 
            className="btn-primary"
            {...buttonHover}
          >
            VIEW FULL TIMELINE
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Timeline;