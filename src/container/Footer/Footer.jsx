import React from 'react';
import { FooterOverlay, Newsletter } from "../../components"
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import './Footer.css';
import { images } from '../../constants';


const Footer = () => (
  <div className='app__footer section__padding' id='footer'>
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contacts'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Lorem Ipsum Lorem Ipsum Lorem Ips</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.logojpg} alt="logo" />
        <p className='p__opensans'>"The BBQ that everyone is invited to.”</p>
        <img src={images.spoon} alt="spoon_img" style={{
          marginTop: '15px'

        }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Wroking Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am -12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00am -11:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Genius Technology All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
