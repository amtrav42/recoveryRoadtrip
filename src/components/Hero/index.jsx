import React from 'react';
import Button from 'components/Button';
import * as styles from './styles.js';

const {
  Container,
} = styles;


const Hero = () => {
  return (
    <Container>
      <Button />
      <h2>Ready to Roadtrip? <br />Download your South Gippsland guide now</h2>
    </Container>
  );
};

export default Hero;
