import React from 'react';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';

const ResponsiveUtilities = () => (
  <div>



    <ScreenClassRender render={screenClass => (
      <h1 style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem', width:'50%', height:'70px', marginLeft:'auto', marginRight:'auto', marginBottom: '0', background:'#FF595E', lineHeight: '2.1em', borderRadius: '5px', textAlign: 'center' }} >
        Make Your Guess!
      </h1>
    )}
    />
  </div>
);

ResponsiveUtilities.title = 'ResponsiveUtilities';

export default ResponsiveUtilities;
