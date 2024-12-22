import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { teal } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import personal from '../../../images/personal.png';

const Banner = () => {
  const ColorButton = styled(Button)(() => ({
    color: '#43D8C9',
    width: 150,
    height: 45,
    fontWeight: 600,
    fontSize: '16px',
    textTransform: 'capitalize',
    borderColor: '#43D8C9',
    '&:hover': {
      color: '#fff',
      borderColor: '#43D8C9',
    },
  }));

  return (
    <Box marginTop={{ xs: '25%', sm: '8%' }}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap={'wrap'}
        width={'100%'}
      >
        <Box width={{ xs: '100%', sm: '60%' }}>
          <Typography
            color={'#43D8C9'}
            variant={'body1'}
            paddingBottom={{ xs: '5%', sm: '1%' }}
          >
            Hi, my name is
          </Typography>
          <Box display={{ xs: 'none', sm: 'inline' }}>
            <Typography
              color={'#D8DFE2'}
              variant={'h1'}
              fontWeight={700}
              paddingBottom={{ xs: '5%', sm: '1%' }}
            >
              Oluseye O. Onigbinde.
            </Typography>
          </Box>
          <Box display={{ xs: 'inline', sm: 'none' }}>
            <Typography
              color={'#D8DFE2'}
              variant={'h2'}
              fontWeight={700}
              paddingBottom={{ xs: '5%', sm: '1%' }}
            >
              Oluseye O. Onigbinde.
            </Typography>
          </Box>
          <Box
            width={{ xs: '100%', sm: '40%' }}
            display={{ xs: 'inline', sm: 'none' }}
          >
            {' '}
            <Box
              width={{ xs: '100%', sm: '100%' }}
              height={{ xs: '60vh', sm: '650px' }}
              component={'img'}
              src={personal}
              alt={'oluseye_onigbinde'}
              objectFit={'cover'}
            />
          </Box>
          <Typography
            color={'#B7B7B7'}
            variant={'h4'}
            fontWeight={700}
            paddingTop={{ xs: '5%', sm: '0%' }}
            paddingBottom={{ xs: '5%', sm: '1%' }}
          >
            I design and build solutions.
          </Typography>
          <Box width={{ xs: '100%', sm: '100%' }} marginLeft={0}>
            <Typography
              color={'#B7B7B7'}
              variant={'body1'}
              paddingBottom={{ xs: '5%', sm: '1%' }}
              paddingRight={{ xs: '0%', sm: '8%' }}
            >
              I am a results-driven professional with a unique blend of
              expertise in AWS Cloud Engineering, Software Development, and
              Finance. My career journey has taken me from the world of finance
              and accounting to the dynamic realm of technology. I am passionate
              about leveraging my diverse background to create innovative
              solutions that bridge the gap between business and technology.
            </Typography>
          </Box>
          <Box
            width={{ xs: '60%', sm: '25%' }}
            marginLeft={0}
            marginTop={'2%'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <Avatar
              sx={{ bgcolor: teal[300] }}
              component="a"
              href="https://github.com/onigbindeseye"
              target="blank"
            >
              <GitHubIcon />
            </Avatar>
            <Avatar
              sx={{ bgcolor: teal[300] }}
              component="a"
              href="'https://twitter.com/SeyeintheCloud"
              target="blank"
            >
              <TwitterIcon />
            </Avatar>
            <Avatar
              sx={{ bgcolor: teal[300] }}
              component="a"
              href="https://www.linkedin.com/in/onigbindeseye/"
              target="blank"
            >
              <LinkedInIcon />
            </Avatar>
            <Avatar
              sx={{ bgcolor: teal[300] }}
              component="a"
              href="mailto:seyeonigbinde@gmail.com"
              target="blank"
            >
              <EmailIcon />
            </Avatar>
          </Box>
          <Box marginTop={{ xs: '8%', sm: '3%' }}>
            <ColorButton component={'a'} href="/portfolio" variant="outlined">
              My Portfolio
            </ColorButton>
          </Box>
        </Box>
        <Box
          width={{ xs: '100%', sm: '40%' }}
          display={{ xs: 'none', sm: 'inline' }}
        >
          {' '}
          <Box
            width={{ xs: '100%', sm: '100%' }}
            height={{ xs: '70vh', sm: '650px' }}
            component={'img'}
            src={personal}
            alt={'oluseye_onigbinde'}
            objectFit={'cover'}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
