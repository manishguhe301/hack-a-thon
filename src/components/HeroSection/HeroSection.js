import rocket from '../../assets/icons/rocket.svg';
import {
  ContentWrapper,
  CreateChallengeButton,
  HeroContentWrapper,
  HeroDescription,
  HeroTitle,
  Icon,
  IconWrapper,
  Line,
  Wrapper,
} from './heroSectionStyles';

const HeroSection = () => {
  return (
    <Wrapper>
      <HeroContentWrapper>
        <ContentWrapper>
          <HeroTitle>
            <Line />
            Accelerate Innovation
            <br />
            with Global AI Challenges
          </HeroTitle>
          <HeroDescription>
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </HeroDescription>
          <CreateChallengeButton to='/create-challenge'>
            Create Challenge
          </CreateChallengeButton>
        </ContentWrapper>
        <IconWrapper>
          <Icon className='icon' src={rocket} alt='rocket' />
        </IconWrapper>
      </HeroContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;
