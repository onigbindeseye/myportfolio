import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import design from 'images/design.svg';

const Intro = () => {
  return (
    <Box padding={{ xs: '25% 0%', sm: '9% 0% 0% 0%' }}>
      <Typography
        variant="h3"
        fontWeight={700}
        color={'#43D8C9'}
        paddingBottom={{ xs: '8%', sm: '3%' }}
      >
        About Me
      </Typography>
      <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
        <Box width={{ xs: '100%', sm: '50%' }} marginLeft={0}>
          <Typography
            variant="body1"
            color={'#D8DFE2'}
            paddingBottom={{ xs: '5%', sm: '3%' }}
          >
            Hello! My name is Oluseye, I love to design and build solutions. I
            am a DevOps Engineer and a Software Developer with 3 AWS
            Certifications. I have over 4 years experience in Tech and prior
            experience in Finance and Accounting. My passion for tech was based
            on the interest I had during my days in the university for graphic
            and web designs. As a creative person, while studying Economics in
            the university, I attended a program called Learn from the Best
            organized by some co-students where I learnt the introduction to
            graphics and web designing. I developed these skills further as I
            became comfortable with CorelDraw and Adobe Photoshop but I
            struggled with PHP for web development. I did more graphics
            designing in school and also earned some cash from it.
          </Typography>
          <Typography
            variant="body1"
            color={'#D8DFE2'}
            paddingBottom={{ xs: '5%', sm: '3%' }}
          >
            However, after I resigned from Banking and a personal business
            failed, I decided to go back to my passion for programming where I
            would be providing real solutions as I was initially solving
            problems that already had solution templates or formats which became
            boring to me. I had a training in Web Development and Computer
            Science with Lambda School (now Bloom Institute of Technology) to
            improve my skills in frontend & backend development.
          </Typography>
          <Typography
            variant="body1"
            color={'#D8DFE2'}
            paddingBottom={{ xs: '5%', sm: '3%' }}
          >
            I have been able to develop various solutions and projects using the
            following tech stacks;
          </Typography>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            width={{ xs: '100%', sm: '100%' }}
          >
            <Box width={{ xs: '100%', sm: '50%' }}>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                Javascript
              </Typography>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                React
              </Typography>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                Typescript
              </Typography>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                Material-UI
              </Typography>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                Python
              </Typography>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                Docker
              </Typography>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                Kubernetes
              </Typography>
            </Box>
            <Box width={{ xs: '100%', sm: '50%' }}>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                Nodejs
              </Typography>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                Express
              </Typography>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                PostgreSQL
              </Typography>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                AWS
              </Typography>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                Jenkins
              </Typography>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                Terraform
              </Typography>
              <Typography
                variant="body1"
                color={'#D8DFE2'}
                paddingBottom={{ xs: '3%', sm: '1%' }}
              >
                <Typography color={'#43D8C9'} component={'span'} variant={'h5'}>
                  &#8227;
                </Typography>
                Ansible
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          marginTop={{ xs: '20%', sm: '0%' }}
          width={{ xs: '100%', sm: '45%' }}
        >
          <img src={design} alt={'design_image'} width={'100%'} />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
