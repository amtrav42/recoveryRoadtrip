import React from 'react';
import Header from 'components/Header';
import Hero from 'components/Hero';
import BodyContent from 'components/BodyContent';
import EmailSignup from 'components/EmailSignup';
import Footer from 'components/Footer';

// Declare a class called Template, it's a prototype of the base react component//
const Template = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BodyContent />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Template;
