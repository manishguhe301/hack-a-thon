import styled from 'styled-components';

const ChallengeBenefitsSection = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  padding: 40px 15px;
  padding-bottom: 40px;

  @media only screen and (min-width: 520px) {
    padding: 47px 30px;
    padding-bottom: 60px;
  }

  @media only screen and (min-width: 780px) {
    padding: 54px 50px;
    padding-bottom: 80px;
  }

  @media only screen and (min-width: 1100px) {
    padding: 60px 90px;
    padding-bottom: 100px;
  }
`;

const CBQuestion = styled.h4`
  font-size: 1.15rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;

  @media only screen and (min-width: 520px) {
    font-size: 1.4rem;
    margin-bottom: 47px;
  }

  @media only screen and (min-width: 780px) {
    font-size: 1.8rem;
    margin-bottom: 54px;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 2.2rem;
    margin-bottom: 60px;
  }
`;

const BenefitsBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 780px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 560px));
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
  }

  @media only screen and (min-width: 1100px) {
    gap: 30px;
  }
`;

export { ChallengeBenefitsSection, CBQuestion, BenefitsBoxesWrapper };
