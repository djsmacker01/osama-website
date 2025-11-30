import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';

const Awards = () => {
  const awards = [
    { 
      icon: "🏆", 
      title: "Entrepreneur of the Year", 
      description: "Black History Wales Youth Awards" 
    },
    { 
      icon: "⚡", 
      title: "Power Up Industry Professional", 
      description: "PRS Foundation" 
    },
    { 
      icon: "🎵", 
      title: "PPL Momentum Accelerator", 
      description: "PRS Foundation Industry Professional" 
    },
    { 
      icon: "🏛️", 
      title: "Honoured in Welsh Senedd", 
      description: "For cultural leadership and Black History Wales programmes" 
    },
    { 
      icon: "🎉", 
      title: "Cardiff Life Awards Finalist", 
      description: "Best Event Company" 
    },
    { 
      icon: "🌟", 
      title: "Mastering Diversity Awards", 
      description: "Multiple wins for inclusion and impact" 
    }
  ];

  return (
    <motion.section 
      className="awards"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="awards-container">
        <motion.h2 
          className="section-title" 
          style={{ color: 'var(--dark-bg)' }}
          {...scrollReveal}
        >
          AWARDS & RECOGNITION
        </motion.h2>
        <motion.div 
          className="awards-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {awards.map((award, index) => (
            <motion.div 
              key={index} 
              className="award-card"
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
              <motion.div 
                className="award-icon"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
              >
                {award.icon}
              </motion.div>
              <div className="award-title">{award.title}</div>
              <p className="award-description">{award.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Awards;