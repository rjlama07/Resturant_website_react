import React from 'react';



import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{
    margin: '1rem'
  }}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="" />
  </div>
);

export default SubHeading;
