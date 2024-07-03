import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';




const defaultTheme = createTheme();

 const UpdateProfile = () =>  {

    const { userInfo } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.put(`http://localhost:3003/api/v1/users/update-profile/${userInfo._id}`, {
            email,
            password,
            name,
            phoneNumber
          });
          
            dispatch(setUser(response.data));
            toast.success('Profile updated successfully!');
            
           

        } catch (err) {
          console.log('There was an error in register', err);
          toast.error(err.response.data.error);
        }
      };

      const handleBackClick = () => {
        navigate('/main/profile')
      };

      useEffect(() => {
       
          setName(userInfo.name);
          setEmail(userInfo.email);
          setPhoneNumber(userInfo.phoneNumber);

    }, [userInfo]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <EditIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="number"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              sx={{ mt: 1 }}
              onClick={handleBackClick}
            >
              Back
            </Button>
          
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}

export default UpdateProfile