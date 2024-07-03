import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../slices/userSlice';


const ProtectedRoute = () => {
  const dispatch = useDispatch();
  

  

  

  const handleLoginSuccess = async () => {
    try {
      const response = await axios.get('http://localhost:3003/auth/login/success', {withCredentials: true});
      if (response.data.user) {
        dispatch(setUser(response.data.user));
        
      }
    } catch (err) {
    
    
      console.log('Error fetching user data after login:', err);
      //toast.error('Error fetching user data after login');
    }
  };
  useEffect(() => {
    //handleLoginSuccess()
   
})


  const userInfo =  JSON.parse(localStorage.getItem('userInfo'))
  console.log('User Info:', userInfo);  
  return userInfo ? <Outlet/> : <Navigate to='/login' replace />
};

export default ProtectedRoute;
