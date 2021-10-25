import React from 'react';
import SwitchButton from '../SwitchButton';
import logo from '../../images/hello-world.png';
import Styled from './S.NavBar';

const NavBar: React.FC = () => {
  return (
    <Styled.Nav>
      <Styled.DivLogo>
        <Styled.LinkImg to='/'>
          <Styled.Img
            src={ logo }
            alt="logo navbar"
          />
        </Styled.LinkImg>
      </Styled.DivLogo>
      <Styled.DivLinks>
        <Styled.Link to='/'>
          Home
        </Styled.Link>
        <Styled.Link to='/about'>
          About
        </Styled.Link>
        <Styled.Link to='/portfolio'>
          Portfolio
        </Styled.Link>
        <Styled.Link to='/contact'>
          Contact
        </Styled.Link>
      </Styled.DivLinks>
      <SwitchButton />
    </Styled.Nav>
  );
}

export default NavBar;
