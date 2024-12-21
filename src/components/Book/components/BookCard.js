import React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import cover from '../../../images/book_cover.png';

const posts = [
  {
    id: 1,
    title: 'Switching To Tech: 10 Things To Know',
    image: cover,
    link: '/switching-to-tech-10-things-to-know',
  },
];

const BookCard = () => {
  return (
    <Box padding={{ xs: '25% 0%', sm: '7% 0%' }}>
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
              <Card sx={{ maxWidth: 380, height: 590 }}>
                <CardActionArea component={'a'} href={post.link}>
                  <CardMedia
                    component="img"
                    // height="425"
                    image={post.image}
                    alt="Switching_To_Tech_Book_Cover"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BookCard;
