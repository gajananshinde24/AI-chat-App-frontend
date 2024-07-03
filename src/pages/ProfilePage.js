import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ width: 100, height: 100, mb: 2 }} alt="User Avatar" src={userInfo.avatar} />
        <Typography variant="h4" gutterBottom>
          {userInfo.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {userInfo.email}
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/main/update-profile" >
          Edit Profile
        </Button>
      </Paper>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Profile Details
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Name:</strong> {userInfo.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Email:</strong> {userInfo.email}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Phone Number:</strong> {userInfo.phoneNumber}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Bio
              </Typography>
              <Typography variant="body1">
                {userInfo.bio || 'No bio available'}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfilePage;
