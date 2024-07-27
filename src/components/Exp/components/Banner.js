import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import wallet from '../../../images/exp/wallet.png';
import aion from '../../../images/exp/aion.png';

const Banner = () => {
  return (
    <Box>
      <Box
        role="presentation"
        width={'33%'}
        marginLeft={{ xs: '0%', sm: '0%' }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" variant="h6">
            Your Profile
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            variant="h6"
          >
            Products
          </Link>
          <Typography color="text.primary" variant="h6" fontWeight={700}>
            Blocked Account
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        display={'flex'}
        marginTop={'4%'}
        width={'27%'}
        marginLeft={{ xs: '0%', sm: '0%' }}
      >
        <Box
          height={{ xs: '80vh', sm: '40px' }}
          component={'img'}
          src={wallet}
          alt={'screenshot'}
          sx={{
            objectFit: 'cover',
          }}
        />{' '}
        <Typography fontWeight={700} variant={'h4'}>
          Blocked Account
        </Typography>
      </Box>
      <Typography marginTop={'3%'} fontWeight={700} variant="h5">
        Onigbinde Oluseye
      </Typography>
      <Box marginTop={'1%'}>
        <Box
          height={{ xs: '80vh', sm: '30px' }}
          component={'img'}
          src={aion}
          alt={'screenshot'}
          sx={{
            objectFit: 'cover',
            filter: 'grayscale(100%)',
          }}
        />
        <Box
          bgcolor={'#F8C05F'}
          padding={'1% 2%'}
          width={'24%'}
          borderRadius={'10px'}
          marginLeft={{ xs: '0%', sm: '0%' }}
        >
          <Typography
            variant="subtitle1"
            color={'#fff'}
            paddingBottom={'1%'}
            fontWeight={700}
          >
            Bank Account Balance
          </Typography>
          <Typography variant="h4" color={'#000'} fontWeight={700}>
            &#8364; 12,553
          </Typography>
        </Box>
        <Typography
          variant="h4"
          color={'#000'}
          fontWeight={700}
          paddingTop={'6%'}
        >
          Blocked Account Details
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        marginTop={'3%'}
      >
        <Box
          padding={'1% 2%'}
          marginTop={'2%'}
          borderRadius={'20px'}
          border={'2px solid #ccc'}
          width={'25%'}
          marginRight={'2%'}
        >
          <Typography
            variant="h6"
            textAlign={'left'}
            paddingBottom={'20%'}
            color={'#aaa'}
            fontWeight={500}
          >
            Total Amount Required
          </Typography>
          <Typography
            variant="h5"
            color={'#000'}
            fontWeight={700}
            textAlign={'right'}
          >
            &#8364; 12,553
          </Typography>
        </Box>
        <Box
          padding={'1% 2%'}
          marginTop={'2%'}
          borderRadius={'20px'}
          border={'2px solid #ccc'}
          width={'25%'}
          marginRight={'2%'}
        >
          <Typography
            variant="h6"
            textAlign={'left'}
            paddingBottom={'20%'}
            color={'#aaa'}
            fontWeight={500}
          >
            Monthly Blocked Amount
          </Typography>
          <Typography
            variant="h5"
            color={'#000'}
            fontWeight={700}
            textAlign={'right'}
          >
            &#8364; 1,027
          </Typography>
        </Box>
        <Box
          padding={'1% 2%'}
          marginTop={'2%'}
          borderRadius={'20px'}
          border={'2px solid #ccc'}
          width={'25%'}
          marginRight={'2%'}
        >
          <Typography
            variant="h6"
            textAlign={'left'}
            paddingBottom={'20%'}
            color={'#aaa'}
            fontWeight={500}
          >
            Planned Length of Stay
          </Typography>
          <Typography
            variant="h5"
            color={'#000'}
            fontWeight={700}
            textAlign={'right'}
          >
            12
          </Typography>
        </Box>
        <Box
          padding={'2%'}
          marginTop={'2%'}
          borderRadius={'20px'}
          border={'2px solid #ccc'}
          width={'25%'}
          marginRight={'2%'}
        >
          <Typography
            variant="h5"
            textAlign={'center'}
            padding={' 5% 7%'}
            color={'#42AB9E'}
            fontWeight={500}
          >
            CHANGE DETAILS
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
