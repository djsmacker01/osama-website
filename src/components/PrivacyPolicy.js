import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.privacy-hamburger') && !event.target.closest('.privacy-nav-links')) {
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
    <div className="privacy-policy-page">
      {/* Yellow Banner Header */}
      <motion.div 
        className="privacy-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="privacy-header-content">
          <div className="privacy-header-top">
            <div 
              className="privacy-logo" 
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }}
            >
              NURUDEEN ADEDEJI
            </div>
            <motion.div 
              className={`privacy-hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <span></span>
              <span></span>
              <span></span>
            </motion.div>
            <ul className={`privacy-nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/terms-and-conditions" onClick={() => setIsMobileMenuOpen(false)}>Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" onClick={() => setIsMobileMenuOpen(false)}>Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" onClick={() => setIsMobileMenuOpen(false)}>Cookie Policy</Link></li>
            </ul>
          </div>
          <h1 className="privacy-title">PRIVACY POLICY</h1>
        </div>
      </motion.div>

      {/* Black Content Area */}
      <motion.div 
        className="privacy-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="privacy-content-wrapper">
          <p className="privacy-intro">
            This privacy policy applies between you, and Nurudeen Adedeji (us or we). 
            Nurudeen Adedeji operates as an individual entrepreneur and is registered as a Data Controller.
          </p>

          <div className="privacy-note">
            <h2>Please note:</h2>
            <ul>
              <li>
                This privacy policy will inform you as to how we look after your personal data when you visit our website 
                (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </li>
              <li>
                We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, 
                religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information 
                about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.
              </li>
              <li>
                If you have any queries, need to update your personal data or wish to exercise your rights then please contact us on 
                <a href="mailto:adedeji.adewale2022@gmail.com"> adedeji.adewale2022@gmail.com</a>.
              </li>
              <li>
                We use a CRM (i.e. direct marketing / client relationship portal) operated by a US Provider.
              </li>
              <li>
                We take the privacy of your information very seriously. This privacy policy is for any person who shares with us their personal data. 
                These may include anyone who accesses this website whether to browse, sign up to direct marketing or to contact us. The processing of 
                the personal data by us relating to any services, speaking engagements, or business inquiries is covered by this policy. You understand 
                that from time to time there will be other services, information and products offered by us – the extent to which we need to process 
                your personal data will be as set out in this policy or any revision.
              </li>
              <li>
                The use of "cookies" – small text file placed on your computer by this Website when you visit certain parts of the Website and/or when 
                you use certain features of the Website is set out in a separate policy.
              </li>
              <li>
                This privacy policy does not extend to any websites that can be accessed from this Website including, but not limited to, any links we 
                may provide to social media websites. We have no control over such websites and are not responsible for the content of these websites. 
                This privacy policy does not extend to your use of such websites. You are advised to read the privacy policy or statement of other 
                websites prior to using them.
              </li>
              <li>
                We will not sell or assist a third party monetise your personal data.
              </li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Definitions</h2>
            <p>In this privacy policy, the following definitions are used:</p>
            <ul>
              <li>
                <strong>Data:</strong> collectively all information that you submit to us via the Website. This definition incorporates, 
                where applicable, the definitions provided in the Data Protection Laws;
              </li>
              <li>
                <strong>Data Protection Laws:</strong> any applicable law relating to the processing of personal Data, including but not 
                limited to the GDPR, and any national implementing and supplementary laws, regulations and secondary legislation;
              </li>
              <li>
                <strong>GDPR:</strong> the UK General Data Protection Regulation
              </li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Scope of this privacy policy</h2>
          </div>

          <div className="privacy-section">
            <h2>Data collected</h2>
            <p>We may collect the following Data, which includes personal Data, from you:</p>
            <ul>
              <li>name;</li>
              <li>contact Information such as email addresses and telephone numbers;</li>
              <li>demographic information such as postcode, preferences and interests;</li>
              <li>IP address (automatically collected);</li>
              <li>web browser type and version (automatically collected);</li>
              <li>operating system (automatically collected);</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>How we collect Data</h2>
            <p>We collect Data in the following ways:</p>
            <ul>
              <li>Data is given to us by you:
                <ul>
                  <li>when you contact us through the Website, by telephone, post, e-mail or through any other means;</li>
                  <li>when you register with us and set up an account to receive or purchase our products/services;</li>
                  <li>when you complete surveys that we use for research purposes (although you are not obliged to respond to them);</li>
                  <li>when you enter a competition or promotion through a social media channel;</li>
                  <li>when you receive marketing communications from us;</li>
                  <li>when you use our services;</li>
                  <li>in each case, in accordance with this privacy policy.</li>
                </ul>
              </li>
              <li>data is received from other sources; and</li>
              <li>data is collected automatically.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Data that is received from third parties</h2>
            <ul>
              <li>Facebook Inc;</li>
              <li>TikTok;</li>
              <li>LinkedIn;</li>
              <li>Mailchimp</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Data that is collected automatically</h2>
            <p>To the extent that you access the Website, we will collect your Data automatically, for example:</p>
            <ul>
              <li>
                we automatically collect some information about your visit to the Website. This information helps us to make improvements 
                to Website content and navigation, and includes your IP address, the date, times and frequency with which you access the 
                Website and the way you use and interact with its content.
              </li>
              <li>
                we will collect your Data automatically via cookies, in line with the cookie settings on your browser. For more information 
                about cookies, and how we use them on the Website, see our cookie policy.
              </li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Our use of Data</h2>
            <p>
              Any or all of the above Data may be required by us from time to time in order to provide you with the best possible service 
              and experience when using our Website. Specifically, Data may be used by us for the following reasons:
            </p>
            <ul>
              <li>internal record keeping;</li>
              <li>improvement of our products / services;</li>
              <li>new products / services;</li>
              <li>information regarding our business activities and new ventures;</li>
              <li>transmission by email of marketing materials that may be of interest to you;</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Lawful Basis of Data Processing</h2>
            <p>
              We may use your Data for the above purposes if we deem it necessary to do so for our legitimate interests. If you are not 
              satisfied with this, you have the right to object in certain circumstances (see the section headed "Your rights" below).
            </p>
            <p>
              We may include you in any direct marketing campaigns we will proceed on the assumption that your browsing of our Website and 
              giving us your contact details represents an "opt-in" or "soft-opt-in": A soft opt-in refers to where you have previously 
              engaged with us (for example, you registered with us or made enquiry of us, and we are promoting similar campaigns or activities). 
              If we deem that you have given us a "soft opt-in", we will market to and communicate with you unless you unsubscribe.
            </p>
            <p>
              if you are not satisfied with our approach to marketing, you have the right to unsubscribe at any time. Please see the section 
              headed "Your rights" below.
            </p>
            <p>
              When you register with us and set up an account to receive our services, the legal basis for this processing is the performance 
              of a contract between you and us and/or taking steps, at your request, to enter into such a contract.
            </p>
            <p>
              We may use your Data to share with you our adverts and other content on other websites. If you do not want us to use your data 
              to show you our adverts and other content on other websites, please turn off the relevant cookies (please refer to the Cookie Policy).
            </p>
          </div>

          <div className="privacy-section">
            <h2>Who we share Data with</h2>
            <p>
              We may share your Data with our employees, agents and/or professional advisors and third party payment providers.
            </p>
            <p>
              In order to fulfil the purposes of our data processing (our use of data) we work with a number of third party service providers. 
              We will make all appropriate checks so as to ensure that the security and privacy of your data is not compromised. In certain 
              circumstances we may have to disclose personal data to our advisors. The third party providers include CRM providers who we will 
              work with to conduct marketing and user engagement programmes.
            </p>
          </div>

          <div className="privacy-section">
            <h2>International Data Transfers</h2>
            <p>
              From time to time we work with external third parties who are based outside the UK. Their processing of your personal data will 
              involve a transfer of data outside the UK.
            </p>
            <p>
              Whenever we transfer your personal data out of the UK, we ensure a similar degree of protection is afforded to your personal data. 
              Where possible we will transfer your personal data to countries that have been deemed to provide an adequate level of protection for 
              personal data.
            </p>
            <p>
              Where this is not possible, we will ensure that the transfer of your personal data is done lawfully. We will make all prudent enquiry 
              of the credentials and processes of any third party.
            </p>
            <p>
              Please contact us if you want further information on the specific mechanism used by us when transferring your personal data out of the UK.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Keeping Data secure</h2>
            <p>
              We will use technical and organisational measures to safeguard your Data, for example access to your account is controlled by a password 
              and a user name that is unique to you. We store your Data on secure servers in the UK or EEA.
            </p>
            <p>
              Technical and organisational measures include measures to deal with any suspected data breach. If you suspect any misuse or loss or 
              unauthorised access to your Data, please let us know immediately by contacting us via this e-mail address: 
              <a href="mailto:adedeji.adewale2022@gmail.com"> adedeji.adewale2022@gmail.com</a>.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Data retention</h2>
            <p>Any marketing data can be deleted on request. We will delete marketing data that we deem to be out of date.</p>
            <p>Financial data will be retained for as long as required for us to retain financial data.</p>
          </div>

          <div className="privacy-section">
            <h2>Your rights</h2>
            <p>You have the following rights in relation to your Data:</p>
            <ul>
              <li><strong>Right to access</strong> - the right to request copies of the information we hold about you at any time.</li>
              <li><strong>Right to correct</strong> - the right to have your Data rectified if it is inaccurate or incomplete.</li>
              <li><strong>Right to erase</strong> - the right to request that we delete or remove your Data from our systems.</li>
              <li><strong>Right to restrict our use of your Data</strong> - the right to "block" us from using your Data or limit the way in which we can use it.</li>
              <li><strong>Right to data portability</strong> - the right to request that we move, copy or transfer your Data.</li>
              <li><strong>Right to object</strong> - the right to object to our use of your Data including where we use it for our legitimate interests.</li>
            </ul>
            <p>
              To make enquiries, exercise any of your rights set out above, or withdraw your consent to the processing of your Data (where consent 
              is our legal basis for processing your Data), please contact us via this e-mail address: 
              <a href="mailto:adedeji.adewale2022@gmail.com"> adedeji.adewale2022@gmail.com</a>. Please note:
            </p>
            <ul>
              <li>
                You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a 
                reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your 
                request in these circumstances;
              </li>
              <li>
                We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal 
                data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person 
                who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response;
              </li>
              <li>
                We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is 
                particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated;
              </li>
              <li>
                Where we are legally permitted to do so, we may refuse your request. If we refuse your request, we will tell you the reasons why.
              </li>
            </ul>
            <p>
              If you are not satisfied with the way a complaint you make in relation to your Data is handled by us, you may be able to refer your 
              complaint to the relevant data protection authority. For the UK, this is the Information Commissioner's Office (ICO). The ICO's contact 
              details can be found on their website at <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer">https://ico.org.uk/</a>.
            </p>
            <p>
              It is important that the Data we hold about you is accurate and current. Please keep us informed if your Data changes during the period 
              for which we hold it.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Changes of business ownership and control</h2>
            <p>
              We may, from time to time, expand or reduce our business and this may involve the sale and/or the transfer of control of all or part of 
              our business. Data provided by you and other subscribers, where it is relevant to any part of our business so transferred, be transferred 
              along with that part and the new owner or newly controlling party will, under the terms of this privacy policy, be permitted to use the 
              Data for the purposes for which it was originally supplied to us.
            </p>
            <p>
              We may also disclose Data to a prospective purchaser of our business or any part of it.
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

