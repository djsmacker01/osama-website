import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollReveal, hoverImage, staggerContainer } from '../utils/animations';
import { MapPin } from '../utils/Icons';
import { ABOUT_TIMELINE_EVENTS, ABOUT_SUMMARY_COUNT } from '../data/aboutTimeline';

const About = () => {
  const summaryEvents = ABOUT_TIMELINE_EVENTS.slice(0, ABOUT_SUMMARY_COUNT);

  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="about-header" {...scrollReveal}>
        <motion.h2
          className="about-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          FROM HUMBLE BEGINNINGS
        </motion.h2>
      </motion.div>

      <motion.div
        className="timeline-wrapper timeline-wrapper--summary"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
      >
        {summaryEvents.map((event, index) => (
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
              {index < summaryEvents.length - 1 && (
                <div className="timeline-vertical-line" />
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
                  <motion.div className="timeline-image" {...hoverImage}>
                    <img src={event.image} alt={event.title} loading="lazy" decoding="async" />
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
                <motion.div
                  className="timeline-content-left"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3>{event.title}</h3>
                  <div className="timeline-location">
                    <span className="location-pin">
                      <MapPin size={16} />
                    </span>
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
                  <motion.div className="timeline-image" {...hoverImage}>
                    <img src={event.image} alt={event.title} loading="lazy" decoding="async" />
                  </motion.div>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="about-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link to="/about" className="about-cta-btn">
          SEE FULL TIMELINE
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default About;
