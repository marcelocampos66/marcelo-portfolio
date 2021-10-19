import React from 'react';
import Styled from './S.NavBar';
import { Link } from 'react-router-dom';
import SwitchButton from '../SwitchButton';

const NavBar: React.FC = () => {
  return (
    <Styled.Nav>
      <Styled.DivLogo>
        LOGO
      </Styled.DivLogo>
      <Styled.DivLinks>
        <Link to='/'>
          Home
        </Link>
        <Link to='/'>
          About
        </Link>
        <Link to='/'>
          Portfolio
        </Link>
        <Link to='/'>
          Contact
        </Link>
      </Styled.DivLinks>
      <SwitchButton />
    </Styled.Nav>
  );
}

export default NavBar;
