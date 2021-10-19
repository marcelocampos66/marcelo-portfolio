import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Styled from './S.SwitchButton';

const SwitchButton: React.FC = () => {
  const { theme, setTheme } = useContext(AppContext);
  
  const onClick = () => {
    setTheme(!theme);
  }

  return (
    <Styled.DivContainer>
      <Styled.CheckBoxWrapper>
        <Styled.CheckBox
          id="checkbox"
          type="checkbox"
          onClick={ () => onClick() }
          checked={ !theme }
        />
        <Styled.CheckBoxLabel htmlFor="checkbox" />
      </Styled.CheckBoxWrapper>
    </Styled.DivContainer>
  );
};

export default SwitchButton;
