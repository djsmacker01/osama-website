import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer';

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.terms-hamburger') && !event.target.closest('.terms-nav-links')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="terms-policy-page">
      <motion.div 
        className="terms-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="terms-header-content">
          <div className="terms-header-top">
            <div 
              className="terms-logo" 
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }}
            >
              NURUDEEN ADEDEJI
            </div>
            <motion.div 
              className={`terms-hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <span></span>
              <span></span>
              <span></span>
            </motion.div>
            <ul className={`terms-nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/terms-and-conditions" onClick={() => setIsMobileMenuOpen(false)}>Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" onClick={() => setIsMobileMenuOpen(false)}>Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" onClick={() => setIsMobileMenuOpen(false)}>Cookie Policy</Link></li>
            </ul>
          </div>
          <h1 className="terms-title">TERMS & CONDITIONS</h1>
        </div>
      </motion.div>

      <motion.div 
        className="terms-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="terms-content-wrapper">
          <p className="terms-intro">
            These terms and conditions govern your use of this website operated by Nurudeen Adedeji (us, we or our). 
            By accessing this website, you accept these terms and conditions in full. If you disagree with any part 
            of these terms and conditions, you must not use this website.
          </p>

          <div className="terms-section">
            <h2>1. Use of this website</h2>
            <p>
              You may use this website only for lawful purposes. You must not use this website in any way that causes, 
              or may cause, damage to the website or impairment of the availability or accessibility of the website; 
              or in any way which is unlawful, illegal, fraudulent or harmful.
            </p>
            <p>
              You must not use this website to copy, store, host, transmit, send, use, publish or distribute any 
              material which consists of (or is linked to) any spyware, computer virus or other malicious computer software.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Intellectual property rights</h2>
            <p>
              Unless otherwise stated, we or our licensors own the intellectual property rights in the website and 
              material on the website. Subject to the licence below, all these intellectual property rights are reserved.
            </p>
            <p>
              You may view, download for caching purposes only, and print pages from the website for your own personal 
              use, subject to the restrictions set out below and elsewhere in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul>
              <li>republish material from this website (including republication on another website);</li>
              <li>sell, rent or sub-license material from the website;</li>
              <li>show any material from the website in public without our express written consent;</li>
              <li>reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;</li>
              <li>edit or otherwise modify any material on the website.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>3. Acceptable use</h2>
            <p>
              You must not use this website in any way that is unlawful or fraudulent, or has any unlawful or 
              fraudulent purpose or effect. You must not transmit or procure the sending of any unsolicited or 
              unauthorised advertising or promotional material.
            </p>
            <p>
              We reserve the right to restrict access to areas of this website, or indeed our whole website, 
              at our discretion.
            </p>
          </div>

          <div className="terms-section">
            <h2>4. Limitation of liability</h2>
            <p>
              Nothing in these terms and conditions will exclude or limit our liability for death or personal injury 
              caused by our negligence, or for any other liability which cannot be excluded or limited under applicable law.
            </p>
            <p>
              To the extent that the website and the information and services on the website are provided free of charge, 
              we will not be liable for any loss or damage of any nature arising from your use of the website or reliance 
              upon the information published on it.
            </p>
            <p>
              We will not be liable for any indirect, special or consequential loss or damage arising from your use of 
              the website or any content or materials on it.
            </p>
          </div>

          <div className="terms-section">
            <h2>5. Third party links</h2>
            <p>
              This website may include links to other websites. These links are provided for your convenience only. 
              We have no control over the content of linked websites and are not responsible for them. The inclusion 
              of any link does not imply our endorsement of the linked site. You use such links at your own risk.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Variation</h2>
            <p>
              We may revise these terms and conditions from time to time. Revised terms and conditions will apply 
              to the use of this website from the date of publication. Please check this page regularly to ensure 
              you are familiar with the current version.
            </p>
          </div>

          <div className="terms-section">
            <h2>7. Entire agreement</h2>
            <p>
              These terms and conditions, together with our <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
              <Link to="/cookie-policy">Cookie Policy</Link>, constitute the entire agreement between you and us 
              in relation to your use of this website, and supersede all previous agreements in respect of your 
              use of this website.
            </p>
          </div>

          <div className="terms-section">
            <h2>8. Contact</h2>
            <p>
              If you have any questions about these terms and conditions, please contact us by email at{' '}
              <a href="mailto:adedeji.adewale2022@gmail.com">adedeji.adewale2022@gmail.com</a>.
            </p>
          </div>

          <div className="terms-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-gray)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', opacity: 0.7 }}>
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
