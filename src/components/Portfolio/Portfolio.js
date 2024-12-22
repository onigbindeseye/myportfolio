import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AppBar from '@mui/material/AppBar';
import FirstProjects from './components/FirstProjects';

const Portfolio = () => {
  return (
    <Box>
      <Helmet>
        <title> My Portfolio | Oluseye Onigbinde</title>
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
          <FirstProjects />
        </Container>
      </Box>
      <Box bgcolor={'#0D3446'}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;
