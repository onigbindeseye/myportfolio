import React from 'react';
import Box from '@mui/material/Box';
import Container from '../../common/Container';
import Header from '../../components/Header/Header2';
import AppBar from '@mui/material/AppBar';
import Banner from './components/Banner';

const Exp = () => {
  return (
    <Box>
      <AppBar
        position={'sticky'}
        elevation={0}
        padding={'5px 0px'}
        sx={{
          backgroundColor: '#fff',
        }}
      >
        <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
          <Header />
        </Container>
      </AppBar>
      <Box bgcolor={'#f7f7f7'}>
        <Container>
          <Banner />
        </Container>
      </Box>
    </Box>
  );
};

export default Exp;
