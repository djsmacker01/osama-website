import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, cardHover, professionalStaggerContainer, professionalCardReveal } from '../utils/animations';

const WhatIDo = () => {
  const roles = [
    {
      title: "Tech Business Consultant",
      description: "Nurudeen provides strategic technology consulting to businesses, helping them leverage AI, machine learning, automation, and data science to streamline operations and drive innovation. He optimizes workflows and implements tech-driven solutions that enhance productivity and competitiveness in the market."
    },
    {
      title: "Automation Specialist",
      description: "Nurudeen designs and implements intelligent automation solutions that transform manual processes into efficient, scalable systems. From workflow optimization to AI-driven automation, he helps organizations reduce costs, eliminate bottlenecks, and free up teams to focus on high-value work."
    },
    {
      title: "Software Developer & Engineer",
      description: "As Founder of SAAN-HUB Solutions, Nurudeen builds custom software, applications, and platforms that solve real-world problems. He specializes in web development, mobile apps, dashboards, and complete technical solutions—combining development expertise with consultancy to deliver products that scale and perform."
    },
    {
      title: "Innovation & Talent Connector",
      description: "Through SAAN-HUB Solutions, Nurudeen bridges technology and people. He connects businesses with top-tier talent in software engineering, AI, and technical fields, while also exploring R&D and game development projects. His work spans tech consulting, recruitment, and building solutions that make a meaningful impact."
    }
  ];

  // Alternate animation directions for visual interest
  const getCardVariants = (index) => {
    const directions = [
      { x: -50, y: 50, rotateX: -10 },
      { x: 50, y: 50, rotateX: -10 },
      { x: -50, y: 50, rotateX: -10 },
      { x: 50, y: 50, rotateX: -10 }
    ];
    
    return {
      initial: { 
        opacity: 0, 
        ...directions[index],
        scale: 0.85,
        filter: "blur(10px)"
      },
      animate: { 
        opacity: 1, 
        x: 0,
        y: 0,
        rotateX: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { 
          duration: 0.9, 
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }
    };
  };

  return (
    <motion.section 
      className="what-i-do" 
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.h2 
        className="section-title"
        initial={{ 
          opacity: 0, 
          y: 40,
          scale: 0.95,
          letterSpacing: "-0.1em"
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          scale: 1,
          letterSpacing: "0em"
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        WHAT I DO
      </motion.h2>
      <motion.div 
        className="what-i-do-grid"
        variants={professionalStaggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
      >
        {roles.map((role, index) => (
          <motion.div 
            key={index} 
            className="what-card"
            variants={getCardVariants(index)}
            whileHover={{ 
              y: -15,
              scale: 1.03,
              rotateY: 2,
              transition: { 
                duration: 0.5, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { 
                  delay: 0.4 + (index * 0.15),
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
            >
              {role.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.5 + (index * 0.15),
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
            >
              {role.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhatIDo;