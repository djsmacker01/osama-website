import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { scrollReveal, cardHover, staggerContainer } from '../utils/animations';

const AnimatedCounter = ({ target, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10);
      const duration = 2000;
      const steps = 60;
      const increment = numericTarget / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        // Ease-out: faster at start, slower at end
        const progress = 1 - Math.pow(1 - step / steps, 3);
        current = Math.round(numericTarget * progress);
        
        setCount(current);

        if (step >= steps) {
          setCount(numericTarget);
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <span ref={ref}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

const ImpactNumbers = () => {
  const stats = [
    { number: "20", suffix: "+", label: "sold-out shows and live experiences delivered" },
    { number: "2000", suffix: "+", prefix: "", label: "attendees at a single flagship youth music festival" },
    { number: "120", suffix: "k+", prefix: "\u00A3", label: "social enterprise and project revenue generated" },
    { number: "80", suffix: "k+", prefix: "\u00A3", label: "secured through successful bids and grants" },
    { number: "5", suffix: "+", label: "universities and colleges in an active creative network" }
  ];

  return (
    <motion.section 
      className="impact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="impact-container">
        <motion.h2 
          className="section-title" 
          style={{ color: 'var(--dark-bg)' }}
          {...scrollReveal}
        >
          IMPACT IN NUMBERS
        </motion.h2>
        <motion.div 
          className="impact-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="impact-card"
              variants={{
                initial: { opacity: 0, y: 30, scale: 0.9 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                }
              }}
              {...cardHover}
            >
              <div className="impact-number">
                <AnimatedCounter 
                  target={stat.number}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ''}
                />
              </div>
              <div className="impact-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p 
          className="impact-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The result of combining marketing strategy, ticketing science, community insight and bold creative direction.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ImpactNumbers;
