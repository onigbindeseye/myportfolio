import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box margin={{ xs: '25% 0%', sm: '5% 0% 5% 0%' }}>
      <Typography
        variant={'h3'}
        color={'#43D8C9'}
        fontWeight={700}
        paddingBottom={'2%'}
      >
        About the Book
      </Typography>
      <Typography
        variant={'body1'}
        color={'#fff'}
        paddingBottom={{ xs: '5% ', sm: '2%' }}
      >
        <Typography
          component={'span'}
          variant="body1"
          color={'#43D8C9'}
          fontWeight={700}
        >
          "Switching To Tech: 10 Things To Know"
        </Typography>{' '}
        is a practical guide designed for individuals looking to transition into
        the technology industry. Whether you are switching careers or entering
        tech for the first time, this book offers valuable insights on how to
        navigate the complexities of the fast-paced tech world. Each chapter
        breaks down essential elements of the journey, from avoiding common
        mistakes to preparing for technical interviews, and highlights how
        developing both technical and soft skills is vital for long-term
        success. With a focus on actionable advice, this book aims to help
        readers carve out their niche, gain hands-on experience, and build
        meaningful relationships in the industry.
      </Typography>
      <Typography variant={'body1'} color={'#fff'}>
        In addition to technical proficiency, the book looks into critical areas
        often overlooked, such as overcoming imposter syndrome, maintaining
        work-life balance, and embracing continuous learning. Chapter by
        chapter, I shed light on both the technical and human aspects of the
        tech space, encouraging readers to prioritize personal growth and
        well-being alongside their career goals. Whether you are drawn to cloud
        computing, software development, or data science, "Switching To Tech"
        offers the roadmap you need to confidently make the leap into this
        ever-evolving field.
      </Typography>
    </Box>
  );
};

export default About;
