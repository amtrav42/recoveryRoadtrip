import React from 'react';
import Nav from 'components/Nav';
import * as styles from './styles.js';

const {
  Container,
} = styles;


const Header = () => {
  return (
    <Container>
      <h1>Recovery Roadtrip</h1>
      <Nav />
    </Container>
  );
};

export default Header;
