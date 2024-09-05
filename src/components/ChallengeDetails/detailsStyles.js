import { Link } from 'react-router-dom';
import styled from 'styled-components';
const ChallengeDetailsSection = styled.div`
  width: 100%;
  height: auto;
`;

const ChallengeDetailsCtr = styled.div`
  width: 100%;
  height: 360px;
  padding: 120px 15px 70px;
  background: #003145;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 520px) {
    padding: 120px 30px 80px;
  }

  @media only screen and (min-width: 780px) {
    padding: 120px 50px 80px;
  }

  @media only screen and (min-width: 1100px) {
    height: 400px;
    padding: 120px 90px;
  }
`;

const Status = styled.p`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  background: #ffce5c;
  font-size: 0.65rem;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  padding: 5px 18px;
  padding-right: 30px;
  border-radius: 5px;
  margin-bottom: 10px;

  @media only screen and (min-width: 520px) {
    font-size: 0.7rem;
  }

  @media only screen and (min-width: 780px) {
    font-size: 0.73rem;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 0.75rem;
  }
`;

const ClockIcon = styled.img`
  width: 13px;
  height: 13px;
`;

const ChallengeTitle = styled.h1`
  font-size: 1.4rem;
  line-height: 1.35;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 14px;

  @media only screen and (min-width: 520px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: 780px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 2rem;
  }
`;

const ChallengeShortDesc = styled.p`
  font-family: 'Inter', sans-serif;
  color: #f8f9fd;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 18px;

  @media only screen and (min-width: 520px) {
    font-size: 0.83rem;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 780px) {
    font-size: 0.85rem;
    margin-bottom: 23px;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 0.9rem;
    margin-bottom: 25px;
  }
`;

const LevelIconWpr = styled.div`
  width: 80px;
  background: #f8f9fd;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 4px 0;
`;

const LevelIcon = styled.img`
  width: 13px;
  height: 13px;

  @media only screen and (min-width: 520px) {
    width: 14px;
    height: 14px;
  }

  @media only screen and (min-width: 1100px) {
    width: 15px;
    height: 15px;
  }
`;

const Level = styled.span`
  font-size: 0.63rem;

  @media only screen and (min-width: 520px) {
    font-size: 0.65rem;
  }

  @media only screen and (min-width: 780px) {
    font-size: 0.68rem;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 0.7rem;
  }
`;

const OverviewNavbar = styled.div`
  width: 100%;
  height: 43px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 6px 12px 0px #dde6ed;
  margin-bottom: 30px;

  @media only screen and (min-width: 520px) {
    padding: 0 30px;
    margin-bottom: 40px;
  }

  @media only screen and (min-width: 780px) {
    margin-bottom: 50px;
  }

  @media only screen and (min-width: 1100px) {
    height: 50px;
    padding: 0 90px;
    margin-bottom: 60px;
  }
`;

const OverviewHeading = styled.div`
  position: relative;
  padding: 0 10px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 0.83rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -16px; 
    left: 0;
    width: 100%;
    height: 2px;
    background-color: green;
  }

  @media only screen and (min-width: 520px) {
    font-size: 0.85rem;
  }

  @media only screen and (min-width: 780px) {
    font-size: 0.9rem;
  }
`;

const EditBtn = styled(Link)`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.63rem;
  font-weight: 600;
  background: #44924c;
  color: #ffffff;
  text-align: center;
  border: none;
  margin-right: 10px;
  width: 75px;

  @media only screen and (min-width: 780px) {
    margin-right: 20px;
  }
`;

const DelBtn = styled(Link)`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.63rem;
  font-weight: 600;
  background: transparent;
  color: red;
  text-align: center;
  border: 1px solid red;
  width: 75px;
`;

const FullDescription = styled.p`
  font-weight: 500;
  font-size: 0.78rem;
  padding: 8px 15px;
  color: #64607d;
  max-width: 800px;

  @media only screen and (min-width: 520px) {
    font-size: 0.8rem;
    padding: 8px 30px;
  }

  @media only screen and (min-width: 780px) {
    font-size: 0.83rem;
    padding: 10px 50px;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 0.85rem;
    padding: 10px 90px;
  }
`;

export {
  ChallengeDetailsSection,
  ChallengeDetailsCtr,
  Status,
  LevelIconWpr,
  LevelIcon,
  Level,
  OverviewNavbar,
  OverviewHeading,
  EditBtn,
  DelBtn,
  FullDescription,
  ClockIcon,
  ChallengeShortDesc,
  ChallengeTitle,
};
