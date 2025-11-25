import React from 'react';

const StoryPreview = () => {
  return (
    <section className="story-preview">
      <div className="story-container">
        <div className="story-content">
          <h2>From Lagos to Wales to the world</h2>
          <p>
            Osama was born in Lagos, Nigeria, and moved to the United Kingdom in 2019, 
            arriving in Cardiff as a student with a laptop, a vision and no safety net.
          </p>
          <p>
            In lecture halls and student unions, he realised entire communities were missing 
            from the stages, playlists and rooms around him. What began as helping at small 
            events quickly turned into producing his own nights, learning how to pull a crowd 
            without a big budget or a famous brand behind him.
          </p>
          <div className="story-quote">
            <p>
              "I did not just want to put on nights. I wanted to prove that if you really 
              back a community, they become your biggest growth engine."
            </p>
          </div>
          <a className="story-link" href="#story">Read Osama's story →</a>
        </div>
        <div className="story-image">
          <img src="/images/story-image.jpg" alt="Osama speaking" />
        </div>
      </div>
    </section>
  );
};

export default StoryPreview;