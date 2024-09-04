import styled from 'styled-components';

const BenefitBoxWrapper = styled.div`
  background: #f8f9fd;
  border-radius: 20px;
  padding: 20px 15px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 560px;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 520px) {
    padding: 30px 20px;
  }

  @media only screen and (min-width: 780px) {
    padding: 40px 25px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1100px) {
    padding: 50px 30px;
  }
`;

const BoxIconWrapper = styled.div`
  width: 30px;
  height: auto;
  margin-bottom: 8px;

  @media only screen and (min-width: 520px) {
    width: 35px;
  }

  @media only screen and (min-width: 780px) {
    width: 40px;
    margin-bottom: 9px;
  }

  @media only screen and (min-width: 1100px) {
    width: 45px;
    margin-bottom: 10px;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: auto;
`;

const BenefitTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;

  @media only screen and (min-width: 520px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: 780px) {
    font-size: 1.3rem;
    margin-bottom: 9px;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
`;

const BenefitDescription = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  color: #64607d;

  @media only screen and (min-width: 520px) {
    font-size: 0.75rem;
  }

  @media only screen and (min-width: 780px) {
    font-size: 0.85rem;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 1.1rem;
  }
`;

export {
  BenefitBoxWrapper,
  BoxIconWrapper,
  Icon,
  BenefitTitle,
  BenefitDescription,
};
