// src/Pages/Auth/Auth.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../../services/userService';
import { toast } from 'react-toastify';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button, TextField, Paper, Box, Typography, Tabs, Tab } from '@material-ui/core';
import '../../Styles/Auth.css';

function Auth() {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    try {
      setLoading(true);
      await loginUser(email, password);
      toast.success('Successfully logged in!');
      navigate('/home');
    } catch (error: any) {
      toast.error(error.message || 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !displayName || !username) {
      toast.error('Please fill in all fields');
      return;
    }
    
    if (username.includes(' ')) {
      toast.error('Username cannot contain spaces');
      return;
    }
    
    try {
      setLoading(true);
      await registerUser(email, password, displayName, username);
      toast.success('Account created successfully!');
      navigate('/home');
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth">
      <Paper className="auth__container">
        <Box className="auth__logo">
          <TwitterIcon fontSize="large" className="auth__twitterIcon" />
        </Box>
        
        <Typography variant="h5" component="h1" className="auth__title">
          {activeTab === 0 ? 'Sign in to Twitter' : 'Join Twitter today'}
        </Typography>
        
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange} 
          indicatorColor="primary"
          textColor="primary"
          centered
          className="auth__tabs"
        >
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        
        {activeTab === 0 ? (
          <form onSubmit={handleLogin} className="auth__form">
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth 
              className="auth__button"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="auth__form">
            <TextField
              label="Name"
              variant="outlined"
              type="text"
              fullWidth
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              label="Username"
              variant="outlined"
              type="text"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              required
              helperText="Username cannot contain spaces"
            />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth 
              className="auth__button"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Sign up'}
            </Button>
          </form>
        )}
      </Paper>
    </div>
  );
}

export default Auth;