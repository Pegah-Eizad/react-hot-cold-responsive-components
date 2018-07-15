import React from 'react';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';

const Header = (props) => (
  <div>
    <ScreenClassRender render={screenClass => (
      <h1 style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem', width:'48%', paddingTop: '1em', paddingBottom: '1em', paddingLeft: '1%', paddingRight: '1%', marginLeft:'auto', marginRight:'auto', marginBottom: '0', background:'#FF595E', color: '#000000', borderRadius: '5px', textAlign: 'center', fontFamily: '\'Tajawal\', sans-serif' }} >
        {props.feedback}
      </h1>
    )}
    />
  </div>
);

export default Header;
