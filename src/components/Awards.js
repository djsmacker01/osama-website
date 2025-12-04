import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';

const Awards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isStemModalOpen, setIsStemModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentStemIndex, setCurrentStemIndex] = useState(0);

  const finalistAwardImages = [
    {
      src: "/images/University_south_wales.jpg",
      title: "University of South Wales",
      description: "I was proud to represent the University of South Wales at this prestigious National Coding Challenge. It was an incredible opportunity to showcase my programming skills and problem-solving abilities in such a competitive environment."
    },
    {
      src: "/images/certificate_of_finalist.jpg",
      title: "Certificate of Finalist",
      description: "This is my official certificate recognizing my achievement as a finalist in Front End Development at the TargetJobs National Coding Challenge 2023, in partnership with Rolls-Royce. Receiving this recognition for my work in web development and technical innovation was truly rewarding."
    },
    {
      src: "/images/congratulation_finalist.jpg",
      title: "Congratulations Finalists",
      description: "What an amazing experience celebrating this achievement alongside other talented finalists from across the nation. Being recognized for my dedication to technical excellence and innovation in software development was a moment I'll never forget."
    },
    {
      src: "/images/list_of_finalist.jpg",
      title: "Front End Developer Finalists",
      description: "I'm honored to be featured on the official list of Front End Developer finalists for the TargetJobs National Coding Challenge 2023. Seeing my name alongside other talented developers from top universities across the UK was a proud moment. This recognition means a lot to me and validates the hard work I've put into mastering front-end development."
    },
    {
      src: "/images/group_pic.jpg",
      title: "Awards Ceremony",
      description: "This group photo captures a special moment from the TargetJobs and Rolls-Royce National Coding Challenge event. It was a memorable evening celebrating technical excellence and innovation, and I'm grateful to have been part of this recognition of talented developers and engineers."
    }
  ];

  const stemAmbassadorImages = [
    {
      src: "/images/join-stem-abassador2022.png",
      title: "Joining STEM Ambassador",
      description: "This marks the day I officially joined the STEM Ambassador program in 2022. It was the beginning of my journey to inspire and mentor the next generation of engineers, scientists, and technologists."
    },
    {
      src: "/images/activity01.png",
      title: "STEM Activity Evidence",
      description: "One of the many emails documenting my hard work and dedication as a STEM Ambassador. These communications showcase my commitment to supporting educational initiatives and inspiring young minds."
    },
    {
      src: "/images/activity02.png",
      title: "STEM Activity Evidence",
      description: "Another testament to my ongoing work in STEM outreach. These activities demonstrate my passion for sharing knowledge and creating opportunities for students to explore technology and innovation."
    },
    {
      src: "/images/activity03.png",
      title: "STEM Activity Evidence",
      description: "Continued evidence of my engagement with schools and educational institutions, helping to bridge the gap between industry and education through practical workshops and mentoring."
    },
    {
      src: "/images/activity04.png",
      title: "STEM Activity Evidence",
      description: "More documentation of my contributions to STEM education, showing my dedication to making a positive impact in the lives of young learners across Wales."
    },
    {
      src: "/images/activity05.png",
      title: "STEM Activity Evidence",
      description: "These emails represent countless hours spent preparing workshops, mentoring students, and sharing my expertise in technology and engineering with the next generation."
    },
    {
      src: "/images/activity06.png",
      title: "STEM Activity Evidence",
      description: "Further evidence of my commitment to STEM outreach, demonstrating the breadth and depth of my involvement in educational initiatives and community engagement."
    },
    {
      src: "/images/activity07.png",
      title: "STEM Activity Evidence",
      description: "Additional documentation of my work as a STEM Ambassador, showcasing the variety of activities and engagements I've participated in to inspire young minds."
    },
    {
      src: "/images/IET-Faraday-day.png",
      title: "IET Faraday Day",
      description: "A special day where I helped young students with practical projects. The IET Faraday Day was an incredible opportunity to work hands-on with students, guiding them through real-world engineering challenges and sparking their interest in technology and innovation."
    }
  ];

  const awards = [
    { 
      icon: "🏆", 
      title: "Finalist Award", 
      description: "National coding challenge by TargetJobs and Rolls-Royce, recognizing exceptional technical skills and innovative problem-solving in competitive programming." 
    },
    { 
      icon: "🔬", 
      title: "STEM Ambassador", 
      description: "Recognized for outstanding contributions to STEM outreach and mentoring, inspiring the next generation of engineers, scientists, and technologists through educational initiatives and community engagement." 
    },
    { 
      icon: "🎤", 
      title: "Speaking Engagements", 
      description: "Featured speaker at Wales Tech Week, sharing expertise in tech and innovation, and contributing to thought leadership discussions on the future of technology, AI, and digital transformation." 
    }
  ];

  const openModal = () => {
    setIsModalOpen(true);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const openStemModal = () => {
    setIsStemModalOpen(true);
    setCurrentStemIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeStemModal = () => {
    setIsStemModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % finalistAwardImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + finalistAwardImages.length) % finalistAwardImages.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const nextStemImage = () => {
    setCurrentStemIndex((prev) => (prev + 1) % stemAmbassadorImages.length);
  };

  const prevStemImage = () => {
    setCurrentStemIndex((prev) => (prev - 1 + stemAmbassadorImages.length) % stemAmbassadorImages.length);
  };

  const goToStemImage = (index) => {
    setCurrentStemIndex(index);
  };

  return (
    <motion.section 
      className="awards"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="awards-container">
        <motion.h2 
          className="section-title" 
          style={{ color: 'var(--dark-bg)' }}
          {...scrollReveal}
        >
          AWARDS & RECOGNITION
        </motion.h2>
        <motion.div 
          className="awards-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {awards.map((award, index) => (
            <motion.div 
              key={index} 
              className="award-card"
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
              <motion.div 
                className="award-icon"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
              >
                {award.icon}
              </motion.div>
              <div className="award-title">{award.title}</div>
              <p className="award-description">{award.description}</p>
              {index === 0 && (
                <motion.button
                  className="award-view-button"
                  onClick={openModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Click me
                </motion.button>
              )}
              {index === 1 && (
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                  <motion.button
                    className="award-view-button"
                    onClick={openStemModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Evidence
                  </motion.button>
                  <motion.button
                    className="award-view-button"
                    onClick={openVideoModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Watch Video
                  </motion.button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Finalist Award Images */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="award-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="award-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="award-modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ×
              </button>

              <div className="award-modal-image-container">
                <button
                  className="award-modal-nav award-modal-nav-prev"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  ‹
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    className="award-modal-image-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={finalistAwardImages[currentImageIndex].src}
                      alt={finalistAwardImages[currentImageIndex].title}
                      className="award-modal-image"
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  className="award-modal-nav award-modal-nav-next"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>

              <div className="award-modal-info">
                <h3 className="award-modal-title">
                  {finalistAwardImages[currentImageIndex].title}
                </h3>
                <p className="award-modal-description">
                  {finalistAwardImages[currentImageIndex].description}
                </p>
              </div>

              <div className="award-modal-indicators">
                {finalistAwardImages.map((_, index) => (
                  <button
                    key={index}
                    className={`award-modal-indicator ${currentImageIndex === index ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for STEM Ambassador Video */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="award-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            <motion.div
              className="award-video-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="award-modal-close"
                onClick={closeVideoModal}
                aria-label="Close modal"
              >
                ×
              </button>

              <div className="award-video-modal-container">
                <iframe
                  src="https://player.vimeo.com/video/1142988962?autoplay=1&loop=1&controls=0&title=0&byline=0&portrait=0&transparent=0"
                  className="award-video-modal-iframe"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="STEM Ambassador Video"
                />
              </div>

              <div className="award-modal-info">
                <h3 className="award-modal-title">STEM Ambassador</h3>
                <p className="award-modal-description">
                  Recognized for outstanding contributions to STEM outreach and mentoring, inspiring the next generation of engineers, scientists, and technologists through educational initiatives and community engagement.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for STEM Ambassador Images */}
      <AnimatePresence>
        {isStemModalOpen && (
          <motion.div
            className="award-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeStemModal}
          >
            <motion.div
              className="award-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="award-modal-close"
                onClick={closeStemModal}
                aria-label="Close modal"
              >
                ×
              </button>

              <div className="award-modal-image-container">
                <button
                  className="award-modal-nav award-modal-nav-prev"
                  onClick={prevStemImage}
                  aria-label="Previous image"
                >
                  ‹
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStemIndex}
                    className="award-modal-image-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={stemAmbassadorImages[currentStemIndex].src}
                      alt={stemAmbassadorImages[currentStemIndex].title}
                      className="award-modal-image"
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  className="award-modal-nav award-modal-nav-next"
                  onClick={nextStemImage}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>

              <div className="award-modal-info">
                <h3 className="award-modal-title">
                  {stemAmbassadorImages[currentStemIndex].title}
                </h3>
                <p className="award-modal-description">
                  {stemAmbassadorImages[currentStemIndex].description}
                </p>
              </div>

              <div className="award-modal-indicators">
                {stemAmbassadorImages.map((_, index) => (
                  <button
                    key={index}
                    className={`award-modal-indicator ${currentStemIndex === index ? 'active' : ''}`}
                    onClick={() => goToStemImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Awards;