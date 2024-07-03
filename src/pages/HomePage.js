// src/HomePage.js

import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';



const HomePage = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '20vh' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        AI chat <br/> and <br/> Sentiment Analysis of text
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Login to start
      </Typography>
   
      <Box mt={2}>
        <Button variant="outlined" color="primary" size="large" href="/login">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
