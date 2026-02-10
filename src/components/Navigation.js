import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { navLinkVariants, mobileMenuVariants } from '../utils/animations';
import { useSwipeGesture } from '../hooks/useSwipeGesture';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'projects', label: 'Projects' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'speaking', label: 'Speaking' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const swipeHandlers = useSwipeGesture({
    onSwipeRight: () => setIsMobileMenuOpen(false),
    threshold: 80,
  });

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 100);

    const sections = navItems.map(item => item.id);
    let current = 'home';

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          current = sectionId;
        }
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = window.innerWidth <= 768 ? 60 : 80;
      const targetPosition = section.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <motion.nav
        className={isScrolled ? 'scrolled' : ''}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="nav-container">
          <motion.div
            className="logo"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            NURUDEEN
          </motion.div>

          <ul className="nav-links-desktop">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="nav-active-indicator"
                      layoutId="navIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <motion.div
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              {...swipeHandlers}
            >
              <div className="mobile-menu-content">
                <motion.div
                  className="mobile-menu-header"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <span className="mobile-menu-label">NAVIGATION</span>
                </motion.div>

                <ul className="mobile-menu-links">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      variants={navLinkVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      custom={index}
                      transition={{ delay: 0.2 + index * 0.06 }}
                      whileTap={{ scale: 0.95, x: 5 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                        className={activeSection === item.id ? 'active' : ''}
                      >
                        <span className="mobile-link-number">0{index + 1}</span>
                        <span className="mobile-link-text">{item.label}</span>
                        {activeSection === item.id && (
                          <motion.span
                            className="mobile-link-active"
                            layoutId="mobileNavIndicator"
                          />
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mobile-menu-footer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <a href="mailto:adedeji.adewale2022@gmail.com" className="mobile-menu-cta">
                    GET IN TOUCH
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
