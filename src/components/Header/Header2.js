import React from 'react';
import Box from '@mui/material/Box';
import logo from '../../images/expatrio.png';
import like from '../../images/exp/like.png';
import gift from '../../images/exp/gift.png';
import notification from '../../images/exp/notification.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header2 = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
      marginBottom={{ xs: 2, sm: 1 }}
      marginTop={{ xs: 2, sm: 1 }}
    >
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}
        marginLeft={{ xs: '0%', sm: '0%' }}
        paddingLeft={{ xs: '0%', sm: '2%' }}
        width={180}
      >
        <Box component="a" underline="none" href="/blocked-fund" title="">
          <img src={logo} alt="logo" width={'100%'} />
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems={'center'}
        width={{ xs: '100%', sm: '25%' }}
        justifyContent={'space-between'}
        marginRight={{ xs: '0%', sm: '0%' }}
      >
        <Box
          sx={{ display: { xs: 'none', md: 'flex' } }}
          alignItems={'center'}
          justifyContent={'space-between'}
          width={'100%'}
          paddingLeft={'25%'}
        >
          {' '}
          <Box
            height={{ xs: '80vh', sm: '25px' }}
            component={'img'}
            src={gift}
            alt={'screenshot'}
          />
          <Box
            height={{ xs: '80vh', sm: '25px' }}
            component={'img'}
            src={like}
            alt={'screenshot'}
          />
          <Box
            height={{ xs: '80vh', sm: '30px' }}
            component={'img'}
            src={notification}
            alt={'screenshot'}
          />
        </Box>
        <Paper sx={{ padding: '5%', borderRadius: '20px' }}>
          <Box display={'flex'}>
            <MenuIcon sx={{ width: 33, height: 33, color: '#42AB9E' }} />
            <AccountCircleIcon sx={{ width: 33, height: 33, color: '#ccc' }} />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Header2;
