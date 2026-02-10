import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import AnimatedName from './AnimatedName';
import Hero from './Hero';
import About from './About';
import VenturesStrip from './VenturesStrip';
import WhatIDo from './WhatIDo';
import ImpactNumbers from './ImpactNumbers';
import VenturesHighlight from './VenturesHighlight';
import Projects from './Projects';
import Awards from './Awards';
import Volunteering from './Volunteering';
import Speaking from './Speaking';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <Navigation />
      <AnimatedName />
      <Hero />
      <About />
      <VenturesStrip />
      <WhatIDo />
      <ImpactNumbers />
      <VenturesHighlight />
      <Projects />
      <Awards />
      <Volunteering />
      <Speaking />
      <FinalCTA />
      <Footer />
    </motion.div>
  );
}

export default Home;
