import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import { Route, BrowserRouter, Routes } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import AnalyseTextPage from './pages/AnalyseTextPage'
import App from './App';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';
import UpdateProfile from './pages/UpdateProfilePage';
import Weather from './components/Weather';
import 'semantic-ui-css/semantic.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>
        <App />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
         
          <Route path='' element={<ProtectedRoute />}>
            <Route path='/main' element={<MainPage />}>

              <Route path="/main/analyze" element={<AnalyseTextPage />} />
              <Route path="/main/profile" element={<ProfilePage />} />
              <Route path="/main/chat" element={<ChatPage />} />
              <Route path="/main/update-profile" element={<UpdateProfile />} />
              <Route path="/main/weather" element={<Weather />} />


            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
