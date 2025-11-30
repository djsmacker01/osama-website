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
    y: -12,
    scale: 1.02,
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

// Professional card reveal animation
export const professionalCardReveal = {
  initial: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
    rotateX: -15
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Stagger container for professional reveals
export const professionalStaggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

