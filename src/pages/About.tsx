import React from 'react';
import Container from '../components/Container';
import NavBar from '../components/NavBar';
import AboutContent from '../components/AboutContent';

const About: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <AboutContent />
    </Container>
  );
}

export default About;
