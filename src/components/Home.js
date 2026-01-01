import React from 'react';
import Navigation from './Navigation';
import AnimatedName from './AnimatedName';
import Hero from './Hero';
import About from './About';
import VenturesStrip from './VenturesStrip';
import WhatIDo from './WhatIDo';
import ImpactNumbers from './ImpactNumbers';
import StoryPreview from './StoryPreview';
import Timeline from './Timeline';
import VenturesHighlight from './VenturesHighlight';
import Projects from './Projects';
import Awards from './Awards';
import Volunteering from './Volunteering';
import Speaking from './Speaking';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Navigation />
      <AnimatedName />
      <Hero />
      <About />
      <VenturesStrip />
      <WhatIDo />
      <ImpactNumbers />
      <StoryPreview />
      <Timeline />
      <VenturesHighlight />
      <Projects />
      <Awards />
      <Volunteering />
      <Speaking />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default Home;

