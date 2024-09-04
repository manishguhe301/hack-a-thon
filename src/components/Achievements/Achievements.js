import ai from '../../assets/icons/ai.svg';
import members from '../../assets/icons/members.svg';
import challenges from '../../assets/icons/challenges.svg';
import {
  AchievementList,
  AchievementsSection,
  AchievementWrapper,
  DataScience,
  IconWrapper,
  ShortDescription,
  TotalNumber,
} from './achievementsStyles';

const AchievementSection = () => {
  return (
    <AchievementsSection>
      <AchievementList>
        <AchievementWrapper>
          <IconWrapper>
            <img className='icon' src={ai} alt='ai-icon' />
          </IconWrapper>
          <div className='achievement__details__wpr'>
            <TotalNumber>100K+</TotalNumber>
            <ShortDescription>AI model submissions</ShortDescription>
          </div>
        </AchievementWrapper>
        <DataScience>
          <IconWrapper>
            <img className='icon' src={members} alt='members-icon' />
          </IconWrapper>
          <div className='achievement__details__wpr'>
            <TotalNumber>50K+</TotalNumber>
            <ShortDescription>Data Scientists</ShortDescription>
          </div>
        </DataScience>
        <AchievementWrapper>
          <IconWrapper>
            <img className='icon' src={challenges} alt='challenges-icon' />
          </IconWrapper>
          <div className='achievement__details__wpr'>
            <TotalNumber>100+</TotalNumber>
            <ShortDescription>AI Challenges hosted</ShortDescription>
          </div>
        </AchievementWrapper>
      </AchievementList>
    </AchievementsSection>
  );
};

export default AchievementSection;
