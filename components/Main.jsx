import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';
import { setLocale, setTranslations } from 'react-i18nify';
import ResponsiveUtilities from './ResponsiveUtilities.jsx'
import Header from './header.js';
import GameForm from './gameform.js';

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
    <Container style={{width: '100%', background: '#5B1091', borderRadius: '10px', border: '2px solid #000000', boxShadow: '25px 25px 25px 0px rgba(11,15,24,1)', paddingBottom: '30px' }}>

    <h1 style={{color: 'white', textAlign: 'center', fontSize: '3.7em', fontFamily: '\'Passion One\', cursive'}}>HOT or COLD</h1>
      <ResponsiveUtilities />
      <GameForm />
    </Container>
  );
}

export default ExampleComponent;
