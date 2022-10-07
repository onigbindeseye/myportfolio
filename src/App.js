import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from 'components/Home';
import Portfolio from 'components/Portfolio';

const theme = createTheme({
  typography: {
    fontFamily: {
      fontFamily: 'Roboto',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
