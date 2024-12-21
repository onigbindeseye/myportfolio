import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// const data = [
//   {
//     id: 1,
//     title: 'Overcome Impostor Syndrome',
//     summary:
//       'What is impostor syndrome?, what are the symptoms of importer syndrome that can be experienced by tech newbies, and the strategies for combating them...',
//   },
//   {
//     id: 2,
//     title: 'Know the “Don’ts”',
//     summary:
//       'Learn about the pitfalls that individuals that switch from non-tech roles into tech should avoid at the early days of their career...',
//   },
//   {
//     id: 3,
//     title: 'Carve a Niche',
//     summary:
//       'It is easy to get confused in the tech industry because there are several tech roles. However, you need to identify your own niche and focus...',
//   },
//   {
//     id: 4,
//     title: 'Learn Soft Skills',
//     summary:
//       'Develop your intangible qualities like effective communication, teamwork and collaboration, emotional intelligence, time management and resilience...',
//   },
//   {
//     id: 5,
//     title: 'Build Relationships',
//     summary:
//       'Tips on how to stay updated in the tech industry, networking with other professional, seeking for mentorship...',
//   },
//   {
//     id: 6,
//     title: 'Get Hands-on Experience',
//     summary:
//       'Learn about how you can build your hands-on experience in bits as this is crucial for your growth, development, and success in the industry... ',
//   },
//   {
//     id: 7,
//     title: 'Know How to Solve Technical Problems',
//     summary:
//       'Tips on how you can use the UPER strategy to solve technical challenges you encounter on your daily tasks in the tech industry...',
//   },
//   {
//     id: 8,
//     title: 'Embrace Continuous Learning',
//     summary:
//       'The tech industry is constantly evolving and continuous learning is important. Learn about the benefits of continuous learning and staying updated... ',
//   },
//   {
//     id: 9,
//     title: 'Prepare for Technical Interviews',
//     summary:
//       'For some roles in tech, you need to prove your abilities to your potential employer before getting hired. Learn some of the tips of getting prepared... ',
//   },
//   {
//     id: 10,
//     title: 'Maintain Work-Life Balance',
//     summary:
//       'Tips on how to achieve a work-life balance in the industry. Achieving a healthy work-life balance can be challenging but essential...',
//   },
//   {
//     id: 11,
//     title: 'Introduction to Cloud Computing',
//     summary:
//       'Learn about the foundation of cloud of computing, the deployment models, the service models, the various cloud roles...',
//   },
// ];

const data = [
  {
    id: 1,
    title: 'Overcome Impostor Syndrome',
    summary:
      'Discover what impostor syndrome is, the symptoms tech newbies might experience, and effective strategies to overcome it...',
  },
  {
    id: 2,
    title: 'Know the “Don’ts”',
    summary:
      'Understand the common mistakes individuals transitioning from non-tech to tech roles should avoid in the early stages of their career...',
  },
  {
    id: 3,
    title: 'Carve a Niche',
    summary:
      'The tech industry offers numerous roles, which can be overwhelming. Learn how to identify and focus on your niche...',
  },
  {
    id: 4,
    title: 'Learn Soft Skills',
    summary:
      'Develop essential qualities like effective communication, teamwork, emotional intelligence, time management, and resilience...',
  },
  {
    id: 5,
    title: 'Build Relationships',
    summary:
      'Discover tips for staying updated in the tech industry, networking with professionals, and seeking mentorship opportunities...',
  },
  {
    id: 6,
    title: 'Get Hands-on Experience',
    summary:
      'Explore ways to gain practical experience in small increments, which is crucial for growth, development, and success in the tech industry...',
  },
  {
    id: 7,
    title: 'Know How to Solve Technical Problems',
    summary:
      'Learn how to apply the UPER strategy to tackle technical challenges encountered in daily tasks in the tech industry...',
  },
  {
    id: 8,
    title: 'Embrace Continuous Learning',
    summary:
      'The tech industry is ever-evolving, making continuous learning essential. Understand its benefits and how to stay updated...',
  },
  {
    id: 9,
    title: 'Prepare for Technical Interviews',
    summary:
      'Some tech roles require demonstrating your abilities before being hired. Learn key tips for preparing effectively...',
  },
  {
    id: 10,
    title: 'Maintain Work-Life Balance',
    summary:
      'Explore strategies to achieve a healthy work-life balance in the tech industry, an essential but often challenging goal...',
  },
  {
    id: 11,
    title: 'Introduction to Cloud Computing',
    summary:
      'Gain foundational knowledge of cloud computing, including deployment models, service models, and various cloud-related roles...',
  },
];

const Content = () => {
  return (
    <Box margin={{ xs: '35% 0%', sm: '10% 0%' }}>
      <Typography
        variant={'h3'}
        color={'#43D8C9'}
        fontWeight={700}
        paddingBottom={'2%'}
      >
        Content of the Book
      </Typography>
      <Grid container spacing={2}>
        {data.map((details, index) => (
          <Grid
            item
            xs={12}
            md={3.8}
            key={index}
            marginTop={{ xs: '10%', sm: '2%' }}
            marginRight={{ xs: '0%', sm: '1%' }}
            marginLeft={{ xs: '4%', sm: '0%' }}
            padding={{ xs: '4%', sm: '4%' }}
            border={'2px solid #43D8C9 '}
            borderRadius={'20px'}
          >
            <Typography
              variant="h3"
              color="#43D8C9"
              fontWeight={700}
              textAlign={'left'}
              paddingBottom={{ xs: '4%', sm: '2%' }}
            >
              {details.id}
            </Typography>
            <Typography
              variant="h5"
              color="#43D8C9"
              textAlign={'left'}
              paddingBottom={{ xs: '4%', sm: '2%' }}
            >
              {details.title}
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              textAlign={'left'}
              paddingBottom={{ xs: '4%', sm: '2%' }}
            >
              {details.summary}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Content;
