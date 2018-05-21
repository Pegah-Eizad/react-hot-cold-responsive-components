import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import { setLocale, setTranslations } from 'react-i18nify';
import Header from './header.jsx'
import GameForm from './gameform.js';
import DisplayGuesses from './displayguesses.js'

setTranslations({
  en: {
    title: 'Awesome app with i18n!',
    date: 'MMMM Do, YYYY',
  },
  nl: {
    title: 'Toffe app met i18n!',
    date: 'D MMMM YYYY',
  },
});

setLocale('en');

class ExampleComponent extends React.Component {
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

  render = () => (
    <Container style={{width: '100%', background: '#5B1091', borderRadius: '10px', border: '2px solid #000000', boxShadow: '25px 25px 25px 0px rgba(11,15,24,1)', paddingBottom: '300px' }}>

    <h1 style={{color: 'white', textAlign: 'center', fontSize: '3.7em', fontFamily: '\'Passion One\', cursive'}}>HOT or COLD</h1>
      <Header />
      <GameForm />
      <ScreenClassRender render={screenClass => (
      <p style={{background: '#4ECDC4', fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem', width:'50%', width: '50%', height: '70px', marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto', borderRadius: '5px', textAlign: 'center', lineHeight: '4.5rem', fontFamily: '\'Tajawal\', sans-serif'}}> Guess# 0 </p>
      )}
      />
      <DisplayGuesses />
    </Container>
  );
}

export default ExampleComponent;
