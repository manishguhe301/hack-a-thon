import { useNavigate, useParams } from 'react-router-dom';
import levelIcon from '../../assets/icons/carbon_skill-level-basic.svg';
import clock from '../../assets/icons/clock.svg';
import data from '../../utils/data.json';
import { useEffect, useState, useMemo } from 'react';
import {
  ChallengeDetailsCtr,
  ChallengeDetailsSection,
  ChallengeShortDesc,
  ChallengeTitle,
  ClockIcon,
  DelBtn,
  EditBtn,
  FullDescription,
  Level,
  LevelIcon,
  LevelIconWpr,
  OverviewHeading,
  OverviewNavbar,
  Status,
} from './detailsStyles';

const Details = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const navigate = useNavigate();

  const calculateStatus = (item) => {
    const date = new Date().getTime();
    let start = new Date(item.startDate).getTime();
    let end = new Date(item.endDate).getTime();

    if (start < date && end < date) return 'Past';
    if (start <= date && end > date) return 'Active';
    return 'Upcoming';
  };

  useEffect(() => {
    const item = data.find((item) => item.id === Number(id));
    if (item) {
      setChallenge(item);
    } else {
      console.error('Challenge not found');
    }
  }, [id]);

  const deleteChallenge = () => {
    const updatedData = data.filter((item) => item.id !== Number(id));
    console.log(updatedData);
    setChallenge(null);
    // navigate('/');
  };

  useEffect(() => {
    if (id && data[id]) {
      const item = data[id];
      item.status = calculateStatus(item);
      setChallenge(item);
    } else {
      console.error('Invalid ID or data not found');
    }
  }, [id]);

  const { status, endDate, startDate, name, tagLine, level, description } =
    challenge || {};

  const statusMessage = useMemo(() => {
    if (status === 'Active') return `Ends on ${endDate}`;
    if (status === 'Upcoming') return `Starts on ${startDate}`;
    return `Ended on ${endDate}`;
  }, [status, endDate, startDate]);

  if (!challenge) return <p>Loading...</p>;

  return (
    <ChallengeDetailsSection>
      {challenge ? (
        <>
          <ChallengeDetailsCtr>
            <div>
              <Status>
                <ClockIcon src={clock} alt='clock__icon' />
                {statusMessage} (India Standard Time)
              </Status>
              <ChallengeTitle>{name}</ChallengeTitle>
              <ChallengeShortDesc>{tagLine}</ChallengeShortDesc>
              <LevelIconWpr>
                <LevelIcon src={levelIcon} alt='level__icon' />
                <Level>{level}</Level>
              </LevelIconWpr>
            </div>
          </ChallengeDetailsCtr>
          <OverviewNavbar>
            <OverviewHeading>Overview</OverviewHeading>
            <div>
              <EditBtn to={`/create-challenge/${id}`}>Edit</EditBtn>
              <DelBtn onClick={() => deleteChallenge(id)}>Delete</DelBtn>
            </div>
          </OverviewNavbar>
          <FullDescription>{description}</FullDescription>
        </>
      ) : (
        <p
          style={{
            textAlign: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          This Challenge Does Not Exists!
        </p>
      )}
    </ChallengeDetailsSection>
  );
};

export default Details;
