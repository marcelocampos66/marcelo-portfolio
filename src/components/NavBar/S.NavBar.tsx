import styled from 'styled-components';
// import { Link } from 'react-router-dom';

class Styled {

  Nav = styled.nav`
    background-color: yellow;
    display: flex;
    width: 100%;
    height: 8vh;
  `;

  DivLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    width: 40%;
    height: 100%;
  `;

  DivLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: green;
    width: 50%;
    height: 100%;
  `;

}

export default new Styled();
