import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='Meny'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your pallet' />
      <h1 className='headtext__cormorant'>Todays Special</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wines, index) => (
            <MenuItem key={wines.title + index} title={wines.title} price={wines.price} tags={wines.tags}></MenuItem>
          )
          )}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="Menu image" />
      </div>
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}></MenuItem>
          )
          )}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
      <button className='custom__button' type='button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
