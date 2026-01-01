import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';

const Home: React.FC = () => {
  return (
    <Box>
      <Navbar />
      
      {/* Carousel Section */}
      {/* <Box
        id="home"
        sx={{
          py: { xs: 3, sm: 4, md: 5 },
          px: { xs: 2, sm: 3, md: 4 },
          scrollMarginTop: '80px',
        }}
      >
        <Carousel />
      </Box> */}

      {/* Welcome Section */}
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
          >
            Welcome to your portfolio
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
