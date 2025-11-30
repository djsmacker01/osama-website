import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, hoverImage, staggerContainer } from '../utils/animations';

const About = () => {
  const timelineEvents = [
    {
      year: '1995',
      title: 'BORN',
      location: 'LAGOS, NIGERIA',
      description: 'Born to a Nigerian family with a passion for technology and innovation. From an early age, Nurudeen showed an interest in how things work and how technology can solve real-world problems.',
      image: '/images/Headshot_1.png',
      side: 'right'
    },
    {
      year: '2015',
      title: 'MOVES TO CARDIFF, WALES',
      location: 'CARDIFF',
      description: 'Moved to Cardiff to pursue higher education in Mechanical Engineering. This move marked the beginning of a journey that would combine engineering principles with software development and AI innovation.',
      image: '/images/Headshot_1.png',
      side: 'left'
    },
    {
      year: '2018',
      title: 'GRADUATES WITH MECHANICAL ENGINEERING DEGREE',
      location: 'CARDIFF',
      description: 'Completed his Mechanical Engineering degree, gaining a strong foundation in problem-solving, systems thinking, and technical innovation. This engineering background would later inform his approach to software development and AI solutions.',
      image: '/images/Headshot_1.png',
      side: 'right'
    },
    {
      year: '2020',
      title: 'FOUNDS SAAN-HUB SOLUTIONS',
      location: 'CARDIFF',
      description: 'Founded SAAN-HUB Solutions, a technology company focused on building AI-powered platforms and digital solutions. The company was born from a vision to tackle real-world problems through innovative technology.',
      image: '/images/Headshot_1.png',
      side: 'left'
    },
    {
      year: '2022',
      title: 'LAUNCHES FIRST AI-POWERED PLATFORM',
      location: 'CARDIFF',
      description: 'Successfully launched the first major AI-powered platform, demonstrating expertise in combining software engineering with artificial intelligence to create impactful digital solutions.',
      image: '/images/Headshot_1.png',
      side: 'right'
    },
    {
      year: '2024',
      title: 'RECOGNIZED AS AI INNOVATOR',
      location: 'GLOBAL',
      description: 'Gained recognition as a leading AI innovator and entrepreneur, with SAAN-HUB Solutions expanding its reach and impact. Continues to build platforms that unlock new opportunities in technology.',
      image: '/images/Headshot_1.png',
      side: 'left'
    }
  ];

  return (
    <motion.section 
      className="about-section" 
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="about-header"
        {...scrollReveal}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          NURUDEEN ADEDEJI
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          FROM HUMBLE BEGINNINGS
        </motion.h2>
      </motion.div>

      <motion.div 
        className="timeline-wrapper"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
      >
        {timelineEvents.map((event, index) => (
          <motion.div 
            key={index} 
            className={`timeline-event ${event.side === 'left' ? 'event-left' : 'event-right'}`}
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
              }
            }}
          >
            <motion.div 
              className="timeline-line-container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="timeline-year"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {event.year}
              </motion.div>
              {index < timelineEvents.length - 1 && (
                <div className="timeline-vertical-line"></div>
              )}
            </motion.div>

            {event.side === 'left' ? (
              <>
                <motion.div 
                  className="timeline-content-left"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div 
                    className="timeline-image"
                    {...hoverImage}
                  >
                    <img src={event.image} alt={event.title} />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="timeline-content-right"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3>{event.title}</h3>
                  <div className="timeline-location">
                    <span className="location-pin">📍</span>
                    <span>{event.location}</span>
                  </div>
                  <p>{event.description}</p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div 
                  className="timeline-content-left"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3>{event.title}</h3>
                  <div className="timeline-location">
                    <span className="location-pin">📍</span>
                    <span>{event.location}</span>
                  </div>
                  <p>{event.description}</p>
                </motion.div>
                <motion.div 
                  className="timeline-content-right"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.div 
                    className="timeline-image"
                    {...hoverImage}
                  >
                    <img src={event.image} alt={event.title} />
                  </motion.div>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;

