import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer';

const CookiePolicy = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.cookie-hamburger') && !event.target.closest('.cookie-nav-links')) {
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
    <div className="cookie-policy-page">
      {/* Yellow Banner Header */}
      <motion.div 
        className="cookie-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="cookie-header-content">
          <div className="cookie-header-top">
            <div 
              className="cookie-logo" 
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }}
            >
              NURUDEEN ADEDEJI
            </div>
            <motion.div 
              className={`cookie-hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <span></span>
              <span></span>
              <span></span>
            </motion.div>
            <ul className={`cookie-nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/terms-and-conditions" onClick={() => setIsMobileMenuOpen(false)}>Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" onClick={() => setIsMobileMenuOpen(false)}>Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" onClick={() => setIsMobileMenuOpen(false)}>Cookie Policy</Link></li>
            </ul>
          </div>
          <h1 className="cookie-title">COOKIE POLICY</h1>
        </div>
      </motion.div>

      {/* Black Content Area */}
      <motion.div 
        className="cookie-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="cookie-content-wrapper">
          <div className="cookie-section">
            <h2>Scope of this policy</h2>
            <p>
              Nurudeen Adedeji (we or us or our) uses cookies when you visit this website (the Website) to help customise 
              the Website and improve your experience using the Website.
            </p>
            <p>
              This policy applies between you, the user of this Website, and us, Nurudeen Adedeji, the owner and provider 
              of this Website.
            </p>
            <p>
              When you visit the Website, and before your Website places cookies on your computer, you will be presented 
              with a message bar requesting your consent to set those cookies. By giving your consent to the placing of cookies, 
              you are enabling us to provide a better experience and service. You may, if you wish, deny consent to the placing 
              of these cookies; however, certain features of the Website may not function fully or as intended.
            </p>
            <p>
              This cookie policy should be read alongside, and in addition to, our Privacy Policy, which can be found at: 
              <a href="/privacy-policy"> /privacy-policy</a>.
            </p>
          </div>

          <div className="cookie-section">
            <h2>What are cookies?</h2>
            <p>
              A cookie is a small text file placed on your computer by this Website when you visit certain parts of the Website 
              and/or when you use certain features of the Website.
            </p>
            <p>
              This Website may place and access certain cookies on your computer. We use these cookies to improve your experience 
              of using the Website.
            </p>
            <p>
              Cookies do not usually contain any information that personally identifies you, the Website user. However, personal 
              information that we store about you may be linked to the information obtained from and stored in cookies. For more 
              information on how such personal information is handled and stored, refer to our Privacy Policy which is available 
              online at: <a href="/privacy-policy">/privacy-policy</a>.
            </p>
          </div>

          <div className="cookie-section">
            <h2>Types of cookies</h2>
            <p>This Website uses the following cookies:</p>
            
            <div className="cookie-table">
              <table>
                <thead>
                  <tr>
                    <th>Type of cookie</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Strictly necessary cookies</strong></td>
                    <td>
                      These are cookies that are required for the operation of the Website. They include, for example, cookies 
                      that enable you to log into secure areas of the Website, use a shopping cart or make use of e-billing services.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Analytical/performance cookies</strong></td>
                    <td>
                      These cookies allow us to recognise and count the number of visitors and to see how visitors move around our 
                      Website when they are using it. This helps us to improve the way our Website works, for example, by ensuring 
                      that users are finding what they are looking for easily.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Functionality cookies</strong></td>
                    <td>
                      These are used to recognise you when you return to our Website. This enables us to personalise our content for 
                      you, greet you by name and remember your preferences (for example, your choice of language or region). By using 
                      the Website, you agree to our placement of functionality cookies.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Targeting cookies</strong></td>
                    <td>
                      These cookies record your visit to our Website, the pages you have visited and the links you have followed. 
                      We will use this information to make our Website and the advertising displayed on it more relevant to your interests. 
                      We may also share this information with third parties for this purpose.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              You can find a list of the cookies that we use in the attached Cookie Schedule.
            </p>
            <p>
              We have carefully chosen these cookies and have taken steps to ensure that your privacy is protected and respected at all times.
            </p>
          </div>

          <div className="cookie-section">
            <h2>How to control your cookies</h2>
            <p>
              You can choose to enable or disable cookies in your internet browser. By default, most internet browsers accept cookies 
              but this can be changed. For further details, please see the help menu in your internet browser.
            </p>
            <p>
              You can switch off cookies at any time, however, you may lose information that enables you to access the Website more 
              quickly and efficiently.
            </p>
            <p>
              It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance 
              provided by the developer of your internet browser if you are unsure about adjusting your privacy settings.
            </p>
            <p>
              For more information generally on cookies, including how to disable them, please refer to{' '}
              <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>. You will also 
              find details on how to delete cookies from your computer.
            </p>
          </div>

          <div className="cookie-section">
            <h2>Changes to this policy</h2>
            <p>
              Nurudeen Adedeji reserves the right to change this cookie policy as we may deem necessary from time to time or as may 
              be required by law. Any changes will be immediately posted on the Website and you are deemed to have accepted the terms 
              of the cookie policy on your first use of the Website following the alterations.
            </p>
          </div>

          <div className="cookie-section">
            <h2>Contact details</h2>
            <p>
              The Website is owned by Nurudeen Adedeji.
            </p>
            <p>You may contact us:</p>
            <ul>
              <li>by email at <a href="mailto:adedeji.adewale2022@gmail.com">adedeji.adewale2022@gmail.com</a>.</li>
              <li>using the contact form on the Website.</li>
            </ul>
          </div>

          <div className="cookie-section">
            <h2>Cookies</h2>
            <p>
              Below is a list of the cookies that we use. We have tried to ensure this is complete and up to date, but if you think 
              that we have missed a cookie or there is any discrepancy, please let us know.
            </p>

            <div className="cookie-schedule">
              <h3>Strictly necessary</h3>
              <p>We use the following strictly necessary cookies:</p>
              <table>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2" style={{ textAlign: 'center', fontStyle: 'italic' }}>
                      Currently no strictly necessary cookies are in use.
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>Functionality</h3>
              <p>We use the following functionality cookies:</p>
              <table>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2" style={{ textAlign: 'center', fontStyle: 'italic' }}>
                      Currently no functionality cookies are in use.
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>Analytical/performance</h3>
              <p>We use the following analytical/performance cookies:</p>
              <table>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>_gid</strong></td>
                    <td>
                      Installed by Google Analytics, _gid cookie stores information on how visitors use a website, while also creating 
                      an analytics report of the website's performance. Some of the data that are collected include the number of visitors, 
                      their source, and the pages they visit anonymously.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>_gat_UA-*</strong></td>
                    <td>
                      A variation of the _gat cookie set by Google Analytics and Google Tag Manager to allow website owners to track visitor 
                      behaviour and measure site performance. The pattern element in the name contains the unique identity number of the account 
                      or website it relates to.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>_ga_*</strong></td>
                    <td>
                      This cookie is installed by Google Analytics.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>_ga</strong></td>
                    <td>
                      The _ga cookie, installed by Google Analytics, calculates visitor, session and campaign data and also keeps track of site 
                      usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number 
                      to recognize unique visitors.
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>Targeting</h3>
              <p>We use the following targeting cookies:</p>
              <table>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2" style={{ textAlign: 'center', fontStyle: 'italic' }}>
                      Currently no targeting cookies are in use.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="cookie-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-gray)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', opacity: 0.7 }}>
              This cookie policy was created using a document from Rocket Lawyer (
              <a href="https://www.rocketlawyer.com/gb/en" target="_blank" rel="noopener noreferrer">https://www.rocketlawyer.com/gb/en</a>).
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', opacity: 0.7 }}>
              This policy was created on {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;

