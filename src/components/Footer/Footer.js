import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Footer = () => {
  return (
    <Grid container spacing={2} marginTop={1}>
      <Grid item xs={12}>
        <Divider color={'#fff'} />
        <Box
          display="flex"
          justifyContent={'space-between'}
          alignItems={'center'}
          flexWrap={'wrap'}
          width={'100%'}
          marginTop={'2%'}
        >
          <Box width={{xs:'100%', sm:'80%'}}>
            <Typography align={'center'} variant={'subtitle2'} color="#fff">
            Desgined & Built by Onigbinde Oluseye Oluwatosin
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
