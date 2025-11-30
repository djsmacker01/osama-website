import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';

const ImpactNumbers = () => {
  const stats = [
    { number: "20+", label: "sold-out shows and live experiences delivered" },
    { number: "2,000+", label: "attendees at a single flagship youth music festival" },
    { number: "£120k+", label: "social enterprise and project revenue generated" },
    { number: "£80k+", label: "secured through successful bids and grants" },
    { number: "5+", label: "universities and colleges in an active creative network" }
  ];

  return (
    <motion.section 
      className="impact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="impact-container">
        <motion.h2 
          className="section-title" 
          style={{ color: 'var(--dark-bg)' }}
          {...scrollReveal}
        >
          IMPACT IN NUMBERS
        </motion.h2>
        <motion.div 
          className="impact-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="impact-card"
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
              <div className="impact-number">{stat.number}</div>
              <div className="impact-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p 
          className="impact-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The result of combining marketing strategy, ticketing science, community insight and bold creative direction.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ImpactNumbers;