import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images'
import { Link, scroller } from 'react-scroll';

import './Navbar.css';

const Navbar = () => {
  const [togglemenu, setTogglemenu] = useState(false);

  return <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.logojpg} alt="app_logo" />
    </div>
    <div>
      <ul className='app__navbar-links'>
        <li >
          <Link to="/" spy={true} smooth={true} offset={50} duration={2}>Home</Link>

        </li>
        <li >
          <Link to="about" spy={true} smooth={true} offset={50} duration={2}>About</Link>

        </li>
        <li >
          <Link to="Menu" spy={true} smooth={true} offset={50} duration={2}>Menu</Link>

        </li>
        <li >
          <Link to="gallery" spy={true} smooth={true} offset={50} duration={2}>Gallery</Link>
        </li>
        <li >
          <Link to="footer" spy={true} smooth={true} offset={50} duration={2}>Contact</Link>
        </li>
      </ul>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#171717' fontSize={27} onClick={() => {
          setTogglemenu(true);
        }} />
        {togglemenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => { setTogglemenu(false); }} />
            <ul className='app__navbar-smallscreen-links'>
              <li className='p__opensans'>
                <Link to="/" spy={true} smooth={true} offset={50} duration={2} onClick={() => {
                  scroller.scrollTo('/', {
                    smooth: true,
                    offset: 50,
                    duration: 2,
                  });
                  setTogglemenu(false);

                }}>Home</Link>
              </li>
              <li className='p__opensans'>
                <Link to="about" spy={true} smooth={true} offset={50} duration={2} onClick={() => {
                  scroller.scrollTo('about', {
                    smooth: true,
                    offset: 50,
                    duration: 2,
                  });
                  setTogglemenu(false);

                }}>About</Link>
              </li>
              <li className='p__opensans'>
                <Link to="menu" spy={true} smooth={true} offset={50} duration={2} onClick={() => {
                  scroller.scrollTo('menu', {
                    smooth: true,
                    offset: 50,
                    duration: 2,
                  });
                  setTogglemenu(false);

                }}>Menu</Link>
              </li>
              <li className='p__opensans'>
                <Link to="gallery" spy={true} smooth={true} offset={50} duration={2} onClick={() => {
                  scroller.scrollTo('gallery', {
                    smooth: true,
                    offset: 50,
                    duration: 2,
                  });
                  setTogglemenu(false);

                }}>Gallery</Link>
              </li>
              <li className='p__opensans'>
                <Link to="footer" spy={true} smooth={true} offset={50} duration={2} onClick={() => {
                  scroller.scrollTo('footer', {
                    smooth: true,
                    offset: 50,
                    duration: 2,
                  });
                  setTogglemenu(false);

                }}>Contact</Link>
              </li>
            </ul>

          </div>
        )}
      </div>
    </div>

  </nav>

}

export default Navbar;
