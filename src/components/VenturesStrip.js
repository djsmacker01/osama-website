import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';

const VenturesStrip = () => {
  const ventures = [
    {
      title: "OTID Entertainment / OTID.Agency",
      description: "Global marketing, events, media and festival company working with brands, platforms and institutions."
    },
    {
      title: "Afrowales",
      description: "Social impact platform amplifying underrepresented voices through inclusive events, festivals and youth engagement."
    },
    {
      title: "Black Welsh Music Awards",
      description: "Head of Marketing and PR for a new national platform championing Black Welsh talent."
    },
    {
      title: "MyPhlexIT",
      description: "Regional Director of Sales and Marketing for a next-generation ticketing and event discovery platform."
    },
    {
      title: "Cymru Unleashed",
      description: "Curator and creative lead for UEFA-backed youth and sport projects."
    },
    {
      title: "Speaking and Advisory",
      description: "Keynotes, boards and advisory roles on culture, community and growth."
    }
  ];

  return (
    <motion.section 
      className="ventures-strip"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="ventures-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
      >
        {ventures.map((venture, index) => (
          <motion.div 
            key={index} 
            className="venture-card"
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
            <h3>{venture.title}</h3>
            <p>{venture.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default VenturesStrip;