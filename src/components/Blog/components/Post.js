import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

const posts = [
  {
    id: 6,
    title: 'AWS Developer Toolkits — Developing with AWS App Runner',
    image:
      'https://miro.medium.com/v2/resize:fit:828/format:webp/1*gveCM4jakz3U6Jm2ph438Q.png',
    caption:
      'AWS App Runner is a fully managed service that makes it easy for developers to quickly build, deploy, and scale web applications and APIs. It builds and deploys web applications automatically, load balances...',
    date: 'July 06, 2024',
    link:
      'https://medium.com/@seyeonigbinde/aws-developer-toolkits-developing-with-aws-app-runner-c62fb52acb72',
  },
  {
    id: 5,
    title: 'AWS Developer Toolkits — Developing with AWS Copilot',
    image:
      'https://miro.medium.com/v2/resize:fit:828/format:webp/1*zMqt-Nf293XFtkCMFhDweQ.png',
    caption:
      'AWS Copilot is an open-source Command Line Interface (CLI). It simplifies the process of building, releasing, and operating production-ready containerized apps on AWS App Runner, Amazon ECS...',
    date: 'July 01, 2024',
    link:
      'https://medium.com/@seyeonigbinde/aws-developer-toolkits-developing-with-aws-copilot-007063d5f9da',
  },
  {
    id: 4,
    title: 'AWS Developer Toolkits — Developing with AWS Cloud9',
    image:
      'https://miro.medium.com/v2/resize:fit:828/format:webp/1*o5E67_rntGlJr2KGPLMWww.png',
    caption:
      'VSCode, PyCharm, and IntelliJ IDEA are popular integrated development environments (IDEs) that offer robust features like code editing, debugging, and project management across various programming languages...',
    date: 'June 24, 2024',
    link:
      'https://medium.com/@seyeonigbinde/aws-developer-toolkits-developing-with-aws-cloud9-f8d1ecf12ce8',
  },
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
      'After completing my web development training at the Bloom Institute of Technology (formerly Lambda School), I submitted over 150 job applications and had some interviews because I was trying to leave the Civic Hive for international opportunities.',
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
        I write, sometimes
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
                <CardActionArea
                  component={'a'}
                  href={post.link}
                  target={'blank'}
                >
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
