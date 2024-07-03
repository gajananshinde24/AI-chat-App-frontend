import React from 'react';
import Header from './Header';
import { Box, Toolbar } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Toolbar />
      <Box sx={{ mt: 8 }}>
        {children}
      </Box>
    </div>
  );
};

export default Layout;
