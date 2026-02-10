import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scrollReveal, hoverImage, staggerContainer } from '../utils/animations';
import { MapPin } from '../utils/Icons';
import { ABOUT_TIMELINE_EVENTS } from '../data/aboutTimeline';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div className="about-page">
      <motion.header
        className="about-page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-page-header-inner">
          <Link to="/" className="about-page-logo">
            NURUDEEN ADEDEJI
          </Link>
          <Link to="/" className="about-page-back">
            ← Back to Home
          </Link>
        </div>
      </motion.header>

      <motion.section
        className="about-page-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.div className="about-header" {...scrollReveal}>
          <motion.h1
            className="about-name"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            NURUDEEN ADEDEJI
          </motion.h1>
          <motion.h2
            className="about-tagline"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            FROM HUMBLE BEGINNINGS
          </motion.h2>
        </motion.div>

        <motion.div
          className="timeline-wrapper"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          {ABOUT_TIMELINE_EVENTS.map((event, index) => (
            <motion.div
              key={`${event.year}-${event.title}-${index}`}
              className={`timeline-event ${event.side === 'left' ? 'event-left' : 'event-right'}`}
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                },
              }}
              initial="initial"
              animate="animate"
            >
              <motion.div className="timeline-line-container">
                <motion.div className="timeline-year">{event.year}</motion.div>
                {index < ABOUT_TIMELINE_EVENTS.length - 1 && (
                  <div className="timeline-vertical-line" />
                )}
              </motion.div>

              {event.side === 'left' ? (
                <>
                  <motion.div className="timeline-content-left">
                    <motion.div className="timeline-image" {...hoverImage}>
                      <img src={event.image} alt={event.title} />
                    </motion.div>
                  </motion.div>
                  <motion.div className="timeline-content-right">
                    <h3>{event.title}</h3>
                    <div className="timeline-location">
                      <span className="location-pin">
                        <MapPin size={16} />
                      </span>
                      <span>{event.location}</span>
                    </div>
                    <p>{event.description}</p>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div className="timeline-content-left">
                    <h3>{event.title}</h3>
                    <div className="timeline-location">
                      <span className="location-pin">
                        <MapPin size={16} />
                      </span>
                      <span>{event.location}</span>
                    </div>
                    <p>{event.description}</p>
                  </motion.div>
                  <motion.div className="timeline-content-right">
                    <motion.div className="timeline-image" {...hoverImage}>
                      <img src={event.image} alt={event.title} />
                    </motion.div>
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default AboutPage;
