// Animation configuration for Framer Motion
// Centralized animation presets for consistent, professional animations

// ─── FADE ANIMATIONS ─────────────────────────────────────────────
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

// ─── SLIDE ANIMATIONS ────────────────────────────────────────────
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

// ─── SCROLL-TRIGGERED ANIMATIONS ─────────────────────────────────
export const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

export const scrollRevealScale = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

// ─── STAGGER ANIMATIONS ──────────────────────────────────────────
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

export const staggerContainerFast = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1
    }
  }
};

// ─── HOVER ANIMATIONS ────────────────────────────────────────────
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

// ─── BUTTON ANIMATIONS ──────────────────────────────────────────
export const buttonHover = {
  whileHover: { 
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(232, 255, 0, 0.3)"
  },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
};

// ─── CARD ANIMATIONS ─────────────────────────────────────────────
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

// ─── PROFESSIONAL CARD REVEAL ────────────────────────────────────
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

// ─── PAGE TRANSITION ─────────────────────────────────────────────
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
};

// ─── SECTION REVEAL ──────────────────────────────────────────────
export const sectionReveal = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-120px" },
  transition: { 
    duration: 0.8, 
    ease: [0.16, 1, 0.3, 1]
  }
};

// ─── TEXT REVEAL (character by character) ─────────────────────────
export const textRevealContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1
    }
  },
  viewport: { once: true }
};

export const textRevealChar = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// ─── MAGNETIC HOVER (for buttons/interactive elements) ───────────
export const magneticHover = {
  whileHover: { 
    scale: 1.08,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  },
  whileTap: { 
    scale: 0.95,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  }
};

// ─── GLOW PULSE (for CTA elements) ──────────────────────────────
export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(232, 255, 0, 0.0)",
      "0 0 40px rgba(232, 255, 0, 0.15)",
      "0 0 20px rgba(232, 255, 0, 0.0)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ─── NAV LINK STAGGER ────────────────────────────────────────────
export const navLinkVariants = {
  initial: { opacity: 0, y: 20, x: -10 },
  animate: { 
    opacity: 1, 
    y: 0, 
    x: 0,
    transition: { 
      duration: 0.4, 
      ease: [0.16, 1, 0.3, 1] 
    }
  },
  exit: { 
    opacity: 0, 
    y: 10,
    transition: { duration: 0.2 }
  }
};

export const mobileMenuVariants = {
  initial: { 
    clipPath: "circle(0% at calc(100% - 40px) 40px)" 
  },
  animate: { 
    clipPath: "circle(150% at calc(100% - 40px) 40px)",
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    }
  },
  exit: { 
    clipPath: "circle(0% at calc(100% - 40px) 40px)",
    transition: { 
      duration: 0.4, 
      ease: [0.4, 0, 0.2, 1] 
    }
  }
};
