import React from 'react';
import * as styles from './styles.js';

const {
  Container,
} = styles;


const Footer = () => {
  return (
    <Container>
      Thank you for visiting recovery roadtrip. Please CONTACT US HERE if you would like more information or to suggest roadtrips!<br />
      Copyright {(new Date()).getFullYear()} Recovery Roadtrip.
    </Container>
  );
};

export default Footer;
