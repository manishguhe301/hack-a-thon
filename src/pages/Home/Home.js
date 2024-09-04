import React from 'react';
import styled from 'styled-components';
import HeroSection from '../../components/HeroSection/HeroSection';
import Achievements from '../../components/Achievements/Achievements';

const Wrapper = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <Wrapper>
      <HeroSection />
      <Achievements />
    </Wrapper>
  );
};

export default Home;
