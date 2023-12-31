import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.logojpg} alt="g letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt="spoon" className='spoon_img' />
        <p className='p__opensans'>Discover The Lebanese BBQ, Hurstville's hub for authentic Lebanese cuisine since November 9, 2023. Specializing in BBQ delights like lamb, chicken, wagyu, and kafta, our commitment extends beyond food. Join us on a culinary journey to experience the vibrant streets of Lebanon. At The Lebanese BBQ, we redefine the essence of authentic Lebanese BBQ</p>
        <button className='custom__button' type='button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.meat} alt="about_knife" />

      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="spoon" className='spoon_img' />
        <p className='p__opensans'>Discover The Lebanese BBQ, Hurstville's hub for authentic Lebanese cuisine since November 9, 2023. Specializing in BBQ delights like lamb, chicken, wagyu, and kafta, our commitment extends beyond food. Join us on a culinary journey to experience the vibrant streets of Lebanon. At The Lebanese BBQ, we redefine the essence of authentic Lebanese BBQ</p>
        <button className='custom__button' type='button'>Know More</button>
      </div>




    </div>
  </div>
);

export default AboutUs;
