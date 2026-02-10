import React from 'react';
import { motion } from 'framer-motion';
import { cardHover, staggerContainer } from '../utils/animations';

const VenturesStrip = () => {
  const ventures = [
    {
      title: "Brand & Campaign Strategy",
      description: "Leading global marketing and campaign strategy for brands, platforms and institutions across events, media and festivals."
    },
    {
      title: "Community & Inclusion",
      description: "Designing and delivering social impact programmes that amplify underrepresented voices through inclusive events, festivals and youth engagement."
    },
    {
      title: "Marketing & PR",
      description: "Building and leading marketing and communications for national platforms that champion talent and culture."
    },
    {
      title: "Sales & Platform Growth",
      description: "Driving regional sales and marketing for next-generation ticketing and event discovery platforms."
    },
    {
      title: "Creative Curation & Partnerships",
      description: "Curating and leading youth and sport projects in partnership with major organisations."
    },
    {
      title: "Free Web & App Builds for SMEs",
      description: "Building websites and mobile applications at no charge for small and medium enterprises that are registered with Companies House and pay their taxes."
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