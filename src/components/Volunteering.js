import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';
import { MapPin, ExternalLink } from '../utils/Icons';

const Volunteering = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentOTCImageIndex, setCurrentOTCImageIndex] = useState(0);
  const [currentStemAmbassadorImageIndex, setCurrentStemAmbassadorImageIndex] = useState(0);
  const [currentNHSImageIndex, setCurrentNHSImageIndex] = useState(0);
  const [currentGTImageIndex, setCurrentGTImageIndex] = useState(0);

  const gtImages = [
    '/images/GT-01.png',
    '/images/GT-02.png',
    '/images/GT-03.png'
  ];

  const nhsImages = [
    '/images/NHS_01.png',
    '/images/NHS_02.png'
  ];

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

  const stemCommunityImages = [
    '/images/community-dashboard.png',
    '/images/feedback-comment-on-my-post.png',
    '/images/creating-content-on-the-STEM-Community.png'
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

  // Auto-advance slideshow when STEM Ambassador card is hovered
  useEffect(() => {
    if (hoveredCardIndex === 4) { // STEM Ambassador Program is at index 4
      const interval = setInterval(() => {
        setCurrentStemAmbassadorImageIndex((prev) => (prev + 1) % stemCommunityImages.length);
      }, 3000);
      return () => clearInterval(interval);
    } else {
      setCurrentStemAmbassadorImageIndex(0); // Reset when not hovering
    }
  }, [hoveredCardIndex, stemCommunityImages.length]);

  // Auto-advance slideshow when NHS card is hovered
  useEffect(() => {
    if (hoveredCardIndex === 2) { // NHS and Care Volunteer Responders is at index 2
      const interval = setInterval(() => {
        setCurrentNHSImageIndex((prev) => (prev + 1) % nhsImages.length);
      }, 3000);
      return () => clearInterval(interval);
    } else {
      setCurrentNHSImageIndex(0); // Reset when not hovering
    }
  }, [hoveredCardIndex, nhsImages.length]);

  // Auto-advance slideshow when GT Scholars card is hovered
  useEffect(() => {
    if (hoveredCardIndex === 0) { // GT Scholars is at index 0
      const interval = setInterval(() => {
        setCurrentGTImageIndex((prev) => (prev + 1) % gtImages.length);
      }, 3000);
      return () => clearInterval(interval);
    } else {
      setCurrentGTImageIndex(0); // Reset when not hovering
    }
  }, [hoveredCardIndex, gtImages.length]);

  const volunteeringEngagements = [
    {
      organization: 'GT Scholars',
      role: 'Code Creators Club Facilitator',
      location: 'UK (Remote)',
      period: '2025 - Present',
      description: 'Facilitating the Code Creators Club for GT Scholars, an award-winning social enterprise supporting young people aged 11-18. Delivering technical mentorship and guidance through tutoring, mentoring and career insight programmes that help scholars achieve their academic and career aspirations regardless of background.',
      impact: 'Supporting young people through coding workshops and career development programmes as part of an organisation that boosts social mobility for disadvantaged youth'
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
      organization: 'NHS and Care Volunteer Responders',
      role: 'Volunteer Responder',
      location: 'UK',
      period: '2022 - May 2025',
      description: 'Completed tasks and shifts supporting the NHS and vulnerable people across the country. Volunteer roles included community response (shopping, prescriptions, accompaniment), telephone support to reduce loneliness and isolation, and other activities helping patients and people in need.',
      impact: 'Contributed to a national programme that completed over 2.7 million tasks and shifts, supporting hundreds of thousands of patients and vulnerable people across the UK'
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
      impact: 'Engaged students across schools and community centers'
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
              className={`volunteering-card ${index === 0 || index === 2 || index === 3 || index === 4 || index === 5 ? 'volunteering-card-flip' : ''}`}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                }
              }}
              {...(index !== 0 && index !== 2 && index !== 3 && index !== 4 && index !== 5 ? cardHover : {})}
              onMouseEnter={() => (index === 0 || index === 2 || index === 3 || index === 4 || index === 5) && setHoveredCardIndex(index)}
              onMouseLeave={() => (index === 0 || index === 2 || index === 3 || index === 4 || index === 5) && setHoveredCardIndex(null)}
              style={{ position: 'relative', perspective: '1000px' }}
            >
              {index === 0 ? (
                <>
                  {/* Front of card - GT Scholars */}
                  <motion.div 
                    className="volunteering-card-front"
                    animate={{ 
                      rotateY: hoveredCardIndex === 0 ? 180 : 0,
                      opacity: hoveredCardIndex === 0 ? 0 : 1
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

                  {/* Back of card with GT Scholars evidence images */}
                  <motion.div 
                    className="volunteering-card-back"
                    animate={{ 
                      rotateY: hoveredCardIndex === 0 ? 0 : 180,
                      opacity: hoveredCardIndex === 0 ? 1 : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="volunteering-card-back-content">
                      <h3 className="volunteering-card-back-title">{engagement.organization}</h3>
                      <div className="volunteering-card-images">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentGTImageIndex}
                            src={gtImages[currentGTImageIndex]}
                            alt={`GT Scholars evidence ${currentGTImageIndex + 1}`}
                            className="volunteering-card-image"
                            loading="lazy"
                            decoding="async"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                        </AnimatePresence>
                      </div>
                      <div className="volunteering-card-indicators">
                        {gtImages.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`volunteering-card-indicator ${currentGTImageIndex === imgIndex ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </>
              ) : index === 2 ? (
                <>
                  {/* Front of card - NHS and Care Volunteer Responders */}
                  <motion.div 
                    className="volunteering-card-front"
                    animate={{ 
                      rotateY: hoveredCardIndex === 2 ? 180 : 0,
                      opacity: hoveredCardIndex === 2 ? 0 : 1
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
                    <a 
                      href="/certificates/NHS-volunteer-certificate.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="volunteering-certificate-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                      View certificate (PDF)
                    </a>
                  </motion.div>

                  {/* Back of card with NHS evidence images */}
                  <motion.div 
                    className="volunteering-card-back"
                    animate={{ 
                      rotateY: hoveredCardIndex === 2 ? 0 : 180,
                      opacity: hoveredCardIndex === 2 ? 1 : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="volunteering-card-back-content">
                      <h3 className="volunteering-card-back-title">{engagement.organization}</h3>
                      <div className="volunteering-card-images">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentNHSImageIndex}
                            src={nhsImages[currentNHSImageIndex]}
                            alt={`NHS Volunteer Responders evidence ${currentNHSImageIndex + 1}`}
                            className="volunteering-card-image"
                            loading="lazy"
                            decoding="async"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                        </AnimatePresence>
                      </div>
                      <div className="volunteering-card-indicators">
                        {nhsImages.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`volunteering-card-indicator ${currentNHSImageIndex === imgIndex ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                      <a 
                        href="/certificates/NHS-volunteer-certificate.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="volunteering-certificate-link volunteering-certificate-link-back"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                        Download certificate (PDF)
                      </a>
                    </div>
                  </motion.div>
                </>
              ) : index === 3 ? (
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
                            loading="lazy"
                            decoding="async"
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
                            loading="lazy"
                            decoding="async"
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
              ) : index === 4 ? (
                <>
                  {/* Front of card - STEM Ambassador Program */}
                  <motion.div 
                    className="volunteering-card-front"
                    animate={{ 
                      rotateY: hoveredCardIndex === 4 ? 180 : 0,
                      opacity: hoveredCardIndex === 4 ? 0 : 1
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

                  {/* Back of card with STEM Community images */}
                  <motion.div 
                    className="volunteering-card-back"
                    animate={{ 
                      rotateY: hoveredCardIndex === 4 ? 0 : 180,
                      opacity: hoveredCardIndex === 4 ? 1 : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="volunteering-card-back-content">
                      <h3 className="volunteering-card-back-title">{engagement.organization}</h3>
                      <div className="volunteering-card-images">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentStemAmbassadorImageIndex}
                            src={stemCommunityImages[currentStemAmbassadorImageIndex]}
                            alt={`STEM Community ${currentStemAmbassadorImageIndex + 1}`}
                            className="volunteering-card-image"
                            loading="lazy"
                            decoding="async"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                        </AnimatePresence>
                      </div>
                      <div className="volunteering-card-indicators">
                        {stemCommunityImages.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`volunteering-card-indicator ${currentStemAmbassadorImageIndex === imgIndex ? 'active' : ''}`}
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

