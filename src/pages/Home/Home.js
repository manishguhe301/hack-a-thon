import React from 'react';
import styled from 'styled-components';
import HeroSection from '../../components/HeroSection/HeroSection';

const Wrapper = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <Wrapper>
      <HeroSection />
    </Wrapper>
  );
};

export default Home;
