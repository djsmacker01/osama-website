import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import VenturesStrip from './components/VenturesStrip';
import WhatIDo from './components/WhatIDo';
import ImpactNumbers from './components/ImpactNumbers';
import StoryPreview from './components/StoryPreview';
import Timeline from './components/Timeline';
import VenturesHighlight from './components/VenturesHighlight';
import Awards from './components/Awards';
import Speaking from './components/Speaking';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <VenturesStrip />
      <WhatIDo />
      <ImpactNumbers />
      <StoryPreview />
      <Timeline />
      <VenturesHighlight />
      <Awards />
      <Speaking />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default App;