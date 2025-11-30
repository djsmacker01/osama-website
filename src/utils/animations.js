// Animation configuration for Framer Motion
// Centralized animation presets for consistent, subtle animations

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

// Scroll-triggered animations
export const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

// Stagger children animations
export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
};

export const hoverLift = {
  whileHover: { y: -5, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }
};

export const hoverImage = {
  whileHover: { scale: 1.03 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
};

export const imageHover = {
  whileHover: { scale: 1.03 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
};

// Button animations
export const buttonHover = {
  whileHover: { 
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(232, 255, 0, 0.3)"
  },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
};

// Card animations
export const cardHover = {
  whileHover: { 
    y: -8,
    opacity: 0.95,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  }
};

