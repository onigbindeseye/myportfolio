import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AppBar from '@mui/material/AppBar';
import Details from './components/Details';
import About from './components/About';
import Content from './components/Content';

const FirstBook = () => {
  return (
    <Box>
      <Helmet>
        <title> Switching To Tech: 10 Things To Know | Oluseye Onigbinde</title>
      </Helmet>
      <AppBar
        position={'fixed'}
        sx={{
          backgroundColor: '#0D3446',
          padding: '10px 0px',
        }}
        elevation={0}
      >
        <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
          <Header />
        </Container>
      </AppBar>
      <Box bgcolor={'#0D3446'}>
        <Container>
          <Details />
          <About />
          <Content />
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default FirstBook;