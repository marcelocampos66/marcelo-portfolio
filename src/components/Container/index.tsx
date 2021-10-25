import React, { useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import Helpers from '../../helpers/Helpers';
import Styled from './S.Container';

const Container: React.FC = ({ children}) => {
  const { setTheme } = useContext(AppContext);

  const getTheme = () => {
    const data: { theme: boolean } = Helpers.getDataFromStorage();
    setTheme(data.theme);
  }

  useEffect(() => {
    getTheme();
  }, []);

  return (
    <Styled.Main>
      { children }
    </Styled.Main>
  );
}

export default Container;
