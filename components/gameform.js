import React from 'react';

export default function GameForm(){
  return <form style={{background: '#4ECDC4', width: '50%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '30px', paddingBottom: '5px', borderRadius: '5px'}}>
       <label htmlFor="guess"></label>
       <input type="number" id="guess" placeholder="Enter Your Guess" style={{display: 'block', width: '50%', height: '30px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '30px', borderRadius: '4px', fontSize: '1.5em', lineHeight: '2.1em', textAlign: 'center', background: '#BFB6BB', border: '1px solid #FFFFFF'}} required/>
       <button type="submit" style={{display: 'block', width: '51%', height: '35px', marginLeft: 'auto', marginRight: 'auto', borderRadius: '4px', fontSize: '1rem', background: '#BFB6BB', border: '1px solid #FFFFFF'}}>Guess</button>
  </form>;

}
