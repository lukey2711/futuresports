import React from 'react';
import ImageCarousel from './ImageCarousel';

//Define function
const LatestUpdates = () => {
  return (
//Define the section with ID
    <section id="updates" className="section">
      <h2 className="section-title">Latest Updates</h2>
      <p className="section-description">Clips from the latest games</p>
      <ImageCarousel />
      <div className="video-player">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/nP8vpK7lPtA?autoplay=1&mute=1"
          title="Cricket Video"
        //Title attribute for content
        ></iframe>
      </div>
    </section>
  );
};

export default LatestUpdates;
