// src/Header.js

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Text Analysis App
        </Typography>
        <IconButton
          component={Link}
          to="/chat"
          size="large"
          edge="end"
          color="inherit"
          aria-label="chat"
        >
          <ChatIcon />
        </IconButton>
        <IconButton
          component={Link}
          to="/analyze"
          size="large"
          edge="end"
          color="inherit"
          aria-label="analyze text"
        >
          <TextSnippetIcon />
        </IconButton>
        <IconButton
          component={Link}
          to="/profile"
          size="large"
          edge="end"
          color="inherit"
          aria-label="profile"
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
