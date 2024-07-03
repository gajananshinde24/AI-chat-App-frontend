import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';


const MainPage = () => {

  const { userInfo } = useSelector((state) => state.user);
  const [quote, setQuote] = useState('')
  const [error, setError] = useState(null);

  const [sidebarClicked, setSidebarClicked] = useState(false);

  const handleSidebarClick = () => {
    setSidebarClicked(true);
  };

 
  useEffect(() => {
    const getQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data);
      } catch (error) {
        console.error('Error fetching quote:', error);
        setError('Failed to fetch quote. Please try again later.');
      }
    };

    setSidebarClicked(false);
    getQuote();
  }, []);


  
  return (

    <Box sx={{ display: 'flex' }}>
    <Sidebar onSidebarClick={handleSidebarClick} />

    <Box sx={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
      {!sidebarClicked && (
        <Container>
          <Typography variant="h5" gutterBottom>
            Welcome {userInfo.name} to our site, <br/> 1) chat with AI, <br/> 2) analyse sentiment of text, <br/> 3) check weather condition of your location
          </Typography>
          <br/>
          <br/>
          <br/>
          <br/>
          <Typography variant="h4" gutterBottom>
            "{quote.content}"
          </Typography>
          <Typography variant="h5" gutterBottom>
            - {quote.author}
          </Typography>
        </Container>
      )}
      <Outlet />
    </Box>
  </Box>
  );
};

export default MainPage;


