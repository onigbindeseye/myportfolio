import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from 'components/Home';
import Portfolio from 'components/Portfolio';
import Blog from 'components/Blog';
import Profile from 'components/Profile';
import Portfolio2 from 'components/Portfolio2';

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
          <Route exact path="/portfolio/page2" component={Portfolio2} />
          <Route exact path="/portfolio/page1" component={Portfolio} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
