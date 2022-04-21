import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Hobart, Tasmania, Australia Shop2-3/73-75 Main Road Moonah</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Thu: 11:30-15:30, 17:00-20:30</p>
        <p className="p__opensans">Fri - Sat: 12:00-15:30, 17:00-21:30</p>
        <p className="p__opensans">Sun: 17:00-20:30</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.souta} alt="finus_img" />
    </div>
  </div>
  
);

export default FindUs;
