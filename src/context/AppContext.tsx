import { createContext } from 'react';

export const DEFAULT_STATE = {
  theme: true,
  setTheme: () => {},
}

const AppContext = createContext<IAppContext>(DEFAULT_STATE);

export default AppContext;
