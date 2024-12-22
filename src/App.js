import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from 'components/Home';
import Portfolio from 'components/Portfolio';
import Blog from 'components/Blog';
import Profile from 'components/Profile';
import Exp from 'components/Exp';
import Book from 'components/Book';
import FirstBook from 'components/FirstBook';

const theme = createTheme({
  typography: {
    fontFamily: {
      fontFamily: 'Roboto',
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path="/blocked-funds" component={Exp} />
            <Route
              exact
              path="/switching-to-tech-10-things-to-know"
              component={FirstBook}
            />
            <Route exact path="/books" component={Book} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
