import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppContext from './context/AppContext';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './GlobalStyle/Theme';
import Home from './pages/Home';

function App() {
  const { theme } = useContext(AppContext);

  return (
    <ThemeProvider theme={ theme ? light : dark }>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
