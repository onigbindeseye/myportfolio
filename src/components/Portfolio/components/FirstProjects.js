import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { teal } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { portfolio } from '../../../static/portfolio';
import Pagination from '@mui/material/Pagination';

const FirstProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  const totalPages = Math.ceil(portfolio.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = portfolio.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box marginTop={{ xs: '25%', sm: '8%' }}>
      <Box>
        <Typography
          color={'#43D8C9'}
          variant={'h3'}
          paddingBottom={{ xs: '8%', sm: '3%' }}
          fontWeight={700}
        >
          Some Solutions I've Built
        </Typography>
      </Box>
      {currentProjects.map((portfolios, id) => (
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          margin={{ xs: '6% 0% 25% 0%', sm: '5% 0% 10% 0%' }}
          key={id}
          flexWrap={'wrap'}
        >
          <Box
            width={{ xs: '100%', sm: '50%' }}
            component={'img'}
            src={portfolios.imgpath}
            alt={'screenshot'}
            sx={{
              opacity: 0.5,
              '&:hover': {
                opacity: 1,
                backgroundColor: '#43D8C9',
              },
            }}
          />
          <Box width={{ xs: '100%', sm: '50%' }} marginRight={0}>
            <Box display={{ xs: 'none', sm: 'inline' }}>
              <Typography
                textAlign={'right'}
                variant={'h5'}
                color={'#43D8C9'}
                fontWeight={700}
                padding={'3% 0%'}
              >
                {portfolios.title}
              </Typography>
              <Box
                bgcolor={'#142850'}
                padding={'4% 3%'}
                position={'relative'}
                right={'10%'}
                width={'112%'}
              >
                <Typography
                  textAlign={'right'}
                  variant={'subtitle2'}
                  color={'#B7B7B7'}
                >
                  {portfolios.description}
                </Typography>
              </Box>
            </Box>
            <Box display={{ xs: 'inline', sm: 'none' }}>
              <Typography
                textAlign={'left'}
                variant={'h5'}
                color={'#43D8C9'}
                fontWeight={700}
                padding={'3% 0%'}
              >
                {portfolios.title}
              </Typography>
              <Typography
                textAlign={'left'}
                variant={'subtitle2'}
                color={'#D8DFE2'}
              >
                {portfolios.description}
              </Typography>
            </Box>
            <Box
              width={{ xs: '100%', sm: '70%' }}
              marginRight={0}
              marginTop={'2%'}
              display={'flex'}
              justifyContent={'space-between'}
              position="relative"
            >
              <Typography
                textAlign={'right'}
                variant={'subtitle2'}
                color={'#B7B7B7'}
                fontWeight={300}
              >
                {portfolios.stack1}
              </Typography>
              <Typography
                textAlign={'right'}
                variant={'subtitle2'}
                color={'#B7B7B7'}
                fontWeight={300}
              >
                {portfolios.stack2}
              </Typography>
              <Typography
                textAlign={'right'}
                variant={'subtitle2'}
                color={'#B7B7B7'}
                fontWeight={300}
              >
                {portfolios.stack3}
              </Typography>
              <Typography
                textAlign={'right'}
                variant={'subtitle2'}
                color={'#B7B7B7'}
                fontWeight={300}
              >
                {portfolios.stack4}
              </Typography>
              <Typography
                textAlign={'right'}
                variant={'subtitle2'}
                color={'#B7B7B7'}
                fontWeight={300}
              >
                {portfolios.stack5}
              </Typography>
            </Box>
            <Box
              width={{ xs: '30%', sm: '15%' }}
              marginRight={0}
              marginTop={'2%'}
              display={'flex'}
              justifyContent={'space-between'}
              position="relative"
            >
              <Avatar
                sx={{ bgcolor: teal[300], width: 28, height: 28 }}
                component="a"
                href={portfolios.github}
                target="blank"
              >
                <GitHubIcon fontSize="small" />
              </Avatar>
              <Avatar
                sx={{ bgcolor: teal[300], width: 28, height: 28 }}
                component="a"
                href={portfolios.web}
                target="blank"
              >
                <OpenInNewIcon fontSize="small" />
              </Avatar>
            </Box>
          </Box>
        </Box>
      ))}
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ bgcolor: '#43D8C9' }}
        />
      </Box>
    </Box>
  );
};

export default FirstProjects;
