import React from 'react';
import Styled from './S.HomeContent';
import me from '../../images/me-home.jpg';

const HomeContent: React.FC = () => {
  return (
    <Styled.Main>
      <Styled.DivH1>
        <Styled.H1>
          Hello! I'm Marcelo.
        </Styled.H1>
      </Styled.DivH1>
      <Styled.Img
        src={ me }
        alt="minha foto"
      />
    </Styled.Main>
  );
}

export default HomeContent;
