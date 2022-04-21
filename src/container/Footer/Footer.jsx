import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Hobart, Tasmania, Australia Shop2-3/73-75 Main Road Moonah</p>
        <p className="p__opensans">(03) 6228 1659</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.souta} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Thursday:</p>
        <p className="p__opensans">11:30-15:30, 17:00-20:30</p>
        <p className="p__opensans">Friday:</p>
        <p className="p__opensans">12:00-15:30, 17:00-21:30</p>
        <p className="p__opensans">Saturday:</p>
        <p className="p__opensans">17:00-20:30</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 SOUTA. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
