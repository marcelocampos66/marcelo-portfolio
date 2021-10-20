import styled, { keyframes } from 'styled-components';

class Styled {

  fadeInAnimation = keyframes`
    0% { opacity: 0.1; }
    100% { opacity:1; }
  `;

  zoomInAnimation = keyframes`
    0% { transform: scale(0.2, 0.2); }
    100% { transform: scale(1, 1); }
  `;

  Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 92vh;
  `;

  Hr = styled.hr`
    height: 80%;
  `;

  DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
  `;

  Img = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 100%;
    animation: ${this.fadeInAnimation} 3s;
  `;

  DivContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 40%;
    animation: ${this.zoomInAnimation} 1s;
  `;

  H1 = styled.h1`
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 5%;
  `;

  P = styled.p`
    width: 80%;
    font-size: 18px;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 5%;
    text-align: justify;
  `;

}

export default new Styled();
