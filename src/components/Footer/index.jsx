import React from 'react';
import * as styles from './styles.js';

const {
  Container,
} = styles;


const Footer = () => {
  return (
    <Container>
      Copyright {(new Date()).getFullYear()} Recovery Roadtrip.
    </Container>
  );
};

export default Footer;
