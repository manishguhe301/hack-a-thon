import styled from 'styled-components';

const AchievementsSection = styled.div`
  width: 100%;
  height: auto;
  background: #002a3b;
  padding: 15px;
  border-top: 1px solid rgb(105, 136, 151);
`;

const AchievementList = styled.ul`
  width: 200px;
  margin: auto;

  @media only screen and (min-width: 780px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const AchievementWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px 0;

  @media only screen and (min-width: 780px) {
    width: 100%;
    justify-content: center;
    gap: 30px;
    padding: 45px 0;
  }

  @media only screen and (min-width: 1100px) {
    padding: 50px 0;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 15px;

  .icon {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 520px) {
    width: 45px;
    height: 45px;
  }

  @media only screen and (min-width: 780px) {
    width: 50px;
    height: 50px;
  }

  @media only screen and (min-width: 1100px) {
    width: 55px;
    height: 55px;
  }
`;

const TotalNumber = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  font-family: 'Inter', sans-serif;
  margin-bottom: 4px;
  color: #ffff;

  @media only screen and (min-width: 520px) {
    font-size: 1.15rem;
  }

  @media only screen and (min-width: 780px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 1.5rem;
  }
`;

const ShortDescription = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  color: #ffff;

  @media only screen and (min-width: 520px) {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 780px) {
    font-size: 0.9rem;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 1rem;
  }
`;

const DataScience = styled(AchievementWrapper)`
  position: relative;

  &::after,
  &::before {
    content: '';
    position: absolute;
    background: #c4c4c4;
  }

  &::after,
  &::before {
    width: 20%;
    height: 0.8px;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    top: 0;
  }

  &::before {
    bottom: 0;
  }

  @media only screen and (min-width: 780px) {
    &::after,
    &::before {
      width: 0.8px;
      height: 30%;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
    }

    &::after {
      left: 0;
    }

    &::before {
      right: 0;
    }
  }
`;

export {
  AchievementsSection,
  AchievementList,
  AchievementWrapper,
  IconWrapper,
  TotalNumber,
  ShortDescription,
  DataScience,
};
