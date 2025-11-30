import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';

const WhatIDo = () => {
  const roles = [
    {
      title: "Growth Architect",
      description: "Osama designs end-to-end marketing and growth systems for live experiences. From the very first impression to the final checkout, he builds journeys that turn attention into ticket sales, and ticket sales into long-term loyalty."
    },
    {
      title: "Creative Director",
      description: "As a creative director, Osama builds live experiences that feel cinematic and human. He brings together artists, staging, lighting, sound, storytelling and media into nights, festivals and campaigns that audiences talk about for months."
    },
    {
      title: "Cultural Strategist",
      description: "Osama specialises in underestimated audiences and emerging scenes. He works with organisations that want to earn trust, not just buy reach, and uses culture as a strategic asset for growth rather than decoration."
    }
  ];

  return (
    <motion.section 
      className="what-i-do" 
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="section-title"
        {...scrollReveal}
      >
        WHAT I DO
      </motion.h2>
      <motion.div 
        className="what-i-do-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
      >
        {roles.map((role, index) => (
          <motion.div 
            key={index} 
            className="what-card"
            variants={{
              initial: { opacity: 0, x: -30 },
              animate: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
              }
            }}
            {...cardHover}
          >
            <h3>{role.title}</h3>
            <p>{role.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhatIDo;