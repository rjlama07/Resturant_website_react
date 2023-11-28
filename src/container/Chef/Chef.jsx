import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img_reverse'>
      <img src={images.chef} alt="Chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"></SubHeading>
      <h1 className='headtext__cormorant'> What We Believe In</h1>
      <div className='app__chef_content'>
        <div className='app__chef_content_quote'>
          <img src={images.quote} alt="Quotes" />
          <p className='p__opensans'>Cooking is like painting or writing a song.</p>
        </div>
        <p className='p__opensans'>Just as there are only so many notes or colors, there are only so many flavors - it's how you combine them that sets you apart.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>

  </div>
);

export default Chef;
