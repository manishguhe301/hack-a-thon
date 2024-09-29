import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../assets/cardimage/b1.png';
import banner2 from '../../assets/cardimage/b2.png';
import banner3 from '../../assets/cardimage/b3.png';
import banner4 from '../../assets/cardimage/b4.png';
import banner5 from '../../assets/cardimage/b5.png';
import banner6 from '../../assets/cardimage/b6.png';
import {
  CardBanner,
  CardContent,
  CardImage,
  CardSection,
  ChallengeName,
  ChallengeStatus,
  Colon,
  Counter,
  CounterLabel,
  CounterWrapper,
  DateText,
  ParticipateButton,
  StartOrEndStatus,
  TimerOrDate,
} from './challengeCardStyles';

const images = [banner1, banner2, banner3, banner4, banner5, banner6];

const ChallengeCard = ({ data, id }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
  });
  const [currentStatus, setCurrentStatus] = useState('upcoming');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const startDate = new Date(data.startDate).getTime();
      const endDate = new Date(data.endDate).getTime();

      let status = 'past';
      let targetDate = null;
      let difference = 0;

      if (now < startDate) {
        status = 'upcoming';
        targetDate = startDate;
        difference = targetDate - now;
      } else if (now >= startDate && now < endDate) {
        status = 'active';
        targetDate = endDate;
        difference = targetDate - now;
      } else {
        status = 'past';
        difference = 0;
      }

      if (status !== currentStatus) {
        setCurrentStatus(status);
      }

      if (status === 'past') {
        return { days: 0, hours: 0, mins: 0 };
      }

      const days = Math.floor(difference / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const mins = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));

      return { days, hours, mins };
    };

    const updateTimeLeft = () => {
      const tl = calculateTimeLeft();
      setTimeLeft(tl);
    };

    updateTimeLeft();

    const interval = setInterval(() => {
      updateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [data, currentStatus]);

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <CardSection>
      <Link to={`/challenge-details/${id}`}>
        <CardBanner>
          <CardImage
            src={images[data?.image - 1] || data.image}
            alt='card_img'
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = images[0];
            }}
          />
        </CardBanner>
        <CardContent>
          <ChallengeStatus className={currentStatus}>
            {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
          </ChallengeStatus>
          <ChallengeName>{data?.name}</ChallengeName>

          {currentStatus === 'active' && (
            <StartOrEndStatus>Ends In</StartOrEndStatus>
          )}
          {currentStatus === 'upcoming' && (
            <StartOrEndStatus>Starts In</StartOrEndStatus>
          )}
          {currentStatus === 'past' && (
            <StartOrEndStatus>Ended On</StartOrEndStatus>
          )}

          <TimerOrDate>
            {currentStatus === 'active' || currentStatus === 'upcoming' ? (
              <CounterWrapper>
                <Counter>
                  <span>{timeLeft.days}</span>
                  <CounterLabel>Days</CounterLabel>
                </Counter>
                <Colon>:</Colon>
                <Counter>
                  <span>{timeLeft.hours}</span>
                  <CounterLabel>Hours</CounterLabel>
                </Counter>
                <Colon>:</Colon>
                <Counter>
                  <span>{timeLeft.mins}</span>
                  <CounterLabel>Mins</CounterLabel>
                </Counter>
              </CounterWrapper>
            ) : (
              <DateText>{formatDate(data?.endDate)}</DateText>
            )}
          </TimerOrDate>

          <ParticipateButton>Participate Now</ParticipateButton>
        </CardContent>
      </Link>
    </CardSection>
  );
};

export default ChallengeCard;
