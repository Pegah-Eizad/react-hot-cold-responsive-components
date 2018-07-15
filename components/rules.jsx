import React from 'react';
import { ScreenClassRender } from 'react-grid-system';

const Rules = (props) => (
  <div>
    <ScreenClassRender render={screenClass => (
      <div style={{display: 'inline', position: 'absolute'}}>
        <button style={{background: 'red', position: 'relative', display: 'inline-block', width: '100px', height: '30px', borderRadius: '5px'}}>
        Rules</button>
      </div>
    )}
    />
  </div>
);

export default Rules;
