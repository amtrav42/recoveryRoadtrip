import React from 'react';
import Nav from 'components/Nav';
import logo from 'assets/images/logo.jpeg';
import * as styles from './styles.js';

const {
  Container,
  Logo,
} = styles;


const Header = () => {
  return (
    <Container>
      <h1>Recovery Roadtrip</h1>
      <Logo src={logo} />
      <Nav />
    </Container>
  );
};

export default Header;
