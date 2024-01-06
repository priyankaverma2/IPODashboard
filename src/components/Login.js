// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useTheme } from './ThemeContext';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { themeStyles } = useTheme();

  const handleLogin = () => {
    
  if (username==='priyanka'&& password==='priyanka') {
    onLogin();
    navigate('/dashboard');
  } else {
    setError('Invalid credentials');
  }
  };

  return (
    <div className='login-entire'  style={themeStyles}>
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label>
          
          <input
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />
        </label>
        <label>
          
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
        </label>
        <p className="error-message">{error}</p>
        <button type="button" onClick={handleLogin} className="login-button">
        Sign In
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
