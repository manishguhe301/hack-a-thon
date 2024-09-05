import styled from 'styled-components';

export const CardSection = styled.div`
  width: 300px;
  height: 100%;
  background: #ffffff;
  border-radius: 15px;
`;

export const CardBanner = styled.div`
  width: 100%;
  height: auto;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
`;

export const ChallengeStatus = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.6rem;
  font-weight: 400;
  padding: 5px 20px;
  border-radius: 5px;
  text-transform: capitalize;
  margin-bottom: 15px;

  &.upcoming {
    background: #f2c94c40;
    color: black;
  }

  &.active {
    background: #44924c3d;
    color: #44924c;
  }

  &.past {
    background: #ff3c002b;
    color: black;
  }
`;

export const ChallengeName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: black;
`;

export const StartOrEndStatus = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  margin-bottom: 5px;
  color: #444444;
`;

export const TimerOrDate = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

export const CounterWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 5px;
`;

export const Counter = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: #454545;
`;

export const CounterLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.6rem;
  font-weight: 500;
  color: #4f4f4f;
`;

export const Colon = styled.span`
  position: relative;
  top: -2px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #454545;
`;

export const DateText = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #454545;
`;

export const ParticipateButton = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  background: #44924c;
  color: #ffffff;
  border-radius: 5px;
  padding: 6px 15px;
  margin-bottom: 10px;
`;
