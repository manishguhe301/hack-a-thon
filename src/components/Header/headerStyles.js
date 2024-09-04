import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  height: 64px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background: #ffffff;
  z-index: 100;

  @media only screen and (min-width: 520px) {
    padding-left: 30px;
  }

  @media only screen and (min-width: 780px) {
    padding-left: 50px;
  }

  @media only screen and (min-width: 1080px) {
    padding-left: 90px;
  }

  @media only screen and (min-width: 1280px) {
    padding-left: 100px;
  }
`;

export const LogoWrapper = styled.div`
  width: 87px;
  height: auto;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
`;
