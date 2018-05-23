import React from 'react';

export default class displayGuesses extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      guessedNumbers: this.props.guesses
    }
  }

  render(){
    let guesses = this.state.guessedNumbers.map((guess, index) =>
      <ul key={index} style={{display: 'inline', background: '#1a4e95', padding: '0.3em', borderRadius: '4px', color: 'white', margin: '0.2em'}}>
        {guess}
      </ul>
    );
    return <div style={{width:'48%', height: '100px', background: '#FFD23F', marginLeft: 'auto', marginRight: 'auto', borderRadius: '5px', marginTop: '0', paddingTop: '20px', paddingLeft: '1%', paddingRight: '1%'}}>
        {guesses}
     </div>;
  }

}
