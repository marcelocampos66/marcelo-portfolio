import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Styled {

  Nav = styled.nav`
    background-color: black;
    display: flex;
    width: 100%;
    height: 8vh;
  `;

  DivLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 100%;
  `;

  DivLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    height: 100%;
  `;

  Link = styled(Link)`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #ffffff;
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      border: 1px solid ${(props) => props.theme.colors.oposite};
      color: #000000;
    }
  `;

  Img = styled.img`
    height: 100%;
  `;

  LinkImg = styled(Link)`
    height: 70%;
    margin-left: 2%;
    text-decoration: none;
  `;

}

export default new Styled();
