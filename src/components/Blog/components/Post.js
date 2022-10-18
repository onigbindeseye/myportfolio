import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

const posts = [
  {
    id: 3,
    title: 'Developing Civic Tech Solutions for Nigeria — My React Story',
    image: 'https://miro.medium.com/max/828/1*YEAJ5uOESBWvUUPhvobXzA.png',
    caption:
      'Switching into tech last year was based on the passion I had during my days in the university for graphic and web designs. As a creative person, while studying Economics in the university...',
    date: 'October 14, 2022',
    link:
      'https://medium.com/@seyeonigbinde/developing-civic-tech-solutions-for-nigeria-my-react-story-2213e7bcef69',
  },
  {
    id: 2,
    title: 'Career Path: My AWS Solutions Architect Journey',
    image: 'https://miro.medium.com/max/640/1*KidwL2Yi7rsV03I89YPD_w.png',
    caption:
      'After completing my web development training at the Bloom Institute of Technology (formerly Lambda School), I submitted over 150 job applications, had some interviews and as I was applying for jobs, I was still improving my portfolio.',
    date: 'May 29, 2022',
    link:
      'https://medium.com/@seyeonigbinde/career-path-my-aws-solutions-architect-journey-9256cbd7e7cd',
  },
  {
    id: 1,
    title: 'The Tech Switch: From Accounting to Web Development',
    image: 'https://miro.medium.com/max/828/1*eCw0b3SEu4jQ2LUdhszEfw.jpeg',
    caption:
      'I started my career in 2013 with Akintola Williams Deloitte as a Research Associate where I was able to prepare training materials and research papers on the International Financial Reporting Standards (IFRS).',
    date: 'August 26, 2021',
    link:
      'https://medium.com/@seyeonigbinde/the-tech-switch-from-accounting-to-web-development-910509c44918',
  },
];

const Post = () => {
  return (
    <Box padding={{ xs: '25% 0%', sm: '7% 0%' }}>
      <Typography
        variant="h3"
        fontWeight={700}
        color={'#43D8C9'}
        paddingBottom={'2%'}
      >
        Blog
      </Typography>
      <Box>
        <Grid container spacing={2}>
          {posts.map((post, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              marginTop={{ xs: '10%', sm: '2%' }}
            >
              <Card sx={{ maxWidth: 380, height: 520 }}>
                <CardActionArea component={'a'} href={post.link} target={'blank'}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={post.image}
                    alt="blog"
                  />
                  <CardContent>
                    <Typography
                      fontWeight={700}
                      variant="body2"
                      color={'#0D3446'}
                      padding={'2% 0%'}
                    >
                      {post.date}
                    </Typography>
                    <Typography
                      gutterBottom
                      fontWeight={700}
                      variant="h5"
                      component="div"
                      paddingBottom={'1%'}
                      color={'#43D8C9'}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      fontWeight={500}
                      variant="body2"
                      color={'#0D3446'}
                    >
                      {post.caption}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Post;
