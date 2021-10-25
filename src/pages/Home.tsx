import React from 'react';
import Container from '../components/Container';
import NavBar from '../components/NavBar';
import HomeContent from '../components/HomeContent';

const Home: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <HomeContent />
    </Container>
  );
}

export default Home;
