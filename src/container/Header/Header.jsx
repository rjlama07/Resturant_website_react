import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { scroller } from 'react-scroll';

const Header = () => (
  <div className='app__header app__wrapper section__padding id="/'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Savory Flavor of Lebanon</h1>
      <p className='p__opensans' style={{
        margin: '2rem 0',
        color: '#010101',
      }}>
        Our restaurant specializes in the art of barbecue, bringing together a symphony of smoky flavors and savory delights. We take pride in crafting a menu inspired by various barbecue traditions, offering a unique and mouthwatering experience for our guests
      </p>
      <button className='custom__button' type='button' onClick={() => {
        scroller.scrollTo('Menu', {
          smooth: true,
          offset: 50,
          duration: 2,
        });
      }}>Explore Menu</button>

    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
