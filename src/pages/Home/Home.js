import React from 'react';
import styled from 'styled-components';
import HeroSection from '../../components/HeroSection/HeroSection';
import Achievements from '../../components/Achievements/Achievements';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSections';
import ExploreChallenges from '../../components/ExploreChallenges/ExploreChallenges';

const Wrapper = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <Wrapper>
      <HeroSection />
      <Achievements />
      <BenefitsSection />
      <ExploreChallenges />
    </Wrapper>
  );
};

export default Home;
