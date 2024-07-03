import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined"; 

import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { clearUser } from '../slices/userSlice';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const Sidebar = ({ onSidebarClick }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    onSidebarClick()
    setProfileAnchorEl(null);
  };
  const handleLogout = async () => {
    onSidebarClick()
    dispatch(clearUser());
    navigate('/');
  };

  return (
    <div style={{ width: '220px', position: 'fixed', height: '100vh', backgroundColor: '#3f51b5' }}>
      <List>
        <ListItem  component={Link} to="/main/chat" onClick={onSidebarClick} >
          <ListItemIcon>
            <ChatIcon style={{ fontSize: '40px', color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Chat" style={{ color: '#fff' }} />
        </ListItem>
        <ListItem  component={Link} to="/main/analyze" onClick={onSidebarClick} >
          <ListItemIcon>
            <TextSnippetIcon style={{ fontSize: '40px', color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Analyze Text" style={{ color: '#fff' }} onClick={onSidebarClick} />
        </ListItem>
        <ListItem  component={Link} to="/main/weather" onClick={onSidebarClick} >
          <ListItemIcon>
            <CloudQueueIcon style={{ fontSize: '40px', color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Weather" style={{ color: '#fff' }} />
        </ListItem>
        <ListItem  onClick={handleProfileClick}>
          <ListItemIcon>
            <AccountCircleIcon style={{ fontSize: '40px', color: '#fff' }}  />
          </ListItemIcon>
          <ListItemText primary="Profile" style={{ color: '#fff' }} />
        </ListItem>
      
      </List>
      <Menu
        anchorEl={profileAnchorEl}
        open={Boolean(profileAnchorEl)}
        onClose={handleProfileClose}
      >
        <MenuItem onClick={handleProfileClose } component={Link} to="/main/profile">
          View Profile
        </MenuItem>
        <MenuItem onClick={handleLogout }>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Sidebar;
