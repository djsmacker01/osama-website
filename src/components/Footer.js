import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>OSAMA</h4>
          <p>
            Growth architect, creative director and cultural strategist building 
            high-performance live experiences for brands and platforms across the world.
          </p>
        </div>
        <div className="footer-section">
          <h4>VENTURES</h4>
          <a href="#ventures">OTID Entertainment</a>
          <a href="#ventures">Afrowales</a>
          <a href="#ventures">BWMA</a>
          <a href="#ventures">MyPhlexIT</a>
        </div>
        <div className="footer-section">
          <h4>CONNECT</h4>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="mailto:osama@example.com">Email</a>
        </div>
        <div className="footer-section">
          <h4>INFO</h4>
          <a href="#about">About</a>
          <a href="#speaking">Speaking</a>
          <a href="#contact">Media Kit</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Osamagbe (Osama) Izevbigie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;