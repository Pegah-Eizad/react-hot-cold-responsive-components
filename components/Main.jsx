import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import { setLocale, setTranslations } from 'react-i18nify';
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
      guessedNumbers: []
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
    console.log('Should be updating currentGuess to ' + num);
    this.setState({
      currentGuess: num,
      feedback: this.setFeedback(num),
      guessedNumbers: this.setGuessedNumbersArray(num)
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
    console.log('inside setFeedback and currentGuess is: ' + num);
    if (num <= hotRange.high && num >= hotRange.low){
      return('Hot');
    }
    else if (num <= kindaHotRange.high && num >= hotRange.high || num >= kindaHotRange.low && num <= hotRange.low){
      return('Kinda Hot');
    }
    else{
      return('Cold');
    }
  }

  setGuessedNumbersArray(num){
    let arr = this.state.guessedNumbers;
    arr[arr.length] = num;
    return arr;
  }

  render = () => (
    <Container style={{width: '100%', background: '#5B1091', borderRadius: '10px', border: '2px solid #000000', boxShadow: '25px 25px 25px 0px rgba(11,15,24,1)', paddingBottom: '300px' }}>
      <h1 style={{color: 'white', textAlign: 'center', fontSize: '3.7em', fontFamily: '\'Passion One\', cursive'}}>HOT or COLD</h1>
      <Header feedback={this.state.feedback}/>
      <GameForm val={this.state.currentGuess} onInputChange={num => this.updateState(num)}/>
      <ScreenClassRender render={screenClass => (
      <p style={{background: '#4ECDC4', fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem', width:'50%', width: '50%', height: '70px', marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto', borderRadius: '5px', textAlign: 'center', lineHeight: '4.5rem', fontFamily: '\'Tajawal\', sans-serif'}}> Guess# 0 </p>
      )}
      />
      <DisplayGuesses guesses={this.state.guessedNumbers}/>
    </Container>
  );
}

export default GameApp;
