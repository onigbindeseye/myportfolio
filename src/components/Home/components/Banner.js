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
    <Box marginTop={'8%'}>
      <Box>
        <Typography
          color={'#43D8C9'}
          variant={'body1'}
          paddingBottom={'1%'}
        >
          Hi, my name is
        </Typography>
        <Typography
          color={'#D8DFE2'}
          variant={'h1'}
          fontWeight={700}
          paddingBottom={'1%'}
        >
          Oluseye Onigbinde.
        </Typography>
        <Typography
          color={'#B7B7B7'}
          variant={'h2'}
          fontWeight={700}
          paddingBottom={'1%'}
        >
          I design and build solutions.
        </Typography>
        <Box width={'70%'} marginLeft={0}>
          <Typography color={'#B7B7B7'} variant={'body1'}>
            I am a Web Developer trained at Lambda School with years of
            experience in Finance, Accounting, Financial Modelling, Financial
            Reporting and Treasury Management. My passion to create, innovate
            and solve problems made me developed interest in Web Development.
            Before joining Lambda School, I have worked in the financial
            services industry as a Financial Controller where I and my team
            managed the financials and cashflows of the bank efficiently and
            profitably.
          </Typography>
        </Box>
        <Box
          width={'20%'}
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
            href="'https://twitter.com/SeyeOni_Codes"
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
        <Box marginTop={'3%'}>
          <ColorButton component={'a'} variant="outlined">
            My Portfolio
          </ColorButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
