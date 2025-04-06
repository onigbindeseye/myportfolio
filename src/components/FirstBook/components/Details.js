import React from 'react';
import Box from '@mui/material/Box';
import { Link, Typography } from '@mui/material';
import cover from '../../../images/book_cover2.png';
import selar from '../../../images/selar.jpg';
import amazon from '../../../images/kindle.jpg';

const Details = () => {
  return (
    <Box margin={{ xs: '20% 0%', sm: '8% 0%' }}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap={'wrap'}
        width={'100%'}
      >
        <Box width={{ xs: '100%', sm: '45%' }}>
          <Box
            width={{ xs: '100%', sm: '70%' }}
            height={550}
            component={'img'}
            src={cover}
            alt={'book_cover'}
            // objectFit={'cover'}
          />
        </Box>
        <Box
          width={{ xs: '100%', sm: '55%' }}
          paddingTop={{ xs: '10%', sm: '0%' }}
        >
          <Typography
            color={'#D8DFE2'}
            variant={'h3'}
            fontWeight={700}
            paddingBottom={{ xs: '5%', sm: '3%' }}
            textAlign={'center'}
          >
            Switching To Tech: 10 Things To Know
          </Typography>
          <Typography
            color={'#D8DFE2'}
            variant={'h5'}
            fontWeight={700}
            paddingBottom={{ xs: '5%', sm: '3%' }}
            textAlign={'center'}
          >
            A pocket guide for tech newbies
          </Typography>
          <Typography
            color={'#D8DFE2'}
            variant={'body1'}
            fontWeight={700}
            paddingBottom={{ xs: '10%', sm: '6%' }}
            textAlign={'center'}
          >
            With Introduction to Cloud Computing
          </Typography>
          <Typography
            color={'#D8DFE2'}
            variant={'h5'}
            fontWeight={700}
            paddingBottom={{ xs: '10%', sm: '8%' }}
            textAlign={'center'}
          >
            By: Oluseye Onigbinde
          </Typography>
          <Typography
            color={'#D8DFE2'}
            variant={'h5'}
            fontWeight={700}
            paddingBottom={{ xs: '5%', sm: '2%' }}
            textAlign={'center'}
          >
            Available Now On:
          </Typography>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            width={{ xs: '100%', sm: '70%' }}
          >
            <Box width={{ xs: '100%', sm: '45%' }}>
              <Link component="a" href="https://selar.co/45753k" target="blank">
                <Box
                  width={{ xs: '100%', sm: '100%' }}
                  height={60}
                  component={'img'}
                  src={selar}
                  alt={'selar'}
                  objectFit={'cover'}
                />
              </Link>
            </Box>
            <Box width={{ xs: '100%', sm: '70%' }} marginLeft={'5%'}>
              <Link
                component="a"
                href="https://www.amazon.com/dp/B0DRDLCD33"
                target="blank"
              >
                <Box
                  width={{ xs: '100%', sm: '100%' }}
                  height={60}
                  component={'img'}
                  src={amazon}
                  alt={'amazon'}
                  objectFit={'cover'}
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
