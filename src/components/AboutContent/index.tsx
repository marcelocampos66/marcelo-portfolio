import React from 'react';
import Styled from './S.AboutContent';
import me from '../../images/me.jpg';

const AboutContent: React.FC = () => {
  return (
    <Styled.Main>
      <Styled.DivContent>
        <Styled.H1>Hi! I'm Marcelo.</Styled.H1>
        <Styled.P>
          I'm a developer in development, currently transitioning my career and taking a software development course at Trybe, a school for people who want to build a successful career in technology, with a program that has more than 1,500 hours of classes online and covers introduction to software development, front-end, back-end, computer science, software engineering, agile methodologies and behavioral skills.
        </Styled.P>
        <Styled.P>
          I have a bachelor's degree in economics, but since I was a child I've always been curious and passionate about technology. I studied hardware during my teenage years and worked from 2017 to 2020 as a computer technician, but not satisfied, I had the opportunity to meet Trybe and start my career as a software developer, and here I am satisfied and full of energy to experience new opportunities.
        </Styled.P>
      </Styled.DivContent>
      <Styled.Hr />
      <Styled.DivImg>
        <Styled.Img
          src={ me }
          alt="minha foto"
        />
      </Styled.DivImg>
    </Styled.Main>
  );
}

export default AboutContent;
