import {
  BenefitBoxWrapper,
  BenefitDescription,
  BenefitTitle,
  BoxIconWrapper,
  Icon,
} from './benefitCardStyles';

const BenefitCard = ({ data }) => {
  return (
    <BenefitBoxWrapper>
      <BoxIconWrapper>
        <Icon src={data.icon} alt='carbon-notebook' />
      </BoxIconWrapper>
      <BenefitTitle>{data.title}</BenefitTitle>
      <BenefitDescription>{data.description}</BenefitDescription>
    </BenefitBoxWrapper>
  );
};

export default BenefitCard;
