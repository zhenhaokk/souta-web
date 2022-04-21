import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>SOUTA is an affordably-priced restaurant serving Kyoto style dishes prepared under the guidance of Masako Yoshimura, a food specialist, registered dietitian, and Kyoto local food coordinator. A range of course meals and a la carte dishes to suit a range of budgets are available, so these nourishing dishes made from Kyoto's vegetables and high quality green tea are accessible to all. </p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;