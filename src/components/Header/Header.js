import { Link } from 'react-router-dom';
import logo from '../../assets/logos/dphilogo.png';
import { Logo, LogoWrapper, StyledHeader } from './headerStyles';

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper>
        <Link to='/'>
          {' '}
          <Logo src={logo} alt='dphi__logo' />
        </Link>
      </LogoWrapper>
    </StyledHeader>
  );
};

export default Header;
