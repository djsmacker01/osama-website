import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';
import { MapPin } from '../utils/Icons';

const Volunteering = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentOTCImageIndex, setCurrentOTCImageIndex] = useState(0);

  const abilityNetImages = [
    '/images/AbilityNet-1.png',
    '/images/AbilityNet-2.png',
    '/images/AbilityNet-3.png'
  ];

  const otcImages = [
    '/images/off-the-curriculum-1.png',
    '/images/OTC-2.png',
    '/images/OTC-3.png',
    '/images/OTC.png'
  ];

  // Auto-advance slideshow when AbilityNet card is hovered
  useEffect(() => {
    if (hoveredCardIndex === 3) { // AbilityNet is at index 3
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % abilityNetImages.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    } else {
      setCurrentImageIndex(0); // Reset when not hovering
    }
  }, [hoveredCardIndex, abilityNetImages.length]);

  // Auto-advance slideshow when Off the Curriculum card is hovered
  useEffect(() => {
    if (hoveredCardIndex === 5) { // Off the Curriculum is at index 5
      const interval = setInterval(() => {
        setCurrentOTCImageIndex((prev) => (prev + 1) % otcImages.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    } else {
      setCurrentOTCImageIndex(0); // Reset when not hovering
    }
  }, [hoveredCardIndex, otcImages.length]);
  const volunteeringEngagements = [
    {
      organization: 'Tech for Good Initiative',
      role: 'Mentor & Technical Advisor',
      location: 'Cardiff, Wales',
      period: '2021 - Present',
      description: 'Providing technical mentorship and guidance to aspiring software developers and entrepreneurs from underrepresented communities. Helping bridge the gap between education and industry.',
      impact: 'Mentored 50+ individuals, helped launch 10+ tech projects'
    },
    {
      organization: 'Code Club Wales',
      role: 'Volunteer Instructor',
      location: 'Cardiff, Wales',
      period: '2020 - 2022',
      description: 'Teaching coding fundamentals to young people aged 9-13, introducing them to programming concepts through fun, interactive projects. Fostering early interest in technology and STEM fields.',
      impact: 'Taught 200+ students, organized 30+ coding workshops'
    },
    {
      organization: 'AI Education Outreach',
      role: 'Workshop Facilitator',
      location: 'Online & Cardiff',
      period: '2022 - Present',
      description: 'Delivering workshops and seminars on AI fundamentals, machine learning basics, and the ethical implications of AI technology. Making complex AI concepts accessible to diverse audiences.',
      impact: 'Reached 500+ participants across 20+ workshops'
    },
    {
      organization: 'AbilityNet',
      role: 'Technical Volunteer',
      location: 'Wales, UK',
      period: '2022 - Present',
      description: 'Applied technical expertise to directly support vulnerable individuals in using digital technology safely and effectively. Conducted in-home visits to assess client needs and provide tailored technical assistance. Set up and configured computers, tablets, and smartphones for clients with varying levels of digital literacy. Delivered practical training on safe internet practices to prevent cyber exploitation and implemented accessibility solutions for inclusive technology use. Demonstrated leadership and initiative in problem-solving complex technical challenges in real-world environments.',
      impact: 'Empowered vulnerable clients to independently use digital tools, significantly reduced exposure to cyber risks through targeted education, and contributed to bridging the digital divide ensuring equitable access to technology'
    },
    {
      organization: 'STEM Ambassador Program',
      role: 'STEM Ambassador',
      location: 'Wales, UK',
      period: '2019 - Present',
      description: 'Inspiring young people to pursue careers in Science, Technology, Engineering, and Mathematics. Delivering talks, workshops, and career guidance sessions in schools and community centers.',
      impact: 'Engaged 1000+ students across 50+ schools'
    },
    {
      organization: 'Off the Curriculum (OTC)',
      role: 'Web Developer / Software Developer Volunteer',
      location: 'London, UK (Remote)',
      period: '2024 - Present',
      description: 'Leading development on the Communities, Mentoring, and Courses portals for Off the Curriculum - a complex and dynamic educational platform. Building safe blog-style community portals with features for monitoring bullying and abuse. Collaborating with a development team to create innovative educational solutions that serve diverse learning needs. Contributing to open-source codebase and maintaining project documentation.',
      impact: 'Led development on key platform portals, contributed to complex educational technology solutions, and helped build safe online community spaces'
    }
  ];

  return (
    <motion.section 
      className="volunteering" 
      id="volunteering"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="volunteering-container">
        <motion.h2 
          className="section-title"
          {...scrollReveal}
        >
          Volunteering & Community Engagement
        </motion.h2>
        <motion.p 
          className="volunteering-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Giving back to the community through education, mentorship, and technical support. 
          Committed to making technology accessible and empowering the next generation of innovators.
        </motion.p>
        
        <motion.div 
          className="volunteering-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {volunteeringEngagements.map((engagement, index) => (
            <motion.div 
              key={index} 
              className={`volunteering-card ${index === 3 || index === 5 ? 'volunteering-card-flip' : ''}`}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                }
              }}
              {...(index !== 3 && index !== 5 ? cardHover : {})}
              onMouseEnter={() => (index === 3 || index === 5) && setHoveredCardIndex(index)}
              onMouseLeave={() => (index === 3 || index === 5) && setHoveredCardIndex(null)}
              style={{ position: 'relative', perspective: '1000px' }}
            >
              {index === 3 ? (
                <>
                  {/* Front of card */}
                  <motion.div 
                    className="volunteering-card-front"
                    animate={{ 
                      rotateY: hoveredCardIndex === 3 ? 180 : 0,
                      opacity: hoveredCardIndex === 3 ? 0 : 1
                    }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="volunteering-header">
                      <h3>{engagement.organization}</h3>
                      <span className="volunteering-period">{engagement.period}</span>
                    </div>
                    <div className="volunteering-role">{engagement.role}</div>
                    <div className="volunteering-location">
                      <span className="location-pin"><MapPin size={16} /></span>
                      <span>{engagement.location}</span>
                    </div>
                    <p className="volunteering-description">{engagement.description}</p>
                    <div className="volunteering-impact">
                      <strong>Impact:</strong> {engagement.impact}
                    </div>
                  </motion.div>

                  {/* Back of card with images */}
                  <motion.div 
                    className="volunteering-card-back"
                    animate={{ 
                      rotateY: hoveredCardIndex === 3 ? 0 : 180,
                      opacity: hoveredCardIndex === 3 ? 1 : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="volunteering-card-back-content">
                      <h3 className="volunteering-card-back-title">{engagement.organization}</h3>
                      <div className="volunteering-card-images">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImageIndex}
                            src={abilityNetImages[currentImageIndex]}
                            alt={`AbilityNet evidence ${currentImageIndex + 1}`}
                            className="volunteering-card-image"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                        </AnimatePresence>
                      </div>
                      <div className="volunteering-card-indicators">
                        {abilityNetImages.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`volunteering-card-indicator ${currentImageIndex === imgIndex ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </>
              ) : index === 5 ? (
                <>
                  {/* Front of card */}
                  <motion.div 
                    className="volunteering-card-front"
                    animate={{ 
                      rotateY: hoveredCardIndex === 5 ? 180 : 0,
                      opacity: hoveredCardIndex === 5 ? 0 : 1
                    }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="volunteering-header">
                      <h3>{engagement.organization}</h3>
                      <span className="volunteering-period">{engagement.period}</span>
                    </div>
                    <div className="volunteering-role">{engagement.role}</div>
                    <div className="volunteering-location">
                      <span className="location-pin"><MapPin size={16} /></span>
                      <span>{engagement.location}</span>
                    </div>
                    <p className="volunteering-description">{engagement.description}</p>
                    <div className="volunteering-impact">
                      <strong>Impact:</strong> {engagement.impact}
                    </div>
                  </motion.div>

                  {/* Back of card with images */}
                  <motion.div 
                    className="volunteering-card-back"
                    animate={{ 
                      rotateY: hoveredCardIndex === 5 ? 0 : 180,
                      opacity: hoveredCardIndex === 5 ? 1 : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="volunteering-card-back-content">
                      <h3 className="volunteering-card-back-title">{engagement.organization}</h3>
                      <div className="volunteering-card-images">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentOTCImageIndex}
                            src={otcImages[currentOTCImageIndex]}
                            alt={`Off the Curriculum evidence ${currentOTCImageIndex + 1}`}
                            className="volunteering-card-image"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                        </AnimatePresence>
                      </div>
                      <div className="volunteering-card-indicators">
                        {otcImages.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`volunteering-card-indicator ${currentOTCImageIndex === imgIndex ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <div className="volunteering-header">
                    <h3>{engagement.organization}</h3>
                    <span className="volunteering-period">{engagement.period}</span>
                  </div>
                  <div className="volunteering-role">{engagement.role}</div>
                  <div className="volunteering-location">
                    <span className="location-pin"><MapPin size={16} /></span>
                    <span>{engagement.location}</span>
                  </div>
                  <p className="volunteering-description">{engagement.description}</p>
                  <div className="volunteering-impact">
                    <strong>Impact:</strong> {engagement.impact}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Volunteering;

