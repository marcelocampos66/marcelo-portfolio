import React, { useState } from 'react';
import AppContext, { DEFAULT_STATE } from './AppContext';

const Provider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<boolean>(DEFAULT_STATE.theme);

  const contextValue = {
    theme,
    setTheme,
  }

  return (
    <AppContext.Provider value={contextValue}>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;
