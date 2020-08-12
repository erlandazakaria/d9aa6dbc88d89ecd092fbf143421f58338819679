import React from 'react';
import { Switch, Route } from 'react-router-dom';
import{ ThemeProvider } from 'styled-components'

import Routes from './Utils/Routes';
import { GlobalStyle, theme } from './Utils/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        {Routes.map(route => (
          <Route exact path={route.path} key={route.path}>
            <GlobalStyle />
            <route.component />
          </Route>
        ))}
      </Switch>
    </ThemeProvider>
  );
}

export default App;
