import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  padding: 15px;
  padding-top: 90px;
  background: #003145;
  @media only screen and (min-width: 520px) {
    padding: 30px;
    padding-top: 90px;
    height: 550px;
  }
  @media only screen and (min-width: 780px) {
    padding: 50px;
    padding-top: 90px;
    height: 600px;
  }
  @media only screen and (min-width: 1100px) {
    padding: 90px;
    height: 650px;
  }
  @media only screen and (min-width: 1280px) {
    padding: 100px;
    height: 700px;
  }
`;

export const HeroContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  z-index: 1;
  @media only screen and (min-width: 520px) {
    gap: 30px;
  }
`;

export const HeroTitle = styled.h4`
  position: relative;
  font-size: 1.6rem;
  line-height: 1.3;
  font-weight: 600;
  color: #ffffff;
  padding-left: 20px;
  @media only screen and (min-width: 520px) {
    padding-left: 30px;
    font-size: 2rem;
  }
  @media only screen and (min-width: 780px) {
    font-size: 2.3rem;
    padding-left: 35px;
  }
  @media only screen and (min-width: 1100px) {
    font-size: 2.6rem;
    padding-left: 50px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 3rem;
    padding-left: 55px;
  }
`;

export const Line = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: #ffce5c;
  @media only screen and (min-width: 520px) {
    width: 7px;
  }
  @media only screen and (min-width: 780px) {
    width: 7px;
  }
  @media only screen and (min-width: 1100px) {
    width: 10px;
  }
  @media only screen and (min-width: 1280px) {
    width: 12px;
  }
`;

export const HeroDescription = styled.p`
  padding-left: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #ececec;
  @media only screen and (min-width: 520px) {
    padding-left: 30px;
    font-size: 0.9rem;
  }
  @media only screen and (min-width: 780px) {
    font-size: 1rem;
    padding-left: 35px;
  }
  @media only screen and (min-width: 1100px) {
    font-size: 1.1rem;
    max-width: 600px;
    padding-left: 50px;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 1.15rem;
    max-width: 600px;
    padding-left: 55px;
  }
`;

export const CreateChallengeButton = styled(Link)`
  margin-left: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #003145;
  padding: 5px 10px;
  border-radius: 8px;
  background: #ffffff;
  @media only screen and (min-width: 520px) {
    margin-left: 30px;
    font-size: 0.9rem;
    padding: 5px 10px;
  }
  @media only screen and (min-width: 780px) {
    margin-left: 35px;
    font-size: 1rem;
    padding: 6px 12px;
  }
  @media only screen and (min-width: 1100px) {
    margin-left: 50px;
    font-size: 1.1rem;
    padding: 7px 13px;
  }
  @media only screen and (min-width: 1280px) {
    margin-left: 55px;
    font-size: 1.15rem;
    padding: 8px 14px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  opacity: 0.3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (min-width: 1100px) {
    position: relative;
    opacity: 1;
    min-width: 300px;
    top: 0;
    left: 0;
    transform: translate(0%, 0%);
  }
  @media only screen and (min-width: 1280px) {
    min-width: 380px;
  }
  @media only screen and (min-width: 1400px) {
    margin-right: 50px;
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: auto;
`;
