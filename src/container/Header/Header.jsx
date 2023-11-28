import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className='app__header app__wrapper section__padding id="home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      <p className='p__opensans' style={{
        margin: '2rem 0'
      }}>
        Our restaurant specializes in the art of barbecue, bringing together a symphony of smoky flavors and savory delights. We take pride in crafting a menu inspired by various barbecue traditions, offering a unique and mouthwatering experience for our guests
      </p>
      <button className='custom__button' type='button'>Explore Menu</button>

    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
