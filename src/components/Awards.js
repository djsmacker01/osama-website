import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';

const Awards = () => {
  const awards = [
    { 
      icon: "🏆", 
      title: "Finalist Award", 
      description: "National coding challenge by TargetJobs and Rolls-Royce, recognizing exceptional technical skills and innovative problem-solving in competitive programming." 
    },
    { 
      icon: "🔬", 
      title: "STEM Ambassador", 
      description: "Recognized for outstanding contributions to STEM outreach and mentoring, inspiring the next generation of engineers, scientists, and technologists through educational initiatives and community engagement." 
    },
    { 
      icon: "🎤", 
      title: "Speaking Engagements", 
      description: "Featured speaker at Wales Tech Week, sharing expertise in tech and innovation, and contributing to thought leadership discussions on the future of technology, AI, and digital transformation." 
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