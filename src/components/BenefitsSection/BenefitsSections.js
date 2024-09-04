import { AIChallengesData } from '../../utils/data';
import BenefitCard from '../BenefitCard/BenefitCard';
import {
  BenefitsBoxesWrapper,
  CBQuestion,
  ChallengeBenefitsSection,
} from './benefitsSection';

const BenefitsSection = () => {
  return (
    <ChallengeBenefitsSection>
      <CBQuestion>
        Why Participate in{' '}
        <span style={{ color: '#44924C' }}>AI Challenges?</span>
      </CBQuestion>
      <BenefitsBoxesWrapper>
        {AIChallengesData.map((item, id) => (
          <BenefitCard key={id} data={item} />
        ))}
      </BenefitsBoxesWrapper>
    </ChallengeBenefitsSection>
  );
};

export default BenefitsSection;
