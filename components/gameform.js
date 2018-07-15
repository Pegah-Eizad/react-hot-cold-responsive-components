import React from 'react';

export default class GameForm extends React.Component {
    constructor(props) {
        super(props);
    }

    buttonClicked(){
      return true;
    }

    onSubmit(event){
      event.preventDefault();
      const num = this.numInput.value.trim();
      if (this.props.onInputChange && !this.props.winStatus){
        if (num < 0 || num > 100){
          alert('The number must be between 0-100!')
        } else {
          this.props.onInputChange(num);
        }
      }
      else if (this.props.onInputChange && this.props.winStatus && this.buttonClicked()){
        alert('You\'ve won the game already ;)');
      }
      this.numInput.value = '';
    }

    render() {
        return (
          <form onSubmit={e => this.onSubmit(e)} style={{background: '#4ECDC4', width: '50%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '30px', paddingBottom: '5px', borderRadius: '5px'}}>
             <label htmlFor="guess"></label>
             <input type="number" id="guess" ref={input => this.numInput = input} placeholder="Enter Your Guess" style={{display: 'block', width: '50%', height: '30px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '30px', borderRadius: '4px', fontSize: '1.5em', lineHeight: '2.1em', textAlign: 'center', background: '#BFB6BB', border: '1px solid #FFFFFF'}} required/>
             <button type="submit" style={{display: 'block', width: '51%', height: '35px', marginLeft: 'auto', marginRight: 'auto', borderRadius: '4px', fontSize: '1rem', background: '#BFB6BB', border: '1px solid #FFFFFF'}}>Guess</button>
        </form>
        );
  }

}
