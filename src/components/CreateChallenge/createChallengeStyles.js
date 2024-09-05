import styled from 'styled-components';

export const CreateChallengeContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 60px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  background: #f8f9fd;
  padding: 25px 15px;
  margin-bottom: 5px;
  @media only screen and (min-width: 520px) {
    padding: 15px 30px;
    margin-bottom: 8px;
  }
  @media only screen and (min-width: 780px) {
    padding: 35px 50px;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 1100px) {
    padding: 40px 90px;
    margin-bottom: 12px;
  }
`;

export const Message = styled.h3`
  font-size: 0.9rem;
  padding-left: 15px;
  color: rgb(71, 51, 182);
  @media only screen and (min-width: 520px) {
    font-size: 1rem;
    padding-left: 30px;
  }
  @media only screen and (min-width: 780px) {
    font-size: 1.1rem;
    padding-left: 50px;
  }
  @media only screen and (min-width: 1100px) {
    font-size: 1.2rem;
    padding-left: 90px;
  }
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  @media only screen and (min-width: 520px) {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 780px) {
    font-size: 1.3rem;
  }
  @media only screen and (min-width: 1100px) {
    font-size: 1.4rem;
  }
`;

export const Form = styled.form`
  margin: 13px 15px;
  @media only screen and (min-width: 520px) {
    margin: 15px 30px;
  }
  @media only screen and (min-width: 780px) {
    margin: 18px 50px;
  }
  @media only screen and (min-width: 1100px) {
    margin: 20px 90px;
  }
`;

export const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  color: #333333;
  margin-bottom: 10px;
  @media only screen and (min-width: 520px) {
    font-size: 0.85rem;
  }
  @media only screen and (min-width: 780px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 1100px) {
    font-size: 0.9rem;
  }
`;

export const Field = styled.input`
  width: 100%;
  max-width: 400px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #b7b7b7;
  height: auto;
  padding: 7px 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  @media only screen and (min-width: 520px) {
    padding: 8px 20px;
    font-size: 0.84rem;
  }
  @media only screen and (min-width: 780px) {
    padding: 9px 20px;
    font-size: 0.88rem;
  }
  @media only screen and (min-width: 1100px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

export const UpLoadLabel = styled.label`
  width: 100%;
  max-width: 400px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #b7b7b7;
  height: auto;
  padding: 7px 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #666666;
  background: #f4f4f4;
  border: 1px solid #d9d9d9;
  width: 200px;
  @media only screen and (min-width: 520px) {
    padding: 8px 20px;
    font-size: 0.84rem;
  }
  @media only screen and (min-width: 780px) {
    padding: 9px 20px;
    font-size: 0.88rem;
  }
  @media only screen and (min-width: 1100px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

export const DateField = styled.input`
  color: #333333;
  padding-right: 50px;
  width: 100%;
  max-width: 400px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #b7b7b7;
  height: auto;
  padding: 7px 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  @media only screen and (min-width: 520px) {
    padding: 8px 20px;
    font-size: 0.84rem;
    padding-right: 50px;
  }
  @media only screen and (min-width: 780px) {
    padding-right: 50px;
  }
  @media only screen and (min-width: 1100px) {
    padding-right: 50px;
  }
`;

export const IconWrapper = styled.span`
  position: relative;
`;

export const CalendariconWrapper = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`;

export const CalendarIcon = styled.img`
  width: 100%;
  height: auto;
`;

export const Description = styled.textarea`
  resize: none;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  width: 100%;
  max-width: 400px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #b7b7b7;
  height: auto;
  padding: 7px 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  @media only screen and (min-width: 520px) {
    padding: 8px 20px;
    font-size: 0.84rem;
  }
`;

export const FileField = styled.input`
  display: none;
  width: 100%;
  max-width: 400px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #b7b7b7;
  height: auto;
  padding: 7px 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  @media only screen and (min-width: 520px) {
    padding: 8px 20px;
    font-size: 0.84rem;
  }
`;

export const UploadImage = styled.div`
  color: #666666;
`;

export const Select = styled.select`
  background: transparent;
  max-width: 200px;
  width: 100%;
  max-width: 400px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #b7b7b7;
  height: auto;
  padding: 7px 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  @media only screen and (min-width: 520px) {
    padding: 8px 20px;
    font-size: 0.84rem;
  }
`;

export const Option = styled.option`
  font-family: 'Inter', sans-serif;
  width: 100%;
  max-width: 400px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #b7b7b7;
  height: auto;
  padding: 7px 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  @media only screen and (min-width: 1100px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 4px 15px;
  color: #ffffff;
  margin-top: 10px;
  border-radius: 5px;
  background: #44924c;
  font-size: 0.8rem;
  @media only screen and (min-width: 520px) {
    padding: 5px 15px;
    font-size: 0.84rem;
  }
  @media only screen and (min-width: 780px) {
    padding: 6px 15px;
    font-size: 0.88rem;
  }
  @media only screen and (min-width: 1100px) {
    padding: 7px 15px;
    font-size: 0.9rem;
  }
`;

export const PreviousBannerWrapper = styled.div`
  width: 300px;
  height: auto;
  border-radius: 5px;
  margin-top: 10px;
  overflow: hidden;
`;

export const Banner = styled.img`
  width: 100%;
  height: auto;
  transform: scale(1.1);
`;
