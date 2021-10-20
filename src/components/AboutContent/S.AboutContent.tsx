import styled from 'styled-components';

class Styled {

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
  `;

  DivContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 40%;
  `;

  H1 = styled.h1`
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 3%;
  `;

  P = styled.p`
    width: 80%;
    font-size: 18px;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 1%;
  `;

}

export default new Styled();
