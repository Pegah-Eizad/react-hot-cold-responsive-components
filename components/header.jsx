import React from 'react';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';

const Header = (props) => (
  <div>
    <ScreenClassRender render={screenClass => (
      <h1 style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem', width:'50%', height:'90px', marginLeft:'auto', marginRight:'auto', marginBottom: '0', background:'#FF595E', color: '#000000', lineHeight: '6rem', borderRadius: '5px', textAlign: 'center', fontFamily: '\'Tajawal\', sans-serif' }} >
        {props.feedback}
      </h1>
    )}
    />
  </div>
);

export default Header;
