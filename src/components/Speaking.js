import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollReveal, imageHover, buttonHover, staggerContainer } from '../utils/animations';

const Speaking = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const speakingImages = [
    {
      src: "/images/London-tech-week-future-of-tech.jpg",
      alt: "Nurudeen speaking at London Tech Week about the future of tech"
    },
    {
      src: "/images/LondonTechWeek2024-pica.jpg",
      alt: "Nurudeen at London Tech Week 2024"
    },
    {
      src: "/images/WalesTechWeek-panalist.jpg",
      alt: "Nurudeen as a panelist at Wales Tech Week"
    },
    {
      src: "/images/WalesTechWeek-pics.jpg",
      alt: "Nurudeen at Wales Tech Week event"
    },
    {
      src: "/images/WalechTechWeek-Talking-how-audience-should-consider-career-in-tech.jpg",
      alt: "Nurudeen talking about considering a career in tech at Wales Tech Week"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % speakingImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [speakingImages.length]);

  const topics = [
    "Future of technology and AI innovation",
    "Career development and pathways in tech",
    "STEM education and mentoring the next generation",
    "Software development and AI-powered digital solutions",
    "Entrepreneurship in technology and building tech startups",
    "Diversity and inclusion in the tech industry"
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
          style={{ position: 'relative' }}
        >
          <div className="speaking-slideshow-container">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={speakingImages[currentImageIndex].src}
                alt={speakingImages[currentImageIndex].alt}
                className="speaking-slideshow-image"
                initial={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  filter: 'blur(0px)'
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.95,
                  filter: 'blur(4px)'
                }}
                transition={{ 
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
              />
            </AnimatePresence>
          </div>
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
            Nurudeen speaks to audiences where technology, innovation, and education meet. He has delivered 
            talks and sat on panels for major tech conferences, universities, public bodies and industry events, 
            sharing his expertise on AI, software development, and inspiring the next generation of technologists.
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