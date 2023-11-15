import React from 'react';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AppBar from '@mui/material/AppBar';
import ThirdProjects from './components/ThirdProjects';

const Portfolio3 = () => {
  return (
    <Box>
      <AppBar
        position={'fixed'}
        sx={{
          backgroundColor: '#0D3446',
        }}
        elevation={0}
      >
        <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
          <Header />
        </Container>
      </AppBar>
      <Box bgcolor={'#0D3446'}>
        <Container>
          <ThirdProjects />
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

export default Portfolio3;
