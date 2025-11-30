import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, staggerContainer, buttonHover } from '../utils/animations';

const StoryPreview = () => {
  return (
    <motion.section 
      className="story-preview"
      style={{
        backgroundImage: 'url(/images/story-image..jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="story-overlay"
        initial={{ opacity: 0.7 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      ></motion.div>
      <motion.div 
        className="story-container"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div 
          className="story-content"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 }
          }}
        >
          <motion.h2
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { delay: 0.2 } }
            }}
          >
            From Lagos to Wales to the world
          </motion.h2>
          <motion.p
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { delay: 0.3 } }
            }}
          >
            Osama was born in Lagos, Nigeria, and moved to the United Kingdom in 2019, 
            arriving in Cardiff as a student with a laptop, a vision and no safety net.
          </motion.p>
          <motion.p
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { delay: 0.4 } }
            }}
          >
            In lecture halls and student unions, he realised entire communities were missing 
            from the stages, playlists and rooms around him. What began as helping at small 
            events quickly turned into producing his own nights, learning how to pull a crowd 
            without a big budget or a famous brand behind him.
          </motion.p>
          <motion.div 
            className="story-quote"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { delay: 0.5 } }
            }}
          >
            <p>
              "I did not just want to put on nights. I wanted to prove that if you really 
              back a community, they become your biggest growth engine."
            </p>
          </motion.div>
          <motion.a 
            className="story-link" 
            href="#story"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { delay: 0.6 } }
            }}
            {...buttonHover}
          >
            Read Osama's story →
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default StoryPreview;