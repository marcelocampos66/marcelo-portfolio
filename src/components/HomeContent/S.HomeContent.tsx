import styled, { keyframes } from 'styled-components';

class Styled {

  typingAnimation = keyframes`
    from { width: 0 }
    to { width: 100% }
  `;

  blinkAnimation = keyframes`
    from, to { border-color: transparent }
    50% { border-color: orange; }
  `;

  fadeInAnimation = keyframes`
    0% { opacity:0; }
    100% { opacity:1; }
  `;

  Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 92vh;
  `;

  DivH1 = styled.div`
    font-size: 24px;
  `;

  H1 = styled.h1`
    overflow: hidden;
    border-right: .15em solid orange;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    color: ${(props) => props.theme.colors.text};
    animation: 
      ${this.typingAnimation} 2.5s steps(40, end),
      ${this.blinkAnimation} .75s step-end infinite;
  `;

  Img = styled.img`
    margin: 5% 0;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    animation: ${this.fadeInAnimation} 3s;
  `;

}

export default new Styled();
