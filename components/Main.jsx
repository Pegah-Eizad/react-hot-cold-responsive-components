import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import Rules from './rules.jsx';
import Header from './header.jsx';
import GameForm from './gameform.js';
import DisplayGuesses from './displayguesses.js';


class GameApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      randomNum: Math.floor(Math.random() * 101),
      currentGuess: 0,
      feedback: 'Make Your Guess!',
      guessedNumbers: [],
      gameWon: false,
      numTries: 0,
      rulesClicked: false
    };
  }
  static propTypes = {
    serverSideScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  };

  static defaultProps = {
    serverSideScreenClass: 'xl',
  }

  static childContextTypes = {
    serverSideScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    breakpoints: PropTypes.arrayOf(PropTypes.number),
  };

  getChildContext = () => ({
    serverSideScreenClass: this.props.serverSideScreenClass,
    breakpoints: [576, 768, 800, 1200],
  });

  updateState(num){
    this.setState({
      currentGuess: num,
      guessedNumbers: [...this.state.guessedNumbers, num],
      numTries: this.setNumberofGuesses(),
      feedback: this.setFeedback(num)
    });
  }

  setFeedback(num){
    let hotRange = {
      high: this.state.randomNum + 20,
      low: this.state.randomNum - 20
    };
    let kindaHotRange = {
      high: hotRange.high + 10,
      low: hotRange.low - 10
    };
    if(num == this.state.randomNum){
      return(this.handleWin());
    }
    else if (num <= hotRange.high && num >= hotRange.low){
      return('Hot');
    }
    else if (num <= kindaHotRange.high && num >= hotRange.high || num >= kindaHotRange.low && num <= hotRange.low){
      return('Kinda Hot');
    }
    else{
      return('Cold');
    }
  }

  setNumberofGuesses(){
    let numGuesses = this.state.numTries;
    numGuesses++;
    return numGuesses;
  }

  handleWin(){
      this.setState({
        gameWon: true,
        numTries: this.setNumberofGuesses()
      });
      alert('You Win!');
      return('You\'ve guessed it!! You win! Press \"Guess Again" to play again');
  }

  handleClick(e){
    console.log(e);
  }


  render = () => (
    <Container style={{width: '100%', background: '#5B1091', borderRadius: '10px', border: '2px solid #000000', boxShadow: '25px 25px 25px 0px rgba(11,15,24,1)', paddingBottom: '300px' }}>
      <h1 style={{color: 'white', textAlign: 'center', fontSize: '3.7em', fontFamily: '\'Passion One\', cursive'}}>HOT or COLD</h1>
      <Rules click={this.state.rulesClicked}/>
      <Header feedback={this.state.feedback}/>
      <GameForm winStatus={this.state.gameWon} val={this.state.currentGuess} onInputChange={num => this.updateState(num)}/>
      <ScreenClassRender render={screenClass => (
          <p style={{background: '#4ECDC4', fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem', width:'50%', width: '50%', height: '70px', marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto', borderRadius: '5px', textAlign: 'center', lineHeight: '4.5rem', fontFamily: '\'Tajawal\', sans-serif'}}> Guess# {this.state.numTries} </p>
      )}
      />
      <DisplayGuesses guesses={this.state.guessedNumbers}/>
    </Container>
  );
}

export default GameApp;
