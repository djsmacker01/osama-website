import React from 'react';

const VenturesHighlight = () => {
  return (
    <section className="ventures-highlight" id="ventures">
      <div className="venture-row">
        <div className="venture-text">
          <h2>OTID ENTERTAINMENT / OTID.AGENCY</h2>
          <p>The global marketing, events, media and festival company.</p>
          <p>Founded in 2023, OTID Entertainment and OTID.Agency work together to:</p>
          <ul>
            <li>Design and deliver live experiences, festivals and branded events</li>
            <li>Build marketing systems and ticketing funnels that scale</li>
            <li>Produce media and content around launches and campaigns</li>
            <li>Partner with brands, platforms and institutions that want culture-led growth</li>
          </ul>
          <button className="btn-primary">EXPLORE OTID</button>
        </div>
        <div className="venture-image">
          <img src="/images/otid-image.jpg" alt="OTID Entertainment" />
        </div>
      </div>

      <div className="venture-row reverse">
        <div className="venture-text">
          <h2>AFROWALES</h2>
          <p>
            Amplifying underrepresented voices through inclusive events, festivals and youth 
            engagement. ✨ Be seen, heard and valued.
          </p>
          <p>Founded in 2021, Afrowales focuses on:</p>
          <ul>
            <li>Inclusive events and club nights</li>
            <li>Youth music festivals and showcases</li>
            <li>School, college and university collaborations</li>
            <li>Community projects and charity drives</li>
          </ul>
          <button className="btn-primary">DISCOVER AFROWALES</button>
        </div>
        <div className="venture-image">
          <img src="/images/afrowales-image.jpg" alt="Afrowales" />
        </div>
      </div>
    </section>
  );
};

export default VenturesHighlight;