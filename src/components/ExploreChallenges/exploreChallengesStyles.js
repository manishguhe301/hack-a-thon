import styled, { css } from 'styled-components';

export const ChallengesSection = styled.div`
  width: 100%;
  height: auto;
  background: #003145;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  min-height: 800px;
`;

export const ExploreChallengesContainer = styled.div`
  width: 100%;
  padding: 15px;
  padding-bottom: 30px;
  background: #002a3b;
  margin-bottom: 50px;

  @media only screen and (min-width: 520px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 40px;
  }

  @media only screen and (min-width: 780px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 1100px) {
    padding-bottom: 60px;
  }
`;

export const SectionHeading = styled.h4`
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin: 20px 0;

  @media only screen and (min-width: 520px) {
    font-size: 1.3rem;
    margin: 30px 0;
  }

  @media only screen and (min-width: 780px) {
    font-size: 1.6rem;
    margin: 35px 0;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 1.8rem;
    margin: 40px 0;
  }
`;

export const InputFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 780px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-bottom: 0;
    margin-bottom: 30px;
  }
`;

export const SearchInputWrapper = styled.span`
  position: relative;
  width: 100%;

  @media only screen and (min-width: 780px) {
    width: auto;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 20px;
  padding-left: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 50px 0px rgba(111, 111, 111, 0.1);
  font-size: 0.8rem;
  font-weight: 300;

  @media only screen and (min-width: 520px) {
    padding-left: 50px;
    font-size: 0.85rem;
  }

  @media only screen and (min-width: 780px) {
    width: 40vw;
    padding: 10px;
    margin-bottom: 0;
    padding-left: 60px;
    font-size: 0.9rem;
  }

  @media only screen and (min-width: 1100px) {
    padding: 15px;
    padding-left: 70px;
    font-size: 1rem;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  margin-top: 2px;

  @media only screen and (min-width: 520px) {
    left: 30px;
  }

  @media only screen and (min-width: 780px) {
    width: 13px;
    height: 13px;
    left: 35px;
  }

  @media only screen and (min-width: 1100px) {
    width: 14px;
    height: 14px;
    left: 40px;
  }
`;

export const SearchIcon = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  width: 150px;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;

  @media only screen and (min-width: 780px) {
    margin-bottom: 0;
  }
`;

export const FilterTitle = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  padding: 8px 10px;
  cursor: pointer;

  @media only screen and (min-width: 520px) {
    font-size: 0.85rem;
    padding: 8px 20px;
  }

  @media only screen and (min-width: 780px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 1rem;
    padding: 15px 20px;
  }
`;

export const ArrowIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;

  @media only screen and (min-width: 520px) {
    width: 12px;
    height: 12px;
  }

  @media only screen and (min-width: 780px) {
    width: 12px;
    height: 12px;
  }

  @media only screen and (min-width: 1100px) {
    width: 13px;
    height: 13px;
  }
`;

export const ArrowIcon = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(180deg);
    `}
`;

export const FiltersWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  right: 0;
  top: 25px;
  background: #ffffff;
  transform: translateY(-50%);
  opacity: 0;
  pointer-events: none;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  transition: all 0.3s ease-in-out;

  ${({ show }) =>
    show &&
    css`
      transform: translateY(0%);
      opacity: 1;
      pointer-events: all;
    `}

  @media only screen and (min-width: 780px) {
    top: 28px;
  }

  @media only screen and (min-width: 1100px) {
    top: 40px;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

export const FilterSectionTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 5px;

  @media only screen and (min-width: 520px) {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 780px) {
    font-size: 0.85rem;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 0.9rem;
  }
`;

export const StatusFilterWrapper = styled.div`
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  padding: 10px 0;
`;

export const FilterLabel = styled.label`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  margin-left: 8px;
  color: #858585;
  cursor: pointer;

  @media only screen and (min-width: 520px) {
    font-size: 0.7rem;
    margin-left: 10px;
  }

  @media only screen and (min-width: 780px) {
    font-size: 0.75rem;
    margin-left: 10px;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 0.8rem;
    margin-left: 10px;
  }
`;

export const FilterCheckbox = styled.input`
  width: 13px;
  height: 13px;
  border-color: #003145;
  cursor: pointer;

  @media only screen and (min-width: 1100px) {
    width: 14px;
    height: 14px;
  }
`;

export const FiltersNames = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 850px;
  margin: auto;
`;

export const FilterTag = styled.span`
  font-size: 0.6rem;
  font-weight: 500;
  background: #f8f9fd7d;
  color: #ffffff;
  padding: 5px 20px;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  @media only screen and (min-width: 520px) {
    font-size: 0.65rem;
  }

  @media only screen and (min-width: 780px) {
    font-size: 0.7rem;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 0.8rem;
  }
`;

export const ChallengeCardWrapper = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  gap: 30px;

  @media only screen and (min-width: 780px) {
    grid-template-columns: auto auto;
    gap: 40px;
  }

  @media only screen and (min-width: 1100px) {
    grid-template-columns: auto auto auto;
  }
`;
